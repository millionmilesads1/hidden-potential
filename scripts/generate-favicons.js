// Hidden Potential — Favicon Generator
// Pure Node.js, zero external dependencies.
// Generates favicon.ico (32x32), icon.png (192x192), apple-icon.png (180x180)
// Run: node scripts/generate-favicons.js

const zlib = require('zlib');
const fs   = require('fs');
const path = require('path');

// ─── Brand colours ───────────────────────────────────────────────────────────
const BG  = [0x2D, 0x1B, 0x4E, 0xFF]; // #2D1B4E  deep purple
const TXT = [0xD4, 0xA8, 0x43, 0xFF]; // #D4A843  gold

// ─── Bitmap glyphs (7-wide × 9-tall for H, 6-wide × 9-tall for P) ────────────
//  Bold, clean — each row is an array of 0/1 column values
const GLYPH_H = [
  [1,1,0,0,0,1,1],
  [1,1,0,0,0,1,1],
  [1,1,0,0,0,1,1],
  [1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1],
  [1,1,0,0,0,1,1],
  [1,1,0,0,0,1,1],
  [1,1,0,0,0,1,1],
  [1,1,0,0,0,1,1],
];
const GLYPH_P = [
  [1,1,1,1,1,0],
  [1,1,0,0,1,1],
  [1,1,0,0,1,1],
  [1,1,0,0,1,1],
  [1,1,1,1,1,0],
  [1,1,0,0,0,0],
  [1,1,0,0,0,0],
  [1,1,0,0,0,0],
  [1,1,0,0,0,0],
];

// ─── Pixel-data generator ─────────────────────────────────────────────────────
// size  — canvas size in pixels (square)
// scale — pixel size of each bitmap "dot"
function generatePixels(size, scale) {
  const data = new Uint8Array(size * size * 4);

  // Fill background
  for (let i = 0; i < size * size; i++) {
    data[i * 4]     = BG[0];
    data[i * 4 + 1] = BG[1];
    data[i * 4 + 2] = BG[2];
    data[i * 4 + 3] = BG[3];
  }

  // Rounded corners  (radius proportional to scale)
  const radius = Math.round(7 * scale);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = Math.min(x, size - 1 - x);
      const dy = Math.min(y, size - 1 - y);
      if (dx < radius && dy < radius) {
        const dist = Math.sqrt(
          (radius - dx - 0.5) ** 2 + (radius - dy - 0.5) ** 2
        );
        if (dist > radius) {
          data[(y * size + x) * 4 + 3] = 0; // transparent corner
        }
      }
    }
  }

  // Layout math
  const hW   = 7 * scale;
  const pW   = 6 * scale;
  const gH   = 9 * scale;
  const gap  = 2 * scale;
  const totW = hW + gap + pW;

  const startX = Math.round((size - totW) / 2);
  const startY = Math.round((size - gH)   / 2);

  // Draw a single glyph
  function drawGlyph(glyph, rows, cols, offsetX) {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (!glyph[row][col]) continue;
        for (let sy = 0; sy < scale; sy++) {
          for (let sx = 0; sx < scale; sx++) {
            const px = offsetX + col * scale + sx;
            const py = startY  + row * scale + sy;
            if (px < 0 || px >= size || py < 0 || py >= size) continue;
            const idx = (py * size + px) * 4;
            if (data[idx + 3] === 0) continue; // skip transparent corners
            data[idx]     = TXT[0];
            data[idx + 1] = TXT[1];
            data[idx + 2] = TXT[2];
            data[idx + 3] = TXT[3];
          }
        }
      }
    }
  }

  drawGlyph(GLYPH_H, 9, 7, startX);
  drawGlyph(GLYPH_P, 9, 6, startX + hW + gap);

  return data;
}

// ─── CRC-32 ───────────────────────────────────────────────────────────────────
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) crc = CRC_TABLE[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

// ─── PNG encoder ─────────────────────────────────────────────────────────────
function pngChunk(type, data) {
  const lenBuf  = Buffer.allocUnsafe(4); lenBuf.writeUInt32BE(data.length, 0);
  const typeData = Buffer.concat([Buffer.from(type), data]);
  const crcBuf   = Buffer.allocUnsafe(4); crcBuf.writeUInt32BE(crc32(typeData), 0);
  return Buffer.concat([lenBuf, typeData, crcBuf]);
}

function makePNG(size, pixelData) {
  const sig  = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdr = Buffer.allocUnsafe(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = ihdr[11] = ihdr[12] = 0;

  // Raw scanlines: [filter_byte=0, R, G, B, A, ...]
  const raw = Buffer.allocUnsafe(size * (1 + size * 4));
  for (let y = 0; y < size; y++) {
    raw[y * (1 + size * 4)] = 0; // None filter
    for (let x = 0; x < size; x++) {
      const s = (y * size + x) * 4;
      const d = y * (1 + size * 4) + 1 + x * 4;
      raw[d]     = pixelData[s];
      raw[d + 1] = pixelData[s + 1];
      raw[d + 2] = pixelData[s + 2];
      raw[d + 3] = pixelData[s + 3];
    }
  }

  return Buffer.concat([
    sig,
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

// ─── ICO encoder (embeds PNG directly) ───────────────────────────────────────
function makeICO(png32) {
  const dataOffset = 6 + 16; // header + one dir-entry

  const hdr = Buffer.allocUnsafe(6);
  hdr.writeUInt16LE(0, 0); // reserved
  hdr.writeUInt16LE(1, 2); // type: icon
  hdr.writeUInt16LE(1, 4); // 1 image

  const dir = Buffer.allocUnsafe(16);
  dir[0] = 32; dir[1] = 32; dir[2] = 0; dir[3] = 0; // w, h, colors, reserved
  dir.writeUInt16LE(1, 4);              // planes
  dir.writeUInt16LE(32, 6);            // bit depth
  dir.writeUInt32LE(png32.length, 8);  // image data size
  dir.writeUInt32LE(dataOffset, 12);   // offset to image data

  return Buffer.concat([hdr, dir, png32]);
}

// ─── Generate & write ─────────────────────────────────────────────────────────
const publicDir = path.join(__dirname, '..', 'public');

const p32  = generatePixels(32,  1);
const png32 = makePNG(32, p32);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), makeICO(png32));
console.log('✓ public/favicon.ico  (32 × 32)');

const p192 = generatePixels(192, 6);
fs.writeFileSync(path.join(publicDir, 'icon.png'), makePNG(192, p192));
console.log('✓ public/icon.png     (192 × 192)');

const p180 = generatePixels(180, 5);
fs.writeFileSync(path.join(publicDir, 'apple-icon.png'), makePNG(180, p180));
console.log('✓ public/apple-icon.png (180 × 180)');

console.log('\nAll favicon files generated successfully.');

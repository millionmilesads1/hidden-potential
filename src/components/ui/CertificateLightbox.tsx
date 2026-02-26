"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  imageSrc: string;
  imageAlt: string;
}

export default function CertificateLightbox({ imageSrc, imageAlt }: Props) {
  const [open, setOpen] = useState(false);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      {/* ── Clickable thumbnail ─────────────────────────────────── */}
      <button
        onClick={() => setOpen(true)}
        className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all cursor-zoom-in block text-left"
        style={{
          width: 200,
          border: "1px solid rgba(45,27,105,0.18)",
        }}
        aria-label="Click to view full-size certificate"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={200}
          height={280}
          className="object-cover w-full h-auto"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        <span className="absolute inset-x-0 bottom-0 py-2 text-center text-[11px] font-bold text-white bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
          Click to enlarge
        </span>
      </button>

      {/* ── View Certificate link ───────────────────────────────── */}
      <button
        onClick={() => setOpen(true)}
        className="mt-2 text-[13px] font-semibold hover:underline transition-colors"
        style={{ color: "#7C3AED" }}
      >
        View Certificate →
      </button>

      {/* ── Lightbox overlay ────────────────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="NEP 2020 Certificate — full size"
        >
          <div
            className="relative max-w-3xl w-full rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold transition-colors"
              style={{
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(6px)",
              }}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Full-size certificate */}
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={900}
              height={1260}
              className="w-full h-auto block"
              priority
            />

            {/* Caption */}
            <p className="text-center text-xs py-2 bg-black/60 text-white/50">
              NEP 2020 Implementation Certificate · IGNOU &nbsp;·&nbsp; Press Esc or click outside to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}

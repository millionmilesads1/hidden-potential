import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hidden Potential — Life Skills Training Academy in Delhi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #1A0F3C 0%, #6F00FF 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circle top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(124,58,237,0.15)",
          }}
        />
        {/* Decorative circle bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(124,58,237,0.1)",
          }}
        />

        {/* Gold accent line */}
        <div
          style={{
            width: 64,
            height: 3,
            background: "#D4A843",
            borderRadius: 2,
            marginBottom: 28,
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#D4A843",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          HIDDEN POTENTIAL
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 54,
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 880,
            marginBottom: 24,
          }}
        >
          Life Skills Training Academy
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.72)",
            textAlign: "center",
            maxWidth: 680,
            lineHeight: 1.5,
            marginBottom: 40,
          }}
        >
          Structured pathways for students, women & professionals in Delhi
        </div>

        {/* Trust stats row */}
        <div
          style={{
            display: "flex",
            gap: 40,
            alignItems: "center",
          }}
        >
          {[
            ["14+", "Years"],
            ["5000+", "Trained"],
            ["200+", "Trainers"],
          ].map(([num, label]) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#D4A843",
                  lineHeight: 1,
                }}
              >
                {num}
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* URL tag bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            fontSize: 14,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.05em",
          }}
        >
          hiddenpotentialskills.com
        </div>
      </div>
    ),
    { ...size }
  );
}

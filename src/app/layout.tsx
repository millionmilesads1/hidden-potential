import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/ui/mobile-bottom-nav";

export const metadata: Metadata = {
  title: {
    default: "Hidden Potential — Life Skills Training Academy in Delhi",
    template: "%s | Hidden Potential",
  },
  description:
    "Structured life skills programs for students, women & professionals in Delhi. Assessment-based placement. 14+ years experience. 5000+ trained.",
  metadataBase: new URL("https://hiddenpotentialskills.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* ── Desktop + tablet sticky header nav ──────────────────────── */}
        <Navbar />

        {/* ── Page content ─────────────────────────────────────────────
            pb-24 on mobile creates clearance so content is never hidden
            behind the fixed tubelight bottom bar.
            md:pb-0 removes the extra padding on desktop. */}
        {/* pt-20 = 80px — clears the floating pill navbar (top:16px + ~56px height).
            pb-24 md:pb-0 clears the mobile tubelight bottom bar. */}
        <main className="flex-1 pt-20 pb-24 md:pb-0">
          {/* ── Tagline banner — scrolls with page, appears on every page ── */}
          <div
            style={{
              backgroundColor: "#2D1B4E",
              borderBottom: "1px solid rgba(13, 148, 136, 0.3)",
              letterSpacing: "0.5px",
            }}
            className="w-full py-[10px] px-4 text-center text-[13px]"
          >
            <span style={{ color: "#FFFFFF", fontWeight: 400 }}>
              Our Core Strategy:&nbsp;
            </span>
            <span style={{ color: "#D4A843", fontStyle: "italic" }}>
              &ldquo;Deeper the Roots, Stronger the Branches&rdquo;
            </span>
          </div>

          {children}
        </main>

        <Footer />

        {/* ── Mobile spacer — prevents footer bottom row from hiding behind
            the fixed tubelight bar (tubelight is ~72px tall + mb-4 gap). */}
        <div className="md:hidden h-24" aria-hidden="true" />

        {/* ── Mobile-only tubelight bottom nav (hidden on md+) ─────────
            MobileBottomNav is a "use client" wrapper — required because
            Lucide icon function refs cannot cross the RSC/Client boundary
            from a Server Component layout.                               */}
        <div className="md:hidden">
          <MobileBottomNav />
        </div>
      </body>
    </html>
  );
}

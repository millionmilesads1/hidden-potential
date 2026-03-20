import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Lora, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta-sans",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
  variable: "--font-lora",
  display: "swap",
});
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/ui/mobile-bottom-nav";
import LayoutClient from "@/components/layout/LayoutClient";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Hidden Potential — Life Skills Training Academy in Delhi",
    template: "%s | Hidden Potential",
  },
  description:
    "Structured life skills programs for students, women & professionals in Delhi. Assessment-based placement. 14+ years experience. 5000+ trained.",
  metadataBase: new URL("https://hiddenpotentialskills.com"),
  openGraph: {
    siteName: "Hidden Potential",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hidden Potential — Life Skills Training Academy in Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(plusJakartaSans.variable, dmSans.variable, lora.variable, "font-sans", geist.variable)}>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        {/* ── Desktop + tablet sticky header nav ──────────────────────── */}
        {/* ── Skip navigation — keyboard accessibility (WCAG 2.4.1 SC) ─────
            Visually hidden until focused; lets keyboard/screen-reader users
            jump directly to main content, bypassing the repeated navbar.   */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:rounded-md focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
          style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)" }}
        >
          Skip to main content
        </a>

        <Navbar />

        {/* ── Page content ─────────────────────────────────────────────
            pb-24 on mobile creates clearance so content is never hidden
            behind the fixed tubelight bottom bar.
            md:pb-0 removes the extra padding on desktop. */}
        {/* pt-[92px] = 92px — clears the floating pill navbar (top:16px + ~60px height + 16px gap).
            pb-24 md:pb-0 clears the mobile tubelight bottom bar. */}
        <main id="main-content" tabIndex={-1} className="flex-1 pt-[92px] pb-24 md:pb-0 outline-none">
          {/* ── Tagline banner — scrolls with page, appears on every page ── */}
          <div
            style={{
              background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)",
              borderBottom: "1px solid rgba(109, 40, 217, 0.3)",
              letterSpacing: "0.5px",
            }}
            className="w-full py-[10px] px-4 text-center text-[13px]"
          >
            <span style={{ color: "#FFFFFF", fontWeight: 400 }}>
              Our Core Strategy:&nbsp;
            </span>
            <span style={{ color: "#C8A951", fontStyle: "italic" }}>
              &ldquo;Deeper the Roots, Stronger the Branches&rdquo;
            </span>
          </div>

          <LayoutClient>{children}</LayoutClient>
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

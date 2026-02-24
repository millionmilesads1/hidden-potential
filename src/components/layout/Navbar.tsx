"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const programs = [
  { label: "An Enlightened Learner (Ages 8–21)",  href: "/programs/enlightened-learner" },
  { label: "Communication Mastery (Ages 8–65)",   href: "/programs/communication-mastery" },
  { label: "Self Mastery for Women (28+)",         href: "/programs/self-mastery-women" },
  { label: "Train the Trainer Certification",      href: "/programs/train-the-trainer" },
  { label: "Art Therapy for Healing",              href: "/programs/art-therapy" },
];

const navLinks = [
  { label: "Home",        href: "/" },
  { label: "Assessment",  href: "/assessment" },
  { label: "For Schools", href: "/for/schools" },
  { label: "About",       href: "/about" },
  { label: "Blog",        href: "/blog" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Scroll listener — tightens shadow + removes transparency after 10px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pillStyle: React.CSSProperties = {
    background:          scrolled ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.95)",
    backdropFilter:      "blur(12px)",
    WebkitBackdropFilter:"blur(12px)",
    borderRadius:        "9999px",
    boxShadow:           scrolled
      ? "0 8px 32px rgba(0,0,0,0.14)"
      : "0 4px 20px rgba(0,0,0,0.08)",
    padding:             "10px 20px",
    transition:          "background 0.25s ease, box-shadow 0.25s ease",
  };

  return (
    <>
      {/* ── Floating pill header ─────────────────────────────────────────── */}
      <header
        style={{ position: "fixed", top: "16px", left: "24px", right: "24px", zIndex: 50 }}
      >
        {/* ── Pill container ─────────────────────────────────────────────── */}
        <div style={pillStyle} className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 select-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-[17px] font-extrabold tracking-tight text-primary-teal">
              Hidden
            </span>
            <span className="text-[17px] font-extrabold tracking-tight text-primary-navy">
              {" "}Potential
            </span>
          </Link>

          {/* Desktop nav — centered via absolute trick */}
          <ul
            className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-primary-navy/70 hover:text-primary-navy hover:bg-gray-100 transition-colors px-3 py-1.5 rounded-full whitespace-nowrap block"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Pathways dropdown — group-hover with pt-2 invisible bridge */}
            <li className="relative group">
              <button
                aria-haspopup="true"
                className="flex items-center gap-1 text-sm font-semibold text-primary-navy/70 hover:text-primary-navy hover:bg-gray-100 transition-colors px-3 py-1.5 rounded-full"
              >
                Pathways
                {/* Arrow rotates via CSS group-hover — no JS state needed */}
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/*
                Hover bridge wrapper
                ─────────────────────────────────────────────────────────────────
                • Positioned at top-full so it starts exactly below the button
                • pt-2 (8px) = transparent padding that acts as an invisible hover
                  bridge — cursor can cross the gap without leaving the group
                • w-72 ensures the full dropdown width is part of the hover zone
                • Visibility + opacity controlled by CSS (no JS state = no gap snap)
                • duration-200 fades in on enter; delay-[150ms] defers fade-out
                  so the dropdown doesn't snap shut on accidental cursor drift
              */}
              <div
                className="
                  absolute top-full left-1/2 -translate-x-1/2
                  pt-2 w-72
                  invisible opacity-0
                  group-hover:visible group-hover:opacity-100
                  transition-all duration-200
                  delay-[150ms] group-hover:delay-[0ms]
                "
              >
                {/* Visible dropdown box — sits below the 8px bridge */}
                <div
                  className="py-2"
                  style={{
                    background:           "rgba(255,255,255,0.98)",
                    backdropFilter:       "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderRadius:         "18px",
                    boxShadow:            "0 8px 32px rgba(0,0,0,0.12)",
                    border:               "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {programs.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-4 py-2.5 text-sm font-medium text-primary-navy hover:bg-teal-light hover:text-primary-teal transition-colors rounded-lg mx-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/contact#book-evaluation"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-full transition-colors whitespace-nowrap"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book Free Evaluation
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <svg className="w-5 h-5 text-primary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-primary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown — card below the pill ─────────────────────── */}
        {mobileOpen && (
          <div
            className="md:hidden mt-2 py-3 px-2"
            style={{
              background:          "rgba(255,255,255,0.98)",
              backdropFilter:      "blur(12px)",
              WebkitBackdropFilter:"blur(12px)",
              borderRadius:        "24px",
              boxShadow:           "0 8px 32px rgba(0,0,0,0.12)",
              border:              "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <nav className="flex flex-col gap-0.5" style={{ fontFamily: "var(--font-display)" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-4 text-base font-semibold text-primary-navy hover:bg-gray-50 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Pathways section */}
              <div className="px-4 pt-2 pb-1">
                <p className="text-xs font-bold text-primary-navy/40 uppercase tracking-widest mb-2 pl-1">
                  Pathways
                </p>
                <div className="flex flex-col gap-0.5">
                  {programs.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 px-3 text-sm font-medium text-charcoal hover:text-primary-teal hover:bg-teal-light rounded-lg transition-colors"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact#book-evaluation"
                onClick={() => setMobileOpen(false)}
                className="mt-2 mx-2 py-3 text-center text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-full transition-colors"
              >
                Book Free Evaluation
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

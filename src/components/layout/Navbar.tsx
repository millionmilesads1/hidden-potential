"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const programs = [
  { label: "An Enlightened Learner (Ages 8–21)",  href: "/programs/enlightened-learner" },
  { label: "Communication Mastery (Ages 8–65)",   href: "/programs/communication-mastery" },
  { label: "Self Mastery for Women (28+)",         href: "/programs/self-mastery-women" },
  { label: "Train the Trainer Certification",      href: "/programs/train-the-trainer" },
  { label: "Art Therapy for Healing",              href: "/programs/art-therapy" },
];

const forLinks = [
  { label: "Schools",       href: "/for/schools" },
  { label: "Professionals", href: "/for/professionals" },
  { label: "Young Adults",  href: "/for/young-adults" },
];

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "Assessment", href: "/assessment" },
  { label: "About",      href: "/about" },
  { label: "Gallery",    href: "/gallery" },
  { label: "FAQ",        href: "/#faq" },
  { label: "Blog",       href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [pathwaysOpen,  setPathwaysOpen]  = useState(false);
  const [forOpen,       setForOpen]       = useState(false);

  const pathwaysRef = useRef<HTMLLIElement>(null);
  const forRef      = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape key closes all menus / dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setPathwaysOpen(false);
        setForOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close a dropdown when focus leaves its container
  const handleDropdownBlur =
    (setter: (v: boolean) => void, ref: React.RefObject<HTMLLIElement | null>) =>
    (e: React.FocusEvent) => {
      if (ref.current && !ref.current.contains(e.relatedTarget as Node)) {
        setter(false);
      }
    };

  const pillStyle: React.CSSProperties = {
    background:           scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.92)",
    backdropFilter:       "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderRadius:         "9999px",
    border:               scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(0,0,0,0.04)",
    boxShadow:            scrolled
      ? "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)"
      : "0 4px 20px rgba(0,0,0,0.06)",
    padding:              "10px 20px",
    transition:           "background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
  };

  return (
    <>
      <header
        style={{ position: "fixed", top: "16px", left: "24px", right: "24px", zIndex: 50 }}
      >
        <div style={pillStyle} className="flex items-center justify-between">

          {/* Logo — Playfair Display, editorial weight */}
          <Link
            href="/"
            aria-label="Hidden Potential — home"
            className="flex items-center shrink-0 select-none cursor-pointer"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span
              className="text-[17px] font-bold tracking-tight"
              style={{ color: "#C8A951" }}
            >
              Hidden
            </span>
            <span
              className="text-[17px] font-bold tracking-tight"
              style={{ color: "#7C3AED" }}
            >
              {" "}Potential
            </span>
          </Link>

          {/* Desktop nav — centered via absolute trick */}
          <nav
            aria-label="Main navigation"
            className="hidden md:block absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ul className="flex items-center gap-0.5" role="list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href === "/#faq" && pathname === "/");
                return (
                  <motion.li
                    key={link.href}
                    className="relative"
                    initial="rest"
                    whileHover="hovered"
                    animate="rest"
                  >
                    <Link
                      href={link.href}
                      className="nav-dropdown-link text-sm font-medium cursor-pointer transition-colors px-3 py-1.5 rounded-full whitespace-nowrap block relative"
                      style={{
                        opacity: isActive ? 1 : 0.75,
                        color: isActive ? "#7C3AED" : undefined,
                        textShadow: isActive
                          ? "0 0 20px rgba(124,58,237,0.45)"
                          : "none",
                      }}
                    >
                      {link.label}
                    </Link>
                    {/* Animated underline — scaleX grows from left on hover, stays for active */}
                    <motion.span
                      className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full pointer-events-none"
                      style={{ background: "#7C3AED", originX: 0 }}
                      variants={{
                        rest:    { scaleX: isActive ? 1 : 0 },
                        hovered: { scaleX: 1 },
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  </motion.li>
                );
              })}

              {/* Pathways dropdown — disclosure pattern */}
              <li
                className="relative group"
                ref={pathwaysRef}
                onBlur={handleDropdownBlur(setPathwaysOpen, pathwaysRef)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={pathwaysOpen}
                  aria-controls="pathways-dropdown"
                  onClick={() => { setPathwaysOpen(!pathwaysOpen); setForOpen(false); }}
                  className="flex items-center gap-1 text-sm font-medium transition-colors px-3 py-1.5 rounded-full cursor-pointer"
                  style={{ color: "rgba(28,28,46,0.7)" }}
                >
                  Pathways
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${pathwaysOpen ? "rotate-180" : ""} group-hover:rotate-180`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  id="pathways-dropdown"
                  className={`
                    absolute top-full left-1/2 -translate-x-1/2
                    pt-2 w-72
                    transition-all duration-200
                    ${pathwaysOpen
                      ? "visible opacity-100"
                      : "invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 delay-[150ms] group-hover:delay-[0ms] group-focus-within:delay-[0ms]"}
                  `}
                >
                  <div
                    className="py-2"
                    style={{
                      background:           "rgba(255,255,255,0.98)",
                      backdropFilter:       "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      borderRadius:         "18px",
                      boxShadow:            "0 8px 32px rgba(0,0,0,0.12)",
                      border:               "1px solid rgba(0,0,0,0.07)",
                    }}
                  >
                    {programs.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setPathwaysOpen(false)}
                        className="nav-dropdown-link block px-4 py-2.5 text-sm font-medium transition-colors rounded-lg mx-1 cursor-pointer"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* For dropdown — disclosure pattern */}
              <li
                className="relative group"
                ref={forRef}
                onBlur={handleDropdownBlur(setForOpen, forRef)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={forOpen}
                  aria-controls="for-dropdown"
                  onClick={() => { setForOpen(!forOpen); setPathwaysOpen(false); }}
                  className="flex items-center gap-1 text-sm font-medium transition-colors px-3 py-1.5 rounded-full cursor-pointer"
                  style={{ color: "rgba(28,28,46,0.7)" }}
                >
                  For
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${forOpen ? "rotate-180" : ""} group-hover:rotate-180`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  id="for-dropdown"
                  className={`
                    absolute top-full left-1/2 -translate-x-1/2
                    pt-2 w-56
                    transition-all duration-200
                    ${forOpen
                      ? "visible opacity-100"
                      : "invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 delay-[150ms] group-hover:delay-[0ms] group-focus-within:delay-[0ms]"}
                  `}
                >
                  <div
                    className="py-2"
                    style={{
                      background:           "rgba(255,255,255,0.98)",
                      backdropFilter:       "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      borderRadius:         "18px",
                      boxShadow:            "0 8px 32px rgba(0,0,0,0.12)",
                      border:               "1px solid rgba(0,0,0,0.07)",
                    }}
                  >
                    {forLinks.map((f) => (
                      <Link
                        key={f.href}
                        href={f.href}
                        onClick={() => setForOpen(false)}
                        className="nav-dropdown-link block px-4 py-2.5 text-sm font-medium transition-colors rounded-lg mx-1 cursor-pointer"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {f.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <motion.div
              whileHover={{ scale: 1.06, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Link
                href="/contact#book-evaluation"
                className="btn-teal inline-flex items-center min-h-[44px] px-5 py-2 text-sm font-semibold text-white rounded-full whitespace-nowrap cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Book Free Consultation
              </Link>
            </motion.div>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden p-2 min-h-[44px] min-w-[44px] rounded-full hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-center"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-2 py-3 px-2"
            style={{
              background:           "rgba(255,255,255,0.98)",
              backdropFilter:       "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderRadius:         "24px",
              boxShadow:            "0 8px 32px rgba(0,0,0,0.12)",
              border:               "1px solid rgba(0,0,0,0.07)",
              maxHeight:            "calc(100svh - 160px)",
              overflowY:            "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-0.5 pb-6" style={{ fontFamily: "var(--font-body)" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-base font-medium rounded-xl transition-colors min-h-[44px] flex items-center cursor-pointer"
                  style={{ color: "#7C3AED" }}
                >
                  {link.label}
                </Link>
              ))}

              <div className="px-4 pt-2 pb-1">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2 pl-1" style={{ color: "#C8A951" }} aria-hidden="true">
                  Pathways
                </p>
                <div className="flex flex-col gap-0.5" role="list" aria-label="Pathways">
                  {programs.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2.5 px-3 text-sm font-medium rounded-lg transition-colors min-h-[44px] flex items-center cursor-pointer"
                      style={{ color: "#2D2D2D" }}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 pt-2 pb-1">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2 pl-1" style={{ color: "#C8A951" }} aria-hidden="true">
                  For
                </p>
                <div className="flex flex-col gap-0.5" role="list" aria-label="For">
                  {forLinks.map((f) => (
                    <Link
                      key={f.href}
                      href={f.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2.5 px-3 text-sm font-medium rounded-lg transition-colors min-h-[44px] flex items-center cursor-pointer"
                      style={{ color: "#2D2D2D" }}
                    >
                      {f.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact#book-evaluation"
                onClick={() => setMobileOpen(false)}
                className="mt-2 mx-2 py-3.5 text-center text-sm font-semibold text-white rounded-full transition-colors min-h-[44px] flex items-center justify-center cursor-pointer"
                style={{ background: "#7C3AED", fontFamily: "var(--font-body)" }}
              >
                Book Free Consultation
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

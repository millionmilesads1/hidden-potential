"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const heroStats = [
  { value: "14+",        label: "Years Experience" },
  { value: "5,000+",     label: "Individuals Trained" },
  { value: "200+",       label: "Trainers Developed" },
  { value: "Josh Talks", label: "Speaker" },
  { value: "NEP 2020",   label: "Certified · IGNOU" },
];

// ── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
};

const slideRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden:   {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const statsContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.65 } },
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const transition = { duration: 0.6, ease };
const transitionFast = { duration: 0.45, ease };

// ── Component ─────────────────────────────────────────────────────────────────

function Chevron({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, skip all animations
  const shouldAnimate = !prefersReducedMotion;

  return (
    <section
      className="relative overflow-hidden grain-overlay"
      style={{
        background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "500px", height: "500px",
          background: "radial-gradient(circle at center, rgba(124,58,237,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "380px", height: "380px",
          background: "radial-gradient(circle at center, rgba(109,40,217,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left — Animated text ── */}
          <motion.div
            variants={shouldAnimate ? staggerContainer : undefined}
            initial={shouldAnimate ? "hidden" : false}
            animate="visible"
          >
            {/* Pre-label */}
            <motion.p
              variants={shouldAnimate ? fadeUp : undefined}
              transition={transitionFast}
              className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
              style={{ color: "#C8A951", fontFamily: "var(--font-body)" }}
            >
              Transformational Life Skills Academy · Delhi NCR
            </motion.p>

            {/* H1 */}
            <motion.h1
              variants={shouldAnimate ? fadeUp : undefined}
              transition={transition}
              className="font-bold text-white leading-[1.1] mb-4"
              style={{
                fontFamily: "var(--font-accent)",
                fontStyle: "italic",
                fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
              }}
            >
              &ldquo;I have never let my{" "}
              <span style={{ color: "#ffffff", textShadow: "0 0 18px rgba(255,255,255,0.65), 0 0 36px rgba(255,255,255,0.3)" }}>
                schooling
              </span>{" "}
              interfere with my{" "}
              <span style={{ color: "#ffffff", textShadow: "0 0 18px rgba(255,255,255,0.65), 0 0 36px rgba(255,255,255,0.3)" }}>
                education
              </span>.&rdquo;
            </motion.h1>

            {/* Attribution */}
            <motion.p
              variants={shouldAnimate ? fadeIn : undefined}
              transition={{ ...transitionFast, delay: 0.05 }}
              className="mb-8 text-white/70 font-semibold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem" }}
            >
              — Mark Twain
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={shouldAnimate ? fadeUp : undefined}
              transition={transition}
              className="mb-10 leading-relaxed"
              style={{
                color: "#ffffff",
                fontSize: "1.0625rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Structured transformational pathways for students, women,
              professionals and future trainers. Assessment-based. Measurable.
              Real.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={shouldAnimate ? fadeUp : undefined}
              transition={transition}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <Link
                href="/assessment"
                className="btn-teal inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-white"
                style={{
                  padding: "14px 32px",
                  fontSize: "0.9375rem",
                  fontFamily: "var(--font-body)",
                  minHeight: "52px",
                }}
              >
                Take the Assessment
                <Chevron className="w-4 h-4" />
              </Link>
              <Link
                href="#programs"
                className="btn-outline-hero inline-flex items-center justify-center rounded-xl font-semibold"
                style={{
                  padding: "14px 32px",
                  fontSize: "0.9375rem",
                  fontFamily: "var(--font-body)",
                  minHeight: "52px",
                }}
              >
                Explore Pathways
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={shouldAnimate ? statsContainer : undefined}
              initial={shouldAnimate ? "hidden" : false}
              animate="visible"
              className="flex flex-wrap gap-x-8 gap-y-5 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {heroStats.map((s) => (
                <motion.div
                  key={s.value}
                  variants={shouldAnimate ? fadeUp : undefined}
                  transition={transitionFast}
                  className="flex flex-col"
                >
                  <span
                    className="font-bold leading-none text-white"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-xs mt-1.5 uppercase tracking-wide"
                    style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}
                  >
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right — Animated image ── */}
          <motion.div
            variants={shouldAnimate ? slideRight : undefined}
            initial={shouldAnimate ? "hidden" : false}
            animate="visible"
            transition={{ ...transition, delay: 0.2 }}
            className="hidden md:block relative w-full overflow-hidden rounded-2xl"
          >
            <div className="relative w-full" style={{ height: "520px" }}>
              <Image
                src="/images/students/supreet-kaur.jpeg"
                alt="Supreet Kaur, founder of Hidden Potential life skills academy, Delhi NCR"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(26,15,60,0.4) 0%, transparent 100%)" }}
                aria-hidden="true"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

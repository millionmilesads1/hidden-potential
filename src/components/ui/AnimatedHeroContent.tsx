"use client";

/**
 * AnimatedHeroContent — Animated left column of the hero section.
 * Features:
 *   • Word-by-word headline drop (y: -80, rotate, spring stagger 0.08s)
 *   • Subtext slides in from left (x: -60) at 0.6s delay
 *   • CTA buttons scale from 0 with spring bounce at 0.8s delay
 *   • Stats row: staggered count-up animation triggered on scroll into view
 */

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import Link from "next/link";
import { letterDrop, headlineContainer } from "@/lib/animations";

// ── Headline words ────────────────────────────────────────────────────────────
// Mirrors the exact text rendered in page.tsx with glow styling on key words
const headlineWords: Array<{ word: string; glow: boolean }> = [
  { word: "\u201cI",           glow: false },
  { word: "have",              glow: false },
  { word: "never",             glow: false },
  { word: "let",               glow: false },
  { word: "my",                glow: false },
  { word: "schooling",         glow: true  },
  { word: "interfere",         glow: false },
  { word: "with",              glow: false },
  { word: "my",                glow: false },
  { word: "education.\u201d",  glow: true  },
];

// ── Stats ─────────────────────────────────────────────────────────────────────
type NumStat  = { num: number; suffix: string; label: string; comma?: boolean };
type TextStat = { text: string; label: string };
type Stat = NumStat | TextStat;

const stats: Stat[] = [
  { num: 14,   suffix: "+", label: "Years Experience" },
  { num: 5000, suffix: "+", label: "Individuals Trained", comma: true },
  { num: 200,  suffix: "+", label: "Trainers Developed" },
  { text: "Josh Talks", label: "Speaker" },
  { text: "NEP 2020",   label: "Certified \u00B7 IGNOU" },
];

// ── CountUp ───────────────────────────────────────────────────────────────────
function CountUp({ end, suffix, comma }: { end: number; suffix: string; comma?: boolean }) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, end, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        const n = Math.round(v);
        setDisplay(comma ? n.toLocaleString("en-IN") : String(n));
      },
    });
    return ctrl.stop;
  }, [inView, end, comma]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

// ── Chevron ───────────────────────────────────────────────────────────────────
function Chevron() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

// ── Motion-enhanced Link ──────────────────────────────────────────────────────
const MotionLink = motion(Link);

// ── Main component ────────────────────────────────────────────────────────────
export default function AnimatedHeroContent() {
  const headlineDelay = headlineWords.length * 0.08 + 0.1;

  return (
    <div>
      {/* Pre-label */}
      <motion.p
        className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
        style={{ color: "#C8A951", fontFamily: "var(--font-body)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Transformational Life Skills Academy &middot; Delhi NCR
      </motion.p>

      {/* H1 — word-by-word drop from y: -80 */}
      <motion.h1
        className="font-bold text-white leading-[1.1] mb-4"
        style={{
          fontFamily: "var(--font-accent)",
          fontStyle: "italic",
          fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
        }}
        variants={headlineContainer}
        initial="hidden"
        animate="visible"
        aria-label="\u201cI have never let my schooling interfere with my education.\u201d"
      >
        {headlineWords.map(({ word, glow }, i) => (
          <React.Fragment key={i}>
            <motion.span
              className="inline-block"
              variants={letterDrop}
              style={
                glow
                  ? {
                      color: "#ffffff",
                      textShadow:
                        "0 0 18px rgba(255,255,255,0.65), 0 0 36px rgba(255,255,255,0.3)",
                    }
                  : undefined
              }
            >
              {word}
            </motion.span>
            {/* non-breaking space keeps words separated with inline-block */}
            {i < headlineWords.length - 1 && "\u00A0"}
          </React.Fragment>
        ))}
      </motion.h1>

      {/* Attribution */}
      <motion.p
        className="mb-8 text-white/70 font-semibold tracking-widest uppercase"
        style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: headlineDelay }}
      >
        &mdash; Mark Twain
      </motion.p>

      {/* Subtitle — slides from left */}
      <motion.p
        className="mb-10 leading-relaxed"
        style={{
          color: "#ffffff",
          fontSize: "1.0625rem",
          fontFamily: "var(--font-body)",
        }}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 15,
          delay: headlineDelay + 0.1,
        }}
      >
        Structured transformational pathways for students, women,
        professionals and future trainers. Assessment-based. Measurable.
        Real.
      </motion.p>

      {/* CTA buttons — spring bounce from scale 0 */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-14"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: headlineDelay + 0.2,
        }}
      >
        <MotionLink
          href="/assessment"
          className="btn-teal inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-white"
          style={{
            padding: "14px 32px",
            fontSize: "0.9375rem",
            fontFamily: "var(--font-body)",
            minHeight: "52px",
          }}
          whileHover={{
            scale: 1.08,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.94, transition: { duration: 0.05 } }}
        >
          Take the Assessment
          <Chevron />
        </MotionLink>

        <MotionLink
          href="#programs"
          className="btn-outline-hero inline-flex items-center justify-center rounded-xl font-semibold"
          style={{
            padding: "14px 32px",
            fontSize: "0.9375rem",
            fontFamily: "var(--font-body)",
            minHeight: "52px",
          }}
          whileHover={{
            scale: 1.08,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.94, transition: { duration: 0.05 } }}
        >
          Explore Pathways
        </MotionLink>
      </motion.div>

      {/* Stats row — staggered count-up */}
      <motion.div
        className="flex flex-wrap gap-x-8 gap-y-5 pt-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: headlineDelay + 0.4,
            },
          },
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="flex flex-col"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 100, damping: 15 },
              },
            }}
          >
            <span
              className="font-bold leading-none text-white"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem" }}
            >
              {"num" in s ? (
                <CountUp end={s.num} suffix={s.suffix} comma={s.comma} />
              ) : (
                s.text
              )}
            </span>
            <span
              className="text-xs mt-1.5 uppercase tracking-wide"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontFamily: "var(--font-body)",
              }}
            >
              {s.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

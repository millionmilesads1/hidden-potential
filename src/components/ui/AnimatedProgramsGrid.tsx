"use client";

/**
 * AnimatedProgramsGrid — Bento grid of program cards with:
 *   • Staggered entrance from y:80 (0.15s between cards)
 *   • Hover: scale 1.05, y: -6, shadow lift (spring physics)
 *   • Tap: scale 0.98
 * Preserves the exact col-span layout from page.tsx.
 */

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export type ProgramCard = {
  name: string;
  ages: string;
  tagline: string;
  desc?: string;
  href: string;
  accent: string;
  lightBg: string;
  borderBase: string;
  hoverClass: string;
};

const MotionLink = motion(Link);

const hoverProps = {
  whileHover: {
    scale: 1.03,
    y: -6,
    boxShadow: "0 24px 60px rgba(0,0,0,0.14)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  whileTap: { scale: 0.98 },
} as const;

function Chevron({ size = "3.5" }: { size?: string }) {
  return (
    <svg
      className={`w-${size} h-${size}`}
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

export default function AnimatedProgramsGrid({
  programs,
}: {
  programs: ProgramCard[];
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  const cardVariant = (i: number) => ({
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 60,
        damping: 15,
        delay: i * 0.15,
      },
    },
  });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-6 gap-4">

      {/* AEL — Featured, 4/6 cols, taller */}
      <MotionLink
        href={programs[0].href}
        className={`group md:col-span-4 rounded-2xl p-8 flex flex-col justify-between ${programs[0].hoverClass}`}
        style={{
          background: programs[0].lightBg,
          border: `1px solid ${programs[0].borderBase}`,
          minHeight: "300px",
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={cardVariant(0)}
        {...hoverProps}
      >
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                background: `${programs[0].accent}18`,
                color: programs[0].accent,
                fontFamily: "var(--font-body)",
              }}
            >
              {programs[0].ages}
            </span>
            <span
              className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                background: `${programs[0].accent}0D`,
                color: `${programs[0].accent}99`,
                fontFamily: "var(--font-body)",
              }}
            >
              Featured Program
            </span>
          </div>
          <h3
            className="font-bold mb-3 leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              color: "#2D1B69",
            }}
          >
            {programs[0].name}
          </h3>
          <p
            className="mb-4 leading-relaxed"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              color: programs[0].accent,
              fontSize: "1rem",
            }}
          >
            {programs[0].tagline}
          </p>
          {programs[0].desc && (
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#6B6B6B", fontFamily: "var(--font-body)" }}
            >
              {programs[0].desc}
            </p>
          )}
        </div>
        <div
          className="inline-flex items-center gap-2 text-sm font-semibold mt-6"
          style={{ color: programs[0].accent, fontFamily: "var(--font-body)" }}
        >
          Explore Pathway
          <Chevron />
        </div>
      </MotionLink>

      {/* Communication — 2/6 cols */}
      <MotionLink
        href={programs[1].href}
        className={`group md:col-span-2 rounded-2xl p-7 flex flex-col justify-between ${programs[1].hoverClass}`}
        style={{
          background: programs[1].lightBg,
          border: `1px solid ${programs[1].borderBase}`,
          minHeight: "300px",
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={cardVariant(1)}
        {...hoverProps}
      >
        <div>
          <span
            className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block"
            style={{
              background: `${programs[1].accent}18`,
              color: programs[1].accent,
              fontFamily: "var(--font-body)",
            }}
          >
            {programs[1].ages}
          </span>
          <h3
            className="font-bold mb-2 leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              color: "#2D1B69",
            }}
          >
            {programs[1].name}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              color: programs[1].accent,
            }}
          >
            {programs[1].tagline}
          </p>
        </div>
        <div
          className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5"
          style={{ color: programs[1].accent, fontFamily: "var(--font-body)" }}
        >
          Explore <Chevron size="3.5" />
        </div>
      </MotionLink>

      {/* Row 2: Women, TTT, Art Therapy — 2 cols each */}
      {programs.slice(2).map((prog, idx) => (
        <MotionLink
          key={prog.name}
          href={prog.href}
          className={`group md:col-span-2 rounded-2xl p-7 flex flex-col justify-between ${prog.hoverClass}`}
          style={{
            background: prog.lightBg,
            border: `1px solid ${prog.borderBase}`,
            minHeight: "220px",
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariant(idx + 2)}
          {...hoverProps}
        >
          <div>
            <span
              className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block"
              style={{
                background: `${prog.accent}18`,
                color: prog.accent,
                fontFamily: "var(--font-body)",
              }}
            >
              {prog.ages}
            </span>
            <h3
              className="font-bold mb-2 leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                color: "#2D1B69",
              }}
            >
              {prog.name}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                color: prog.accent,
              }}
            >
              {prog.tagline}
            </p>
          </div>
          <div
            className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5"
            style={{ color: prog.accent, fontFamily: "var(--font-body)" }}
          >
            Explore <Chevron size="3.5" />
          </div>
        </MotionLink>
      ))}
    </div>
  );
}

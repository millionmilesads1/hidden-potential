/**
 * PROGRAM PAGE SHARED COMPONENTS
 * ─────────────────────────────────────────────────────────────────────────────
 * Reusable building blocks for all 5 program pages.
 * Every program page imports from here to maintain visual consistency.
 *
 * Exports:
 *  Types:      DomainCardData | PathwayLevelData | AssessmentStepData | ProgramCtaData
 *  Atoms:      ProgramSectionLabel | SkillChip | OutcomeItem | FormatBadge
 *  Molecules:  DomainCard | PathwayLevelCard | AssessmentStep
 *  Organisms:  ProgramCTASection
 */

import type { ReactNode } from "react";
import Link from "next/link";

// ── TypeScript Interfaces ─────────────────────────────────────────────────────

export interface DomainCardData {
  num: string;           // "01" | "02" | "03" | "04"
  title: string;
  desc: string;
  skills: string[];      // 3–5 skill chips
  accent: "teal" | "gold" | "navy";
}

export interface PathwayLevelData {
  name: string;          // "HP Foundation" | "HP Growth Series" | "HP Mastery Track"
  duration: string;      // "3 Months" | "6 Months" | "12 Months"
  desc: string;
  accent: "teal" | "gold" | "white";
}

export interface AssessmentStepData {
  num: string;           // "01" – "05"
  title: string;
  desc: string;
}

export interface ProgramCtaData {
  headline: string;
  subtext: string;
  cta1Label: string;
  cta1Href: string;
  cta2Label: string;
  cta2Href: string;
  crossSellText?: string;
  crossSellHref?: string;
  crossSellLabel?: string;
}

// ── Accent Colour Maps ────────────────────────────────────────────────────────

const domainAccent = {
  teal: {
    header:     "bg-primary-teal",
    headerText: "text-white",
    numText:    "text-white/50",
    chip:       "bg-teal-light text-primary-navy",
    border:     "border-primary-teal/15",
  },
  gold: {
    header:     "bg-primary-gold",
    headerText: "text-primary-navy",
    numText:    "text-primary-navy/40",
    chip:       "bg-gold-light text-gold-dark",
    border:     "border-primary-gold/20",
  },
  navy: {
    header:     "bg-primary-navy",
    headerText: "text-white",
    numText:    "text-white/40",
    chip:       "bg-navy-light text-primary-navy",
    border:     "border-primary-navy/15",
  },
} as const;

const pathwayAccent = {
  teal:  { dot: "bg-primary-teal",  label: "text-primary-teal",  border: "border-primary-teal/30"  },
  gold:  { dot: "bg-primary-gold",  label: "text-primary-gold",  border: "border-primary-gold/40"  },
  white: { dot: "bg-white/70",      label: "text-white",         border: "border-white/20"         },
} as const;

// ── Atom: ProgramSectionLabel ─────────────────────────────────────────────────
// Small ALL-CAPS label above every section H2

export function ProgramSectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-widest mb-3 ${
        light ? "text-primary-gold" : "text-primary-teal"
      }`}
    >
      {children}
    </p>
  );
}

// ── Atom: SkillChip ───────────────────────────────────────────────────────────
// Small teal rounded pill used in the 13-skill flowing layout

export function SkillChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3.5 py-1.5 text-xs font-semibold text-primary-teal bg-teal-light rounded-full border border-primary-teal/15">
      {label}
    </span>
  );
}

// ── Atom: OutcomeItem ─────────────────────────────────────────────────────────
// Teal checkmark bullet used in Expected Outcomes

export function OutcomeItem({
  text,
  linkHref,
  linkLabel,
}: {
  text: string;
  linkHref?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-primary-teal flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-sm text-charcoal leading-relaxed">
        {text}
        {linkHref && linkLabel && (
          <>
            {" "}
            <Link
              href={linkHref}
              className="text-primary-teal hover:text-teal-dark font-semibold transition-colors"
            >
              {linkLabel} →
            </Link>
          </>
        )}
      </p>
    </div>
  );
}

// ── Atom: FormatBadge ─────────────────────────────────────────────────────────
// Offline / Online / Hybrid pill

export function FormatBadge({ label }: { label: string }) {
  return (
    <span className="px-4 py-2 text-sm font-semibold text-primary-navy bg-navy-light rounded-md border border-primary-navy/10">
      {label}
    </span>
  );
}

// ── Molecule: DomainCard ──────────────────────────────────────────────────────
// One of the 4 skill domain cards — coloured header + skills list

export function DomainCard({ data }: { data: DomainCardData }) {
  const a = domainAccent[data.accent];
  const hoverClass = data.accent === "gold" ? "card-service-gold" : "";
  return (
    <div
      className={`card-service ${hoverClass}`}
    >
      <div style={{ background: "white", borderRadius: "calc(1.5rem - 5px)", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)" }}>
        {/* Coloured header */}
        <div className={`${a.header} px-5 py-4`}>
          <span className={`text-[11px] font-bold tabular-nums ${a.numText}`}>
            {data.num}
          </span>
          <h3 className={`text-base font-bold ${a.headerText} mt-0.5 leading-snug`} style={{ fontFamily: "var(--font-display)" }}>
            {data.title}
          </h3>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(45,45,45,0.65)", fontFamily: "var(--font-body)" }}>{data.desc}</p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {data.skills.map((s) => (
              <span
                key={s}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${a.chip}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Molecule: PathwayLevelCard ────────────────────────────────────────────────
// One of the 3 pathway levels — used inside a flex row with connectors between

export function PathwayLevelCard({ data }: { data: PathwayLevelData }) {
  const a = pathwayAccent[data.accent];
  return (
    <div
      className={`flex-1 p-7 border ${a.border} flex flex-col items-center text-center`}
      style={{
        background: "rgba(255,255,255,0.07)",
        borderRadius: "1.5rem",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.04)",
        transition: "background 0.5s cubic-bezier(0.32,0.72,0,1)",
      }}
    >
      <div className={`w-3 h-3 rounded-full ${a.dot} mb-4 flex-shrink-0`} />
      <p className={`text-xs font-bold uppercase tracking-widest ${a.label} mb-2`} style={{ letterSpacing: "0.15em" }}>
        {data.name}
      </p>
      <p
        className="font-extrabold text-white mb-3"
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
      >
        {data.duration}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}>{data.desc}</p>
    </div>
  );
}

// ── Molecule: AssessmentStep ──────────────────────────────────────────────────
// Numbered step in the vertical assessment timeline

export function AssessmentStep({
  data,
  isLast = false,
}: {
  data: AssessmentStepData;
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-4">
      {/* Left: number circle + connector line */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-primary-navy flex items-center justify-center text-xs font-bold text-white flex-shrink-0 border-2 border-navy-light">
          {data.num}
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-1.5 mb-0"
            style={{ background: "linear-gradient(to bottom, #7C3AED, transparent)" }}
          />
        )}
      </div>

      {/* Right: text */}
      <div className={isLast ? "pb-0" : "pb-7"}>
        <h3 className="font-bold text-primary-navy text-sm mb-1.5 leading-snug">
          {data.title}
        </h3>
        <p className="text-sm text-charcoal/65 leading-relaxed">{data.desc}</p>
      </div>
    </div>
  );
}

// ── Organism: ProgramCTASection ───────────────────────────────────────────────
// Reusable dark-navy final CTA used at the bottom of every program page

export function ProgramCTASection({ data }: { data: ProgramCtaData }) {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background: "linear-gradient(180deg, #7C3AED 0%, #2D1B69 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 85% 20%, rgba(109,40,217,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}>
          {data.headline}
        </h2>
        <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
          {data.subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href={data.cta1Href} className="btn-premium-fill">
            {data.cta1Label}
            <span className="btn-icon-circle" aria-hidden="true">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
          <Link href={data.cta2Href} className="btn-premium-ghost-plain">
            {data.cta2Label}
          </Link>
        </div>

        {data.crossSellText && data.crossSellHref && data.crossSellLabel && (
          <p className="text-xs text-white/40">
            {data.crossSellText}{" "}
            <Link
              href={data.crossSellHref}
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              {data.crossSellLabel}
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

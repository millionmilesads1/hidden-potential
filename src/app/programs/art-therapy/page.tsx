/**
 * PROGRAM PAGE — ART THERAPY FOR HEALING
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /programs/art-therapy
 *
 * 7-section structure:
 *   Section 1  — HERO             (dark gradient, H1, dual Lora taglines, "All Age Groups" badge,
 *                                   "no artistic skill" note, 2 CTAs)
 *   Section 2  — WHAT IT DELIVERS (off-white, 6 outcome cards, gold callout, integration note,
 *                                   healing framework)
 *   Section 3  — WHO IT'S FOR     (white, 6 audience cards + sidebar callout)
 *   Section 4  — THREE CORE PILLARS (off-white, 12 skill chips + 3 pillar cards)
 *   Section 5  — PROGRAM STRUCTURE (navy dark, 3 pathway levels + framework note)
 *   Section 6  — ASSESSMENT       (white, 5-step timeline + quote callout)
 *   Section 7a — OUTCOMES+FORMAT  (off-white, 6 outcomes + format badges + cross-sell)
 *   Section 7b — FINAL CTA        (<ProgramCTASection> shared component)
 */

import type { Metadata } from "next";
import Link from "next/link";
import {
  type DomainCardData,
  type PathwayLevelData,
  type AssessmentStepData,
  type ProgramCtaData,
  ProgramSectionLabel,
  SkillChip,
  OutcomeItem,
  FormatBadge,
  DomainCard,
  PathwayLevelCard,
  AssessmentStep,
  ProgramCTASection,
} from "@/components/program/shared";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Art Therapy for Healing | Creative Pathway for Clarity | Hidden Potential" },
  description:
    "Guided healing through mindfulness, therapeutic journaling & expressive art. No artistic skill required. 1, 3, or 6-month programs. Delhi NCR & Online.",
  openGraph: {
    title: "Art Therapy for Healing — Creative Pathway for Clarity & Self-Discovery in Delhi",
    description:
      "Heal through mindfulness, reflective journaling & art-based expression. No artistic skill required. 1-Month Reset, 3-Month Clarity, 6-Month Integration programs.",
    type: "website",
    url: "https://hiddenpotentialskills.com/programs/art-therapy",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/programs/art-therapy",
  },
};

// ── Schema.org JSON-LD ───────────────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Art Therapy for Healing — Creative Pathway for Clarity & Self-Discovery in Delhi",
  description:
    "A structured healing program combining mindfulness, reflective journaling, and art-based therapeutic expression. Designed for all age groups seeking emotional clarity, stress relief, and inner growth. No artistic skill required.",
  url: "https://hiddenpotentialskills.com/programs/art-therapy",
  provider: {
    "@type": "Organization",
    name: "Hidden Potential",
    url: "https://hiddenpotentialskills.com",
  },
  educationalLevel: "All Age Groups",
  teaches: [
    "Mindfulness & Meditation Practices",
    "Reflective Journaling Techniques",
    "Art-Based Therapeutic Expression",
    "Emotional Regulation & Self-Awareness",
    "Stress & Anxiety Management Through Creativity",
    "Pattern Recognition & Trigger Mapping",
    "Inner Calm & Focus Development",
  ],
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      name: "1-Month Reflective Reset",
      courseMode: ["onsite", "online", "blended"],
      duration: "P1M",
      locationCreated: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Delhi",
          addressCountry: "IN",
        },
      },
    },
    {
      "@type": "CourseInstance",
      name: "3-Month Emotional Clarity Journey",
      courseMode: ["onsite", "online", "blended"],
      duration: "P3M",
    },
    {
      "@type": "CourseInstance",
      name: "6-Month Integrated Growth Program",
      courseMode: ["onsite", "online", "blended"],
      duration: "P6M",
    },
  ],
  isAccessibleForFree: false,
  instructor: {
    "@type": "Person",
    name: "Supreet Kaur",
    jobTitle: "Founder & Director, Hidden Potential",
    url: "https://hiddenpotentialskills.com/about",
  },
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const coreDeliverables = [
  {
    title: "Emotional Clarity",
    desc: "Create structured space to untangle conflicting emotions, identify what you are actually feeling, and develop language and awareness for your inner experience.",
    serviceLink: "/services/emotional-intelligence",
    serviceLinkLabel: "Explore Emotional Intelligence Coaching",
  },
  {
    title: "Stress Reduction",
    desc: "Release accumulated emotional tension through guided creative expression — an evidence-based approach that reduces cortisol and restores a sense of internal calm.",
    serviceLink: "/services/stress-management",
    serviceLinkLabel: "Explore Stress Management",
  },
  {
    title: "Improved Focus & Concentration",
    desc: "Mindfulness practices and structured journaling clear mental noise and train the mind to return to the present — improving focus in academic, professional, and personal life.",
  },
  {
    title: "Mindfulness & Inner Calm",
    desc: "Develop a consistent, accessible inner calm through breath-based practices, guided meditation, and mindful observation techniques that work in everyday life.",
  },
  {
    title: "Self-Awareness & Pattern Recognition",
    desc: "Structured reflection reveals recurring emotional patterns, habitual responses, and unconscious beliefs — giving you the self-knowledge needed to make meaningful change.",
  },
  {
    title: "Healthier Emotional Responses",
    desc: "Move from reactive emotional patterns to conscious, considered responses. Develop the capacity to pause, feel, and choose — rather than react without awareness.",
  },
];

const audiences = [
  {
    icon: "🎒",
    title: "Students Facing Academic Pressure",
    desc: "Children and teens overwhelmed by performance expectations, exam anxiety, peer stress, or identity confusion who need a safe, creative space to process and recharge.",
    serviceLink: "/programs/enlightened-learner",
    serviceLinkLabel: "An Enlightened Learner",
  },
  {
    icon: "💼",
    title: "Working Professionals Under Stress",
    desc: "Individuals experiencing burnout, mental exhaustion, or emotional disconnection from constant professional demands who need a structured reset beyond talk-based approaches.",
  },
  {
    icon: "🏠",
    title: "Homemakers Managing Emotional Overload",
    desc: "Those who give consistently to others but rarely have a safe space for their own emotional processing — to be seen, heard, and supported in their inner experience.",
    serviceLink: "/programs/self-mastery-women",
    serviceLinkLabel: "Self Mastery for Women",
  },
  {
    icon: "🔄",
    title: "Women Navigating Life Transitions",
    desc: "Women processing major changes — relationship shifts, career pivots, identity evolution, loss — who need a reflective, embodied space to move through these with clarity.",
  },
  {
    icon: "🌀",
    title: "Individuals Feeling Overwhelmed",
    desc: "People experiencing ongoing mental clutter, emotional heaviness, or a sense of being stuck who want non-clinical, gentle tools for reconnecting with their inner equilibrium.",
  },
  {
    icon: "🌸",
    title: "Anyone Seeking Emotional Balance",
    desc: "Curious, growth-oriented individuals of any age who want to understand themselves more deeply and develop a regular practice of self-awareness and emotional wellbeing.",
  },
];

const skillChips = [
  // Mindfulness & Meditation
  "Guided Grounding Techniques",
  "Breath-Based Focus Training",
  "Emotional Awareness Practices",
  "Mindfulness in Daily Life",
  // Reflective Journaling
  "Pattern Identification",
  "Trigger Mapping",
  "Belief Exploration",
  "Structured Emotional Writing",
  // Art-Based Expression
  "Non-Verbal Emotional Release",
  "Visual Reflection Exercises",
  "Symbol & Colour Awareness",
  "Creative Processing of Emotions",
];

const pillars: DomainCardData[] = [
  {
    num: "01",
    title: "Mindfulness & Meditation",
    desc: "Guided grounding techniques, breath-based focus training, and emotional awareness practices that build a stable, calm inner foundation for the entire healing process.",
    skills: ["Guided Grounding", "Breath-Based Focus", "Emotional Awareness", "Daily Mindfulness"],
    accent: "teal",
  },
  {
    num: "02",
    title: "Reflective Journaling",
    desc: "Structured journaling practices for pattern identification, trigger mapping, belief exploration, and emotional writing — tools that build lasting self-knowledge through consistent reflection.",
    skills: ["Pattern Identification", "Trigger Mapping", "Belief Exploration", "Emotional Writing"],
    accent: "gold",
  },
  {
    num: "03",
    title: "Art-Based Therapeutic Expression",
    desc: "Non-verbal emotional release through visual reflection exercises, symbol and colour awareness, and creative processing of emotions. No artistic skill required — only willingness to express.",
    skills: ["Non-Verbal Release", "Visual Reflection", "Symbol & Colour", "Creative Processing"],
    accent: "teal",
  },
];

const pathwayLevels: PathwayLevelData[] = [
  {
    name: "1-Month Reflective Reset",
    duration: "1 Month",
    desc: "A focused introduction to mindfulness and breathwork. Quiet the mental noise, establish a journaling practice, and begin gentle art-based expression. Designed for immediate stress relief and grounding.",
    accent: "teal",
  },
  {
    name: "3-Month Emotional Clarity Journey",
    duration: "3 Months",
    desc: "Deeper engagement with all three pillars. Identify emotional patterns, process specific experiences through journaling and art, and develop a reliable inner calm practice for daily life.",
    accent: "gold",
  },
  {
    name: "6-Month Integrated Growth Program",
    duration: "6 Months",
    desc: "Full integration of healing practices across all areas of life. Work through deeper personal themes, complete a personal art and journaling portfolio, and build lasting emotional resilience.",
    accent: "white",
  },
];

const assessmentSteps: AssessmentStepData[] = [
  {
    num: "01",
    title: "Self-Awareness Baseline Reflection",
    desc: "A gentle, structured intake to understand your current emotional landscape, what you are carrying, and what you hope to release, understand, or discover through the program.",
  },
  {
    num: "02",
    title: "Guided Emotional Tracking Tools",
    desc: "Throughout the program, simple structured check-ins help you and the facilitator track your emotional state, identify patterns, and adapt the process to where you are each week.",
  },
  {
    num: "03",
    title: "Structured Journaling Worksheets",
    desc: "Purpose-built reflection prompts and worksheets guide each stage of the journaling practice — providing structure without restriction, and depth without overwhelm.",
  },
  {
    num: "04",
    title: "Facilitated Sharing (Optional)",
    desc: "In group formats, optional facilitated sharing creates space for witnessed reflection — a powerful part of healing that is always voluntary and held with complete safety and confidentiality.",
  },
  {
    num: "05",
    title: "End-of-Program Growth Reflection",
    desc: "A structured closing review that maps emotional shifts, behavioural changes, and personal insights from the program — helping you see clearly how far you have come.",
  },
];

const expectedOutcomes = [
  {
    text: "Reduced stress and anxiety through consistent mindfulness and creative practices",
    linkHref: "/services/stress-management",
    linkLabel: "Stress Management",
  },
  {
    text: "Increased focus and mental clarity as emotional clutter is released and processed",
  },
  {
    text: "Improved emotional regulation — the ability to feel without being overwhelmed",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Emotional Intelligence",
  },
  {
    text: "Better understanding of your own patterns, triggers, and emotional responses",
  },
  {
    text: "Greater inner balance and a stable, accessible sense of calm in daily life",
  },
  {
    text: "Stronger connection to self — your values, voice, and inner direction",
  },
];

const ctaData: ProgramCtaData = {
  headline: "You don\u2019t need artistic talent. You need willingness to grow.",
  subtext:
    "Book a discovery session to find out which program length is right for you. Whether you need a one-month reset or a six-month healing journey, your path begins with a single conversation.",
  cta1Label: "Book a Session",
  cta1Href: "/contact",
  cta2Label: "Take the Assessment",
  cta2Href: "/assessment",
  crossSellText: "Also explore:",
  crossSellHref: "/programs/self-mastery-women",
  crossSellLabel: "Self Mastery for Women — a complete empowerment journey for deeper identity growth",
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ArtTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          Background: Dark navy-to-deep gradient
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#6F00FF" }}
      >
        {/* Decorative glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 85% 20%, rgba(109,40,217,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 -left-16 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(212,168,67,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">

          {/* Label badge */}
            <span
              className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-teal rounded-full mb-5"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              Healing &amp; Self-Discovery
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Art Therapy for Healing — Creative Pathway for Clarity &amp; Self-Discovery in Delhi
          </h1>

          {/* Lora italic primary tagline */}
          <p
            className="text-xl md:text-2xl text-white/75 leading-relaxed mb-3 max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-accent)",
              fontStyle: "italic",
              textShadow: "0 1px 2px rgba(0,0,0,0.15)",
            }}
          >
            From mental clutter to emotional clarity. From suppressed emotions to mindful expression.
          </p>

          {/* Secondary tagline */}
          <p className="text-base text-white/55 mb-8 max-w-xl mx-auto leading-relaxed">
            Journaling helps you understand your inner world. Art helps you gently transform it.
          </p>

          {/* "All Age Groups" badge */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              className="px-4 py-2 text-sm font-bold text-white rounded-md"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.20)",
              }}
            >
              All Age Groups
            </span>
          </div>

          {/* "No artistic skill" note */}
          <p
            className="text-sm text-white/40 mb-8 max-w-md mx-auto leading-relaxed"
            style={{ fontStyle: "italic" }}
          >
            No artistic knowledge or talent required. This journey is about healing, not performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Book a Session
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/5 rounded-md transition-colors"
            >
              Begin Your Reflective Growth Journey
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/40">
            {[
              "No Artistic Skill Required",
              "Certified Art Therapy Facilitator",
              "14+ Years Experience",
              "Delhi NCR & Online",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary-teal inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — WHAT THIS PROGRAM DELIVERS
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <ProgramSectionLabel>What It Delivers</ProgramSectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Six Core Healing Outcomes
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Art therapy at Hidden Potential is not about making art. It is about using creativity,
              mindfulness, and journaling as structured pathways to emotional clarity and lasting
              inner resilience.
            </p>
          </div>

          {/* 6 deliverable cards — 3 + 3 grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {coreDeliverables.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-1 h-8 rounded-full mb-4"
                  style={{ backgroundColor: "#0D9488" }}
                />
                <h3 className="font-bold text-primary-navy mb-2 text-[15px] leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-3">{item.desc}</p>
                {item.serviceLink && item.serviceLinkLabel && (
                  <Link
                    href={item.serviceLink}
                    className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                  >
                    {item.serviceLinkLabel} →
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Gold callout */}
          <div
            className="rounded-lg p-6 border-l-4 max-w-3xl mx-auto mb-8"
            style={{ borderColor: "#D4A843", background: "#FBF7EE" }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "#D4A843" }}
              >
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
              <div>
                <p className="text-sm font-bold text-primary-navy mb-1">
                  Art is Used as a Healing Tool — No Drawing Skills Required
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  The focus is emotional growth, not artistic ability. What you create matters far
                  less than what you discover about yourself through the process of creating it.
                </p>
              </div>
            </div>
          </div>

          {/* Integration note */}
          <p className="text-center text-sm text-charcoal/70 mb-12">
            Includes guided reflection tools and structured integration practices across all three
            healing pillars.
          </p>

          {/* Healing Framework */}
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-5">
              Healing Framework
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["Awareness", "Expression", "Reflection", "Integration"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-3">
                  <span className="px-5 py-2.5 text-sm font-bold text-primary-teal bg-teal-light rounded-md border border-primary-teal/15">
                    {stage}
                  </span>
                  {i < 3 && (
                    <svg
                      className="w-4 h-4 text-primary-teal/40 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — WHO IT IS DESIGNED FOR
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <ProgramSectionLabel>Who It&rsquo;s For</ProgramSectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Art Therapy Is for Anyone Carrying Something Unspoken
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Emotions that cannot be put into words can often be released through colour, image, and
              reflection. This program is open to all ages — and requires no prior experience of
              any kind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="rounded-lg p-6 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-primary-teal/20 transition-all flex flex-col"
              >
                <div className="w-10 h-10 rounded-md bg-teal-light flex items-center justify-center text-xl mb-4 flex-shrink-0">
                  {a.icon}
                </div>
                <h3 className="font-bold text-primary-navy text-[15px] mb-2 leading-snug">
                  {a.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{a.desc}</p>
                {a.serviceLink && a.serviceLinkLabel && (
                  <Link
                    href={a.serviceLink}
                    className="mt-3 text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                  >
                    {a.serviceLinkLabel} →
                  </Link>
                )}
              </div>
            ))}

            {/* Sidebar callout card */}
            <div
              className="rounded-lg p-6 flex flex-col justify-center"
              style={{
                background: "linear-gradient(135deg, #EDE9FE 0%, #EDE9FE 100%)",
                border: "1px solid rgba(124,58,237,0.12)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-4">
                No Prior Experience Needed
              </p>
              {[
                { label: "Artistic background", value: "Not required" },
                { label: "Drawing skills",      value: "Not required" },
                { label: "Age range",           value: "All age groups" },
                { label: "Mode",                value: "Group · 1:1 Available" },
                { label: "Online",              value: "Pan-India" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-2 border-b border-primary-teal/10 last:border-0"
                >
                  <span className="text-sm font-bold text-primary-navy">{row.label}</span>
                  <span className="text-xs font-semibold text-primary-teal bg-teal-light px-2 py-0.5 rounded-full">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — THREE CORE PILLARS
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <ProgramSectionLabel>Core Pillars</ProgramSectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Three Pillars of Healing
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Every session draws from three interconnected practices — each one building the next,
              creating a complete and self-reinforcing pathway toward emotional clarity and growth.
            </p>
          </div>

          {/* 12 skill chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-14">
            {skillChips.map((skill) => (
              <SkillChip key={skill} label={skill} />
            ))}
          </div>

          {/* 3 pillar cards — full-width grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <DomainCard key={p.num} data={p} />
            ))}
          </div>

          {/* Internal links */}
          <p className="text-center text-sm text-charcoal/70 mt-8">
            Looking for deeper emotional work?{" "}
            <Link
              href="/services/emotional-intelligence"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Emotional Intelligence Coaching →
            </Link>
            <span className="mx-3 text-charcoal/30">·</span>
            <Link
              href="/services/stress-management"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Stress Management →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — PROGRAM STRUCTURE
          Background: Dark navy gradient
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ background: "#6F00FF" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <ProgramSectionLabel light>Program Structure</ProgramSectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Three Healing Pathways. One Continuous Journey.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Choose the pathway that matches where you are right now. Each builds on the
              previous — and you can deepen your practice by continuing across all three.
            </p>
          </div>

          {/* 3 pathway level cards with connectors */}
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
            {pathwayLevels.map((level, i) => (
              <div key={level.name} className="flex items-stretch md:flex-1">
                <PathwayLevelCard data={level} />
                {i < pathwayLevels.length - 1 && (
                  <div className="hidden md:flex items-center justify-center flex-shrink-0 px-3">
                    <svg
                      className="w-5 h-5 text-white/25"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Framework note */}
          <div className="text-center mt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
              Each pathway follows
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["Awareness", "Expression", "Reflection", "Integration"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white/60">{stage}</span>
                  {i < 3 && (
                    <span className="text-white/25 text-sm">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-white/35 mt-4">
              Guided by{" "}
              <Link
                href="/about"
                className="text-white/50 hover:text-white font-semibold transition-colors"
              >
                Supreet Kaur
              </Link>
              , certified art therapy facilitator with 14+ years experience.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — ASSESSMENT & MEASUREMENT
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left — Section header + quote */}
            <div>
              <ProgramSectionLabel>The Process</ProgramSectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 leading-tight">
                Structured, Safe &amp; Deeply Human
              </h2>
              <p className="text-base text-charcoal/80 leading-relaxed mb-8">
                Every stage of this program is held within a clear, compassionate structure.
                Progress is not measured by what you create — it is measured by what shifts
                within you. The process is always led by the participant, gently guided by the
                facilitator.
              </p>

              {/* Gold quote callout */}
              <div
                className="rounded-lg p-6"
                style={{ background: "#FBF7EE", borderLeft: "3px solid #D4A843" }}
              >
                <p
                  className="text-lg text-primary-navy leading-relaxed"
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;Growth is measured through clarity and behavioural shifts, not
                  grading.&rdquo;
                </p>
                <p className="text-xs font-semibold text-primary-teal mt-3">
                  — Hidden Potential Art Therapy Approach
                </p>
              </div>

              {/* Location reference */}
              <p className="text-xs text-charcoal/50 mt-6">
                Available in{" "}
                <Link
                  href="/locations/delhi"
                  className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  Delhi (Dwarka)
                </Link>{" "}
                and online across India. Group and individual (1:1) sessions available.
              </p>
            </div>

            {/* Right — 5-step process timeline */}
            <div className="pt-2">
              {assessmentSteps.map((step, i) => (
                <AssessmentStep
                  key={step.num}
                  data={step}
                  isLast={i === assessmentSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7a — EXPECTED OUTCOMES + FORMAT
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left — Expected outcomes */}
            <div>
              <ProgramSectionLabel>Expected Outcomes</ProgramSectionLabel>
              <h2 className="text-3xl font-bold text-primary-navy mb-6 leading-tight">
                What You Carry with You After This Program
              </h2>
              <div className="flex flex-col gap-4">
                {expectedOutcomes.map((o) => (
                  <OutcomeItem
                    key={o.text}
                    text={o.text}
                    linkHref={o.linkHref}
                    linkLabel={o.linkLabel}
                  />
                ))}
              </div>
            </div>

            {/* Right — Format + cross-sell */}
            <div className="flex flex-col gap-6">

              {/* Format */}
              <div className="bg-white rounded-lg p-7 border border-gray-200 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-4">
                  Program Format
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  {["Group Sessions", "1:1 Sessions", "Offline", "Online", "Hybrid"].map((f) => (
                    <FormatBadge key={f} label={f} />
                  ))}
                </div>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  Group sessions foster shared healing and community connection. Individual (1:1)
                  sessions provide a more private, tailored therapeutic experience. Both formats
                  are available in person in{" "}
                  <Link
                    href="/locations/delhi"
                    className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                  >
                    Delhi
                  </Link>{" "}
                  or online across India.
                </p>
              </div>

              {/* Assessment note */}
              <div className="bg-white rounded-lg p-7 border border-gray-200 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-3">
                  Pre &amp; Post Assessment
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  A structured emotional wellbeing reflection is conducted at the start and close
                  of each program phase — giving you a clear, compassionate picture of the
                  emotional shifts you have experienced through the process.
                </p>
              </div>

              {/* Cross-sell → Self Mastery for Women */}
              <div
                className="rounded-lg p-5"
                style={{
                  background: "linear-gradient(135deg, #EDE9FE 0%, #EDE9FE 100%)",
                  border: "1px solid rgba(124,58,237,0.12)",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-2">
                  Also Explore
                </p>
                <Link
                  href="/programs/self-mastery-women"
                  className="group flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-bold text-primary-navy leading-snug">
                      Self Mastery for Women
                    </p>
                    <p className="text-xs text-charcoal/60 mt-0.5">
                      A complete empowerment journey for deeper identity &amp; emotional growth
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-primary-teal group-hover:translate-x-0.5 transition-transform flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7b — FINAL CTA
          Uses the shared <ProgramCTASection> component
      ═══════════════════════════════════════════════════════════════════════ */}
      <ProgramCTASection data={ctaData} />
    </>
  );
}

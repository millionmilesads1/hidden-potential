/**
 * PROGRAM PAGE — SELF MASTERY FOR WOMEN
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /programs/self-mastery-women
 *
 * 7-section structure (identical template to AEL & Communication Mastery):
 *   Section 1  — HERO             (navy gradient, H1, Lora tagline, age badge, 2 CTAs)
 *   Section 2  — WHAT IT DELIVERS (off-white, 5 outcomes, gold callout, framework)
 *   Section 3  — WHO IT'S FOR     (white, 5 audience cards + program reach callout)
 *   Section 4  — KEY AREAS        (off-white, 10 skill chips + 4 domain cards)
 *   Section 5  — PATHWAY          (navy dark, 3 stage cards + connectors)
 *   Section 6  — ASSESSMENT       (white, 5-step timeline + quote callout)
 *   Section 7a — OUTCOMES+FORMAT  (off-white, outcome bullets + format badges)
 *   Section 7b — FINAL CTA        (<ProgramCTASection> shared component)
 *
 * Spec notes vs AEL/CM:
 *   • Learning framework ends in "Integration" (not "Mastery") per CLAUDE.md
 *   • Pathway uses stage names (no fixed month durations) per spec
 *   • Cross-sell → Art Therapy for Healing
 *   • Hero includes unique "not a motivational circle" differentiator note
 */

import type { Metadata } from "next";
import Image from "next/image";
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
  title: { absolute: "Self Mastery for Women (28+) | Emotional Leadership Program | Hidden Potential" },
  description:
    "A structured growth journey for women 28+. Rebuild identity, emotional resilience, personal independence & inner clarity. Group & 1:1 sessions. Delhi NCR & Online.",
  openGraph: {
    title: "Self Mastery for Women — Holistic Growth & Emotional Leadership Program (28+)",
    description:
      "Structured women's growth program for identity, emotional resilience, independence & self-expression. Three development stages. Group & 1:1. Delhi NCR & Online.",
    type: "website",
    url: "https://hiddenpotentialskills.com/programs/self-mastery-women",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/programs/self-mastery-women",
  },
};

// ── Schema.org JSON-LD ───────────────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Self Mastery for Women — Holistic Growth & Emotional Leadership Program",
  description:
    "A structured personal development journey for women 28+. Covers inner identity, emotional regulation, navigating societal expectations, financial independence, self-respect, and confident self-expression.",
  url: "https://hiddenpotentialskills.com/programs/self-mastery-women",
  provider: {
    "@type": "Organization",
    name: "Hidden Potential",
    url: "https://hiddenpotentialskills.com",
  },
  educationalLevel: "Women 28+",
  teaches: [
    "Inner Clarity & Self-Awareness",
    "Emotional Regulation",
    "Identity Reconstruction",
    "Confident Self-Expression",
    "Boundary Setting",
    "Navigating Societal Expectations",
    "Relationship Dynamics",
    "Financial Awareness & Independence",
    "Life Planning & Decision-Making",
    "Self-Respect & Self-Love",
  ],
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      name: "Foundation Stage — Inner Clarity & Emotional Grounding",
      courseMode: ["onsite", "online", "blended"],
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
      name: "Growth Stage — Strength in Relationships & Society",
      courseMode: ["onsite", "online", "blended"],
    },
    {
      "@type": "CourseInstance",
      name: "Mastery Stage — Independence, Leadership & Life Design",
      courseMode: ["onsite", "online", "blended"],
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
    title: "Reconnecting with Your Inner Self",
    desc: "Rediscovering your values, beliefs, and authentic identity beneath the weight of roles, responsibilities, and external expectations.",
    serviceLink: "/services/emotional-intelligence",
    serviceLinkLabel: "Explore Emotional Intelligence",
  },
  {
    title: "Strengthening Emotional Resilience",
    desc: "Building the capacity to regulate emotions, recover from setbacks, and respond to life's challenges from a place of grounded calm — not reaction.",
    serviceLink: "/services/stress-management",
    serviceLinkLabel: "Explore Stress Management",
  },
  {
    title: "Navigating Societal Expectations Confidently",
    desc: "Developing the clarity and courage to set healthy boundaries, handle social pressure, and live in alignment with your own values — not others' timelines.",
  },
  {
    title: "Building Personal & Financial Independence",
    desc: "Cultivating practical decision-making skills, financial awareness, and the self-reliance to own your choices and create a life of intentional direction.",
  },
  {
    title: "Creating Space for Self-Respect & Self-Love",
    desc: "Reshaping inner dialogue, building a consistent self-care practice, and developing a deep, unshakeable sense of personal worthiness.",
  },
];

const audiences = [
  {
    icon: "🌱",
    title: "Women Feeling Emotionally Stuck or Overwhelmed",
    desc: "Caught in patterns of overthinking, emotional exhaustion, or a persistent sense that something essential is missing — and ready for a structured path forward.",
    serviceLink: "/services/stress-management",
    serviceLinkLabel: "Stress Management",
  },
  {
    icon: "🔄",
    title: "Women Navigating Major Life Transitions",
    desc: "Moving through career changes, relationship shifts, divorce, motherhood, or identity re-evaluation — and needing structured support through the in-between.",
  },
  {
    icon: "💼",
    title: "Working Women Seeking Clarity & Leadership",
    desc: "Professionally accomplished but personally unfulfilled — ready to develop emotional leadership, assert boundaries, and lead with authentic presence.",
  },
  {
    icon: "🌸",
    title: "Women Rebuilding After Loss or Change",
    desc: "Recovering identity and confidence after grief, a difficult relationship, relocation, or any significant life disruption — and ready to begin again with structure.",
  },
  {
    icon: "✨",
    title: "Women Ready for Guided Personal Growth",
    desc: "Already doing the inner work informally — reading, journaling, reflecting — and ready for a guided, measurable framework to deepen and accelerate their growth.",
    serviceLink: "/services/goal-setting",
    serviceLinkLabel: "Goal Setting & Accountability",
  },
];

const skillAreas = [
  "Inner Clarity",
  "Emotional Regulation",
  "Self-Awareness",
  "Confident Expression",
  "Setting Healthy Boundaries",
  "Identity Work",
  "Navigating Relationships",
  "Financial Awareness",
  "Life Planning & Decision-Making",
  "Self-Respect & Self-Love",
];

const domains: DomainCardData[] = [
  {
    num: "01",
    title: "Inner Self & Identity",
    desc: "Reconnecting with your authentic self — exploring core values, personal beliefs, and the narrative you hold about who you are and who you are becoming.",
    skills: ["Core Values Clarification", "Personal Narrative Work", "Identity Reconstruction", "Self-Awareness"],
    accent: "teal",
  },
  {
    num: "02",
    title: "Emotional Strength",
    desc: "Developing the capacity to sit with, understand, and regulate your emotions — building resilience, emotional stamina, and the ability to respond rather than react.",
    skills: ["Emotional Regulation", "Resilience Building", "Managing Anxiety & Stress", "Grief & Transition Work"],
    accent: "gold",
  },
  {
    num: "03",
    title: "Relationships & Society",
    desc: "Navigating the complex web of relationships, social expectations, and family dynamics — learning to honour yourself without abandoning others.",
    skills: ["Boundary Setting", "Social Confidence", "Family & Relationship Dynamics", "Handling Expectations"],
    accent: "navy",
  },
  {
    num: "04",
    title: "Independence & Personal Growth",
    desc: "Building the practical foundations of a self-directed life — financial awareness, clear decision-making, personal goal-setting, and a vision that belongs to you.",
    skills: ["Financial Awareness", "Decision-Making Frameworks", "Life Vision Planning", "Self-Reliance"],
    accent: "teal",
  },
];

const pathwayLevels: PathwayLevelData[] = [
  {
    name: "HP Foundation",
    duration: "Stage One",
    desc: "Inner clarity and emotional grounding. Reconnecting with self, stabilising emotions, and building the internal foundation for lasting change.",
    accent: "teal",
  },
  {
    name: "HP Growth Series",
    duration: "Stage Two",
    desc: "Strength in relationships and society. Navigating expectations, setting boundaries, and developing confident self-expression in real-world contexts.",
    accent: "gold",
  },
  {
    name: "HP Mastery Track",
    duration: "Stage Three",
    desc: "Independence, leadership, and life design. Owning your choices, building financial awareness, and creating a structured vision for the life you want.",
    accent: "white",
  },
];

const assessmentSteps: AssessmentStepData[] = [
  {
    num: "01",
    title: "Initial Life Assessment (Personal Baseline Evaluation)",
    desc: "A structured self-reflection assessment to identify current emotional patterns, personal challenges, unmet needs, and the areas most ready for growth.",
  },
  {
    num: "02",
    title: "One-on-One Discovery Session",
    desc: "A private, guided conversation with Supreet to understand your journey, map your growth stage, and design a personalised development pathway.",
  },
  {
    num: "03",
    title: "Personalised Growth Plan",
    desc: "A structured plan outlining your developmental focus areas, session format (group or 1:1), learning tools, and milestone markers across all three stages.",
  },
  {
    num: "04",
    title: "Group Facilitation & Peer Reflection",
    desc: "Guided group sessions that combine shared learning, peer accountability, and structured reflection — creating a safe community of growth without comparison.",
  },
  {
    num: "05",
    title: "Post-Journey Review (Personal Progress Report)",
    desc: "A documented review of your growth from baseline to completion — capturing shifts in identity, emotional regulation, confidence, and life clarity.",
  },
];

const expectedOutcomes = [
  {
    text: "A clear, redefined sense of self and personal identity",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Emotional Intelligence Coaching",
  },
  {
    text: "Emotional regulation — calm, grounded, and resilient in difficult situations",
    linkHref: "/services/stress-management",
    linkLabel: "Stress Management",
  },
  {
    text: "Confidence to express boundaries and navigate societal expectations",
    linkHref: "/services/confidence-building",
    linkLabel: "Confidence Building",
  },
  {
    text: "Greater financial awareness and personal independence",
  },
  {
    text: "Healthier relationships built on self-respect and mutual understanding",
  },
  {
    text: "A practical, structured life vision aligned with your personal values",
  },
];

const ctaData: ProgramCtaData = {
  headline: "Begin Your Journey. Own Your Growth.",
  subtext:
    "Start with a personal discovery session. Understand where you are, clarify where you want to go, and begin a structured path that puts you — your identity, your clarity, your life — at the centre.",
  cta1Label: "Book a Discovery Session",
  cta1Href: "/contact",
  cta2Label: "Take the Life Skills Assessment",
  cta2Href: "/assessment",
  crossSellText: "Also explore:",
  crossSellHref: "/programs/art-therapy",
  crossSellLabel: "Art Therapy for Healing — for emotional clarity through creative expression",
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SelfMasteryWomenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          Background: Dark navy-to-teal gradient
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #1A0F3C 0%, #6F00FF 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 85% 20%, rgba(109,40,217,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 -left-16 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(109,40,217,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          {/* Label badges */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-teal rounded-full"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              Women&apos;s Empowerment
            </span>
            <span
              className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-gold rounded-full"
              style={{
                background: "rgba(212,168,67,0.12)",
                border: "1px solid rgba(212,168,67,0.25)",
              }}
            >
              Women 28+
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}>
            Self Mastery for Women — Holistic Growth &amp; Emotional Leadership Program (28+)
          </h1>

          {/* Lora italic transformation tagline */}
          <p
            className="text-xl md:text-2xl text-white/75 leading-relaxed mb-6 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            From emotional overwhelm to grounded strength. From self-doubt to confident identity.
          </p>

          {/* Differentiator note — unique to this program */}
          <p className="text-sm text-white/50 mb-8 max-w-xl mx-auto leading-relaxed">
            This is not a motivational circle — it is a guided growth journey with practical tools.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Book a Discovery Session
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
              Begin Your Self Mastery Journey
            </Link>
          </div>

          {/* Trust indicators row */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/45">
            {[
              "Pre & Post Assessment Included",
              "3 Development Stages",
              "Group & 1:1 Available",
              "Delhi · Online Pan-India",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary-gold inline-block" />
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
              Five Pillars of Women&apos;s Growth
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Each area is explored with depth and structure — not surface inspiration. Real tools,
              real practice, and real support for lasting, measurable transformation.
            </p>
          </div>

          {/* 5 deliverable cards — 3 + 2 grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {coreDeliverables.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-1 h-8 rounded-full mb-4"
                  style={{ backgroundColor: "#D4A843" }}
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
          <div className="grid md:grid-cols-2 gap-5 max-w-[672px] mx-auto mb-12">
            {coreDeliverables.slice(3).map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-1 h-8 rounded-full mb-4"
                  style={{ backgroundColor: "#D4A843" }}
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

          {/* Gold callout — program differentiator */}
          <div
            className="rounded-lg p-6 border-l-4 max-w-3xl mx-auto mb-12"
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
                  Not a Motivational Program — A Structured Transformation Framework
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Self Mastery for Women combines psychological frameworks, NLP techniques, and
                  structured reflection to create measurable, evidence-based personal growth. Every
                  stage is assessed, every insight is applied, and every outcome is documented — so
                  you can see exactly how far you&apos;ve come.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Framework — Awareness → Practice → Application → Integration */}
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-5">
              Learning Framework
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["Awareness", "Practice", "Application", "Integration"].map((stage, i) => (
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
          {/* Section header: content left, image right */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">
            <div>
              <ProgramSectionLabel>Who It&rsquo;s For</ProgramSectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
                Is This Program Right for You?
              </h2>
              <p className="text-lg text-charcoal leading-relaxed">
                Self Mastery for Women is designed for women 28+ who are ready to move beyond
                surviving and begin building a life rooted in clarity, strength, and purpose.
              </p>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: "420px" }}>
              <Image
                src="/images/counseling/counseling-1.jpg"
                alt="One-on-one coaching session for women at Hidden Potential life skills program in Delhi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="rounded-lg p-6 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-primary-gold/30 transition-all flex flex-col"
              >
                <div className="w-10 h-10 rounded-md bg-gold-light flex items-center justify-center text-xl mb-4 flex-shrink-0">
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

            {/* Program reach callout card */}
            <div
              className="rounded-lg p-6 flex flex-col justify-center"
              style={{
                background: "linear-gradient(135deg, #FBF7EE 0%, #EDE9FE 100%)",
                border: "1px solid rgba(212,168,67,0.18)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary-gold mb-4">
                Program Reach
              </p>
              {[
                { label: "Age Range",   value: "Women 28+"           },
                { label: "Format",      value: "Group & 1:1"          },
                { label: "Mode",        value: "Offline · Online"     },
                { label: "Location",    value: "Delhi · Pan-India"    },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-2 border-b border-primary-gold/10 last:border-0"
                >
                  <span className="text-sm font-bold text-primary-navy">{row.label}</span>
                  <span className="text-xs font-semibold text-primary-gold bg-gold-light px-2 py-0.5 rounded-full">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — KEY AREAS & SKILL DOMAINS
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <ProgramSectionLabel>Curriculum</ProgramSectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              10 Key Areas Across 4 Growth Domains
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              A complete women&apos;s growth curriculum — addressing the inner world and the outer
              life, in structured, progressive stages.
            </p>
          </div>

          {/* 10 skill chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-14">
            {skillAreas.map((skill) => (
              <SkillChip key={skill} label={skill} />
            ))}
          </div>

          {/* 4 domain cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {domains.map((d) => (
              <DomainCard key={d.num} data={d} />
            ))}
          </div>

          {/* Internal links */}
          <p className="text-center text-sm text-charcoal/70 mt-8">
            Looking for focused emotional support?{" "}
            <Link
              href="/services/emotional-intelligence"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Emotional Intelligence Coaching →
            </Link>
            <span className="mx-3 text-charcoal/30">·</span>
            Explore holistic healing alongside this journey:{" "}
            <Link
              href="/programs/art-therapy"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Art Therapy for Healing →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — DEVELOPMENT PATHWAY
          Background: Dark navy gradient
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(180deg, #1A0F3C 0%, #6F00FF 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <ProgramSectionLabel light>Development Pathway</ProgramSectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Three Stages. One Continuous Journey.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Each stage builds naturally on the last — from inner clarity, to relational strength,
              to full personal independence. Progress is guided, never rushed.
            </p>
          </div>

          {/* Pathway stages with connectors */}
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

          {/* Sub-note */}
          <div className="text-center mt-10">
            <p className="text-sm text-white/45">
              Stage placement is based on your personal baseline assessment, not age alone.{" "}
              <Link
                href="/about"
                className="text-white/65 hover:text-white font-semibold transition-colors"
              >
                Learn about Supreet&rsquo;s approach →
              </Link>
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
              <ProgramSectionLabel>Assessment Process</ProgramSectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 leading-tight">
                Growth Is Witnessed, Not Just Felt
              </h2>
              <p className="text-base text-charcoal/80 leading-relaxed mb-8">
                Every stage of Self Mastery for Women is supported by structured evaluation and
                intentional reflection. Growth isn&apos;t left to chance or feeling alone — it is
                documented, discussed, and made visible.
              </p>

              {/* Gold quote callout */}
              <div
                className="rounded-lg p-6"
                style={{ background: "#FBF7EE", borderLeft: "3px solid #D4A843" }}
              >
                <p
                  className="text-lg text-primary-navy leading-relaxed"
                  style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
                >
                  &ldquo;Every woman deserves to see how much she has grown — not just feel it.&rdquo;
                </p>
                <p className="text-xs font-semibold text-primary-teal mt-3">
                  — Supreet Kaur, Founder, Hidden Potential
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
                </Link>
                {" "}and online across India. Group cohorts and private 1:1 journeys available.
              </p>
            </div>

            {/* Right — 5-step assessment timeline */}
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
                What Changes After This Program
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

            {/* Right — Format + enroll + cross-sell */}
            <div className="flex flex-col gap-6">
              {/* Format */}
              <div className="bg-white rounded-lg p-7 border border-gray-200 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-4">
                  Program Format
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  {["Group Sessions", "1:1 Available", "Offline & Online"].map((f) => (
                    <FormatBadge key={f} label={f} />
                  ))}
                </div>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  Group cohorts run in Delhi (Dwarka) and online. Private 1:1 journeys available
                  on request. Both formats follow the same three-stage structured pathway.
                </p>
              </div>

              {/* Pricing note */}
              <div className="bg-white rounded-lg p-7 border border-gray-200 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-3">
                  Enrollment &amp; Pricing
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                  Program fees vary by format and stage selection. Begin with a free personal
                  discovery session to understand your starting point and receive a tailored
                  program recommendation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  Book a Discovery Session
                  <svg
                    className="w-3.5 h-3.5"
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

              {/* Cross-sell → Art Therapy */}
              <div
                className="rounded-lg p-5"
                style={{
                  background: "linear-gradient(135deg, #FBF7EE 0%, #EDE9FE 100%)",
                  border: "1px solid rgba(212,168,67,0.18)",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary-gold mb-2">
                  Also Explore
                </p>
                <Link
                  href="/programs/art-therapy"
                  className="group flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-bold text-primary-navy leading-snug">
                      Art Therapy for Healing
                    </p>
                    <p className="text-xs text-charcoal/60 mt-0.5">
                      For emotional clarity through creative expression
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

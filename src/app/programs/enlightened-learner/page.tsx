/**
 * PROGRAM PAGE — AN ENLIGHTENED LEARNER (AEL)
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /programs/enlightened-learner
 *
 * TEMPLATE NOTE: This is the canonical template for all 5 program pages.
 * When building the next program page (Communication Mastery, Self Mastery for
 * Women, Train the Trainer, Art Therapy), follow this EXACT 7-section structure:
 *
 *   Section 1  — HERO             (navy gradient, h1, Lora tagline, age badge, 2 CTAs)
 *   Section 2  — WHAT IT DELIVERS (off-white, outcomes grid, gold callout, framework)
 *   Section 3  — WHO IT'S FOR     (white, audience cards)
 *   Section 4  — KEY AREAS        (off-white, skill chips + 4 domain cards)
 *   Section 5  — PATHWAY          (navy dark, 3 level cards + connectors)
 *   Section 6  — ASSESSMENT       (white, 5-step timeline + quote callout)
 *   Section 7a — OUTCOMES+FORMAT  (off-white, outcome bullets + format badges)
 *   Section 7b — FINAL CTA        (<ProgramCTASection> component)
 *
 * All shared visual components are imported from @/components/program/shared.
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
  title: "Life Skills Program for Students (Ages 8-21) | An Enlightened Learner",
  description:
    "Structured life skills development for children & teens. Emotional intelligence, communication, self-discipline & academic efficiency. Pre & post assessment. 3 levels.",
  openGraph: {
    title: "An Enlightened Learner — Life Skills Program for Students",
    description:
      "Structured life skills development for children & teens aged 8–21. Three levels: Foundation, Growth, Mastery. Assessment-based placement.",
    type: "website",
    url: "https://hiddenpotentialskills.com/programs/enlightened-learner",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/programs/enlightened-learner",
  },
};

// ── Schema.org JSON-LD ───────────────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "An Enlightened Learner — Structured Life Skills Program for Students",
  description:
    "Structured life skills development for children and teens aged 8–21. Covers emotional intelligence, communication, self-discipline, academic efficiency, and real-world readiness.",
  url: "https://hiddenpotentialskills.com/programs/enlightened-learner",
  provider: {
    "@type": "Organization",
    name: "Hidden Potential",
    url: "https://hiddenpotentialskills.com",
  },
  educationalLevel: "8–21 years",
  teaches: [
    "Self-Awareness",
    "Emotional Intelligence",
    "Communication Skills",
    "Self-Discipline",
    "Growth Mindset",
    "Goal Setting",
    "Time Management",
    "Study Skills",
    "Mindfulness",
    "Peer Relations",
    "Financial Literacy",
    "Digital Literacy",
  ],
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      name: "HP Foundation Level",
      courseMode: ["onsite", "online", "blended"],
      duration: "P3M",
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
      name: "HP Growth Series",
      courseMode: ["onsite", "online", "blended"],
      duration: "P6M",
    },
    {
      "@type": "CourseInstance",
      name: "HP Mastery Track",
      courseMode: ["onsite", "online", "blended"],
      duration: "P12M",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hiddenpotentialskills.com" },
    { "@type": "ListItem", position: 2, name: "Programs", item: "https://hiddenpotentialskills.com/programs/enlightened-learner" },
    { "@type": "ListItem", position: 3, name: "An Enlightened Learner", item: "https://hiddenpotentialskills.com/programs/enlightened-learner" },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const coreDeliverables = [
  {
    title: "Emotional Intelligence",
    desc: "Self-awareness, empathy, and emotional regulation for healthier relationships and decisions.",
    serviceLink: "/services/emotional-intelligence",
    serviceLinkLabel: "Explore EI Coaching",
  },
  {
    title: "Clear, Confident Communication",
    desc: "Verbal and non-verbal expression that works in classrooms, social settings, and leadership roles.",
    serviceLink: "/services/communication-skills",
    serviceLinkLabel: "Explore Communication Skills",
  },
  {
    title: "Self-Discipline & Focus",
    desc: "The structured habits and internal drive to stay consistent, manage time, and follow through.",
  },
  {
    title: "Growth Mindset",
    desc: "Shifting from fixed thinking to a belief in effort, learning, and the ability to grow.",
  },
  {
    title: "Academic Efficiency",
    desc: "Smart study strategies, memory techniques, and goal execution to improve performance without burnout.",
  },
  {
    title: "Real-World Readiness",
    desc: "Financial literacy, digital responsibility, and the practical life skills school never teaches.",
  },
];

const audiences = [
  {
    icon: "🎯",
    title: "Students Aged 8–21",
    desc: "Ready to grow but needing structured guidance, clear direction, and a defined development pathway.",
  },
  {
    icon: "💬",
    title: "Children with Low Confidence",
    desc: "Experiencing hesitation, social anxiety, or emotional confusion in school and peer interactions.",
    serviceLink: "/services/confidence-building",
    serviceLinkLabel: "Confidence Building",
  },
  {
    icon: "🧭",
    title: "Teens Facing Peer Pressure",
    desc: "Navigating identity questions, emotional challenges, and the complex social pressures of adolescence.",
  },
  {
    icon: "📚",
    title: "Students Struggling with Focus",
    desc: "Facing difficulty with time management, self-discipline, or academic performance despite their clear potential.",
  },
  {
    icon: "🚀",
    title: "Young Adults Preparing for College",
    desc: "Building leadership, professional communication, and independent decision-making for the chapter ahead.",
  },
];

const skillAreas = [
  "Self-Awareness",
  "Managing Emotions",
  "Mindfulness Practices",
  "Communication Skills",
  "Handling Peer Pressure",
  "Self-Discipline",
  "Growth Mindset",
  "Goal Setting",
  "Time Management",
  "Smart Study Skills",
  "Creative Writing & Expression",
  "Financial Literacy",
  "Digital Literacy",
];

const domains: DomainCardData[] = [
  {
    num: "01",
    title: "Self Mastery",
    desc: "Building the internal foundation — self-awareness, emotional regulation, mindfulness, and the discipline to grow intentionally.",
    skills: ["Self-Awareness", "Emotional Regulation", "Growth Mindset", "Self-Discipline"],
    accent: "teal",
  },
  {
    num: "02",
    title: "Communication & Social Skills",
    desc: "Developing the ability to express clearly, handle conflict, build peer relationships, and lead with confidence.",
    skills: ["Public Speaking", "Assertiveness", "Peer Interaction", "Conflict Handling"],
    accent: "gold",
  },
  {
    num: "03",
    title: "Academic & Thinking Skills",
    desc: "Smart study strategies, creative expression, structured goal execution, and real-world decision-making.",
    skills: ["Smart Study Strategies", "Creative Writing", "Goal Execution", "Decision-Making"],
    accent: "navy",
  },
  {
    num: "04",
    title: "Real-World Readiness",
    desc: "Preparing students for life beyond the classroom — financial literacy, digital responsibility, and leadership.",
    skills: ["Financial Literacy", "Digital Literacy", "Time Management", "Responsible Behaviour"],
    accent: "teal",
  },
];

const pathwayLevels: PathwayLevelData[] = [
  {
    name: "HP Foundation",
    duration: "3 Months",
    desc: "Core skills and self-awareness. A safe, structured environment to understand yourself and begin building.",
    accent: "teal",
  },
  {
    name: "HP Growth Series",
    duration: "6 Months",
    desc: "Deeper practice and real-world application. Building consistency, genuine confidence, and social mastery.",
    accent: "gold",
  },
  {
    name: "HP Mastery Track",
    duration: "12 Months",
    desc: "Leadership, identity integration, and sustainable long-term transformation — the full journey.",
    accent: "white",
  },
];

const assessmentSteps: AssessmentStepData[] = [
  {
    num: "01",
    title: "Pre-Assessment (Baseline Evaluation)",
    desc: "A structured diagnostic to identify current skill levels, strengths, and specific areas needing development before the program begins.",
  },
  {
    num: "02",
    title: "Structured Level Placement",
    desc: "Assessment results determine the right entry point — Foundation, Growth Series, or Mastery Track — so no learner starts at the wrong level.",
  },
  {
    num: "03",
    title: "Ongoing Skill Observation",
    desc: "Regular structured observation during every session tracks practice consistency and real-time progress across skill domains.",
  },
  {
    num: "04",
    title: "360° Feedback",
    desc: "Input collected from parents, teachers, and the learner themselves to provide a complete, well-rounded picture of growth.",
  },
  {
    num: "05",
    title: "Post-Assessment (Progress Report)",
    desc: "A documented evaluation comparing baseline to completion — growth is visible, measurable, and presented as a formal progress report.",
  },
];

const expectedOutcomes = [
  {
    text: "Higher self-confidence and emotional resilience",
    linkHref: "/services/confidence-building",
    linkLabel: "Confidence Building",
  },
  {
    text: "Strong emotional control and self-regulation under pressure",
  },
  {
    text: "Clear, assertive communication in every setting",
    linkHref: "/services/communication-skills",
    linkLabel: "Communication Skills Training",
  },
  { text: "Improved focus, discipline, and consistent time management" },
  { text: "Better academic habits, structured goals, and execution" },
  {
    text: "Responsible digital awareness and foundational financial literacy",
  },
  { text: "Leadership readiness and a genuine, embedded growth mindset" },
];

const ctaData: ProgramCtaData = {
  headline: "Build the Skills That School Doesn't Teach.",
  subtext:
    "Start with a structured assessment. Receive your level placement. Begin a development journey that creates real, measurable change.",
  cta1Label: "Take a Skill Assessment",
  cta1Href: "/assessment",
  cta2Label: "Book a Discovery Call",
  cta2Href: "/contact",
  crossSellText: "Also explore:",
  crossSellHref: "/programs/communication-mastery",
  crossSellLabel: "Communication Mastery — for focused speaking and leadership skills",
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AELPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          Background: Dark navy gradient
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#0f0f1a",
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
              "radial-gradient(circle at center, rgba(212,168,67,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-gold rounded-full"
              style={{
                background: "rgba(212,168,67,0.12)",
                border: "1px solid rgba(212,168,67,0.25)",
              }}
            >
              Flagship Program
            </span>
            <span
              className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-teal rounded-full"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              Ages 8–21
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}>
            An Enlightened Learner — Structured Life Skills Program for Students (Ages 8–21)
          </h1>

          {/* Lora italic transformation tagline */}
          <p
            className="text-xl md:text-2xl text-white/75 leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            From hesitation to confidence. From emotional confusion to clarity. From academic
            pressure to resilient growth.
          </p>

          {/* Age sub-group tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["8–12 Years", "13–16 Years", "17–21 Years"].map((group) => (
              <span
                key={group}
                className="px-3 py-1 text-xs font-semibold text-white/70 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                {group}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Take a Skill Assessment
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/5 rounded-md transition-colors"
            >
              Apply for Enrollment
            </Link>
          </div>

          {/* Trust indicators row */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/45">
            {[
              "Pre & Post Assessment Included",
              "3 Development Levels",
              "Delhi · Noida · Online",
              "Assessment-Based Placement",
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
              Six Core Areas of Transformation
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Every skill developed in this program is structured, practised, and assessed — not
              discussed once and forgotten.
            </p>
          </div>

          {/* 6 deliverable cards */}
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

          {/* Gold callout — Pre/Post Assessment */}
          <div
            className="rounded-lg p-6 border-l-4 max-w-3xl mx-auto mb-12"
            style={{ borderColor: "#D4A843", background: "#FBF7EE" }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "#D4A843" }}
              >
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-primary-navy mb-1">
                  Pre-Assessment & Post-Assessment Included at Every Level
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Every learner begins with a structured diagnostic assessment and ends with a
                  formal progress report — so growth is always visible, documented, and measurable.
                  No guesswork. No assumptions. Only evidence.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Framework */}
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-5">
              Learning Framework
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["Awareness", "Practice", "Application", "Mastery"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-3">
                  <span className="px-5 py-2.5 text-sm font-bold text-primary-teal bg-teal-light rounded-md border border-primary-teal/15">
                    {stage}
                  </span>
                  {i < 3 && (
                    <svg className="w-4 h-4 text-primary-teal/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
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
              Is This Program Right for Your Child or Student?
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              The An Enlightened Learner program is designed for students at any stage of
              development — with age-specific sub-groups within each level.
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

            {/* Age sub-groups callout card */}
            <div
              className="rounded-lg p-6 flex flex-col justify-center"
              style={{
                background: "linear-gradient(135deg, #EDE9FE 0%, #EDE9FE 100%)",
                border: "1px solid rgba(124,58,237,0.12)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-3">
                Age-Specific Groups
              </p>
              {[
                { range: "8–12 Years", label: "Foundation Stage" },
                { range: "13–16 Years", label: "Growth Stage" },
                { range: "17–21 Years", label: "Mastery Stage" },
              ].map((g) => (
                <div key={g.range} className="flex items-center justify-between py-2 border-b border-primary-teal/10 last:border-0">
                  <span className="text-sm font-bold text-primary-navy">{g.range}</span>
                  <span className="text-xs font-semibold text-primary-teal bg-teal-light px-2 py-0.5 rounded-full">
                    {g.label}
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
              13 Key Areas Across 4 Skill Domains
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              A complete life skills curriculum — structured, progressive, and covering every
              dimension of student development.
            </p>
          </div>

          {/* 13 skill chips — flowing layout */}
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

          {/* Internal link — Communication Skills service page */}
          <p className="text-center text-sm text-charcoal/70 mt-8">
            Looking for focused communication training?{" "}
            <Link
              href="/services/communication-skills"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Explore Communication Skills Training →
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
          background: "#0f0f1a",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <ProgramSectionLabel light>Development Pathway</ProgramSectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Three Levels. One Clear Journey.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Assessment-based placement ensures every learner starts at the right level — and
              the pathway is designed to move with them as they grow.
            </p>
          </div>

          {/* Pathway levels with connectors */}
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
            {pathwayLevels.map((level, i) => (
              <div key={level.name} className="flex items-stretch md:flex-1">
                <PathwayLevelCard data={level} />
                {/* Connector arrow between cards — desktop only */}
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
              Placement is determined by the initial assessment, not age alone.{" "}
              <Link
                href="/about"
                className="text-white/65 hover:text-white font-semibold transition-colors"
              >
                Learn about Supreet&rsquo;s methodology →
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
                Growth Is Measured, Not Assumed
              </h2>
              <p className="text-base text-charcoal/80 leading-relaxed mb-8">
                Every stage of the An Enlightened Learner program is supported by structured
                evaluation — from the first session to the final report. Progress is documented,
                visible, and meaningful.
              </p>

              {/* Gold quote callout */}
              <div
                className="rounded-lg p-6"
                style={{
                  background: "#FBF7EE",
                  borderLeft: "3px solid #D4A843",
                }}
              >
                <p
                  className="text-lg text-primary-navy leading-relaxed"
                  style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
                >
                  &ldquo;Growth is not left to chance. It is measured, documented, and visible at
                  every stage of the journey.&rdquo;
                </p>
                <p className="text-xs font-semibold text-primary-teal mt-3">
                  — Hidden Potential Assessment Framework
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
                , Noida, Gurgaon, Faridabad &amp; Online across India.
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

            {/* Right — Format + enroll prompt */}
            <div className="flex flex-col gap-6">
              {/* Format */}
              <div className="bg-white rounded-lg p-7 border border-gray-200 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-4">
                  Program Format
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  {["Offline", "Online", "Hybrid"].map((f) => (
                    <FormatBadge key={f} label={f} />
                  ))}
                </div>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  Sessions are available in-person at Dwarka, Delhi and online for learners
                  across Noida, Gurgaon, Faridabad, and pan-India.
                </p>
              </div>

              {/* Pricing note */}
              <div className="bg-white rounded-lg p-7 border border-gray-200 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-3">
                  Enrollment & Pricing
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                  Program fees vary by level and format. Begin with a free skills assessment to
                  identify the right level and receive full program details.
                </p>
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  Get Pricing & Start with Assessment
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Cross-sell */}
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
                  href="/programs/communication-mastery"
                  className="group flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-bold text-primary-navy leading-snug">
                      Communication Mastery
                    </p>
                    <p className="text-xs text-charcoal/60 mt-0.5">
                      For focused speaking & leadership skills
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

/**
 * PROGRAM PAGE — COMMUNICATION MASTERY
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /programs/communication-mastery
 *
 * 7-section structure (identical template to An Enlightened Learner):
 *   Section 1  — HERO             (navy gradient, H1, Lora tagline, age badge, 2 CTAs)
 *   Section 2  — WHAT IT DELIVERS (off-white, 5 outcomes, gold callout, framework)
 *   Section 3  — WHO IT'S FOR     (white, 5 audience cards + program reach callout)
 *   Section 4  — KEY AREAS        (off-white, 10 skill chips + 4 domain cards)
 *   Section 5  — PATHWAY          (navy dark, 3 level cards + connectors)
 *   Section 6  — ASSESSMENT       (white, 5-step timeline + quote callout)
 *   Section 7a — OUTCOMES+FORMAT  (off-white, outcome bullets + format badges)
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
  title: "Communication Skills Training (Ages 8-65) | Communication Mastery",
  description:
    "Structured communication & leadership development. Public speaking, voice modulation, assertive communication & professional expression. Pre & post assessment. Delhi NCR.",
  openGraph: {
    title: "Communication Mastery — Structured Communication & Leadership Training",
    description:
      "Public speaking, voice modulation, leadership presence & professional communication for ages 8–65. Three levels: Foundation, Growth, Mastery. Assessment-based placement.",
    type: "website",
    url: "https://hiddenpotentialskills.com/programs/communication-mastery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Communication Mastery — Structured Communication & Leadership Training",
    description:
      "Public speaking, voice modulation, leadership presence & professional communication for ages 8–65. Assessment-based placement. Delhi NCR.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/programs/communication-mastery",
  },
};

// ── Schema.org JSON-LD ───────────────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Communication Mastery — Structured Communication & Leadership Training",
  description:
    "Structured communication and leadership development program for ages 8–65. Covers public speaking, voice modulation, professional communication, assertiveness, body language, and leadership expression.",
  url: "https://hiddenpotentialskills.com/programs/communication-mastery",
  provider: {
    "@type": "Organization",
    name: "Hidden Potential",
    url: "https://hiddenpotentialskills.com",
  },
  educationalLevel: "8-65 years",
  teaches: [
    "Public Speaking",
    "Voice Modulation & Clarity",
    "Structured Thinking in Speech",
    "Presentation Skills",
    "Assertive Communication",
    "Body Language Awareness",
    "Active Listening",
    "Conflict Handling",
    "Professional Email & Workplace Communication",
    "Interview & Leadership Communication",
  ],
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      name: "HP Foundation Level — Core Communication Skills",
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
      name: "HP Growth Series — Applied Public & Professional Communication",
      courseMode: ["onsite", "online", "blended"],
      duration: "P6M",
    },
    {
      "@type": "CourseInstance",
      name: "HP Mastery Track — Leadership & Executive Communication",
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

// ── Page Content Data ─────────────────────────────────────────────────────────

const coreDeliverables = [
  {
    title: "Verbal Communication Clarity",
    desc: "Structured, articulate speech that is clear, organised, and engaging in every situation — from classrooms to boardrooms.",
    serviceLink: "/services/communication-skills",
    serviceLinkLabel: "Explore Communication Skills",
  },
  {
    title: "Public Speaking Confidence",
    desc: "Overcoming hesitation and stage fright to speak with genuine authority, presence, and composure in front of any audience.",
    serviceLink: "/services/confidence-building",
    serviceLinkLabel: "Explore Confidence Building",
  },
  {
    title: "Interpersonal Effectiveness",
    desc: "Active listening, empathy in conversation, and the ability to build rapport, read the room, and connect meaningfully with others.",
  },
  {
    title: "Leadership Presence",
    desc: "Commanding attention through executive body language, confident posture, and the ability to influence and persuade with integrity.",
  },
  {
    title: "Professional Expression",
    desc: "Workplace communication etiquette, structured email writing, formal presentations, and interview-ready communication skills.",
  },
];

const audiences = [
  {
    icon: "🎤",
    title: "Students Building Speaking Confidence",
    desc: "Struggling with speaking up in class, presentations, or social settings and ready to build structured communication skills.",
    serviceLink: "/services/confidence-building",
    serviceLinkLabel: "Confidence Building",
  },
  {
    icon: "💼",
    title: "Young Adults Entering Professional Spaces",
    desc: "Preparing for interviews, campus placements, or first jobs and needing polished, professional communication skills.",
  },
  {
    icon: "📊",
    title: "Working Professionals Improving Presence",
    desc: "Confident in their field but wanting to communicate with greater clarity, authority, and leadership presence in meetings and presentations.",
  },
  {
    icon: "🚀",
    title: "Entrepreneurs & Corporate Teams",
    desc: "Business owners and corporate professionals seeking structured communication training for pitches, leadership, and team interaction.",
  },
  {
    icon: "💬",
    title: "Women Seeking Confidence in Expression",
    desc: "Building the voice, assertiveness, and presence to communicate confidently in personal, professional, and leadership contexts.",
  },
];

const skillAreas = [
  "Public Speaking",
  "Voice Modulation & Clarity",
  "Structured Thinking in Speech",
  "Presentation Skills",
  "Assertive Communication",
  "Body Language Awareness",
  "Active Listening",
  "Conflict Handling",
  "Professional Email & Workplace Communication",
  "Interview & Leadership Communication",
];

const domains: DomainCardData[] = [
  {
    num: "01",
    title: "Confidence & Presence",
    desc: "Building the internal foundation of vocal confidence — overcoming hesitation, developing stage presence, and cultivating executive body language.",
    skills: ["Overcoming Hesitation", "Stage Confidence", "Executive Body Language", "Vocal Confidence"],
    accent: "teal",
  },
  {
    num: "02",
    title: "Verbal & Non-Verbal Communication",
    desc: "Developing precision in speech — clarity of thought, articulation, tone control, posture awareness, and conscious non-verbal expression.",
    skills: ["Speech Clarity", "Articulation", "Tone Control", "Posture Awareness"],
    accent: "gold",
  },
  {
    num: "03",
    title: "Professional Communication",
    desc: "Mastering the language of professional settings — workplace etiquette, structured email writing, formal presentations, and assertive expression.",
    skills: ["Workplace Etiquette", "Email Writing", "Structured Presentations", "Assertiveness"],
    accent: "navy",
  },
  {
    num: "04",
    title: "Leadership Communication",
    desc: "Developing the ability to influence, persuade, handle objections with grace, and communicate effectively in team and leadership contexts.",
    skills: ["Influence & Persuasion", "Handling Objections", "Team Interaction", "Leadership Presence"],
    accent: "teal",
  },
];

const pathwayLevels: PathwayLevelData[] = [
  {
    name: "HP Foundation",
    duration: "3 Months",
    desc: "Core communication skills. Building basic vocal confidence, clarity of expression, and structured thinking in speech.",
    accent: "teal",
  },
  {
    name: "HP Growth Series",
    duration: "6 Months",
    desc: "Applied public speaking and professional communication. Group practice, presentations, and real-world speaking simulations.",
    accent: "gold",
  },
  {
    name: "HP Mastery Track",
    duration: "12 Months",
    desc: "Leadership and executive communication. Influence, persuasion, high-stakes presentations, and commanding presence in any context.",
    accent: "white",
  },
];

const assessmentSteps: AssessmentStepData[] = [
  {
    num: "01",
    title: "Pre-Assessment (Communication Baseline Evaluation)",
    desc: "A structured diagnostic to evaluate current speaking confidence, clarity, body language, and professional communication level before the program begins.",
  },
  {
    num: "02",
    title: "Recorded Speaking Analysis",
    desc: "A video or live recording of a structured speaking task is reviewed to identify specific speech patterns, hesitation habits, and areas for targeted development.",
  },
  {
    num: "03",
    title: "Structured Feedback",
    desc: "Detailed, actionable feedback delivered after every session — covering vocal delivery, body language, structure, and professional presence.",
  },
  {
    num: "04",
    title: "Practical Simulations",
    desc: "Live speaking exercises, mock presentations, and role-played professional scenarios to practice and reinforce skills in realistic, low-pressure environments.",
  },
  {
    num: "05",
    title: "Post-Assessment (Progress Review)",
    desc: "A documented comparison of baseline to completion — growth in speaking confidence, clarity, and presence is visible, measurable, and presented as a formal progress report.",
  },
];

const expectedOutcomes = [
  {
    text: "Clear, confident speaking in every personal and professional context",
    linkHref: "/services/communication-skills",
    linkLabel: "Communication Skills Training",
  },
  {
    text: "Strong stage presence and genuine public speaking ability",
  },
  {
    text: "Structured thinking while speaking — organised, persuasive, memorable",
  },
  {
    text: "Improved professional communication and workplace effectiveness",
    linkHref: "/services/confidence-building",
    linkLabel: "Confidence Building",
  },
  {
    text: "Leadership readiness — the voice, presence, and influence to lead",
  },
  {
    text: "Significantly reduced hesitation, anxiety, and fear of speaking",
  },
];

const ctaData: ProgramCtaData = {
  headline: "Find Your Voice. Build Your Presence.",
  subtext:
    "Begin with a communication baseline assessment. Receive your structured pathway. Start building the communication skills that shape careers and command attention.",
  cta1Label: "Book a Communication Assessment",
  cta1Href: "/assessment",
  cta2Label: "Book a Discovery Call",
  cta2Href: "/contact",
  crossSellText: "Also explore:",
  crossSellHref: "/programs/enlightened-learner",
  crossSellLabel: "An Enlightened Learner — for complete life skills development",
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CommunicationMasteryPage() {
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
          background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)",
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
              "radial-gradient(circle at center, rgba(200,169,81,0.07) 0%, transparent 70%)",
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
              Communication &amp; Leadership
            </span>
            <span
              className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-gold rounded-full"
              style={{
                background: "rgba(200,169,81,0.12)",
                border: "1px solid rgba(200,169,81,0.25)",
              }}
            >
              Ages 8–65
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}>
            Communication Mastery — Structured Communication &amp; Leadership Training (Ages 8–65)
          </h1>

          {/* Lora italic transformation tagline */}
          <p
            className="text-xl md:text-2xl text-white/75 leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            From fear of speaking to leadership presence. From unclear expression to structured
            influence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/assessment"
              className="btn-premium-fill"
            >
              Book a Communication Assessment
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </Link>
            <Link
              href="/enroll"
              className="btn-premium-ghost-plain"
            >
              Enroll in Communication Mastery
            </Link>
          </div>

          {/* Trust indicators row */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/45">
            {[
              "Pre & Post Assessment Included",
              "3 Development Levels",
              "Individual & Group & Corporate",
              "Delhi · Noida · Online Pan-India",
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
              Five Pillars of Communication Development
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Every skill in this program is practised, assessed, and applied — not just discussed.
              Communication is built through structured, repeated, real-world practice.
            </p>
          </div>

          {/* 5 deliverable cards — 2 col / 3 col layout, last row centred */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {coreDeliverables.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-1 h-8 rounded-full mb-4"
                  style={{ backgroundColor: "#7C3AED" }}
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
                  style={{ backgroundColor: "#7C3AED" }}
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
            style={{ borderColor: "#C8A951", background: "#FBF7EE" }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "#C8A951" }}
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
                  Pre-Assessment and Post-Assessment for Measurable Communication Growth
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Every learner begins with a structured communication baseline evaluation and
                  completes with a documented progress report — so growth in speaking confidence,
                  clarity, and professional presence is always visible and evidence-based.
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
              Is This Program Right for You?
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Communication Mastery serves ages 8–65 across individual, group, school, and
              corporate formats — with the same structured developmental approach at every level.
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

            {/* Program reach callout card */}
            <div
              className="rounded-lg p-6 flex flex-col justify-center"
              style={{
                background: "linear-gradient(135deg, #EDE9FE 0%, #EDE9FE 100%)",
                border: "1px solid rgba(124,58,237,0.12)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-4">
                Program Reach
              </p>
              {[
                { label: "Age Range",  value: "8 to 65 Years"          },
                { label: "Format",     value: "Individual & Group"       },
                { label: "Mode",       value: "Offline · Online"         },
                { label: "Corporate",  value: "Schools & Organisations"  },
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
          SECTION 4 — KEY AREAS & SKILL DOMAINS
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <ProgramSectionLabel>Curriculum</ProgramSectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              10 Key Areas Across 4 Skill Domains
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              A complete communication curriculum — structured, progressive, and covering every
              dimension of personal and professional expression.
            </p>
          </div>

          {/* 10 skill chips — flowing layout */}
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
            Looking for focused confidence training?{" "}
            <Link
              href="/services/confidence-building"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Explore Confidence Building →
            </Link>
            <span className="mx-3 text-charcoal/30">·</span>
            Interested in the full life skills program?{" "}
            <Link
              href="/programs/enlightened-learner"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              An Enlightened Learner →
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
          background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <ProgramSectionLabel light>Development Pathway</ProgramSectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Three Levels. One Clear Journey.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Assessment-based placement ensures every learner starts at the right level — and the
              pathway is designed to grow with them from core skills to executive-level communication.
            </p>
          </div>

          {/* Pathway levels with connectors */}
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
              Placement is determined by the initial communication assessment, not age alone.{" "}
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
                Every stage of Communication Mastery is supported by structured evaluation —
                from baseline speaking analysis to live practice feedback. Progress in
                confidence, clarity, and professional presence is always documented and visible.
              </p>

              {/* Gold quote callout */}
              <div
                className="rounded-lg p-6"
                style={{ background: "#FBF7EE", borderLeft: "3px solid #C8A951" }}
              >
                <p
                  className="text-lg text-primary-navy leading-relaxed"
                  style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
                >
                  &ldquo;Includes live speaking practice and structured feedback at every level.&rdquo;
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
                , Noida, Gurgaon, Faridabad &amp; Online across India. School and corporate
                workshops available pan-NCR.
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
                  {["Offline", "Online", "Schools & Corporate"].map((f) => (
                    <FormatBadge key={f} label={f} />
                  ))}
                </div>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  Individual sessions in Delhi (Dwarka) and online. Group workshops and
                  school/corporate programs available across Delhi NCR.
                </p>
              </div>

              {/* Pricing note */}
              <div className="bg-white rounded-lg p-7 border border-gray-200 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-3">
                  Enrollment &amp; Pricing
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                  Program fees vary by level and format. Begin with a free communication
                  assessment to identify the right level and receive full program details.
                </p>
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  Get Pricing &amp; Start with Assessment
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

              {/* Cross-sell → AEL */}
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
                  href="/programs/enlightened-learner"
                  className="group flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-bold text-primary-navy leading-snug">
                      An Enlightened Learner
                    </p>
                    <p className="text-xs text-charcoal/60 mt-0.5">
                      For complete life skills development
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

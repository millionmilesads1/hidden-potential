/**
 * PROGRAM PAGE — TRAIN THE TRAINER CERTIFICATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /programs/train-the-trainer
 *
 * 7-section structure:
 *   Section 1  — HERO             (navy gradient, H1, Lora tagline, track badges, 2 CTAs)
 *   Section 2  — WHAT IT DELIVERS (off-white, 5 outcomes, gold callout, framework)
 *   Section 3  — WHO IT'S FOR     (white, 6 audience cards + program info callout)
 *   Section 4  — KEY AREAS        (off-white, 15 skill chips + 4 domain cards)
 *   Section 5  — PATHWAY          (navy dark, 2 tracks + connector)
 *   Section 6  — ASSESSMENT       (white, 6-step timeline + quote callout)
 *   Section 7a — OUTCOMES+FORMAT  (off-white, outcome bullets + format badges + certification)
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
  title: "Train the Trainer Certification | Life Skills Facilitator Program | Hidden Potential",
  description:
    "Become a certified life skills trainer. Master 25 life skills, NLP integration, facilitation techniques & curriculum design. 1-month or 3-month tracks. MSME & Skill India certified.",
  openGraph: {
    title: "Train the Trainer Certification — Become a Certified Life Skills Facilitator in India",
    description:
      "Master 25 life skills, facilitation, curriculum design & NLP integration. 1-month crash course or 3-month full certification. MSME registered. Skill India certified.",
    type: "website",
    url: "https://hiddenpotentialskills.com/programs/train-the-trainer",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/programs/train-the-trainer",
  },
};

// ── Schema.org JSON-LD ───────────────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Train the Trainer Certification — Become a Certified Life Skills Facilitator in India",
  description:
    "A structured certification program for aspiring life skills trainers. Covers 25 life skills, facilitation techniques, curriculum design, NLP integration, and practical training delivery. Two tracks: 1-month crash course and 3-month full certification.",
  url: "https://hiddenpotentialskills.com/programs/train-the-trainer",
  provider: {
    "@type": "Organization",
    name: "Hidden Potential",
    url: "https://hiddenpotentialskills.com",
  },
  educationalLevel: "Adult Professional Development",
  teaches: [
    "Life Skills Curriculum Design",
    "Facilitation Techniques & Group Dynamics",
    "NLP Integration in Training",
    "Outcome-Based Training Module Design",
    "Pre/Post Assessment Tools",
    "Professional Trainer Profile Development",
    "Anchoring & Belief Restructuring",
    "NEP 2020 Life Skills Alignment",
  ],
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      name: "1-Month Crash Course",
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
      name: "3-Month Full Certification",
      courseMode: ["onsite", "online", "blended"],
      duration: "P3M",
    },
  ],
  isAccessibleForFree: false,
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const coreDeliverables = [
  {
    title: "Deep Understanding of Life Skills",
    desc: "Learn all 25 life skills through a structured framework — their definitions, developmental stages, and evidence-based methods for teaching them effectively.",
    serviceLink: "/services/nlp-coaching",
    serviceLinkLabel: "Explore NLP Coaching",
  },
  {
    title: "Training & Facilitation Expertise",
    desc: "Develop the ability to design and deliver engaging, outcome-focused training sessions with confidence, clarity, and professional presence in front of any group.",
  },
  {
    title: "Structured Session Design",
    desc: "Master the art of building outcome-based training modules — from session planning and content sequencing to pre/post assessment tools and structured feedback models.",
  },
  {
    title: "Professional Trainer Identity",
    desc: "Build a credible, professional trainer profile — grounded in certification, curriculum ownership, and demonstrated facilitation competence recognised by MSME and Skill India.",
    serviceLink: "/about",
    serviceLinkLabel: "About Supreet Kaur",
  },
  {
    title: "Independent Income Pathway",
    desc: "Gain the credentials and skills needed to launch your own life skills practice — in schools, corporates, community groups, or as an independent trainer.",
  },
];

const audiences = [
  {
    icon: "🎓",
    title: "Aspiring Life Skills Trainers",
    desc: "Passionate about personal development and ready to build a credible, structured career as a certified life skills facilitator.",
  },
  {
    icon: "📚",
    title: "Educators & School Teachers",
    desc: "Teachers seeking to bring structured life skills into the classroom — aligned with NEP 2020 and delivered with professional confidence.",
    serviceLink: "/for/schools",
    serviceLinkLabel: "Life Skills for Schools",
  },
  {
    icon: "🧭",
    title: "Coaches & Counselors",
    desc: "Professionals already working with people who want to add a structured, certified life skills curriculum to their practice.",
  },
  {
    icon: "👩",
    title: "Women Seeking Professional Identity",
    desc: "Looking to build a meaningful, flexible, and respected career in the life skills space with proper certification and support.",
  },
  {
    icon: "💰",
    title: "Individuals Seeking Secondary Income",
    desc: "Motivated learners ready to monetise their interest in personal development by becoming qualified, independent life skills trainers.",
  },
  {
    icon: "💡",
    title: "Passionate Learners & Change-Makers",
    desc: "People who believe life skills are essential for every individual and want to deliver this change at scale — in communities, schools, or organisations.",
  },
];

const skillAreas = [
  "History & Evolution of Life Skills Education",
  "25 Life Skills Through Structured Framework",
  "NEP 2020 Alignment",
  "Designing Outcome-Based Training Modules",
  "Creating Pre/Post Assessment Tools",
  "Building Professional Trainer Profile",
  "Facilitation Techniques & Group Dynamics",
  "Research-Backed Content Development",
  "Conducting Engaging Sessions",
  "Foundations of NLP",
  "Understanding Belief Systems",
  "NLP Confidence Anchoring",
  "Reframing Techniques",
  "Language Patterns for Influence",
  "Applying NLP in Training",
];

const domains: DomainCardData[] = [
  {
    num: "01",
    title: "Life Skills Curriculum Mastery",
    desc: "Understanding all 25 life skills, their developmental stages, structured delivery sequences, and evidence-based teaching methodologies aligned with NEP 2020.",
    skills: ["25 Life Skills Framework", "Structured Delivery", "NEP 2020 Alignment", "Developmental Stages"],
    accent: "teal",
  },
  {
    num: "02",
    title: "Training & Facilitation Excellence",
    desc: "Developing the ability to design engaging sessions, manage group dynamics, use experiential learning techniques, and facilitate with presence and authority.",
    skills: ["Group Dynamics", "Engagement Techniques", "Experiential Learning", "Facilitation Presence"],
    accent: "gold",
  },
  {
    num: "03",
    title: "Assessment & Program Design",
    desc: "Building structured training modules from scratch — outcome mapping, session planning, pre/post assessment creation, feedback frameworks, and progress measurement.",
    skills: ["Session Planning", "Outcome Mapping", "Pre/Post Assessment", "Feedback Frameworks"],
    accent: "navy",
  },
  {
    num: "04",
    title: "NLP Integration & Behavioural Tools",
    desc: "Applying Neuro-Linguistic Programming techniques in training contexts — anchoring, belief restructuring, language patterns for influence, and mindset-focused facilitation.",
    skills: ["NLP Anchoring", "Belief Restructuring", "Language Patterns", "Mindset Facilitation"],
    accent: "teal",
  },
];

const pathwayLevels: PathwayLevelData[] = [
  {
    name: "1-Month Crash Course",
    duration: "1 Month",
    desc: "Focused intensive covering fundamentals of life skills, core facilitation basics, and an introduction to training module design.",
    accent: "teal",
  },
  {
    name: "3-Month Certification",
    duration: "3 Months",
    desc: "In-depth curriculum study, live facilitation practice, assessment creation, NLP integration, and trainer profile development. Full certification upon successful completion.",
    accent: "gold",
  },
];

const assessmentSteps: AssessmentStepData[] = [
  {
    num: "01",
    title: "Pre-Training Evaluation",
    desc: "A structured diagnostic to understand your current knowledge of life skills, training experience, and learning goals before the program begins.",
  },
  {
    num: "02",
    title: "Structured Assignments",
    desc: "Module-by-module tasks covering life skills theory, curriculum design exercises, and reflective practice submissions reviewed by the trainer.",
  },
  {
    num: "03",
    title: "Session Planning Submission",
    desc: "Design a complete training session from scratch — including objectives, content structure, delivery approach, and evaluation method.",
  },
  {
    num: "04",
    title: "Practical Facilitation Demonstration",
    desc: "Conduct a live or simulated training session before qualified assessors. This is the core evaluation of your readiness as a facilitator.",
  },
  {
    num: "05",
    title: "Feedback & Performance Review",
    desc: "Detailed written and verbal feedback on your facilitation style, content delivery, session design, and professional presence.",
  },
  {
    num: "06",
    title: "Certification Upon Successful Completion",
    desc: "Certification is awarded based on demonstrated competence — curriculum knowledge, facilitation quality, and session design — not attendance alone.",
  },
];

const expectedOutcomes = [
  {
    text: "Structured understanding of all 25 life skills and how to teach them",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "An Enlightened Learner",
  },
  {
    text: "Practical facilitation confidence — ability to train groups with presence and structure",
  },
  {
    text: "Ability to design and deliver complete, outcome-based training sessions independently",
  },
  {
    text: "Assessment creation skills — pre/post tools, feedback models, progress tracking",
  },
  {
    text: "NLP-based behaviour tools for mindset training and effective facilitation",
    linkHref: "/services/nlp-coaching",
    linkLabel: "NLP Coaching",
  },
  {
    text: "A professional trainer profile recognised under MSME and Skill India",
  },
  {
    text: "An independent income pathway — in schools, corporates, or as a freelance trainer",
  },
];

const ctaData: ProgramCtaData = {
  headline: "Turn Your Passion into a Professional Pathway.",
  subtext:
    "Book a discovery call to explore the right certification track for you. The 1-month or 3-month program could be the step that transforms your interest in life skills into a meaningful, certified career.",
  cta1Label: "Apply for Course",
  cta1Href: "/enroll",
  cta2Label: "Book a Discovery Call",
  cta2Href: "/contact",
  crossSellText: "Also explore:",
  crossSellHref: "/programs/enlightened-learner",
  crossSellLabel: "An Enlightened Learner — understand the student programs you'll be trained to deliver",
};

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TrainTheTrainerPage() {
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
        style={{
          background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)",
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 85% 20%, rgba(109,40,217,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 -left-16 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(200,169,81,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          {/* Label badge */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-teal rounded-full"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              Certification Program
            </span>
            <span
              className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-gold rounded-full"
              style={{
                background: "rgba(200,169,81,0.12)",
                border: "1px solid rgba(200,169,81,0.25)",
              }}
            >
              MSME &amp; Skill India Certified
            </span>
          </div>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Train the Trainer Certification — Become a Certified Life Skills Facilitator in India
          </h1>

          {/* Lora italic tagline */}
          <p
            className="text-xl md:text-2xl text-white/75 leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            From learner to leader. From passion to professional pathway.
          </p>

          {/* Course track badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {["1-Month Crash Course", "3-Month Certification"].map((track) => (
              <span
                key={track}
                className="px-4 py-2 text-sm font-bold text-white rounded-md"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.20)",
                }}
              >
                {track}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Apply for Course
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
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/5 rounded-md transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/45">
            {[
              "MSME Registered",
              "Skill India Certified",
              "NLP Integration Included",
              "Practical Facilitation Training",
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
              Five Pillars of Trainer Development
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              This program doesn&rsquo;t just teach you about life skills — it trains you to teach
              them. Every outcome is grounded in structured practice and demonstrated competence.
            </p>
          </div>

          {/* 5 deliverable cards */}
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

          {/* Gold callout */}
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
                  Certification Awarded Based on Demonstrated Competence — Not Attendance
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Includes practical training, curriculum design exposure, and NLP integration.
                  Participants conduct live or simulated training sessions before certification is awarded.
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
              {["Awareness", "Practice", "Application", "Demonstration"].map((stage, i) => (
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
              Is This Certification Right for You?
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              This program is built for individuals who believe life skills matter — and are ready
              to make teaching them their professional identity.
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

            {/* Program info callout card */}
            <div
              className="rounded-lg p-6 flex flex-col justify-center"
              style={{
                background: "linear-gradient(135deg, #EDE9FE 0%, #EDE9FE 100%)",
                border: "1px solid rgba(124,58,237,0.12)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-4">
                Course Details
              </p>
              {[
                { label: "Track 1",       value: "1-Month Crash Course"    },
                { label: "Track 2",       value: "3-Month Certification"   },
                { label: "Certification", value: "MSME + Skill India"       },
                { label: "Mode",          value: "Online · Offline · Hybrid" },
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
              15 Key Areas Across 4 Skill Domains
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              A complete trainer curriculum — covering life skills theory, facilitation craft,
              curriculum design, and NLP integration in one structured program.
            </p>
          </div>

          {/* 15 skill chips */}
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
          <p className="text-center text-sm text-charcoal/55 mt-8">
            Want to experience the NLP approach first?{" "}
            <Link
              href="/services/nlp-coaching"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Explore NLP Coaching →
            </Link>
            <span className="mx-3 text-charcoal/30">·</span>
            See the programs you&rsquo;ll be trained to deliver:{" "}
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
            <ProgramSectionLabel light>Certification Tracks</ProgramSectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Two Tracks. One Certification Goal.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Choose the track that fits your timeline. Both lead to the same certified outcome —
              demonstrated life skills facilitation competence.
            </p>
          </div>

          {/* 2 track cards with connector */}
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0 max-w-3xl mx-auto">
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
              Participants conduct live or simulated training sessions before certification is awarded.{" "}
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
                Certification Is Earned, Not Granted
              </h2>
              <p className="text-base text-charcoal/80 leading-relaxed mb-8">
                Every stage of the Train the Trainer program is supported by structured evaluation.
                From session planning to live facilitation, your competence as a trainer is
                assessed at every step — not just at the end.
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
                  &ldquo;Certification is earned through demonstrated competence — not just
                  attendance.&rdquo;
                </p>
                <p className="text-xs font-semibold text-primary-teal mt-3">
                  — Hidden Potential Certification Framework
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
                {" "}and online across India. In-person facilitation assessments available at the
                Delhi centre.
              </p>
            </div>

            {/* Right — 6-step assessment timeline */}
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
                What You Gain from This Certification
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

            {/* Right — Format + certification + cross-sell */}
            <div className="flex flex-col gap-6">
              {/* Format */}
              <div className="bg-white rounded-lg p-7 border border-gray-200 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-4">
                  Program Format
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  {["Online", "Offline", "Hybrid"].map((f) => (
                    <FormatBadge key={f} label={f} />
                  ))}
                </div>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  In-person sessions at the Delhi (Dwarka) centre and online across India.
                  Practical facilitation demonstrations can be conducted in-person or via video.
                </p>
              </div>

              {/* Certification badge */}
              <div className="bg-white rounded-lg p-7 border border-gray-200 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-3">
                  Certification
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                  Yes — Hidden Potential is registered under MSME and trainings are conducted
                  under Skill India. Certification is issued upon successful completion of all
                  assessment requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["MSME Registered", "Skill India Certified"].map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1.5 text-xs font-bold text-primary-gold rounded-md"
                      style={{ background: "#FBF7EE", border: "1px solid rgba(200,169,81,0.30)" }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
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
                      Understand the student programs you&rsquo;ll be trained to deliver
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

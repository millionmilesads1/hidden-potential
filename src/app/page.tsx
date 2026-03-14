import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    absolute: "Life Skills Training in Delhi | Hidden Potential — Structured Growth Pathways",
  },
  description:
    "Structured life skills programs for students, women & professionals in Delhi. Assessment-based placement. 14+ years experience. 5000+ trained. Book free evaluation.",
  openGraph: {
    title: "Hidden Potential — Life Skills Training Academy in Delhi",
    description:
      "Structured transformational pathways for students, women, professionals and future trainers.",
    type: "website",
    url: "https://hiddenpotentialskills.com",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com",
  },
};

// ── Schema.org JSON-LD ───────────────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hiddenpotentialskills.com/#organization",
      name: "Hidden Potential",
      url: "https://hiddenpotentialskills.com",
      telephone: "+919899209335",
      email: "hiddenpotential2030@gmail.com",
      founder: { "@type": "Person", name: "Supreet Kaur" },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://hiddenpotentialskills.com/#localbusiness",
      name: "Hidden Potential",
      description:
        "Structured life skills training academy offering assessment-based transformational programs for students, women, professionals, and aspiring trainers in Delhi NCR.",
      telephone: "+919899209335",
      email: "hiddenpotential2030@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka",
        addressLocality: "South West Delhi",
        addressRegion: "Delhi",
        postalCode: "110075",
        addressCountry: "IN",
      },
      openingHours: ["Mo-Fr 10:00-19:00"],
      areaServed: ["Delhi", "Noida", "Gurgaon", "Faridabad"],
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://hiddenpotentialskills.com/#educational",
      name: "Hidden Potential",
      description:
        "Structured life skills training academy offering assessment-based transformational programs for students, women, professionals, and aspiring trainers in Delhi NCR.",
      url: "https://hiddenpotentialskills.com",
      telephone: "+919899209335",
      email: "hiddenpotential2030@gmail.com",
      founder: { "@type": "Person", name: "Supreet Kaur" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka",
        addressLocality: "South West Delhi",
        addressRegion: "Delhi",
        postalCode: "110075",
        addressCountry: "IN",
      },
      areaServed: ["Delhi", "Noida", "Gurgaon", "Faridabad"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://hiddenpotentialskills.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hiddenpotentialskills.com",
        },
      ],
    },
  ],
};

// ── Data ─────────────────────────────────────────────────────────────────────
const heroStats = [
  { value: "14+",        label: "Years Experience" },
  { value: "5,000+",     label: "Individuals Trained" },
  { value: "200+",       label: "Trainers Developed" },
  { value: "Josh Talks", label: "Speaker" },
  { value: "NEP 2020",   label: "Certified · IGNOU" },
];

const pillars = [
  {
    num: "01",
    title: "System",
    desc: "A defined developmental pathway — from where you are to where you need to be. No fragmented sessions, only one clear journey.",
    hoverClass: "card-hover-purple",
  },
  {
    num: "02",
    title: "Science",
    desc: "Emotional intelligence research, behavioural psychology, and NLP frameworks that underpin every single module and interaction.",
    hoverClass: "card-hover-teal",
  },
  {
    num: "03",
    title: "Structure",
    desc: "Guided practice, real-life application, and continuous feedback at every level of the development journey.",
    hoverClass: "card-hover-gold",
  },
];

// Number ghost (large, low-opacity) accent per pillar
const pillarAccent = ["#6F00FF", "#0D9488", "#D4A843"];

const growthStages = [
  { num: "01", label: "Awareness",   desc: "Understand where you truly are" },
  { num: "02", label: "Practice",    desc: "Build new skills intentionally" },
  { num: "03", label: "Application", desc: "Apply in real-life contexts" },
  { num: "04", label: "Mastery",     desc: "Lead, teach, and sustain growth" },
];

const programs = [
  {
    name: "An Enlightened Learner",
    ages: "Ages 8–21",
    tagline: "From hesitation to confidence. From emotional confusion to clarity.",
    desc: "A complete life skills curriculum across self-mastery, communication, academic thinking, and real-world readiness. Three structured levels for every stage of childhood and adolescence.",
    href: "/programs/enlightened-learner",
    accent: "#6F00FF",
    lightBg: "#F3E8FF",
    borderBase: "rgba(111,0,255,0.1)",
    hoverClass: "card-hover-purple",
  },
  {
    name: "Communication Mastery",
    ages: "Ages 8–65",
    tagline: "From fear of speaking to leadership presence.",
    desc: "Build confidence and clarity to express yourself powerfully — in every personal and professional situation.",
    href: "/programs/communication-mastery",
    accent: "#0D9488",
    lightBg: "#E6F7F5",
    borderBase: "rgba(13,148,136,0.12)",
    hoverClass: "card-hover-teal",
  },
  {
    name: "Self Mastery for Women",
    ages: "Ages 28+",
    tagline: "From emotional overwhelm to grounded strength.",
    desc: "A structured journey for women to reclaim identity, build resilience, and lead with clarity on their own terms.",
    href: "/programs/self-mastery-women",
    accent: "#D4A843",
    lightBg: "#FBF7EE",
    borderBase: "rgba(212,168,67,0.12)",
    hoverClass: "card-hover-gold",
  },
  {
    name: "Train the Trainer",
    ages: "All Levels",
    tagline: "From learner to leader. From passion to professional pathway.",
    desc: "Become a certified life skills trainer with curriculum mastery, NLP tools, and expert facilitation skills.",
    href: "/programs/train-the-trainer",
    accent: "#6F00FF",
    lightBg: "#F3E8FF",
    borderBase: "rgba(111,0,255,0.1)",
    hoverClass: "card-hover-purple",
  },
  {
    name: "Art Therapy for Healing",
    ages: "All Ages",
    tagline: "From mental clutter to emotional clarity.",
    desc: "Use art, reflective journaling, and mindfulness as structured tools for emotional release and inner healing.",
    href: "/programs/art-therapy",
    accent: "#0D9488",
    lightBg: "#E6F7F5",
    borderBase: "rgba(13,148,136,0.12)",
    hoverClass: "card-hover-teal",
  },
];

const differentiators = [
  {
    title: "Assessment-Based Placement",
    desc: "Every learner begins with a structured skills assessment — no guesswork, only clarity about where to begin.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Structured Progression",
    desc: "Foundation → Growth → Mastery. A defined developmental path, not a random collection of sessions.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Measurable Growth",
    desc: "Pre and post assessments track tangible skill development at every level of the journey.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "NLP Integration",
    desc: "Neuro-Linguistic Programming techniques embedded into every module for lasting behaviour change.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Multi-Level Pathways",
    desc: "Programs that grow with you — built for sustained development, not one-time workshops.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Identity-Driven Development",
    desc: "We don't just teach skills. We help you become the person who naturally uses them.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "The structured approach at Hidden Potential is unlike any other coaching program. My students came back transformed — not just with skills, but with a completely new sense of who they are.",
    name: "Raaj Kumar",
    role: "Managing Trustee, School Partner",
    initial: "R",
  },
  {
    quote:
      "I enrolled my daughter in the AEL program and the change in her confidence and communication within three months was remarkable. Supreet's method is truly different from anything we had seen.",
    name: "Sarabjeet Singh",
    role: "Parent, Delhi",
    initial: "S",
  },
  {
    quote:
      "The Self Mastery program gave me tools I never knew I needed. I found clarity about who I am and the strength to move forward completely on my own terms.",
    name: "Anandita Joshi",
    role: "Program Graduate, Women's Pathway",
    initial: "A",
  },
  {
    quote:
      "As a school administrator, I was looking for something structured, not motivational fluff. Hidden Potential delivered exactly that — measurable outcomes and real student growth.",
    name: "Priya Sharma",
    role: "Vice Principal, Delhi NCR",
    initial: "P",
  },
];

const enrollmentSteps = [
  {
    step: "01",
    title: "Take the Life Skills Assessment",
    desc: "A structured evaluation of your current skills, strengths, and areas of growth.",
  },
  {
    step: "02",
    title: "Receive Your Personalized Pathway",
    desc: "A recommended program and level — matched precisely to where you are today.",
  },
  {
    step: "03",
    title: "Begin Your Transformation",
    desc: "Structured sessions with real practice, continuous feedback, and guided development.",
  },
  {
    step: "04",
    title: "Progress Through Structured Levels",
    desc: "Move from Foundation to Growth to Mastery — with measurable milestones at every stage.",
  },
];

const credentials = [
  "Masters in Psychology",
  "NLP Practitioner",
  "Harvard Life Skills Affiliate",
  "Graphology · American Board",
  "Art Therapy · IISD",
  "Train the Trainer · ILA",
  "MSME Registered",
  "Skill India Certified",
  "NEP 2020 Certified · IGNOU",
  "Josh Talks Speaker",
  "Published Author",
  "Award-Winning Educator",
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function Label({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className="text-[11px] font-bold uppercase tracking-widest mb-4"
      style={{ color: dark ? "#D4A843" : "#0D9488", fontFamily: "var(--font-body)" }}
    >
      {children}
    </p>
  );
}

function Chevron({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ═══════════════════════════════════════════
          1. HERO
          Dark editorial (#6F00FF) — NOT purple gradient.
          Purple (#6F00FF) used as a spot accent on one word.
          Trust & Authority: stats as primary social proof.
      ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden grain-overlay"
        style={{ background: "linear-gradient(135deg, #6F00FF 0%, #3D00CC 100%)", minHeight: "90vh", display: "flex", alignItems: "center" }}
      >
        {/* Ambient glows — accents, not gradient backgrounds */}
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: "500px", height: "500px",
            background: "radial-gradient(circle at center, rgba(111,0,255,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 pointer-events-none"
          style={{
            width: "380px", height: "380px",
            background: "radial-gradient(circle at center, rgba(13,148,136,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-6 py-28 w-full">
          {/* Pre-label */}
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
            style={{ color: "#D4A843", fontFamily: "var(--font-body)" }}
          >
            Transformational Life Skills Academy · Delhi NCR
          </p>

          {/* H1 — Playfair Display, editorial scale, NOT purple bg */}
          <h1
            className="font-bold text-white leading-[1.1] mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)",
              maxWidth: "780px",
            }}
          >
            Build the Inner Strength{" "}
            <span style={{ color: "#6F00FF" }}>Schools</span>{" "}
            Never Taught You
          </h1>

          {/* Subtitle */}
          <p
            className="mb-12 leading-relaxed"
            style={{
              color: "#6b7280",
              fontSize: "1.125rem",
              maxWidth: "540px",
              fontFamily: "var(--font-body)",
            }}
          >
            Structured transformational pathways for students, women,
            professionals and future trainers. Assessment-based. Measurable.
            Real.
          </p>

          {/* CTAs — CSS hover classes, min 52px touch targets */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
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
          </div>

          {/* Stats row — Trust & Authority primary signal */}
          <div
            className="flex flex-wrap gap-x-10 gap-y-6 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            {heroStats.map((s) => (
              <div key={s.value} className="flex flex-col">
                <span
                  className="font-bold leading-none text-white"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-xs mt-1.5 uppercase tracking-wide"
                  style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. BRAND STORY — White, editorial quote
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Label>Our Story</Label>

          <blockquote
            className="leading-relaxed mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "#6F00FF",
              borderLeft: "3px solid #6F00FF",
              paddingLeft: "24px",
            }}
          >
            &ldquo;For years, academic systems focused on grades, performance
            and achievement. But something essential was missing.&rdquo;
          </blockquote>

          <div className="flex flex-wrap gap-3 mb-10 pl-9">
            {[
              "Emotional Resilience",
              "Self-Awareness",
              "Communication Mastery",
              "Clarity of Identity",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm font-medium rounded-full"
                style={{
                  fontFamily: "var(--font-body)",
                  background: "#F3E8FF",
                  color: "#6F00FF",
                  border: "1px solid rgba(111,0,255,0.15)",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="pl-9 max-w-2xl space-y-5">
            <p
              className="leading-relaxed"
              style={{ color: "#1c1c2e", fontSize: "1.0625rem", fontFamily: "var(--font-body)" }}
            >
              <strong style={{ color: "#0D9488" }}>Hidden Potential</strong>{" "}
              was created to bridge that gap — to give every learner the tools
              that formal education never prioritised.
            </p>
            <p
              className="leading-relaxed"
              style={{ color: "#1c1c2e", fontSize: "1.0625rem", fontFamily: "var(--font-body)" }}
            >
              This is not a training institute. It is a{" "}
              <strong>transformational academy</strong> — where structured
              pathways meet real human development, and growth is never left to
              chance.
            </p>
          </div>

          <div className="mt-9 pl-9">
            <Link
              href="/about"
              className="text-link-teal inline-flex items-center gap-2 text-sm font-semibold"
            >
              Meet Supreet Kaur, Founder <Chevron />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. METHOD — System · Science · Structure
      ═══════════════════════════════════════════ */}
      <section style={{ background: "#FAFAF9" }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <Label>The Hidden Potential Method</Label>
            <h2
              className="font-bold leading-tight mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#6F00FF",
                maxWidth: "480px",
              }}
            >
              System. Science. Structure.
            </h2>
            <p
              className="leading-relaxed"
              style={{ color: "#6b7280", maxWidth: "500px", fontFamily: "var(--font-body)", fontSize: "1.0625rem" }}
            >
              Three foundational principles that make transformation reliable,
              repeatable, and real.
            </p>
          </div>

          {/* 3 Pillars — CSS hover via card-hover class */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`bg-white rounded-2xl p-8 card-hover ${p.hoverClass}`}
                style={{
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <p
                  className="text-5xl font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: pillarAccent[i],
                    opacity: 0.12,
                    lineHeight: 1,
                  }}
                >
                  {p.num}
                </p>
                <h3
                  className="font-bold mb-3 text-xl"
                  style={{ fontFamily: "var(--font-display)", color: "#6F00FF" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 4 Growth Stages */}
          <div className="rounded-2xl p-8" style={{ background: "#6F00FF" }}>
            <p
              className="text-[11px] font-bold uppercase tracking-widest mb-8"
              style={{ color: "#D4A843", fontFamily: "var(--font-body)" }}
            >
              4 Stages of Growth
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {growthStages.map((s, i) => (
                <div key={s.label} className="flex flex-col items-start relative">
                  {i < growthStages.length - 1 && (
                    <div
                      className="hidden md:block absolute top-4 h-px"
                      style={{
                        left: "calc(28px + 12px)",
                        right: "-16px",
                        background: "rgba(255,255,255,0.08)",
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-4 flex-shrink-0 relative z-10 text-white"
                    style={{ background: "rgba(111,0,255,0.35)", fontFamily: "var(--font-body)" }}
                  >
                    {s.num}
                  </div>
                  <p
                    className="font-bold text-sm mb-1 text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. PROGRAMS — Bento grid
          Asymmetric: AEL featured (4/6 cols wide)
      ═══════════════════════════════════════════ */}
      <section id="programs" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <Label>Transformational Pathways</Label>
            <h2
              className="font-bold leading-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#6F00FF",
              }}
            >
              Choose Your Growth Pathway
            </h2>
            <p
              className="leading-relaxed"
              style={{ color: "#6b7280", maxWidth: "520px", fontFamily: "var(--font-body)", fontSize: "1.0625rem" }}
            >
              Every program is assessment-based, structured, and designed to
              take you from where you are to where you want to be.
            </p>
          </div>

          {/* Bento grid — no symmetry, features AEL prominently */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

            {/* AEL — Featured, 4/6 cols, taller */}
            <Link
              href={programs[0].href}
              className={`group md:col-span-4 rounded-2xl p-8 flex flex-col justify-between card-hover ${programs[0].hoverClass}`}
              style={{
                background: programs[0].lightBg,
                border: `1px solid ${programs[0].borderBase}`,
                minHeight: "300px",
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{ background: `${programs[0].accent}18`, color: programs[0].accent, fontFamily: "var(--font-body)" }}
                  >
                    {programs[0].ages}
                  </span>
                  <span
                    className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{ background: `${programs[0].accent}0D`, color: `${programs[0].accent}99`, fontFamily: "var(--font-body)" }}
                  >
                    Featured Program
                  </span>
                </div>
                <h3
                  className="font-bold mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "#6F00FF" }}
                >
                  {programs[0].name}
                </h3>
                <p
                  className="mb-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: programs[0].accent, fontSize: "1rem" }}
                >
                  {programs[0].tagline}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
                >
                  {programs[0].desc}
                </p>
              </div>
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold mt-6"
                style={{ color: programs[0].accent, fontFamily: "var(--font-body)" }}
              >
                Explore Pathway
                <Chevron className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>

            {/* Communication — 2/6 cols */}
            <Link
              href={programs[1].href}
              className={`group md:col-span-2 rounded-2xl p-7 flex flex-col justify-between card-hover ${programs[1].hoverClass}`}
              style={{
                background: programs[1].lightBg,
                border: `1px solid ${programs[1].borderBase}`,
                minHeight: "300px",
              }}
            >
              <div>
                <span
                  className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block"
                  style={{ background: `${programs[1].accent}18`, color: programs[1].accent, fontFamily: "var(--font-body)" }}
                >
                  {programs[1].ages}
                </span>
                <h3
                  className="font-bold mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "#6F00FF" }}
                >
                  {programs[1].name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: programs[1].accent }}
                >
                  {programs[1].tagline}
                </p>
              </div>
              <div
                className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5"
                style={{ color: programs[1].accent, fontFamily: "var(--font-body)" }}
              >
                Explore <Chevron className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>

            {/* Row 2: Women, TTT, Art Therapy — 2 cols each */}
            {programs.slice(2).map((prog) => (
              <Link
                key={prog.name}
                href={prog.href}
                className={`group md:col-span-2 rounded-2xl p-7 flex flex-col justify-between card-hover ${prog.hoverClass}`}
                style={{
                  background: prog.lightBg,
                  border: `1px solid ${prog.borderBase}`,
                  minHeight: "220px",
                }}
              >
                <div>
                  <span
                    className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block"
                    style={{ background: `${prog.accent}18`, color: prog.accent, fontFamily: "var(--font-body)" }}
                  >
                    {prog.ages}
                  </span>
                  <h3
                    className="font-bold mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#6F00FF" }}
                  >
                    {prog.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: prog.accent }}
                  >
                    {prog.tagline}
                  </p>
                </div>
                <div
                  className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5"
                  style={{ color: prog.accent, fontFamily: "var(--font-body)" }}
                >
                  Explore <Chevron className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>

          {/* Assessment prompt */}
          <div
            className="mt-12 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: "#F3E8FF", border: "1px solid rgba(111,0,255,0.1)" }}
          >
            <div>
              <p
                className="font-bold mb-1"
                style={{ fontFamily: "var(--font-display)", color: "#6F00FF", fontSize: "1.15rem" }}
              >
                Not sure where to start?
              </p>
              <p
                className="text-sm"
                style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
              >
                Take a free structured assessment and receive your personalised pathway.
              </p>
            </div>
            <Link
              href="/assessment"
              className="btn-purple inline-flex items-center gap-2 rounded-xl font-semibold text-white whitespace-nowrap shrink-0"
              style={{
                padding: "13px 28px",
                fontSize: "0.9rem",
                fontFamily: "var(--font-body)",
                minHeight: "48px",
              }}
            >
              Take the Free Assessment <Chevron />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. DIFFERENTIATORS — Dark section
      ═══════════════════════════════════════════ */}
      <section style={{ background: "#6F00FF" }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <Label dark>What Sets Us Apart</Label>
            <h2
              className="font-bold leading-tight mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "white",
              }}
            >
              Most programs offer information.
              <br />
              <span style={{ color: "#6F00FF" }}>We design transformation.</span>
            </h2>
            <p
              className="leading-relaxed"
              style={{ color: "#6b7280", maxWidth: "500px", fontFamily: "var(--font-body)", fontSize: "1.0625rem" }}
            >
              Six principles that make every Hidden Potential program
              fundamentally different from what you have experienced before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiators.map((d, i) => (
              <div
                key={d.title}
                className="rounded-2xl p-6 card-hover-dark"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(13,148,136,0.15)", color: "#0D9488" }}
                  >
                    {d.icon}
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-bold tabular-nums block mb-2"
                      style={{ color: "rgba(212,168,67,0.4)", fontFamily: "var(--font-body)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="font-bold mb-2 leading-snug text-white"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}
                    >
                      {d.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}
                    >
                      {d.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. CREDENTIALS STRIP
          Trust & Authority: certifications prominently displayed
      ═══════════════════════════════════════════ */}
      <section style={{ background: "#FAFAF9" }} className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-[11px] font-bold uppercase tracking-widest text-center mb-8"
            style={{ color: "#D4A843", fontFamily: "var(--font-body)" }}
          >
            Credentials &amp; Certifications · Supreet Kaur, Founder
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {credentials.map((c) => (
              <span
                key={c}
                className="text-sm font-medium px-4 py-2 rounded-full"
                style={{
                  fontFamily: "var(--font-body)",
                  background: "white",
                  color: "#6F00FF",
                  border: "1px solid rgba(212,168,67,0.3)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. TESTIMONIALS — Auto-scroll marquee
          CSS animation, pauses on hover (in globals.css)
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <Label>Success Stories</Label>
          <h2
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#6F00FF",
            }}
          >
            Transformations That Speak
          </h2>
        </div>

        {/* Marquee — duplicated for seamless loop */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-5 shrink-0" aria-label="Testimonials carousel">
            {[...testimonials, ...testimonials].map((t, i) => (
              <article
                key={`${t.name}-${i}`}
                className="shrink-0 rounded-2xl p-7 flex flex-col"
                style={{
                  width: "340px",
                  background: "#FAFAF9",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderLeft: "3px solid #D4A843",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <svg
                  className="w-7 h-7 mb-4 flex-shrink-0"
                  fill="#D4A843"
                  opacity="0.3"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p
                  className="text-sm leading-relaxed mb-6 flex-1"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "#1c1c2e" }}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-white"
                    style={{ background: "#6F00FF", fontFamily: "var(--font-body)" }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold leading-tight"
                      style={{ fontFamily: "var(--font-display)", color: "#6F00FF" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/success-stories" className="text-link-teal inline-flex items-center gap-2 text-sm font-semibold">
            Read More Success Stories <Chevron />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. HOW IT WORKS
      ═══════════════════════════════════════════ */}
      <section style={{ background: "#F3E8FF" }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <Label>How It Works</Label>
            <h2
              className="font-bold leading-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#6F00FF",
              }}
            >
              Your Path to Transformation
            </h2>
            <p
              className="leading-relaxed mx-auto"
              style={{ color: "#6b7280", maxWidth: "500px", fontFamily: "var(--font-body)", fontSize: "1.0625rem" }}
            >
              No guesswork. No generic advice. Only guided evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {enrollmentSteps.map((s, i) => (
              <div key={s.step} className="relative">
                {i < enrollmentSteps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-7 z-10"
                    style={{
                      left: "calc(50% + 28px + 8px)",
                      right: "-16px",
                      height: "2px",
                      background: "rgba(111,0,255,0.15)",
                    }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{ background: "white", border: "1px solid rgba(111,0,255,0.08)" }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "#6F00FF" }}
                  >
                    <span
                      className="text-lg font-bold tabular-nums"
                      style={{ fontFamily: "var(--font-display)", color: "#D4A843" }}
                    >
                      {s.step}
                    </span>
                  </div>
                  <h3
                    className="font-bold mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-display)", color: "#6F00FF", fontSize: "1rem" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center text-base mt-10"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "rgba(0,0,0,0.35)" }}
          >
            &ldquo;No guesswork. Only guided evolution.&rdquo;
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. FAQ — Native <details> accordion
          No JS required, works in Server Components
      ═══════════════════════════════════════════ */}
      <section id="faq" className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <Label>Frequently Asked Questions</Label>
            <h2
              className="font-bold leading-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                color: "#6F00FF",
              }}
            >
              Common Questions About Our Programs
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                q: "What age groups do Hidden Potential's programs cater to?",
                a: "Our programs are designed for a wide range of ages. An Enlightened Learner (AEL) serves students aged 8–21 across three sub-groups. Communication Mastery is open to ages 8–65. Self Mastery for Women is designed for women aged 28 and above. Train the Trainer and Art Therapy welcome all adult age groups. Every program is structured by developmental stage, not just age.",
              },
              {
                q: "How do I know which program is the right fit for me?",
                a: "We recommend starting with our Life Skills Assessment. It identifies your current strengths, developmental gaps, and the most appropriate starting point within our program range. You'll receive a personalised pathway recommendation — no guesswork, no generic advice.",
              },
              {
                q: "Are your programs available online, offline, or both?",
                a: "Most programs are offered in hybrid format — you can choose offline sessions at our Dwarka centre or fully online participation from anywhere in India. School and corporate programs are delivered on-site at the client's premises across Delhi, Noida, Gurgaon, and Faridabad.",
              },
              {
                q: "What makes Hidden Potential different from other coaching institutes?",
                a: "Three things: System, Science, and Structure. We use NLP-based frameworks, emotional intelligence research, and behavioural psychology — not motivation-only sessions. Every student is assessed before and after, progress is documented, and programs follow a clear Foundation → Growth → Mastery pathway. Our founder holds a Masters in Psychology, NLP Practitioner certification, and IGNOU's NEP 2020 Implementation credential.",
              },
              {
                q: "How long do the programs run, and what is the time commitment?",
                a: "Program duration depends on the level: Foundation is typically 3 months, Growth is 6 months, and Mastery is 12 months. Session frequency ranges from once to twice per week depending on the program. Short-format workshops (1–3 days) are also available for schools and corporate groups.",
              },
              {
                q: "Do you offer programs for schools and organisations?",
                a: "Yes. Hidden Potential has structured institutional partnerships for schools and corporate teams. School programs include student life skills curriculum, teacher training, and parent engagement sessions — all NEP 2020 aligned. Corporate offerings include group workshops, communication training, and emotional intelligence sessions. Contact us to discuss a customised annual program.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <summary
                  className="flex items-center justify-between gap-4 px-6 py-5"
                  style={{ background: "#FAFAF9", fontFamily: "var(--font-body)" }}
                >
                  <span
                    className="font-semibold leading-snug"
                    style={{ color: "#6F00FF", fontSize: "0.9375rem" }}
                  >
                    {q}
                  </span>
                  <svg
                    className="faq-chevron w-4 h-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#6b7280"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div
                  className="px-6 py-5"
                  style={{ background: "white", borderTop: "1px solid rgba(0,0,0,0.05)" }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
                  >
                    {a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <p
            className="text-center text-sm mt-10"
            style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
          >
            Have a different question?{" "}
            <Link href="/contact" className="text-link-teal font-semibold">
              Contact us directly →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. FINAL CTA — Dark editorial
          Credentials grid = Trust & Authority's primary signal
      ═══════════════════════════════════════════ */}
      <section style={{ background: "#6F00FF" }} className="py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Label dark>Begin Your Journey</Label>

          <h2
            className="font-bold leading-tight text-white mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
            }}
          >
            You don&apos;t need more motivation.
            <br />
            <span style={{ color: "#6F00FF" }}>You need structured transformation.</span>
          </h2>

          <p
            className="mb-12 leading-relaxed mx-auto"
            style={{
              color: "#6b7280",
              maxWidth: "500px",
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
            }}
          >
            Take the Life Skills Assessment and receive your personalized
            growth pathway — designed for exactly where you are today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/assessment"
              className="btn-teal inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-white"
              style={{
                padding: "16px 36px",
                fontSize: "0.9375rem",
                fontFamily: "var(--font-body)",
                minHeight: "56px",
              }}
            >
              Begin Your Journey <Chevron />
            </Link>
            <Link
              href="/contact"
              className="btn-outline-dark inline-flex items-center justify-center rounded-xl font-semibold"
              style={{
                padding: "16px 36px",
                fontSize: "0.9375rem",
                fontFamily: "var(--font-body)",
                minHeight: "56px",
              }}
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Credential badges — Trust & Authority's key signal */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {credentials.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 text-[11px] font-semibold rounded-full"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(212,168,67,0.7)",
                  border: "1px solid rgba(212,168,67,0.2)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

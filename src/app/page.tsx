import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Life Skills Training in Delhi | Hidden Potential — Structured Growth Pathways",
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
const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "System",
    desc: "A defined developmental pathway — from where you are to where you need to be. No fragmented sessions, only one clear journey.",
    bg: "bg-primary-teal",
    iconColor: "text-white",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Science",
    desc: "Emotional intelligence research, behavioural psychology, and NLP frameworks that underpin every single module and interaction.",
    bg: "bg-primary-navy",
    iconColor: "text-white",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    title: "Structure",
    desc: "Guided practice, real-life application, and continuous feedback at every level of the development journey.",
    bg: "bg-primary-gold",
    iconColor: "text-primary-navy",
  },
];

const growthStages = [
  { num: "01", label: "Awareness", desc: "Understand where you truly are" },
  { num: "02", label: "Practice", desc: "Build new skills intentionally" },
  { num: "03", label: "Application", desc: "Apply in real-life contexts" },
  { num: "04", label: "Mastery", desc: "Lead, teach, and sustain growth" },
];

const devLevels = [
  {
    level: "Foundation",
    duration: "3 Months",
    desc: "Core skills and self-awareness. A safe environment to understand yourself and begin.",
    borderColor: "border-primary-teal",
    labelColor: "text-primary-teal",
  },
  {
    level: "Growth",
    duration: "6 Months",
    desc: "Deeper practice and real-world application. Building consistency and genuine confidence.",
    borderColor: "border-primary-gold",
    labelColor: "text-primary-gold",
  },
  {
    level: "Mastery Track",
    duration: "12 Months",
    desc: "Leadership, identity integration, and sustainable long-term transformation.",
    borderColor: "border-primary-navy",
    labelColor: "text-primary-navy",
  },
];

const programs = [
  {
    name: "An Enlightened Learner",
    ages: "Ages 8–21",
    tagline: "From hesitation to confidence. From emotional confusion to clarity.",
    desc: "A complete life skills curriculum across self-mastery, communication, academic thinking, and real-world readiness.",
    href: "/programs/enlightened-learner",
    topBg: "bg-primary-teal",
    tagBg: "bg-teal-light",
    tagText: "text-primary-teal",
  },
  {
    name: "Communication Mastery",
    ages: "Ages 8–65",
    tagline: "From fear of speaking to leadership presence.",
    desc: "Build confidence and clarity to express yourself powerfully — in every personal and professional situation.",
    href: "/programs/communication-mastery",
    topBg: "bg-primary-gold",
    tagBg: "bg-gold-light",
    tagText: "text-gold-dark",
  },
  {
    name: "Self Mastery for Women",
    ages: "Ages 28+",
    tagline: "From emotional overwhelm to grounded strength.",
    desc: "A structured journey for women to reclaim identity, build resilience, and lead with clarity on their own terms.",
    href: "/programs/self-mastery-women",
    topBg: "bg-primary-teal",
    tagBg: "bg-teal-light",
    tagText: "text-primary-teal",
  },
  {
    name: "Train the Trainer",
    ages: "All Experience Levels",
    tagline: "From learner to leader. From passion to professional pathway.",
    desc: "Become a certified life skills trainer with curriculum mastery, NLP tools, and expert facilitation skills.",
    href: "/programs/train-the-trainer",
    topBg: "bg-primary-navy",
    tagBg: "bg-navy-light",
    tagText: "text-primary-navy",
  },
  {
    name: "Art Therapy for Healing",
    ages: "All Ages",
    tagline: "From mental clutter to emotional clarity.",
    desc: "Use art, reflective journaling, and mindfulness as structured tools for emotional release and inner healing.",
    href: "/programs/art-therapy",
    topBg: "bg-primary-gold",
    tagBg: "bg-gold-light",
    tagText: "text-gold-dark",
  },
];

const differentiators = [
  {
    title: "Assessment-Based Placement",
    desc: "Every learner begins with a structured skills assessment — no guesswork, only clarity about where to begin.",
  },
  {
    title: "Structured Progression",
    desc: "Foundation → Growth → Mastery. A defined developmental path, not a random collection of sessions.",
  },
  {
    title: "Measurable Growth",
    desc: "Pre and post assessments track tangible skill development at every level of the journey.",
  },
  {
    title: "NLP Integration",
    desc: "Neuro-Linguistic Programming techniques embedded into every module for lasting behaviour change.",
  },
  {
    title: "Multi-Level Pathways",
    desc: "Programs that grow with you — built for sustained development, not one-time workshops.",
  },
  {
    title: "Identity-Driven Development",
    desc: "We don't just teach skills. We help you become the person who naturally uses them.",
  },
];

const stats = [
  { value: "14+", label: "Years of Experience" },
  { value: "5000+", label: "Individuals Trained" },
  { value: "200+", label: "Trainers Developed" },
  { value: "Josh Talks", label: "Speaker" },
  { value: "Award-Winning", label: "Educator" },
  { value: "NEP 2020", label: "Certified · IGNOU" },
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

// ── Helper Components ────────────────────────────────────────────────────────
function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
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

function SectionHeading({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${
        light ? "text-white" : "text-primary-navy"
      }`}
    >
      {children}
    </h2>
  );
}

function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ProgramCard({ prog }: { prog: (typeof programs)[number] }) {
  return (
    <div className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
      <div className={`${prog.topBg} h-1.5 w-full flex-shrink-0`} />
      <div className="p-6 flex flex-col flex-1">
        <span
          className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${prog.tagBg} ${prog.tagText} mb-4 self-start`}
        >
          {prog.ages}
        </span>
        <h3 className="text-lg font-bold text-primary-navy mb-3 leading-snug">
          {prog.name}
        </h3>
        <p
          className="text-sm text-charcoal/80 mb-4 leading-relaxed"
          style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
        >
          {prog.tagline}
        </p>
        <p className="text-sm text-charcoal/65 leading-relaxed flex-1 mb-6">
          {prog.desc}
        </p>
        <Link
          href={prog.href}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-teal hover:text-teal-dark transition-colors mt-auto"
        >
          Explore Pathway
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
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
      ═══════════════════════════════════════════ */}
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
          className="absolute bottom-0 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(200,169,81,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
          {/* Pre-label */}
          <p className="text-xs font-bold uppercase tracking-widest text-primary-gold mb-6">
            Transformational Life Skills Academy · Delhi NCR
          </p>

          {/* H1 */}
          <h1
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.15] mb-7"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Build the Inner Strength
            <br className="hidden sm:block" />
            That Schools Never Taught You
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}>
            Structured transformational pathways for students, women,
            professionals and future trainers.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Take the Assessment <ArrowIcon />
            </Link>
            <Link
              href="#programs"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/5 rounded-md transition-colors"
            >
              Explore Your Pathway
            </Link>
          </div>

          {/* Trust badge pills */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "14+ Years Experience",
              "5000+ Trained",
              "200+ Trainers",
              "Josh Talks Speaker",
              "Award-Winning Educator",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 text-xs font-semibold text-white/75 bg-white/8 border border-white/15 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. BRAND STORY
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Our Story</SectionLabel>

          <p
            className="text-2xl md:text-3xl text-charcoal leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
          >
            &ldquo;For years, academic systems focused on grades, performance
            and achievement. But something essential was missing.&rdquo;
          </p>

          {/* The missing elements */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "Emotional Resilience",
              "Self-Awareness",
              "Communication Mastery",
              "Clarity of Identity",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm font-semibold text-primary-navy bg-navy-light rounded-full border border-primary-navy/10"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="max-w-2xl mx-auto space-y-5 text-left sm:text-center">
            <p className="text-lg text-charcoal leading-relaxed">
              <strong className="text-primary-teal">Hidden Potential</strong>{" "}
              was created to bridge that gap — to give every learner the tools
              that formal education never prioritised.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              This is not a training institute. It is a{" "}
              <strong>transformational academy</strong> — where structured
              pathways meet real human development, and growth is never left to
              chance.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Meet Supreet Kaur, Founder <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. TRANSFORMATION MODEL
      ═══════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>The Hidden Potential Method</SectionLabel>
            <SectionHeading>System. Science. Structure.</SectionHeading>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Three foundational principles that make transformation reliable,
              repeatable, and real.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-lg p-7 shadow-sm border border-gray-200 flex flex-col"
              >
                <div
                  className={`${p.bg} ${p.iconColor} w-12 h-12 rounded-md flex items-center justify-center mb-5 flex-shrink-0`}
                >
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">{p.title}</h3>
                <p className="text-sm text-charcoal leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* 4 Growth Stages */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-teal text-center mb-8">
              4 Stages of Growth
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {growthStages.map((s, i) => (
                <div key={s.label} className="flex flex-col items-center text-center relative">
                  {/* Connector line between stages on desktop */}
                  {i < growthStages.length - 1 && (
                    <div
                      className="hidden md:block absolute top-5 w-full h-px"
                      style={{
                        left: "calc(50% + 1.75rem)",
                        width: "calc(100% - 1.75rem)",
                        background: "linear-gradient(to right, #C8A951, #C8A95140)",
                      }}
                    />
                  )}
                  <div className="w-10 h-10 rounded-full bg-primary-navy text-white flex items-center justify-center text-xs font-bold mb-3 relative z-10 flex-shrink-0">
                    {s.num}
                  </div>
                  <p className="font-bold text-primary-navy text-sm mb-1">{s.label}</p>
                  <p className="text-xs text-charcoal/60">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Development Levels */}
          <div className="grid md:grid-cols-3 gap-4">
            {devLevels.map((d) => (
              <div
                key={d.level}
                className={`bg-white rounded-lg p-6 border-l-4 ${d.borderColor} shadow-sm`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`font-bold text-base ${d.labelColor}`}>{d.level}</h4>
                  <span className="text-xs font-semibold text-charcoal/50 bg-gray-100 px-2.5 py-1 rounded-full">
                    {d.duration}
                  </span>
                </div>
                <p className="text-sm text-charcoal leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. PROGRAMS
      ═══════════════════════════════════════════ */}
      <section id="programs" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>Transformational Pathways</SectionLabel>
            <SectionHeading>Choose Your Growth Pathway</SectionHeading>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Every program is assessment-based, structured, and designed to
              take you from where you are to where you want to be.
            </p>
          </div>

          {/* Row 1: top 3 programs */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {programs.slice(0, 3).map((prog) => (
              <ProgramCard key={prog.name} prog={prog} />
            ))}
          </div>

          {/* Row 2: last 2 programs — centered, matching column width of row above */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[792px] mx-auto">
            {programs.slice(3).map((prog) => (
              <ProgramCard key={prog.name} prog={prog} />
            ))}
          </div>

          <div className="text-center mt-14 pt-10 border-t border-gray-100">
            <p className="text-xl font-bold text-primary-navy mb-2">
              Not sure where to start?
            </p>
            <p className="text-sm text-charcoal/60 mb-6 max-w-sm mx-auto">
              Take a free structured assessment and receive your personalised growth pathway.
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Take the Free Skills Assessment <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. DIFFERENTIATOR
      ═══════════════════════════════════════════ */}
      <section className="bg-primary-navy py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel light>What Sets Us Apart</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Most programs offer information.
              <br className="hidden md:block" />
              We design transformation.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Six principles that make every Hidden Potential program
              fundamentally different from anything you have experienced before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((d, i) => (
              <div
                key={d.title}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/8 transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs font-bold text-primary-gold/50 mt-0.5 w-6 flex-shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-white mb-2 text-[15px] leading-snug">
                      {d.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. TRUST BAR
      ═══════════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(90deg, #2D1B69 0%, #7C3AED 50%, #2D1B69 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 lg:gap-x-3">
            {stats.map((s) => (
              <div
                key={s.value}
                className="flex flex-col items-center text-center"
              >
                <span className="text-3xl md:text-4xl lg:text-2xl font-extrabold text-white mb-1 leading-tight">
                  {s.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-white/60 mt-1 leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-navy-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>Success Stories</SectionLabel>
            <SectionHeading>Transformations That Speak</SectionHeading>
            <p className="text-lg text-charcoal max-w-xl mx-auto leading-relaxed">
              Real results from students, parents, and professionals who chose
              structured growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-lg p-7 shadow-sm flex flex-col"
                style={{ borderLeft: "3px solid #C8A951" }}
              >
                {/* Gold quote mark */}
                <svg
                  className="w-8 h-8 text-primary-gold/30 mb-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                {/* Quote — Lora italic */}
                <p
                  className="text-[15px] text-charcoal leading-relaxed mb-7 flex-1"
                  style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-navy flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary-navy leading-tight">{t.name}</p>
                    <p className="text-xs text-charcoal/55 mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Read More Success Stories <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. ENROLLMENT FLOW
      ═══════════════════════════════════════════ */}
      <section className="bg-navy-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>How It Works</SectionLabel>
            <SectionHeading>Your Path to Transformation</SectionHeading>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              No guesswork. No generic advice. Only guided evolution — from
              where you are to where you can be.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-4 gap-5 mb-10">
            {enrollmentSteps.map((s, i) => (
              <div key={s.step} className="relative">
                {/* Connector arrow between cards on desktop */}
                {i < enrollmentSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-7 -right-3 z-10 w-6 justify-center">
                    <svg
                      className="w-4 h-4 text-primary-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full">
                  {/* Step circle */}
                  <div className="w-14 h-14 rounded-full bg-primary-navy flex items-center justify-center mb-5">
                    <span className="text-lg font-extrabold text-primary-gold tabular-nums">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="text-[15px] font-bold text-primary-navy mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-charcoal/65 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing line */}
          <p
            className="text-center text-base text-charcoal/50"
            style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
          >
            &ldquo;No guesswork. Only guided evolution.&rdquo;
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. FAQ
      ═══════════════════════════════════════════ */}
      <section id="faq" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <SectionHeading>Common Questions About Our Programs</SectionHeading>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Everything you need to know before taking the next step.
            </p>
          </div>

          <div className="flex flex-col gap-4">
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
              <div
                key={q}
                className="rounded-lg border border-gray-200 shadow-sm overflow-hidden"
              >
                <div
                  className="px-6 py-4 border-l-4 border-primary-teal"
                  style={{ background: "#F8F6F2" }}
                >
                  <p className="text-[15px] font-bold text-primary-navy leading-snug">
                    {q}
                  </p>
                </div>
                <div className="px-6 py-4 bg-white">
                  <p className="text-sm text-charcoal leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-charcoal/70 mt-10">
            Have a different question?{" "}
            <Link
              href="/contact"
              className="font-semibold text-primary-teal hover:underline"
            >
              Contact us directly →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. FINAL CTA
      ═══════════════════════════════════════════ */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel light>Begin Your Journey</SectionLabel>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            You don&apos;t need more motivation.
            <br className="hidden sm:block" />
            You need structured transformation.
          </h2>

          <p className="text-lg text-white/65 mb-12 leading-relaxed max-w-2xl mx-auto">
            Take the Life Skills Assessment and receive your personalized
            growth pathway — designed for exactly where you are today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Begin Your Journey <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white border-2 border-white/25 hover:border-white/60 hover:bg-white/5 rounded-md transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Credential badges */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "NLP Practitioner",
              "Harvard Life Skills Affiliate",
              "Masters in Psychology",
              "MSME Registered",
              "Skill India Certified",
              "Published Author",
              "NEP 2020 Certified (IGNOU)",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-semibold text-primary-gold/70 border border-primary-gold/25 rounded-full"
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

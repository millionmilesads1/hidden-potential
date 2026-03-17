import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CertificateLightbox from "@/components/ui/CertificateLightbox";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "About Supreet Kaur | Life Skills Coach in Delhi | Hidden Potential" },
  description:
    "Meet Supreet Kaur — Masters in Psychology, NLP practitioner, Josh Talks speaker. 14+ years training 5000+ individuals. Award-winning life skills educator in Delhi.",
  openGraph: {
    title: "About Supreet Kaur | Life Skills Coach in Delhi",
    description:
      "Masters in Psychology, NLP practitioner, Josh Talks speaker. 14+ years training 5000+ individuals across Delhi NCR.",
    type: "profile",
    url: "https://hiddenpotentialskills.com/about",
  },
  alternates: { canonical: "https://hiddenpotentialskills.com/about" },
};

// ── Schema.org JSON-LD ───────────────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Supreet Kaur",
  jobTitle: "Founder & Director, Hidden Potential",
  description:
    "Life skills educator with 14+ years experience, Masters in Psychology, NLP Practitioner, Josh Talks Speaker, award-winning educator in Delhi NCR.",
  url: "https://hiddenpotentialskills.com/about",
  worksFor: {
    "@type": "Organization",
    name: "Hidden Potential",
    url: "https://hiddenpotentialskills.com",
  },
  knowsAbout: [
    "Life Skills Education",
    "Emotional Intelligence",
    "Neuro-Linguistic Programming",
    "Art Therapy",
    "Communication Training",
    "Train the Trainer",
    "Behavioural Psychology",
    "Graphology",
    "NEP 2020 Implementation",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "NEP 2020 Implementation — IGNOU UGC Approved",
      recognizedBy: {
        "@type": "Organization",
        name: "Indira Gandhi National Open University (IGNOU)",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Masters in Psychology",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "NLP Practitioner",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Harvard Affiliated Life Skills",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Graphology - American Board",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Art Therapy - IISD",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Train the Trainer - ILA",
    },
  ],
  award: "Award-Winning Life Skills Educator",
  sameAs: [
    "https://www.linkedin.com/in/supreetkaur-hiddenpotential",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hiddenpotentialskills.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://hiddenpotentialskills.com/about" },
  ],
};

// ── Data ─────────────────────────────────────────────────────────────────────
const expertise = [
  {
    num: "01",
    title: "Emotional Intelligence & Behavioural Development",
    desc: "Designing and facilitating programs that build self-awareness, empathy, and emotional regulation — grounded in EI research and practical frameworks.",
  },
  {
    num: "02",
    title: "Communication & Leadership Skills",
    desc: "Structured development for confident expression, professional presence, and leadership communication at every level — from students to executives.",
  },
  {
    num: "03",
    title: "NLP-based Reprogramming Techniques",
    desc: "Using Neuro-Linguistic Programming to identify and shift limiting beliefs, emotional blocks, and unproductive behavioural patterns at their root.",
  },
  {
    num: "04",
    title: "Structured Life Skills Curriculum Design",
    desc: "Building multi-level curricula for schools, training programs, and individual development — assessment-based, progressive, and outcome-driven.",
  },
  {
    num: "05",
    title: "Art Therapy & Reflective Practices",
    desc: "Integrating art, journaling, and mindfulness as structured tools for emotional expression, self-discovery, and inner healing — no artistic skill required.",
  },
  {
    num: "06",
    title: "Train-the-Trainer Certification Programs",
    desc: "Developing the next generation of certified life skills facilitators with comprehensive curriculum knowledge and expert facilitation skills.",
  },
];

const approachCards = [
  {
    title: "System",
    letter: "S",
    bg: "bg-primary-teal",
    letterColor: "text-white",
    desc: "A defined developmental pathway — from where you are to where you need to be. Every learner follows a clear, structured sequence. No fragmented sessions, no one-time workshops. One clear journey.",
  },
  {
    title: "Science",
    letter: "Sc",
    bg: "bg-primary-navy",
    letterColor: "text-white",
    desc: "Emotional intelligence research, behavioural psychology, and NLP frameworks underpin every single module and interaction — making growth predictable rather than accidental.",
  },
  {
    title: "Structure",
    letter: "St",
    bg: "bg-primary-gold",
    letterColor: "text-primary-navy",
    desc: "Guided practice, real-life application, and continuous feedback at every level ensure that skills are not just taught — they are embedded, practised, and integrated.",
  },
];

const credentials = [
  { name: "Masters in Psychology", issuer: "University Qualification" },
  { name: "NLP Practitioner", issuer: "Certified Practitioner" },
  { name: "Harvard Life Skills", issuer: "Affiliated Program" },
  { name: "Graphology", issuer: "American Board" },
  { name: "Train the Trainer", issuer: "ILA Certified" },
  { name: "Art Therapy", issuer: "IISD Certified" },
  { name: "MSME Registered", issuer: "Government of India" },
  { name: "Skill India Certified", issuer: "Ministry of Skill Development" },
];

const impact = [
  {
    value: "14+",
    label: "Years of Experience",
    desc: "Building and refining structured life skills programs since 2010",
  },
  {
    value: "5000+",
    label: "Individuals Trained",
    desc: "Students, women, professionals and trainers across Delhi NCR",
  },
  {
    value: "200+",
    label: "Trainers Developed",
    desc: "Certified through the Train the Trainer certification program",
  },
  {
    value: "2",
    label: "Published Books",
    desc: "On life skills education and structured personal development",
  },
  {
    value: "Josh Talks",
    label: "Speaker",
    desc: "Featured on one of India's largest motivational platforms",
  },
  {
    value: "Award",
    label: "Winning Educator",
    desc: "Recognised for excellence in life skills education in India",
  },
];

const books = [
  {
    title: "An Enlightened Learner",
    subtitle: "A Toolkit To Become A Better Learner",
    desc: "A structured guide to developing the essential learning skills that formal education overlooks — from emotional resilience and self-awareness to confident communication and purposeful growth.",
    imageSrc: "/images/books/book-1.jpg",
    objectPosition: "object-bottom",
    gradientFrom: "#7C3AED",
    gradientTo: "#1a1f2e",
  },
  {
    title: "Discover Your Hidden Potential",
    subtitle: "Self Help Book",
    desc: "A practitioner's guide to lasting personal transformation through structured pathways, evidence-based assessment, and intentional daily practice — written for learners and educators alike.",
    imageSrc: "/images/books/book-2.jpg",
    objectPosition: "object-center",
    gradientFrom: "#7C3AED",
    gradientTo: "#0d1a1a",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
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

      {/* ═══════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — Portrait photo */}
            <div className="relative w-full flex-shrink-0 overflow-hidden rounded-lg">
            <div
              className="relative w-full"
              style={{
                aspectRatio: "3 / 4",
                maxHeight: "520px",
              }}
            >
              <Image
                src="/images/founder/supreet-hp-banner.jpg"
                alt="Supreet Kaur, founder and director of Hidden Potential, life skills coach in Delhi"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Floating name card at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="rounded-md px-4 py-3 w-full"
                  style={{
                    background: "rgba(0,0,0,0.52)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <p
                    className="text-white font-bold text-base leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Supreet Kaur
                  </p>
                  <p
                    className="text-white/60 text-xs mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Founder & Director, Hidden Potential
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {["NLP Practitioner", "Josh Talks Speaker", "Award-Winning Life Skills Coach", "Art Therapist", "Published Author"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(200,169,81,0.18)",
                          color: "#C8A951",
                          border: "1px solid rgba(200,169,81,0.25)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Right — Bio content */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-4">
                Founder & Director
              </p>
              <h1
                className="text-3xl md:text-4xl font-extrabold text-primary-navy leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Supreet Kaur — Life Skills Coach &amp; Transformational Educator in Delhi
              </h1>

              <p className="text-lg text-charcoal leading-relaxed mb-5">
                Supreet Kaur is the founder of{" "}
                <strong className="text-primary-navy">Hidden Potential</strong> — a structured
                life skills academy in Delhi NCR that has trained over 5,000 individuals since
                2010. Her work spans students aged 8 to 21, women navigating personal and
                professional transitions, working professionals, and aspiring trainers across
                Delhi, Noida, Gurgaon, and Faridabad.
              </p>

              {/* Pull quote — Lora italic */}
              <p
                className="text-lg text-charcoal leading-relaxed mb-5 pl-5"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontStyle: "italic",
                  borderLeft: "3px solid #C8A951",
                }}
              >
                &ldquo;Transformation is not a moment. It is a structured journey — with the
                right pathway, the right science, and someone who walks every stage with you.&rdquo;
              </p>

              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                With a Master&rsquo;s degree in Psychology and certifications spanning NLP, Art
                Therapy, Graphology, and Train-the-Trainer facilitation, Supreet has built one
                of Delhi&rsquo;s most methodical approaches to personal development — grounded
                in science, guided by system, and made measurable through structured pre and
                post assessments.
              </p>

              <p className="text-base text-charcoal/80 leading-relaxed mb-8">
                Supreet is one of the few life skills trainers in Delhi NCR who has formally
                completed IGNOU&rsquo;s UGC-approved Professional Development Programme on NEP
                2020 Implementation, earning an{" "}
                <strong className="text-primary-navy">A Grade.</strong>
              </p>

              {/* Credential pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Masters in Psychology",
                  "NLP Practitioner",
                  "14+ Years Experience",
                  "Josh Talks Speaker",
                  "Award-Winning Educator",
                ].map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 text-xs font-semibold text-primary-navy bg-navy-light rounded-full border border-primary-navy/10"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. PROFESSIONAL EXPERTISE
      ═══════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-3">
              Areas of Practice
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Professional Expertise
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Fourteen years of focused practice across six interconnected disciplines — each
              reinforcing the others in every program, every session, and every learner journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span
                    className="text-xs font-bold text-primary-gold/60 tabular-nums pt-0.5 flex-shrink-0"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.num}
                  </span>
                  <div
                    className="h-px bg-gradient-to-r from-primary-teal/30 to-transparent flex-1 mt-2.5"
                  />
                </div>
                <h3 className="font-bold text-primary-navy mb-2 leading-snug text-[15px]">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. WHY HIDDEN POTENTIAL WAS BUILT
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left — Story */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-3">
                The Origin
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 leading-tight">
                Why Hidden Potential Was Built
              </h2>
              <p className="text-base text-charcoal leading-relaxed mb-5">
                After years of working within formal education systems, Supreet observed the same
                pattern repeating itself. Students were graduating with academic knowledge but
                without the inner tools needed to navigate real life — no emotional regulation,
                no communication confidence, no clarity of identity.
              </p>
              <p className="text-base text-charcoal leading-relaxed mb-5">
                Professionals were advancing in careers while silently struggling with stress,
                strained relationships, and the absence of purpose. Women were expected to manage
                everything — and were given no structured support to grow on their own terms.
              </p>
              <p className="text-base text-charcoal leading-relaxed mb-8">
                <strong className="text-primary-navy">
                  Hidden Potential was built to fill that gap.
                </strong>{" "}
                Not as a motivational program. Not as a one-time workshop. But as a structured
                transformational academy — where every learner enters with an assessment, follows
                a defined pathway, and exits with measurable, documented growth.
              </p>
              <Link
                href="/programs/enlightened-learner"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary-teal hover:text-teal-dark transition-colors"
              >
                Explore An Enlightened Learner
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

            {/* Right — Quote + Model */}
            <div className="flex flex-col gap-5">
              {/* Lora italic quote block */}
              <div className="bg-navy-light rounded-lg p-7">
                <p
                  className="text-xl text-primary-navy leading-relaxed"
                  style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
                >
                  &ldquo;For years, academic systems focused on grades, performance, and
                  achievement. But something essential was missing — emotional resilience,
                  self-awareness, communication mastery, clarity of identity.&rdquo;
                </p>
                <p className="text-sm font-semibold text-primary-teal mt-5">
                  — Supreet Kaur, Founder of Hidden Potential
                </p>
              </div>

              {/* 4-stage growth model */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-5">
                  The 4 Stages of Growth
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {["Awareness", "Practice", "Application", "Mastery"].map((stage, i) => (
                    <div key={stage} className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-primary-navy text-white flex items-center justify-center text-xs font-bold mb-2 flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-xs font-semibold text-primary-navy leading-tight">
                        {stage}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Missing elements from education */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-4">
                  Majorly Missing Skills in Today&rsquo;s World
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Emotional Resilience",
                    "Self-Awareness",
                    "Communication Mastery",
                    "Clarity of Identity",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs font-semibold text-primary-navy bg-navy-light rounded-full border border-primary-navy/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. HER APPROACH
      ═══════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-3">
              The Method
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Our Approach: System. Science. Structure.
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Three non-negotiable principles that make every Hidden Potential program reliable,
              repeatable, and genuinely transformational — not motivational, but methodical.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {approachCards.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm flex flex-col"
              >
                {/* Icon */}
                <div
                  className={`${a.bg} ${a.letterColor} w-12 h-12 rounded-md flex items-center justify-center mb-5 flex-shrink-0`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {a.title === "System" && (
                      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    )}
                    {a.title === "Science" && (
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    )}
                    {a.title === "Structure" && (
                      <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">{a.title}</h3>
                <p className="text-sm text-charcoal leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. CREDENTIALS GRID
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-gold mb-3">
              Qualifications & Certifications
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Credentials & Certifications
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed">
              Every program at Hidden Potential is built on a foundation of formal training,
              peer-reviewed research, and years of practical application in real learning environments.
            </p>
          </div>

          {/* ── Featured: NEP 2020 credential ──────────────────────── */}
          <div
            className="mb-6 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            style={{
              background: "linear-gradient(135deg, #F3F0FF 0%, #EDE9FE 100%)",
              border: "2px solid rgba(124,58,237,0.15)",
            }}
          >
            {/* Left — Credential info */}
            <div className="flex-1 min-w-0">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full text-white"
                  style={{ backgroundColor: "#7C3AED" }}
                >
                  {/* Checkmark icon */}
                  <svg
                    className="w-3 h-3 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  UGC Approved
                </span>

                {/* Grade A badge */}
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[12px] font-extrabold flex-shrink-0"
                  style={{ backgroundColor: "#C8A951", color: "#7C3AED" }}
                >
                  A
                </span>
                <span className="text-[11px] text-charcoal/50 font-semibold">Grade A</span>

                <span
                  className="ml-auto text-[11px] font-medium text-charcoal/45"
                >
                  November 2022
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-lg md:text-xl font-extrabold text-primary-navy mb-1 leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                NEP 2020 Implementation Certified
              </h3>

              {/* Issuer */}
              <p className="text-sm font-semibold text-primary-teal mb-4">
                Indira Gandhi National Open University (IGNOU)
              </p>

              {/* Programme detail */}
              <p className="text-sm text-charcoal/75 leading-relaxed mb-2">
                <span className="font-semibold text-charcoal/90">Programme:</span>{" "}
                UGC Approved Professional Development Programme on{" "}
                <em>
                  &ldquo;Implementation of NEP 2020 for University and College Teachers&rdquo;
                </em>
              </p>

              {/* Under */}
              <p className="text-sm text-charcoal/75 leading-relaxed">
                <span className="font-semibold text-charcoal/90">Under:</span>{" "}
                Pandit Madan Mohan Malaviya National Mission on Teachers and Teaching
              </p>
            </div>

            {/* Right — Certificate thumbnail + lightbox link */}
            <div className="flex flex-col items-center md:items-center flex-shrink-0">
              <CertificateLightbox
                imageSrc="/certificates/nep-2020-ignou.jpeg"
                imageAlt="NEP 2020 Implementation Certificate — Supreet Kaur, IGNOU, November 2022"
              />
            </div>
          </div>

          {/* ── Regular credentials grid ────────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {credentials.map((c) => (
              <div
                key={c.name}
                className="rounded-lg p-5 flex flex-col items-center text-center"
                style={{
                  background: "#EDE9FE",
                  border: "1px solid rgba(124,58,237,0.12)",
                }}
              >
                {/* Gold accent top bar */}
                <div
                  className="w-8 h-0.5 rounded-full mb-4 flex-shrink-0"
                  style={{ backgroundColor: "#C8A951" }}
                />
                <p
                  className="text-sm font-bold text-primary-navy leading-snug mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c.name}
                </p>
                <p className="text-[11px] text-charcoal/55 mt-1 leading-tight">{c.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. IMPACT & RECOGNITION
      ═══════════════════════════════════════════ */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
              Impact & Recognition
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              14 Years. 5000+ Lives. Measurable Transformation.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
            {impact.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <span
                  className="text-3xl md:text-4xl font-extrabold text-white mb-1 leading-none whitespace-nowrap"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/60 mt-1 whitespace-nowrap">
                  {item.label}
                </span>
                <p className="text-xs text-white/40 mt-2 max-w-[160px] leading-relaxed hidden md:block">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Photo strip — Josh Talks + Media */}
          <div className="grid grid-cols-2 gap-4 mt-14 max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative h-80">
                <Image
                  src="/images/founder/supreet-josh-talks.jpg"
                  alt="Supreet Kaur speaking at Josh Talks, a nationally recognised speaker platform in India"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2" style={{ background: "rgba(0,0,0,0.5)" }}>
                  <p className="text-white text-[11px] font-semibold">Josh Talks Speaker</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative h-80">
                <Image
                  src="/images/media/media-1.jpg"
                  alt="Supreet Kaur featured in The Explore magazine as a life skills expert"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 25%" }}
                />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2" style={{ background: "rgba(0,0,0,0.5)" }}>
                  <p className="text-white text-[11px] font-semibold">Media Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. BOOKS SECTION
      ═══════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-3">
              Published Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Books by Supreet Kaur
            </h2>
            <p className="text-lg text-charcoal max-w-xl mx-auto leading-relaxed">
              Two published works bringing structured life skills thinking to readers beyond the
              classroom and the coaching session.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {books.map((book) => (
              <div
                key={book.title}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col"
              >
                {/* Book cover */}
                <div className="relative w-full overflow-hidden">
                  <div className="relative w-full h-56">
                    <Image
                      src={book.imageSrc}
                      alt={`Cover of "${book.title}" by Supreet Kaur, published author and life skills educator`}
                      fill
                      className={`object-cover ${book.objectPosition}`}
                    />
                  </div>
                </div>

                {/* Book info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-primary-navy mb-1 leading-snug">
                    {book.title}
                  </h3>
                  <p
                    className="text-xs text-primary-teal font-semibold mb-3"
                    style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
                  >
                    {book.subtitle}
                  </p>
                  <p className="text-sm text-charcoal/70 leading-relaxed flex-1 mb-5">
                    {book.desc}
                  </p>
                  <Link
                    href="/books"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-teal hover:text-teal-dark transition-colors"
                  >
                    View Book Details
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
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. FINAL CTA
      ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)",
        }}
      >
        {/* Decorative radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(200,169,81,0.07) 0%, transparent 65%)",
            width: "36rem",
            height: "36rem",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-gold mb-4">
            Work with Supreet
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Begin With a Discovery Call
          </h2>
          <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
            A focused 30-minute conversation to understand where you are, where you want to go,
            and which pathway at Hidden Potential is the right starting point for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Book a Discovery Call
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
              Take the Assessment First
            </Link>
          </div>

          {/* Footer internal links */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-white/35">
            <span className="text-white/25">Explore Programs:</span>
            <Link
              href="/programs/enlightened-learner"
              className="hover:text-white/65 transition-colors"
            >
              An Enlightened Learner
            </Link>
            <span className="text-white/20">·</span>
            <Link
              href="/programs/train-the-trainer"
              className="hover:text-white/65 transition-colors"
            >
              Train the Trainer
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/books" className="hover:text-white/65 transition-colors">
              Published Books
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

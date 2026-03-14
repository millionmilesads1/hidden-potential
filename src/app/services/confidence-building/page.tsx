import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: { absolute: "Confidence Building Program in Delhi | Self-Doubt to Self-Assurance | Hidden Potential" },
  description:
    "Structured confidence building program in Delhi for students, professionals & women. Overcome hesitation, build self-assurance & develop lasting inner confidence. Dwarka, Delhi & Online.",
  openGraph: {
    title: "Confidence Building Program in Delhi | Self-Doubt to Self-Assurance | Hidden Potential",
    description:
      "Structured confidence building program in Delhi for students, professionals & women. Overcome hesitation, build self-assurance & develop lasting inner confidence. Dwarka, Delhi & Online.",
    url: "https://hiddenpotentialskills.com/services/confidence-building",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confidence Building Program in Delhi | Self-Doubt to Self-Assurance | Hidden Potential",
    description:
      "Structured confidence building program in Delhi for students, professionals & women. Overcome hesitation, build self-assurance & develop lasting inner confidence. Dwarka, Delhi & Online.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/services/confidence-building",
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   LOCAL HELPER
───────────────────────────────────────────────────────────────────────────── */
function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
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

/* ─────────────────────────────────────────────────────────────────────────────
   SCHEMA MARKUP
───────────────────────────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Confidence Building Program in Delhi",
  serviceType: "Confidence Building",
  provider: {
    "@type": "Organization",
    name: "Hidden Potential",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka",
      addressLocality: "Delhi",
      postalCode: "110075",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Faridabad" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What causes low confidence and can it really be changed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Low confidence is caused by a combination of factors — repeated negative experiences, critical feedback during formative years, comparison with peers, lack of structured skill development, and limiting beliefs formed in childhood. The good news is that confidence is not a fixed personality trait. Decades of research in behavioural psychology confirm that self-efficacy — the core of genuine confidence — is trainable through structured practice, competence building, and cognitive restructuring. At Hidden Potential, we have seen students, professionals, and women transform their confidence levels measurably within 3 to 6 months of structured development.",
      },
    },
    {
      "@type": "Question",
      name: "At what age should confidence building start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The earlier, the better. At Hidden Potential, confidence building begins at age 8 through the An Enlightened Learner program, with age-appropriate activities and assessments for students aged 8 to 12, 13 to 16, and 17 to 21. Research shows that confidence patterns established in childhood and adolescence have lasting effects on academic performance, career success, and relationship quality. However, confidence is trainable at any age — we work with learners up to age 65 across our various pathways.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build genuine confidence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most learners report noticeable improvements in self-awareness, social comfort, and communication confidence within the first 4 to 8 weeks of structured training. However, lasting, resilient confidence that holds up under pressure typically develops over 3 to 6 months of consistent practice and feedback. This is why Hidden Potential offers structured pathways across Foundation (3 months), Growth (6 months), and Mastery (12 months) levels rather than one-time workshops.",
      },
    },
    {
      "@type": "Question",
      name: "Is the confidence building program available online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Confidence building programs at Hidden Potential are available in three formats: offline sessions at our Dwarka, Delhi location, online sessions for learners across Noida, Gurgaon, Faridabad, and all of India, and hybrid programs that combine both formats. The online sessions follow the same structured methodology and include the same assessment process as in-person training.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from personality development classes in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most personality development classes in Delhi offer a broad, surface-level curriculum covering grooming, etiquette, public speaking, and general motivation. Confidence building at Hidden Potential is fundamentally different in three ways: first, it is assessment-based — every learner starts with a structured evaluation that identifies specific confidence gaps. Second, it uses NLP-powered behavioural tools that address confidence at the subconscious belief level, not just the behaviour level. Third, it follows structured developmental pathways spanning months with documented pre and post assessments — not a 10-session generic curriculum.",
      },
    },
    {
      "@type": "Question",
      name: "How much does confidence building coaching cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Confidence building program fees at Hidden Potential vary based on the developmental pathway, level, and format. Individual sessions, group programs, and integrated pathway options have different pricing structures. We recommend starting with a free life skills assessment — this identifies the right pathway and level for your specific needs, after which complete program details and pricing are provided. Contact us or book an assessment to begin.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function ConfidenceBuildingPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ═══════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(180deg, #1A0F3C 0%, #6F00FF 100%)" }}
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
                className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-teal rounded-full mb-6"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                Confidence &amp; Self-Assurance
              </span>

            {/* H1 */}
            <h1
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
              style={{
                fontFamily: "var(--font-display)",
                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              Confidence Building Program in Delhi — From Self-Doubt to Self-Assurance
            </h1>

            {/* Lora italic tagline */}
            <p
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "var(--font-accent)",
                fontStyle: "italic",
                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              Confidence isn&apos;t about pretending to be fearless — it&apos;s about building
              genuine inner strength.
            </p>

            {/* Body paragraph */}
            <p className="text-base text-white/65 max-w-3xl mx-auto mb-10 leading-relaxed">
              Most confidence building programs in Delhi focus on surface-level motivation — a pep
              talk, a few affirmations, a group activity, and you are sent on your way feeling
              temporarily inspired. At Hidden Potential, confidence building is not a motivational
              event. It is a structured developmental process that begins with a detailed assessment,
              moves through targeted skill-building across multiple dimensions, and results in
              genuine, lasting self-assurance that holds up under real-world pressure. Whether you
              are an 8-year-old hesitating to speak in class, a teenager dealing with peer pressure,
              a professional struggling with leadership presence, or a woman rebuilding self-worth
              after years of suppression — confidence is not something you either have or don&apos;t
              have. It is a compound skill built through self-awareness, communication practice,
              emotional regulation, and consistent structured feedback.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Take the Confidence Assessment
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white/90 rounded-md transition-colors hover:text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Book a Discovery Call
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                "Assessment-Based Approach",
                "5000+ Learners Trained",
                "Ages 8 to 65",
                "Dwarka, Delhi & Online",
              ].map((signal) => (
                <span
                  key={signal}
                  className="text-[11px] font-semibold text-white/45 uppercase tracking-wider flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-primary-gold inline-block" />
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2 — WHY CONFIDENCE MATTERS
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#F8F6F2]">
          <div className="max-w-4xl mx-auto px-6">
            <SectionLabel>Why Confidence Matters</SectionLabel>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8 leading-snug"
              style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
            >
              Why Confidence Building Is the Foundation of Every Life Skill
            </h2>
            <div className="space-y-6 text-base leading-relaxed" style={{ color: "#2D2D2D" }}>
              <p>
                Confidence is not just one skill among many — it is the multiplier that makes every
                other skill effective. A student who understands time management but lacks the
                confidence to implement it will procrastinate. A professional who knows the right
                answer but hesitates to speak up will be overlooked. A woman who understands her
                worth intellectually but lacks the emotional confidence to enforce boundaries will
                continue to be undervalued.
              </p>
              <p>
                Research consistently shows that confidence — specifically self-efficacy, the belief
                in your ability to succeed in specific situations — is one of the strongest
                predictors of academic performance, career advancement, relationship satisfaction,
                and mental health. This is not opinion. It is decades of behavioural psychology
                research from Bandura, Dweck, and others.
              </p>
              <p>
                At Hidden Potential in Delhi, confidence building is not a standalone module. It is
                embedded into every structured pathway — from the An Enlightened Learner student
                program to Communication Mastery, Self Mastery for Women, and even the Train the
                Trainer Certification. Every learner&apos;s confidence is assessed at entry,
                developed through structured practice, and measured at completion.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3 — WHAT YOU'LL DEVELOP
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-4">
              <SectionLabel>What You&apos;ll Develop</SectionLabel>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-5 leading-snug max-w-3xl mx-auto"
              style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
            >
              Six Dimensions of Confidence We Build at Hidden Potential in Delhi
            </h2>
            <p
              className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              Confidence is not a single trait — it is a compound skill made up of multiple
              dimensions. Weakness in any one dimension creates the feeling of &lsquo;not being
              confident enough.&rsquo; Our confidence building program in Delhi addresses all six
              dimensions systematically so the confidence you develop is genuine, resilient, and
              applicable across every area of your life.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 01 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#0D9488" }}
                >
                  <span className="text-white/60 text-xs font-bold">01</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Self-Awareness and Identity Clarity
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Confidence starts with knowing who you are — your strengths, your values, your
                    growth areas, and your non-negotiables. Most people who lack confidence have
                    never done structured self-reflection. They operate on assumptions about
                    themselves that were formed in childhood and never updated. Through guided
                    assessments and reflection exercises at Hidden Potential, you develop a clear,
                    accurate understanding of your identity — which becomes the foundation for every
                    other confidence dimension. Without self-awareness, confidence is just
                    performance. With it, confidence becomes authentic.
                  </p>
                </div>
              </div>

              {/* Card 02 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#0D9488" }}
                >
                  <span className="text-white/60 text-xs font-bold">02</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Overcoming Hesitation and Fear Patterns
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#2D2D2D" }}>
                    Hesitation is not a personality trait — it is a learned behavioural pattern
                    driven by specific beliefs and emotional responses. Whether it is fear of public
                    speaking, fear of judgment, fear of failure, or fear of conflict — every form of
                    hesitation has a structure that can be identified and changed. At Hidden
                    Potential, we use NLP-based techniques including belief mapping, cognitive
                    reframing, and confidence anchoring to help you understand exactly why you
                    hesitate — and give you practical tools to move through it. This is not about
                    forcing yourself to be brave. It is about removing the specific patterns that
                    create unnecessary fear.
                  </p>
                  <Link
                    href="/services/nlp-coaching"
                    className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                  >
                    Learn about NLP Coaching &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 03 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#0D9488" }}
                >
                  <span className="text-white/60 text-xs font-bold">03</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Genuine Self-Assurance Through Competence
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    There is a critical difference between performed confidence and genuine
                    self-assurance. Performed confidence comes from motivation and fades within
                    days. Genuine self-assurance comes from competence — from actually developing
                    real skills, receiving honest structured feedback, and seeing measurable progress
                    over time. Every confidence building pathway at Hidden Potential includes
                    pre-assessment and post-assessment. You do not have to wonder whether you have
                    grown — you can see it documented. This evidence-based approach produces the
                    kind of self-assurance that does not collapse under pressure because it is built
                    on real ability, not positive thinking.
                  </p>
                </div>
              </div>

              {/* Card 04 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#0D9488" }}
                >
                  <span className="text-white/60 text-xs font-bold">04</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Public Speaking and Presentation Confidence
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#2D2D2D" }}>
                    Public speaking anxiety affects an estimated 75% of the population. It is the
                    most common form of confidence deficit — and also one of the most trainable. At
                    Hidden Potential, speaking confidence is not built by simply telling you to get
                    up and talk more. It is developed through structured methodology — voice
                    modulation training, body language coaching, content structuring techniques, and
                    repeated practice with specific feedback. Students as young as 8 years old and
                    professionals up to 65 develop genuine speaking confidence through the
                    Communication Mastery pathway, where public speaking is treated as a progressive
                    skill with measurable stages.
                  </p>
                  <Link
                    href="/programs/communication-mastery"
                    className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                  >
                    Explore Communication Mastery &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 05 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#0D9488" }}
                >
                  <span className="text-white/60 text-xs font-bold">05</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Assertiveness in Personal and Professional Settings
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Assertive communication is the midpoint between aggression and passivity — and
                    it is exactly where confident people operate. Being assertive means expressing
                    your thoughts, needs, and boundaries clearly without damaging relationships or
                    apologising for having an opinion. For many learners — especially women and
                    teenagers — assertiveness is the hardest confidence dimension because it
                    directly challenges ingrained patterns of people-pleasing, conflict avoidance,
                    and social compliance. At Hidden Potential, assertiveness is trained through
                    structured role-playing, real-world scenario practice, and progressive challenge
                    exercises that build the muscle gradually.
                  </p>
                </div>
              </div>

              {/* Card 06 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#0D9488" }}
                >
                  <span className="text-white/60 text-xs font-bold">06</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Handling Peer Pressure and Social Anxiety
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    For students aged 8 to 21, peer pressure is one of the biggest confidence
                    destroyers. The desire to fit in, the fear of social exclusion, and the constant
                    comparison amplified by social media create an environment where authentic
                    self-expression feels risky. For adults, the same dynamics play out in workplace
                    politics, family expectations, and social circles. Our confidence building
                    approach addresses social anxiety and peer pressure specifically — teaching
                    learners to maintain their identity and decisions under external pressure, to set
                    boundaries without guilt, and to distinguish between healthy social adaptation
                    and self-abandoning people-pleasing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 4 — WHO IT'S FOR
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#F3F0FF]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-4">
              <SectionLabel>Who This Is For</SectionLabel>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-5 leading-snug max-w-3xl mx-auto"
              style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
            >
              Who Benefits from Confidence Building Programs in Delhi?
            </h2>
            <p
              className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              Confidence challenges look different at every age and life stage, but the underlying
              mechanics are the same. A structured, assessment-based approach ensures that every
              learner — from an 8-year-old student in Dwarka to a 45-year-old professional in
              Gurgaon — receives development targeted to their specific confidence gaps.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Audience 01 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5"
                    style={{ background: "#EDE9FE" }}
                  >
                    01
                  </span>
                  <h3
                    className="text-sm font-bold leading-snug"
                    style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                  >
                    Students with Low Confidence (Ages 8-21)
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Children and teenagers who hesitate to participate in class, avoid social
                  situations, struggle to make eye contact, or have low self-image. Confidence
                  building is a core developmental skill in the An Enlightened Learner program —
                  not an add-on or afterthought. Through structured activities, guided practice, and
                  age-appropriate NLP tools, students develop genuine self-assurance that carries
                  into academics, friendships, and future careers. Parents across Delhi, Noida, and
                  Gurgaon consistently report visible changes within the first three months.
                </p>
                <Link
                  href="/programs/enlightened-learner"
                  className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  Explore An Enlightened Learner &rarr;
                </Link>
              </div>

              {/* Audience 02 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5"
                    style={{ background: "#EDE9FE" }}
                  >
                    02
                  </span>
                  <h3
                    className="text-sm font-bold leading-snug"
                    style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                  >
                    Teenagers Facing Peer Pressure (Ages 13-18)
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Adolescence is the stage where identity is most vulnerable and peer influence is
                  strongest. Without structured confidence development, teenagers default to
                  conformity — suppressing their authentic selves to fit in. The confidence building
                  approach at Hidden Potential gives teens practical tools to handle peer pressure,
                  make independent decisions, resist negative influence, and develop a stable sense
                  of self that does not depend on social approval. This is one of the most impactful
                  interventions we offer, and it is fully integrated into the student life skills
                  pathway.
                </p>
              </div>

              {/* Audience 03 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5"
                    style={{ background: "#EDE9FE" }}
                  >
                    03
                  </span>
                  <h3
                    className="text-sm font-bold leading-snug"
                    style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                  >
                    Working Professionals Lacking Presence
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  You are good at your job. Your technical skills are strong. But in meetings,
                  presentations, and leadership situations, you struggle to communicate your
                  competence with authority. This is one of the most common confidence gaps among
                  professionals in Delhi NCR — and it is entirely trainable. The Communication
                  Mastery pathway addresses professional confidence specifically through leadership
                  communication training, executive presence development, and high-stakes
                  presentation practice.
                </p>
                <Link
                  href="/programs/communication-mastery"
                  className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  Explore Communication Mastery &rarr;
                </Link>
              </div>

              {/* Audience 04 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5"
                    style={{ background: "#EDE9FE" }}
                  >
                    04
                  </span>
                  <h3
                    className="text-sm font-bold leading-snug"
                    style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                  >
                    Women Rebuilding Self-Worth (Ages 28+)
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Years of prioritising everyone else&apos;s needs, suppressing personal ambitions,
                  navigating societal expectations, and managing role overload can erode confidence
                  at the identity level. Surface-level motivation does not fix this. The Self
                  Mastery for Women pathway at Hidden Potential rebuilds confidence from the
                  foundation — through self-awareness, emotional regulation, boundary setting, and
                  guided rediscovery of personal identity and purpose. This is structured
                  transformation, not a feel-good workshop.
                </p>
                <Link
                  href="/programs/self-mastery-women"
                  className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  Explore Self Mastery for Women &rarr;
                </Link>
              </div>

              {/* Audience 05 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5"
                    style={{ background: "#EDE9FE" }}
                  >
                    05
                  </span>
                  <h3
                    className="text-sm font-bold leading-snug"
                    style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                  >
                    People Navigating Career or Life Transitions
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Changing careers, starting a business, relocating, ending a relationship, becoming
                  a parent — every major life transition demands confidence in the face of
                  uncertainty. If you are navigating a transition and finding that self-doubt is
                  louder than it used to be, structured confidence development provides the tools
                  and accountability to move forward with clarity rather than paralysis.
                </p>
              </div>

              {/* Audience 06 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5"
                    style={{ background: "#EDE9FE" }}
                  >
                    06
                  </span>
                  <h3
                    className="text-sm font-bold leading-snug"
                    style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                  >
                    Parents Seeking Confidence Development for Their Children
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Many parents in Delhi NCR recognise that their child&apos;s academic struggles are
                  rooted in confidence issues rather than intellectual ability. If your child avoids
                  participation, has difficulty making friends, struggles with self-expression, or
                  shows signs of social anxiety — structured confidence building through the An
                  Enlightened Learner pathway can produce transformative results. Every child begins
                  with a skills assessment so development is targeted and measurable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5 — WHY DIFFERENT
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#F8F6F2]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-4">
              <SectionLabel>Why Hidden Potential</SectionLabel>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-5 leading-snug max-w-3xl mx-auto"
              style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
            >
              Why Our Confidence Building Program in Delhi Produces Lasting Results
            </h2>
            <p
              className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              There are many personality development classes, motivation workshops, and confidence
              coaches in Delhi. Here is what makes the confidence building approach at Hidden
              Potential fundamentally different — and why the results last longer.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Diff 1 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#EDE9FE" }}
                >
                  <svg
                    className="w-4 h-4 text-primary-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3
                  className="text-sm font-bold mb-2"
                  style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                >
                  Assessment-Based, Not Assumption-Based
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Every learner begins with a structured pre-assessment that identifies their
                  specific confidence gaps across all six dimensions. The development pathway is
                  then personalised to address your actual patterns — not a generic confidence
                  curriculum delivered identically to everyone. A student with public speaking
                  anxiety and a professional with leadership hesitation have different needs. Our
                  assessment ensures they receive different interventions.
                </p>
              </div>

              {/* Diff 2 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#EDE9FE" }}
                >
                  <svg
                    className="w-4 h-4 text-primary-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3
                  className="text-sm font-bold mb-2"
                  style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                >
                  Structured Progression Across Months
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Confidence is not built in a weekend. It is developed through consistent,
                  structured practice over weeks and months — with progressive challenges,
                  real-world application, and ongoing feedback. Our development pathways span 3
                  months (Foundation), 6 months (Growth), and 12 months (Mastery) because genuine
                  behavioural change requires time and reinforcement.
                </p>
              </div>

              {/* Diff 3 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#EDE9FE" }}
                >
                  <svg
                    className="w-4 h-4 text-primary-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3
                  className="text-sm font-bold mb-2"
                  style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                >
                  Pre-Assessment and Post-Assessment Documentation
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  You start with a documented baseline. You finish with a documented progress
                  report. Growth in self-awareness, communication confidence, assertiveness, and
                  emotional regulation is visible and measurable — not assumed based on how you feel
                  after a workshop. This evidence-based approach is unique to Hidden Potential among
                  confidence building programs in Delhi.
                </p>
              </div>

              {/* Diff 4 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#EDE9FE" }}
                >
                  <svg
                    className="w-4 h-4 text-primary-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3
                  className="text-sm font-bold mb-2"
                  style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                >
                  NLP-Powered Behavioural Tools
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Unlike programs that rely solely on practice and exposure, Hidden Potential
                  integrates NLP techniques — confidence anchoring, belief restructuring, cognitive
                  reframing, and emotional state management — to address confidence at the
                  subconscious level. This means you are not just practising confident behaviour —
                  you are rewiring the belief patterns that created the hesitation in the first
                  place.
                </p>
                <Link
                  href="/services/nlp-coaching"
                  className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  Learn about NLP Coaching &rarr;
                </Link>
              </div>

              {/* Diff 5 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#EDE9FE" }}
                >
                  <svg
                    className="w-4 h-4 text-primary-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3
                  className="text-sm font-bold mb-2"
                  style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                >
                  Real Practice, Not Theory
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Every confidence technique taught at Hidden Potential is practised in structured
                  exercises, tested in real-world scenarios, and refined through specific feedback.
                  You do not sit in a lecture about confidence — you practise speaking, asserting,
                  leading, and expressing until the skill becomes natural. This is why our learners
                  maintain their confidence gains long after the program ends.
                </p>
              </div>

              {/* Diff 6 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#EDE9FE" }}
                >
                  <svg
                    className="w-4 h-4 text-primary-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3
                  className="text-sm font-bold mb-2"
                  style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                >
                  14+ Years of Proven Results
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Supreet Kaur has spent over 14 years developing confidence in students,
                  professionals, women, and future trainers — across 5000+ individuals, 200+
                  certified trainers, and 1000+ structured workshops. This is not theoretical
                  confidence coaching. It is deeply experienced, refined through real-world Indian
                  contexts, and backed by measurable outcomes across age groups from 8 to 65.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 6 — FAQ
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-4">
              <SectionLabel>Frequently Asked Questions</SectionLabel>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-12 leading-snug"
              style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
            >
              Common Questions About Confidence Building Programs in Delhi
            </h2>

            <div className="space-y-5">
              {/* Q1 */}
              <div className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                  >
                    What causes low confidence and can it really be changed?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Low confidence is caused by a combination of factors — repeated negative
                    experiences, critical feedback during formative years, comparison with peers,
                    lack of structured skill development, and limiting beliefs formed in childhood.
                    The good news is that confidence is not a fixed personality trait. Decades of
                    research in behavioural psychology confirm that self-efficacy — the core of
                    genuine confidence — is trainable through structured practice, competence
                    building, and cognitive restructuring. At Hidden Potential, we have seen
                    students, professionals, and women transform their confidence levels measurably
                    within 3 to 6 months of structured development.
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                  >
                    At what age should confidence building start?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    The earlier, the better. At Hidden Potential, confidence building begins at age
                    8 through the An Enlightened Learner program, with age-appropriate activities
                    and assessments for students aged 8 to 12, 13 to 16, and 17 to 21. Research
                    shows that confidence patterns established in childhood and adolescence have
                    lasting effects on academic performance, career success, and relationship
                    quality. However, confidence is trainable at any age — we work with learners up
                    to age 65 across our various pathways.
                  </p>
                </div>
              </div>

              {/* Q3 */}
              <div className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                  >
                    How long does it take to build genuine confidence?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Most learners report noticeable improvements in self-awareness, social comfort,
                    and communication confidence within the first 4 to 8 weeks of structured
                    training. However, lasting, resilient confidence that holds up under pressure
                    typically develops over 3 to 6 months of consistent practice and feedback. This
                    is why Hidden Potential offers structured pathways across Foundation (3 months),
                    Growth (6 months), and Mastery (12 months) levels rather than one-time
                    workshops.
                  </p>
                </div>
              </div>

              {/* Q4 */}
              <div className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                  >
                    Is the confidence building program available online?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Yes. Confidence building programs at Hidden Potential are available in three
                    formats: offline sessions at our Dwarka, Delhi location, online sessions for
                    learners across Noida, Gurgaon, Faridabad, and all of India, and hybrid
                    programs that combine both formats. The online sessions follow the same
                    structured methodology and include the same assessment process as in-person
                    training.
                  </p>
                </div>
              </div>

              {/* Q5 */}
              <div className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                  >
                    How is this different from personality development classes in Delhi?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Most personality development classes in Delhi offer a broad, surface-level
                    curriculum covering grooming, etiquette, public speaking, and general
                    motivation. Confidence building at Hidden Potential is fundamentally different
                    in three ways: first, it is assessment-based — every learner starts with a
                    structured evaluation that identifies specific confidence gaps. Second, it uses
                    NLP-powered behavioural tools that address confidence at the subconscious belief
                    level, not just the behaviour level. Third, it follows structured developmental
                    pathways spanning months with documented pre and post assessments — not a
                    10-session generic curriculum.
                  </p>
                </div>
              </div>

              {/* Q6 */}
              <div className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
                  >
                    How much does confidence building coaching cost in Delhi?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Confidence building program fees at Hidden Potential vary based on the
                    developmental pathway, level, and format. Individual sessions, group programs,
                    and integrated pathway options have different pricing structures. We recommend
                    starting with a free life skills assessment — this identifies the right pathway
                    and level for your specific needs, after which complete program details and
                    pricing are provided. Contact us or book an assessment to begin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 7 — CTA
        ═══════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden py-24"
          style={{ background: "linear-gradient(180deg, #1A0F3C 0%, #6F00FF 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 85% 20%, rgba(109,40,217,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              Stop Waiting to Feel Confident. Start Building It.
            </h2>
            <p className="text-base text-white/65 mb-10 leading-relaxed">
              Genuine confidence is not discovered — it is developed. It is the result of
              self-awareness, structured practice, honest feedback, and progressive challenge over
              time. At Hidden Potential in Dwarka, Delhi, every confidence journey begins with a
              structured assessment that maps exactly where you are — and designs a clear pathway to
              where you want to be. Whether you choose the student pathway, the communication track,
              the women&apos;s program, or individual coaching — the process is the same:
              assessment, structured development, real-world practice, and documented growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Take the Confidence Assessment
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white/90 rounded-md transition-colors hover:text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Book a Discovery Call
              </Link>
            </div>

            {/* Cross-sell */}
            <p className="text-xs text-white/40 mb-4">
              Also explore:{" "}
              <Link
                href="/services/emotional-intelligence"
                className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
              >
                Emotional Intelligence Coaching in Delhi
              </Link>{" "}
              — the foundation that genuine confidence is built on
            </p>

            {/* Location line */}
            <p className="text-[11px] text-white/30 leading-relaxed">
              Available at Dwarka (Sector 19B), Delhi{" "}|{" "}
              <Link
                href="/locations/noida"
                className="text-white/45 hover:text-white/70 transition-colors"
              >
                Noida
              </Link>
              {" "}|{" "}
              <Link
                href="/locations/gurgaon"
                className="text-white/45 hover:text-white/70 transition-colors"
              >
                Gurgaon
              </Link>
              {" "}|{" "}
              <Link
                href="/locations/faridabad"
                className="text-white/45 hover:text-white/70 transition-colors"
              >
                Faridabad
              </Link>
              {" "}| Online across India
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

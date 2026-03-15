import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: { absolute: "Communication Skills Training in Delhi | Speak Clearly, Lead Confidently | Hidden Potential" },
  description:
    "Communication skills training in Delhi for students, professionals & corporate teams. Public speaking, assertive communication, active listening & leadership expression. Dwarka, Delhi & Online.",
  openGraph: {
    title: "Communication Skills Training in Delhi | Speak Clearly, Lead Confidently | Hidden Potential",
    description:
      "Communication skills training in Delhi for students, professionals & corporate teams. Public speaking, assertive communication, active listening & leadership expression. Dwarka, Delhi & Online.",
    url: "https://hiddenpotentialskills.com/services/communication-skills",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Communication Skills Training in Delhi | Speak Clearly, Lead Confidently | Hidden Potential",
    description:
      "Communication skills training in Delhi for students, professionals & corporate teams. Public speaking, assertive communication, active listening & leadership expression. Dwarka, Delhi & Online.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/services/communication-skills",
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
  name: "Communication Skills Training in Delhi",
  serviceType: "Communication Skills Training",
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
      name: "What is included in communication skills training at Hidden Potential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Communication skills training at Hidden Potential covers the complete communication system: public speaking and voice modulation, assertive communication and boundary setting, active listening and empathetic response, body language and non-verbal awareness, professional workplace communication including email and presentations, interview and high-stakes communication, structured thinking in speech, and conflict handling. Training is delivered through a structured pathway with progressive skill building, live practice, recorded analysis, and measurable pre and post assessments.",
      },
    },
    {
      "@type": "Question",
      name: "Is communication skills training available for children and teenagers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Communication skills training at Hidden Potential begins at age 8 through the An Enlightened Learner student program. Activities and assessments are age-appropriate: students aged 8 to 12 focus on self-expression, classroom participation, and basic speaking confidence. Students aged 13 to 16 develop debate skills, assertiveness, and social communication. Students aged 17 to 21 focus on presentation skills, professional communication, and leadership expression. Communication is one of the 13 key skill areas in the student life skills pathway.",
      },
    },
    {
      "@type": "Question",
      name: "How long does communication skills training take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Noticeable improvement in speaking confidence and clarity typically occurs within 4 to 8 weeks of structured training. The Communication Mastery pathway offers three levels: Foundation (3 months) for core skills, Growth (6 months) for applied professional communication, and Mastery (12 months) for leadership and executive communication. Assessment-based placement ensures you start at the right level for your current abilities.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer corporate communication training in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hidden Potential delivers customised corporate communication training across Delhi NCR for teams and organisations. Programs are designed based on an organisational communication assessment and can cover team communication, client-facing skills, leadership communication, presentation training, email and written communication, and conflict resolution. Both in-person workshops at your location and online formats are available.",
      },
    },
    {
      "@type": "Question",
      name: "Is communication skills training available online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Communication skills training at Hidden Potential is available in three formats: offline sessions at our Dwarka, Delhi location, online sessions for learners across Noida, Gurgaon, Faridabad, and pan-India, and hybrid programs combining both. Online sessions include the same live practice, recorded analysis, structured feedback, and assessment methodology as in-person training.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from spoken English or personality development classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spoken English classes focus narrowly on language proficiency — grammar, vocabulary, and accent. Personality development classes offer broad surface-level content covering grooming, etiquette, and general communication tips. Communication skills training at Hidden Potential is fundamentally different: it is assessment-based with documented pre and post evaluations, covers the complete communication system including non-verbal and professional dimensions, uses structured pathways spanning months rather than weeks, includes live practice with recorded analysis and specific feedback, and produces measurable improvement across all communication dimensions — not just speaking fluency.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function CommunicationSkillsPage() {
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
          style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)" }}
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
                "radial-gradient(circle at center, rgba(200,169,81,0.07) 0%, transparent 70%)",
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
                Communication &amp; Expression
              </span>

            {/* H1 */}
            <h1
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
              style={{
                fontFamily: "var(--font-display)",
                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              Communication Skills Training in Delhi — Speak Clearly, Lead Confidently
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
              Clear communication isn&apos;t a talent — it&apos;s a skill built through structured
              practice.
            </p>

            {/* Body paragraph */}
            <p className="text-base text-white/65 max-w-3xl mx-auto mb-10 leading-relaxed">
              Communication skills are consistently ranked as the number one soft skill demanded by
              employers across India and globally — ahead of leadership, teamwork, and technical
              expertise. Yet the vast majority of students graduate without ever receiving structured
              communication training. Professionals spend entire careers limited not by what they
              know, but by their inability to express it clearly. At Hidden Potential, communication
              skills training in Delhi is not a weekend workshop or a personality development add-on.
              It is a structured developmental pathway — assessed at entry, developed through
              progressive practice, reinforced through real-world application, and measured at
              completion. Whether you are a student aged 8 learning to express yourself in class, a
              professional aged 35 preparing for leadership presentations, or a corporate team needing
              cohesive workplace communication — the methodology is the same: structured, practised,
              feedback-driven, and measurable.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book a Communication Assessment
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
                href="/programs/communication-mastery"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white/90 rounded-md transition-colors hover:text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Explore Communication Mastery
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                "Ages 8 to 65",
                "Individual & Group & Corporate",
                "Pre & Post Assessment",
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
            SECTION 2 — WHY COMMUNICATION MATTERS
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#F8F6F2]">
          <div className="max-w-4xl mx-auto px-6">
            <SectionLabel>Why Communication Skills Matter</SectionLabel>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8 leading-snug"
              style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
            >
              Why Communication Skills Training Is the Highest-ROI Investment You Can Make
            </h2>
            <div className="space-y-6 text-base leading-relaxed" style={{ color: "#2D2D2D" }}>
              <p>
                Consider two professionals with identical technical skills. One communicates ideas
                clearly, speaks confidently in meetings, writes structured emails, and handles
                conflict with composure. The other knows the same information but struggles to
                articulate it, avoids presentations, writes vague messages, and freezes during
                disagreements. Who gets promoted? Who leads the team? Who earns more over a 20-year
                career? The difference is not intelligence, education, or even experience. It is
                communication skill — and unlike IQ or background, communication is entirely
                trainable.
              </p>
              <p>
                For students, the impact starts even earlier. Research from the World Economic Forum
                and National Education Policy 2020 both identify communication as a foundational life
                skill — essential for academic success, social development, career readiness, and
                mental health. A student who can express their emotions clearly is less likely to
                develop anxiety. A student who can speak confidently in groups performs better
                academically. A student who can listen actively builds stronger relationships. These
                are not soft skills — they are survival skills for the modern world.
              </p>
              <p>
                At Hidden Potential in Delhi, communication skills training is delivered through
                structured pathways that serve students as young as 8, working professionals up to
                65, corporate teams, school groups, and women rebuilding their voice after years of
                suppression. Every learner begins with a structured communication baseline assessment
                so development is targeted, progressive, and measurable from day one.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3 — WHAT YOU'LL BUILD
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-4">
              <SectionLabel>Skills You&apos;ll Build</SectionLabel>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-5 leading-snug max-w-3xl mx-auto"
              style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
            >
              Communication Skills We Develop at Hidden Potential in Delhi
            </h2>
            <p
              className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              Communication is not a single ability — it is a system of interconnected skills
              spanning verbal expression, non-verbal awareness, listening, professional writing, and
              leadership influence. Weakness in any one area creates the perception of poor
              communication even if other areas are strong. Our communication skills training in
              Delhi addresses the complete system.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 01 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#7C3AED" }}
                >
                  <span className="text-white/60 text-xs font-bold">01</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Public Speaking and Voice Modulation
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Public speaking is the most visible communication skill — and the most feared. At
                    Hidden Potential, speaking confidence is developed through structured methodology,
                    not just exposure. You learn voice modulation techniques to control pitch, pace,
                    and volume for maximum impact. You practise projection so your voice carries
                    without strain. You develop pacing skills so your message lands clearly rather
                    than rushing through nerves. Every session includes recorded practice with
                    specific, actionable feedback — because public speaking improves through
                    repetition and correction, not through tips and motivation.
                  </p>
                </div>
              </div>

              {/* Card 02 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#7C3AED" }}
                >
                  <span className="text-white/60 text-xs font-bold">02</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Assertive Communication and Boundary Setting
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Assertiveness is the ability to express your thoughts, needs, and limits clearly
                    — without being aggressive, passive, or apologetic. It is the communication style
                    that builds respect in workplaces, maintains healthy relationships, and prevents
                    the resentment that comes from consistently suppressing your own needs. Many
                    learners in Delhi — especially women and younger professionals — default to
                    passive communication patterns learned through cultural and family conditioning.
                    Our training rebuilds these patterns through structured practice in real-world
                    scenarios: saying no without guilt, expressing disagreement without conflict,
                    requesting what you need without over-explaining.
                  </p>
                </div>
              </div>

              {/* Card 03 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#7C3AED" }}
                >
                  <span className="text-white/60 text-xs font-bold">03</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Active Listening and Empathetic Response
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Most people listen to respond, not to understand. Active listening is a trained
                    skill that dramatically improves every relationship — professional, personal, and
                    academic. At Hidden Potential, active listening training covers focused attention
                    techniques, reflective listening methods, empathetic response patterns, and the
                    ability to read emotional subtext beneath spoken words. This skill is particularly
                    valuable for managers, counsellors, educators, parents, and anyone whose
                    effectiveness depends on understanding others accurately before responding.
                  </p>
                </div>
              </div>

              {/* Card 04 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#7C3AED" }}
                >
                  <span className="text-white/60 text-xs font-bold">04</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Body Language and Non-Verbal Awareness
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Research by Professor Albert Mehrabian established that up to 55 percent of
                    communication impact comes from body language — posture, eye contact, gestures,
                    facial expressions, and spatial awareness. Most communication training in Delhi
                    ignores this entirely. At Hidden Potential, non-verbal communication is a
                    dedicated training area. You learn to project confidence through posture, maintain
                    appropriate eye contact across cultural contexts, use gestures that reinforce your
                    message rather than distract from it, and read the body language of others to
                    gauge engagement and emotional state.
                  </p>
                </div>
              </div>

              {/* Card 05 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#7C3AED" }}
                >
                  <span className="text-white/60 text-xs font-bold">05</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Professional and Workplace Communication
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    The communication skills that universities do not teach but every employer
                    expects: structured email writing that gets responses, meeting behaviour that
                    demonstrates leadership, presentation skills that persuade decision-makers, and
                    the ability to communicate bad news, give feedback, and handle workplace conflict
                    professionally. For young professionals entering the workforce from colleges in
                    Delhi NCR, this training bridges the gap between academic communication and
                    professional communication — a gap that often takes years to close through trial
                    and error alone.
                  </p>
                </div>
              </div>

              {/* Card 06 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#7C3AED" }}
                >
                  <span className="text-white/60 text-xs font-bold">06</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Interview and High-Stakes Communication
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Job interviews, client pitches, board presentations, media interactions, salary
                    negotiations — these are high-stakes communication situations where preparation
                    and technique matter more than natural talent. Our training covers structured
                    answer frameworks for interviews, persuasion techniques for pitches, executive
                    presence for leadership presentations, and composure techniques for high-pressure
                    situations. Every technique is practised through realistic simulations with
                    detailed feedback.
                  </p>
                </div>
              </div>

              {/* Card 07 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#7C3AED" }}
                >
                  <span className="text-white/60 text-xs font-bold">07</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Structured Thinking in Speech
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    The ability to organise your thoughts and express them in a clear, logical
                    structure — even under pressure — is what separates effective communicators from
                    people who simply talk a lot. Structured thinking in speech means learning to
                    identify your core message before speaking, organise supporting points logically,
                    transition smoothly between ideas, and conclude memorably. This skill is trained
                    through progressive exercises that build your ability to think and speak
                    simultaneously with clarity.
                  </p>
                </div>
              </div>

              {/* Card 08 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "#7C3AED" }}
                >
                  <span className="text-white/60 text-xs font-bold">08</span>
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Conflict Handling and Difficult Conversations
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    The conversations most people avoid — addressing underperformance, setting
                    boundaries with family, negotiating terms, delivering bad news, handling criticism
                    — are exactly the conversations that determine the quality of your professional
                    and personal relationships. At Hidden Potential, conflict communication is not
                    about winning arguments. It is about expressing your position clearly,
                    understanding the other person&apos;s perspective accurately, and finding
                    resolution without damaging the relationship. These are structured, practicable
                    techniques — not personality-dependent traits.
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
              style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
            >
              Who Benefits from Communication Skills Training in Delhi?
            </h2>
            <p
              className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              Communication challenges manifest differently across age groups and contexts, but the
              underlying skill gaps are predictable and trainable. Whether you are a parent looking
              for communication training for your child, a professional wanting to advance your
              career, or a corporate HR leader seeking team development — Hidden Potential&apos;s
              structured communication training in Delhi adapts to your stage.
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
                    style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                  >
                    Students Ages 8 to 21
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Building the communication foundation during the years when it matters most. From
                  classroom participation and group discussions for younger students to debate skills,
                  presentation confidence, and social communication for teenagers — structured
                  training during these formative years compounds over an entire lifetime.
                  Communication skills are one of the 13 key areas developed in the An Enlightened
                  Learner student program, integrated into age-appropriate activities for 8 to 12, 13
                  to 16, and 17 to 21 year age groups.
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
                    style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                  >
                    Young Adults Entering the Workforce (18-25)
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  The transition from campus to career exposes communication gaps that were invisible
                  in academic settings. Interview skills, professional email etiquette, meeting
                  behaviour, workplace assertiveness, and the ability to communicate with authority
                  figures and clients — these are trainable skills that most graduates lack. The
                  Communication Mastery Foundation track is designed specifically for this transition
                  stage.
                </p>
                <Link
                  href="/programs/communication-mastery"
                  className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  Explore Communication Mastery &rarr;
                </Link>
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
                    style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                  >
                    Working Professionals in Delhi NCR
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Mid-career professionals who are technically competent but plateau because they
                  cannot communicate their value effectively. If you are passed over for promotions
                  despite strong performance, if your ideas are overlooked in meetings, if you
                  struggle with presentations or leadership conversations — these are communication
                  skill gaps, not talent gaps. The Communication Mastery Growth and Mastery tracks
                  address professional and executive communication specifically.
                </p>
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
                    style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                  >
                    Corporate Teams and Organisations
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Group workshops and structured training programs for organisations across Delhi NCR
                  wanting to improve team communication, client-facing skills, leadership
                  communication, cross-functional collaboration, and conflict resolution. Corporate
                  communication training at Hidden Potential is customised based on an organisational
                  assessment — not a generic off-the-shelf module delivered identically to every
                  company.
                </p>
                <Link
                  href="/services/workshops"
                  className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  Explore Corporate Workshops &rarr;
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
                    style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                  >
                    Women Seeking Confident Expression
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Women who have spent years suppressing their communication — deferring to others in
                  meetings, avoiding conflict, apologising before expressing opinions, using
                  qualifying language that undermines their authority. The communication dimension of
                  Self Mastery for Women specifically addresses these patterns, rebuilding assertive
                  expression from the ground up through structured practice and supportive feedback.
                </p>
                <Link
                  href="/programs/self-mastery-women"
                  className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  Explore Self Mastery for Women &rarr;
                </Link>
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
                    style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                  >
                    Schools and Educational Institutions
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Schools across Delhi NCR seeking structured communication skills programs aligned
                  with NEP 2020 life skills requirements. Hidden Potential delivers age-appropriate
                  communication training for students, teacher training workshops, and curriculum
                  consultation for institutions wanting to embed communication development into their
                  regular programming.
                </p>
                <Link
                  href="/for/schools"
                  className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  Explore Programs for Schools &rarr;
                </Link>
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
              className="text-2xl md:text-3xl font-bold text-center mb-5 leading-snug max-w-4xl mx-auto"
              style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
            >
              Why Communication Skills Training at Hidden Potential Produces Better Results Than
              Other Programs in Delhi
            </h2>
            <p
              className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              Delhi has hundreds of spoken English classes, personality development institutes, and
              public speaking coaches. Here is what makes communication skills training at Hidden
              Potential fundamentally different.
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
                  style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                >
                  Structured Progression, Not One-Time Workshops
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Communication skills are developed through consistent practice over months — not a
                  weekend event. Our Communication Mastery pathway spans Foundation (3 months),
                  Growth (6 months), and Mastery (12 months) with progressive skill building at each
                  level. This is the same approach used by professional communication training
                  programs globally — adapted for Indian learners and contexts.
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
                  style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                >
                  Assessment-Based Personalisation
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Every learner starts with a structured communication baseline evaluation that
                  identifies specific gaps — some people need public speaking confidence, others need
                  assertiveness training, others need professional writing skills. Your development
                  pathway is personalised to your actual communication gaps, not a generic curriculum.
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
                  style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                >
                  Live Practice with Structured Feedback
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  You do not sit in lectures about communication. You practise — speaking, presenting,
                  asserting, listening, writing — in every session. Every practice receives
                  structured, specific feedback. Recorded speaking analysis is used to show you
                  exactly what to improve. This practice-feedback loop is what produces real skill
                  development, not information consumption.
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
                  style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                >
                  Complete Communication System, Not Just Public Speaking
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Most communication training in Delhi focuses narrowly on public speaking or spoken
                  English. At Hidden Potential, communication training covers the complete system —
                  verbal, non-verbal, written, professional, interpersonal, and leadership
                  communication. Because real-world effectiveness requires competence across all
                  dimensions, not just one.
                </p>
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
                  style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                >
                  Ages 8 to 65, Individual to Corporate
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Very few communication training providers in Delhi serve the full spectrum. We work
                  with students as young as 8, young adults entering careers, mid-career
                  professionals, senior leaders, corporate teams, school groups, and women rebuilding
                  their voice. This breadth of experience means our methodology is tested and refined
                  across every age group and context.
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
                  style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                >
                  Measurable Results with Pre and Post Assessment
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  You begin with a documented communication baseline. You end with a documented
                  progress report. Improvement in speaking confidence, clarity, assertiveness,
                  professional communication, and listening skills is visible, measurable, and
                  presented as a formal assessment — not assumed based on how you feel after a
                  session.
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
              style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
            >
              Common Questions About Communication Skills Training in Delhi
            </h2>

            <div className="space-y-5">
              {/* Q1 */}
              <div className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                  >
                    What is included in communication skills training at Hidden Potential?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Communication skills training at Hidden Potential covers the complete
                    communication system: public speaking and voice modulation, assertive
                    communication and boundary setting, active listening and empathetic response,
                    body language and non-verbal awareness, professional workplace communication
                    including email and presentations, interview and high-stakes communication,
                    structured thinking in speech, and conflict handling. Training is delivered
                    through a structured pathway with progressive skill building, live practice,
                    recorded analysis, and measurable pre and post assessments.
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                  >
                    Is communication skills training available for children and teenagers?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Yes. Communication skills training at Hidden Potential begins at age 8 through
                    the An Enlightened Learner student program. Activities and assessments are
                    age-appropriate: students aged 8 to 12 focus on self-expression, classroom
                    participation, and basic speaking confidence. Students aged 13 to 16 develop
                    debate skills, assertiveness, and social communication. Students aged 17 to 21
                    focus on presentation skills, professional communication, and leadership
                    expression. Communication is one of the 13 key skill areas in the student life
                    skills pathway.
                  </p>
                </div>
              </div>

              {/* Q3 */}
              <div className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                  >
                    How long does communication skills training take?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Noticeable improvement in speaking confidence and clarity typically occurs within
                    4 to 8 weeks of structured training. The Communication Mastery pathway offers
                    three levels: Foundation (3 months) for core skills, Growth (6 months) for
                    applied professional communication, and Mastery (12 months) for leadership and
                    executive communication. Assessment-based placement ensures you start at the
                    right level for your current abilities.
                  </p>
                </div>
              </div>

              {/* Q4 */}
              <div className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                  >
                    Do you offer corporate communication training in Delhi?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Yes. Hidden Potential delivers customised corporate communication training across
                    Delhi NCR for teams and organisations. Programs are designed based on an
                    organisational communication assessment and can cover team communication,
                    client-facing skills, leadership communication, presentation training, email and
                    written communication, and conflict resolution. Both in-person workshops at your
                    location and online formats are available.
                  </p>
                </div>
              </div>

              {/* Q5 */}
              <div className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                  >
                    Is communication skills training available online?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Yes. Communication skills training at Hidden Potential is available in three
                    formats: offline sessions at our Dwarka, Delhi location, online sessions for
                    learners across Noida, Gurgaon, Faridabad, and pan-India, and hybrid programs
                    combining both. Online sessions include the same live practice, recorded analysis,
                    structured feedback, and assessment methodology as in-person training.
                  </p>
                </div>
              </div>

              {/* Q6 */}
              <div className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
                  >
                    How is this different from spoken English or personality development classes?
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Spoken English classes focus narrowly on language proficiency — grammar,
                    vocabulary, and accent. Personality development classes offer broad surface-level
                    content covering grooming, etiquette, and general communication tips.
                    Communication skills training at Hidden Potential is fundamentally different: it
                    is assessment-based with documented pre and post evaluations, covers the complete
                    communication system including non-verbal and professional dimensions, uses
                    structured pathways spanning months rather than weeks, includes live practice with
                    recorded analysis and specific feedback, and produces measurable improvement
                    across all communication dimensions — not just speaking fluency.
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
          style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)" }}
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
              Communication Is the Skill That Multiplies Every Other Skill
            </h2>
            <p className="text-base text-white/65 mb-10 leading-relaxed">
              Confidence, leadership, career advancement, academic performance, relationships — they
              all depend on how well you communicate. And communication is the most trainable skill
              there is. At Hidden Potential in Dwarka, Delhi, every communication journey starts with
              a structured baseline assessment that identifies your specific gaps and maps a clear
              developmental pathway. Whether you choose individual training, the full Communication
              Mastery pathway, or a corporate group program — the process is the same: assess,
              practise, get feedback, improve, and measure the results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Take the Communication Assessment
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
                href="/programs/communication-mastery"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white/90 rounded-md transition-colors hover:text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Explore Communication Mastery
              </Link>
            </div>

            {/* Cross-sell */}
            <p className="text-xs text-white/40 mb-4">
              Also explore:{" "}
              <Link
                href="/services/confidence-building"
                className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
              >
                Confidence Building in Delhi
              </Link>{" "}
              — because clear communication starts with self-assurance
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

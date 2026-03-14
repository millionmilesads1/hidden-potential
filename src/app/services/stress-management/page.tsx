import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: { absolute: "Stress Management Coaching in Delhi | Regain Calm, Build Resilience | Hidden Potential" },
  description:
    "Stress management coaching in Delhi for students, professionals & women. Mindfulness, emotional regulation, NLP techniques & structured resilience building. Dwarka, Delhi & Online.",
  openGraph: {
    title: "Stress Management Coaching in Delhi | Regain Calm, Build Resilience | Hidden Potential",
    description:
      "Stress management coaching in Delhi for students, professionals & women. Mindfulness, emotional regulation, NLP techniques & structured resilience building. Dwarka, Delhi & Online.",
    url: "https://hiddenpotentialskills.com/services/stress-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stress Management Coaching in Delhi | Regain Calm, Build Resilience | Hidden Potential",
    description:
      "Stress management coaching in Delhi for students, professionals & women. Mindfulness, emotional regulation, NLP techniques & structured resilience building. Dwarka, Delhi & Online.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/services/stress-management",
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
  name: "Stress Management Coaching in Delhi",
  serviceType: "Stress Management Coaching",
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
      name: "What is the difference between stress management coaching and therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stress management coaching at Hidden Potential is skill-focused — it teaches you practical techniques for emotional regulation, mindfulness, boundary setting, and stress prevention. It is forward-looking and action-oriented. Therapy, particularly psychotherapy, typically explores the deeper psychological roots of emotional patterns and may address clinical conditions like depression, trauma, or anxiety disorders. If you are experiencing clinical-level mental health challenges, we recommend consulting a licensed therapist. For skill-based stress management and resilience building, our coaching is highly effective.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will I see results from stress management coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most learners report noticeable improvements in emotional regulation, sleep quality, and daily stress levels within 3 to 4 weeks of structured coaching. Mindfulness techniques and NLP-based tools provide immediate relief that deepens with practice. Lasting resilience — the ability to handle high-pressure situations consistently without burnout — typically develops over 3 to 6 months of structured development.",
      },
    },
    {
      "@type": "Question",
      name: "Is stress management coaching suitable for teenagers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Academic stress, exam anxiety, social pressure, and digital overwhelm are significant stress sources for teenagers in Delhi. Stress management for students aged 13 to 21 is integrated into the An Enlightened Learner program using age-appropriate mindfulness techniques, NLP-based anxiety management, and structured emotional regulation practice.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer corporate stress management workshops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hidden Potential delivers customised stress management and resilience workshops for corporate teams across Delhi NCR. Programs are designed based on organisational needs and can cover emotional regulation, mindfulness integration, workplace boundary setting, burnout prevention, and sustainable performance practices. Both in-person and online formats are available.",
      },
    },
    {
      "@type": "Question",
      name: "Is stress management coaching available online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All stress management coaching programs at Hidden Potential are available offline at our Dwarka, Delhi location, online across India, and in hybrid format. Online sessions follow the same structured methodology including assessments, guided practice, and progress tracking.",
      },
    },
    {
      "@type": "Question",
      name: "What techniques are used in stress management coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stress management coaching at Hidden Potential combines multiple evidence-based approaches: mindfulness and meditation practices, NLP-based stress response rewiring including anchoring and reframing, emotional regulation techniques, structured breathing and grounding exercises, cognitive behavioural strategies, boundary setting and assertiveness training, and lifestyle design for sustainable stress prevention. The specific techniques emphasised depend on your personal stress profile identified through the initial assessment.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function StressManagementPage() {
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
          style={{ background: "#6F00FF" }}
        >
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
              <span
                className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-teal rounded-full mb-6"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                Resilience &amp; Emotional Wellness
              </span>

            <h1
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
              style={{
                fontFamily: "var(--font-display)",
                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              Stress Management Coaching in Delhi — Regain Calm, Build Resilience
            </h1>

            <p
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "var(--font-accent)",
                fontStyle: "italic",
                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              Stress management is not about eliminating pressure — it&apos;s about building the
              capacity to perform within it.
            </p>

            <p className="text-base text-white/65 max-w-3xl mx-auto mb-10 leading-relaxed">
              Stress has become the default state for millions of people across Delhi NCR — students
              facing academic pressure, professionals managing career demands, women balancing
              multiple roles, and families navigating financial and social expectations. The problem
              is not stress itself — some pressure is natural and even productive. The problem is
              chronic, unmanaged stress that erodes performance, damages health, destroys
              relationships, and creates a cycle of burnout and recovery that never actually
              resolves. At Hidden Potential, stress management coaching in Delhi is not a relaxation
              workshop or a collection of breathing exercises. It is a structured approach to
              understanding your personal stress patterns, building genuine emotional resilience,
              developing practical regulation techniques, and creating sustainable lifestyle
              practices that prevent chronic stress from accumulating. Whether you are a student
              dealing with exam pressure, a professional approaching burnout, or a woman managing
              emotional overload from multiple responsibilities — structured stress management is a
              trainable skill, not a personality trait.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book a Stress Management Session
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white/90 rounded-md transition-colors hover:text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Take the Assessment
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                "Certified Practitioner",
                "NLP & Mindfulness Based",
                "All Age Groups",
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
            SECTION 2 — WHY IT MATTERS
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#F8F6F2]">
          <div className="max-w-4xl mx-auto px-6">
            <SectionLabel>Why Stress Management Matters</SectionLabel>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8 leading-snug"
              style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
            >
              The Real Cost of Unmanaged Stress in Delhi NCR
            </h2>
            <div className="space-y-6 text-base leading-relaxed" style={{ color: "#2D2D2D" }}>
              <p>
                According to the National Mental Health Survey of India, nearly 150 million Indians
                need mental health support, with stress-related disorders being among the most
                prevalent. In urban centres like Delhi, Noida, and Gurgaon, the numbers are even
                higher — driven by academic competition, career pressure, traffic and commute stress,
                financial anxiety, family expectations, and the constant digital stimulation that
                prevents genuine rest and recovery.
              </p>
              <p>
                For students, unmanaged stress directly impacts academic performance, concentration,
                sleep quality, social relationships, and long-term mental health. For professionals,
                chronic stress leads to decreased productivity, poor decision-making, workplace
                conflicts, career stagnation, and eventually burnout. For women managing multiple
                roles — career, family, household, children&apos;s education, social obligations —
                stress accumulates silently until it manifests as emotional exhaustion, identity
                loss, health problems, or relationship breakdown.
              </p>
              <p>
                The solution is not occasional relaxation. It is structured resilience building —
                developing the emotional regulation skills, mindfulness practices, and lifestyle
                systems that allow you to manage pressure sustainably rather than cycling between
                stress and collapse. At Hidden Potential in Delhi, stress management coaching is
                integrated into every developmental pathway because emotional resilience is the
                foundation that every other life skill is built upon.
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
              Stress Management Skills Taught at Hidden Potential in Delhi
            </h2>
            <p
              className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              Effective stress management is not a single technique — it is a system of skills
              spanning self-awareness, emotional regulation, mindfulness, boundary setting, and
              lifestyle design. Our coaching in Dwarka, Delhi addresses the complete system.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 01 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#0D9488" }}>
                  <span className="text-white/60 text-xs font-bold">01</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Stress Pattern Identification and Self-Awareness
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Before you can manage stress, you need to understand your personal stress
                    patterns — what triggers you, how stress manifests in your body and behaviour,
                    what your default coping mechanisms are, and which situations consistently
                    overwhelm your capacity. At Hidden Potential, stress management begins with a
                    structured self-assessment that maps your unique stress profile. This is not
                    generic stress advice — it is personalised insight that forms the foundation for
                    everything that follows.
                  </p>
                </div>
              </div>

              {/* Card 02 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#0D9488" }}>
                  <span className="text-white/60 text-xs font-bold">02</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Emotional Regulation and Response Control
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#2D2D2D" }}>
                    The difference between someone who manages stress well and someone who does not
                    is rarely the amount of pressure they face — it is their ability to regulate
                    their emotional response to that pressure. Emotional regulation is a trainable
                    skill that involves recognising emotional states as they arise, creating space
                    between trigger and response, choosing constructive responses over reactive ones,
                    and recovering from emotional disruption quickly. At Hidden Potential, emotional
                    regulation is developed through structured NLP techniques and progressive
                    real-world practice.
                  </p>
                  <Link href="/services/emotional-intelligence" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                    Learn about Emotional Intelligence Coaching &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 03 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#0D9488" }}>
                  <span className="text-white/60 text-xs font-bold">03</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Mindfulness and Grounding Techniques
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Mindfulness is not mystical — it is a well-researched, evidence-based practice
                    for stress reduction. Research from Harvard Medical School, the American
                    Psychological Association, and multiple Indian institutions confirms that regular
                    mindfulness practice reduces cortisol levels, improves focus and concentration,
                    enhances emotional regulation, and builds resilience against chronic stress. At
                    Hidden Potential, mindfulness training includes breath-based grounding
                    techniques, body scan practices, present-moment awareness exercises, and
                    structured mindfulness routines that can be practised in as little as 5 to 10
                    minutes daily.
                  </p>
                </div>
              </div>

              {/* Card 04 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#0D9488" }}>
                  <span className="text-white/60 text-xs font-bold">04</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    NLP-Based Stress Response Rewiring
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#2D2D2D" }}>
                    Many stress responses are automatic — triggered by specific situations, people,
                    or thoughts before you even have time to think. NLP techniques allow you to
                    identify these automatic stress triggers and rewire your neurological response.
                    Techniques include anchoring calm states that can be accessed on demand,
                    reframing stress-inducing situations, and modifying the internal dialogue
                    patterns that amplify stress beyond what the actual situation warrants. This is
                    one of the fastest and most effective approaches to stress management available.
                  </p>
                  <Link href="/services/nlp-coaching" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                    Learn about NLP Coaching &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 05 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#0D9488" }}>
                  <span className="text-white/60 text-xs font-bold">05</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Boundary Setting and Energy Management
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#2D2D2D" }}>
                    For many people — especially women and people-pleasers — chronic stress is
                    directly caused by the inability to set and maintain healthy boundaries. Saying
                    yes to every request, taking on responsibilities that belong to others, and
                    prioritising everyone else&apos;s needs over your own is not generosity — it is
                    a boundary problem that leads inevitably to burnout. Stress management coaching
                    at Hidden Potential includes structured assertiveness training and
                    boundary-setting practice so you can protect your energy without damaging
                    relationships.
                  </p>
                  <Link href="/services/confidence-building" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                    Learn about Confidence Building &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 06 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#0D9488" }}>
                  <span className="text-white/60 text-xs font-bold">06</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Sustainable Stress Prevention Systems
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Managing stress after it builds up is important. Preventing chronic stress from
                    accumulating in the first place is even better. Our coaching helps you design
                    sustainable daily routines, energy management systems, and lifestyle practices
                    that keep stress at manageable levels consistently — rather than cycling between
                    high-stress periods and recovery crashes. This includes sleep hygiene practices,
                    digital boundary strategies, workload management systems, and structured rest and
                    recovery routines.
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
              Who Benefits from Stress Management Coaching in Delhi?
            </h2>
            <p
              className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              Stress affects every age group and context differently, but the underlying skills —
              self-awareness, emotional regulation, mindfulness, and boundary setting — are
              universal. Our stress management coaching in Delhi is personalised to your specific
              stress patterns and life stage.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Audience 01 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>01</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}>
                    Students Facing Academic Pressure (Ages 13-21)
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Board exam stress, competitive exam preparation, parental expectations, peer
                  comparison, and the constant pressure to perform creates chronic stress in students
                  across Delhi NCR. At Hidden Potential, stress management for students is integrated
                  into the An Enlightened Learner pathway — combining mindfulness techniques,
                  NLP-based exam anxiety management, and structured emotional regulation practice
                  within the student life skills program.
                </p>
                <Link href="/programs/enlightened-learner" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                  Explore An Enlightened Learner &rarr;
                </Link>
              </div>

              {/* Audience 02 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>02</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}>
                    Working Professionals Approaching Burnout
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Demanding work cultures, long commutes in Delhi NCR, career uncertainty, financial
                  pressure, and the inability to disconnect from work create a burnout trajectory
                  that affects millions of professionals. If you find yourself constantly exhausted,
                  increasingly irritable, losing interest in work you used to enjoy, or unable to
                  focus — these are burnout warning signs, not personality flaws. Structured stress
                  management coaching provides the skills to manage professional pressure
                  sustainably.
                </p>
              </div>

              {/* Audience 03 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>03</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}>
                    Women Managing Multiple Roles
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  The compounding stress of managing career, family, household, children&apos;s
                  education, social obligations, and personal health — often with minimal support and
                  maximum expectation — creates chronic emotional overload that many women in Delhi
                  normalise. The Self Mastery for Women pathway at Hidden Potential addresses this
                  specifically through emotional regulation, boundary setting, identity reclamation,
                  and structured self-care practices.
                </p>
                <Link href="/programs/self-mastery-women" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                  Explore Self Mastery for Women &rarr;
                </Link>
              </div>

              {/* Audience 04 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>04</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}>
                    Individuals Experiencing Anxiety or Emotional Overwhelm
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  If you find yourself constantly anxious, emotionally reactive, unable to relax
                  even when the situation does not warrant stress, or experiencing physical symptoms
                  like headaches, sleep disruption, or digestive issues — your body is telling you
                  that your current stress management capacity is exceeded. Structured coaching
                  provides practical tools to regulate your nervous system, manage anxiety triggers,
                  and build genuine emotional resilience.
                </p>
              </div>

              {/* Audience 05 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>05</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}>
                    Corporate Teams and Organisations
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Workplace stress costs Indian organisations billions in lost productivity,
                  absenteeism, employee turnover, and poor decision-making. Hidden Potential
                  delivers customised stress management workshops for corporate teams across Delhi
                  NCR — covering emotional regulation, mindfulness practices, workplace boundary
                  setting, and sustainable performance strategies.
                </p>
                <Link href="/services/workshops" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                  Explore Corporate Workshops &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5 — WHY DIFFERENT
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#F8F6F2]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-4">
              <SectionLabel>Why Hidden Potential</SectionLabel>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-12 leading-snug max-w-3xl mx-auto"
              style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}
            >
              Why Stress Management Coaching at Hidden Potential Produces Lasting Resilience
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Diff 1 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: "#EDE9FE" }}>
                  <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}>
                  Structured Development, Not Quick Fixes
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  A single meditation session or breathing workshop provides temporary relief.
                  Lasting stress resilience requires structured skill development over weeks and
                  months. Our stress management coaching follows progressive developmental pathways
                  with assessment, practice, feedback, and measurable progress — not a one-time
                  event.
                </p>
              </div>

              {/* Diff 2 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: "#EDE9FE" }}>
                  <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}>
                  NLP-Powered Techniques for Root-Level Change
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Most stress management approaches address symptoms — teaching you to relax after
                  stress builds. NLP-based coaching at Hidden Potential addresses the root — the
                  automatic thought patterns, belief systems, and neurological triggers that create
                  excessive stress in the first place. Rewiring these patterns produces permanent
                  change, not temporary relief.
                </p>
              </div>

              {/* Diff 3 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: "#EDE9FE" }}>
                  <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}>
                  Integrated Into Complete Life Skills Pathways
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Stress management at Hidden Potential is not standalone. It is integrated into the
                  An Enlightened Learner program for students, Self Mastery for Women, Communication
                  Mastery, and corporate training pathways. This means stress management skills are
                  reinforced and applied across every area of your development.
                </p>
              </div>

              {/* Diff 4 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: "#EDE9FE" }}>
                  <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}>
                  Personalised Through Assessment
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Every learner begins with a structured stress profile assessment. The coaching is
                  then personalised to your specific triggers, patterns, and needs — not a generic
                  curriculum. A student with exam anxiety and a professional with burnout receive
                  fundamentally different interventions.
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
              Common Questions About Stress Management Coaching in Delhi
            </h2>

            <div className="space-y-5">
              {[
                {
                  q: "What is the difference between stress management coaching and therapy?",
                  a: "Stress management coaching at Hidden Potential is skill-focused — it teaches you practical techniques for emotional regulation, mindfulness, boundary setting, and stress prevention. It is forward-looking and action-oriented. Therapy, particularly psychotherapy, typically explores the deeper psychological roots of emotional patterns and may address clinical conditions like depression, trauma, or anxiety disorders. If you are experiencing clinical-level mental health challenges, we recommend consulting a licensed therapist. For skill-based stress management and resilience building, our coaching is highly effective.",
                },
                {
                  q: "How quickly will I see results from stress management coaching?",
                  a: "Most learners report noticeable improvements in emotional regulation, sleep quality, and daily stress levels within 3 to 4 weeks of structured coaching. Mindfulness techniques and NLP-based tools provide immediate relief that deepens with practice. Lasting resilience — the ability to handle high-pressure situations consistently without burnout — typically develops over 3 to 6 months of structured development.",
                },
                {
                  q: "Is stress management coaching suitable for teenagers?",
                  a: "Yes. Academic stress, exam anxiety, social pressure, and digital overwhelm are significant stress sources for teenagers in Delhi. Stress management for students aged 13 to 21 is integrated into the An Enlightened Learner program using age-appropriate mindfulness techniques, NLP-based anxiety management, and structured emotional regulation practice.",
                },
                {
                  q: "Do you offer corporate stress management workshops?",
                  a: "Yes. Hidden Potential delivers customised stress management and resilience workshops for corporate teams across Delhi NCR. Programs are designed based on organisational needs and can cover emotional regulation, mindfulness integration, workplace boundary setting, burnout prevention, and sustainable performance practices. Both in-person and online formats are available.",
                },
                {
                  q: "Is stress management coaching available online?",
                  a: "Yes. All stress management coaching programs at Hidden Potential are available offline at our Dwarka, Delhi location, online across India, and in hybrid format. Online sessions follow the same structured methodology including assessments, guided practice, and progress tracking.",
                },
                {
                  q: "What techniques are used in stress management coaching?",
                  a: "Stress management coaching at Hidden Potential combines multiple evidence-based approaches: mindfulness and meditation practices, NLP-based stress response rewiring including anchoring and reframing, emotional regulation techniques, structured breathing and grounding exercises, cognitive behavioural strategies, boundary setting and assertiveness training, and lifestyle design for sustainable stress prevention. The specific techniques emphasised depend on your personal stress profile identified through the initial assessment.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                  <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                    <p className="text-sm font-bold" style={{ color: "#6F00FF", fontFamily: "var(--font-display)" }}>{q}</p>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 7 — CTA
        ═══════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden py-24"
          style={{ background: "#6F00FF" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 85% 20%, rgba(109,40,217,0.08) 0%, transparent 60%)" }}
          />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)", textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
            >
              Stop Surviving Stress. Start Managing It.
            </h2>
            <p className="text-base text-white/65 mb-10 leading-relaxed">
              Chronic stress is not inevitable — it is the result of specific patterns that can be
              identified and changed. Stress management coaching at Hidden Potential in Dwarka, Delhi
              gives you the practical tools, structured techniques, and personalised guidance to
              build genuine emotional resilience — not temporary relief. Start with a free assessment
              to understand your stress patterns and receive a personalised development pathway.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book a Stress Management Session
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white/90 rounded-md transition-colors hover:text-white"
                style={{ border: "1px solid rgba(255,255,255,0.25)", fontFamily: "var(--font-display)" }}
              >
                Take the Assessment
              </Link>
            </div>

            <p className="text-xs text-white/40 mb-4">
              Also explore:{" "}
              <Link href="/services/emotional-intelligence" className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors">
                Emotional Intelligence Coaching
              </Link>{" "}
              — because stress management starts with understanding your emotional patterns
            </p>

            <p className="text-[11px] text-white/30 leading-relaxed">
              Available at Dwarka (Sector 19B), Delhi{" "}|{" "}
              <Link href="/locations/noida" className="text-white/45 hover:text-white/70 transition-colors">Noida</Link>
              {" "}|{" "}
              <Link href="/locations/gurgaon" className="text-white/45 hover:text-white/70 transition-colors">Gurgaon</Link>
              {" "}|{" "}
              <Link href="/locations/faridabad" className="text-white/45 hover:text-white/70 transition-colors">Faridabad</Link>
              {" "}| Online across India
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

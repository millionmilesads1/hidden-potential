import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: { absolute: "Emotional Intelligence Coaching in Delhi | Self-Awareness & Empathy | Hidden Potential" },
  description:
    "Emotional intelligence coaching in Delhi. Develop self-awareness, empathy, emotional regulation & social skills through structured training. For students, professionals & women. Dwarka & Online.",
  openGraph: {
    title: "Emotional Intelligence Coaching in Delhi | Self-Awareness & Empathy | Hidden Potential",
    description:
      "Emotional intelligence coaching in Delhi. Develop self-awareness, empathy, emotional regulation & social skills through structured training. For students, professionals & women. Dwarka & Online.",
    url: "https://hiddenpotentialskills.com/services/emotional-intelligence",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotional Intelligence Coaching in Delhi | Self-Awareness & Empathy | Hidden Potential",
    description:
      "Emotional intelligence coaching in Delhi. Develop self-awareness, empathy, emotional regulation & social skills through structured training. For students, professionals & women. Dwarka & Online.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/services/emotional-intelligence",
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
  name: "Emotional Intelligence Coaching in Delhi",
  serviceType: "Emotional Intelligence Coaching",
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
      name: "What is emotional intelligence and can it be improved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emotional intelligence is the ability to recognise, understand, manage, and effectively use emotions in yourself and others. Research consistently confirms that emotional intelligence is not fixed — it is a set of trainable skills that can be developed at any age through structured practice. Daniel Goleman's framework identifies five components: self-awareness, self-regulation, motivation, empathy, and social skills. At Hidden Potential, all five components are developed through structured coaching, NLP techniques, and progressive real-world practice.",
      },
    },
    {
      "@type": "Question",
      name: "How is emotional intelligence coaching different from therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emotional intelligence coaching is skill-focused and forward-looking — it teaches you practical techniques for understanding and managing emotions more effectively. Therapy typically addresses deeper psychological patterns, trauma, and clinical mental health conditions. Both are valuable in their contexts. If you are seeking structured skill development in emotional awareness, regulation, and social effectiveness, emotional intelligence coaching at Hidden Potential is highly effective.",
      },
    },
    {
      "@type": "Question",
      name: "What age group benefits most from emotional intelligence training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All age groups benefit from emotional intelligence development, but the impact is particularly significant for students aged 8 to 21 because emotional patterns established during these years influence lifelong behaviour. At Hidden Potential, emotional intelligence is a core component of the An Enlightened Learner student program with age-appropriate activities for 8-12, 13-16, and 17-21 year age groups. Adults of all ages also benefit significantly — particularly professionals in leadership roles and women navigating complex emotional landscapes.",
      },
    },
    {
      "@type": "Question",
      name: "How long does emotional intelligence coaching take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meaningful improvements in self-awareness and emotional regulation are typically noticed within 4 to 6 weeks of structured coaching. Deeper development of empathy, social skills, and consistent emotional management develops over 3 to 6 months of practice and reinforcement. This is why Hidden Potential integrates emotional intelligence into structured pathways rather than offering it as a standalone short course.",
      },
    },
    {
      "@type": "Question",
      name: "Is emotional intelligence coaching available online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Emotional intelligence coaching at Hidden Potential is available offline at our Dwarka, Delhi location, online for learners across Noida, Gurgaon, Faridabad, and pan-India, and in hybrid format. Online sessions use structured exercises, guided practice, and assessment tools that are equally effective as in-person coaching.",
      },
    },
    {
      "@type": "Question",
      name: "How does emotional intelligence relate to confidence and communication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emotional intelligence is the foundation that both confidence and communication are built on. Self-awareness feeds confidence — you cannot be genuinely confident without understanding your emotions and patterns. Emotional regulation prevents anxiety and hesitation from undermining communication. Empathy makes your communication more effective because you understand your audience. At Hidden Potential, emotional intelligence, confidence building, and communication skills are developed together as interconnected competencies.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function EmotionalIntelligencePage() {
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
              <span
                className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-teal rounded-full mb-6"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                Emotional Intelligence &amp; Self-Awareness
              </span>

            <h1
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
              style={{
                fontFamily: "var(--font-display)",
                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              Emotional Intelligence Coaching — Develop Self-Awareness &amp; Empathy in Delhi
            </h1>

            <p
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "var(--font-accent)",
                fontStyle: "italic",
                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              Emotional intelligence is not about being emotional — it&apos;s about being
              intelligent about emotions.
            </p>

            <p className="text-base text-white/65 max-w-3xl mx-auto mb-10 leading-relaxed">
              Emotional intelligence — the ability to recognise, understand, manage, and effectively
              use emotions in yourself and others — is consistently identified by researchers as a
              stronger predictor of life success than IQ, academic performance, or technical skills.
              Daniel Goleman&apos;s groundbreaking research established that emotional intelligence
              accounts for nearly 90 percent of what distinguishes top performers from average ones
              in leadership positions. Yet despite its proven importance, emotional intelligence is
              almost never formally taught — not in schools, not in universities, and not in most
              workplaces. At Hidden Potential, emotional intelligence coaching in Delhi is delivered
              as a structured developmental skill — assessed at entry, developed through progressive
              training, practised in real-world scenarios, and measured at completion. Whether you
              are a student learning to understand and manage your emotions, a professional
              developing leadership presence, or a woman rebuilding emotional resilience after years
              of suppression — emotional intelligence is the foundational skill that makes every
              other skill more effective.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/assessment"
                className="btn-premium-fill"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book an EI Assessment
                <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></span>
              </Link>
              <Link
                href="/contact"
                className="btn-premium-ghost-plain"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Book a Discovery Call
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                "Research-Backed Methodology",
                "Masters in Psychology",
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
            <SectionLabel>Why Emotional Intelligence Matters</SectionLabel>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8 leading-snug"
              style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
            >
              Why Emotional Intelligence Is the Most Important Skill Nobody Teaches
            </h2>
            <div className="space-y-6 text-base leading-relaxed" style={{ color: "#2D2D2D" }}>
              <p>
                Consider two students with identical academic ability. One understands their own
                emotions, can manage frustration during difficult problems, empathises with
                classmates, and communicates feelings clearly. The other has no vocabulary for their
                emotions, reacts impulsively when frustrated, struggles to understand others&apos;
                perspectives, and either suppresses or explodes when overwhelmed. Which student
                performs better academically? Which one builds stronger friendships? Which one
                handles exam pressure more effectively? Which one is better prepared for adult life?
                The answer to every question is the first student — and the difference is emotional
                intelligence.
              </p>
              <p>
                The same pattern holds in professional settings. A technically brilliant manager
                with low emotional intelligence creates toxic team dynamics, misreads situations,
                handles conflict destructively, and plateaus in their career despite their expertise.
                A manager with strong emotional intelligence builds trust, navigates disagreements
                constructively, reads team morale accurately, and advances because people want to
                work with and for them. This is not soft, feel-good theory. It is documented in
                decades of organisational psychology research.
              </p>
              <p>
                At Hidden Potential in Delhi, emotional intelligence coaching is treated with the
                seriousness it deserves — as a foundational life skill that underpins confidence,
                communication, stress management, leadership, and relationship quality. Supreet Kaur
                holds a Masters in Psychology and brings 14 years of experience in emotional
                intelligence development across students, professionals, women, and aspiring
                trainers. Every programme at Hidden Potential — from the student pathway to the
                women&apos;s programme to the trainer certification — has emotional intelligence
                woven into its curriculum because no other skill produces such broad, measurable
                impact.
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
              style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
            >
              Emotional Intelligence Skills Developed at Hidden Potential in Delhi
            </h2>
            <p
              className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              Emotional intelligence is composed of five interconnected competencies identified by
              Daniel Goleman. At Hidden Potential, each competency is developed through structured
              training, practical exercises, and real-world application — not just discussed in
              theory.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 01 */}
              <div className="card-service">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#7C3AED" }}>
                  <span className="text-white/60 text-xs font-bold">01</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Self-Awareness — Understanding Your Emotional Landscape
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Self-awareness is the foundation of emotional intelligence — the ability to
                    accurately recognise your own emotions as they happen, understand why you feel
                    the way you do, and know how your emotions affect your thoughts, decisions, and
                    behaviour. Most people operate on emotional autopilot — reacting to feelings
                    without understanding them. At Hidden Potential, self-awareness is developed
                    through structured reflection exercises, emotional journaling techniques, guided
                    self-assessment tools, and NLP-based pattern identification. You learn to
                    recognise emotional triggers before they control your behaviour, understand the
                    difference between emotions and reactions, and develop the emotional vocabulary
                    that allows you to communicate your inner experience accurately.
                  </p>
                </div>
              </div>

              {/* Card 02 */}
              <div className="card-service">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#7C3AED" }}>
                  <span className="text-white/60 text-xs font-bold">02</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Self-Regulation — Managing Emotions Under Pressure
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#2D2D2D" }}>
                    Self-regulation is the ability to manage your emotional responses — especially
                    under pressure, conflict, or stress. It is not about suppressing emotions or
                    pretending you do not feel them. It is about choosing your response rather than
                    being controlled by automatic reactions. A self-regulated person can feel anger
                    without becoming aggressive, feel anxiety without becoming paralysed, and feel
                    disappointment without becoming defeated. At Hidden Potential, self-regulation is
                    developed through NLP techniques including emotional state management, confidence
                    anchoring, and cognitive reframing — combined with mindfulness practices and
                    structured behavioural exercises that build the muscle of emotional choice.
                  </p>
                  <Link href="/services/stress-management" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                    Learn about Stress Management &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 03 */}
              <div className="card-service">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#7C3AED" }}>
                  <span className="text-white/60 text-xs font-bold">03</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Motivation — Building Internal Drive and Resilience
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Emotionally intelligent motivation is not about external rewards or fear-based
                    pressure — it is about internal drive aligned with personal values and purpose.
                    People with strong emotional motivation persist through setbacks, maintain
                    optimism without denial, defer gratification for long-term goals, and recover
                    from failure with learning rather than defeat. At Hidden Potential, motivational
                    resilience is developed through goal-setting frameworks, growth mindset training,
                    NLP-based belief restructuring, and structured exercises that connect daily
                    actions to personal purpose and values.
                  </p>
                </div>
              </div>

              {/* Card 04 */}
              <div className="card-service">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#7C3AED" }}>
                  <span className="text-white/60 text-xs font-bold">04</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Empathy — Understanding Others Accurately
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Empathy is the ability to accurately understand the emotions, perspectives, and
                    needs of other people — even when they differ from your own. It is not about
                    agreeing with everyone or being overly accommodating. It is about having an
                    accurate read on the people around you so you can communicate effectively,
                    manage relationships wisely, and navigate social situations with awareness. At
                    Hidden Potential, empathy development includes active listening training,
                    perspective-taking exercises, emotional reading practice, and cross-cultural
                    awareness — particularly important in Delhi&apos;s diverse social and
                    professional environment.
                  </p>
                </div>
              </div>

              {/* Card 05 — spans full width on md+ */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden md:col-span-2">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#7C3AED" }}>
                  <span className="text-white/60 text-xs font-bold">05</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Social Skills — Building and Managing Relationships
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#2D2D2D" }}>
                    The social skills dimension of emotional intelligence encompasses communication,
                    influence, conflict management, collaboration, team building, and leadership.
                    People with strong social-emotional skills build networks naturally, resolve
                    disagreements constructively, inspire and motivate others, and navigate complex
                    social dynamics with grace. At Hidden Potential, social skills are developed
                    through structured communication practice, assertiveness training, leadership
                    exercises, and real-world relationship management scenarios that build competence
                    through repetition and feedback.
                  </p>
                  <Link href="/services/communication-skills" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                    Learn about Communication Skills &rarr;
                  </Link>
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
              Who Benefits from Emotional Intelligence Coaching in Delhi?
            </h2>
            <p
              className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              Emotional intelligence gaps affect every age group and professional level — from
              children who cannot name their emotions to executives who cannot read their teams. Our
              coaching in Dwarka, Delhi is personalised through structured assessment to address
              your specific emotional intelligence profile.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Audience 01 */}
              <div className="card-service">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>01</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}>
                    Students Developing Emotional Foundations (Ages 8-21)
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Children and teenagers who struggle to manage emotions, have difficulty
                  understanding others&apos; feelings, react impulsively, or suppress their emotions
                  entirely. Emotional intelligence is a core component of the An Enlightened Learner
                  program — developed through age-appropriate activities that build self-awareness,
                  empathy, and emotional regulation as foundational life skills.
                </p>
                <Link href="/programs/enlightened-learner" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                  Explore An Enlightened Learner &rarr;
                </Link>
              </div>

              {/* Audience 02 */}
              <div className="card-service">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>02</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}>
                    Professionals Developing Leadership Presence
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Technical expertise gets you to a certain level. Emotional intelligence gets you
                  beyond it. Professionals in Delhi NCR who want to lead teams effectively, navigate
                  workplace dynamics, handle conflict constructively, and build influence through
                  trust rather than authority need structured emotional intelligence development.
                  This competency is integrated into the Communication Mastery pathway at the Growth
                  and Mastery levels.
                </p>
                <Link href="/programs/communication-mastery" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                  Explore Communication Mastery &rarr;
                </Link>
              </div>

              {/* Audience 03 */}
              <div className="card-service">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>03</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}>
                    Women Rebuilding Emotional Resilience
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Women who have spent years managing everyone else&apos;s emotions at the expense
                  of their own emotional health. The Self Mastery for Women pathway at Hidden
                  Potential addresses emotional intelligence specifically — helping women develop
                  self-awareness, emotional regulation, boundary-based self-care, and the empathy
                  balance that allows caring for others without depleting yourself.
                </p>
                <Link href="/programs/self-mastery-women" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                  Explore Self Mastery for Women &rarr;
                </Link>
              </div>

              {/* Audience 04 */}
              <div className="card-service">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>04</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}>
                    Aspiring Trainers and Educators
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Effective trainers and educators need advanced emotional intelligence to read
                  rooms, manage group dynamics, handle difficult participants, and create
                  psychologically safe learning environments. The Train the Trainer Certification at
                  Hidden Potential develops emotional intelligence as a core facilitator competency.
                </p>
                <Link href="/programs/train-the-trainer" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                  Explore Train the Trainer &rarr;
                </Link>
              </div>

              {/* Audience 05 */}
              <div className="card-service">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>05</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}>
                    Anyone Seeking Better Relationships and Self-Understanding
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  If you find that your relationships — personal or professional — are consistently
                  strained by miscommunication, emotional reactivity, or misunderstanding, emotional
                  intelligence coaching addresses the root skill gap. Better self-understanding leads
                  to better self-management, which leads to better relationships in every area of
                  life.
                </p>
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
              style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}
            >
              Why Emotional Intelligence Coaching at Hidden Potential Produces Deeper Results
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Diff 1 */}
              <div className="card-service">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: "#EDE9FE" }}>
                  <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}>
                  Psychology-Backed, Structured Approach
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Supreet Kaur holds a Masters in Psychology and has spent 14 years developing
                  emotional intelligence across 5000+ individuals. This is not popular self-help
                  content repackaged as coaching. It is structured emotional intelligence development
                  grounded in Goleman&apos;s EI framework, Bandura&apos;s self-efficacy research,
                  and applied behavioural psychology.
                </p>
              </div>

              {/* Diff 2 */}
              <div className="card-service">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: "#EDE9FE" }}>
                  <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}>
                  NLP Integration for Accelerated Development
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Traditional emotional intelligence training relies on awareness and practice alone.
                  At Hidden Potential, NLP techniques — including emotional state management, belief
                  restructuring, anchoring, and reframing — accelerate EI development by working at
                  the subconscious level. This means faster, deeper, more lasting emotional
                  intelligence growth.
                </p>
              </div>

              {/* Diff 3 */}
              <div className="card-service">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: "#EDE9FE" }}>
                  <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}>
                  Woven Into Every Pathway, Not Standalone
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Emotional intelligence at Hidden Potential is not a separate workshop. It is
                  embedded into every developmental pathway — students, women, professionals, and
                  trainers all develop emotional intelligence as a core skill within their program.
                  This ensures the skills are practised and reinforced across months of structured
                  development.
                </p>
              </div>

              {/* Diff 4 */}
              <div className="card-service">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: "#EDE9FE" }}>
                  <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}>
                  Assessment-Driven Personalisation
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Every learner begins with a structured emotional intelligence assessment.
                  Development is then targeted to your specific gaps — whether it is self-awareness,
                  regulation, empathy, or social skills. A person who lacks self-awareness and a
                  person who lacks empathy need fundamentally different interventions.
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
              Common Questions About Emotional Intelligence Coaching in Delhi
            </h2>

            <div className="space-y-5">
              {[
                {
                  q: "What is emotional intelligence and can it be improved?",
                  a: "Emotional intelligence is the ability to recognise, understand, manage, and effectively use emotions in yourself and others. Research consistently confirms that emotional intelligence is not fixed — it is a set of trainable skills that can be developed at any age through structured practice. Daniel Goleman's framework identifies five components: self-awareness, self-regulation, motivation, empathy, and social skills. At Hidden Potential, all five components are developed through structured coaching, NLP techniques, and progressive real-world practice.",
                },
                {
                  q: "How is emotional intelligence coaching different from therapy?",
                  a: "Emotional intelligence coaching is skill-focused and forward-looking — it teaches you practical techniques for understanding and managing emotions more effectively. Therapy typically addresses deeper psychological patterns, trauma, and clinical mental health conditions. Both are valuable in their contexts. If you are seeking structured skill development in emotional awareness, regulation, and social effectiveness, emotional intelligence coaching at Hidden Potential is highly effective.",
                },
                {
                  q: "What age group benefits most from emotional intelligence training?",
                  a: "All age groups benefit from emotional intelligence development, but the impact is particularly significant for students aged 8 to 21 because emotional patterns established during these years influence lifelong behaviour. At Hidden Potential, emotional intelligence is a core component of the An Enlightened Learner student program with age-appropriate activities for 8-12, 13-16, and 17-21 year age groups. Adults of all ages also benefit significantly — particularly professionals in leadership roles and women navigating complex emotional landscapes.",
                },
                {
                  q: "How long does emotional intelligence coaching take?",
                  a: "Meaningful improvements in self-awareness and emotional regulation are typically noticed within 4 to 6 weeks of structured coaching. Deeper development of empathy, social skills, and consistent emotional management develops over 3 to 6 months of practice and reinforcement. This is why Hidden Potential integrates emotional intelligence into structured pathways rather than offering it as a standalone short course.",
                },
                {
                  q: "Is emotional intelligence coaching available online?",
                  a: "Yes. Emotional intelligence coaching at Hidden Potential is available offline at our Dwarka, Delhi location, online for learners across Noida, Gurgaon, Faridabad, and pan-India, and in hybrid format. Online sessions use structured exercises, guided practice, and assessment tools that are equally effective as in-person coaching.",
                },
                {
                  q: "How does emotional intelligence relate to confidence and communication?",
                  a: "Emotional intelligence is the foundation that both confidence and communication are built on. Self-awareness feeds confidence — you cannot be genuinely confident without understanding your emotions and patterns. Emotional regulation prevents anxiety and hesitation from undermining communication. Empathy makes your communication more effective because you understand your audience. At Hidden Potential, emotional intelligence, confidence building, and communication skills are developed together as interconnected competencies.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                  <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                    <p className="text-sm font-bold" style={{ color: "#7C3AED", fontFamily: "var(--font-display)" }}>{q}</p>
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
          style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)" }}
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
              Understanding Emotions Is the First Step to Mastering Everything Else
            </h2>
            <p className="text-base text-white/65 mb-10 leading-relaxed">
              Emotional intelligence is not a luxury skill — it is the foundation that confidence,
              communication, leadership, relationships, and stress management are all built on. At
              Hidden Potential in Dwarka, Delhi, emotional intelligence coaching begins with a
              structured assessment that maps your current EI profile across all five competencies —
              and designs a personalised pathway for measurable development. Whether you are
              developing emotional foundations for your child, building leadership presence for your
              career, or rebuilding emotional resilience for yourself — the process starts with
              understanding where you are.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/assessment"
                className="btn-premium-fill"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Take the EI Assessment
                <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></span>
              </Link>
              <Link
                href="/contact"
                className="btn-premium-ghost-plain"
                style={{ border: "1px solid rgba(255,255,255,0.25)", fontFamily: "var(--font-display)" }}
              >
                Book a Discovery Call
              </Link>
            </div>

            <p className="text-xs text-white/40 mb-4">
              Also explore:{" "}
              <Link href="/services/confidence-building" className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors">
                Confidence Building in Delhi
              </Link>{" "}
              — because emotional intelligence and confidence develop together
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

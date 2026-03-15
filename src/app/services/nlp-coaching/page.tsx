/**
 * SERVICE PAGE — NLP COACHING
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /services/nlp-coaching
 *
 * 7-section structure:
 *   Section 1  — HERO                (dark gradient, H1, Lora italic, body para, 2 CTAs, trust signals)
 *   Section 2  — WHAT IS NLP         (off-white, 3 explanatory paragraphs)
 *   Section 3  — WHAT YOU'LL LEARN   (white, 8 technique cards numbered 01–08)
 *   Section 4  — WHO IT'S FOR        (navy-light, 6 audience cards, some with links)
 *   Section 5  — WHY DIFFERENT       (off-white, 6 differentiator cards)
 *   Section 6  — FAQ                 (white, 6 Q&As with FAQPage schema)
 *   Section 7  — CTA                 (dark gradient, para, 2 CTAs, cross-sell, location line)
 *
 * Schemas: Service + FAQPage (both embedded as JSON-LD)
 */

import type { Metadata } from "next";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "NLP Coaching in Delhi | Certified NLP Practitioner | Hidden Potential" },
  description:
    "NLP coaching in Delhi by certified practitioner with 14+ years experience. Rewire limiting beliefs, build confidence anchors & transform behavioural patterns. Dwarka, South Delhi & Online.",
  openGraph: {
    title: "NLP Coaching in Delhi — Rewire Beliefs & Unlock Behavioral Change",
    description:
      "Certified NLP coaching in Delhi by Supreet Kaur. 14+ years experience. Integrated into structured life skills pathways for lasting behavioural change. Dwarka, South Delhi & Online.",
    type: "website",
    url: "https://hiddenpotentialskills.com/services/nlp-coaching",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/services/nlp-coaching",
  },
};

// ── Schema: Service ───────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "NLP Coaching in Delhi",
  description:
    "Certified NLP coaching in Delhi by Supreet Kaur. Rewire limiting beliefs, build confidence anchors and transform behavioural patterns through structured life skills pathways.",
  provider: {
    "@type": "Organization",
    name: "Hidden Potential",
    url: "https://hiddenpotentialskills.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka",
      addressLocality: "Delhi",
      addressRegion: "Delhi",
      postalCode: "110075",
      addressCountry: "IN",
    },
  },
  serviceType: "NLP Coaching",
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Faridabad" },
  ],
};

// ── Schema: FAQPage ───────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is NLP coaching and how is it different from therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NLP coaching focuses on identifying and changing specific behavioural patterns, belief systems, and emotional responses using structured techniques. Unlike traditional therapy, which often explores the history and emotional context of issues over extended periods, NLP coaching is outcome-focused and technique-driven — meaning you learn practical tools that produce measurable changes in confidence, communication, and emotional regulation within weeks, not years. At Hidden Potential, NLP coaching is integrated into structured life skills pathways for sustained development.",
      },
    },
    {
      "@type": "Question",
      name: "How many sessions of NLP coaching do I need to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most learners report noticeable shifts in confidence, emotional regulation, and self-awareness within the first 4 to 6 sessions. However, lasting behavioural change requires consistent practice and reinforcement — which is why Hidden Potential integrates NLP into structured 3-month, 6-month, and 12-month developmental pathways rather than offering it as a one-time workshop. The pre-assessment and post-assessment process ensures your progress is documented and measurable.",
      },
    },
    {
      "@type": "Question",
      name: "Is NLP coaching available online or only in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NLP coaching at Hidden Potential is available in all three formats: offline sessions at our Dwarka, Delhi location, online sessions for learners across Noida, Gurgaon, Faridabad, and pan-India, and hybrid programs that combine both. The online sessions use the same structured methodology and assessment process as in-person coaching.",
      },
    },
    {
      "@type": "Question",
      name: "What age group is NLP coaching suitable for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NLP techniques are most effective for individuals aged 13 and above. For students aged 13 to 21, NLP tools like confidence anchoring and reframing are integrated into the An Enlightened Learner student program. For adults, NLP coaching is embedded into Communication Mastery, Self Mastery for Women, and the Train the Trainer Certification pathways.",
      },
    },
    {
      "@type": "Question",
      name: "Can NLP coaching help with exam anxiety and academic performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Exam anxiety is typically driven by specific belief patterns — such as fear of failure, negative self-image, or catastrophic thinking — combined with poor emotional state management. NLP techniques like anchoring, reframing, and belief restructuring directly address these patterns. Many students in the An Enlightened Learner program at Hidden Potential report significant improvements in exam confidence and academic focus after learning NLP-based tools.",
      },
    },
    {
      "@type": "Question",
      name: "How much does NLP coaching cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NLP coaching fees at Hidden Potential vary based on the program pathway and format. Individual sessions, group programs, and integrated pathway options have different pricing structures. We recommend starting with a free life skills assessment — this helps identify the right pathway and level for your needs, after which full program details and pricing are shared. Contact us directly or book an assessment to learn more.",
      },
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const techniques = [
  {
    num: "01",
    title: "Foundations of Neuro-Linguistic Programming",
    desc: "Understand how your brain processes information, how language shapes perception, and how repeated experiences create automatic behavioural patterns. This foundation helps you see your own operating system clearly — the first step toward changing it. Most people go through life unaware that their reactions are programmed responses, not conscious choices.",
  },
  {
    num: "02",
    title: "Belief System Mapping & Identification",
    desc: "Every person carries a set of core beliefs about themselves, their abilities, money, relationships, and the world. Many of these beliefs were formed in childhood and operate below conscious awareness. NLP belief mapping helps you identify the specific limiting beliefs that are holding you back — whether it is \u2018I am not good enough to speak in public\u2019 or \u2018People like me don\u2019t succeed.\u2019 Identification is the essential first step before any rewiring can happen.",
  },
  {
    num: "03",
    title: "Confidence Anchoring Techniques",
    desc: "Anchoring is one of NLP\u2019s most powerful tools. It allows you to associate a specific physical trigger with a positive emotional state — so you can access confidence, calm, or focus on demand. This technique is used by athletes before competitions, speakers before presentations, and professionals before high-stakes meetings. At Hidden Potential, we teach anchoring through repeated structured practice until it becomes automatic.",
  },
  {
    num: "04",
    title: "Cognitive Reframing for Mindset Transformation",
    desc: "Reframing is the NLP technique that changes how you interpret events, setbacks, and criticism. The event itself does not change — but your neurological and emotional response to it transforms completely. A student who fails an exam can interpret it as proof of inadequacy, or as specific feedback showing exactly what to study next. Reframing trains your brain to default to the interpretation that serves your growth.",
  },
  {
    num: "05",
    title: "Language Patterns for Influence and Clarity",
    desc: "The words you use — with others and with yourself — shape your reality more than most people realise. NLP language patterns teach you to communicate with precision, influence without manipulation, and eliminate the self-defeating language that undermines your confidence. This is particularly valuable for professionals, leaders, trainers, and anyone whose effectiveness depends on how they communicate.",
  },
  {
    num: "06",
    title: "Subconscious Reprogramming Methods",
    desc: "Many of our most persistent habits and emotional reactions are driven by subconscious programming — patterns set in place by past experiences that now run automatically. NLP provides structured techniques to access and modify these subconscious programs, replacing anxiety responses with calm, replacing hesitation with decisive action, and replacing self-doubt with grounded self-assurance.",
  },
  {
    num: "07",
    title: "Emotional State Management",
    desc: "Your emotional state directly affects your performance, decision-making, and relationships. NLP state management techniques give you the ability to consciously shift your emotional state — from anxious to focused, from overwhelmed to clear, from reactive to composed. This is not about suppressing emotions — it is about developing the ability to choose your response instead of being controlled by automatic reactions.",
  },
  {
    num: "08",
    title: "Applied NLP in Life Skills Training",
    desc: "For educators, coaches, and aspiring trainers pursuing the Train the Trainer Certification at Hidden Potential, NLP integration is a dedicated module. You will learn to embed NLP techniques directly into life skills sessions — using anchoring to build student confidence, reframing to shift limiting academic mindsets, and language patterns to create engaging, transformational training experiences.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification \u2192",
  },
];

const audiences = [
  {
    num: "01",
    title: "Students Dealing with Self-Doubt and Exam Anxiety",
    desc: "Teenagers and young adults aged 13 to 21 who struggle with confidence, academic pressure, or social anxiety benefit enormously from NLP techniques. Confidence anchoring helps before exams and presentations. Belief mapping identifies the specific thought patterns creating the anxiety. Reframing transforms how they interpret failure and feedback. These tools are integrated into the An Enlightened Learner pathway as a core component of student development.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore the Student Life Skills Program \u2192",
  },
  {
    num: "02",
    title: "Working Professionals Seeking Behavioural Change",
    desc: "Professionals in Delhi NCR who want better emotional regulation, sharper communication, and the ability to perform under pressure. NLP coaching is particularly effective for managers dealing with leadership challenges, sales professionals who need persuasion skills without manipulation, and anyone whose career growth is limited by behavioural patterns rather than technical ability.",
  },
  {
    num: "03",
    title: "Aspiring Life Skills Trainers",
    desc: "If you are pursuing the Train the Trainer Certification at Hidden Potential, NLP integration is not optional — it is a core module. You will learn to apply NLP tools within your own training sessions, making you a significantly more effective facilitator than trainers without this skill set. Over 200 trainers have been developed through this certification.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification \u2192",
  },
  {
    num: "04",
    title: "Women Rebuilding Confidence and Identity",
    desc: "Women aged 28 and above who have spent years suppressing their own needs, opinions, and ambitions often carry deeply ingrained limiting beliefs about their worth and capability. NLP coaching provides the tools to identify these belief patterns — many of which were formed through years of societal conditioning — and systematically replace them with empowering alternatives. This work is integrated into the Self Mastery for Women pathway.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women \u2192",
  },
  {
    num: "05",
    title: "Individuals Stuck in Repetitive Negative Patterns",
    desc: "If you find yourself hitting the same walls repeatedly — the same relationship conflicts, the same career plateaus, the same emotional reactions — it is almost always a subconscious pattern at work. NLP coaching helps you identify the specific loop, understand its origin, and install a new pattern that serves your growth instead of blocking it.",
  },
  {
    num: "06",
    title: "Educators and School Counsellors",
    desc: "Teachers and school counsellors in Delhi NCR who want to go beyond traditional classroom management and actually transform student behaviour. NLP tools like anchoring, reframing, and language patterns are powerful additions to any educator\u2019s toolkit — especially when aligned with NEP 2020 life skills requirements.",
  },
];

const differentiators = [
  {
    title: "Integrated, Not Isolated",
    desc: "NLP is not taught as a standalone weekend course. It is integrated into structured developmental pathways — meaning the techniques are practised, reinforced, and applied across months of guided development. A weekend NLP workshop gives you information. An integrated NLP pathway gives you transformation.",
  },
  {
    title: "Assessment-Based Personalisation",
    desc: "Every learner begins with a structured pre-assessment that identifies their specific belief patterns, confidence gaps, and behavioural challenges. NLP coaching is then personalised to address your actual patterns — not generic content delivered to a room of 50 people.",
  },
  {
    title: "14+ Years of Applied Experience",
    desc: "Supreet Kaur has spent over 14 years integrating NLP into life skills training across 5000+ individuals, 200+ certified trainers, and 1000+ workshops. This is not newly certified NLP — it is deeply experienced, tested, and refined through real-world application with Indian learners.",
  },
  {
    title: "Structured Practice, Not Just Theory",
    desc: "Every NLP technique taught at Hidden Potential is practised in structured exercises, applied to real-life scenarios, and reinforced through ongoing feedback. You do not just learn what anchoring is — you practise it until it becomes an automatic tool you can use under pressure.",
  },
  {
    title: "Measurable Progress Through Pre and Post Assessment",
    desc: "You begin with a documented baseline. You end with a documented progress report. Growth in confidence, communication, belief patterns, and emotional regulation is visible and measurable — not assumed based on how you feel after a session.",
  },
  {
    title: "Recognised Credentials",
    desc: "Hidden Potential is registered under MSME and trainings are certified under Skill India. Supreet Kaur holds certifications in NLP, Harvard-affiliated Life Skills, Graphology (American Board), and is a recognised Josh Talks speaker and award-winning educator.",
  },
];

const faqs = [
  {
    q: "What is NLP coaching and how is it different from therapy?",
    a: "NLP coaching focuses on identifying and changing specific behavioural patterns, belief systems, and emotional responses using structured techniques. Unlike traditional therapy, which often explores the history and emotional context of issues over extended periods, NLP coaching is outcome-focused and technique-driven — meaning you learn practical tools that produce measurable changes in confidence, communication, and emotional regulation within weeks, not years. At Hidden Potential, NLP coaching is integrated into structured life skills pathways for sustained development.",
  },
  {
    q: "How many sessions of NLP coaching do I need to see results?",
    a: "Most learners report noticeable shifts in confidence, emotional regulation, and self-awareness within the first 4 to 6 sessions. However, lasting behavioural change requires consistent practice and reinforcement — which is why Hidden Potential integrates NLP into structured 3-month, 6-month, and 12-month developmental pathways rather than offering it as a one-time workshop. The pre-assessment and post-assessment process ensures your progress is documented and measurable.",
  },
  {
    q: "Is NLP coaching available online or only in Delhi?",
    a: "NLP coaching at Hidden Potential is available in all three formats: offline sessions at our Dwarka, Delhi location, online sessions for learners across Noida, Gurgaon, Faridabad, and pan-India, and hybrid programs that combine both. The online sessions use the same structured methodology and assessment process as in-person coaching.",
  },
  {
    q: "What age group is NLP coaching suitable for?",
    a: "NLP techniques are most effective for individuals aged 13 and above. For students aged 13 to 21, NLP tools like confidence anchoring and reframing are integrated into the An Enlightened Learner student program. For adults, NLP coaching is embedded into Communication Mastery, Self Mastery for Women, and the Train the Trainer Certification pathways.",
  },
  {
    q: "Can NLP coaching help with exam anxiety and academic performance?",
    a: "Yes. Exam anxiety is typically driven by specific belief patterns — such as fear of failure, negative self-image, or catastrophic thinking — combined with poor emotional state management. NLP techniques like anchoring, reframing, and belief restructuring directly address these patterns. Many students in the An Enlightened Learner program at Hidden Potential report significant improvements in exam confidence and academic focus after learning NLP-based tools.",
  },
  {
    q: "How much does NLP coaching cost in Delhi?",
    a: "NLP coaching fees at Hidden Potential vary based on the program pathway and format. Individual sessions, group programs, and integrated pathway options have different pricing structures. We recommend starting with a free life skills assessment — this helps identify the right pathway and level for your needs, after which full program details and pricing are shared. Contact us directly or book an assessment to learn more.",
  },
];

// ── Small reusable atoms ──────────────────────────────────────────────────────

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

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NlpCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          Background: Dark navy-to-deep gradient
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)" }}
      >
        {/* Glows */}
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

        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">

          {/* Label badge */}
            <span
              className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-teal rounded-full mb-5"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              NLP &amp; Behavioral Transformation
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            NLP Coaching in Delhi — Rewire Beliefs &amp; Unlock Behavioral Change
          </h1>

          {/* Lora italic tagline */}
          <p
            className="text-xl md:text-2xl text-white/75 leading-relaxed mb-6 max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-accent)",
              fontStyle: "italic",
              textShadow: "0 1px 2px rgba(0,0,0,0.15)",
            }}
          >
            Change begins at the level of belief. NLP gives you the tools to rewire from within.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            Neuro-Linguistic Programming is one of the most effective behavioural transformation
            tools used worldwide by therapists, coaches, educators, and high-performance
            professionals. At Hidden Potential, NLP coaching in Delhi is not delivered as an
            isolated technique or a weekend workshop — it is embedded into structured life skills
            pathways that produce lasting, measurable change. Whether you are a student dealing
            with self-doubt, a professional navigating career pressure, or a woman rebuilding
            confidence after years of suppressed expression, NLP provides the tools to identify
            the root belief patterns driving your behaviour — and permanently rewire them.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Book an NLP Session
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

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "Certified NLP Practitioner",
              "14+ Years Experience",
              "5000+ Individuals Trained",
              "Dwarka, Delhi & Online",
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
          SECTION 2 — WHAT IS NLP
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Understanding NLP</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 leading-tight max-w-2xl">
            What Is NLP Coaching and How Does It Work?
          </h2>

          <div className="flex flex-col gap-6 text-base text-charcoal leading-relaxed">
            <p>
              NLP — Neuro-Linguistic Programming — is a methodology that explores the connection
              between neurological processes (neuro), language patterns (linguistic), and
              behavioural habits learned through experience (programming). Developed in the 1970s
              by Richard Bandler and John Grinder, NLP has since become one of the most widely
              used tools in personal development, executive coaching, therapy, and education
              worldwide.
            </p>
            <p>
              In simple terms, NLP coaching helps you understand why you think, feel, and behave
              the way you do — and gives you practical techniques to change those patterns at the
              subconscious level. Unlike traditional talk therapy or motivational approaches, NLP
              works directly with the neurological and linguistic structures that create your
              habits, fears, beliefs, and emotional responses.
            </p>
            <p>
              At Hidden Potential, NLP coaching in Delhi is delivered by{" "}
              <Link
                href="/about"
                className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
              >
                Supreet Kaur
              </Link>{" "}
              — a certified NLP practitioner with over 14 years of experience integrating
              neuro-linguistic programming into structured life skills training. This is not
              theoretical NLP — every technique is applied, practised, and reinforced through
              real-world exercises, structured feedback, and ongoing developmental pathways.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — WHAT YOU'LL LEARN
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>What You&rsquo;ll Learn</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              NLP Techniques and Tools Taught at Hidden Potential in Delhi
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Our NLP coaching covers both foundational concepts and advanced application
              techniques. Every tool is taught through structured practice — not just explained
              in theory. Here is what you will learn through NLP coaching at Hidden Potential
              in Dwarka, Delhi.
            </p>
          </div>

          {/* 8 technique cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {techniques.map((t) => (
              <div
                key={t.num}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                {/* Teal header bar with number + title */}
                <div className="bg-primary-teal px-5 py-4">
                  <span className="text-[11px] font-bold text-white/50 tabular-nums">
                    {t.num}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 leading-snug">
                    {t.title}
                  </h3>
                </div>
                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{t.desc}</p>
                  {t.linkHref && t.linkLabel && (
                    <Link
                      href={t.linkHref}
                      className="mt-4 text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                    >
                      {t.linkLabel}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — WHO IT'S FOR
          Background: Navy-light (#F3F0FF)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-navy-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Who NLP Coaching Is For</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Who Benefits from NLP Coaching in Delhi?
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              NLP coaching at Hidden Potential in Dwarka, Delhi is designed to serve a wide range
              of individuals — from students as young as 13 to working professionals, women in
              transition, and aspiring life skills trainers. The techniques are universal, but the
              application is always personalised based on a structured pre-assessment.
            </p>
          </div>

          {/* 6 audience cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {audiences.map((a) => (
              <div
                key={a.num}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-teal/20 transition-all p-6 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="text-[11px] font-bold tabular-nums text-primary-teal bg-teal-light px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                  >
                    {a.num}
                  </span>
                  <h3 className="font-bold text-primary-navy text-[15px] leading-snug">
                    {a.title}
                  </h3>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{a.desc}</p>
                {a.linkHref && a.linkLabel && (
                  <Link
                    href={a.linkHref}
                    className="mt-4 text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                  >
                    {a.linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — WHY HIDDEN POTENTIAL IS DIFFERENT
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Why Hidden Potential</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Why NLP Coaching at Hidden Potential Is Different from Other Providers in Delhi
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Delhi has no shortage of NLP practitioners offering weekend workshops and
              certification programs. Here is why NLP coaching at Hidden Potential produces
              deeper, more lasting results.
            </p>
          </div>

          {/* 6 differentiator cards — 3-column grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#7C3AED" }}
                  >
                    <svg
                      className="w-3.5 h-3.5 text-white"
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
                  <h3 className="font-bold text-primary-navy text-[15px] leading-snug">
                    {d.title}
                  </h3>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — FAQ
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Common Questions About NLP Coaching in Delhi
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
              >
                {/* Question — teal left bar */}
                <div
                  className="px-6 py-4 border-l-4 border-primary-teal"
                  style={{ background: "#F8F6F2" }}
                >
                  <h3 className="font-bold text-primary-navy text-[15px] leading-snug">
                    {faq.q}
                  </h3>
                </div>
                {/* Answer */}
                <div className="px-6 py-5">
                  <p className="text-sm text-charcoal/80 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Internal link nudge */}
          <p className="text-center text-sm text-charcoal/70 mt-10">
            Have more questions?{" "}
            <Link
              href="/faq"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Visit our full FAQ page →
            </Link>
            <span className="mx-3 text-charcoal/25">·</span>
            <Link
              href="/contact"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Contact us directly →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7 — FINAL CTA
          Background: Dark navy gradient
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)" }}
      >
        {/* Glow */}
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
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Ready to Rewire What Has Been Holding You Back?
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            NLP coaching at Hidden Potential in Dwarka, Delhi begins with understanding where you
            are — through a structured assessment that maps your current belief patterns,
            confidence levels, and behavioural challenges. From there, you receive a personalised
            pathway designed to produce measurable transformation — not just temporary motivation.
            Whether you choose individual NLP coaching sessions or a structured developmental
            pathway, the process is the same: assessment, structured practice, real-world
            application, and documented progress.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Book an NLP Coaching Session
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
              Take the Free Assessment
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
            — structured self-assurance development powered by NLP techniques
          </p>

          {/* Location line */}
          <p className="text-[11px] text-white/30 leading-relaxed">
            Available at Dwarka (Sector 19B), Delhi{" "}
            <span className="mx-1 text-white/20">|</span>
            <Link
              href="/locations/noida"
              className="hover:text-white/50 transition-colors"
            >
              Noida
            </Link>
            <span className="mx-1 text-white/20">|</span>
            <Link
              href="/locations/gurgaon"
              className="hover:text-white/50 transition-colors"
            >
              Gurgaon
            </Link>
            <span className="mx-1 text-white/20">|</span>
            <Link
              href="/locations/faridabad"
              className="hover:text-white/50 transition-colors"
            >
              Faridabad
            </Link>
            <span className="mx-1 text-white/20">|</span>
            Online across India
          </p>
        </div>
      </section>
    </>
  );
}

/**
 * AUDIENCE PAGE — LIFE SKILLS TRAINING FOR PROFESSIONALS
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /for/professionals
 *
 * 7-section structure:
 *   Section 1  — HERO                       (dark gradient, H1, Lora italic, body, 2 CTAs, trust signals)
 *   Section 2  — THE PROFESSIONAL CHALLENGE (off-white, intro + 6 pain-point cards)
 *   Section 3  — RECOMMENDED PROGRAMS       (white, 8 program cards numbered 01–08)
 *   Section 4  — WHO SPECIFICALLY BENEFITS  (navy-light, 6 professional persona cards)
 *   Section 5  — WHY HIDDEN POTENTIAL       (off-white, 6 differentiator cards)
 *   Section 6  — FAQ                        (white, 6 Q&As)
 *   Section 7  — FINAL CTA                  (dark gradient, para, 2 CTAs, cross-sell, location line)
 *
 * Schemas: Service + FAQPage + BreadcrumbList (all embedded as JSON-LD)
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Life Skills Training for Professionals in Delhi | NLP & Leadership | Hidden Potential" },
  description:
    "Life skills training for working professionals in Delhi NCR. NLP coaching, communication mastery, stress management, leadership development, corporate workshops. 14+ years. Supreet Kaur. Dwarka & online.",
  openGraph: {
    title:
      "Life Skills Training for Professionals in Delhi — Career Growth Through Behavioural Mastery",
    description:
      "NLP coaching, communication skills, stress management, and leadership programs for professionals in Delhi, Noida, Gurgaon, and Faridabad. 14+ years experience. Harvard-affiliated methodology.",
    type: "website",
    url: "https://hiddenpotentialskills.com/for/professionals",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Skills Training for Professionals in Delhi | Hidden Potential",
    description:
      "NLP coaching, leadership, communication, stress management for working professionals. Delhi, Noida, Gurgaon. 14+ years. Harvard-affiliated.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/for/professionals",
  },
};

// ── Schema: Service ───────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Life Skills Training for Professionals in Delhi",
  description:
    "NLP coaching, communication mastery, stress management, leadership development, and corporate workshops for working professionals in Delhi NCR. Structured developmental pathways with measurable outcomes.",
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
  serviceType: "Professional Development and Life Skills Training",
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
      name: "What life skills training programs are available for working professionals in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hidden Potential offers several programs specifically relevant to professionals: NLP Coaching for behavioural transformation and leadership presence, Communication Mastery for public speaking, negotiation, and interpersonal effectiveness, Stress Management for professionals dealing with burnout and career pressure, Emotional Intelligence for leaders and managers, Corporate Workshops for team development, and the Train the Trainer Certification for HR professionals and L&D specialists. All programs are available at our Dwarka, Delhi centre and online for professionals across Noida, Gurgaon, and Faridabad.",
      },
    },
    {
      "@type": "Question",
      name: "Can I attend life skills training while working full-time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design scheduling specifically for working professionals in Delhi NCR. Options include weekday evening batches after 6 PM, weekend morning sessions, and fully online programs you can attend from anywhere. Many professionals in Gurgaon and Noida prefer online sessions to eliminate commute. Individual NLP coaching with Supreet Kaur offers flexible appointment scheduling. We understand your time constraints and work around them.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from corporate training my company provides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Company-sponsored training is typically one-day or half-day sessions focused on team alignment or compliance. Hidden Potential's programs are structured across 8 to 12 weeks with individual assessment, NLP-based behavioural techniques, ongoing practice, and documented progress. The focus is on transforming your personal behavioural patterns — confidence, communication style, emotional regulation, leadership presence — not just providing information. This is individual transformation, not group compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Will this help me get promoted or advance my career?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Career advancement beyond a certain level is almost entirely driven by behavioural competencies — how you communicate, how you handle pressure, how you lead, how you influence. Technical skills get you into the room. Life skills determine what happens next. Professionals who complete our NLP coaching and communication programs report measurable improvements in leadership presence, stakeholder management, and career confidence. We do not promise promotions, but we develop the skills that make them possible.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer individual coaching or only group programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Individual NLP coaching sessions with Supreet Kaur are available for professionals seeking personalised, one-on-one behavioural transformation. Group programs like Communication Mastery and Stress Management provide peer learning and practice opportunities. Many professionals start with individual coaching and then join a group program for sustained development. Corporate teams can book private group workshops. Available in-person at Dwarka, Delhi and online.",
      },
    },
    {
      "@type": "Question",
      name: "What credentials does the trainer have for coaching professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Supreet Kaur holds NLP certification, Harvard-affiliated Life Skills certification, a Masters in Psychology, and Graphology certification from the American Board. She is a Josh Talks speaker, creator of the An Enlightened Learner program, and has trained 5000+ individuals including corporate teams across Delhi, Gurgaon, Noida, and Faridabad over 14+ years. Hidden Potential is MSME registered and Skill India affiliated, ensuring institutional credibility for corporate engagements.",
      },
    },
  ],
};

// ── Schema: BreadcrumbList ────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://hiddenpotentialskills.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Life Skills for Professionals",
      item: "https://hiddenpotentialskills.com/for/professionals",
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const painPoints = [
  {
    num: "01",
    title: "You Have the Technical Skills but Lack Executive Presence",
    desc: "You know your domain. You deliver results. But in meetings, presentations, and leadership conversations, you struggle to command the room. Promotions go to people who communicate their value better, not necessarily to those who perform better. This is a communication and confidence gap — and it is fixable.",
  },
  {
    num: "02",
    title: "Stress and Burnout Are Affecting Your Performance",
    desc: "The relentless pace of corporate Delhi NCR — whether you are in Gurgaon's Cyber City, Noida's IT corridor, or South Delhi's professional circles — creates chronic stress that erodes decision-making, relationships, and health. Most professionals treat symptoms with vacations or lifestyle changes. NLP-based stress management addresses the root patterns driving your stress response.",
  },
  {
    num: "03",
    title: "Your Communication Creates Misunderstandings, Not Alignment",
    desc: "Emails get misread. Feedback conversations become conflicts. Presentations fail to land. The gap between what you intend to communicate and what people actually receive is costing you — in relationships, in credibility, and in career momentum. Communication is a skill system, not a personality trait, and it can be systematically developed.",
  },
  {
    num: "04",
    title: "You React Emotionally Instead of Responding Strategically",
    desc: "Defensive reactions to feedback. Frustration with team members. Anxiety before high-stakes conversations. Emotional regulation is not about suppressing feelings — it is about having the ability to choose your response under pressure. NLP-based emotional state management gives you this capability.",
  },
  {
    num: "05",
    title: "You Feel Stuck Despite Working Hard",
    desc: "Same role for years. Same patterns in different jobs. Same ceiling. If hard work alone drove career growth, you would already be where you want to be. The patterns keeping you stuck are usually subconscious belief systems — about your worth, your ability, your place in the hierarchy. NLP coaching identifies and rewires these specific patterns.",
  },
  {
    num: "06",
    title: "You Want to Transition into Training or Coaching",
    desc: "Many experienced professionals want to leverage their expertise by becoming trainers, coaches, or facilitators. The Train the Trainer Certification at Hidden Potential provides a structured pathway — NLP integration, training methodology, content design, and delivery skills — with a recognised certification that opens new career doors.",
  },
];

const recommendedPrograms = [
  {
    num: "01",
    title: "NLP Coaching — Individual Sessions",
    desc: "One-on-one behavioural transformation with Supreet Kaur. Identify the specific belief patterns limiting your professional growth and systematically rewire them. Covers confidence anchoring, leadership presence, decision-making clarity, and emotional state management. The most personalised and intensive option for professionals.",
    match: "Best for: Senior professionals, managers, entrepreneurs seeking deep individual transformation",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching \u2192",
  },
  {
    num: "02",
    title: "Communication Mastery Program",
    desc: "8 to 12 week structured program covering public speaking, executive communication, negotiation, conflict resolution, and NLP language patterns. Designed for professionals who need to communicate with impact — in meetings, presentations, stakeholder conversations, and team leadership.",
    match: "Best for: Mid-level to senior professionals, team leads, client-facing roles",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery \u2192",
  },
  {
    num: "03",
    title: "Stress Management",
    desc: "NLP-based stress management that goes beyond relaxation techniques. Learn to identify your specific stress triggers, restructure the belief patterns amplifying your stress response, and develop emotional state management tools you can use in real-time — before meetings, during conflicts, and under deadlines.",
    match: "Best for: Corporate professionals in high-pressure roles, especially in Gurgaon and Noida IT corridors",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management \u2192",
  },
  {
    num: "04",
    title: "Confidence Building Program",
    desc: "Structured confidence development using NLP anchoring, belief mapping, and progressive exposure techniques. Not motivational content — practical, repeatable tools that build genuine self-assurance over time. Particularly valuable for professionals preparing for leadership roles, career transitions, or higher-stakes environments.",
    match: "Best for: Professionals stepping into leadership, career changers, those preparing for senior roles",
    linkHref: "/services/confidence-building",
    linkLabel: "Explore Confidence Building \u2192",
  },
  {
    num: "05",
    title: "Emotional Intelligence Training",
    desc: "Develop self-awareness, empathy, emotional regulation, and social intelligence. Essential for managers, leaders, and anyone whose effectiveness depends on navigating complex interpersonal dynamics. Our EI framework uses NLP techniques to build practical emotional competencies, not just theoretical understanding.",
    match: "Best for: Managers, leaders, HR professionals, anyone managing teams",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Explore Emotional Intelligence \u2192",
  },
  {
    num: "06",
    title: "Corporate Workshops",
    desc: "Customised team workshops delivered at your office in Delhi, Gurgaon, Noida, or Faridabad. Topics include team communication, leadership development, conflict resolution, emotional intelligence, and stress management. Designed for teams of 10 to 50. Institutional invoicing available.",
    match: "Best for: HR managers, L&D heads, team leaders booking for their organisations",
    linkHref: "/services/workshops",
    linkLabel: "Explore Corporate Workshops \u2192",
  },
  {
    num: "07",
    title: "Train the Trainer Certification",
    desc: "For professionals transitioning into training, coaching, or facilitation careers. 3-month structured certification covering NLP integration, training methodology, session design, and practical delivery. 200+ certified across Delhi NCR. Opens new career pathways in corporate training, coaching, and education.",
    match: "Best for: HR professionals, experienced managers, aspiring coaches and trainers",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Certification \u2192",
  },
  {
    num: "08",
    title: "Goal Setting & Achievement",
    desc: "Structured goal-setting methodology using NLP-based clarity techniques. Move from vague ambitions to specific, actionable plans with built-in accountability. Particularly effective for professionals at career crossroads or entrepreneurs building new ventures.",
    match: "Best for: Professionals at crossroads, entrepreneurs, career changers",
    linkHref: "/services/goal-setting",
    linkLabel: "Explore Goal Setting \u2192",
  },
];

const personas = [
  {
    num: "01",
    title: "Mid-Level Managers Preparing for Senior Leadership",
    desc: "You manage teams and deliver results, but the next promotion requires executive presence, strategic communication, and emotional intelligence that goes beyond operational competence. NLP coaching and communication mastery build these leadership capabilities systematically.",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching \u2192",
  },
  {
    num: "02",
    title: "Corporate Professionals in Gurgaon's IT and Finance Sector",
    desc: "High-pressure environments in Cyber City, DLF, and Golf Course Road demand peak performance under constant stress. Our stress management and emotional intelligence programs address the specific challenges of Gurgaon's corporate culture.",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management \u2192",
  },
  {
    num: "03",
    title: "Noida Tech Professionals and Startup Founders",
    desc: "Fast-moving tech environments require rapid communication, decisive leadership, and resilience under uncertainty. NLP coaching helps founders and tech leaders build the behavioural toolkit that matches their technical ambition.",
    linkHref: "/locations/noida",
    linkLabel: "Life Skills Training in Noida \u2192",
  },
  {
    num: "04",
    title: "Women Professionals Navigating Career Growth",
    desc: "Women in Delhi NCR's professional landscape face unique challenges — from being heard in male-dominated meetings to rebuilding confidence after career breaks. Self Mastery for Women combined with communication and confidence programs creates a powerful professional development pathway.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women \u2192",
  },
  {
    num: "05",
    title: "HR and L&D Professionals",
    desc: "If you are responsible for your organisation's people development, two options serve you: Corporate Workshops for your team, and the Train the Trainer Certification for building internal life skills delivery capability.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer \u2192",
  },
  {
    num: "06",
    title: "Professionals Seeking Career Transition or New Direction",
    desc: "Feeling stuck, unfulfilled, or ready for something new. Career guidance combined with NLP coaching helps you identify what is actually driving the dissatisfaction, clarify your direction, and build the confidence to make the move.",
    linkHref: "/services/career-guidance",
    linkLabel: "Explore Career Guidance \u2192",
  },
];

const differentiators = [
  {
    title: "Built for Professionals, Not Generic Audiences",
    desc: "Our programs for professionals are not repurposed student content. The scenarios, exercises, language, and outcomes are designed for corporate and professional contexts — leadership challenges, workplace communication, stakeholder management, team dynamics, and career advancement.",
  },
  {
    title: "NLP-Based, Not Motivational",
    desc: "Motivation fades by Monday morning. NLP-based behavioural transformation rewires the patterns that create your professional limitations. Confidence anchoring, cognitive reframing, belief restructuring, and emotional state management produce changes that persist because they operate at the neurological level.",
  },
  {
    title: "Flexible Scheduling for Working Professionals",
    desc: "Evening batches, weekend sessions, and fully online programs designed around your work schedule. Individual NLP coaching with flexible appointment times. No need to take leave or disrupt your professional commitments. Available across Delhi, Noida, Gurgaon, and Faridabad.",
  },
  {
    title: "Harvard-Affiliated Methodology with 14+ Years Applied Experience",
    desc: "Supreet Kaur's Harvard-affiliated Life Skills certification, NLP practitioner training, and Masters in Psychology provide the methodological foundation. 14+ years of applying these tools with 5000+ individuals — including corporate teams across Delhi NCR — provides the practical depth.",
  },
  {
    title: "Measurable Outcomes, Not Feel-Good Sessions",
    desc: "Every professional begins with a structured assessment mapping confidence levels, communication patterns, stress responses, and behavioural challenges. Progress is documented through post-assessment. You see exactly what changed and by how much.",
  },
  {
    title: "MSME Registered for Corporate Billing",
    desc: "Hidden Potential is MSME registered and Skill India affiliated. This means proper institutional invoicing, GST-compliant billing, and documentation that satisfies corporate procurement, L&D budgets, and reimbursement policies.",
  },
];

const faqs = [
  {
    q: "What life skills training programs are available for working professionals in Delhi?",
    a: "Hidden Potential offers several programs specifically relevant to professionals: NLP Coaching for behavioural transformation and leadership presence, Communication Mastery for public speaking, negotiation, and interpersonal effectiveness, Stress Management for professionals dealing with burnout and career pressure, Emotional Intelligence for leaders and managers, Corporate Workshops for team development, and the Train the Trainer Certification for HR professionals and L&D specialists. All programs are available at our Dwarka, Delhi centre and online for professionals across Noida, Gurgaon, and Faridabad.",
  },
  {
    q: "Can I attend life skills training while working full-time?",
    a: "Yes. We design scheduling specifically for working professionals in Delhi NCR. Options include weekday evening batches after 6 PM, weekend morning sessions, and fully online programs you can attend from anywhere. Many professionals in Gurgaon and Noida prefer online sessions to eliminate commute. Individual NLP coaching with Supreet Kaur offers flexible appointment scheduling. We understand your time constraints and work around them.",
  },
  {
    q: "How is this different from corporate training my company provides?",
    a: "Company-sponsored training is typically one-day or half-day sessions focused on team alignment or compliance. Hidden Potential\u2019s programs are structured across 8 to 12 weeks with individual assessment, NLP-based behavioural techniques, ongoing practice, and documented progress. The focus is on transforming your personal behavioural patterns — confidence, communication style, emotional regulation, leadership presence — not just providing information. This is individual transformation, not group compliance.",
  },
  {
    q: "Will this help me get promoted or advance my career?",
    a: "Career advancement beyond a certain level is almost entirely driven by behavioural competencies — how you communicate, how you handle pressure, how you lead, how you influence. Technical skills get you into the room. Life skills determine what happens next. Professionals who complete our NLP coaching and communication programs report measurable improvements in leadership presence, stakeholder management, and career confidence. We do not promise promotions, but we develop the skills that make them possible.",
  },
  {
    q: "Do you offer individual coaching or only group programs?",
    a: "Both. Individual NLP coaching sessions with Supreet Kaur are available for professionals seeking personalised, one-on-one behavioural transformation. Group programs like Communication Mastery and Stress Management provide peer learning and practice opportunities. Many professionals start with individual coaching and then join a group program for sustained development. Corporate teams can book private group workshops. Available in-person at Dwarka, Delhi and online.",
  },
  {
    q: "What credentials does the trainer have for coaching professionals?",
    a: "Supreet Kaur holds NLP certification, Harvard-affiliated Life Skills certification, a Masters in Psychology, and Graphology certification from the American Board. She is a Josh Talks speaker, creator of the An Enlightened Learner program, and has trained 5000+ individuals including corporate teams across Delhi, Gurgaon, Noida, and Faridabad over 14+ years. Hidden Potential is MSME registered and Skill India affiliated, ensuring institutional credibility for corporate engagements.",
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
export default function ForProfessionalsPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          Background: Dark navy-to-deep gradient
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #1A0F3C 0%, #6F00FF 100%)" }}
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
              "radial-gradient(circle at center, rgba(212,168,67,0.07) 0%, transparent 70%)",
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
              For Working Professionals
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Life Skills Training for Professionals in Delhi — Behavioural Mastery for Career Growth
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
            Technical skills got you here. Behavioural skills determine how far you go.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            You are accomplished. You have built real expertise and a track record that speaks for
            itself. But somewhere between where you are and where you know you could be, the gap is
            not knowledge — it is behavioural. Communication under pressure. Confidence in
            high-stakes rooms. Emotional regulation during conflict. Leadership presence that earns
            trust without demanding it. At Hidden Potential, life skills training for professionals
            in Delhi NCR uses NLP-based techniques developed by{" "}
            <Link
              href="/about"
              className="font-semibold text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              Supreet Kaur
            </Link>{" "}
            over 14+ years to rewire these specific patterns. Harvard-affiliated methodology.
            Structured programs available at our Dwarka, Delhi centre and fully online for
            professionals across Noida, Gurgaon, and Faridabad. Not motivational workshops —
            structured behavioural transformation with measurable, documented outcomes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Book a Free Consultation
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
              href="/enroll"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/5 rounded-md transition-colors"
            >
              Enroll in a Program
            </Link>
          </div>

          {/* Trust signals — 5 items */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "14+ Years Experience",
              "5000+ Professionals Trained",
              "NLP & Harvard Certified",
              "MSME Registered",
              "Dwarka & Online",
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
          SECTION 2 — THE PROFESSIONAL CHALLENGE
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>The Professional Challenge</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Why High-Performing Professionals in Delhi NCR Still Hit Career Ceilings
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Most professionals reaching mid-career in Delhi NCR share a common frustration —
              they work harder than ever but advancement stalls. The reason is almost never
              technical. The behavioural patterns that got you to this point are not the same
              patterns needed for the next level. Here is what we see most often among
              professionals seeking life skills training in Delhi.
            </p>
          </div>

          {/* 6 pain-point cards — 2-column grid, audience card style */}
          <div className="grid md:grid-cols-2 gap-5">
            {painPoints.map((p) => (
              <div
                key={p.num}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-teal/20 transition-all p-6 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold tabular-nums text-primary-teal bg-teal-light px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">
                    {p.num}
                  </span>
                  <h3 className="font-bold text-primary-navy text-[15px] leading-snug">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — RECOMMENDED PROGRAMS
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header: content left, image right */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            <div>
              <SectionLabel>Programs for Professionals</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
                Life Skills Programs Designed for Working Professionals in Delhi NCR
              </h2>
              <p className="text-base text-charcoal/75 leading-relaxed">
                Based on 14+ years of working with professionals across Delhi, Noida, Gurgaon, and
                Faridabad, these are the programs and services most relevant to your professional
                development. Each can be taken independently or combined into a structured pathway.
              </p>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl">
              <div className="relative w-full" style={{ height: "400px" }}>
                <Image
                  src="/images/counseling/group-session.jpg"
                  alt="Corporate soft skills and life skills training workshop by Hidden Potential Delhi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* 8 program cards — 2-column grid, technique card style */}
          <div className="grid md:grid-cols-2 gap-5">
            {recommendedPrograms.map((p) => (
              <div
                key={p.num}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                {/* Teal header bar with number + title */}
                <div className="bg-primary-teal px-5 py-4">
                  <span className="text-[11px] font-bold text-white/50 tabular-nums">
                    {p.num}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 leading-snug">
                    {p.title}
                  </h3>
                </div>
                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{p.desc}</p>
                  {/* "Best for" match line */}
                  <p className="mt-3 text-xs text-charcoal/45 italic leading-relaxed">
                    {p.match}
                  </p>
                  <Link
                    href={p.linkHref}
                    className="mt-3 text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                  >
                    {p.linkLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — WHO SPECIFICALLY BENEFITS
          Background: Navy-light (#F3F0FF)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-navy-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Who This Is For</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Which Professionals in Delhi NCR Benefit Most?
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Life skills training at Hidden Potential serves professionals across industries,
              levels, and career stages. Whether you are a manager in Gurgaon&rsquo;s MNC belt,
              a tech founder in Noida, a woman navigating corporate Delhi, or an HR leader building
              team capability — there is a program designed for your specific situation.
            </p>
          </div>

          {/* 6 persona cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {personas.map((a) => (
              <div
                key={a.num}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-teal/20 transition-all p-6 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold tabular-nums text-primary-teal bg-teal-light px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">
                    {a.num}
                  </span>
                  <h3 className="font-bold text-primary-navy text-[15px] leading-snug">
                    {a.title}
                  </h3>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{a.desc}</p>
                <Link
                  href={a.linkHref}
                  className="mt-4 text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  {a.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — WHY HIDDEN POTENTIAL
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Why Hidden Potential</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Why Professionals in Delhi NCR Choose Hidden Potential Over Generic Training
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Delhi NCR has no shortage of corporate trainers offering communication workshops and
              leadership seminars. Here is why Hidden Potential produces deeper, more lasting
              professional transformation.
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
                    style={{ background: "#0D9488" }}
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
              Common Questions from Working Professionals
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
        style={{ background: "linear-gradient(180deg, #1A0F3C 0%, #6F00FF 100%)" }}
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
            Your Career Is Too Important to Leave Your Growth to Chance
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            The professionals who advance fastest are not always the most technically skilled —
            they are the ones who communicate with impact, lead with emotional intelligence, handle
            pressure with composure, and project confidence that earns trust. These are learnable
            skills. Supreet Kaur has spent 14+ years developing these capabilities in
            professionals across Delhi, Noida, Gurgaon, and Faridabad through structured
            NLP-based life skills training. Your next level is not about working harder. It is
            about developing the behavioural skills that match your ambition.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Book a Free Consultation
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
              href="/enroll"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/5 rounded-md transition-colors"
            >
              Enroll Now
            </Link>
          </div>

          {/* Cross-sell */}
          <p className="text-xs text-white/40 mb-4">
            Also explore:{" "}
            <Link
              href="/for/young-adults"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Life Skills Training for Young Adults
            </Link>{" "}
            — for early-career professionals and recent graduates building foundational skills
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

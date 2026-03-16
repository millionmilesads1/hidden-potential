/**
 * AUDIENCE PAGE — CORPORATE LIFE SKILLS & TEAM DEVELOPMENT PROGRAMS
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /for/corporates
 *
 * 7-section structure:
 *   Section 1  — HERO                       (dark gradient, H1, Lora italic, body, 2 CTAs, trust signals)
 *   Section 2  — THE CORPORATE CHALLENGE    (off-white, intro + 6 pain-point cards)
 *   Section 3  — RECOMMENDED PROGRAMS       (white, 8 program cards numbered 01–08)
 *   Section 4  — WHO SPECIFICALLY BENEFITS  (navy-light, 6 persona cards)
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
  title: { absolute: "Corporate Life Skills & Team Development Programs in Delhi NCR | Hidden Potential" },
  description:
    "Corporate life skills, communication, and team development programs in Delhi NCR. NLP-based workshops for HR managers, L&D heads, and corporate teams. 14+ years. MSME registered. Gurgaon, Noida, Delhi.",
  openGraph: {
    title: "Corporate Team Development Programs in Delhi NCR — Team Development That Actually Works",
    description:
      "NLP-based corporate workshops, communication training, emotional intelligence, and stress management for teams in Delhi, Gurgaon, Noida. 14+ years. MSME registered. Institutional invoicing.",
    type: "website",
    url: "https://hiddenpotentialskills.com/for/corporates",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Team Development Programs in Delhi NCR | Hidden Potential",
    description:
      "NLP-based corporate workshops for teams in Delhi NCR. Communication, EI, stress management. MSME registered. 14+ years.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/for/corporates",
  },
};

// ── Schema: Service ───────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate Life Skills and Team Development Programs in Delhi NCR",
  description:
    "NLP-based corporate workshops, communication training, emotional intelligence, stress management, and leadership development for corporate teams in Delhi, Gurgaon, Noida, and Faridabad. MSME registered with institutional invoicing.",
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
  serviceType: "Corporate Training and Team Development",
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
      name: "What corporate training programs does Hidden Potential offer in Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hidden Potential offers several corporate training programs: customised team workshops on communication, emotional intelligence, leadership, stress management, and conflict resolution; the Communication Mastery Program for teams requiring public speaking, presentation, and professional communication skills; NLP Coaching for senior leaders and managers seeking individual behavioural transformation; Emotional Intelligence Training for managers and team leads; and the Train the Trainer Certification for HR and L&D professionals who want to build internal life skills training capability. All programs include institutional invoicing and are available at your office in Delhi, Gurgaon, Noida, or Faridabad — or online.",
      },
    },
    {
      "@type": "Question",
      name: "How is Hidden Potential's corporate training different from generic HR workshops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most HR training is information-based — content delivered in half-day sessions that fades within a week because it does not address the behavioural patterns driving the problem. Hidden Potential's NLP-based approach works at the neurological level, identifying the specific belief systems and emotional patterns causing communication breakdowns, leadership gaps, and burnout. Programs are structured across 8 to 12 weeks with pre-assessment, structured practice, and post-assessment documentation. Outcomes are measurable. This is behavioural transformation, not information delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Can you deliver workshops at our office in Gurgaon or Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We deliver corporate workshops at client offices across Delhi NCR including Gurgaon's Cyber City and Golf Course Road corridor, Noida's Sectors 62, 63, and 135, South Delhi business hubs, and Faridabad industrial areas. We also offer hybrid and fully online delivery for distributed teams. Scheduling is designed around your corporate calendar — we work within your constraints, not ours. Minimum team size is typically 10 participants. Contact us for a customised proposal.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide GST-compliant invoicing for corporate training budgets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hidden Potential is MSME registered and provides proper institutional invoicing with GST-compliant billing. This makes it straightforward for HR managers and L&D heads to process through standard corporate procurement channels, reimbursement policies, and L&D budgets. We provide all required documentation for vendor registration, purchase orders, and reporting.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ROI of investing in life skills training for corporate teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ROI of behavioural training manifests in several measurable areas: reduced conflict and miscommunication leading to fewer escalations and faster project delivery; improved leadership presence reducing attrition among high performers; better stress management reducing sick days and burnout-related exits; stronger communication cutting meeting time and email back-and-forth. Every Hidden Potential corporate program begins with a team assessment mapping current gaps and ends with documented post-assessment outcomes, giving HR and management concrete data to measure impact.",
      },
    },
    {
      "@type": "Question",
      name: "Can we build an internal training capability through Hidden Potential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Train the Trainer Certification at Hidden Potential is specifically designed for HR professionals, L&D managers, and experienced team members who want to deliver life skills and behavioural training internally. Participants complete a 3-month structured certification covering NLP integration, curriculum design, facilitation methodology, and assessment tools. Over 200 trainers across Delhi NCR have been certified through this program, many of whom now deliver programs within their organisations. This is the most cost-effective way to embed sustained life skills development capability in your company.",
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
      name: "Corporate Team Development Programs",
      item: "https://hiddenpotentialskills.com/for/corporates",
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const painPoints = [
  {
    num: "01",
    title: "Team Communication Breaks Down Under Pressure",
    desc: "In high-stakes projects, deadlines, and conflict situations, your team's communication deteriorates exactly when it matters most. Emails get misread. Meetings end without alignment. Managers avoid difficult conversations. These are not personality problems — they are learnable behavioural patterns that training can systematically address.",
  },
  {
    num: "02",
    title: "Leadership Presence Is Inconsistent Across Management Levels",
    desc: "Some managers inspire. Others erode morale without knowing why. When leadership quality varies dramatically across the same organisation, the culture suffers unevenly. Consistent leadership presence is not a hiring problem — it is a development problem. NLP-based coaching builds the specific competencies that make managers leaders.",
  },
  {
    num: "03",
    title: "High Attrition Tied to Burnout and Poor Team Dynamics",
    desc: "The cost of replacing a mid-level employee in Delhi NCR — recruiting, onboarding, productivity ramp — typically exceeds several months of their salary. When attrition is driven by burnout, toxic dynamics, or poor communication rather than compensation, targeted behavioural training is the most direct lever available to HR.",
  },
  {
    num: "04",
    title: "Generic Training Fades Within Weeks",
    desc: "You have run the half-day workshops. The energy is high on the day. By the following Monday, nothing has changed. Generic content delivery does not produce lasting behavioural change because it addresses the symptom — information gaps — not the cause, which is the underlying beliefs and emotional patterns driving behaviour.",
  },
  {
    num: "05",
    title: "L&D Investment Is Hard to Justify Without Measurable Outcomes",
    desc: "Training budgets face increasing scrutiny. When programs cannot demonstrate documented improvement — in communication quality, leadership confidence, or stress management capacity — the business case for continued L&D investment weakens. Hidden Potential's assessment-based approach gives you pre and post data to demonstrate ROI.",
  },
  {
    num: "06",
    title: "You Want to Build Internal Training Capability, Not Just Buy Events",
    desc: "One-off workshops create temporary change. Organisations that build sustained internal life skills delivery capability — through certified in-house trainers — create compounding returns on their L&D investment. The Train the Trainer Certification is the pathway to exactly this outcome.",
  },
];

const recommendedPrograms = [
  {
    num: "01",
    title: "Corporate Workshops",
    desc: "Customised team workshops delivered at your office in Delhi, Gurgaon, Noida, or Faridabad. Topics include team communication, leadership presence, conflict resolution, emotional intelligence, stress management, and professional expression. Available for teams of 10 to 50. Content is tailored to your industry, team culture, and specific development challenges — not recycled from a generic slide deck.",
    match: "Best for: HR managers, L&D heads booking team development sessions",
    linkHref: "/services/workshops",
    linkLabel: "Explore Corporate Workshops \u2192",
  },
  {
    num: "02",
    title: "Communication Mastery Program",
    desc: "Structured 8 to 12 week program covering public speaking, executive communication, negotiation, assertiveness, conflict handling, and NLP language patterns. Ideal for client-facing teams, management cohorts, and any team whose effectiveness depends on clear, confident, and persuasive communication.",
    match: "Best for: Management cohorts, client-facing teams, and professionals requiring presentation skills",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery \u2192",
  },
  {
    num: "03",
    title: "Emotional Intelligence Training",
    desc: "Develop self-awareness, empathy, emotional regulation, and social intelligence across your leadership and management layers. Essential for teams dealing with complex interpersonal dynamics, diverse workforces, and high-pressure environments. Our NLP-based EI framework builds practical competencies, not just theoretical awareness.",
    match: "Best for: Managers, team leads, HR professionals, and leadership cohorts",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Explore Emotional Intelligence \u2192",
  },
  {
    num: "04",
    title: "Stress Management for Teams",
    desc: "NLP-based stress management that identifies the specific belief patterns amplifying your team's stress response and builds practical, real-time emotional state management tools. Particularly relevant for high-pressure environments in Gurgaon's IT and finance corridor and Noida's tech sector. Goes well beyond standard mindfulness sessions.",
    match: "Best for: Teams in high-pressure, deadline-driven, or high-attrition environments",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management \u2192",
  },
  {
    num: "05",
    title: "NLP Coaching for Leaders",
    desc: "One-on-one behavioural transformation for senior leaders, executives, and managers who need deeper individual work. Addresses confidence gaps, leadership presence, decision-making clarity, and the specific behavioural patterns limiting their professional impact. Available flexibly around senior schedules.",
    match: "Best for: Senior leaders, executives, and managers seeking individual coaching",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching \u2192",
  },
  {
    num: "06",
    title: "Train the Trainer Certification",
    desc: "Build sustainable internal life skills training capability. HR professionals, L&D managers, and experienced team members complete a 3-month structured certification covering NLP integration, curriculum design, facilitation methodology, and assessment tools. Over 200 certified trainers across Delhi NCR deliver programs independently within their organisations.",
    match: "Best for: HR managers, L&D heads, experienced managers building internal training capability",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification \u2192",
  },
  {
    num: "07",
    title: "Goal Setting & Achievement",
    desc: "Structured goal-setting methodology using NLP-based clarity techniques. Effective for leadership offsites, annual planning sessions, and teams that need to align individual ambition with organisational direction. Moves teams from vague intentions to specific, actionable commitments with built-in accountability.",
    match: "Best for: Leadership teams, management offsites, and high-performance team development",
    linkHref: "/services/goal-setting",
    linkLabel: "Explore Goal Setting \u2192",
  },
  {
    num: "08",
    title: "Confidence Building for Professionals",
    desc: "Structured confidence development for employees stepping into new roles, high-visibility projects, or leadership positions. Uses NLP anchoring, belief mapping, and progressive exposure techniques to build genuine professional assurance. Particularly effective for women in professional environments and employees preparing for senior responsibilities.",
    match: "Best for: Employees in transition, women in professional environments, emerging leaders",
    linkHref: "/services/confidence-building",
    linkLabel: "Explore Confidence Building \u2192",
  },
];

const personas = [
  {
    num: "01",
    title: "HR Managers and L&D Heads Across Delhi NCR",
    desc: "You are responsible for your organisation's people development and need a credible, MSME-registered partner who delivers documented outcomes, provides institutional invoicing, and customises programs to your specific team challenges — not a generic content vendor.",
    linkHref: "/services/workshops",
    linkLabel: "Explore Corporate Workshops \u2192",
  },
  {
    num: "02",
    title: "Corporate Teams in Gurgaon's MNC and Finance Sector",
    desc: "High-pressure Cyber City and Golf Course Road environments create communication breakdowns, leadership gaps, and burnout that undermine performance. Our NLP-based communication, EI, and stress management programs address these challenges where they originate — in behaviour, not information.",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management \u2192",
  },
  {
    num: "03",
    title: "Startup Founders and Leadership Teams in Noida",
    desc: "Fast-growth environments in Noida's tech sector require teams that communicate rapidly, lead decisively, and maintain resilience under constant uncertainty. Communication Mastery and NLP Coaching build the behavioural toolkit that matches your organisation's ambition.",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery \u2192",
  },
  {
    num: "04",
    title: "Mid-Sized Indian Businesses in Delhi Investing in Culture",
    desc: "Growing organisations in Delhi that are moving from founder-led to professionally managed need to intentionally build the communication, emotional intelligence, and leadership culture that sustains that transition. Structured team development is the foundation.",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Explore Emotional Intelligence \u2192",
  },
  {
    num: "05",
    title: "Companies Investing in Women's Professional Development",
    desc: "Organisations with gender diversity goals need targeted programs for women employees — building communication confidence, leadership presence, and professional assertiveness. Our women-specific programs and general communication training create measurable professional advancement.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women \u2192",
  },
  {
    num: "06",
    title: "Organisations Seeking Train-the-Trainer Capability",
    desc: "Companies that want to embed sustained life skills development rather than repeatedly purchasing external programs. The Train the Trainer Certification creates certified internal facilitators who deliver programs independently — building compounding L&D ROI over time.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification \u2192",
  },
];

const differentiators = [
  {
    title: "Customised to Your Industry and Team Culture",
    desc: "Corporate programs at Hidden Potential are not off-the-shelf. Content is adapted to your industry, team size, specific challenges, and organisational culture. A Gurgaon finance team has different dynamics than a Noida tech startup or a Delhi manufacturing business. Your program reflects your context.",
  },
  {
    title: "NLP-Based Behavioural Change, Not Generic Content",
    desc: "Standard corporate training delivers information. NLP-based training rewires the behavioural patterns driving your team's specific challenges — communication breakdowns, leadership gaps, stress responses, and conflict patterns. The change persists because it operates at the neurological level, not just the cognitive level.",
  },
  {
    title: "Measurable ROI with Pre and Post Assessment",
    desc: "Every corporate program begins with a team assessment mapping communication patterns, confidence levels, emotional regulation, and leadership presence. Post-assessment documentation gives HR and management concrete data on what changed and by how much. You invest in training that you can actually demonstrate worked.",
  },
  {
    title: "MSME Registered — GST-Compliant Institutional Billing",
    desc: "Hidden Potential is MSME registered and Skill India affiliated. This means proper institutional invoicing, GST-compliant billing, and all documentation required by corporate procurement, L&D budgets, and vendor registration processes. Institutional partnerships are handled professionally and transparently.",
  },
  {
    title: "14+ Years Serving Corporate Delhi NCR",
    desc: "Supreet Kaur has delivered team workshops and individual coaching across corporate Delhi NCR for over 14 years, working with teams across IT, finance, education, healthcare, and professional services. She brings NLP certification, Harvard-affiliated Life Skills training, and a Masters in Psychology to every corporate engagement.",
  },
  {
    title: "Train-the-Trainer Option for Sustained Impact",
    desc: "No external training creates permanent change if it stops when the vendor leaves. Hidden Potential's Train the Trainer Certification builds internal capability — your own certified facilitators who embed life skills development into your organisational DNA. Over 200 certified trainers across Delhi NCR are living proof of this model.",
  },
];

const faqs = [
  {
    q: "What corporate training programs does Hidden Potential offer in Delhi NCR?",
    a: "Hidden Potential offers several corporate training programs: customised team workshops on communication, emotional intelligence, leadership, stress management, and conflict resolution; the Communication Mastery Program for teams requiring public speaking, presentation, and professional communication skills; NLP Coaching for senior leaders and managers seeking individual behavioural transformation; Emotional Intelligence Training for managers and team leads; and the Train the Trainer Certification for HR and L&D professionals who want to build internal life skills training capability. All programs include institutional invoicing and are available at your office in Delhi, Gurgaon, Noida, or Faridabad — or online.",
  },
  {
    q: "How is Hidden Potential's corporate training different from generic HR workshops?",
    a: "Most HR training is information-based — content delivered in half-day sessions that fades within a week because it does not address the behavioural patterns driving the problem. Hidden Potential's NLP-based approach works at the neurological level, identifying the specific belief systems and emotional patterns causing communication breakdowns, leadership gaps, and burnout. Programs are structured across 8 to 12 weeks with pre-assessment, structured practice, and post-assessment documentation. Outcomes are measurable. This is behavioural transformation, not information delivery.",
  },
  {
    q: "Can you deliver workshops at our office in Gurgaon or Noida?",
    a: "Yes. We deliver corporate workshops at client offices across Delhi NCR including Gurgaon's Cyber City and Golf Course Road corridor, Noida's Sectors 62, 63, and 135, South Delhi business hubs, and Faridabad industrial areas. We also offer hybrid and fully online delivery for distributed teams. Scheduling is designed around your corporate calendar — we work within your constraints, not ours. Minimum team size is typically 10 participants. Contact us for a customised proposal.",
  },
  {
    q: "Do you provide GST-compliant invoicing for corporate training budgets?",
    a: "Yes. Hidden Potential is MSME registered and provides proper institutional invoicing with GST-compliant billing. This makes it straightforward for HR managers and L&D heads to process through standard corporate procurement channels, reimbursement policies, and L&D budgets. We provide all required documentation for vendor registration, purchase orders, and reporting.",
  },
  {
    q: "What is the ROI of investing in life skills training for corporate teams?",
    a: "The ROI of behavioural training manifests in several measurable areas: reduced conflict and miscommunication leading to fewer escalations and faster project delivery; improved leadership presence reducing attrition among high performers; better stress management reducing sick days and burnout-related exits; stronger communication cutting meeting time and email back-and-forth. Every Hidden Potential corporate program begins with a team assessment mapping current gaps and ends with documented post-assessment outcomes, giving HR and management concrete data to measure impact.",
  },
  {
    q: "Can we build an internal training capability through Hidden Potential?",
    a: "Yes. The Train the Trainer Certification at Hidden Potential is specifically designed for HR professionals, L&D managers, and experienced team members who want to deliver life skills and behavioural training internally. Participants complete a 3-month structured certification covering NLP integration, curriculum design, facilitation methodology, and assessment tools. Over 200 trainers across Delhi NCR have been certified through this program, many of whom now deliver programs within their organisations. This is the most cost-effective way to embed sustained life skills development capability in your company.",
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
export default function ForCorporatesPage() {
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
            For Corporate Teams
          </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Corporate Life Skills &amp; Team Development Programs in Delhi NCR — Team Development That Actually Works
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
            Soft skills are not soft. They are the reason teams succeed or fail.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            Your team&rsquo;s technical capability is not the constraint. Communication breakdowns,
            inconsistent leadership, burnout-driven attrition, and poor emotional regulation cost
            Delhi NCR organisations far more than any skills gap. Hidden Potential delivers
            NLP-based corporate life skills training — customised workshops, structured multi-week
            programs, and leadership coaching — designed by{" "}
            <Link
              href="/about"
              className="font-semibold text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              Supreet Kaur
            </Link>{" "}
            with 14+ years of corporate experience across Delhi, Gurgaon, and Noida. Harvard-affiliated methodology. Pre and post assessment documentation. MSME registered for institutional invoicing. Not motivational workshops — measurable behavioural transformation with documented ROI.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="btn-premium-fill"
            >
              Request a Corporate Proposal
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </Link>
            <Link
              href="/services/workshops"
              className="btn-premium-ghost-plain"
            >
              Explore Corporate Workshops
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "14+ Years Corporate Experience",
              "5000+ Professionals Trained",
              "MSME Registered",
              "GST-Compliant Billing",
              "Gurgaon, Noida & Online",
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
          SECTION 2 — THE CORPORATE CHALLENGE
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>The Corporate Challenge</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Why High-Performing Companies in Delhi NCR Still Struggle with People Development
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Technical talent is abundant in Delhi NCR. The recurring challenges that hold
              organisations back are almost never technical. Here is what we consistently hear
              from HR managers, L&amp;D heads, and leadership teams who partner with Hidden Potential.
            </p>
          </div>

          {/* 6 pain-point cards — 2-column grid */}
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
              <SectionLabel>Corporate Programs</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
                Team Development Programs for Corporate Delhi NCR
              </h2>
              <p className="text-base text-charcoal/75 leading-relaxed">
                Based on 14+ years of working with corporate teams across Delhi, Gurgaon, Noida,
                and Faridabad, these are the programs and services that deliver the most consistent
                organisational impact. Each can be booked independently or combined into a
                sustained development track.
              </p>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl">
              <div className="relative w-full" style={{ height: "400px" }}>
                <Image
                  src="/images/counseling/group-session.jpg"
                  alt="Corporate life skills and team development workshop by Hidden Potential Delhi NCR"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* 8 program cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {recommendedPrograms.map((p) => (
              <div
                key={p.num}
                className="card-service"
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
              Which Organisations in Delhi NCR Benefit Most?
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Hidden Potential serves corporate clients across industries, sizes, and development
              goals. Whether you are an HR head in Gurgaon, a startup founder in Noida, or a
              business owner in Delhi building a professional culture — there is a program designed
              for your specific organisational challenge.
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
              Why Corporate Teams Across Delhi NCR Choose Hidden Potential Over Generic Trainers
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Delhi NCR has hundreds of corporate trainers. Here is what makes Hidden Potential
              a different kind of investment for your organisation.
            </p>
          </div>

          {/* 6 differentiator cards — 3-column grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="card-service"
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
              Common Questions from HR Managers and L&amp;D Teams
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card-service"
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
            Your Team&rsquo;s Technical Skills Are Only Part of the Equation
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            The highest-performing teams in Delhi NCR are not necessarily the most technically
            skilled. They are the ones who communicate clearly under pressure, lead with emotional
            intelligence, manage stress without burning out, and build the trust that makes
            collaboration effortless. These are learnable, trainable skills. Supreet Kaur has
            spent 14+ years developing these capabilities in corporate teams across Delhi, Gurgaon,
            Noida, and Faridabad through structured NLP-based life skills training. MSME registered.
            GST-compliant billing. Documented outcomes. Your next level of organisational
            performance starts here.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="btn-premium-fill"
            >
              Request a Corporate Proposal
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </Link>
            <Link
              href="/services/workshops"
              className="btn-premium-ghost-plain"
            >
              Explore Corporate Workshops
            </Link>
          </div>

          {/* Cross-sell */}
          <p className="text-xs text-white/40 mb-4">
            Also explore:{" "}
            <Link
              href="/for/teachers-and-coaches"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Train the Trainer Certification
            </Link>{" "}
            — build internal life skills training capability within your organisation
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

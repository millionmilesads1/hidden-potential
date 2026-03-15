/**
 * LOCATION PAGE — DELHI
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /locations/delhi
 *
 * 7-section structure:
 *   Section 1  — HERO                (dark gradient, H1, Lora italic, body para, 2 CTAs, trust signals)
 *   Section 2  — WHY DELHI           (off-white, 3 explanatory paragraphs)
 *   Section 3  — ALL PROGRAMS        (white, 14 offering cards numbered 01–14)
 *   Section 4  — AREAS WE SERVE      (navy-light, 6 Delhi area cards)
 *   Section 5  — WHY HIDDEN POTENTIAL(off-white, 6 differentiator cards)
 *   Section 6  — FAQ                 (white, 6 Delhi-specific Q&As)
 *   Section 7  — CTA                 (dark gradient, para, 2 CTAs, cross-sell, location line)
 *
 * Schemas: LocalBusiness + FAQPage + BreadcrumbList (all embedded as JSON-LD)
 */

import type { Metadata } from "next";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Life Skills Training in Delhi | NLP Coaching & Student Programs | Hidden Potential" },
  description:
    "Expert life skills training in Delhi by certified NLP practitioner Supreet Kaur. Student programs, women's empowerment, corporate workshops & NLP coaching. Dwarka centre. 14+ years. 5000+ trained.",
  openGraph: {
    title: "Life Skills Training in Delhi — Personalised Programs at Dwarka & Online",
    description:
      "Structured life skills programs at Hidden Potential's Delhi training centre. NLP coaching, student programs, women's empowerment, trainer certification. Dwarka, South Delhi & Online.",
    type: "website",
    url: "https://hiddenpotentialskills.com/locations/delhi",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/locations/delhi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Skills Training in Delhi — Personalised Programs at Dwarka & Online",
    description:
      "Structured life skills training at Hidden Potential's Delhi centre. NLP coaching, student programs, women's empowerment. Dwarka & Online. 14+ years. 5000+ trained.",
  },
};

// ── Schema: LocalBusiness ─────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hidden Potential — Life Skills Training Delhi",
  description:
    "Structured life skills training academy in Delhi. NLP coaching, student programs, women's empowerment, corporate workshops, and trainer certification. MSME registered. Skill India affiliated.",
  url: "https://hiddenpotentialskills.com/locations/delhi",
  telephone: "+91-9899209335",
  email: "hiddenpotential2030@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110075",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5921,
    longitude: 77.046,
  },
  openingHours: "Mo-Fr 10:00-19:00",
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "Neighborhood", name: "Dwarka" },
    { "@type": "Neighborhood", name: "South Delhi" },
    { "@type": "Neighborhood", name: "West Delhi" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Faridabad" },
  ],
  priceRange: "₹₹",
  founder: {
    "@type": "Person",
    name: "Supreet Kaur",
    jobTitle: "Founder & Director",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Hidden Potential",
    url: "https://hiddenpotentialskills.com",
  },
};

// ── Schema: FAQPage ───────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Hidden Potential's training centre in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hidden Potential's main training centre is located at D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka, South West Delhi — 110075. Dwarka is well-connected by Delhi Metro (Blue Line) and is easily accessible from South Delhi, West Delhi, Janakpuri, Uttam Nagar, and Dwarka Expressway. Sessions are available weekdays from 10 AM to 7 PM, with weekend and evening batches by appointment.",
      },
    },
    {
      "@type": "Question",
      name: "Which life skills programs are available at the Delhi centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All Hidden Potential programs are available from the Delhi centre: An Enlightened Learner (student program for ages 8–21), Communication Mastery, Self Mastery for Women, Train the Trainer Certification, and Art Therapy for Healing. Sub-services including NLP coaching, confidence building, study skills, stress management, emotional intelligence, and goal setting are also offered. Corporate and school programs are available on-site at the Delhi centre and at client locations across Delhi NCR.",
      },
    },
    {
      "@type": "Question",
      name: "Is online life skills training available for people in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All programs at Hidden Potential are available in three formats: offline at the Dwarka, Delhi training centre, online for learners who prefer to train from home or are located in other parts of Delhi NCR, and hybrid combinations of both. Online sessions use the same structured methodology, assessment process, and developmental pathways as in-person training. This makes quality life skills training in Delhi accessible regardless of commute distance.",
      },
    },
    {
      "@type": "Question",
      name: "How is Hidden Potential different from other life skills trainers in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most life skills training providers in Delhi offer motivational talks, one-day workshops, or certification courses with no follow-through. Hidden Potential is different in three critical ways: first, every learner begins with a structured pre-assessment that identifies specific gaps and recommends the right pathway — not a generic program. Second, programs run across 3, 6, and 12-month structured pathways with documented progress, not one-off sessions. Third, NLP is integrated throughout, not offered as a standalone module. Hidden Potential is MSME registered and Skill India affiliated, with 14+ years of applied experience across 5000+ learners.",
      },
    },
    {
      "@type": "Question",
      name: "How much does life skills training in Delhi cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Program fees at Hidden Potential vary based on the pathway selected, level (Foundation, Growth, or Mastery), and format (individual, group, online, or in-person). We do not publish a single price because every learner's pathway is personalised after the initial assessment. The most accurate way to understand fees is to book a free 30-minute consultation — during which Supreet Kaur reviews your goals, recommends the right pathway, and provides complete pricing. There is no obligation to enroll after the consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Can corporate teams in Delhi book group life skills workshops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hidden Potential offers corporate life skills workshops and team development programs for organisations in Delhi and across Delhi NCR. Programs cover communication skills, emotional intelligence, stress management, leadership presence, and NLP-based behavioural change. Workshops are available as one-day intensives, multi-session programs, or ongoing organisational development partnerships. All corporate programs are customised based on a needs assessment. Contact us to discuss your team's requirements and receive a tailored program proposal.",
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
      name: "Locations",
      item: "https://hiddenpotentialskills.com/locations",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Life Skills Training in Delhi",
      item: "https://hiddenpotentialskills.com/locations/delhi",
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const offerings = [
  {
    num: "01",
    title: "An Enlightened Learner — Student Program",
    desc: "The flagship structured life skills program for students aged 8 to 21 in Delhi. Three age-specific tracks — 8 to 12, 13 to 16, and 17 to 21 — address the exact challenges each group faces. Confidence anchoring, academic focus techniques, social skills, and emotional regulation are developed across Foundation, Growth, and Mastery levels. Pre and post assessment document every learner's progress. Available in-person at Dwarka, online, and through school partnerships across Delhi NCR.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore An Enlightened Learner →",
  },
  {
    num: "02",
    title: "Communication Mastery",
    desc: "Structured communication and leadership program for ages 8 to 65 in Delhi. Covers public speaking, body language, assertiveness, persuasive language, professional communication, and leadership presence. Particularly popular with students preparing for college presentations, professionals seeking promotion, and business owners building influence. Available at the Dwarka, Delhi centre and online.",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery →",
  },
  {
    num: "03",
    title: "Self Mastery for Women",
    desc: "Holistic growth program for women aged 28 and above in Delhi. Addresses emotional overwhelm, suppressed identity, financial dependence, relationship boundaries, and personal ambition — challenges particularly acute for women navigating family, career, and societal expectations in Delhi. Group sessions foster a community of growth. Individual pathway option available. Available at the Dwarka centre and online.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women →",
  },
  {
    num: "04",
    title: "Train the Trainer Certification",
    desc: "Become a certified life skills facilitator through Hidden Potential's 1-month or 3-month Train the Trainer program in Delhi. Learn NLP integration, curriculum design, assessment methodology, and practical facilitation. Over 200 trainers have been certified through this program. MSME registered and Skill India affiliated certification. Ideal for educators, corporate trainers, school counsellors, and HR professionals in Delhi NCR.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification →",
  },
  {
    num: "05",
    title: "Art Therapy for Healing",
    desc: "A creative therapeutic pathway combining mindfulness, reflective journaling, and art-based expression for emotional clarity and healing. No artistic skill required — only willingness to grow. Particularly effective for individuals in Delhi dealing with chronic stress, anxiety, emotional numbness, grief, or burnout. Available as 1-month, 3-month, and 6-month programs at the Dwarka centre and online.",
    linkHref: "/programs/art-therapy",
    linkLabel: "Explore Art Therapy for Healing →",
  },
  {
    num: "06",
    title: "NLP Coaching — Individual Sessions",
    desc: "Certified NLP coaching for belief restructuring, emotional reprogramming, and behavioural change. Available as individual sessions or integrated into structured pathway programs. Particularly effective for professionals in Delhi dealing with career plateaus, students with exam anxiety, and women rebuilding confidence. Delivered by Supreet Kaur — certified NLP practitioner with 14+ years of applied experience.",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching →",
  },
  {
    num: "07",
    title: "Confidence Building Program",
    desc: "Structured confidence development for students, professionals, and women in Delhi. Addresses the root beliefs and habitual thought patterns that create self-doubt, hesitation, and fear of judgment. Uses NLP anchoring, reframing, and identity development techniques. Assessment-based — your specific confidence gaps are identified at entry and measurable progress is documented throughout.",
    linkHref: "/services/confidence-building",
    linkLabel: "Explore Confidence Building →",
  },
  {
    num: "08",
    title: "Communication Skills Training",
    desc: "Targeted communication skills development covering verbal clarity, active listening, assertiveness, non-verbal communication, and professional expression. Ideal for Delhi students entering college or job markets, professionals seeking leadership roles, and individuals who feel their communication is holding back their growth. Available as part of the Communication Mastery pathway or as standalone sessions.",
    linkHref: "/services/communication-skills",
    linkLabel: "Explore Communication Skills Training →",
  },
  {
    num: "09",
    title: "Study Skills & Memory Training",
    desc: "Smart study strategies, memory enhancement techniques, time management, and academic focus training for students in Delhi. Research-backed methods including mind mapping, spaced repetition, active recall, and distraction management are taught through structured practice — not just theory. Particularly effective for students in Classes 9 to 12 facing board exams and competitive entrance preparation in Delhi.",
    linkHref: "/services/study-skills",
    linkLabel: "Explore Study Skills Training →",
  },
  {
    num: "10",
    title: "Stress Management Coaching",
    desc: "Structured stress management program for students, professionals, and women in Delhi. Covers mindfulness techniques, emotional regulation, physiological stress response management, and work-life balance frameworks. Goes far beyond generic relaxation advice — techniques are NLP-integrated and assessed for measurable improvement. Highly relevant for the high-pressure environments of Delhi's schools, corporate offices, and family contexts.",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management →",
  },
  {
    num: "11",
    title: "Emotional Intelligence Development",
    desc: "Science-backed emotional intelligence coaching for students, educators, and professionals in Delhi. Builds self-awareness, empathy, emotional regulation, and social skill — the four pillars of EI that determine long-term success in relationships and careers. Integrated with NLP techniques for deeper, faster results. Particularly valuable for managers, teachers, and parents in Delhi NCR seeking to improve their impact.",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Explore Emotional Intelligence Coaching →",
  },
  {
    num: "12",
    title: "Goal Setting & Accountability",
    desc: "Structured goal-setting and accountability program for individuals in Delhi who know what they want but consistently struggle to execute. Goes beyond vision boards and affirmations — teaches specific planning frameworks, progress tracking systems, and psychological accountability mechanisms. Available for individuals and small groups. Integrates NLP state management to maintain motivation through obstacles.",
    linkHref: "/services/goal-setting",
    linkLabel: "Explore Goal Setting Workshop →",
  },
  {
    num: "13",
    title: "Career & Life Transition Coaching",
    desc: "Guidance for individuals in Delhi navigating significant career changes, career re-entry after a break, entrepreneurial transitions, or life decisions requiring clarity. Combines structured decision-making frameworks with NLP-based belief work to address the fear and uncertainty that blocks most people from making bold changes. Available as individual sessions or a structured short-term program.",
    linkHref: "/services/career-transition",
    linkLabel: "Explore Career Transition Coaching →",
  },
  {
    num: "14",
    title: "Group Workshops & Corporate Programs",
    desc: "Interactive life skills workshops for schools, corporates, community groups, and residential welfare associations across Delhi. Workshop themes include communication, emotional intelligence, stress management, leadership, and NLP for teams. Programs are fully customised after a needs assessment. Popular in Dwarka, Rohini, South Delhi, and Noida corporate parks. Contact us for group workshop pricing.",
    linkHref: "/services/workshops",
    linkLabel: "Explore Group Workshops →",
  },
];

const delhiAreas = [
  {
    num: "01",
    title: "Dwarka & Sector 19B — Our Home Base",
    desc: "Hidden Potential's training centre is located in Dwarka, Sector 19B — one of Delhi's most well-planned residential areas with excellent Metro connectivity. Students, professionals, and families from across Dwarka Sectors 1 to 23, Dwarka Expressway, and Uttam Nagar attend programs in-person. The centre is a 3-minute walk from the nearest bus stop and within reach of Dwarka Mor and Dwarka Sector 21 Metro stations.",
    linkHref: "/contact",
    linkLabel: "Book a session at Dwarka →",
  },
  {
    num: "02",
    title: "South Delhi — Vasant Kunj, Saket, Hauz Khas, Mehrauli",
    desc: "South Delhi residents from Vasant Kunj, Saket, Greater Kailash, Defence Colony, Hauz Khas, Mehrauli, Malviya Nagar, and Lajpat Nagar regularly attend Hidden Potential programs either in-person at Dwarka or through online sessions. South Delhi's high concentration of CBSE schools, working professionals, and aspirational families makes it one of our most active learner communities.",
  },
  {
    num: "03",
    title: "West Delhi — Janakpuri, Rajouri Garden, Tilak Nagar",
    desc: "West Delhi is geographically closest to Hidden Potential's Dwarka centre. Learners from Janakpuri, Rajouri Garden, Tilak Nagar, Uttam Nagar, Vikaspuri, Paschim Vihar, and Punjabi Bagh can access the Dwarka centre with ease via Metro or road. West Delhi's dense student population — with dozens of coaching institutes and CBSE schools — makes structured life skills training a natural complement to academic preparation.",
  },
  {
    num: "04",
    title: "North Delhi — Rohini, Pitampura, Shalimar Bagh",
    desc: "Learners from Rohini, Pitampura, Shalimar Bagh, Rani Bagh, and Ashok Vihar attend Hidden Potential programs through a combination of in-person and online sessions. North Delhi has a rapidly growing demand for quality life skills training, particularly among school students and young professionals in the area. Online sessions eliminate the commute barrier entirely for North Delhi learners.",
  },
  {
    num: "05",
    title: "East Delhi — Preet Vihar, Laxmi Nagar, Mayur Vihar",
    desc: "East Delhi learners from Preet Vihar, Laxmi Nagar, Mayur Vihar, Patparganj, Vivek Vihar, and Shahdara access Hidden Potential primarily through online programs or attend the Dwarka centre on weekends. The Noida-border proximity makes many East Delhi learners also eligible for programs designed for Noida residents. Contact us to discuss the most practical format for your location.",
    linkHref: "/locations/noida",
    linkLabel: "Also see: Life Skills in Noida →",
  },
  {
    num: "06",
    title: "Delhi Schools & Corporate Organisations",
    desc: "Hidden Potential offers institutional programs directly at school and corporate premises across Delhi — from Dwarka and Rohini to Greater Kailash and Connaught Place. School partnership programs deliver life skills curriculum in-house, eliminating the need for students to travel. Corporate workshops are conducted at client offices. Contact us to schedule an institutional assessment and program proposal.",
    linkHref: "/contact",
    linkLabel: "Enquire about institutional programs →",
  },
];

const differentiators = [
  {
    title: "Assessment-Based Placement — Unique in Delhi",
    desc: "Hidden Potential is among the very few life skills training providers in Delhi that begins with a structured pre-assessment. Before any program recommendation, we map your specific confidence gaps, communication patterns, belief systems, and learning style. This means every learner in Delhi gets a personalised pathway — not a standard course delivered to a room full of strangers.",
  },
  {
    title: "NEP 2020 Aligned Programs",
    desc: "India's National Education Policy 2020 mandates holistic development and life skills integration in schools. Hidden Potential's programs are specifically designed to align with NEP 2020 requirements, making them appropriate for school partnerships across Delhi NCR. This alignment gives schools a compliance-ready, documented, and credentialed life skills curriculum — not informal add-ons.",
  },
  {
    title: "MSME Registered & Skill India Certified",
    desc: "Hidden Potential is registered under MSME and affiliated with Skill India — providing Delhi schools, corporates, and institutions with the documentation and institutional credibility required for formal partnerships, CSR funding, and compliance reporting. This is a significant differentiator from the many informal life skills coaches operating in Delhi without institutional registration.",
  },
  {
    title: "14+ Years of Applied Experience in Delhi",
    desc: "Supreet Kaur has spent over 14 years delivering life skills training in Delhi — working with students from Dwarka schools, professionals from Delhi's corporate sector, women from across the city, and educators seeking train-the-trainer certification. This is not recent certification — it is deep, Delhi-specific applied experience with 5000+ individuals trained in this city.",
  },
  {
    title: "Documented Progress, Not Motivational Sessions",
    desc: "Every learner at Hidden Potential begins with a documented baseline assessment and ends with a documented progress report. Growth in confidence, communication, emotional regulation, and belief patterns is measured and visible. This distinguishes structured life skills training in Delhi from the hundreds of motivational speakers and workshop facilitators who deliver energy but no measurable growth.",
  },
  {
    title: "Programs for Every Age Group — 8 to 65+",
    desc: "Hidden Potential serves Delhi learners from age 8 (An Enlightened Learner foundation track) through to working adults, women, and senior professionals. No other structured life skills provider in Delhi serves this complete age range under one roof, with a connected philosophy and consistent NLP-integrated methodology across all programs.",
  },
];

const faqs = [
  {
    q: "Where is Hidden Potential's training centre in Delhi?",
    a: "Hidden Potential's main training centre is located at D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka, South West Delhi — 110075. Dwarka is well-connected by Delhi Metro (Blue Line) and is easily accessible from South Delhi, West Delhi, Janakpuri, Uttam Nagar, and Dwarka Expressway. Sessions are available weekdays from 10 AM to 7 PM, with weekend and evening batches by appointment.",
  },
  {
    q: "Which life skills programs are available at the Delhi centre?",
    a: "All Hidden Potential programs are available from the Delhi centre — including An Enlightened Learner (student program for ages 8–21), Communication Mastery, Self Mastery for Women, Train the Trainer Certification, and Art Therapy for Healing. Sub-services including NLP coaching, confidence building, study skills, stress management, emotional intelligence, and goal setting are also offered. Corporate and school programs are conducted at client locations across Delhi NCR.",
  },
  {
    q: "Is online life skills training available for people across Delhi?",
    a: "Yes. All programs are available in three formats: offline at the Dwarka, Delhi training centre; online for learners who prefer to train from home or are in other parts of Delhi NCR; and hybrid combinations of both. Online sessions use the same structured methodology, assessment process, and developmental pathways as in-person training. This makes quality life skills training in Delhi accessible regardless of your location within the city.",
  },
  {
    q: "How is Hidden Potential different from other life skills trainers in Delhi?",
    a: "Most life skills training providers in Delhi offer motivational talks, one-day workshops, or generic certification courses. Hidden Potential is different in three critical ways: every learner begins with a structured pre-assessment identifying specific gaps; programs run across 3, 6, and 12-month structured pathways with documented progress — not one-off sessions; and NLP is integrated throughout, not offered as a standalone module. Hidden Potential is MSME registered and Skill India affiliated, with 14+ years of applied experience across 5000+ learners in Delhi NCR.",
  },
  {
    q: "How much does life skills training in Delhi cost?",
    a: "Program fees vary based on the pathway selected, level (Foundation, Growth, or Mastery), and format (individual, group, online, or in-person). We do not publish a single price because every learner's pathway is personalised after the initial assessment. The most accurate way to understand fees is to book a free 30-minute consultation — during which Supreet Kaur reviews your goals, recommends the right pathway, and provides complete pricing details. There is no obligation to enroll after the consultation.",
  },
  {
    q: "Can schools and corporates in Delhi book group life skills programs?",
    a: "Yes. Hidden Potential offers school partnership programs and corporate life skills workshops for organisations across Delhi. School programs include student workshops, teacher development, and parent engagement sessions — all NEP 2020 aligned and MSME documented. Corporate programs cover communication, emotional intelligence, stress management, and leadership development. All institutional programs are customised after a needs assessment. Contact us to discuss your organisation's requirements and receive a tailored program proposal.",
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
export default function DelhiLocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
              Training Centre in Delhi
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Life Skills Training in Delhi — NLP Coaching, Student Programs &amp; Corporate Workshops
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
            Delhi&rsquo;s most comprehensive life skills training centre. Structured. Assessed. Transformational.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            Hidden Potential&rsquo;s life skills training centre is based in Sector 19B, Dwarka, Delhi — serving
            learners from across Delhi NCR including South Delhi, West Delhi, Rohini, Pitampura, and
            online learners across India. Founded and led by{" "}
            <Link
              href="/about"
              className="text-white/80 font-semibold hover:text-white transition-colors"
            >
              Supreet Kaur
            </Link>{" "}
            — certified NLP practitioner, Masters in Psychology, Josh Talks speaker, and award-winning
            life skills educator — the Delhi centre has delivered structured, assessment-based life skills
            training in Delhi for over 14 years. With 5000+ individuals trained, 200+ trainers certified, and
            a NEP 2020 aligned, MSME registered curriculum, Hidden Potential is not a motivational
            workshop provider. It is a structured transformational academy — the only one of its kind
            in Delhi offering personalised, documented, and measurable life skills development for
            students, women, professionals, and aspiring trainers.
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

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "Dwarka Centre",
              "14+ Years in Delhi",
              "5000+ Trained",
              "NLP & Harvard Certified",
              "MSME Registered",
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
          SECTION 2 — WHY DELHI NEEDS LIFE SKILLS TRAINING
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Why Delhi Needs This</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 leading-tight max-w-2xl">
            Why Life Skills Training Matters for People Living in Delhi
          </h2>

          <div className="flex flex-col gap-6 text-base text-charcoal leading-relaxed">
            <p>
              Delhi is one of the most competitive cities in India — and that competition begins early.
              Students in Delhi schools face board exams, competitive entrance tests for IIT, medical,
              and commerce colleges, mounting parental expectations, and social pressures amplified by
              social media. Yet across thousands of Delhi schools — from Dwarka and Rohini to Greater
              Kailash and Vasant Kunj — the curriculum remains overwhelmingly focused on academic
              performance. Emotional regulation, communication confidence, stress management, and
              self-awareness are left entirely to chance. The result is visible in rising rates of exam
              anxiety, peer conflict, and young adults entering college and workplaces with strong
              grades but fragile inner foundations. Life skills training in Delhi is not a supplement
              to education — it has become a necessity.
            </p>
            <p>
              For Delhi&rsquo;s working adults, the pressures are different but equally acute. Professionals
              in Delhi&rsquo;s corporate sector — from Connaught Place and Aerocity to Gurugram&rsquo;s satellite
              offices — face communication breakdowns, leadership gaps, and chronic stress as routine
              challenges. Women in Delhi navigate a particularly complex intersection of career ambition,
              family obligation, and societal conditioning that few wellness programs address
              systematically. The capital city&rsquo;s intensity demands more than motivation — it demands
              structured skill-building, measured development, and personalised coaching aligned with
              the specific realities of life in Delhi. Generic self-help content and motivational speakers
              are abundant in Delhi. Structured, assessed, and documented life skills development is
              rare.
            </p>
            <p>
              Hidden Potential has been delivering structured life skills training in Delhi for over
              14 years — not as a motivational workshop provider, but as a developmental academy with
              clear learning pathways, pre and post assessment, NLP integration, and documented progress
              for every learner. Founded by{" "}
              <Link
                href="/about"
                className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
              >
                Supreet Kaur
              </Link>{" "}
              — who has spent her entire career building and refining this system for Delhi and NCR
              learners — the approach is deeply rooted in the city&rsquo;s specific educational culture,
              family dynamics, and professional context. Whether you are a parent in Dwarka seeking
              structured development for your child, a woman in South Delhi ready to rebuild her
              identity, or a corporate HR manager in Noida looking for a credible life skills partner,
              Hidden Potential&rsquo;s Delhi centre offers the breadth, depth, and institutional credibility
              that the city deserves.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — ALL PROGRAMS AVAILABLE IN DELHI
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Available in Delhi</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              All Life Skills Programs and Services Available in Delhi
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Hidden Potential&rsquo;s Delhi training centre offers the complete range of structured life
              skills programs — from flagship developmental pathways to targeted sub-service sessions.
              All programs are available in-person at Dwarka, online, or in hybrid format. Here is
              everything available through life skills training in Delhi.
            </p>
          </div>

          {/* 14 offering cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {offerings.map((o) => (
              <div
                key={o.num}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                {/* Teal header bar with number + title */}
                <div className="bg-primary-teal px-5 py-4">
                  <span className="text-[11px] font-bold text-white/50 tabular-nums">
                    {o.num}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 leading-snug">
                    {o.title}
                  </h3>
                </div>
                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{o.desc}</p>
                  {o.linkHref && o.linkLabel && (
                    <Link
                      href={o.linkHref}
                      className="mt-4 text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                    >
                      {o.linkLabel}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — AREAS WE SERVE IN DELHI
          Background: Navy-light (#F3F0FF)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-navy-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Areas We Serve</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Life Skills Training Across All Areas of Delhi
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Based in Dwarka, Sector 19B, Hidden Potential serves learners from across all areas
              of Delhi — in-person, online, and through institutional programs at schools and
              corporate offices. Whether you are in South Delhi, West Delhi, North Delhi, or East
              Delhi, life skills training in Delhi is accessible to you.
            </p>
          </div>

          {/* 6 area cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {delhiAreas.map((a) => (
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
          SECTION 5 — WHY HIDDEN POTENTIAL IN DELHI
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Why Hidden Potential</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              What Makes Hidden Potential Different from Other Life Skills Trainers in Delhi
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Delhi has hundreds of life coaches, motivational speakers, and workshop facilitators.
              Here is why Hidden Potential&rsquo;s approach to life skills training in Delhi delivers
              deeper, more lasting, and more measurable results.
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
              Common Questions About Life Skills Training in Delhi
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
            Start Your Life Skills Journey in Delhi Today
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Life skills training in Delhi at Hidden Potential begins with a single step — a free
            30-minute consultation with Supreet Kaur. During that conversation, your specific goals,
            challenges, and developmental needs are assessed. You receive a personalised program
            recommendation — not a generic brochure. Whether you are in Dwarka, South Delhi, Rohini,
            East Delhi, or attending online from anywhere across India, the structured pathways at
            Hidden Potential are designed to produce measurable, documented, lasting transformation —
            not temporary motivation. Over 5000 individuals in Delhi and Delhi NCR have built stronger
            foundations through this system. Your journey begins with one conversation.
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

          {/* Cross-sell to other locations */}
          <p className="text-xs text-white/40 mb-4">
            Also explore life skills training near Delhi:{" "}
            <Link
              href="/locations/noida"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Noida
            </Link>
            <span className="mx-1.5 text-white/25">·</span>
            <Link
              href="/locations/gurgaon"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Gurgaon
            </Link>
            <span className="mx-1.5 text-white/25">·</span>
            <Link
              href="/locations/faridabad"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Faridabad
            </Link>
            {" "}— structured life skills programs across Delhi NCR
          </p>

          {/* Location line */}
          <p className="text-[11px] text-white/30 leading-relaxed">
            Training centre at Dwarka, Sector 19B, South West Delhi — 110075
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

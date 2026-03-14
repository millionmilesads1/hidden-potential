/**
 * LOCATION PAGE — NOIDA
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /locations/noida
 *
 * 7-section structure:
 *   Section 1  — HERO                (dark gradient, H1, Lora italic, body para, 2 CTAs, trust signals)
 *   Section 2  — WHY NOIDA           (off-white, 3 explanatory paragraphs)
 *   Section 3  — ALL PROGRAMS        (white, 14 offering cards numbered 01–14)
 *   Section 4  — AREAS WE SERVE      (navy-light, 6 Noida area cards)
 *   Section 5  — WHY HIDDEN POTENTIAL(off-white, 6 differentiator cards)
 *   Section 6  — FAQ                 (white, 6 Noida-specific Q&As)
 *   Section 7  — CTA                 (dark gradient, para, 2 CTAs, cross-sell, location line)
 *
 * Schemas: LocalBusiness + FAQPage + BreadcrumbList (all embedded as JSON-LD)
 */

import type { Metadata } from "next";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Life Skills Training in Noida | NLP Coaching & Programs | Hidden Potential" },
  description:
    "Life skills training in Noida by Supreet Kaur. NLP coaching, confidence building, communication skills, corporate workshops. Online & Dwarka centre. 14+ years. 5000+ trained.",
  openGraph: {
    title: "Life Skills Training in Noida — NLP Coaching, Student Programs & Corporate Workshops",
    description:
      "Structured life skills programs for Noida residents and organisations. Online sessions, on-site corporate workshops, and school programs. NLP-based. Assessed. Measurable. 14+ years experience.",
    type: "website",
    url: "https://hiddenpotentialskills.com/locations/noida",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/locations/noida",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Skills Training in Noida — NLP Coaching, Student Programs & Corporate Workshops",
    description:
      "Structured life skills training for Noida residents. Online sessions, on-site corporate workshops, school programs. NLP-based. MSME registered. 14+ years. 5000+ trained.",
  },
};

// ── Schema: LocalBusiness ─────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hidden Potential — Life Skills Training Noida",
  description:
    "Structured life skills training for Noida residents and organisations. Online individual sessions, on-site corporate workshops, and school programs across Noida and Greater Noida. MSME registered.",
  url: "https://hiddenpotentialskills.com/locations/noida",
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
  openingHours: "Mo-Fr 10:00-19:00",
  areaServed: [
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Greater Noida" },
    { "@type": "Neighborhood", name: "Noida Sector 62" },
    { "@type": "Neighborhood", name: "Noida Expressway" },
    { "@type": "Neighborhood", name: "Film City Noida" },
    { "@type": "City", name: "Delhi" },
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
      name: "Do you have a training centre in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hidden Potential's primary training centre is at Dwarka, Delhi — accessible from Noida via the Dwarka Expressway and Delhi Metro. However, most Noida clients prefer our comprehensive online sessions which deliver the same curriculum, NLP techniques, and assessment process as in-person training. Corporate workshops and school programs in Noida are delivered on-site at your location.",
      },
    },
    {
      "@type": "Question",
      name: "What life skills programs are available for Noida residents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All Hidden Potential programs are available for Noida residents: An Enlightened Learner (students), Communication Mastery, Self Mastery for Women, Train the Trainer Certification, Art Therapy, NLP Coaching, Confidence Building, Study Skills, Stress Management, Emotional Intelligence, Goal Setting, Career Guidance, and Corporate Workshops. Online for individuals, on-site for Noida schools and corporates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you conduct corporate workshops in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We deliver customised corporate workshops at organisational offices across Noida, including Sector 62, Sector 16, Film City area, and Noida Expressway corporate parks. Topics include team communication, leadership, emotional intelligence, and stress management. Institutional invoicing available as we are MSME registered.",
      },
    },
    {
      "@type": "Question",
      name: "Are school programs available in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We conduct school life skills programs at school premises across Noida and Greater Noida. NEP 2020 aligned curriculum. Student workshops, teacher training, and parent sessions. Several CBSE and ICSE schools in Noida have partnered with Hidden Potential for semester and annual programs.",
      },
    },
    {
      "@type": "Question",
      name: "How do online sessions work for Noida clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online sessions are live and interactive via video conferencing — not pre-recorded. Same structured methodology, same NLP-based techniques, same pre and post assessment process as in-person sessions at our Delhi centre. Many Noida professionals and students prefer online for convenience and time savings.",
      },
    },
    {
      "@type": "Question",
      name: "How much does life skills training cost in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Same pricing as our Delhi programs — varies by program, duration, and format. EMI available. Student and group discounts. Corporate and school institutional billing. Book a free 30-minute consultation with Supreet Kaur to get a personalised program recommendation and complete pricing details.",
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
      name: "Life Skills Training in Noida",
      item: "https://hiddenpotentialskills.com/locations/noida",
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const offerings = [
  {
    num: "01",
    title: "An Enlightened Learner — Student Program",
    desc: "The flagship structured life skills program for students aged 8 to 21 — available online for Noida students and in-person at the Dwarka, Delhi centre. Three age-specific tracks (8 to 12, 13 to 16, 17 to 21) address the exact pressures faced by students in Noida's competitive academic environment — from CBSE board preparation to JEE and medical entrance coaching pressures. Confidence anchoring, study skills, emotional regulation, and communication are developed across Foundation, Growth, and Mastery levels with pre and post assessment.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore An Enlightened Learner →",
  },
  {
    num: "02",
    title: "Communication Mastery",
    desc: "Structured communication and leadership program for ages 8 to 65 — available online for Noida individuals and as on-site workshops for Noida corporates and schools. Covers public speaking, body language, assertiveness, professional communication, and leadership presence. Particularly in demand among Noida's IT professionals and young graduates entering competitive job markets in the Noida Expressway corridor and Sector 62 tech parks.",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery →",
  },
  {
    num: "03",
    title: "Self Mastery for Women",
    desc: "Holistic growth program for women aged 28 and above — available online for Noida residents. Addresses emotional overwhelm, suppressed identity, financial dependence, and relationship boundaries — challenges shared by women across Noida's diverse communities, from working professionals in Sector 62 to homemakers across Noida's residential sectors. Group sessions build community and accountability. Individual pathway option available.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women →",
  },
  {
    num: "04",
    title: "Train the Trainer Certification",
    desc: "Become a certified life skills facilitator — available online for Noida trainers, educators, HR professionals, and school counsellors. 1-month or 3-month programs covering NLP integration, curriculum design, assessment methodology, and practical facilitation. Ideal for professionals in Noida's corporate sector who want to pivot into coaching, educators at Noida schools building internal life skills capability, and aspiring trainers seeking MSME and Skill India certified credentials.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification →",
  },
  {
    num: "05",
    title: "Art Therapy for Healing",
    desc: "A creative therapeutic pathway combining mindfulness, reflective journaling, and art-based expression — available online for Noida residents. No artistic skill required. Effective for Noida professionals dealing with corporate burnout, students under competitive academic pressure, and individuals experiencing emotional numbness, anxiety, or grief. Available as 1-month, 3-month, and 6-month programs.",
    linkHref: "/programs/art-therapy",
    linkLabel: "Explore Art Therapy for Healing →",
  },
  {
    num: "06",
    title: "NLP Coaching — Individual Sessions",
    desc: "Certified NLP coaching for belief restructuring, emotional reprogramming, and behavioural change — available online for Noida clients. Noida's high-pressure professional environment — with its concentration of IT companies, startups, and MNCs — creates specific belief patterns around performance anxiety, impostor syndrome, and career stagnation. NLP coaching addresses these directly, identifying root belief structures and rewiring them through structured practice.",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching →",
  },
  {
    num: "07",
    title: "Confidence Building Program",
    desc: "Structured confidence development for Noida students, professionals, and women — available online and as on-site workshops. Addresses the root beliefs and habitual thought patterns that create self-doubt and hesitation. Particularly relevant for Noida's young IT professionals navigating high-stakes presentations, client interactions, and promotion-track visibility, and for students facing competitive academic evaluations.",
    linkHref: "/services/confidence-building",
    linkLabel: "Explore Confidence Building →",
  },
  {
    num: "08",
    title: "Communication Skills Training",
    desc: "Targeted communication skills development for Noida residents — available online and on-site for Noida corporates. Covers verbal clarity, active listening, assertiveness, non-verbal communication, and professional expression. High demand among Noida's software professionals and engineering graduates who possess strong technical ability but want to strengthen client-facing, team leadership, and cross-functional communication.",
    linkHref: "/services/communication-skills",
    linkLabel: "Explore Communication Skills Training →",
  },
  {
    num: "09",
    title: "Study Skills & Memory Training",
    desc: "Smart study strategies, memory techniques, time management, and academic focus training for students in Noida — available online and at Noida school premises. Research-backed methods including mind mapping, spaced repetition, active recall, and distraction management. Directly relevant for students in Noida's high-density coaching ecosystem — where students often attend multiple classes but struggle with retention, focus, and exam performance.",
    linkHref: "/services/study-skills",
    linkLabel: "Explore Study Skills Training →",
  },
  {
    num: "10",
    title: "Stress Management Coaching",
    desc: "Structured stress management for Noida professionals, students, and women — available online and as corporate on-site workshops. Noida's tech-driven work culture — with deadline-driven project cycles, frequent appraisals, and competitive peer environments — generates chronic professional stress. NLP-integrated techniques go far beyond generic relaxation, producing measurable improvements in emotional regulation and work-life clarity.",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management →",
  },
  {
    num: "11",
    title: "Emotional Intelligence Development",
    desc: "Science-backed emotional intelligence coaching for Noida students, educators, and professionals — available online and as team workshops for Noida corporates. Builds self-awareness, empathy, emotional regulation, and social skill. High demand from Noida IT managers, team leads, and HR professionals seeking to improve team dynamics, reduce conflict, and build psychologically safe work environments in Noida's high-growth companies.",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Explore Emotional Intelligence Coaching →",
  },
  {
    num: "12",
    title: "Goal Setting & Accountability",
    desc: "Structured goal-setting and accountability program for Noida individuals — available online. Particularly effective for Noida professionals navigating career growth decisions, side business aspirations alongside corporate roles, and personal development goals that keep getting deprioritised by the demands of Noida's fast-paced professional culture. Teaches specific planning frameworks, progress tracking systems, and NLP-based motivation maintenance.",
    linkHref: "/services/goal-setting",
    linkLabel: "Explore Goal Setting Workshop →",
  },
  {
    num: "13",
    title: "Career Guidance & Transition Coaching",
    desc: "Guidance for Noida individuals navigating career changes, re-entry after a break, or entrepreneurial transitions — available online. Noida's dynamic job market — with regular layoffs in IT, startup closures, and rapid role evolution — creates ongoing need for career clarity coaching. Combines structured decision-making frameworks with NLP belief work to address the fear and uncertainty that blocks most people from making necessary career pivots.",
    linkHref: "/services/career-guidance",
    linkLabel: "Explore Career Guidance →",
  },
  {
    num: "14",
    title: "Group Workshops & Corporate Programs",
    desc: "Interactive life skills workshops for Noida corporates, schools, and community groups — delivered on-site across Noida and Greater Noida. Workshop themes include communication, emotional intelligence, stress management, leadership, and NLP for teams. Fully customised after a needs assessment. Popular in Noida's Sector 62, Sector 16A, Noida Expressway, and Film City corporate zones. MSME registered — institutional invoicing available.",
    linkHref: "/services/workshops",
    linkLabel: "Explore Group Workshops →",
  },
];

const noidaAreas = [
  {
    num: "01",
    title: "Noida Sectors 1–62 — Core Noida Residents",
    desc: "Residents across Noida's core residential and commercial sectors — Sector 18, 22, 25, 27, 37, 44, 50, 56, 62, and surrounding areas — access Hidden Potential's life skills training in Noida primarily through online sessions. Individual programs, family packages (student + parent pathways), and corporate workshops for sector-based offices are all available. Online delivery removes the commute barrier entirely while maintaining full program quality.",
  },
  {
    num: "02",
    title: "Greater Noida & Knowledge Park",
    desc: "Students from Greater Noida's engineering colleges, management institutes, and schools in Knowledge Park I, II, and III benefit enormously from life skills training alongside technical education. Career readiness, communication confidence, emotional regulation, and goal clarity are the four gaps most frequently identified in Greater Noida's student population. Online programs and on-site college workshops are both available for Greater Noida institutions.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore the Student Life Skills Program →",
  },
  {
    num: "03",
    title: "Noida Expressway Corridor",
    desc: "Professionals working in the high-rise corporate complexes along the Noida Expressway — from Sector 125 to Sector 135 — face a specific combination of high performance expectations, competitive peer pressure, and career plateau anxiety. Hidden Potential's online individual coaching and on-site corporate workshop programs are designed precisely for this demographic. Stress management, communication mastery, leadership presence, and NLP-based belief restructuring are the most requested topics.",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management →",
  },
  {
    num: "04",
    title: "Film City & Sector 16A — Creative Professionals",
    desc: "Media professionals, creative workers, production staff, and content creators in Noida's Film City and Sector 16A area have distinct life skills needs — particularly around communication confidence, creative block management, professional identity, and self-promotion clarity. Communication Mastery, Confidence Building, and NLP coaching are the most relevant programs for this community, available online and as workshop formats.",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery →",
  },
  {
    num: "05",
    title: "Noida Schools & Educational Institutions",
    desc: "Hidden Potential delivers on-site life skills programs at CBSE, ICSE, and international school campuses across Noida and Greater Noida. NEP 2020 aligned curriculum covers student workshops, teacher training, and parent engagement sessions. School partnership programs are structured as semester-long or annual engagements — not one-day events. Institutional documentation and assessment reports are provided as standard. Contact us to schedule a school needs assessment.",
    linkHref: "/contact",
    linkLabel: "Enquire about school programs in Noida →",
  },
  {
    num: "06",
    title: "Noida Corporates, IT Parks & Startups",
    desc: "Tech companies, IT services firms, startups, and MNCs with offices in Noida Sector 62, Sector 16, Sector 2, and the Noida Special Economic Zone engage Hidden Potential for team life skills workshops, leadership development, and communication training. All corporate programs are preceded by a needs assessment and followed by a progress report. MSME registered — institutional invoicing and corporate billing available.",
    linkHref: "/contact",
    linkLabel: "Enquire about corporate workshops in Noida →",
  },
];

const differentiators = [
  {
    title: "Serving Noida Without Compromise",
    desc: "Not having a physical centre in Noida is not a limitation — it is a deliberate choice to deliver quality without dilution. Hidden Potential's online sessions for Noida clients use the same structured methodology, NLP techniques, pre and post assessment, and developmental pathways as in-person sessions at the Dwarka, Delhi centre. Many Noida clients report that online actually works better for their schedule.",
  },
  {
    title: "On-Site Corporate & School Delivery Across Noida",
    desc: "For organisations, schools, and institutions in Noida that require in-person delivery, Hidden Potential travels to your location. Corporate workshops at Noida IT parks, student programs at Noida schools, and institutional events are delivered on-site. MSME registered — providing Noida corporates and schools with the institutional documentation required for formal program contracts.",
  },
  {
    title: "Assessment-Based Personalisation",
    desc: "Every Noida learner begins with a structured pre-assessment that maps specific confidence gaps, communication patterns, belief systems, and goals. The program recommendation is personalised — not a standard course assigned based on age or profession. This means a Noida IT professional and a Noida student receive pathways calibrated to their actual needs, not generic content.",
  },
  {
    title: "14+ Years of Applied Experience",
    desc: "Supreet Kaur has been delivering life skills training to learners from Noida for over 14 years — through school partnerships, corporate workshops, individual coaching, and the full suite of structured programs. Over 5000 individuals trained across Delhi NCR, with a significant and growing Noida client base. This is not newly launched online coaching — it is a tested, refined system built for Indian learners.",
  },
  {
    title: "NEP 2020 Aligned for Noida Schools",
    desc: "Hidden Potential's school programs are specifically designed to meet the life skills requirements mandated by India's National Education Policy 2020. For Noida CBSE and ICSE schools seeking a credentialed, assessed, and documented life skills curriculum partner — as opposed to motivational speakers or one-day events — Hidden Potential provides the institutional solution with MSME registration and Skill India affiliation.",
  },
  {
    title: "Documented Progress, Not Just Motivation",
    desc: "Every Noida learner at Hidden Potential begins with a documented baseline and ends with a documented progress report. Growth in confidence, communication clarity, emotional regulation, and goal achievement is measured and visible — not assumed. This is what separates structured life skills training in Noida from the motivational content and generic workshops that dominate the market.",
  },
];

const faqs = [
  {
    q: "Do you have a training centre in Noida?",
    a: "Hidden Potential's primary training centre is at Dwarka, Delhi — accessible from Noida via the Dwarka Expressway and Delhi Metro. However, most Noida clients prefer our comprehensive online sessions which deliver the same curriculum, NLP techniques, and assessment process as in-person training. Corporate workshops and school programs in Noida are delivered on-site at your location.",
  },
  {
    q: "What life skills programs are available for Noida residents?",
    a: "All Hidden Potential programs are available for Noida residents: An Enlightened Learner (students aged 8–21), Communication Mastery, Self Mastery for Women, Train the Trainer Certification, Art Therapy, NLP Coaching, Confidence Building, Study Skills, Stress Management, Emotional Intelligence, Goal Setting, Career Guidance, and Corporate Workshops. Online for individuals, on-site for Noida schools and corporates.",
  },
  {
    q: "Do you conduct corporate workshops in Noida?",
    a: "Yes. We deliver customised corporate workshops at organisational offices across Noida, including Sector 62, Sector 16, Film City area, and Noida Expressway corporate parks. Topics include team communication, leadership, emotional intelligence, and stress management. Institutional invoicing available as we are MSME registered.",
  },
  {
    q: "Are school programs available in Noida?",
    a: "Yes. We conduct school life skills programs at school premises across Noida and Greater Noida. NEP 2020 aligned curriculum covering student workshops, teacher training, and parent sessions. Several CBSE and ICSE schools in Noida have partnered with Hidden Potential for semester and annual programs.",
  },
  {
    q: "How do online sessions work for Noida clients?",
    a: "Online sessions are live and interactive via video conferencing — not pre-recorded. Same structured methodology, same NLP-based techniques, same pre and post assessment process as in-person sessions at our Delhi centre. Many Noida professionals and students prefer online for the convenience and time savings it provides.",
  },
  {
    q: "How much does life skills training cost in Noida?",
    a: "Same pricing as our Delhi programs — varies by program, duration, and format. EMI available. Student and group discounts apply. Corporate and school institutional billing supported. Book a free 30-minute consultation with Supreet Kaur to get a personalised program recommendation and complete pricing details with no obligation.",
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
export default function NoidaLocationPage() {
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
              Available in Noida
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Life Skills Training in Noida — NLP Coaching, Student Programs &amp; Corporate Workshops
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
            Noida&rsquo;s IT culture rewards technical skill. Life skills are what unlock the rest.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            Hidden Potential delivers structured, assessment-based life skills training in Noida
            through live online sessions for individuals and on-site programs for Noida schools and
            corporates. Founded and led by{" "}
            <Link
              href="/about"
              className="text-white/80 font-semibold hover:text-white transition-colors"
            >
              Supreet Kaur
            </Link>{" "}
            — certified NLP practitioner, Masters in Psychology, Josh Talks speaker, and
            award-winning educator — our Noida programs cover the complete range of life skills
            development: student confidence and study skills, professional communication and
            leadership, women&rsquo;s empowerment and identity rebuilding, corporate team workshops, and
            NLP coaching for individuals. With 14+ years of experience, 5000+ individuals trained
            across Delhi NCR, and on-site delivery to Noida&rsquo;s top schools and corporate parks,
            Hidden Potential is the structured, MSME registered life skills partner that Noida
            students, professionals, and organisations deserve.
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
              "Online for Noida",
              "14+ Years Experience",
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
          SECTION 2 — WHY NOIDA NEEDS LIFE SKILLS TRAINING
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Why Noida Needs This</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 leading-tight max-w-2xl">
            Why Life Skills Training Matters for People Living and Working in Noida
          </h2>

          <div className="flex flex-col gap-6 text-base text-charcoal leading-relaxed">
            <p>
              Noida has evolved from a planned industrial township into one of India&rsquo;s most significant
              IT and corporate hubs — home to major technology companies, media organisations, startups,
              and a growing base of young professionals who relocated from across the country. Yet the
              same forces that make Noida professionally attractive also create specific life skills
              deficits. Engineers and graduates arriving in Noida from tier-2 cities are technically
              capable but often underprepared for the communication demands, performance review cycles,
              and leadership transitions that define career growth in Noida&rsquo;s corporate environment.
              Confidence gaps, public speaking anxiety, impostor syndrome, and difficulty managing
              upward in organisations are routine challenges in Noida&rsquo;s IT and services sector —
              challenges that structured life skills training in Noida directly addresses.
            </p>
            <p>
              For Noida&rsquo;s student population — spread across dozens of CBSE and ICSE schools,
              coaching institutes, and Greater Noida&rsquo;s engineering colleges — academic pressure has
              intensified significantly over the past decade. The concentration of competitive entrance
              coaching in Noida creates a culture of academic performance at the expense of
              emotional regulation, identity development, and communication confidence. Students in
              Noida regularly exhibit exam anxiety, peer comparison stress, social withdrawal, and
              digital addiction patterns that academic tutoring cannot address. Life skills training in
              Noida — when structured, assessed, and NLP-based — gives these students the inner
              foundation that makes academic performance sustainable rather than anxiety-driven.
            </p>
            <p>
              For Noida&rsquo;s women — across homemaker, professional, and entrepreneurial contexts —
              the need for structured empowerment is significant and underserved. Women in Noida&rsquo;s
              residential sectors managing families alongside career ambitions, women re-entering the
              workforce after career breaks, and women in corporate Noida navigating leadership
              transitions all share a common thread: years of conditioned self-suppression that life
              skills training can systematically reverse. Hidden Potential, led by{" "}
              <Link
                href="/about"
                className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
              >
                Supreet Kaur
              </Link>
              , serves all three of these Noida communities — students, professionals, and women
              — with structured, documented, and NEP 2020 aligned programs that produce measurable,
              lasting transformation rather than temporary motivation.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — ALL PROGRAMS AVAILABLE IN NOIDA
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Available in Noida</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              All Life Skills Programs and Services Available in Noida
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Every Hidden Potential program is accessible for Noida residents — through live online
              sessions for individuals and on-site delivery for Noida schools and corporates. Here is
              the complete range of life skills training in Noida.
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
          SECTION 4 — AREAS WE SERVE IN NOIDA
          Background: Navy-light (#F3F0FF)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-navy-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Areas We Serve</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Life Skills Training Across All Areas of Noida and Greater Noida
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Hidden Potential serves learners and organisations across Noida — from residential
              sectors to corporate parks, educational institutions, and Greater Noida&rsquo;s college
              corridor. Online delivery means no commute, no compromise.
            </p>
          </div>

          {/* 6 area cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {noidaAreas.map((a) => (
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
          SECTION 5 — WHY HIDDEN POTENTIAL IN NOIDA
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Why Hidden Potential</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              What Makes Hidden Potential Different from Other Life Skills Providers in Noida
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Noida has motivational speakers, online coaching apps, and weekend certification
              workshops. Here is why Hidden Potential&rsquo;s structured approach delivers deeper
              and more lasting results for Noida learners.
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
              Common Questions About Life Skills Training in Noida
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
            Begin Your Life Skills Journey in Noida Today
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Life skills training in Noida at Hidden Potential begins with a free 30-minute
            consultation — a structured conversation in which your goals, challenges, and
            developmental needs are assessed by Supreet Kaur. You receive a personalised program
            recommendation tailored to your situation: whether you are a student in Noida preparing
            for board exams and college admissions, a professional in Noida&rsquo;s IT sector building
            leadership presence, a woman in Noida ready to reclaim your confidence, or an HR
            manager seeking a credible corporate life skills partner for your Noida team. Online
            delivery means zero commute with full quality. On-site means we come to you. Either
            way, the structured pathways, NLP integration, and documented progress that have
            transformed 5000+ lives across Delhi NCR are fully available to you in Noida.
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
            Also explore life skills training across Delhi NCR:{" "}
            <Link
              href="/locations/delhi"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Delhi
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
            Online across Noida, Greater Noida &amp; India
            <span className="mx-1 text-white/20">|</span>
            On-site at Noida schools &amp; corporate offices
            <span className="mx-1 text-white/20">|</span>
            <Link
              href="/locations/delhi"
              className="hover:text-white/50 transition-colors"
            >
              Delhi centre: Dwarka, Sector 19B
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
          </p>
        </div>
      </section>
    </>
  );
}

/**
 * LOCATION PAGE — GURGAON
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /locations/gurgaon
 *
 * 7-section structure:
 *   Section 1  — HERO                (dark gradient, H1, Lora italic, body para, 2 CTAs, trust signals)
 *   Section 2  — WHY GURGAON         (off-white, 3 explanatory paragraphs)
 *   Section 3  — ALL PROGRAMS        (white, 14 offering cards numbered 01–14)
 *   Section 4  — AREAS WE SERVE      (navy-light, 6 Gurgaon area cards)
 *   Section 5  — WHY HIDDEN POTENTIAL(off-white, 6 differentiator cards)
 *   Section 6  — FAQ                 (white, 6 Gurgaon-specific Q&As)
 *   Section 7  — CTA                 (dark gradient, para, 2 CTAs, cross-sell, location line)
 *
 * Schemas: LocalBusiness + FAQPage + BreadcrumbList (all embedded as JSON-LD)
 */

import type { Metadata } from "next";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Life Skills Training in Gurgaon | NLP Coaching & Corporate Workshops | Hidden Potential" },
  description:
    "Life skills training in Gurgaon. NLP coaching, corporate workshops, communication mastery, confidence building. Online & Dwarka centre. Supreet Kaur. 14+ years. MSME registered.",
  openGraph: {
    title:
      "Life Skills Training in Gurgaon — NLP Coaching, Corporate Workshops & Student Programs",
    description:
      "Structured life skills programs for Gurgaon professionals and organisations. Online sessions, on-site corporate workshops at Cyber City, Golf Course Road & more. NLP-based. MSME registered.",
    type: "website",
    url: "https://hiddenpotentialskills.com/locations/gurgaon",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/locations/gurgaon",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Life Skills Training in Gurgaon — NLP Coaching, Corporate Workshops & Student Programs",
    description:
      "Life skills training for Gurgaon professionals. Online sessions, on-site workshops at Cyber City, DLF, Golf Course Road. NLP-based. MSME registered. 14+ years. 5000+ trained.",
  },
};

// ── Schema: LocalBusiness ─────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hidden Potential — Life Skills Training Gurgaon",
  description:
    "Structured life skills training for Gurgaon professionals and organisations. Online individual sessions, on-site corporate workshops at Cyber City, DLF, Golf Course Road, and school programs across Gurugram. MSME registered.",
  url: "https://hiddenpotentialskills.com/locations/gurgaon",
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
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "Neighborhood", name: "Cyber City Gurgaon" },
    { "@type": "Neighborhood", name: "DLF Phase Gurgaon" },
    { "@type": "Neighborhood", name: "Golf Course Road Gurgaon" },
    { "@type": "Neighborhood", name: "Udyog Vihar Gurgaon" },
    { "@type": "City", name: "Manesar" },
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
      name: "Do you have a training centre in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our centre is at Dwarka, Delhi — approximately 30 minutes from Gurgaon via NH-48. Most Gurgaon clients use our online sessions or book corporate and school on-site delivery. Corporate workshops are regularly delivered at offices across Gurgaon including Cyber City, Udyog Vihar, Golf Course Road, and Sohna Road.",
      },
    },
    {
      "@type": "Question",
      name: "What life skills programs are available for Gurgaon professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All Hidden Potential programs are available for Gurgaon residents. Gurgaon professionals most commonly enroll in NLP Coaching, Communication Mastery, Stress Management, Corporate Workshops, and Confidence Building. Individual coaching is available online or at our Dwarka centre. Corporate workshops are delivered on-site at your Gurgaon office.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver corporate workshops in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly conduct workshops at corporate offices across Gurgaon — Cyber City, DLF Phase 1 to 5, Udyog Vihar, Golf Course Road, MG Road, and Sohna Road. Topics include team communication, leadership, emotional intelligence, and stress management. MSME registered for institutional corporate billing.",
      },
    },
    {
      "@type": "Question",
      name: "Are school programs available in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We partner with schools across Gurgaon and Gurugram for NEP 2020 aligned life skills programs. Student workshops, teacher training, and parent engagement sessions are all available. Several international and CBSE schools in Gurgaon have implemented Hidden Potential programs as part of their annual curriculum.",
      },
    },
    {
      "@type": "Question",
      name: "How do Gurgaon residents access your training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three options: online sessions (most popular for Gurgaon professionals), in-person at our Dwarka, Delhi centre (approximately 30 minutes via NH-48), or on-site delivery at your Gurgaon office or school. All formats use the same structured methodology, NLP techniques, and assessment process.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Hidden Potential relevant for Gurgaon's corporate culture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gurgaon's high-pressure corporate environment creates specific challenges — communication breakdowns, leadership gaps, burnout, and emotional dysregulation. Our programs use NLP-based techniques that are outcome-focused and measurable, not generic team-building activities. Supreet Kaur's 14+ years include extensive corporate delivery across Gurgaon and Delhi NCR.",
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
      name: "Life Skills Training in Gurgaon",
      item: "https://hiddenpotentialskills.com/locations/gurgaon",
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const offerings = [
  {
    num: "01",
    title: "An Enlightened Learner — Student Program",
    desc: "Structured life skills program for students aged 8 to 21 — available online for Gurgaon students and on-site at Gurgaon schools. Gurgaon's concentration of international schools, CBSE institutions, and competitive coaching centres creates a high-pressure academic environment where students achieve academically but often struggle with emotional regulation, social confidence, and self-awareness. Three age-specific tracks with pre and post assessment ensure every Gurgaon student receives a personalised developmental pathway.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore An Enlightened Learner →",
  },
  {
    num: "02",
    title: "Communication Mastery",
    desc: "Structured communication and leadership program for ages 8 to 65 — available online for Gurgaon individuals and as on-site workshops for Gurgaon corporates. Among the most requested programs in Gurgaon's MNC-heavy corporate environment, where professionals need to present to international stakeholders, lead cross-functional teams, and build executive presence. Covers public speaking, body language, assertiveness, persuasive communication, and leadership visibility.",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery →",
  },
  {
    num: "03",
    title: "Self Mastery for Women",
    desc: "Holistic growth program for women aged 28 and above — available online for Gurgaon residents. Gurgaon's dual culture — corporate ambition alongside traditional family expectations — creates specific identity tensions for women. Whether navigating leadership transitions in Gurgaon's MNCs, managing career re-entry after a break, or rebuilding personal identity after years of self-suppression, this structured program provides the frameworks, community, and NLP-based tools that produce lasting empowerment.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women →",
  },
  {
    num: "04",
    title: "Train the Trainer Certification",
    desc: "Become a certified life skills facilitator — available online for Gurgaon trainers, L&D professionals, and educators. Gurgaon's large HR and Learning & Development community across Cyber City, DLF, and Udyog Vihar corporates makes Train the Trainer certification particularly relevant. 1-month or 3-month programs covering NLP integration, curriculum design, assessment methodology, and practical facilitation. MSME and Skill India certified — ideal for Gurgaon professionals building internal training capabilities.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification →",
  },
  {
    num: "05",
    title: "Art Therapy for Healing",
    desc: "Creative therapeutic pathway combining mindfulness, reflective journaling, and art-based expression — available online for Gurgaon residents. No artistic skill required. Gurgaon's intense corporate lifestyle generates specific forms of emotional exhaustion — disconnection from purpose, creative numbness, and chronic overthinking — that art therapy directly addresses. Available as 1-month, 3-month, and 6-month programs for individuals seeking healing through structured creative expression.",
    linkHref: "/programs/art-therapy",
    linkLabel: "Explore Art Therapy for Healing →",
  },
  {
    num: "06",
    title: "NLP Coaching — Individual Sessions",
    desc: "Certified NLP coaching for belief restructuring, emotional reprogramming, and behavioural change — available online for Gurgaon clients and at the Dwarka centre (30 min via NH-48). High demand among Gurgaon's senior professionals who face leadership performance anxiety, career plateau frustration, and impostor syndrome in high-visibility corporate roles. NLP coaching identifies the specific subconscious belief patterns limiting performance and systematically rewires them through structured practice.",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching →",
  },
  {
    num: "07",
    title: "Confidence Building Program",
    desc: "Structured confidence development for Gurgaon students, professionals, and women — available online and on-site. Gurgaon's high-achievement culture creates a specific paradox: outwardly successful professionals who privately experience deep self-doubt, fear of being exposed as inadequate, and anxiety in high-visibility situations. This program identifies the root beliefs driving these patterns and builds genuine, embodied confidence through NLP anchoring, identity work, and structured practice.",
    linkHref: "/services/confidence-building",
    linkLabel: "Explore Confidence Building →",
  },
  {
    num: "08",
    title: "Communication Skills Training",
    desc: "Targeted communication skills development — available online for Gurgaon individuals and on-site for Gurgaon corporate teams. Covers verbal clarity, active listening, assertiveness, non-verbal communication, and professional expression. Particularly valuable for Gurgaon professionals navigating cross-cultural communication in MNC environments, client-facing roles requiring executive presence, and managers transitioning into leadership positions where communication demands shift significantly.",
    linkHref: "/services/communication-skills",
    linkLabel: "Explore Communication Skills Training →",
  },
  {
    num: "09",
    title: "Study Skills & Memory Training",
    desc: "Smart study strategies, memory techniques, time management, and academic focus training for students in Gurgaon — available online and at Gurgaon school premises. Research-backed methods including mind mapping, spaced repetition, active recall, and distraction management. Directly addresses the study fragmentation common among Gurgaon students who balance school, coaching classes, and extracurricular activities across Gurgaon's South City, Sushant Lok, and DLF residential zones.",
    linkHref: "/services/study-skills",
    linkLabel: "Explore Study Skills Training →",
  },
  {
    num: "10",
    title: "Stress Management Coaching",
    desc: "Structured stress management for Gurgaon professionals, students, and women — available online and as corporate on-site workshops. Gurgaon consistently ranks among India's highest-stress professional environments — with traffic, long working hours, deadline pressure, and constant performance visibility creating compounding burnout. NLP-integrated techniques produce measurable improvements in stress response, emotional regulation, and work-life clarity rather than temporary relaxation.",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management →",
  },
  {
    num: "11",
    title: "Emotional Intelligence Development",
    desc: "Science-backed EI coaching for Gurgaon professionals, managers, and team leads — available online and as corporate team workshops. Gurgaon's MNC culture frequently promotes technical experts into leadership roles without addressing the emotional intelligence gap that determines leadership effectiveness. Builds self-awareness, empathy, emotional regulation, and social skill through structured practice and NLP-enhanced awareness exercises. Measurable pre and post EI assessment.",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Explore Emotional Intelligence Coaching →",
  },
  {
    num: "12",
    title: "Goal Setting & Accountability",
    desc: "Structured goal-setting and accountability program for Gurgaon individuals — available online. Particularly relevant for Gurgaon professionals in their 30s who have achieved early career success but feel directionless, for women rebuilding personal purpose alongside professional ambition, and for students and young adults in Gurgaon's competitive academic environment learning to plan and execute beyond the next exam cycle.",
    linkHref: "/services/goal-setting",
    linkLabel: "Explore Goal Setting Workshop →",
  },
  {
    num: "13",
    title: "Career Guidance & Transition Coaching",
    desc: "Guidance for Gurgaon individuals navigating career changes, leadership transitions, or entrepreneurial pivots — available online. Gurgaon's dynamic economy — with frequent restructuring in MNCs, rapid startup ecosystem growth, and expanding gig economy — creates ongoing demand for career clarity coaching. Combines structured decision-making frameworks with NLP belief work to address the fear, uncertainty, and identity disruption that accompany major career changes.",
    linkHref: "/services/career-guidance",
    linkLabel: "Explore Career Guidance →",
  },
  {
    num: "14",
    title: "Group Workshops & Corporate Programs",
    desc: "Interactive life skills workshops delivered on-site across Gurgaon — at Cyber City corporate parks, DLF office complexes, Udyog Vihar industrial area, Golf Course Road high-rises, and MG Road commercial zones. Workshop themes include communication, emotional intelligence, stress management, leadership, and NLP for teams. Fully customised after a needs assessment. MSME registered — institutional invoicing and corporate billing available for Gurgaon companies.",
    linkHref: "/services/workshops",
    linkLabel: "Explore Group Workshops →",
  },
];

const gurgaonAreas = [
  {
    num: "01",
    title: "Cyber City & DLF Phases — Gurgaon's Corporate Core",
    desc: "Cyber City and the DLF Phase 1 to 5 corridor is home to India's densest concentration of global MNCs — Google, Microsoft, Deloitte, PwC, American Express, and dozens more. Hidden Potential's life skills training in Gurgaon serves professionals in this corridor through online individual coaching and on-site corporate workshops. Communication mastery, leadership presence, stress management, and NLP coaching are the most requested topics for Cyber City's high-performance workforce.",
    linkHref: "/services/workshops",
    linkLabel: "Explore Corporate Workshops →",
  },
  {
    num: "02",
    title: "Golf Course Road & Sohna Road",
    desc: "Golf Course Road and Sohna Road host a growing cluster of mid-sized corporates, boutique firms, and upscale residential communities. Professionals in this corridor — combining demanding careers with high-cost lifestyles and family responsibilities — face specific burnout and identity challenges. Online life skills coaching and on-site team workshops are both available. The residential communities along Golf Course Extension and Sohna Road also generate strong demand for student programs and women's empowerment coaching.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women →",
  },
  {
    num: "03",
    title: "Udyog Vihar & MG Road — Manufacturing and Commercial Hub",
    desc: "Udyog Vihar's industrial and manufacturing organisations, and MG Road's commercial and retail businesses, have distinct team development needs — workforce communication training, emotional intelligence for supervisors, stress management for production teams, and leadership development for mid-level managers. Hidden Potential delivers on-site workshops customised to the specific culture and challenges of Udyog Vihar and MG Road organisations.",
    linkHref: "/services/workshops",
    linkLabel: "Explore Corporate Workshops →",
  },
  {
    num: "04",
    title: "Gurgaon Schools & Educational Institutions",
    desc: "Gurgaon and Gurugram host some of India's most prominent international and CBSE schools — GD Goenka, The Shri Ram School, Pathways World School, Scottish High, Heritage School, and dozens more. Hidden Potential delivers NEP 2020 aligned life skills programs on-site at Gurgaon school campuses — including student workshops, teacher development sessions, and parent engagement programs. Semester and annual partnership formats available.",
    linkHref: "/contact",
    linkLabel: "Enquire about school programs in Gurgaon →",
  },
  {
    num: "05",
    title: "Manesar & New Gurgaon",
    desc: "Manesar's expanding industrial corridor and New Gurgaon's rapidly developing residential and commercial zones are among the fastest-growing parts of the Gurugram district. Young families relocating to Dwarka Expressway residential projects, professionals in Manesar's manufacturing and tech campuses, and students in New Gurgaon's new schools all represent emerging demand for structured life skills development — accessible primarily through online sessions.",
  },
  {
    num: "06",
    title: "Gurgaon Startups, Hatcheries & Tech Companies",
    desc: "Gurgaon's startup ecosystem — concentrated in co-working spaces across Sector 44, Golf Course Road, and Cyber Hub — has specific life skills training needs: founder communication, team dynamics, leadership under uncertainty, and resilience. Hidden Potential's corporate workshops and individual online coaching are designed to fit the pace and culture of Gurgaon's startup environment. Flexible formats and MSME documentation available for startup HR teams.",
    linkHref: "/contact",
    linkLabel: "Enquire about startup team workshops →",
  },
];

const differentiators = [
  {
    title: "Deep Corporate Delivery Experience in Gurgaon",
    desc: "Supreet Kaur has delivered life skills and corporate workshops across Gurgaon's major business districts — Cyber City, DLF, Udyog Vihar, Golf Course Road — for over 14 years. This is not generic workshop content being adapted for Gurgaon. It is refined, tested delivery built on direct experience with Gurgaon's MNC culture, workforce dynamics, and performance expectations.",
  },
  {
    title: "NLP-Based — Not Generic Team Building",
    desc: "Gurgaon's corporate world is saturated with team-building events, motivational speakers, and wellness days that produce no measurable change. Hidden Potential's programs use NLP-based techniques that work at the subconscious level — restructuring the belief patterns and behavioural habits that limit communication, leadership, and performance. Results are documented, not assumed.",
  },
  {
    title: "Assessment-Based Personalisation",
    desc: "Every Gurgaon learner begins with a structured pre-assessment. Individual coaching is personalised based on specific gaps identified at entry. Corporate workshop content is customised after an organisational needs assessment — not delivered as packaged content unchanged from the last client. This is what separates structured life skills training in Gurgaon from generic workshop providers.",
  },
  {
    title: "Three Access Options for Gurgaon",
    desc: "Gurgaon clients choose from online sessions (zero commute, full quality), in-person at our Dwarka, Delhi centre (approx. 30 minutes via NH-48), or on-site delivery at your Gurgaon office or school. Every format uses the same structured methodology, NLP techniques, and assessment process. Access is designed around your schedule, not ours.",
  },
  {
    title: "MSME Registered — Corporate Billing Ready",
    desc: "Hidden Potential is MSME registered and Skill India affiliated — providing Gurgaon corporates, MNCs, and schools with the institutional documentation required for formal vendor empanelment, corporate billing, CSR funding applications, and compliance reporting. This matters significantly in Gurgaon's compliance-conscious MNC procurement environment.",
  },
  {
    title: "Measurable Progress, Not Motivational Moments",
    desc: "Every Gurgaon program begins with a documented baseline and ends with a progress report. Growth in communication clarity, confidence, emotional regulation, and leadership presence is measured and reportable — essential for Gurgaon's data-driven corporate HR teams who need to demonstrate ROI on learning and development investments.",
  },
];

const faqs = [
  {
    q: "Do you have a training centre in Gurgaon?",
    a: "Our centre is at Dwarka, Delhi — approximately 30 minutes from Gurgaon via NH-48. Most Gurgaon clients use our online sessions or book corporate and school on-site delivery. Corporate workshops are regularly delivered at offices across Gurgaon including Cyber City, Udyog Vihar, Golf Course Road, and Sohna Road.",
  },
  {
    q: "What life skills programs are available for Gurgaon professionals?",
    a: "All Hidden Potential programs are available for Gurgaon residents. Gurgaon professionals most commonly enroll in NLP Coaching, Communication Mastery, Stress Management, Corporate Workshops, and Confidence Building. Individual coaching is available online or at our Dwarka centre. Corporate workshops are delivered on-site at your Gurgaon office.",
  },
  {
    q: "Do you deliver corporate workshops in Gurgaon?",
    a: "Yes. We regularly conduct workshops at corporate offices across Gurgaon — Cyber City, DLF Phase 1 to 5, Udyog Vihar, Golf Course Road, MG Road, and Sohna Road. Topics include team communication, leadership, emotional intelligence, and stress management. MSME registered for institutional corporate billing.",
  },
  {
    q: "Are school programs available in Gurgaon?",
    a: "Yes. We partner with schools across Gurgaon and Gurugram for NEP 2020 aligned life skills programs. Student workshops, teacher training, and parent engagement sessions are all available. Several international and CBSE schools in Gurgaon have implemented Hidden Potential programs as part of their annual curriculum.",
  },
  {
    q: "How do Gurgaon residents access your training?",
    a: "Three options: online sessions (most popular for Gurgaon professionals), in-person at our Dwarka, Delhi centre (approximately 30 minutes via NH-48), or on-site delivery at your Gurgaon office or school. All formats use the same structured methodology, NLP techniques, and assessment process.",
  },
  {
    q: "What makes Hidden Potential relevant for Gurgaon's corporate culture?",
    a: "Gurgaon's high-pressure corporate environment creates specific challenges — communication breakdowns, leadership gaps, burnout, and emotional dysregulation. Our programs use NLP-based techniques that are outcome-focused and measurable, not generic team-building activities. Supreet Kaur's 14+ years include extensive corporate delivery across Gurgaon and Delhi NCR.",
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
export default function GurgaonLocationPage() {
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
        style={{ background: "#0f0f1a" }}
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
              Available in Gurgaon
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Life Skills Training in Gurgaon — NLP Coaching, Corporate Workshops &amp; Student Programs
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
            Gurgaon builds careers. Life skills training in Gurgaon builds the person behind the career.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            Hidden Potential delivers structured, assessment-based life skills training in Gurgaon
            through live online sessions for individuals and on-site corporate workshops and school
            programs across Cyber City, DLF, Udyog Vihar, Golf Course Road, and Gurugram&rsquo;s
            educational institutions. Founded and led by{" "}
            <Link
              href="/about"
              className="text-white/80 font-semibold hover:text-white transition-colors"
            >
              Supreet Kaur
            </Link>{" "}
            — certified NLP practitioner, Masters in Psychology, Josh Talks speaker, and
            award-winning educator with 14+ years of corporate and individual training delivery
            across Delhi NCR — our Gurgaon programs serve professionals navigating MNC demands,
            students in Gurgaon&rsquo;s competitive schools, women balancing career and family
            pressures, and organisations building high-performance team cultures. MSME registered.
            Skill India affiliated. 5000+ individuals trained. Life skills training in Gurgaon that
            is structured, measurable, and built for the demands of this city.
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
              "Online for Gurgaon",
              "On-Site Corporate Delivery",
              "14+ Years Experience",
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
          SECTION 2 — WHY GURGAON NEEDS LIFE SKILLS TRAINING
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Why Gurgaon Needs This</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 leading-tight max-w-2xl">
            Why Life Skills Training Matters for People Living and Working in Gurgaon
          </h2>

          <div className="flex flex-col gap-6 text-base text-charcoal leading-relaxed">
            <p>
              Gurgaon is India&rsquo;s corporate showroom — a city built around ambition, performance,
              and relentless professional growth. Home to more Fortune 500 companies than any other
              Indian city outside Mumbai, Gurgaon attracts talent from across India who come to build
              careers in Cyber City&rsquo;s glass towers, DLF&rsquo;s corporate campuses, and Golf Course
              Road&rsquo;s high-rise offices. Yet this same environment generates specific and well-documented
              life skills deficits. Communication breakdowns between technical experts and leadership
              teams, emotional dysregulation under performance pressure, impostor syndrome in
              high-visibility roles, and burnout from sustained high-intensity work are routine
              challenges in Gurgaon&rsquo;s corporate ecosystem — challenges that life skills training in
              Gurgaon directly and measurably addresses. Most organisations respond with HR initiatives,
              wellness programs, or generic team-building events that produce temporary engagement but
              no lasting behavioural change. Structured NLP-based life skills training produces
              documented, measurable transformation.
            </p>
            <p>
              For Gurgaon&rsquo;s student population, the pressure is different but equally intense. The
              city&rsquo;s international schools — Pathways, GD Goenka, The Shri Ram School, Scottish High,
              Heritage School — attract families with high educational aspirations and the resources
              to support them. Students in these environments experience a particular kind of achievement
              pressure: high standards, global competition benchmarks, and family expectations that
              create anxiety, perfectionism, and social comparison as constant undercurrents. Life
              skills training for Gurgaon students provides the emotional regulation, communication
              confidence, and identity foundation that enables sustainable academic performance —
              rather than anxiety-driven achievement that collapses under real-world pressure. On-site
              school programs and online individual sessions both serve Gurgaon&rsquo;s student community.
            </p>
            <p>
              For Gurgaon&rsquo;s women — across corporate leadership, entrepreneurship, and domestic
              management — the city creates a unique intersection of opportunity and pressure. Women
              in Gurgaon&rsquo;s MNCs face gender dynamics, visibility challenges, and leadership double
              standards. Women who left careers to manage families in Gurgaon&rsquo;s residential communities
              face re-entry anxiety, loss of professional identity, and the need to rebuild confidence
              from within. The Self Mastery for Women program at Hidden Potential, led by{" "}
              <Link
                href="/about"
                className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
              >
                Supreet Kaur
              </Link>
              , serves both groups through a structured pathway that addresses the specific beliefs,
              patterns, and life contexts that Gurgaon women navigate — available online, with group
              community and individual pathway options.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — ALL PROGRAMS AVAILABLE IN GURGAON
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Available in Gurgaon</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              All Life Skills Programs and Services Available in Gurgaon
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Every Hidden Potential program is accessible for Gurgaon residents and organisations
              — through live online sessions for individuals, and on-site delivery for Gurgaon
              schools and corporate teams. Here is the complete range of life skills training in
              Gurgaon.
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
          SECTION 4 — AREAS WE SERVE IN GURGAON
          Background: Navy-light (#F3F0FF)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-navy-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Areas We Serve</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Life Skills Training Across Gurgaon and Gurugram
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Hidden Potential serves learners and organisations across Gurgaon&rsquo;s corporate
              districts, residential zones, schools, and startup hubs — through online sessions,
              on-site corporate workshops, and school delivery programs.
            </p>
          </div>

          {/* 6 area cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {gurgaonAreas.map((a) => (
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
          SECTION 5 — WHY HIDDEN POTENTIAL IN GURGAON
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Why Hidden Potential</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              What Makes Hidden Potential Different from Other Life Skills Providers in Gurgaon
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Gurgaon has corporate wellness vendors, motivational speakers, and LinkedIn coaches.
              Here is what makes Hidden Potential&rsquo;s structured approach to life skills training
              in Gurgaon produce fundamentally different and lasting results.
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
              Common Questions About Life Skills Training in Gurgaon
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
        style={{ background: "#0f0f1a" }}
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
            Begin Your Life Skills Journey in Gurgaon Today
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Life skills training in Gurgaon at Hidden Potential begins with a free 30-minute
            consultation — a structured conversation in which your goals, challenges, and
            developmental needs are assessed by Supreet Kaur. You receive a personalised program
            recommendation built around your specific situation: whether you are a Gurgaon
            professional seeking leadership presence and communication confidence, a student in
            Gurgaon&rsquo;s competitive schools building the inner foundation for long-term success,
            a woman in Gurgaon ready to rebuild identity and ambition, or an HR leader seeking a
            credible, documented, MSME registered life skills partner for your Gurgaon
            organisation. Online sessions require no commute. Corporate delivery comes to your
            Gurgaon office. Either way, the structured pathways, NLP integration, and documented
            progress that have transformed 5000+ lives across Delhi NCR are fully available to you.
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
              href="/locations/noida"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Noida
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
            Online across Gurgaon, Gurugram &amp; India
            <span className="mx-1 text-white/20">|</span>
            On-site at Gurgaon offices &amp; schools
            <span className="mx-1 text-white/20">|</span>
            <Link
              href="/locations/delhi"
              className="hover:text-white/50 transition-colors"
            >
              Delhi centre: Dwarka, Sector 19B
            </Link>
            <span className="mx-1 text-white/20">|</span>
            <Link
              href="/locations/noida"
              className="hover:text-white/50 transition-colors"
            >
              Noida
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

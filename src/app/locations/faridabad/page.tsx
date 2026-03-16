/**
 * LOCATION PAGE — FARIDABAD
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /locations/faridabad
 *
 * 7-section structure:
 *   Section 1  — HERO                   (dark gradient, H1, Lora italic, body para, 2 CTAs, trust signals)
 *   Section 2  — WHY FARIDABAD          (off-white, 3 explanatory paragraphs)
 *   Section 3  — ALL PROGRAMS           (white, 14 offering cards numbered 01–14)
 *   Section 4  — AREAS WE SERVE         (navy-light, 6 Faridabad area cards)
 *   Section 5  — WHY HIDDEN POTENTIAL   (off-white, 6 differentiator cards)
 *   Section 6  — FAQ                    (white, 6 Faridabad-specific Q&As)
 *   Section 7  — CTA                    (dark gradient, para, 2 CTAs, cross-sell, location line)
 *
 * Schemas: LocalBusiness + FAQPage + BreadcrumbList (all embedded as JSON-LD)
 */

import type { Metadata } from "next";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Life Skills Training in Faridabad | NLP Coaching & Programs | Hidden Potential" },
  description:
    "Life skills training in Faridabad. NLP coaching, student programs, confidence building, corporate workshops. Online & Dwarka centre. Supreet Kaur. 14+ years. 5000+ trained.",
  openGraph: {
    title:
      "Life Skills Training in Faridabad — Student Programs, NLP Coaching & Corporate Workshops",
    description:
      "Structured life skills programs for Faridabad students, women, and professionals. Online sessions, on-site school and corporate delivery across NIT, Sectors 14–21, and Ballabgarh. MSME registered.",
    type: "website",
    url: "https://hiddenpotentialskills.com/locations/faridabad",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/locations/faridabad",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Life Skills Training in Faridabad — Student Programs, NLP Coaching & Corporate Workshops",
    description:
      "Life skills training for Faridabad students, families & professionals. Online sessions, school programs, corporate workshops. NLP-based. MSME registered. 14+ years. 5000+ trained.",
  },
};

// ── Schema: LocalBusiness ─────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hidden Potential — Life Skills Training Faridabad",
  description:
    "Structured life skills training for Faridabad students, women, and professionals. Online individual sessions, on-site school programs, and corporate workshops across NIT, Sector 14–21, Ballabgarh, and Greater Faridabad. MSME registered.",
  url: "https://hiddenpotentialskills.com/locations/faridabad",
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
    { "@type": "City", name: "Faridabad" },
    { "@type": "Neighborhood", name: "NIT Faridabad" },
    { "@type": "Neighborhood", name: "Ballabgarh" },
    { "@type": "Neighborhood", name: "Sector 14 Faridabad" },
    { "@type": "City", name: "Greater Faridabad" },
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
      name: "Do you have a training centre in Faridabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our centre is at Dwarka, Delhi. Faridabad residents can access all programs via online sessions, which most Faridabad clients prefer. Corporate workshops and school programs are delivered on-site at Faridabad locations. The Dwarka centre is also accessible via the Faridabad–Gurugram Expressway.",
      },
    },
    {
      "@type": "Question",
      name: "What programs are popular with Faridabad residents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Student programs — An Enlightened Learner and Study Skills — are especially popular with Faridabad families given the competitive academic environment. Working professionals enroll in NLP Coaching, Stress Management, and Communication Skills. Schools in Faridabad have partnered with Hidden Potential for NEP 2020 aligned life skills programs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you conduct school programs in Faridabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We deliver school life skills programs at school premises across Faridabad including NIT, Sector 14 to 21, Ballabgarh, and surrounding areas. NEP 2020 aligned curriculum covering student workshops, teacher training, and parent engagement sessions.",
      },
    },
    {
      "@type": "Question",
      name: "Are corporate workshops available in Faridabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. On-site corporate delivery across Faridabad's industrial and commercial areas. Topics include team communication, stress management, leadership, and emotional intelligence. MSME registered for institutional billing.",
      },
    },
    {
      "@type": "Question",
      name: "How do online sessions work for Faridabad clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Same as all locations — live, interactive sessions via video call. Not pre-recorded. Same structured methodology, assessment process, and NLP techniques as in-person training at our Delhi centre. Many Faridabad families and professionals prefer online for convenience and time savings.",
      },
    },
    {
      "@type": "Question",
      name: "Is life skills training affordable for Faridabad families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer student pricing, family discounts, and EMI options. Programs are structured to be accessible. Faridabad families report that the confidence, communication, and study skills improvements their children gain are well worth the investment. Book a free consultation to discuss program options and pricing.",
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
      name: "Life Skills Training in Faridabad",
      item: "https://hiddenpotentialskills.com/locations/faridabad",
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const offerings = [
  {
    num: "01",
    title: "An Enlightened Learner — Student Program",
    desc: "The flagship structured life skills program for students aged 8 to 21 — the most requested program from Faridabad families. Available online and on-site at Faridabad schools. Three age-specific tracks (8 to 12, 13 to 16, 17 to 21) address the real pressures facing Faridabad students: board exam anxiety, confidence gaps in classroom participation, difficulty managing peer pressure, and the transition challenges from school to college and college to career. Pre and post assessment document every student's measurable progress.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore An Enlightened Learner →",
  },
  {
    num: "02",
    title: "Communication Mastery",
    desc: "Structured communication and leadership program for ages 8 to 65 — available online for Faridabad individuals and on-site for Faridabad schools and corporates. Addresses one of the most common developmental gaps among Faridabad students and young professionals: strong academic preparation but limited confidence in spoken communication, group discussions, and public presentation. Essential preparation for competitive examinations, college interviews, job placements, and professional advancement.",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery →",
  },
  {
    num: "03",
    title: "Self Mastery for Women",
    desc: "Holistic growth program for women aged 28 and above — available online for Faridabad residents. Designed for women navigating the intersection of family responsibility, personal ambition, and social expectation — a dynamic particularly familiar to women across Faridabad's diverse communities. Whether you are a homemaker ready to reclaim your identity, a working woman in Faridabad's industrial and commercial sector managing career and family, or a woman rebuilding after a personal transition, this structured program provides lasting change.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women →",
  },
  {
    num: "04",
    title: "Train the Trainer Certification",
    desc: "Become a certified life skills facilitator — available online for Faridabad educators, school counsellors, and aspiring trainers. Faridabad's growing private school sector and expanding industrial workforce create strong demand for qualified life skills trainers who can deliver NEP 2020 aligned programs in schools and corporate training initiatives in the manufacturing and services sector. 1-month or 3-month programs. MSME and Skill India certified.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification →",
  },
  {
    num: "05",
    title: "Art Therapy for Healing",
    desc: "Creative therapeutic pathway combining mindfulness, reflective journaling, and art-based expression — available online for Faridabad residents. No artistic skill required. Particularly effective for Faridabad students dealing with exam stress and academic performance anxiety, women navigating identity transitions, and individuals carrying emotional burdens without access to structured therapeutic support. Available as 1-month, 3-month, and 6-month programs.",
    linkHref: "/programs/art-therapy",
    linkLabel: "Explore Art Therapy for Healing →",
  },
  {
    num: "06",
    title: "NLP Coaching — Individual Sessions",
    desc: "Certified NLP coaching for belief restructuring, emotional reprogramming, and behavioural change — available online for Faridabad clients. Many Faridabad families investing in their children's academic coaching overlook the deeper belief patterns that determine performance: fear of failure, self-doubt, and fixed mindset. NLP coaching identifies and rewires these root patterns — producing improvements in confidence, focus, and emotional resilience that academic tutoring alone cannot deliver.",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching →",
  },
  {
    num: "07",
    title: "Confidence Building Program",
    desc: "Structured confidence development for Faridabad students, professionals, and women — available online. One of the most requested services from Faridabad families and individuals. Addresses the root beliefs and habitual thought patterns that create hesitation, social anxiety, fear of public speaking, and self-doubt. Uses NLP anchoring, reframing, and identity development techniques within a structured, assessed developmental pathway — not a one-day workshop.",
    linkHref: "/services/confidence-building",
    linkLabel: "Explore Confidence Building →",
  },
  {
    num: "08",
    title: "Communication Skills Training",
    desc: "Targeted communication skills development — available online for Faridabad individuals and on-site for schools and corporates. Covers verbal clarity, active listening, assertiveness, non-verbal communication, and professional expression. High demand among Faridabad students preparing for group discussions and personal interviews in college admissions and job placements, and among young professionals in Faridabad's manufacturing and services companies seeking career advancement.",
    linkHref: "/services/communication-skills",
    linkLabel: "Explore Communication Skills Training →",
  },
  {
    num: "09",
    title: "Study Skills & Memory Training",
    desc: "Smart study strategies, memory techniques, time management, and academic focus training — available online and at Faridabad school premises. Research-backed methods including mind mapping, spaced repetition, active recall, and distraction management. Directly relevant for students in Faridabad's CBSE schools preparing for board exams, students attending coaching institutes in NIT and Sector 16 who struggle to consolidate learning, and parents seeking proven study systems beyond rote memorisation.",
    linkHref: "/services/study-skills",
    linkLabel: "Explore Study Skills Training →",
  },
  {
    num: "10",
    title: "Stress Management Coaching",
    desc: "Structured stress management for Faridabad students, professionals, and women — available online and as on-site corporate workshops. Exam stress among Faridabad students, work pressure in Faridabad's industrial sector, and the daily cumulative stress of managing family and professional responsibilities without adequate support structures are all addressed through NLP-integrated techniques that produce measurable improvements in emotional regulation, not just temporary calm.",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management →",
  },
  {
    num: "11",
    title: "Emotional Intelligence Development",
    desc: "Science-backed emotional intelligence coaching — available online for Faridabad individuals and as team workshops for Faridabad organisations. Builds self-awareness, empathy, emotional regulation, and social skill. Particularly valuable for Faridabad parents who want to model healthy emotional intelligence for their children, teachers and school counsellors seeking evidence-based approaches to student wellbeing, and managers in Faridabad's industrial organisations building more productive team relationships.",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Explore Emotional Intelligence Coaching →",
  },
  {
    num: "12",
    title: "Goal Setting & Accountability",
    desc: "Structured goal-setting and accountability program — available online for Faridabad individuals. Particularly valuable for Faridabad students and young adults setting post-school direction, for women in Faridabad building personal ambitions alongside family responsibilities, and for professionals in Faridabad's industrial and commercial sector planning career transitions or business growth. Teaches specific planning frameworks and NLP-based motivation maintenance that make goals executable rather than aspirational.",
    linkHref: "/services/goal-setting",
    linkLabel: "Explore Goal Setting Workshop →",
  },
  {
    num: "13",
    title: "Career Guidance & Transition Coaching",
    desc: "Guidance for Faridabad individuals navigating career choices, transitions, or re-entry — available online. Career uncertainty is high among Faridabad's young adults choosing between engineering, management, and emerging fields, and among women re-entering the workforce after career breaks. Combines structured decision-making frameworks with NLP belief work to address the fear and confusion that block most people from making clear, committed career choices.",
    linkHref: "/services/career-guidance",
    linkLabel: "Explore Career Guidance →",
  },
  {
    num: "14",
    title: "Group Workshops & Corporate Programs",
    desc: "Interactive life skills workshops for Faridabad corporates, schools, industrial organisations, and community groups — delivered on-site across Faridabad. Workshop themes include communication, emotional intelligence, stress management, and leadership. Faridabad's large manufacturing, automotive, and industrial sector employs a significant workforce whose supervisors and managers benefit from communication and EI training. Fully customised after a needs assessment. MSME registered for institutional billing.",
    linkHref: "/services/workshops",
    linkLabel: "Explore Group Workshops →",
  },
];

const faridabadAreas = [
  {
    num: "01",
    title: "NIT Faridabad — New Industrial Township",
    desc: "NIT (New Industrial Township) is Faridabad's most densely populated residential and commercial zone — home to a large student population, working-class families, and first-generation college entrants. Life skills training in Faridabad for NIT residents focuses strongly on student confidence, communication development, and study skills — with online individual programs and on-site school delivery the most common access formats. The aspiration to break into competitive colleges and urban professional careers makes structured life skills development particularly impactful for NIT's student families.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore the Student Life Skills Program →",
  },
  {
    num: "02",
    title: "Sectors 14–21 — Residential Faridabad",
    desc: "Faridabad's planned residential sectors — Sector 14, 15, 16, 17, 21 and surrounding areas — house established middle-class families with strong educational aspirations for their children. This community generates significant demand for student life skills programs, study skills coaching, and confidence building. Parents in Sectors 14 to 21 frequently combine academic tuition with life skills training as they recognise that academic preparation alone is insufficient for competitive college admissions and professional placement.",
    linkHref: "/services/study-skills",
    linkLabel: "Explore Study Skills Training →",
  },
  {
    num: "03",
    title: "Ballabgarh & Old Faridabad",
    desc: "Ballabgarh and Old Faridabad are historically significant industrial and residential areas with a mix of long-established families and newer urban migrants. Students from Ballabgarh CBSE schools attending coaching institutes along the Delhi–Mathura road, women in Ballabgarh managing household and entrepreneurial responsibilities, and workers in Ballabgarh's manufacturing units whose supervisors need communication and leadership development — all access Hidden Potential's life skills training in Faridabad through online programs and on-site school and corporate delivery.",
  },
  {
    num: "04",
    title: "Faridabad Schools & Educational Institutions",
    desc: "Hidden Potential delivers on-site life skills programs at CBSE and private school campuses across Faridabad — from NIT schools to Sector 14 institutions to Ballabgarh's educational establishments. NEP 2020 aligned curriculum covering student workshops, teacher development sessions, and parent engagement programs. School partnership programs are structured as semester-long or annual engagements — not one-day events. Institutional documentation and assessment reports are standard. Contact us to schedule a school needs assessment.",
    linkHref: "/contact",
    linkLabel: "Enquire about school programs in Faridabad →",
  },
  {
    num: "05",
    title: "Faridabad Corporates & Industrial Sector",
    desc: "Faridabad's large industrial sector — spanning automotive, manufacturing, textiles, and engineering — employs a significant workforce that benefits from structured communication, stress management, and leadership development programs. Supervisors and mid-level managers in Faridabad's factories and industrial parks frequently lack access to the kind of behavioural skills training that drives team performance. Hidden Potential delivers on-site corporate workshops customised for Faridabad's industrial culture and workforce dynamics.",
    linkHref: "/services/workshops",
    linkLabel: "Explore Corporate Workshops →",
  },
  {
    num: "06",
    title: "Greater Faridabad & Palwal Border",
    desc: "Greater Faridabad's rapidly expanding residential and commercial development — including Neharpar, Surajkund, Pali Road, and areas near the Palwal border — is home to a growing population of families who have relocated from central Faridabad and nearby districts. This community's access to quality life skills training is primarily online, making Hidden Potential's comprehensive online programs the most practical format. Student programs and individual coaching are both highly accessible for Greater Faridabad residents.",
    linkHref: "/contact",
    linkLabel: "Book a consultation for Greater Faridabad →",
  },
];

const differentiators = [
  {
    title: "Bringing Quality Life Skills Training to Faridabad",
    desc: "Faridabad is underserved by quality structured life skills development compared to Delhi and Gurgaon — despite having a large, aspirational student population and a significant working professional base. Hidden Potential's online programs deliver the same NLP-based, assessment-led, structured methodology to Faridabad families that Delhi's most sought-after learners receive — without requiring a commute to the capital.",
  },
  {
    title: "Student-First, Family-Oriented Approach",
    desc: "Faridabad families investing in their children's futures understand the difference between academic tutoring and whole-person development. Hidden Potential's student programs are built around the real challenges Faridabad students face — exam anxiety, communication hesitation, peer pressure, and identity confusion — and address them through structured, assessed, NLP-integrated pathways that produce documented improvement across confidence, communication, and emotional regulation.",
  },
  {
    title: "Accessible Pricing — EMI & Family Options",
    desc: "Life skills training at Hidden Potential is designed to be accessible for Faridabad families. Student pricing, family discounts, group rates, and EMI options are available. Corporate programs and school partnerships use institutional billing. The investment in structured life skills development delivers measurable returns in confidence, academic performance, and career readiness — returns that compound across years, not sessions.",
  },
  {
    title: "On-Site School & Corporate Delivery",
    desc: "For Faridabad schools and organisations that need in-person delivery, Hidden Potential travels to your campus or office. School programs across Faridabad's NIT, Sector 14 to 21, and Ballabgarh institutions are delivered on-site — eliminating student travel and enabling whole-school implementation. Corporate workshops at Faridabad's industrial and commercial organisations are customised to the specific workforce and leadership context.",
  },
  {
    title: "NEP 2020 Aligned for Faridabad Schools",
    desc: "Hidden Potential's school programs align with India's National Education Policy 2020 life skills mandate — providing Faridabad CBSE and private schools with a credentialed, assessed, and documented curriculum partner. MSME registered and Skill India affiliated, Hidden Potential provides the institutional documentation that school administrators require for formal program partnerships and compliance reporting.",
  },
  {
    title: "14+ Years — Tested, Not New",
    desc: "Supreet Kaur has been delivering structured life skills training to learners across Delhi NCR — including Faridabad families — for over 14 years. With 5000+ individuals trained and 200+ certified trainers developed, Hidden Potential is not a new coaching startup trying to establish credibility in Faridabad. It is a mature, tested, award-winning educational institution with a deep track record of documented student and professional transformation.",
  },
];

const faqs = [
  {
    q: "Do you have a training centre in Faridabad?",
    a: "Our centre is at Dwarka, Delhi. Faridabad residents can access all programs via online sessions, which most Faridabad clients prefer. Corporate workshops and school programs are delivered on-site at Faridabad locations. The Dwarka centre is also accessible via the Faridabad–Gurugram Expressway.",
  },
  {
    q: "What programs are popular with Faridabad residents?",
    a: "Student programs — An Enlightened Learner and Study Skills — are especially popular with Faridabad families given the competitive academic environment. Working professionals enroll in NLP Coaching, Stress Management, and Communication Skills. Schools in Faridabad have partnered with Hidden Potential for NEP 2020 aligned life skills programs.",
  },
  {
    q: "Do you conduct school programs in Faridabad?",
    a: "Yes. We deliver school life skills programs at school premises across Faridabad including NIT, Sector 14 to 21, Ballabgarh, and surrounding areas. NEP 2020 aligned curriculum covering student workshops, teacher training, and parent engagement sessions.",
  },
  {
    q: "Are corporate workshops available in Faridabad?",
    a: "Yes. On-site corporate delivery across Faridabad's industrial and commercial areas. Topics include team communication, stress management, leadership, and emotional intelligence. MSME registered for institutional billing.",
  },
  {
    q: "How do online sessions work for Faridabad clients?",
    a: "Same as all locations — live, interactive sessions via video call. Not pre-recorded. Same structured methodology, assessment process, and NLP techniques as in-person training at our Delhi centre. Many Faridabad families and professionals prefer online for the convenience it provides.",
  },
  {
    q: "Is life skills training affordable for Faridabad families?",
    a: "Yes. We offer student pricing, family discounts, and EMI options. Programs are structured to be accessible. Faridabad families report that the confidence, communication, and study skills improvements their children gain are well worth the investment. Book a free consultation to discuss program options and pricing in detail.",
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
export default function FaridabadLocationPage() {
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
              Available in Faridabad
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Life Skills Training in Faridabad — Student Programs, NLP Coaching &amp; Corporate Workshops
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
            Faridabad&rsquo;s students, families and professionals deserve structured growth — not just motivation.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            Hidden Potential delivers structured, assessment-based life skills training in Faridabad
            through live online sessions for individuals and on-site school and corporate programs
            across NIT, Sectors 14 to 21, Ballabgarh, and Greater Faridabad. Founded and led by{" "}
            <Link
              href="/about"
              className="text-white/80 font-semibold hover:text-white transition-colors"
            >
              Supreet Kaur
            </Link>{" "}
            — certified NLP practitioner, Masters in Psychology, Josh Talks speaker, and
            award-winning educator — our Faridabad programs are particularly sought after by
            families investing in their children&rsquo;s confidence, communication, and academic
            resilience. Alongside student programs, we serve working professionals in Faridabad&rsquo;s
            industrial and commercial sector, women rebuilding personal identity and ambition, and
            organisations seeking credible, MSME registered life skills training partnerships.
            Student pricing, family discounts, and EMI options make structured life skills
            training in Faridabad genuinely accessible.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="btn-premium-fill"
            >
              Book a Free Consultation
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </Link>
            <Link
              href="/enroll"
              className="btn-premium-ghost-plain"
            >
              Enroll in a Program
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "Online for Faridabad",
              "On-Site School Delivery",
              "14+ Years Experience",
              "Student & Family Pricing",
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
          SECTION 2 — WHY FARIDABAD NEEDS LIFE SKILLS TRAINING
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Why Faridabad Needs This</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 leading-tight max-w-2xl">
            Why Life Skills Training Matters for Faridabad Students, Families and Professionals
          </h2>

          <div className="flex flex-col gap-6 text-base text-charcoal leading-relaxed">
            <p>
              Faridabad is one of Haryana&rsquo;s largest and most industrially significant cities —
              a place where ambition runs high, families invest deeply in education, and the
              aspiration to achieve a better life drives enormous effort among students and young
              adults. Yet Faridabad&rsquo;s educational ecosystem, for all its coaching institutes, CBSE
              schools, and competitive preparation culture, largely overlooks the inner dimensions
              of development that determine whether academic achievement translates into real-world
              success. Students in Faridabad&rsquo;s NIT schools, Sector 14 coaching centres, and
              Ballabgarh institutions consistently demonstrate the gap between academic knowledge
              and life readiness — confident on paper, hesitant in person. Articulate in their
              mother tongue, uncertain in group discussions and interviews. Hardworking in
              isolation, underprepared for the collaborative, communication-intensive environments
              of colleges and workplaces. Life skills training in Faridabad addresses this gap
              directly and measurably — building the communication confidence, emotional
              regulation, and self-awareness that convert academic effort into life outcomes.
            </p>
            <p>
              For Faridabad&rsquo;s working population — spread across the city&rsquo;s large industrial
              sector, commercial establishments, and growing services economy — structured
              development opportunities have historically been limited compared to what Delhi and
              Gurgaon professionals access. Supervisors and managers in Faridabad&rsquo;s automotive,
              manufacturing, and engineering companies often possess deep technical competence but
              limited communication clarity, emotional regulation, or leadership presence — gaps
              that directly constrain their career growth and their teams&rsquo; effectiveness. Online
              life skills coaching and on-site corporate workshops bring Delhi NCR-quality
              structured development to Faridabad&rsquo;s professional community without the commute
              or cost barriers of travelling to the capital. MSME registration ensures Faridabad
              organisations receive institutional documentation for formal procurement and billing.
            </p>
            <p>
              For women in Faridabad — managing households, raising children, pursuing careers, or
              rebuilding personal ambition after years of secondary priority — Hidden Potential&rsquo;s
              Self Mastery for Women program offers a structured, NLP-based pathway that addresses
              the specific belief patterns and identity constraints that limit growth. Faridabad&rsquo;s
              women come from diverse backgrounds and life situations, but share a common thread:
              real capability suppressed by conditioning, habit, and lack of structured support.{" "}
              <Link
                href="/about"
                className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
              >
                Supreet Kaur
              </Link>
              &rsquo;s approach — rooted in psychology, NLP, and 14+ years of direct work with women
              across Delhi NCR — is designed to meet Faridabad women where they are and build
              from there, through online group sessions and individual pathways that work around
              real-life schedules and responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — ALL PROGRAMS AVAILABLE IN FARIDABAD
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Available in Faridabad</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              All Life Skills Programs and Services Available in Faridabad
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Every Hidden Potential program is accessible for Faridabad residents — through live
              online sessions for individuals and on-site delivery for Faridabad schools and
              corporates. Here is the complete range of life skills training in Faridabad.
            </p>
          </div>

          {/* 14 offering cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {offerings.map((o) => (
              <div
                key={o.num}
                className="card-service"
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
          SECTION 4 — AREAS WE SERVE IN FARIDABAD
          Background: Navy-light (#F3F0FF)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-navy-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Areas We Serve</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Life Skills Training Across All Areas of Faridabad
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Hidden Potential serves learners and organisations across Faridabad — from NIT and
              the residential sectors to Ballabgarh, Greater Faridabad, and the industrial zone.
              Online delivery means no commute for individuals. On-site means we travel to your
              school or office.
            </p>
          </div>

          {/* 6 area cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {faridabadAreas.map((a) => (
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
          SECTION 5 — WHY HIDDEN POTENTIAL IN FARIDABAD
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Why Hidden Potential</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              What Makes Hidden Potential Different from Other Life Skills Providers in Faridabad
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Faridabad has tuition centres, coaching institutes, and motivational speakers.
              Here is what makes Hidden Potential&rsquo;s structured approach to life skills training
              in Faridabad produce fundamentally different and lasting outcomes.
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
              Common Questions About Life Skills Training in Faridabad
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
            Begin Your Life Skills Journey in Faridabad Today
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Life skills training in Faridabad at Hidden Potential begins with a free 30-minute
            consultation — a structured conversation with Supreet Kaur in which your goals,
            challenges, and developmental needs are assessed and a personalised program
            recommendation is provided. Whether you are a Faridabad parent seeking structured
            confidence and communication development for your child, a professional in
            Faridabad&rsquo;s industrial sector building leadership presence, a woman in Faridabad
            ready to invest in your own growth, or a school administrator seeking a credible,
            NEP 2020 aligned life skills partner — the structured pathways, NLP integration,
            and documented progress of Hidden Potential are fully available in Faridabad. Online
            sessions are live, convenient, and identical in quality to in-person training.
            On-site school and corporate delivery brings the program directly to you. Student
            pricing and EMI options ensure accessibility. Your transformation starts with one
            conversation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="btn-premium-fill"
            >
              Book a Free Consultation
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </Link>
            <Link
              href="/enroll"
              className="btn-premium-ghost-plain"
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
              href="/locations/gurgaon"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Gurgaon
            </Link>
            {" "}— structured life skills programs across Delhi NCR
          </p>

          {/* Location line */}
          <p className="text-[11px] text-white/30 leading-relaxed">
            Online across Faridabad, Ballabgarh &amp; India
            <span className="mx-1 text-white/20">|</span>
            On-site at Faridabad schools &amp; corporate offices
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
              href="/locations/gurgaon"
              className="hover:text-white/50 transition-colors"
            >
              Gurgaon
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

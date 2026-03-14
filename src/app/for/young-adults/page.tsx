/**
 * AUDIENCE PAGE — LIFE SKILLS TRAINING FOR YOUNG ADULTS
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /for/young-adults
 *
 * 7-section structure:
 *   Section 1  — HERO                       (dark gradient, H1, Lora italic, body, 2 CTAs, trust signals)
 *   Section 2  — THE REAL CHALLENGE         (off-white, intro + 6 pain-point cards)
 *   Section 3  — RECOMMENDED PROGRAMS       (white, id="programs", 8 program cards 01–08)
 *   Section 4  — WHO SPECIFICALLY BENEFITS  (navy-light, 6 persona cards)
 *   Section 5  — WHY HIDDEN POTENTIAL       (off-white, 6 differentiator cards)
 *   Section 6  — FAQ                        (white, 6 Q&As)
 *   Section 7  — FINAL CTA                  (dark gradient, para, 2 CTAs, cross-sell, location line)
 *
 * Schemas: Service + FAQPage + BreadcrumbList (all embedded as JSON-LD)
 */

import type { Metadata } from "next";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Life Skills Training for Young Adults in Delhi | College & Graduates | Hidden Potential" },
  description:
    "Life skills training for young adults, college students, and recent graduates in Delhi NCR. Confidence building, communication skills, career guidance, NLP coaching. Supreet Kaur. 14+ years. Dwarka & online.",
  openGraph: {
    title:
      "Life Skills for Young Adults in Delhi — Build the Skills College Doesn\u2019t Teach",
    description:
      "Confidence, communication, career clarity, emotional intelligence for 18-25 year olds in Delhi, Noida, Gurgaon, Faridabad. NLP-based. Harvard-affiliated methodology.",
    type: "website",
    url: "https://hiddenpotentialskills.com/for/young-adults",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Skills for Young Adults in Delhi | Hidden Potential",
    description:
      "Confidence, communication, career guidance for college students and graduates. Delhi NCR. NLP-based. 14+ years.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/for/young-adults",
  },
};

// ── Schema: Service ───────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Life Skills Training for Young Adults in Delhi",
  description:
    "Confidence building, communication skills, career guidance, NLP coaching, and emotional intelligence for college students and young professionals aged 18 to 25 in Delhi NCR.",
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
  serviceType: "Youth Life Skills Training",
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
      name: "What age group is this program designed for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our young adults programs are designed for individuals aged 18 to 25 — college students, final-year students preparing for careers, recent graduates navigating their first jobs, and young professionals in their early career years. The content, examples, and exercises are contextualised for the challenges this age group faces in Delhi NCR: competitive academic environments, campus placement pressure, first-job anxiety, and the transition from student to professional identity.",
      },
    },
    {
      "@type": "Question",
      name: "I am a college student. Will this help with campus placements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Campus placement success depends heavily on communication skills, confidence in group discussions and interviews, and the ability to articulate your value clearly under pressure. Our programs specifically develop these capabilities using NLP-based techniques — confidence anchoring for interview situations, cognitive reframing for rejection and feedback, and structured communication frameworks for group discussions. Students across Delhi University, IP University, Amity, and colleges in Noida and Gurgaon have used these tools for placement preparation.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from personality development classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most personality development courses focus on surface-level grooming — how to dress, how to shake hands, how to make eye contact. These are useful but superficial. Hidden Potential\u2019s programs work at the behavioural and belief level using NLP techniques. We identify the specific limiting beliefs and patterns that create your self-doubt, communication anxiety, or career confusion — and systematically rewire them. The change is internal and lasting, not cosmetic.",
      },
    },
    {
      "@type": "Question",
      name: "Can I attend while studying full-time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer evening and weekend batches specifically for students. Online sessions are available for students across Delhi, Noida, Gurgaon, and Faridabad who cannot travel to our Dwarka centre. Individual NLP coaching sessions are scheduled flexibly around your academic commitments. Many students attend alongside college without any conflict.",
      },
    },
    {
      "@type": "Question",
      name: "What do young adults actually learn in these programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depending on the program you choose, you will develop: genuine self-confidence (not performed confidence), clear and persuasive communication, emotional regulation under academic and social pressure, structured goal-setting and career planning, interview and group discussion skills, stress management techniques for exams and deadlines, and self-awareness of the belief patterns that have been limiting your growth. All taught through NLP-based techniques with structured practice.",
      },
    },
    {
      "@type": "Question",
      name: "How much does life skills training cost for young adults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer special pricing for students and young adults. EMI options are available for longer programs. Group discounts apply when enrolling with friends or classmates. Pricing varies by program and format — submit an enrollment form or contact us for detailed pricing within 24 hours. We believe life skills training should be accessible for young people building their futures.",
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
      name: "Life Skills for Young Adults",
      item: "https://hiddenpotentialskills.com/for/young-adults",
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const painPoints = [
  {
    num: "01",
    title: "College Taught You Subjects, Not Skills",
    desc: "You can solve equations, write essays, and pass exams. But can you walk into a room of strangers and introduce yourself with confidence? Can you handle a group discussion without freezing? Can you articulate what makes you valuable in 60 seconds? The gap between academic knowledge and real-world capability is where most young adults in Delhi NCR struggle — and it is exactly what life skills training fills.",
  },
  {
    num: "02",
    title: "You Know What You Should Do, But You Cannot Make Yourself Do It",
    desc: "You know you should speak up in class. You know you should network. You know you should start preparing for your career. But something holds you back — self-doubt, fear of judgement, perfectionism, or simple overwhelm. These are not motivation problems. They are belief patterns, and NLP coaching provides the tools to identify and rewire them.",
  },
  {
    num: "03",
    title: "Campus Placement Pressure Is Crushing",
    desc: "Group discussions, technical rounds, HR interviews, rejection emails — the placement season is one of the most stressful periods of a young adult\u2019s life. Most students prepare only the technical content and ignore the behavioural skills that actually determine success: confidence under pressure, communication clarity, and emotional composure. Students in Delhi, Noida, and Gurgaon face especially fierce competition.",
  },
  {
    num: "04",
    title: "Social Anxiety and Self-Doubt Are Holding You Back",
    desc: "Avoiding social situations. Overthinking every interaction. Comparing yourself to peers who seem effortlessly confident. Social anxiety among young adults in Delhi NCR is more common than most people realise — and it directly impacts academic performance, career opportunities, and personal relationships. NLP-based confidence building addresses the root belief patterns, not just the symptoms.",
  },
  {
    num: "05",
    title: "You Have No Idea What Career Path to Choose",
    desc: "Family expectations, peer pressure, market trends, and your own confused interests create a paralysing fog of career indecision. Career guidance at Hidden Potential goes beyond aptitude tests — it uses NLP techniques to help you understand what you actually value, what energises you, and what career direction aligns with your authentic strengths.",
  },
  {
    num: "06",
    title: "You Are About to Enter the Workforce and Feel Unprepared",
    desc: "The transition from college to corporate is jarring. Workplace communication, professional relationships, managing authority figures, handling feedback, navigating office dynamics — none of this is taught in college. Life skills training bridges this gap so you enter your career with the behavioural toolkit that most professionals take years to develop on their own.",
  },
];

const recommendedPrograms = [
  {
    num: "01",
    title: "An Enlightened Learner — The Signature Student Program",
    desc: "Supreet Kaur\u2019s flagship program, originally designed for students aged 10 to 18 but with advanced modules for college-age learners. Comprehensive life skills covering confidence, communication, emotional intelligence, study techniques, goal setting, and exam resilience through NLP-based methods. The most complete starting point for young adults.",
    match: "Best for: College students seeking comprehensive personal development",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore the Signature Program \u2192",
  },
  {
    num: "02",
    title: "Communication Mastery",
    desc: "8 to 12 weeks of structured communication development: public speaking, group discussion skills, presentation delivery, assertiveness, active listening, and NLP language patterns. Directly applicable to campus placements, interviews, and early career success.",
    match: "Best for: Students preparing for placements, those with public speaking anxiety",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery \u2192",
  },
  {
    num: "03",
    title: "Confidence Building Program",
    desc: "Structured confidence development using NLP anchoring, belief mapping, and progressive exposure. Not motivational speeches — practical tools that build genuine self-assurance through repeated structured practice. Particularly valuable for young adults dealing with social anxiety, imposter syndrome, or chronic self-doubt.",
    match: "Best for: Young adults with self-doubt, social anxiety, or low self-esteem",
    linkHref: "/services/confidence-building",
    linkLabel: "Explore Confidence Building \u2192",
  },
  {
    num: "04",
    title: "Career Guidance & Planning",
    desc: "Career clarity through structured assessment, NLP-based values exploration, aptitude mapping, and career path planning. Goes beyond generic advice to help you understand your authentic strengths and design a career direction that fits. Includes interview preparation and professional branding.",
    match: "Best for: Final-year students, graduates unsure about career direction",
    linkHref: "/services/career-guidance",
    linkLabel: "Explore Career Guidance \u2192",
  },
  {
    num: "05",
    title: "Study Skills & Learning Techniques",
    desc: "Memory techniques, focus strategies, exam preparation methods, time management, and note-taking systems. Particularly effective for students dealing with information overload, competitive exam preparation, or academic underperformance despite effort.",
    match: "Best for: Students struggling academically, competitive exam aspirants",
    linkHref: "/services/study-skills",
    linkLabel: "Explore Study Skills \u2192",
  },
  {
    num: "06",
    title: "Stress Management",
    desc: "NLP-based techniques for managing exam stress, social pressure, career anxiety, and the overwhelming pace of young adult life in Delhi NCR. Learn emotional state management tools you can use before exams, interviews, and high-pressure social situations.",
    match: "Best for: Students dealing with exam anxiety, academic pressure, or burnout",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management \u2192",
  },
  {
    num: "07",
    title: "Emotional Intelligence",
    desc: "Self-awareness, empathy, emotional regulation, and relationship skills. Essential for navigating friendships, romantic relationships, family dynamics, and early workplace interactions. Builds the emotional maturity that distinguishes young adults who thrive from those who merely survive.",
    match: "Best for: Young adults seeking emotional maturity and better relationships",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Explore Emotional Intelligence \u2192",
  },
  {
    num: "08",
    title: "NLP Coaching — Individual Sessions",
    desc: "One-on-one behavioural transformation with Supreet Kaur. For young adults with specific challenges — deep-rooted self-doubt, anxiety patterns, relationship issues, or identity confusion — individual NLP coaching provides personalised attention that group programs cannot match.",
    match: "Best for: Young adults with specific personal challenges needing individual attention",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching \u2192",
  },
];

const personas = [
  {
    num: "01",
    title: "College Students Preparing for Campus Placements",
    desc: "Students at Delhi University, IP University, Amity, Jamia, JNU, and colleges across Noida and Gurgaon. Communication mastery and confidence building are the two most impactful programs for placement preparation — group discussions, HR interviews, and technical rounds all require behavioural skills that most students never develop.",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery \u2192",
  },
  {
    num: "02",
    title: "Recent Graduates Entering the Workforce",
    desc: "The transition from college to corporate is one of the most challenging periods. Life skills training bridges the gap between academic preparation and professional readiness. NLP coaching helps you manage the anxiety and build workplace confidence from day one.",
    linkHref: "/services/confidence-building",
    linkLabel: "Explore Confidence Building \u2192",
  },
  {
    num: "03",
    title: "Young Adults Dealing with Social Anxiety",
    desc: "If social situations feel overwhelming, if self-doubt is constant, if you avoid opportunities because of fear — NLP-based confidence building addresses the root belief patterns creating these responses. Change is structured, gradual, and lasting.",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching \u2192",
  },
  {
    num: "04",
    title: "Students Confused About Career Direction",
    desc: "Family wants engineering. Friends are doing MBA. You have no idea what you actually want. Career guidance at Hidden Potential uses NLP techniques to cut through the noise and help you find clarity based on your authentic values and strengths.",
    linkHref: "/services/career-guidance",
    linkLabel: "Explore Career Guidance \u2192",
  },
  {
    num: "05",
    title: "Competitive Exam Aspirants",
    desc: "UPSC, CAT, GATE, CLAT — competitive exam preparation is as much about mental resilience and emotional management as it is about content. Study skills, stress management, and confidence anchoring give you the psychological edge that separates top performers from the rest.",
    linkHref: "/services/study-skills",
    linkLabel: "Explore Study Skills \u2192",
  },
  {
    num: "06",
    title: "Young Women Building Professional Identity",
    desc: "Young women in Delhi NCR navigating career aspirations alongside social expectations, safety concerns, and confidence challenges. Self Mastery for Women combined with communication training builds both professional capability and personal empowerment.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women \u2192",
  },
];

const differentiators = [
  {
    title: "Designed for Your Age, Not Diluted for It",
    desc: "Our young adults programs use real-world scenarios relevant to 18 to 25 year olds — campus placements, first jobs, social dynamics, career confusion, family expectations. The NLP techniques are the same used with senior professionals, but the application context is entirely yours.",
  },
  {
    title: "NLP-Based, Not Motivational Fluff",
    desc: "You have watched enough motivational videos on YouTube. Hidden Potential uses NLP-based techniques — confidence anchoring, belief restructuring, cognitive reframing — that produce neurological changes, not temporary emotional highs. The tools work because they change patterns at the subconscious level.",
  },
  {
    title: "Created by Someone Who Has Trained 5000+ Learners",
    desc: "Supreet Kaur, creator of the An Enlightened Learner program, has spent 14+ years training students and young adults across Delhi NCR. Her Harvard-affiliated Life Skills certification, NLP training, and Masters in Psychology inform every module. This is experienced mentorship, not a first-time workshop.",
  },
  {
    title: "Affordable with Student-Friendly Pricing",
    desc: "Special pricing for students and young adults. EMI options for longer programs. Group discounts when you enroll with classmates or friends. We believe financial constraints should not prevent young people in Delhi NCR from accessing transformational life skills training.",
  },
  {
    title: "Online Access from Any College or City",
    desc: "Fully online programs available for students across Delhi University, IP University, Amity, Noida, Gurgaon, Greater Noida, and beyond. Live interactive sessions, not pre-recorded content. Same structured methodology as in-person training at our Dwarka centre.",
  },
  {
    title: "Assessment-Based and Measurable",
    desc: "Start with a structured pre-assessment. End with documented progress. You do not have to guess whether the training worked — confidence, communication, emotional regulation, and goal clarity improvements are tracked and visible.",
  },
];

const faqs = [
  {
    q: "What age group is this program designed for?",
    a: "Our young adults programs are designed for individuals aged 18 to 25 — college students, final-year students preparing for careers, recent graduates navigating their first jobs, and young professionals in their early career years. The content, examples, and exercises are contextualised for the challenges this age group faces in Delhi NCR: competitive academic environments, campus placement pressure, first-job anxiety, and the transition from student to professional identity.",
  },
  {
    q: "I am a college student. Will this help with campus placements?",
    a: "Yes. Campus placement success depends heavily on communication skills, confidence in group discussions and interviews, and the ability to articulate your value clearly under pressure. Our programs specifically develop these capabilities using NLP-based techniques — confidence anchoring for interview situations, cognitive reframing for rejection and feedback, and structured communication frameworks for group discussions. Students across Delhi University, IP University, Amity, and colleges in Noida and Gurgaon have used these tools for placement preparation.",
  },
  {
    q: "How is this different from personality development classes?",
    a: "Most personality development courses focus on surface-level grooming — how to dress, how to shake hands, how to make eye contact. These are useful but superficial. Hidden Potential\u2019s programs work at the behavioural and belief level using NLP techniques. We identify the specific limiting beliefs and patterns that create your self-doubt, communication anxiety, or career confusion — and systematically rewire them. The change is internal and lasting, not cosmetic.",
  },
  {
    q: "Can I attend while studying full-time?",
    a: "Yes. We offer evening and weekend batches specifically for students. Online sessions are available for students across Delhi, Noida, Gurgaon, and Faridabad who cannot travel to our Dwarka centre. Individual NLP coaching sessions are scheduled flexibly around your academic commitments. Many students attend alongside college without any conflict.",
  },
  {
    q: "What do young adults actually learn in these programs?",
    a: "Depending on the program you choose, you will develop: genuine self-confidence (not performed confidence), clear and persuasive communication, emotional regulation under academic and social pressure, structured goal-setting and career planning, interview and group discussion skills, stress management techniques for exams and deadlines, and self-awareness of the belief patterns that have been limiting your growth. All taught through NLP-based techniques with structured practice.",
  },
  {
    q: "How much does life skills training cost for young adults?",
    a: "We offer special pricing for students and young adults. EMI options are available for longer programs. Group discounts apply when enrolling with friends or classmates. Pricing varies by program and format — submit an enrollment form or contact us for detailed pricing within 24 hours. We believe life skills training should be accessible for young people building their futures.",
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
export default function ForYoungAdultsPage() {
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
              For Young Adults &amp; Students
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Life Skills Training for Young Adults in Delhi — Build What College Does Not Teach
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
            Your degree opens doors. Life skills determine what happens after you walk through them.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            College teaches subjects. It rarely teaches confidence. Communication. Emotional
            intelligence. Career clarity. The ability to handle pressure, connect with people, and
            know what you actually want from life. These are the skills that determine whether
            your degree translates into a life you are proud of — or a decade of figuring it out
            the hard way. Hidden Potential&rsquo;s life skills training for young adults in Delhi
            NCR uses NLP-based techniques developed by{" "}
            <Link
              href="/about"
              className="font-semibold text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              Supreet Kaur
            </Link>
            , creator of the An Enlightened Learner program. 14+ years, Harvard-affiliated Life
            Skills certification, 5000+ individuals trained across Delhi NCR. Available at our
            Dwarka centre and online for students across Delhi, Noida, Gurgaon, and Faridabad.
            Student-friendly pricing and evening or weekend scheduling around your college
            timetable.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Explore Programs Below
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
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/5 rounded-md transition-colors"
            >
              Book a Free Call
            </Link>
          </div>

          {/* Trust signals — 5 items */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "14+ Years Experience",
              "5000+ Trained",
              "NLP & Harvard Certified",
              "Student Pricing Available",
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
          SECTION 2 — THE REAL CHALLENGE
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>The Real Challenge</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Why Smart, Capable Young Adults in Delhi NCR Still Struggle
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              The problem is not intelligence. It is not effort. Most young adults in Delhi NCR
              work incredibly hard — but the behavioural skills that actually determine success in
              life and career are never part of any curriculum. Here are the challenges we see
              most often among young adults seeking life skills training in Delhi.
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
      <section id="programs" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Programs for Young Adults</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Life Skills Programs Designed for Young Adults in Delhi NCR
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Based on 14+ years of training students and young adults across Delhi, Noida,
              Gurgaon, and Faridabad, these are the programs most relevant to your age group and
              goals. Each can be taken independently or combined into a structured development
              pathway.
            </p>
          </div>

          {/* 8 program cards — 2-column grid, technique card style */}
          <div className="grid md:grid-cols-2 gap-5">
            {recommendedPrograms.map((p) => (
              <div
                key={p.num}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                {/* Teal header bar */}
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
              Which Young Adults in Delhi NCR Benefit Most?
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Life skills training for young adults at Hidden Potential serves a wide range of
              situations — from placement-season college students to recent graduates navigating
              their first job, from competitive exam aspirants to young women building their
              professional identity in Delhi NCR.
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
              What Makes Hidden Potential Different for Young Adults in Delhi
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Delhi NCR has no shortage of personality development institutes, coaching classes,
              and motivational trainers. Here is what makes Hidden Potential&rsquo;s approach
              produce deeper, more lasting results for young adults.
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
              Common Questions from Students and Young Adults
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
            The Skills You Build Now Will Define the Next Decade of Your Life
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            You are at the most important inflection point of your life. The confidence,
            communication ability, emotional intelligence, and career clarity you develop between
            18 and 25 will compound for the next 40 years of your professional and personal life.
            Most young adults wait until they are 35 to wish they had built these skills earlier.
            You do not have to. Supreet Kaur and the Hidden Potential team have spent 14+ years
            helping young adults across Delhi, Noida, Gurgaon, and Faridabad build the behavioural
            foundation for extraordinary lives. Student-friendly pricing and flexible online
            scheduling make starting easier than you think.
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
              href="/for/professionals"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Life Skills Training for Professionals
            </Link>{" "}
            — for early-career professionals ready for the next level
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

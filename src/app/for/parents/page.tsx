/**
 * AUDIENCE PAGE - LIFE SKILLS PROGRAMS FOR PARENTS OF CHILDREN AGED 8–21
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /for/parents
 *
 * 7-section structure:
 *   Section 1  - HERO                       (dark gradient, H1, Lora italic, body, 2 CTAs, trust signals)
 *   Section 2  - THE PARENT'S CONCERN       (off-white, intro + 6 pain-point cards)
 *   Section 3  - RECOMMENDED PROGRAMS       (white, 8 program cards numbered 01–08)
 *   Section 4  - WHO SPECIFICALLY BENEFITS  (navy-light, 6 persona cards)
 *   Section 5  - WHY HIDDEN POTENTIAL       (off-white, 6 differentiator cards)
 *   Section 6  - FAQ                        (white, 6 Q&As)
 *   Section 7  - FINAL CTA                  (dark gradient, para, 2 CTAs, cross-sell, location line)
 *
 * Schemas: Service + FAQPage + BreadcrumbList (all embedded as JSON-LD)
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Life Skills Programs for Children in Delhi | For Parents | Hidden Potential" },
  description:
    "Life skills programs for children aged 8 to 21 in Delhi NCR. Help your child build confidence, manage stress, and develop emotional intelligence. NLP-based. 14+ years. Supreet Kaur. Dwarka & online.",
  openGraph: {
    title: "Life Skills Programs for Children in Delhi - Give Your Child the Skills School Never Taught",
    description:
      "An Enlightened Learner, art therapy, study skills, and confidence programs for children 8–21 in Delhi, Noida, Gurgaon. NLP-based. 5000+ students. 14+ years. Harvard-affiliated.",
    type: "website",
    url: "https://hiddenpotentialskills.com/for/parents",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Skills Programs for Children in Delhi | For Parents | Hidden Potential",
    description:
      "Life skills for children 8–21. Confidence, emotional intelligence, study skills, stress management. Delhi NCR. 14+ years. NLP-based.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/for/parents",
  },
};

// ── Schema: Service ───────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Life Skills Programs for Children Aged 8 to 21 in Delhi",
  description:
    "Structured life skills programs for children aged 8 to 21 in Delhi NCR. An Enlightened Learner program, art therapy, study skills, stress management, and emotional intelligence. NLP-based. 5000+ students trained. 14+ years experience. MSME registered.",
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
  serviceType: "Life Skills Training for Children and Young Adults",
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
      name: "What life skills programs are available for children in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hidden Potential offers several programs for children aged 8 to 21: An Enlightened Learner - a structured life skills program in three age-appropriate levels for students aged 8 to 21 covering confidence building, communication skills, emotional intelligence, goal setting, study techniques, and real-world readiness; Art Therapy for Healing for children dealing with stress, anxiety, or emotional challenges; Study Skills and Learning Techniques for students who struggle with focus, memory, or academic pressure; Stress Management for exam anxiety and performance stress; and Communication Skills Training for children who struggle with speaking up in school or social settings. All programs are available at our Dwarka, Delhi centre and online.",
      },
    },
    {
      "@type": "Question",
      name: "My child is academically fine but lacks confidence. Can you help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and this is actually one of the most common situations parents bring to Hidden Potential. Academic performance does not automatically build confidence, communication skills, or emotional resilience - these are separate developmental domains that need intentional, structured work. The An Enlightened Learner program is designed precisely for children who are capable but held back by confidence gaps, social anxiety, or difficulty expressing themselves. NLP-based confidence anchoring, progressive communication exercises, and peer group practice build genuine self-assurance over time - not just temporary motivation from a pep talk.",
      },
    },
    {
      "@type": "Question",
      name: "What age groups do your children's programs cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The An Enlightened Learner program covers ages 8 to 21 in three developmental levels. HP Foundation (3 months) serves children aged 8 to 12 with foundational skills - emotional awareness, basic communication, self-discipline, and creative expression. HP Growth Series (6 months) serves ages 13 to 16 with deeper skill development - goal setting, study techniques, peer relationship management, and confidence under social pressure. HP Mastery Track (12 months) serves ages 17 to 21 with advanced development - leadership, professional communication, career clarity, and life planning. Art Therapy and other services are available across all age groups.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know which program is right for my child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We begin every student journey with a pre-assessment to identify their specific skill profile - confidence levels, communication patterns, emotional regulation, study habits, and social skills. Based on this assessment, we recommend the most suitable program level and starting point. As a parent, you receive a detailed assessment report and a clear recommendation before committing to any program. This is not a sales process - it is a developmental diagnostic designed to place your child in exactly the right starting point for their growth.",
      },
    },
    {
      "@type": "Question",
      name: "Will life skills training interfere with my child's studies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Life skills training does not compete with academics - it amplifies them. Students who develop emotional regulation, study techniques, stress management, and goal-setting skills consistently perform better academically because these skills remove the internal obstacles to learning. Study habits, focus, memory techniques, and exam confidence are explicitly covered in the An Enlightened Learner curriculum. Parents across Delhi NCR report improvements not just in their child's confidence and social skills but in their academic performance and willingness to engage with school after completing the program.",
      },
    },
    {
      "@type": "Question",
      name: "Do you involve parents in the program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Parent engagement is built into the Hidden Potential approach because we understand that the fastest transformation happens when home and program are aligned. Parents receive assessment reports, progress updates, and practical guidance on how to support their child's development at home. Parent engagement sessions are available to help you understand the skills your child is developing and how you can reinforce them in daily family interactions. The goal is a consistent environment where your child's growth is supported on all fronts.",
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
      name: "Life Skills Programs for Children - For Parents",
      item: "https://hiddenpotentialskills.com/for/parents",
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const painPoints = [
  {
    num: "01",
    title: "Your Child Is Academically Strong but Emotionally Fragile",
    desc: "Marks are fine but the moment something goes wrong - a bad result, a conflict with friends, a rejection - they fall apart. Emotional resilience is not a personality trait. It is a skill system that can be deliberately taught, practised, and built through structured developmental programs.",
  },
  {
    num: "02",
    title: "Peer Pressure and Social Media Are Changing Who They Are",
    desc: "You watch your child reshape their identity, values, and self-worth based on comparison, likes, and approval from peers. This is not a parenting failure. It is a development gap - the absence of a strong internal identity foundation. Programs that build self-awareness and values clarity create an anchor no external pressure can easily dislodge.",
  },
  {
    num: "03",
    title: "They Shut Down Instead of Communicating When Stressed",
    desc: "Under pressure - exam stress, family tension, social conflict - your child withdraws, stonewalls, or explodes. These are not character flaws. They are the predictable responses of a young person who has not yet learned the emotional regulation and communication tools to navigate difficulty constructively.",
  },
  {
    num: "04",
    title: "You See Potential in Them That They Cannot See in Themselves",
    desc: "Their capability is obvious to you. But they hold back, undersell themselves, and shrink in situations where they should shine. Confidence that comes from inside - not from parents telling a child they are great - is built through structured skill development, measurable progress, and the genuine experience of handling challenges successfully.",
  },
  {
    num: "05",
    title: "Exam Anxiety Is Affecting Their Performance and Your Family",
    desc: "The stress is real - and it spreads. When one family member is drowning in exam anxiety, the whole home feels it. NLP-based exam stress management does not just calm the anxiety; it gives your child practical, repeatable tools - confidence anchoring, cognitive reframing, focus techniques - that work in the exam hall when you are not there.",
  },
  {
    num: "06",
    title: "They Have No Clarity About What They Want - and It Worries You",
    desc: "Approaching career decisions with no sense of direction, no self-knowledge, and no goal-setting skills is increasingly common among young people in Delhi NCR. Career clarity is not about choosing a subject - it is about understanding your strengths, values, and the kind of impact you want to make. That clarity is teachable.",
  },
];

const recommendedPrograms = [
  {
    num: "01",
    title: "An Enlightened Learner (AEL) - Ages 8–21",
    desc: "Hidden Potential's flagship student development program. Three age-appropriate levels: HP Foundation for ages 8–12, HP Growth Series for ages 13–16, and HP Mastery Track for ages 17–21. 13 life skill areas across 4 domains - Self Mastery, Communication, Academic & Thinking Skills, and Real-World Readiness. Every student begins with a pre-assessment and receives a documented progress report. This is a structured developmental journey, not a workshop.",
    match: "Best for: All children aged 8–21 seeking comprehensive life skills development",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore An Enlightened Learner \u2192",
  },
  {
    num: "02",
    title: "Art Therapy for Healing",
    desc: "For children dealing with academic stress, social anxiety, bullying, exam pressure, or emotional challenges that words alone cannot address. Combines mindfulness practices, reflective journaling, and art-based creative expression. Non-verbal, gentle, and effective - particularly for younger children and those who find traditional communication difficult. No artistic skill required.",
    match: "Best for: Children with anxiety, stress, or emotional challenges needing a creative outlet",
    linkHref: "/programs/art-therapy",
    linkLabel: "Explore Art Therapy for Healing \u2192",
  },
  {
    num: "03",
    title: "Study Skills & Learning Techniques",
    desc: "Structured study skill development covering memory techniques, time management, note-taking strategies, active recall methods, and focus training. Designed for students who study hard but do not see results, who struggle with concentration, or who face performance anxiety during exams. These are practical tools that change how a student approaches learning permanently.",
    match: "Best for: Students who work hard but underperform, or who struggle with focus and memory",
    linkHref: "/services/study-skills",
    linkLabel: "Explore Study Skills \u2192",
  },
  {
    num: "04",
    title: "Stress Management",
    desc: "NLP-based stress management specifically adapted for students facing exam pressure, board exam anxiety, competitive entrance preparation, and social stress. Covers confidence anchoring for exam halls, cognitive reframing for handling setbacks, and emotional state management for high-pressure moments. Gives students tools they can use independently - in the exam hall, in social situations, and at home.",
    match: "Best for: Students facing exam anxiety, board preparation, or competitive entrance stress",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management \u2192",
  },
  {
    num: "05",
    title: "Emotional Intelligence Training",
    desc: "Develop self-awareness, empathy, emotional regulation, and relationship skills in your child. Particularly valuable for teenagers navigating peer relationships, conflict, and identity development. Our NLP-based EI framework builds practical competencies that improve how your child handles difficult emotions, interpersonal conflicts, and social pressure.",
    match: "Best for: Teenagers dealing with peer conflict, emotional reactivity, or relationship challenges",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Explore Emotional Intelligence \u2192",
  },
  {
    num: "06",
    title: "Communication Skills Training",
    desc: "Structured communication development for children who struggle to speak up in class, present in front of groups, communicate assertively with peers, or express themselves in family conversations. Uses progressive, age-appropriate exercises to build genuine speaking confidence from the inside - not performance skills bolted on from the outside.",
    match: "Best for: Children who are quiet, struggle with public speaking, or avoid social expression",
    linkHref: "/services/communication-skills",
    linkLabel: "Explore Communication Skills \u2192",
  },
  {
    num: "07",
    title: "Confidence Building Program",
    desc: "Targeted confidence development using NLP anchoring, belief mapping, and structured progressive exercises. Ideal for children who are capable but held back by persistent self-doubt, fear of failure, or an unwillingness to try new things. Builds confidence that is grounded in genuine capability and experience - not hollow affirmations.",
    match: "Best for: Children with low self-esteem, fear of failure, or persistent self-doubt",
    linkHref: "/services/confidence-building",
    linkLabel: "Explore Confidence Building \u2192",
  },
  {
    num: "08",
    title: "Career Guidance & Planning",
    desc: "For young adults aged 16 to 21 facing the overwhelming question of what to do with their life. Structured career clarity work combining self-knowledge assessment, strengths mapping, values clarification, and goal-setting. Helps students move from anxious confusion to a clear, confident direction - whether for higher education, career selection, or professional positioning.",
    match: "Best for: Young adults aged 16–21 at career crossroads or approaching higher education decisions",
    linkHref: "/services/career-guidance",
    linkLabel: "Explore Career Guidance \u2192",
  },
];

const personas = [
  {
    num: "01",
    title: "Parents of Children Aged 8–12 Building Early Foundations",
    desc: "The ages of 8 to 12 are the most formative period for developing self-awareness, emotional regulation, and communication habits. Parents who invest in structured life skills development at this stage give their children a foundation that compounds throughout school, higher education, and adult life.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore An Enlightened Learner \u2192",
  },
  {
    num: "02",
    title: "Parents of Teenagers Navigating Peer Pressure and Identity",
    desc: "Ages 13 to 16 are the years of maximum social pressure - peer approval, identity formation, social media comparison, and the early signals of career direction. The HP Growth Series within An Enlightened Learner is built specifically for this developmental stage.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore An Enlightened Learner \u2192",
  },
  {
    num: "03",
    title: "Parents of Students Preparing for Board Exams",
    desc: "Classes 10 and 12 create peak performance pressure in Delhi NCR families. Exam anxiety management, study skills, confidence anchoring, and emotional regulation tools are the difference between a student who performs under pressure and one who collapses. Our programs build these capabilities in the months before exams.",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management \u2192",
  },
  {
    num: "04",
    title: "Parents of Young Adults at Career Crossroads",
    desc: "Your son or daughter is 18 to 21, approaching the end of college, and genuinely lost about what they want. Career clarity programs combined with confidence building and communication skills give young adults the self-knowledge and professional foundation to make purposeful decisions rather than drifting.",
    linkHref: "/services/career-guidance",
    linkLabel: "Explore Career Guidance \u2192",
  },
  {
    num: "05",
    title: "Parents Concerned About Screen Addiction and Social Withdrawal",
    desc: "Increasing social withdrawal, phone dependence, and avoidance of real-world interaction are signs that a young person lacks the social confidence and emotional tools to engage comfortably with the world. Art Therapy and life skills programs rebuild genuine social capability and internal emotional resources.",
    linkHref: "/programs/art-therapy",
    linkLabel: "Explore Art Therapy for Healing \u2192",
  },
  {
    num: "06",
    title: "Parents Seeking More Than Academic Tutoring",
    desc: "You already have tuition covered. What your child needs now is not more academic input - it is the confidence, communication, emotional regulation, and self-awareness that will determine how far their academic knowledge actually takes them. These are the skills that separate similar candidates in every context.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore An Enlightened Learner \u2192",
  },
];

const differentiators = [
  {
    title: "Designed Specifically for Ages 8–21 in Three Developmental Stages",
    desc: "The An Enlightened Learner program is not a generic life skills curriculum stretched across age groups. It is built in three distinct developmental stages - Foundation (8–12), Growth (13–16), and Mastery (17–21) - each with age-appropriate content, language, and techniques. Your 10-year-old and your 19-year-old are in entirely different programs, designed for exactly where they are.",
  },
  {
    title: "Assessment-Based, Not One-Size-Fits-All",
    desc: "Every student begins with a structured pre-assessment mapping their confidence levels, communication patterns, emotional regulation, study habits, and social skills. Program level and content are placed based on this assessment, not age alone. Parents receive the assessment report and understand exactly what their child is working on and why.",
  },
  {
    title: "Progress Reports You Can See and Track",
    desc: "Hidden Potential is not a feel-good program where you hope something is working. Every student receives documented progress tracking - observable skill growth in confidence, communication, emotional regulation, and study effectiveness. Parents are kept informed throughout the program, not just at the end.",
  },
  {
    title: "NLP-Based Techniques Children Can Practise Daily",
    desc: "The tools your child learns are not workshop exercises they forget by the next day. NLP-based confidence anchoring, stress management techniques, focus methods, and communication frameworks are practical, portable, and usable in real situations - in the exam hall, in social settings, and at home. They practise them until they become natural.",
  },
  {
    title: "Safe, Structured Environment with 14+ Years of Experience",
    desc: "Supreet Kaur has spent 14+ years creating environments where children and young adults feel genuinely safe to grow. With 5000+ students trained across Delhi, Noida, Gurgaon, and Faridabad, she brings deep experience with every developmental challenge your child may be facing. The programs are structured but warm, rigorous but supportive.",
  },
  {
    title: "More Than Motivation - Permanent Behavioural Skill Development",
    desc: "A single workshop or motivational talk gives your child an emotional lift that fades within days. Hidden Potential's structured programs - 3, 6, or 12 months - create permanent behavioural change through repeated practice, structured feedback, and documented progress. The confidence, communication, and emotional regulation skills your child develops are theirs for life.",
  },
];

const faqs = [
  {
    q: "What life skills programs are available for children in Delhi?",
    a: "Hidden Potential offers several programs for children aged 8 to 21: An Enlightened Learner - a structured life skills program in three age-appropriate levels for students aged 8 to 21 covering confidence building, communication skills, emotional intelligence, goal setting, study techniques, and real-world readiness; Art Therapy for Healing for children dealing with stress, anxiety, or emotional challenges; Study Skills and Learning Techniques for students who struggle with focus, memory, or academic pressure; Stress Management for exam anxiety and performance stress; and Communication Skills Training for children who struggle with speaking up in school or social settings. All programs are available at our Dwarka, Delhi centre and online.",
  },
  {
    q: "My child is academically fine but lacks confidence. Can you help?",
    a: "Yes, and this is actually one of the most common situations parents bring to Hidden Potential. Academic performance does not automatically build confidence, communication skills, or emotional resilience - these are separate developmental domains that need intentional, structured work. The An Enlightened Learner program is designed precisely for children who are capable but held back by confidence gaps, social anxiety, or difficulty expressing themselves. NLP-based confidence anchoring, progressive communication exercises, and peer group practice build genuine self-assurance over time - not just temporary motivation from a pep talk.",
  },
  {
    q: "What age groups do your children's programs cover?",
    a: "The An Enlightened Learner program covers ages 8 to 21 in three developmental levels. HP Foundation (3 months) serves children aged 8 to 12 with foundational skills - emotional awareness, basic communication, self-discipline, and creative expression. HP Growth Series (6 months) serves ages 13 to 16 with deeper skill development - goal setting, study techniques, peer relationship management, and confidence under social pressure. HP Mastery Track (12 months) serves ages 17 to 21 with advanced development - leadership, professional communication, career clarity, and life planning. Art Therapy and other services are available across all age groups.",
  },
  {
    q: "How do I know which program is right for my child?",
    a: "We begin every student journey with a pre-assessment to identify their specific skill profile - confidence levels, communication patterns, emotional regulation, study habits, and social skills. Based on this assessment, we recommend the most suitable program level and starting point. As a parent, you receive a detailed assessment report and a clear recommendation before committing to any program. This is not a sales process - it is a developmental diagnostic designed to place your child in exactly the right starting point for their growth.",
  },
  {
    q: "Will life skills training interfere with my child's studies?",
    a: "Life skills training does not compete with academics - it amplifies them. Students who develop emotional regulation, study techniques, stress management, and goal-setting skills consistently perform better academically because these skills remove the internal obstacles to learning. Study habits, focus, memory techniques, and exam confidence are explicitly covered in the An Enlightened Learner curriculum. Parents across Delhi NCR report improvements not just in their child's confidence and social skills but in their academic performance and willingness to engage with school after completing the program.",
  },
  {
    q: "Do you involve parents in the program?",
    a: "Yes. Parent engagement is built into the Hidden Potential approach because we understand that the fastest transformation happens when home and program are aligned. Parents receive assessment reports, progress updates, and practical guidance on how to support their child's development at home. Parent engagement sessions are available to help you understand the skills your child is developing and how you can reinforce them in daily family interactions. The goal is a consistent environment where your child's growth is supported on all fronts.",
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
export default function ForParentsPage() {
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
          SECTION 1 - HERO
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
            For Parents
          </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Life Skills Programs for Children in Delhi - Give Your Child the Skills School Never Taught
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
            Marks open doors. Character determines what happens inside.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            You invest in tuition, extracurriculars, and every advantage available for your child.
            But the skills that will most determine their success in life - emotional intelligence,
            confidence, communication, resilience, and self-awareness - are rarely taught in school
            with any structure or depth. Hidden Potential&rsquo;s{" "}
            <Link
              href="/programs/enlightened-learner"
              className="font-semibold text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              An Enlightened Learner program
            </Link>{" "}
            is a structured, NLP-based life skills journey for children aged 8 to 21, designed
            and led by{" "}
            <Link
              href="/about"
              className="font-semibold text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              Supreet Kaur
            </Link>{" "}
            - with 14+ years of experience, Harvard-affiliated Life Skills certification, and
            over 5000 students trained across Delhi NCR. Assessment-based. Progress-tracked.
            Results documented. Not a workshop - a developmental journey.
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
              href="/programs/enlightened-learner"
              className="btn-premium-ghost-plain"
            >
              Explore An Enlightened Learner
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "14+ Years Experience",
              "5000+ Students Trained",
              "Ages 8–21 Covered",
              "NLP & Harvard Certified",
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
          SECTION 2 - THE PARENT'S CONCERN
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>The Parent&apos;s Concern</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              What Parents in Delhi NCR Are Most Worried About for Their Children
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              These are the patterns we hear from parents across Delhi, Dwarka, Noida, Gurgaon,
              and Faridabad who come to Hidden Potential. You are not alone in these concerns -
              and every one of them is addressable through structured, age-appropriate life skills
              development.
            </p>
          </div>

          {/* 6 pain-point cards - 2-column grid */}
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
          SECTION 3 - RECOMMENDED PROGRAMS
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header: content left, image right */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            <div>
              <SectionLabel>Programs for Your Child</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
                Life Skills Programs for Children Aged 8–21 in Delhi NCR
              </h2>
              <p className="text-base text-charcoal/75 leading-relaxed">
                Every program below has been designed for a specific aspect of your child&rsquo;s
                development. They can be taken as standalone programs or combined into a
                comprehensive growth pathway based on your child&rsquo;s pre-assessment results.
              </p>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl">
              <div className="relative w-full" style={{ height: "400px" }}>
                <Image
                  src="/images/students/supreet-teaching.jpg"
                  alt="Supreet Kaur conducting life skills program for children in Delhi NCR"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* 8 program cards - 2-column grid */}
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
          SECTION 4 - WHO SPECIFICALLY BENEFITS
          Background: Navy-light (#F3F0FF)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-navy-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Who This Is For</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Which Parents in Delhi NCR Bring Their Children to Hidden Potential?
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Parents come to Hidden Potential for very different reasons - some in response to
              a specific challenge, others proactively investing in their child&rsquo;s development.
              All share the belief that their child deserves more than academic preparation alone.
            </p>
          </div>

          {/* 6 persona cards - 2-column grid */}
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
          SECTION 5 - WHY HIDDEN POTENTIAL
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Why Hidden Potential</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Why Parents Across Delhi NCR Choose Hidden Potential for Their Children
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Delhi NCR has many providers of motivational workshops and children&rsquo;s
              personality development programs. Here is what makes Hidden Potential a different
              and deeper investment for your child.
            </p>
          </div>

          {/* 6 differentiator cards - 3-column grid */}
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
          SECTION 6 - FAQ
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Common Questions from Parents About Our Children&apos;s Programs
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card-service"
              >
                {/* Question - teal left bar */}
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
          SECTION 7 - FINAL CTA
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
            Your Child&rsquo;s Potential Is Not Limited by Their Marks
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            The children who go furthest in life are not always the most academically gifted -
            they are the ones who know how to communicate, build relationships, handle setbacks
            with resilience, and believe in their own capability even when the evidence is not
            yet there. These are learnable skills. Hidden Potential has been building them in
            children and young adults across Delhi NCR for 14+ years. 5000+ students have gone
            through this journey and come out more confident, more capable, and more clear about
            who they are and where they are going. Your child deserves the same.
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
              Enroll Your Child
            </Link>
          </div>

          {/* Hybrid trust signal */}
          <p className="text-sm text-white/50 mb-6">
            All programs available online and in-person - choose what works for you.
          </p>

          {/* Cross-sell */}
          <p className="text-xs text-white/40 mb-4">
            Also explore:{" "}
            <Link
              href="/for/schools"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Life Skills Programs for Schools
            </Link>{" "}
            - bring Hidden Potential&rsquo;s programs into your child&rsquo;s school
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

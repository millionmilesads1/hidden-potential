/**
 * AUDIENCE PAGE - LIFE SKILLS & PERSONAL GROWTH PROGRAMS FOR WOMEN
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /for/women
 *
 * 7-section structure:
 *   Section 1  - HERO                       (dark gradient, H1, Lora italic, body, 2 CTAs, trust signals)
 *   Section 2  - THE CHALLENGE FOR WOMEN    (off-white, intro + 6 pain-point cards)
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
  title: { absolute: "Personal Growth Programs for Women in Delhi | NLP & Life Skills | Hidden Potential" },
  description:
    "Personal growth and life skills programs for women in Delhi NCR. Self Mastery for Women, NLP coaching, confidence building, art therapy. Led by Supreet Kaur. 14+ years. Dwarka & online.",
  openGraph: {
    title: "Personal Growth Programs for Women in Delhi - Growth Designed for Women",
    description:
      "Self Mastery for Women, NLP coaching, emotional intelligence, art therapy, and confidence programs for women in Delhi, Noida, Gurgaon. 14+ years. Harvard-affiliated methodology.",
    type: "website",
    url: "https://hiddenpotentialskills.com/for/women",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Growth Programs for Women in Delhi | Hidden Potential",
    description:
      "Self Mastery for Women, NLP coaching, confidence building, art therapy for women. Delhi, Noida, Gurgaon. 14+ years. Supreet Kaur.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/for/women",
  },
};

// ── Schema: Service ───────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Personal Growth and Life Skills Programs for Women in Delhi",
  description:
    "Structured personal growth programs for women in Delhi NCR including Self Mastery for Women, NLP coaching, confidence building, emotional intelligence, and art therapy. Led by Supreet Kaur with 14+ years of experience.",
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
  serviceType: "Personal Growth and Life Skills Training for Women",
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
      name: "What personal growth programs are available for women in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hidden Potential offers several programs designed specifically for women: Self Mastery for Women - a structured 3-stage journey covering inner clarity, emotional regulation, identity work, and personal growth; Art Therapy for Healing for women dealing with stress, transitions, or emotional overload; Communication Mastery for women seeking confident expression in professional and personal settings; NLP Coaching for individual behavioural transformation; and Confidence Building for women rebuilding after career breaks, loss, or self-doubt. All programs are available at our Dwarka, Delhi centre and online for women across Noida, Gurgaon, and Faridabad.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Self Mastery for Women program a group or individual program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self Mastery for Women combines both. It uses structured group facilitation sessions with a cohort of women on similar journeys, alongside individual discovery sessions and personalised growth plans with Supreet Kaur. The group setting creates a safe, supported community of peers navigating similar challenges. The individual sessions ensure your specific growth areas are addressed with depth and privacy. This combined format creates both the accountability of community and the intimacy of personal coaching.",
      },
    },
    {
      "@type": "Question",
      name: "I am a busy working woman. How do these programs fit into my schedule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All programs at Hidden Potential are designed around women's real-life schedules. Options include weekend morning cohorts, weekday evening sessions, fully online participation, and flexible individual NLP coaching appointments. Self Mastery for Women runs in structured cohorts with predictable session timings so you can plan around it. Art Therapy sessions are bookable in shorter blocks. We understand that the women who need these programs most are often the ones with the least free time - scheduling is never a barrier.",
      },
    },
    {
      "@type": "Question",
      name: "How is Self Mastery for Women different from a motivational workshop or women's circle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self Mastery for Women is a structured, assessment-based developmental program - not a motivational event or informal support circle. It begins with an initial life assessment and one-on-one discovery session, proceeds through three defined growth stages with structured tools and guided practice, and concludes with a post-journey review. Every woman works with a personalised growth plan. NLP-based techniques are used to address specific belief patterns, emotional blocks, and identity challenges. The outcome is documented, measurable growth - not temporary inspiration.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be in crisis or going through something difficult to join?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Women join our programs at all life stages - some are navigating major transitions like divorce, career change, or loss; others are simply ready to grow and want a structured, guided way to do it. Some join because life is going well and they want to go further. The only requirement for Self Mastery for Women is that you are a woman aged 28 or above who is ready for guided, honest personal growth. Art Therapy and NLP Coaching are open to women across all life situations and age groups.",
      },
    },
    {
      "@type": "Question",
      name: "What are Supreet Kaur's qualifications for working with women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Supreet Kaur holds NLP certification, Harvard-affiliated Life Skills certification, a Masters in Psychology, and Graphology certification from the American Board. She is the creator of the Self Mastery for Women program, developed through 14+ years of one-on-one and group work with women across Delhi NCR navigating personal growth, career transitions, identity challenges, and emotional healing. She is also a Josh Talks speaker and has trained over 5000 individuals including thousands of women through her programs. Hidden Potential is MSME registered and Skill India affiliated.",
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
      name: "Personal Growth Programs for Women",
      item: "https://hiddenpotentialskills.com/for/women",
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const painPoints = [
  {
    num: "01",
    title: "You Feel Emotionally Stuck Despite Doing Everything Right",
    desc: "You manage your responsibilities, show up for everyone around you, and keep moving - yet something feels hollow or stagnant beneath the surface. Emotional stuckness is not weakness. It is the signal that you have been prioritising everyone else's growth over your own for too long.",
  },
  {
    num: "02",
    title: "You Have Lost Track of Who You Are Outside Your Roles",
    desc: "Daughter, wife, mother, employee - each role comes with its expectations, and somewhere along the way your own identity got quietly set aside. You know there is more to you than these roles, but you cannot quite remember what that looks like or feels like any more.",
  },
  {
    num: "03",
    title: "Your Boundaries Are Crossed Repeatedly and You Cannot Stop It",
    desc: "You know what you want to say. You know what you need. But in the moment - with family, colleagues, or partners - the words do not come, and you agree to things that leave you depleted and resentful afterwards. Boundaries are a learnable skill, not a personality type.",
  },
  {
    num: "04",
    title: "Self-Doubt Undermines Your Professional and Personal Decisions",
    desc: "You second-guess yourself in meetings. You overexplain your choices to others. You shrink in rooms where you deserve to take up space. This is not a reflection of your capability - it is a pattern built from years of conditioning that can be systematically unlearned.",
  },
  {
    num: "05",
    title: "A Major Life Transition Has Left You Without a Clear Direction",
    desc: "Career change, divorce, relocation, children leaving home, loss - major transitions strip away the structure that once defined your days. The disorientation is real and it deserves more than advice from well-meaning friends. It deserves structured, guided rebuilding.",
  },
  {
    num: "06",
    title: "You Want to Grow but Do Not Know Where or How to Begin",
    desc: "The desire is there. The intention is real. But every time you try to work on yourself, it feels vague, unsustained, or like it requires more energy than you have. A structured program with a clear pathway, guided practice, and community removes this barrier entirely.",
  },
];

const recommendedPrograms = [
  {
    num: "01",
    title: "Self Mastery for Women",
    desc: "A structured 3-stage holistic growth program for women 28+. Covers inner clarity, emotional regulation, identity work, boundary setting, self-expression, financial awareness, and life planning. Combines group facilitation with one-on-one personalised guidance. This is not a motivational circle - it is a guided growth journey with practical NLP-based tools and documented outcomes.",
    match: "Best for: Women ready for deep, sustained personal growth - at any life stage",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women \u2192",
  },
  {
    num: "02",
    title: "Art Therapy for Healing",
    desc: "A non-verbal, creative pathway for women navigating emotional overload, life transitions, grief, or burnout. Uses mindfulness practices, reflective journaling, and art-based expression to process emotions, build inner calm, and develop self-awareness. No artistic skill required - this is healing through creative exploration, facilitated by a certified practitioner with 14+ years of experience.",
    match: "Best for: Women dealing with stress, emotional overwhelm, grief, or major life changes",
    linkHref: "/programs/art-therapy",
    linkLabel: "Explore Art Therapy for Healing \u2192",
  },
  {
    num: "03",
    title: "Communication Mastery",
    desc: "Structured communication and leadership training for women who want to speak with confidence, set boundaries through assertive communication, and be heard in professional and personal spaces. Covers public speaking, voice clarity, body language, assertiveness, and professional expression. Designed for women who have something to say and want the tools to say it powerfully.",
    match: "Best for: Working women, entrepreneurs, and women re-entering professional life",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery \u2192",
  },
  {
    num: "04",
    title: "NLP Coaching - Individual Sessions",
    desc: "One-on-one behavioural transformation with Supreet Kaur. Identify and rewire the specific belief patterns driving self-doubt, emotional blocks, people-pleasing, and fear of asserting your needs. NLP coaching works at the neurological level to create lasting change - not temporary motivation. The most personalised and intensive growth option available.",
    match: "Best for: Women seeking deep individual transformation with direct guidance from Supreet Kaur",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching \u2192",
  },
  {
    num: "05",
    title: "Confidence Building Program",
    desc: "Structured confidence development using NLP anchoring, belief mapping, and progressive self-expression techniques. Designed for women rebuilding confidence after career breaks, difficult relationships, or years of self-neglect. Not motivational content - repeatable tools that build genuine, grounded self-assurance over time.",
    match: "Best for: Women rebuilding after a break, change, or extended period of self-doubt",
    linkHref: "/services/confidence-building",
    linkLabel: "Explore Confidence Building \u2192",
  },
  {
    num: "06",
    title: "Emotional Intelligence Training",
    desc: "Develop self-awareness, emotional regulation, empathy, and the ability to navigate complex relationships - at home, at work, and within yourself. Our EI framework uses NLP-based tools to build practical emotional competencies, not just theoretical understanding. Particularly valuable for women managing multiple demanding roles simultaneously.",
    match: "Best for: Women managing complex family, professional, and social dynamics",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Explore Emotional Intelligence \u2192",
  },
  {
    num: "07",
    title: "Stress Management",
    desc: "NLP-based stress management that identifies your specific triggers and rewires the belief patterns amplifying your stress response. Learn emotional state management tools you can use in real-time - during family tensions, workplace pressure, and personal crises. Goes well beyond breathing exercises to address the root of chronic stress.",
    match: "Best for: Women experiencing burnout, caregiver fatigue, or chronic anxiety",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management \u2192",
  },
  {
    num: "08",
    title: "Goal Setting & Achievement",
    desc: "Structured goal clarity work using NLP-based techniques. Ideal for women at a crossroads - career transitions, life reinventions, post-children ambitions - who want to move from vague intentions to a specific, actionable plan. Includes values clarification, life design, and built-in accountability structures.",
    match: "Best for: Women at career crossroads, life reinventions, or post-transition rebuilding",
    linkHref: "/services/goal-setting",
    linkLabel: "Explore Goal Setting \u2192",
  },
];

const personas = [
  {
    num: "01",
    title: "Working Women Navigating Career Growth and Identity",
    desc: "You have built a career but feel constantly pulled between professional ambition and the expectations placed on you at home. Communication Mastery, NLP Coaching, and Self Mastery for Women create a powerful combined pathway for professional women in Delhi, Gurgaon, and Noida.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women \u2192",
  },
  {
    num: "02",
    title: "Homemakers Seeking Personal Growth and Clarity",
    desc: "Your days are full and your contribution is enormous - yet you feel invisible, unstimulated, or uncertain about who you are outside of caregiving. Self Mastery for Women was designed with you in mind. Your growth matters as much as anyone else's.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women \u2192",
  },
  {
    num: "03",
    title: "Women Rebuilding After Loss, Divorce, or Major Change",
    desc: "Life has shifted significantly and the old map no longer works. Art Therapy provides emotional processing and clarity. NLP Coaching addresses the belief patterns keeping you stuck in grief or fear. Self Mastery for Women offers a structured path forward when direction feels impossible.",
    linkHref: "/programs/art-therapy",
    linkLabel: "Explore Art Therapy for Healing \u2192",
  },
  {
    num: "04",
    title: "Young Professional Women Building Confidence",
    desc: "You are in your late twenties or early thirties, capable and ambitious, but self-doubt, imposter syndrome, or a fear of being seen holds you back in rooms where you belong. Confidence Building and Communication Mastery together build the foundation for the professional presence you deserve.",
    linkHref: "/services/confidence-building",
    linkLabel: "Explore Confidence Building \u2192",
  },
  {
    num: "05",
    title: "Women Returning to Work After Career Breaks",
    desc: "Returning to professional life after years away - for children, family, or caregiving - is disorienting. Skills feel rusty. Confidence feels shaky. Our programs rebuild both the practical communication toolkit and the internal confidence required to re-enter the workforce with genuine assurance.",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery \u2192",
  },
  {
    num: "06",
    title: "Women Ready to Become Trainers or Coaches",
    desc: "Many women who complete Self Mastery for Women discover a calling to help other women grow. The Train the Trainer Certification provides the structured pathway - NLP integration, facilitation methodology, certification - to turn that calling into a recognised professional practice.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification \u2192",
  },
];

const differentiators = [
  {
    title: "Created by a Woman, for Women",
    desc: "Self Mastery for Women was designed by Supreet Kaur from 14+ years of direct work with women navigating personal growth, career transitions, and identity challenges. Every tool, framework, and facilitation approach reflects deep, lived understanding of what women in Delhi NCR actually face - not a generic curriculum adapted for a female audience.",
  },
  {
    title: "Safe, Structured Group and Individual Settings",
    desc: "Growth happens faster in the right environment. Our programs combine the accountability of small group cohorts with the depth of individual guidance. Group sessions are carefully facilitated to create psychological safety, confidentiality, and peer connection. You are never just a participant in a room - you are supported throughout your journey.",
  },
  {
    title: "NLP-Based, Not Generic Motivation",
    desc: "Inspirational content fades. NLP-based behavioural transformation rewires the specific patterns driving your challenges - self-doubt, people-pleasing, emotional reactivity, boundary failures. Confidence anchoring, belief restructuring, cognitive reframing, and emotional state management produce changes that persist because they work at the neurological level.",
  },
  {
    title: "Measurable Emotional Growth Outcomes",
    desc: "Every woman begins with an initial life assessment and ends with a post-journey review. Growth in self-awareness, emotional regulation, clarity, and confidence is visible and documented. You see exactly what has shifted and how far you have come. This is not feel-good coaching - it is structured developmental work with real accountability.",
  },
  {
    title: "Flexible Scheduling That Respects Your Life",
    desc: "Programs are scheduled around women's real constraints - caregiving, work, and unpredictable family demands. Weekend cohorts, evening sessions, online participation, and flexible individual coaching appointments are all available. Being a busy woman is never a barrier to growth at Hidden Potential.",
  },
  {
    title: "14+ Years with Women Across Delhi NCR",
    desc: "Supreet Kaur has worked with hundreds of women across Delhi, Dwarka, Noida, Gurgaon, and Faridabad through individual coaching, group programs, and public speaking engagements. This depth of experience with the specific cultural, professional, and personal challenges facing women in this region is reflected in every program she runs.",
  },
];

const faqs = [
  {
    q: "What personal growth programs are available for women in Delhi?",
    a: "Hidden Potential offers several programs designed specifically for women: Self Mastery for Women - a structured 3-stage journey covering inner clarity, emotional regulation, identity work, and personal growth; Art Therapy for Healing for women dealing with stress, transitions, or emotional overload; Communication Mastery for women seeking confident expression in professional and personal settings; NLP Coaching for individual behavioural transformation; and Confidence Building for women rebuilding after career breaks, loss, or self-doubt. All programs are available at our Dwarka, Delhi centre and online for women across Noida, Gurgaon, and Faridabad.",
  },
  {
    q: "Is the Self Mastery for Women program a group or individual program?",
    a: "Self Mastery for Women combines both. It uses structured group facilitation sessions with a cohort of women on similar journeys, alongside individual discovery sessions and personalised growth plans with Supreet Kaur. The group setting creates a safe, supported community of peers navigating similar challenges. The individual sessions ensure your specific growth areas are addressed with depth and privacy. This combined format creates both the accountability of community and the intimacy of personal coaching.",
  },
  {
    q: "I am a busy working woman. How do these programs fit into my schedule?",
    a: "All programs at Hidden Potential are designed around women's real-life schedules. Options include weekend morning cohorts, weekday evening sessions, fully online participation, and flexible individual NLP coaching appointments. Self Mastery for Women runs in structured cohorts with predictable session timings so you can plan around it. Art Therapy sessions are bookable in shorter blocks. We understand that the women who need these programs most are often the ones with the least free time - scheduling is never a barrier.",
  },
  {
    q: "How is Self Mastery for Women different from a motivational workshop or women's circle?",
    a: "Self Mastery for Women is a structured, assessment-based developmental program - not a motivational event or informal support circle. It begins with an initial life assessment and one-on-one discovery session, proceeds through three defined growth stages with structured tools and guided practice, and concludes with a post-journey review. Every woman works with a personalised growth plan. NLP-based techniques are used to address specific belief patterns, emotional blocks, and identity challenges. The outcome is documented, measurable growth - not temporary inspiration.",
  },
  {
    q: "Do I need to be in crisis or going through something difficult to join?",
    a: "Not at all. Women join our programs at all life stages - some are navigating major transitions like divorce, career change, or loss; others are simply ready to grow and want a structured, guided way to do it. Some join because life is going well and they want to go further. The only requirement for Self Mastery for Women is that you are a woman aged 28 or above who is ready for guided, honest personal growth. Art Therapy and NLP Coaching are open to women across all life situations and age groups.",
  },
  {
    q: "What are Supreet Kaur's qualifications for working with women?",
    a: "Supreet Kaur holds NLP certification, Harvard-affiliated Life Skills certification, a Masters in Psychology, and Graphology certification from the American Board. She is the creator of the Self Mastery for Women program, developed through 14+ years of one-on-one and group work with women across Delhi NCR navigating personal growth, career transitions, identity challenges, and emotional healing. She is also a Josh Talks speaker and has trained over 5000 individuals including thousands of women through her programs. Hidden Potential is MSME registered and Skill India affiliated.",
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
export default function ForWomenPage() {
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
            For Women
          </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Personal Growth Programs for Women in Delhi - Growth Designed for Women
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
            You have given so much to others. It is time to invest in yourself.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            Women in Delhi NCR carry enormous weight - careers, families, relationships, and
            expectations that never fully quiet down. Hidden Potential offers structured, NLP-based
            personal growth programs designed specifically for women at every stage of life. From{" "}
            <Link
              href="/programs/self-mastery-women"
              className="font-semibold text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              Self Mastery for Women
            </Link>{" "}
            - a guided journey through identity, emotional regulation, and life clarity - to{" "}
            <Link
              href="/programs/art-therapy"
              className="font-semibold text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              Art Therapy for Healing
            </Link>{" "}
            and{" "}
            <Link
              href="/programs/communication-mastery"
              className="font-semibold text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              Communication Mastery
            </Link>
            , every program is led by{" "}
            <Link
              href="/about"
              className="font-semibold text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              Supreet Kaur
            </Link>{" "}
            - a woman with 14+ years of experience, Harvard-affiliated Life Skills certification,
            NLP credentials, and a Masters in Psychology. Not motivation. Not a circle. Structured
            transformation with measurable, documented outcomes.
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
              href="/programs/self-mastery-women"
              className="btn-premium-ghost-plain"
            >
              Explore Self Mastery for Women
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "14+ Years Experience",
              "5000+ Women Trained",
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
          SECTION 2 - THE CHALLENGE FOR WOMEN
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>The Challenge for Women</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              What Holds Women Back from the Growth They Know They Deserve
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Women in Delhi NCR often carry the same challenges silently - not because they
              lack strength, but because no one has given them a structured space to address them.
              These are the patterns we see most often in women who come to Hidden Potential.
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
              <SectionLabel>Programs for Women</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
                Life Skills Programs Designed for Women in Delhi NCR
              </h2>
              <p className="text-base text-charcoal/75 leading-relaxed">
                Every program below can be taken independently or combined into a personalised
                growth pathway. Based on 14+ years of working with women across Delhi, Noida,
                Gurgaon, and Faridabad, these are the most impactful options available.
              </p>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl">
              <div className="relative w-full" style={{ height: "400px" }}>
                <Image
                  src="/images/counseling/group-session.jpg"
                  alt="Personal growth and life skills workshop for women by Hidden Potential Delhi"
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
              Which Women in Delhi NCR Benefit Most?
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Hidden Potential&rsquo;s programs serve women across ages, professions, and life
              stages. Whether you are navigating a career, a transition, or simply a long-overdue
              season of personal investment, there is a program designed for your situation.
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
              Why Women Across Delhi NCR Choose Hidden Potential for Personal Growth
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Delhi has no shortage of wellness events, motivational talks, and women&rsquo;s
              circles. Here is why Hidden Potential produces deeper, more lasting transformation.
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
              Common Questions from Women About Our Programs
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
            Your Growth Is Not Selfish. It Is the Most Generous Thing You Can Do.
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            When a woman grows - when she develops her emotional intelligence, clarity,
            communication, and confidence - everyone around her benefits. Her children, her
            relationships, her colleagues, her community. Hidden Potential offers structured,
            NLP-based personal growth programs created specifically for women in Delhi NCR. Not
            motivation. Not advice. Transformation that lasts - because it is built on science,
            delivered by a woman who has done this work herself, and designed for the life you
            are actually living.
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
              Enroll in a Program
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
              href="/for/young-adults"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Life Skills for Young Adults
            </Link>{" "}
            - for women in their late teens and early twenties building their foundation
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

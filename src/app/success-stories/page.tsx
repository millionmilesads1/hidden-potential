/**
 * SUPPORTING PAGE — SUCCESS STORIES
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /success-stories
 *
 * This is a testimonial/case-study showcase page (NOT the standard 7-section
 * service page structure). It uses the same Tailwind class patterns, metadata
 * format, and schema approach as app/services/nlp-coaching/page.tsx.
 *
 * 5-section custom layout:
 *   Section 1 — HERO               (dark gradient, H1, Lora italic, body, 2 CTAs, trust)
 *   Section 2 — IMPACT NUMBERS     (off-white, 4-col stats grid)
 *   Section 3 — STORIES BY CATEGORY(white, 4 categories × 2–3 story cards each)
 *   Section 4 — SHARE YOUR STORY   (off-white, invite CTA)
 *   Section 5 — BOTTOM CTA         (dark gradient, 2 CTAs, cross-sell, location line)
 *
 * ⚠️  PLACEHOLDER NOTICE
 * ─────────────────────────────────────────────────────────────────────────────
 * Every story card contains placeholder data. Search for the comment tag
 *   <!-- PLACEHOLDER -->
 * or the string "PLACEHOLDER" throughout this file to find every field that
 * must be replaced with real client-provided content before launch.
 *
 * Schemas: Organization + BreadcrumbList (both embedded as JSON-LD)
 */

import type { Metadata } from "next";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Success Stories | Life Skills Training Results | Hidden Potential" },
  description:
    "Real transformations from life skills training at Hidden Potential in Delhi. Student confidence growth, professional breakthroughs, women's empowerment journeys. 5000+ trained. Read their stories.",
  openGraph: {
    title: "Success Stories — Real Transformations from Hidden Potential",
    description:
      "Students, professionals, women, and trainers share how life skills training in Delhi NCR transformed their confidence, communication, and careers. 5000+ trained by Supreet Kaur.",
    type: "website",
    url: "https://hiddenpotentialskills.com/success-stories",
  },
  twitter: {
    card: "summary_large_image",
    title: "Success Stories | Hidden Potential — Life Skills Training Delhi",
    description:
      "Real results from NLP coaching, student programs, women's empowerment, and trainer certification in Delhi NCR.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/success-stories",
  },
};

// ── Schema: Organization ─────────────────────────────────────────────────────
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hidden Potential",
  url: "https://hiddenpotentialskills.com",
  founder: {
    "@type": "Person",
    name: "Supreet Kaur",
    jobTitle: "Founder & Lead Trainer",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110075",
    addressCountry: "IN",
  },
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
      name: "Success Stories",
      item: "https://hiddenpotentialskills.com/success-stories",
    },
  ],
};

// ── Stats data (Section 2) ────────────────────────────────────────────────────
const stats = [
  {
    number: "5000+",
    label: "Individuals Trained",
    context: "Across Delhi, Noida, Gurgaon, Faridabad, and online",
  },
  {
    number: "200+",
    label: "Trainers Certified",
    context: "Through the Train the Trainer Certification program",
  },
  {
    number: "14+",
    label: "Years of Experience",
    context: "Supreet Kaur in education and life skills training",
  },
  {
    number: "1000+",
    label: "Workshops Delivered",
    context: "Schools, corporates, and individual programs across Delhi NCR",
  },
];

// ── Story Categories (Section 3) ──────────────────────────────────────────────
//
// Each category has: label, intro text, and an array of story objects.
// Each story has: name, meta (role/age/location), program, challenge,
// transformation, quote (optional), linkHref, linkLabel.
//
// ⚠️  PLACEHOLDER — Replace all story fields with real client-provided content.
//     Search for "PLACEHOLDER" in this file to find every field to update.
//
const storyCategories = [
  {
    id: "students",
    label: "Student Transformations",
    labelColor: "text-primary-teal" as const,
    intro:
      "Students aged 10 to 21 who developed confidence, communication, and academic resilience through the An Enlightened Learner program and related services.",
    stories: [
      {
        name: "Arjun M.",
        meta: "Age 16 · Dwarka, Delhi",
        program: "An Enlightened Learner",
        challenge:
          "Struggled with extreme exam anxiety and inability to speak in class despite strong academic knowledge. Avoided group discussions and refused to participate in school events.",
        transformation:
          "After 12 weeks, participated in school debate competition and placed in the top three. Exam scores improved by 15%. Now mentors younger students in confidence building sessions organised by the school.",
        quote: "I didn't think I could ever speak in front of a crowd. The program didn't just teach me skills — it changed how I see myself.",
        linkHref: "/programs/enlightened-learner",
        linkLabel: "Explore An Enlightened Learner →",
      },
      {
        name: "Priya S.",
        meta: "Age 17 · Gurgaon",
        program: "Study Skills + Stress Management",
        challenge:
          "Board exam pressure leading to recurrent panic attacks and significant academic underperformance despite consistent home study. Parents noticed withdrawal and loss of sleep.",
        transformation:
          "Learned NLP-based anchoring and state management techniques across an 8-week intensive. Board exam results exceeded both student and family expectations. Now manages competitive exam pressure independently using tools learned at Hidden Potential.",
        quote: "My parents noticed the change before I did. I was calmer, more focused, and actually sleeping again before exams.",
        linkHref: "/services/study-skills",
        linkLabel: "Explore Study Skills Training →",
      },
      {
        name: "Rahul T.",
        meta: "Age 20 · South Delhi",
        program: "Communication Mastery",
        challenge:
          "Social anxiety preventing participation in group discussions and campus placement interviews despite a strong academic record. Multiple interview rejections had compounded self-doubt.",
        transformation:
          "Completed the Communication Mastery program with focus on assertiveness, public speaking, and confidence anchoring. Successfully cleared campus placements at a top company. Attributes success directly to state management and communication frameworks learned at Hidden Potential.",
        quote: "Three rejections taught me nothing. Three months with Supreet Kaur taught me everything I needed for that fourth interview — and I got the offer.",
        linkHref: "/programs/communication-mastery",
        linkLabel: "Explore Communication Mastery →",
      },
    ],
  },
  {
    id: "professionals",
    label: "Professional Breakthroughs",
    labelColor: "text-primary-teal" as const,
    intro:
      "Working professionals in Delhi NCR who broke through career plateaus, developed leadership presence, and transformed workplace effectiveness.",
    stories: [
      {
        name: "Vikram R.",
        meta: "Senior Analyst · IT · Gurgaon",
        program: "NLP Coaching (Individual)",
        challenge:
          "Five-plus years in the same role with strong technical skills but an inability to command leadership conversations. Passed over for promotion twice. Colleagues with fewer qualifications were being promoted ahead.",
        transformation:
          "After three months of structured NLP coaching with Supreet Kaur at Hidden Potential, received promotion to senior leadership. Attributes the change specifically to belief restructuring and communication pattern rewiring — not additional technical training.",
        quote: "My manager told me she noticed a different energy in my meetings. I wasn't just smarter — I was finally present, confident, and leading.",
        linkHref: "/services/nlp-coaching",
        linkLabel: "Explore NLP Coaching →",
      },
      {
        name: "Aisha K.",
        meta: "Project Manager · Noida",
        program: "Communication Mastery + Stress Management",
        challenge:
          "Chronic workplace stress affecting daily performance and personal relationships. Communication breakdowns with team members leading to repeated project delays and loss of confidence in leadership ability.",
        transformation:
          "Developed emotional state management tools and assertive communication frameworks over a structured 12-week pathway. Team feedback improved significantly in the next quarterly review. Reports feeling in control for the first time in years.",
        quote: "I stopped surviving my workday and started leading it. That shift came from understanding my own patterns — something no corporate training had ever taught me.",
        linkHref: "/programs/communication-mastery",
        linkLabel: "Explore Communication Mastery →",
      },
    ],
  },
  {
    id: "women",
    label: "Women's Empowerment Journeys",
    labelColor: "text-primary-teal" as const,
    intro:
      "Women aged 28 and above who rebuilt confidence, reclaimed identity, and transformed personal and professional trajectories through Self Mastery for Women.",
    stories: [
      {
        name: "Meena D.",
        meta: "Age 38 · Dwarka, Delhi",
        program: "Self Mastery for Women",
        challenge:
          "After fifteen years of prioritising family responsibilities, had completely lost her sense of personal identity and professional confidence. Described feeling invisible in social situations and unable to make simple decisions without seeking external approval.",
        transformation:
          "Through twelve weeks of NLP-based self-mastery at Hidden Potential in Dwarka, started a home business, rebuilt social connections, and regained decision-making confidence. Reports feeling like herself again for the first time in years.",
        quote: "Somewhere between being a wife, a mother, and a daughter-in-law, I had disappeared. This program helped me find myself again — and that changed everything.",
        linkHref: "/programs/self-mastery-women",
        linkLabel: "Explore Self Mastery for Women →",
      },
      {
        name: "Sunita P.",
        meta: "Age 33 · Noida",
        program: "Self Mastery + Confidence Building",
        challenge:
          "Sustained workplace bullying over two years had severely eroded self-worth. Developed anxiety around speaking in meetings and avoided professional interactions wherever possible.",
        transformation:
          "NLP confidence anchoring and belief restructuring through Hidden Potential transformed workplace presence within eight weeks. Now leads team meetings independently and mentors junior colleagues.",
        quote: "I used to rehearse what I would say in meetings and still go blank. Now I walk in knowing I have something valuable to contribute — and I say it.",
        linkHref: "/services/confidence-building",
        linkLabel: "Explore Confidence Building →",
      },
    ],
  },
  {
    id: "trainers",
    label: "Trainer Certification Success",
    labelColor: "text-primary-teal" as const,
    intro:
      "Aspiring trainers and educators who completed the Train the Trainer Certification and now deliver life skills programs across Delhi NCR.",
    stories: [
      {
        name: "Deepak S.",
        meta: "Former HR Manager · Delhi",
        program: "Train the Trainer Certification (3-Month)",
        challenge:
          "Wanted to transition from a corporate career into training and facilitation but had no structured methodology, curriculum design experience, or formal certification to attract school and institutional clients.",
        transformation:
          "Completed the 3-month Train the Trainer Certification at Hidden Potential. Now delivers life skills workshops at three schools across Delhi NCR. Has independently trained over 200 students and is in partnership discussions with two additional schools.",
        quote: "The certification gave me the framework I was missing. I didn't just learn what to teach — I learned how to transform a room full of teenagers into engaged, reflective learners.",
        linkHref: "/programs/train-the-trainer",
        linkLabel: "Explore Train the Trainer Certification →",
      },
      {
        name: "Kavita M.",
        meta: "Former School Teacher · Gurgaon",
        program: "Train the Trainer Certification",
        challenge:
          "School teacher wanting to go beyond traditional classroom instruction and engage students through life skills facilitation. Felt constrained by conventional pedagogy and wanted structured methodology to deliver meaningful change.",
        transformation:
          "NLP integration and curriculum design training from Hidden Potential transformed classroom engagement measurably. School administration reports improved student participation across all assessed metrics. Now independently certified to deliver life skills sessions with a dedicated slot in the school timetable.",
        quote: "I became a teacher because I wanted to change lives. This certification finally gave me the tools to actually do that — not just deliver content, but facilitate real growth.",
        linkHref: "/programs/train-the-trainer",
        linkLabel: "Explore Train the Trainer Certification →",
      },
    ],
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
export default function SuccessStoriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
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
        {/* Top-right purple glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 85% 20%, rgba(109,40,217,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Bottom-left gold glow */}
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
              Real Transformations
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Success Stories — Real Results from Life Skills Training in Delhi
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
            5000+ individuals. Hundreds of stories. Here are some that define what Hidden Potential makes possible.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            Every number represents a real person. A student who walked into their first session
            unable to make eye contact and walked out leading group discussions. A professional in
            Gurgaon who broke through a five-year career plateau after{" "}
            <Link href="/services/nlp-coaching" className="text-white/80 hover:text-white underline underline-offset-2 transition-colors">
              NLP coaching
            </Link>
            . A woman in Dwarka who rebuilt her confidence after years of self-suppression. A
            teacher in Noida who became a{" "}
            <Link href="/programs/train-the-trainer" className="text-white/80 hover:text-white underline underline-offset-2 transition-colors">
              certified life skills trainer
            </Link>
            . These are not hypothetical outcomes — they are documented transformations from life
            skills training at Hidden Potential, guided by{" "}
            <Link href="/about" className="text-white/80 hover:text-white underline underline-offset-2 transition-colors">
              Supreet Kaur
            </Link>{" "}
            over 14+ years across Delhi NCR.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/enroll"
              className="btn-premium-fill"
            >
              Start Your Own Story
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </Link>
            <Link
              href="/contact"
              className="btn-premium-ghost-plain"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "5000+ Trained",
              "14+ Years",
              "200+ Trainers Certified",
              "Delhi, Noida, Gurgaon, Faridabad",
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
          SECTION 2 — IMPACT NUMBERS
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>Our Impact</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy leading-tight">
              The Numbers Behind the Transformations
            </h2>
          </div>

          {/* 4-column stats grid — 2-col mobile, 4-col desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center flex flex-col items-center"
              >
                <span className="text-4xl md:text-5xl font-bold text-primary-teal leading-none mb-2">
                  {s.number}
                </span>
                <span className="text-sm font-semibold text-primary-navy mb-1.5 leading-snug">
                  {s.label}
                </span>
                <span className="text-xs text-charcoal/70 leading-relaxed text-center">
                  {s.context}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — SUCCESS STORIES BY CATEGORY
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <SectionLabel>Their Stories</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Transformations Across Every Age, Stage, and Challenge
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              From students finding their voice to professionals commanding boardrooms, from women
              reclaiming their identity to teachers becoming certified trainers — life skills
              training at Hidden Potential produces transformation that is visible, measurable, and
              lasting. Stories below are organised by audience group. Participant names have been
              abbreviated or anonymised to protect privacy.
            </p>
          </div>

          {/* ── 4 story categories ── */}
          <div className="flex flex-col gap-20">
            {storyCategories.map((category) => (
              <div key={category.id}>

                {/* Category header */}
                <div className="border-l-4 border-primary-gold pl-5 mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-gold mb-1">
                    {category.label}
                  </p>
                  <p className="text-sm text-charcoal/70 leading-relaxed max-w-2xl">
                    {category.intro}
                  </p>
                </div>

                {/* Story cards grid */}
                {/* PLACEHOLDER — Replace story data in the storyCategories array above */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {category.stories.map((story, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
                    >
                      {/* Card top — gold accent bar */}
                      <div
                        className="h-1 w-full"
                        style={{ background: "#C8A951" }}
                      />

                      <div className="p-6 flex flex-col flex-1">
                        {/* Name + meta */}
                        {/* PLACEHOLDER — Replace name and meta with real participant details */}
                        <div className="mb-4">
                          <p className="font-bold text-primary-navy text-[15px] leading-snug">
                            {story.name}
                          </p>
                          <p className="text-xs text-charcoal/50 mt-0.5 leading-relaxed">
                            {story.meta}
                          </p>
                          <span
                            className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-primary-teal bg-teal-light px-2 py-0.5 rounded-full"
                          >
                            {story.program}
                          </span>
                        </div>

                        {/* The Challenge */}
                        {/* PLACEHOLDER — Replace challenge text with real participant's challenge */}
                        <div className="mb-4">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-primary-navy mb-1.5">
                            The Challenge
                          </p>
                          <p className="text-sm text-charcoal/70 leading-relaxed">
                            {story.challenge}
                          </p>
                        </div>

                        {/* The Transformation */}
                        {/* PLACEHOLDER — Replace transformation text with real outcome details */}
                        <div className="mb-4 flex-1">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-primary-teal mb-1.5">
                            The Transformation
                          </p>
                          <p className="text-sm text-charcoal/70 leading-relaxed">
                            {story.transformation}
                          </p>
                        </div>

                        {/* Quote — Lora italic (only shown if quote is provided) */}
                        {/* PLACEHOLDER — Replace empty string with actual participant quote, or remove this block if no quote */}
                        {story.quote && (
                          <blockquote
                            className="border-l-2 border-primary-gold pl-3 mb-4"
                            style={{
                              fontFamily: "var(--font-accent)",
                              fontStyle: "italic",
                            }}
                          >
                            <p className="text-sm text-charcoal/80 leading-relaxed">
                              &ldquo;{story.quote}&rdquo;
                            </p>
                          </blockquote>
                        )}

                        {/* Program link */}
                        <Link
                          href={story.linkHref}
                          className="mt-auto text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                        >
                          {story.linkLabel}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Internal link nudge */}
          <div className="mt-16 text-center">
            <p className="text-sm text-charcoal/50">
              Want to read more?{" "}
              <Link
                href="/contact"
                className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
              >
                Contact us to speak with a past participant →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — SHARE YOUR STORY
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Your Story Matters</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 leading-tight">
            Have You Trained with Hidden Potential? Share Your Story
          </h2>
          <p className="text-base text-charcoal/75 leading-relaxed mb-8 max-w-2xl mx-auto">
            If you are a past participant of any Hidden Potential program — as a student,
            professional, woman, or certified trainer — we would love to hear your story. Your
            experience helps others in Delhi, Noida, Gurgaon, and Faridabad make the decision to
            invest in their own transformation. Stories are shared with your consent, and your
            privacy is always respected. Contact us to share your journey.
          </p>

          {/* CTA */}
          <Link
            href="/contact"
            className="btn-premium-fill"
          >
            Share Your Story
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

          {/* Supporting internal links */}
          <p className="text-xs text-charcoal/45 mt-8 leading-relaxed">
            Explore programs:{" "}
            <Link href="/programs/enlightened-learner" className="text-primary-teal hover:text-teal-dark font-semibold transition-colors">
              An Enlightened Learner
            </Link>
            {" · "}
            <Link href="/programs/self-mastery-women" className="text-primary-teal hover:text-teal-dark font-semibold transition-colors">
              Self Mastery for Women
            </Link>
            {" · "}
            <Link href="/programs/train-the-trainer" className="text-primary-teal hover:text-teal-dark font-semibold transition-colors">
              Train the Trainer
            </Link>
            {" · "}
            <Link href="/programs/art-therapy" className="text-primary-teal hover:text-teal-dark font-semibold transition-colors">
              Art Therapy
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — BOTTOM CTA
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
            Ready to Write Your Own Success Story?
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Every success story on this page started exactly where you are right now — wondering
            whether life skills training could actually make a difference. The answer, documented
            across 5000+ individuals over 14+ years, is yes. Whether you are a student in Dwarka,
            a professional in Gurgaon, a woman in Noida, or a teacher in Faridabad,{" "}
            <Link href="/about" className="text-white/80 hover:text-white underline underline-offset-2 transition-colors">
              Supreet Kaur
            </Link>{" "}
            and the Hidden Potential team are ready to help you create your own transformation.
            The only question is when you decide to begin.
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

          {/* Cross-sell */}
          <p className="text-xs text-white/40 mb-4">
            Explore programs:{" "}
            <Link
              href="/programs/enlightened-learner"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              An Enlightened Learner
            </Link>
            <span className="mx-1.5 text-white/20">·</span>
            <Link
              href="/services/nlp-coaching"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              NLP Coaching
            </Link>
            <span className="mx-1.5 text-white/20">·</span>
            <Link
              href="/programs/self-mastery-women"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Self Mastery for Women
            </Link>
            <span className="mx-1.5 text-white/20">·</span>
            <Link
              href="/programs/train-the-trainer"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Train the Trainer
            </Link>
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

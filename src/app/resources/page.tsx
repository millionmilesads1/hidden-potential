/**
 * SUPPORTING PAGE — BOOKS & RESOURCES
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /resources
 *
 * E-E-A-T and authority page showcasing Supreet Kaur's published books,
 * recommended reading, and free resources from Hidden Potential.
 *
 * Custom 5-section layout:
 *   Section 1 — HERO                  (dark gradient)
 *   Section 2 — BOOKS BY SUPREET KAUR (off-white, book cards)
 *   Section 3 — RECOMMENDED READING   (white, 10 book cards in 2-col grid)
 *   Section 4 — FREE RESOURCES        (navy-light, 5 resource cards)
 *   Section 5 — BOTTOM CTA            (dark gradient)
 *
 * Schemas: CollectionPage + BreadcrumbList
 */

import type { Metadata } from "next";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Books & Resources | Life Skills, NLP & Personal Development | Hidden Potential" },
  description:
    "Recommended books and resources on life skills, NLP, emotional intelligence, and personal development. Curated by Supreet Kaur, founder of Hidden Potential. Free resources and reading lists for students, professionals, and trainers.",
  openGraph: {
    title: "Books & Resources — Curated by Supreet Kaur | Hidden Potential",
    description:
      "Life skills, NLP, emotional intelligence, communication, and personal development books and resources. Curated by a certified NLP practitioner with 14+ years experience.",
    type: "website",
    url: "https://hiddenpotentialskills.com/resources",
  },
  twitter: {
    card: "summary_large_image",
    title: "Books & Resources | Life Skills & NLP | Hidden Potential",
    description:
      "Curated reading lists and free resources on life skills, NLP, and personal development.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/resources",
  },
};

// ── Schema: CollectionPage ────────────────────────────────────────────────────
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Books & Resources on Life Skills and NLP",
  description:
    "Curated books and resources on life skills, NLP, emotional intelligence, and personal development by Supreet Kaur, founder of Hidden Potential.",
  author: {
    "@type": "Person",
    name: "Supreet Kaur",
    jobTitle: "Founder & Lead Trainer, Hidden Potential",
  },
  publisher: {
    "@type": "Organization",
    name: "Hidden Potential",
    url: "https://hiddenpotentialskills.com",
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
      name: "Books & Resources",
      item: "https://hiddenpotentialskills.com/resources",
    },
  ],
};

// ── Data: Books by Supreet Kaur (Section 2) ───────────────────────────────────
const supreetBooks = [
  {
    title: "An Enlightened Learner",
    description:
      "Supreet Kaur's guide to structured life skills development for students and young learners. Covers emotional intelligence, communication, self-awareness, and the Foundation → Growth → Mastery framework that underpins Hidden Potential's flagship program.",
    availability: "https://amzn.in/d/08Ijy89H",
    availabilityLabel: "Available on Amazon India",
  },
];

// ── Data: Recommended Reading (Section 3) ────────────────────────────────────
const recommendedBooks = [
  {
    num: "01",
    title: "Frogs into Princes",
    author: "Richard Bandler & John Grinder",
    category: "NLP",
    description:
      "The foundational text on Neuro-Linguistic Programming. Essential reading for anyone beginning their NLP journey. Covers the core concepts of reframing, anchoring, and representational systems.",
    relevance: "Core reading for NLP Coaching participants",
    relevanceHref: "/services/nlp-coaching",
  },
  {
    num: "02",
    title: "Emotional Intelligence",
    author: "Daniel Goleman",
    category: "Emotional Intelligence",
    description:
      "The book that popularised emotional intelligence as a concept. Goleman's research demonstrates why EQ often matters more than IQ for personal and professional success.",
    relevance: "Foundation for Emotional Intelligence Training",
    relevanceHref: "/services/emotional-intelligence",
  },
  {
    num: "03",
    title: "Crucial Conversations",
    author: "Kerry Patterson, Joseph Grenny, et al.",
    category: "Communication",
    description:
      "Practical tools for handling high-stakes conversations where emotions run strong and opinions differ. Directly applicable to professional and personal communication challenges.",
    relevance: "Recommended for Communication Mastery participants",
    relevanceHref: "/programs/communication-mastery",
  },
  {
    num: "04",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    category: "Personal Development",
    description:
      "A principle-centred approach to personal and professional effectiveness. Covers proactivity, goal setting, prioritisation, and interdependent collaboration.",
    relevance: "Complements Goal Setting & Achievement training",
    relevanceHref: "/services/goal-setting",
  },
  {
    num: "05",
    title: "Mindset: The New Psychology of Success",
    author: "Carol S. Dweck",
    category: "Mindset",
    description:
      "Dweck's research on fixed versus growth mindset has transformed education and personal development worldwide. Essential reading for understanding how beliefs shape achievement.",
    relevance: "Foundation for all Hidden Potential programs",
    relevanceHref: "/programs/enlightened-learner",
  },
  {
    num: "06",
    title: "The Gifts of Imperfection",
    author: "Brené Brown",
    category: "Self-Worth",
    description:
      "Brown's research on vulnerability, shame, and worthiness. Particularly relevant for women rebuilding confidence and anyone struggling with perfectionism or imposter syndrome.",
    relevance: "Recommended for Self Mastery for Women participants",
    relevanceHref: "/programs/self-mastery-women",
  },
  {
    num: "07",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Habit Building",
    description:
      "A practical system for building good habits and breaking bad ones. The concept of identity-based habits aligns closely with NLP belief restructuring principles.",
    relevance: "Supports ongoing behavioural transformation",
    relevanceHref: "/services/nlp-coaching",
  },
  {
    num: "08",
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    category: "Communication",
    description:
      "The classic text on interpersonal skills, influence, and relationship building. Timeless principles that complement NLP language patterns and communication training.",
    relevance: "Foundational reading for Communication Skills Training",
    relevanceHref: "/services/communication-skills",
  },
  {
    num: "09",
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    category: "Healing",
    description:
      "Understanding how trauma and stress are stored in the body and how therapeutic approaches including creative expression can facilitate healing. Relevant to art therapy and stress management.",
    relevance: "Background reading for Art Therapy for Healing",
    relevanceHref: "/programs/art-therapy",
  },
  {
    num: "10",
    title: "Training from the Back of the Room",
    author: "Sharon L. Bowman",
    category: "Training Methodology",
    description:
      "Brain-science-based training design that prioritises learner engagement over lecture. Essential reading for anyone pursuing the Train the Trainer Certification.",
    relevance: "Required reading for Train the Trainer participants",
    relevanceHref: "/programs/train-the-trainer",
  },
];

// ── Data: Free Resources (Section 4) ─────────────────────────────────────────
const freeResources = [
  {
    type: "Tool",
    title: "Free Life Skills Assessment",
    desc: "Take our structured assessment to identify your current confidence levels, communication patterns, and development areas. The first step before any program.",
    linkHref: "/assessment",
    linkLabel: "Take the Assessment →",
  },
  {
    type: "Blog",
    title: "Hidden Potential Blog",
    desc: "Articles on life skills, NLP techniques, communication strategies, emotional intelligence, study tips, and career guidance. New content published regularly.",
    linkHref: "/blog",
    linkLabel: "Visit the Blog →",
  },
  {
    type: "Download",
    title: "Program Brochures",
    desc: "Download detailed brochures for An Enlightened Learner, Communication Mastery, Self Mastery for Women, Train the Trainer, and other programs.",
    linkHref: "/contact",
    linkLabel: "Request Brochures →",
  },
  {
    type: "Guide",
    title: "School Program Information Pack",
    desc: "For school principals and administrators: comprehensive information about our NEP 2020 aligned life skills programs, pricing structures, and partnership models.",
    linkHref: "/for/schools",
    linkLabel: "School Programs →",
  },
  {
    type: "Guide",
    title: "Corporate Workshop Proposal Template",
    desc: "For HR managers and L&D teams: overview of corporate workshop topics, delivery formats, and engagement models. Request a customised proposal.",
    linkHref: "/services/workshops",
    linkLabel: "Corporate Workshops →",
  },
];

// ── Category tag colour map ───────────────────────────────────────────────────
// Maps book category labels to a Tailwind bg/text pair for the category pill.
// All use teal-light bg + teal text to stay on-brand.
const categoryStyle =
  "text-[10px] font-bold uppercase tracking-wider text-primary-teal bg-teal-light px-2 py-0.5 rounded-full";

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
export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
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

          {/* Badge */}
            <span
              className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-teal rounded-full mb-5"
              style={{
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              Learn &amp; Grow
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Books &amp; Resources — Life Skills, NLP &amp; Personal Development
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
            The best investment in yourself starts with what you read, practise,
            and apply.
          </p>

          {/* Body */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            Learning does not stop at the end of a training session.{" "}
            <Link
              href="/about"
              className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
            >
              Supreet Kaur
            </Link>{" "}
            has curated a collection of books and resources that complement the
            life skills training delivered at Hidden Potential in Delhi NCR.
            Whether you are a student building foundational skills, a
            professional developing leadership capability, a woman on her
            empowerment journey, or an aspiring trainer building expertise,
            these resources extend your learning beyond the classroom. From{" "}
            <Link
              href="/services/nlp-coaching"
              className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
            >
              NLP foundations
            </Link>{" "}
            to emotional intelligence, communication mastery to personal
            development, this reading list represents the knowledge base behind
            14+ years of transformational training in Dwarka, Delhi.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/enroll"
              className="btn-premium-fill"
            >
              Explore Programs Instead
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </Link>
            <Link
              href="/contact"
              className="btn-premium-ghost-plain"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "Curated by Supreet Kaur",
              "NLP Practitioner",
              "14+ Years Experience",
              "Delhi NCR & Online",
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
          SECTION 2 — BOOKS BY SUPREET KAUR
          Background: Off-white
          ⚠️  PLACEHOLDER SECTION
          Replace ALL book fields with real client-provided details.
          Remove this entire section if no books have been published.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>By Supreet Kaur</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-2xl">
              Publications by Supreet Kaur
            </h2>
            <p className="text-base text-charcoal/70 leading-relaxed max-w-3xl">
              <Link
                href="/about"
                className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
              >
                Supreet Kaur
              </Link>{" "}
              brings 14+ years of experience, NLP certification, Harvard-affiliated
              Life Skills training, and a Masters in Psychology to her writing.
              Her publications reflect the same practical, NLP-based approach used
              in Hidden Potential&apos;s programs across Delhi, Noida, Gurgaon, and
              Faridabad.
            </p>
          </div>

          {/* PLACEHOLDER — 2 book cards. Replace with real data from client. */}
          <div className="grid md:grid-cols-2 gap-8">
            {supreetBooks.map((book, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                {/* PLACEHOLDER — Book cover image area */}
                {/* Replace this div with next/image when real cover is available */}
                <div
                  className="flex items-center justify-center h-52 border-b border-gray-100"
                  style={{ background: "#F3F0FF" }}
                >
                  <div className="text-center">
                    {/* PLACEHOLDER: Replace with <Image> of actual book cover */}
                    <div className="w-24 h-32 bg-navy-light border-2 border-primary-teal/20 rounded-sm mx-auto mb-3 flex items-center justify-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary-teal/60 text-center px-1 leading-tight">
                        Book Cover
                      </span>
                    </div>
                    <p className="text-[10px] text-charcoal/35 uppercase tracking-wider">
                      {/* PLACEHOLDER */}
                      Cover image to be added
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* PLACEHOLDER — Replace title with real book title */}
                  <h3 className="text-lg font-bold text-primary-navy mb-2 leading-snug">
                    {book.title}
                  </h3>
                  {/* PLACEHOLDER — Replace description with real book description */}
                  <p className="text-sm text-charcoal/70 leading-relaxed flex-1 mb-4">
                    {book.description}
                  </p>
                  {/* PLACEHOLDER — Replace # href with real purchase/info link */}
                  <a
                    href={book.availability}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-teal hover:text-teal-dark transition-colors"
                  >
                    {book.availabilityLabel}
                    <svg
                      className="w-3 h-3"
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
                </div>
              </div>
            ))}
          </div>

          {/* Nudge to contact for book enquiries */}
          <p className="text-center text-sm text-charcoal/70 mt-10">
            For bulk orders or speaking enquiries related to publications,{" "}
            <Link
              href="/contact"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              contact Hidden Potential directly →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — RECOMMENDED READING
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Recommended Reading</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Books That Complement Your Life Skills Journey
            </h2>
            <p className="text-base text-charcoal/70 leading-relaxed max-w-3xl">
              These books are personally recommended by{" "}
              <Link
                href="/about"
                className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
              >
                Supreet Kaur
              </Link>{" "}
              and form the intellectual foundation behind Hidden Potential&apos;s
              training methodology in Delhi NCR. Each book is tagged with the
              program it most closely supports. These are reading suggestions only
              — no affiliate links.
            </p>
          </div>

          {/* 10 book cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {recommendedBooks.map((book) => (
              <div
                key={book.num}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                {/* Number + category pill row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold tabular-nums text-charcoal/35">
                    {book.num}
                  </span>
                  <span className={categoryStyle}>{book.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-primary-navy leading-snug mb-1">
                  {book.title}
                </h3>

                {/* Author */}
                <p className="text-xs text-charcoal/55 mb-3 font-medium">
                  {book.author}
                </p>

                {/* Description */}
                <p className="text-sm text-charcoal/70 leading-relaxed flex-1 mb-4">
                  {book.description}
                </p>

                {/* Recommended for — italic muted, links to program */}
                <p className="text-xs text-charcoal/45 italic leading-relaxed">
                  Recommended for:{" "}
                  <Link
                    href={book.relevanceHref}
                    className="not-italic font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                  >
                    {book.relevance}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — FREE RESOURCES
          Background: Navy-light (#F3F0FF)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-navy-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Free Resources</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Free Tools and Resources from Hidden Potential
            </h2>
            <p className="text-base text-charcoal/70 leading-relaxed max-w-3xl">
              Beyond reading, Hidden Potential provides practical tools, guides,
              and resources to help you begin or deepen your life skills journey
              — whether you are a student in Delhi, a professional in Gurgaon, a
              school administrator in Noida, or an HR manager in Faridabad.
            </p>
          </div>

          {/* 5 resource cards — 2-col to 3-col grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {freeResources.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col relative"
              >
                {/* Type badge — top right */}
                <span
                  className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-primary-teal bg-teal-light px-2 py-0.5 rounded-full"
                >
                  {r.type}
                </span>

                {/* Title */}
                <h3 className="font-bold text-primary-navy text-[15px] leading-snug mb-2 pr-16">
                  {r.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-charcoal/70 leading-relaxed flex-1 mb-4">
                  {r.desc}
                </p>

                {/* Link */}
                <Link
                  href={r.linkHref}
                  className="text-xs font-bold text-primary-teal hover:text-teal-dark transition-colors"
                >
                  {r.linkLabel}
                </Link>
              </div>
            ))}
          </div>
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
            Reading Is the Beginning. Training Is the Transformation.
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Books give you knowledge. Structured life skills training with
            NLP-based techniques gives you transformation. If you are inspired
            by what you have read, the next step is experiencing it firsthand.
            Hidden Potential&apos;s programs in Delhi NCR take the principles
            from these books and turn them into practical, measurable skills
            through assessment, structured practice, and expert guidance from{" "}
            <Link
              href="/about"
              className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
            >
              Supreet Kaur
            </Link>{" "}
            and her team.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/enroll"
              className="btn-premium-fill"
            >
              Explore Programs
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </Link>
            <Link
              href="/contact"
              className="btn-premium-ghost-plain"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Cross-sell */}
          <p className="text-xs text-white/40 mb-4">
            Start here:{" "}
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
              href="/for/professionals"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              For Professionals
            </Link>
            <span className="mx-1.5 text-white/20">·</span>
            <Link
              href="/for/young-adults"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              For Young Adults
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

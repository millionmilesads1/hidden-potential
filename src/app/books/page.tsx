import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Books by Supreet Kaur | Hidden Potential",
  description:
    "Explore books by Supreet Kaur — 'An Enlightened Learner: A Toolkit To Become A Better Learner' and 'Discover Your Potential Book'. Life-transforming reads available on Amazon.",
  alternates: { canonical: "https://hiddenpotentialskills.com/books" },
  openGraph: {
    title: "Books by Supreet Kaur | Hidden Potential",
    description:
      "Life-transforming books by Supreet Kaur, NLP Coach & Life Skills Trainer.",
    type: "website",
    url: "https://hiddenpotentialskills.com/books",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Book",
      name: "An Enlightened Learner",
      author: { "@type": "Person", name: "Supreet Kaur" },
      description: "A Toolkit To Become A Better Learner",
      url: "https://amzn.in/d/08Ijy89H",
    },
    {
      "@type": "Book",
      name: "Discover Your Potential Book",
      author: { "@type": "Person", name: "Supreet Kaur" },
      description: "A self-development workbook covering wellness, goal-setting, and personal growth.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hiddenpotentialskills.com" },
        { "@type": "ListItem", position: 2, name: "Books", item: "https://hiddenpotentialskills.com/books" },
      ],
    },
  ],
};

const books = [
  {
    id: "enlightened-learner",
    title: "An Enlightened Learner",
    subtitle: "A Toolkit To Become A Better Learner",
    image: "/gallery/08_Book/img-001.jpg",
    imageAlt: "An Enlightened Learner by Supreet Kaur on a bookshelf",
    description:
      "A practical, structured toolkit that bridges the gap between conventional academics and the life skills every young person truly needs. Built from 14+ years of hands-on experience with students, parents, and educators across India.",
    themes: [
      "Self-Awareness & Emotional Regulation",
      "Structured Study Skills & Learning Habits",
      "Communication & Confident Expression",
      "Managing Stress & Academic Pressure",
      "Identity Clarity & Purpose-Driven Motivation",
      "Parent–Child Growth Partnership",
    ],
    amazonUrl: "https://amzn.in/d/08Ijy89H",
    programHref: "/programs/enlightened-learner",
    programLabel: "See the Program",
  },
  {
    id: "discover-your-potential",
    title: "Discover Your Potential Book",
    subtitle: "A Self-Development Workbook",
    image: "/gallery/08_Book/img-002.jpg",
    imageAlt: "Discover Your Potential Book and An Enlightened Learner by Supreet Kaur",
    description:
      "An interactive workbook designed to help you uncover hidden strengths and build a life of intentional growth. Covering physical wellness, mental fitness, goal-setting, and mindfulness — this hands-on guide turns self-discovery into daily structured action.",
    themes: [
      "Physical Wellness & Body Confidence",
      "Mental Fitness & Brain Health",
      "Goal-Setting & Achievement Frameworks",
      "Mindfulness & Stress Management",
      "Self-Discovery & Core Values",
      "Turning Insights Into Consistent Action",
    ],
    amazonUrl: "https://www.amazon.in/stores/author/B08HPKX6PW",
    programHref: "/programs/self-mastery-women",
    programLabel: "See Self Mastery Program",
  },
];

export default function BooksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden grain-overlay"
        style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)" }}
        aria-labelledby="books-h1"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <AnimateIn delay={0}>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs mb-6"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span aria-hidden="true">/</span>
                <span style={{ color: "rgba(255,255,255,0.65)" }}>Books</span>
              </nav>
            </AnimateIn>

            <AnimateIn delay={0.05}>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
                style={{
                  background: "rgba(200,169,81,0.15)",
                  color: "#C8A951",
                  border: "1px solid rgba(200,169,81,0.3)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Published Works
              </span>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h1
                id="books-h1"
                className="font-bold text-white leading-tight mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                }}
              >
                Books by{" "}
                <br className="hidden sm:block" />
                <span style={{ color: "#C8A951" }}>Supreet Kaur</span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <p
                className="leading-relaxed mb-8"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "1.0625rem",
                  fontFamily: "var(--font-body)",
                  maxWidth: "440px",
                }}
              >
                14+ years of transformational work distilled into books that
                reshape how students, parents, and seekers approach learning
                and self-development.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://amzn.in/d/08Ijy89H"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium-fill"
                >
                  Buy on Amazon
                  <span className="btn-icon-circle" aria-hidden="true">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                <Link href="/about" className="btn-premium-ghost-plain">
                  About the Author
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Hero image — both books on marble */}
          <AnimateIn delay={0.25}>
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                aspectRatio: "4/3",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src="/gallery/08_Book/img-002.jpg"
                alt="An Enlightened Learner and Discover Your Potential Book by Supreet Kaur"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Book cards ── */}
      <section
        className="py-20 md:py-28"
        style={{ background: "#F8F6F2" }}
        aria-label="Books"
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2
                className="font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  color: "#2D1B69",
                }}
              >
                All Titles
              </h2>
              <p
                className="mt-2 text-sm"
                style={{ color: "#6B6B6B", fontFamily: "var(--font-body)" }}
              >
                Available on Amazon India
              </p>
            </div>
          </AnimateIn>

          <div className="flex flex-col gap-10">
            {books.map((book, idx) => (
              <AnimateIn key={book.id} delay={idx * 0.1}>
                <article
                  className="rounded-2xl overflow-hidden bg-white"
                  style={{
                    boxShadow: "0 2px 24px rgba(45,27,105,0.07)",
                    border: "1px solid rgba(45,27,105,0.07)",
                  }}
                  aria-labelledby={`title-${book.id}`}
                >
                  <div className="grid md:grid-cols-[380px_1fr]">

                    {/* Photo — natural, no tinting */}
                    <div className="relative min-h-[280px] md:min-h-0 overflow-hidden">
                      <Image
                        src={book.image}
                        alt={book.imageAlt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 380px"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                      <span
                        className="inline-block w-fit text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
                        style={{
                          background: "#EDE9FE",
                          color: "#7C3AED",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        By Supreet Kaur
                      </span>

                      <h3
                        id={`title-${book.id}`}
                        className="font-bold leading-tight mb-1"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)",
                          color: "#2D1B69",
                        }}
                      >
                        {book.title}
                      </h3>

                      <p
                        className="font-medium mb-5 text-sm"
                        style={{ color: "#7C3AED", fontFamily: "var(--font-body)" }}
                      >
                        {book.subtitle}
                      </p>

                      <p
                        className="leading-relaxed mb-7 text-sm"
                        style={{
                          color: "#2D2D2D",
                          opacity: 0.75,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {book.description}
                      </p>

                      {/* Themes */}
                      <div className="mb-8">
                        <p
                          className="text-[10px] font-bold tracking-widest uppercase mb-3"
                          style={{ color: "#C8A951", fontFamily: "var(--font-body)" }}
                        >
                          Key Themes
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2" role="list">
                          {book.themes.map((t) => (
                            <li
                              key={t}
                              className="flex items-start gap-2 text-sm"
                              style={{ color: "#2D2D2D", fontFamily: "var(--font-body)" }}
                            >
                              <svg
                                className="w-3.5 h-3.5 shrink-0 mt-0.5"
                                viewBox="0 0 14 14"
                                fill="none"
                                aria-hidden="true"
                              >
                                <circle cx="7" cy="7" r="7" fill="#EDE9FE" />
                                <path
                                  d="M4.5 7l1.75 1.75 3.25-3.5"
                                  stroke="#7C3AED"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={book.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                          style={{
                            background: "#7C3AED",
                            fontFamily: "var(--font-body)",
                            boxShadow: "0 4px 16px rgba(124,58,237,0.3)",
                          }}
                        >
                          Buy on Amazon
                          <svg className="w-3.5 h-3.5 opacity-80" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                        <Link
                          href={book.programHref}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-[1.02]"
                          style={{
                            background: "#F3F0FF",
                            color: "#7C3AED",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {book.programLabel}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Author CTA ── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)" }}
        aria-labelledby="author-cta-heading"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#C8A951", fontFamily: "var(--font-body)" }}
            >
              About the Author
            </p>
            <h2
              id="author-cta-heading"
              className="font-bold text-white mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              }}
            >
              14+ Years.{" "}
              <span style={{ color: "#C8A951" }}>5,000+ Lives Transformed.</span>
            </h2>
            <p
              className="leading-relaxed mb-8 mx-auto"
              style={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: "500px",
                fontFamily: "var(--font-body)",
              }}
            >
              Supreet Kaur is an NLP-certified life skills trainer, educator,
              and author whose work spans schools, universities, and corporate
              training across Delhi NCR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="btn-premium-ghost-plain">
                Meet Supreet Kaur
              </Link>
              <Link href="/assessment" className="btn-premium-fill">
                Take the Assessment
                <span className="btn-icon-circle" aria-hidden="true">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

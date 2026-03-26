/**
 * SUPPORTING PAGE - SUCCESS STORIES
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /success-stories
 *
 * This is a testimonial/case-study showcase page (NOT the standard 7-section
 * service page structure). It uses the same Tailwind class patterns, metadata
 * format, and schema approach as app/services/nlp-coaching/page.tsx.
 *
 * 5-section custom layout:
 *   Section 1 - HERO               (dark gradient, H1, Lora italic, body, 2 CTAs, trust)
 *   Section 2 - IMPACT NUMBERS     (off-white, 4-col stats grid)
 *   Section 3 - STORIES BY CATEGORY(white, 4 categories × 2–3 story cards each)
 *   Section 4 - SHARE YOUR STORY   (off-white, invite CTA)
 *   Section 5 - BOTTOM CTA         (dark gradient, 2 CTAs, cross-sell, location line)
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
    title: "Success Stories - Real Transformations from Hidden Potential",
    description:
      "Students, professionals, women, and trainers share how life skills training in Delhi NCR transformed their confidence, communication, and careers. 5000+ trained by Supreet Kaur.",
    type: "website",
    url: "https://hiddenpotentialskills.com/success-stories",
  },
  twitter: {
    card: "summary_large_image",
    title: "Success Stories | Hidden Potential - Life Skills Training Delhi",
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

// ── Expert Endorsements (Section 2.5) ────────────────────────────────────────
const expertTestimonials = [
  {
    name: "Dr. Subodh Kumar",
    title: "Psychotechnologist, Cognitive Psychologist, Author",
    initials: "SK",
    photo: "/images/testimonials/expert-1-dr-subodh-kumar.jpg",
    quote:
      "Ms. Supreet Kaur has an exceptional proficiency in communication, team building, life skills training, counseling, time management, and goal setting. Her life skills training sessions and she herself is a valuable asset in any professional environment. Supreet's expertise in counseling and time management underscores her commitment to both personal and professional development.",
  },
  {
    name: "Amitabh S Karmakar",
    title: "Psychologist, Psychotherapy Healer, NLP Coach - 9 Awards in Human Psychology",
    initials: "AK",
    photo: "/images/testimonials/expert-2-amitabh-karmakar.jpg",
    quote:
      "I really loved Supreet's memory recalling technique and smart study skills. By which I have got tremendous benefit and my students also got a huge amount of benefits. I strongly recommend Supreet's life skills program to all the kids. It's need of the hour. God bless you, Supreet, continue doing the best work.",
  },
  {
    name: "Kaushik Mahapatraasia",
    title: "Leading Leadership Coach, International Speaker, Founder - Indian Leadership Academy",
    initials: "KM",
    photo: "/images/testimonials/expert-3-kaushik-mahapatra.jpg",
    quote:
      "Supreet's mastery on life skills is truly commendable. I am sure her ability to navigate challenges with resilience and adaptability will help her excel in every aspect of life. Thank you for being a role model of wisdom and integrity. Keep training and coaching, and thanks for supporting Indian Leadership Academy as always.",
  },
  {
    name: "Nita Arora",
    title: "Principal and Director, SVIS",
    initials: "NA",
    photo: "/images/testimonials/expert-4-nita-arora.jpg",
    quote:
      "Supreet understands child, adolescent and adults psychology. Her degree of empathy is very high. She brings out the hidden potential of her clients and helps them develop it further. I have seen her work selflessly during the COVID times, grooming many youngsters. Her book is a gem of a book worth prescribing as a life skills book.",
  },
  {
    name: "Brig Arun Gupta",
    title: "Corporate Trainer, Coach and Author",
    initials: "AG",
    photo: "/images/testimonials/expert-5-brig-arun-gupta.jpg",
    quote:
      "I have known Supreet for quite some time. She is a wonderful trainer and a coach who possesses the ability to tackle various problems faced by clients with the most effective skills. Supreet's clients have all the praise for her: she first understands the challenges faced by them and then finds the most effective way to deal with it. I very strongly recommend Supreet for coaching on life skills.",
  },
];

// ── Community Reviews (Section 3) ────────────────────────────────────────────
// Real Google reviews from Hidden Potential participants.
const communityReviews = [
  {
    name: "SarabjitMadan",
    initials: "SM",
    stars: 5,
    quote:
      "We connected with Supreet Mam (Hidden Potential) last year for our son who was studying in 7th standard. We had been researching ways to improve memory retention and effective learning techniques. We have gained immensely from these sessions. She introduced us to techniques such as focussing on the concept, marking the key words, and active recall. The effect has been nothing short of amazing. Our son has even become self reliant in implementing them. Her passion to bring the best potential out of people is a noble initiative.",
  },
  {
    name: "Amrita Kaur",
    initials: "AK",
    stars: 5,
    quote:
      "It has been a fantabulous experience. Supreet ma'am is not only an awesome life skill coach but also one of the best humans I've come across till today. My 13 year old boy loved her lessons and is trying to implement them in his personal as well as student life. Such kind of life skill training is not going to be less than a blessing.",
  },
  {
    name: "Lalit Sharma",
    initials: "LS",
    stars: 5,
    quote:
      "I approached Supreet Ma'am for the career counselling of my son and the results are unbelievable. A few weeks ago my son had no clarity about his vision; today he is clear about his goals and what he has to achieve in his life. My family is really thankful to Supreet ma'am for helping my kid in career counselling and making his life vision clear.",
  },
  {
    name: "Suhani Bhardwaj",
    initials: "SB",
    stars: 5,
    quote:
      "Supreet Ma'am's Hidden Potential counselling session with the school students was extremely impactful. She connects in a friendly and motivating way, helping us to understand our strengths, weaknesses, and career possibilities. Her explanations were clear, relatable, and filled with real-life examples. We walked out feeling more confident, focused, and aware of our goals.",
  },
  {
    name: "Balquise Banu",
    initials: "BB",
    stars: 5,
    quote:
      "Supreet Kaur is an empathetic person who understands our needs in the journey of self mastery and creates modules accordingly. Her authenticity and making herself available makes Hidden Potential stand out. I personally believe she is excellent in her mentoring approach and hand holds till we reach our goals. Anyone who is interested to enrich their life can approach Hidden Potential to achieve their aspirations.",
  },
  {
    name: "Sanjeev Srivastava",
    initials: "SS",
    stars: 5,
    quote:
      "My niece underwent career counselling and a detailed analysis on her personality traits for the right career by Supreet Ma'am. I must say that this analysis was done so diligently and professionally. It has helped her a lot and there is a clear sense of direction now. Highly appreciate Supreet Ma'am.",
  },
  {
    name: "Anita Chitkara",
    role: "Mentor Teacher",
    initials: "AC",
    stars: 5,
    quote:
      "The destressing and growth mindset workshop by Hidden Potential, led by Ms. Supreet Kaur at Government Coed Sarvodaya School, Dwarka, was transformative. Teachers learned the Power of Yet, fostering a growth mindset, and the importance of setting small, achievable goals. Ms. Kaur's engaging approach and practical insights left a lasting impact, inspiring educators to embrace challenges with resilience.",
  },
  {
    name: "Jyotsna Chambel",
    initials: "JC",
    stars: 5,
    quote:
      "Just attended an amazing session by Ms. Supreet Kaur from Hidden Potential. She was engaging, knowledgeable, and inspiring. We loved how she shared real-life examples and success stories, making it relatable and motivating. The session was super informative, and the students gained valuable insights into various life skills. The Q&A session was super helpful too!",
  },
  {
    name: "Smita Bhatnagar",
    role: "Local Guide",
    initials: "SB",
    stars: 5,
    quote:
      "Supreet led a session at NEEEV's Special Skill Workshop with topics on Digital Transformation, AI and Financial Literacy. These were so apt for our Startup Stormers that they really enjoyed the session. She has command over the language and her topics. She made it so easy to understand for girls. It was a great session.",
  },
  {
    name: "Saumya Srivastava",
    initials: "SS",
    stars: 5,
    quote:
      "I enrolled my kids in a 10-day life skills camp. They learned about goal setting and time management. The best part of this camp was digital literacy, which is essential in today's environment. Thank you, Supreet Kaur, for your efforts.",
  },
  {
    name: "Garima Pandey",
    initials: "GP",
    stars: 5,
    quote:
      "Today, I had the privilege of attending a session with Mrs. Supreet Kaur, and it was truly remarkable. The session offered valuable learnings and meaningful life lessons. Her programs provide an excellent platform for gaining new insights and inspiration. Thank you, ma'am, for conducting such an enriching and impactful session.",
  },
  {
    name: "Priya B",
    initials: "PB",
    stars: 5,
    quote:
      "Thank you for the great session. Nurturing life skill sessions clearly help us understand the significance of life skills that has to be taught to students appropriately. Very happy to listen and the discussions we had throughout the session were productive. Thanks Supreet ma'am for her presentation. You nailed it!",
  },
  {
    name: "Tanuja Sharma",
    initials: "TS",
    stars: 5,
    quote:
      "It is a great initiation by the mentor. It helped kids enhance their speaking and listening skills. They have become more interactive and clear in thoughts. This session also emphasised developing a healthy lifestyle among the children. We really appreciate your vision and experience.",
  },
  {
    name: "Abhilasha Dagar",
    initials: "AD",
    stars: 4,
    quote:
      "I must appreciate Supreet ma'am for the guidance she provided in the Train the Trainer Course. This one-month course gave practical knowledge on how life skills could be applied in a professional field as well as help you grow as a person. I was able to take a session for teachers under Supreet ma'am's guidance, which boosted my morale. I am grateful for a mentor like her.",
  },
  {
    name: "Bhavna Bhagel",
    initials: "BB",
    stars: 5,
    quote:
      "It was the best experience with Supreet Kaur ma'am. I feel really blessed to get this opportunity. The session was full of knowledge and fun. The importance of life skills was taught in a very innovative way. Really loved it. It would be a pleasure to attend more sessions.",
  },
  {
    name: "Anu Sandhu",
    initials: "AS",
    stars: 5,
    quote:
      "Thank you for sharing your vast knowledge and wealth of experiences. We thoroughly enjoyed your book and recommend it to every parent and teacher in our life. Absolutely love your work!",
  },
  {
    name: "Neelam Agarwal",
    initials: "NA",
    stars: 4,
    quote:
      "Hidden Potential is a great platform for individuals who are looking for self improvement and to learn important life skills. I am part of this from a month and I am seeing a good change in me already.",
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
          SECTION 1 - HERO
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
            Success Stories - Real Results from Life Skills Training in Delhi
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
            . These are not hypothetical outcomes - they are documented transformations from life
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
          SECTION 2 - IMPACT NUMBERS
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

          {/* 4-column stats grid - 2-col mobile, 4-col desktop */}
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
          SECTION 2.5 - EXPERT ENDORSEMENTS
          Background: Dark navy gradient
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)" }}
      >
        {/* Ambient glow accents */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 10% 60%, rgba(200,169,81,0.06) 0%, transparent 45%), radial-gradient(circle at 90% 25%, rgba(109,40,217,0.10) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-gold mb-3">
              Endorsed by Industry Leaders
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
            >
              What India&apos;s Top Professionals Say
            </h2>
            <p className="text-base text-white/55 leading-relaxed max-w-2xl mx-auto">
              Psychologists, educators, corporate trainers, and leadership coaches from across
              India endorse Supreet Kaur&apos;s life skills methodology and training impact.
            </p>
          </div>

          {/* Cards grid: 3 on top, 2 centered below at xl */}
          {/* xl uses a 6-col grid with each card spanning 2; card 4 starts at col 2 to center the bottom pair */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">
            {expertTestimonials.map((t, idx) => (
              <div
                key={t.name}
                className={`card-glass-border flex flex-col rounded-2xl p-7 border border-white/10
                  ${idx === 3 ? "xl:col-start-2 xl:col-span-2" : "xl:col-span-2"}
                  ${idx === 4 ? "md:col-span-2 xl:col-span-2" : ""}
                `}
              >
                {/* Opening quote mark */}
                <div
                  className="text-5xl leading-none mb-3 select-none"
                  style={{ color: "#C8A951", fontFamily: "Georgia, serif" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Quote body */}
                <blockquote
                  className="flex-1 text-[15px] text-white/80 leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}
                >
                  {t.quote}
                </blockquote>

                {/* Gold divider */}
                <div
                  className="w-full h-px mb-5"
                  style={{ background: "linear-gradient(90deg, transparent 0%, rgba(200,169,81,0.4) 30%, rgba(200,169,81,0.4) 70%, transparent 100%)" }}
                />

                {/* Author */}
                <div className="mb-4">
                  <p className="text-sm font-bold text-white leading-snug">{t.name}</p>
                  <p
                    className="text-xs text-white/50 leading-relaxed mt-0.5"
                    title={t.title}
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical" as const,
                      overflow: "hidden",
                    }}
                  >
                    {t.title}
                  </p>
                </div>

                {/* 5-star rating */}
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <svg
                      key={n}
                      className="w-4 h-4 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="#C8A951"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 - COMMUNITY REVIEWS
          Background: off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <SectionLabel>Voices from Our Community</SectionLabel>
              {/* Google Reviews badge */}
              <span
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-3"
                style={{
                  color: "#2D1B69",
                  borderColor: "rgba(45,27,105,0.2)",
                  background: "rgba(45,27,105,0.05)",
                }}
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google Reviews
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Real Experiences from Real Participants
            </h2>
            <p className="text-base text-charcoal/70 leading-relaxed max-w-2xl">
              Students, parents, educators, and professionals share what changed after working
              with Supreet Kaur and the Hidden Potential team.
            </p>
          </div>

          {/* Masonry columns layout */}
          <div className="columns-1 md:columns-2 xl:columns-3 gap-5">
            {communityReviews.map((review) => (
              <div
                key={review.name + review.quote.slice(0, 20)}
                className="break-inside-avoid mb-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col"
              >
                {/* Stars */}
                <div
                  className="flex gap-0.5 mb-3"
                  aria-label={`${review.stars} out of 5 stars`}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <svg
                      key={n}
                      className="w-3.5 h-3.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill={n <= review.stars ? "#C8A951" : "#E5E7EB"}
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-charcoal/80 leading-relaxed flex-1 mb-4">
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Author row */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "#7C3AED" }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-navy leading-snug">
                      {review.name}
                    </p>
                    {review.role && (
                      <p className="text-xs text-charcoal/50 leading-relaxed">{review.role}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Internal link nudge */}
          <div className="mt-10 text-center">
            <p className="text-sm text-charcoal/50">
              Want to connect with past participants?{" "}
              <Link
                href="/contact"
                className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
              >
                Reach out to us →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 - SHARE YOUR STORY
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Your Story Matters</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 leading-tight">
            Have You Trained with Hidden Potential? Share Your Story
          </h2>
          <p className="text-base text-charcoal/75 leading-relaxed mb-8 max-w-2xl mx-auto">
            If you are a past participant of any Hidden Potential program - as a student,
            professional, woman, or certified trainer - we would love to hear your story. Your
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
          SECTION 5 - BOTTOM CTA
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
            Every success story on this page started exactly where you are right now - wondering
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

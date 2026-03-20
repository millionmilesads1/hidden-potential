/**
 * CONTACT PAGE
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /contact
 *
 * 7-section structure:
 *   Section 1  - HERO                (dark gradient, H1, Lora italic, body para, 2 CTAs, trust signals)
 *   Section 2  - HOW TO REACH US     (off-white, 4 contact method cards + service-area paragraph)
 *   Section 3  - FIND YOUR PROGRAM   (white, 8 service guide cards in audience style)
 *   Section 4  - WHY PEOPLE TRUST US (navy-light, 6 trust signal cards in differentiator style)
 *   Section 5  - CONTACT FORM        (off-white, 120-word intro + styled frontend form)
 *   Section 6  - FAQ                 (white, 6 Q&As with FAQPage schema)
 *   Section 7  - CTA                 (dark gradient, para, 2 CTAs, cross-sell, location line)
 *
 * Schemas: LocalBusiness + FAQPage (both embedded as JSON-LD)
 */

import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Book Free Evaluation | Contact Hidden Potential | Life Skills Delhi" },
  description:
    "Schedule a free 30-minute life skills evaluation. WhatsApp, phone, or online. Serving Delhi, Noida, Gurgaon, Faridabad & pan-India. 14+ years. 5000+ trained.",
  openGraph: {
    title: "Contact Hidden Potential - Life Skills Training in Delhi NCR",
    description:
      "Get in touch for NLP coaching, school programs, corporate workshops. Free consultation. Dwarka, Noida, Gurgaon, Faridabad. 14+ years. 5000+ trained.",
    type: "website",
    url: "https://hiddenpotentialskills.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Hidden Potential | Life Skills Training in Delhi",
    description:
      "Reach our life skills training team in Delhi. Book a free consultation. NLP coaching, school programs, corporate workshops. 14+ years. 5000+ trained.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/contact",
  },
};

// ── Schema: LocalBusiness ─────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hidden Potential",
  description:
    "Life skills training, NLP coaching, school programs, and corporate workshops in Delhi NCR. Founded by Supreet Kaur. 14+ years experience. 5000+ individuals trained.",
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
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Faridabad" },
  ],
  telephone: "+91-9899209335",
  email: "hiddenpotential2030@gmail.com",
  openingHours: "Mo-Sa 09:00-19:00",
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
      name: "Contact",
      item: "https://hiddenpotentialskills.com/contact",
    },
  ],
};

// ── Schema: FAQPage ───────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer a free consultation before enrolling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer a complimentary 15-minute discovery call or in-person consultation at our Dwarka, Delhi centre. During this session, Supreet Kaur or a senior team member will understand your goals, assess your needs, and recommend the right life skills training program for you. This consultation is available for individuals, parents, school administrators, and corporate HR teams across Delhi, Noida, Gurgaon, and Faridabad. There is no obligation to enrol after the consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I attend life skills training online if I am not in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. While our primary training centre is at Dwarka, Delhi, we offer comprehensive online life skills training sessions for individuals and groups across India. Our online programs cover NLP coaching, confidence building, communication skills, stress management, and all other services. The online sessions are live and interactive - not pre-recorded - using the same structured methodology and assessment process as in-person coaching. Many clients from Noida, Gurgaon, Faridabad, and other states attend online and report excellent results.",
      },
    },
    {
      "@type": "Question",
      name: "What are your training hours and availability?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our regular hours are Monday to Saturday, 9 AM to 7 PM IST. We offer flexible scheduling including early morning, evening, and weekend batches to accommodate working professionals and students. School programs are conducted during school hours at the school premises across Delhi NCR. Corporate workshops in Gurgaon, Noida, and Delhi are scheduled based on the organisation's preference. For urgent queries outside regular hours, WhatsApp messages are monitored and responded to as quickly as possible.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I start after contacting you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most individual coaching programs can begin within 3 to 5 days of your initial consultation. Group programs and school partnerships typically take 1 to 2 weeks to set up, including needs assessment and curriculum customisation. Corporate workshops in Delhi NCR can be arranged within 2 weeks. The speed depends on batch availability and your preferred schedule. Contact us today to check current batch openings for life skills training in Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer programs in both Hindi and English?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Supreet Kaur and our team of 200+ certified trainers deliver programs in both Hindi and English. Many sessions, especially for schools in Delhi and Faridabad, are conducted bilingually to ensure maximum understanding and engagement. Corporate workshops in Gurgaon and Noida are typically delivered in English, though we adapt based on the audience. The language of delivery is always confirmed during the consultation to match your preference.",
      },
    },
    {
      "@type": "Question",
      name: "Is Hidden Potential a registered and credible organisation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hidden Potential is an MSME registered organisation, affiliated with Skill India, and founded by Supreet Kaur who holds NLP certification, a Masters in Psychology, and Graphology certification from the American Board. Supreet is a recognised Josh Talks speaker and award-winning educator. With 14+ years of experience and 5000+ individuals trained across Delhi NCR, Hidden Potential is one of the most established life skills training providers in the region.",
      },
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const contactMethods = [
  {
    title: "Visit Our Centre",
    desc: "D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka, Delhi 110075. Located near Dwarka Sector 21 Metro Station. Easily accessible from South Delhi, West Delhi, Janakpuri, and Gurgaon via NH-48. Noida and Faridabad clients can reach us via the Dwarka Expressway.",
  },
  {
    title: "Call or WhatsApp",
    desc: "+91-9899209335. Available Monday to Saturday, 9 AM to 7 PM IST. WhatsApp messages are monitored throughout the day and we typically respond within 2 hours. For school and corporate inquiries, you can also request a callback at a time convenient for you.",
  },
  {
    title: "Email Us",
    desc: "hiddenpotential2030@gmail.com. Include your name, location, and the program you are interested in for the fastest response. We respond to all emails within 24 hours. For detailed proposals, school partnerships, or corporate workshop inquiries, email is the preferred channel.",
  },
  {
    title: "Follow and Connect",
    desc: "Follow Hidden Potential on Instagram, Facebook, LinkedIn, and YouTube for daily life skills tips, NLP insights, student transformation stories, and workshop announcements. Our social channels are also a great way to see our programs in action before reaching out.",
  },
];

const serviceGuide = [
  {
    num: "01",
    title: "I Am a Parent Looking for Life Skills Training for My Child",
    desc: "Your child deserves more than just academic marks. Our student programmes cover confidence building, communication skills, emotional intelligence, study techniques, and goal setting for ages 10 to 18. Sessions are available in Dwarka, Delhi and online.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore Student Programs \u2192",
  },
  {
    num: "02",
    title: "I Am a School Principal or Administrator",
    desc: "Bring structured, NEP 2020 aligned life skills programmes to your school. We serve CBSE, ICSE, and international schools across Delhi, Noida, Gurgaon, and Faridabad. MSME registered for institutional billing.",
    linkHref: "/for/schools",
    linkLabel: "Explore School Programs \u2192",
  },
  {
    num: "03",
    title: "I Am a Working Professional Seeking Growth",
    desc: "Stress management, confidence building, communication mastery, and leadership development for professionals in Delhi NCR. Available as individual NLP coaching or group programmes. In-person at Dwarka or online.",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching \u2192",
  },
  {
    num: "04",
    title: "I Represent a Corporate Organisation",
    desc: "Customised team workshops covering communication, leadership, emotional intelligence, and stress management. Delivered at your premises in Gurgaon, Noida, Delhi, or Faridabad. Institutional invoicing available.",
    linkHref: "/services/workshops",
    linkLabel: "Explore Corporate Workshops \u2192",
  },
  {
    num: "05",
    title: "I Want to Become a Certified Life Skills Trainer",
    desc: "Join 200+ certified trainers across Delhi NCR. Our 3-month structured Train the Trainer Certification covers NLP integration, training methodology, and practical delivery skills. Certification recognised under MSME and Skill India.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Trainer Certification \u2192",
  },
  {
    num: "06",
    title: "I Am a Woman Seeking Personal Empowerment",
    desc: "Self-mastery, confidence rebuilding, emotional resilience, and identity reclamation for women aged 28 and above. Safe, supportive environment. Available in Dwarka, Delhi and online.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women \u2192",
  },
  {
    num: "07",
    title: "I Need Help with Stress, Anxiety, or Emotional Challenges",
    desc: "Art therapy, NLP-based emotional processing, and structured stress management programmes. For individuals dealing with burnout, anxiety, life transitions, or emotional blocks. Individual and group formats available.",
    linkHref: "/programs/art-therapy",
    linkLabel: "Explore Art Therapy \u2192",
  },
  {
    num: "08",
    title: "I Am Not Sure What I Need",
    desc: "That is completely fine. Book a free 15-minute discovery call with Supreet Kaur or a senior team member. We will help you identify the right programme based on your specific situation, goals, and challenges. No obligation, no pressure.",
    linkHref: "/assessment",
    linkLabel: "Take the Free Assessment \u2192",
  },
];

const trustSignals = [
  {
    title: "14+ Years of Proven Results",
    desc: "Not a new entrant. Supreet Kaur has been transforming lives through NLP and life skills training since 2010. This depth of experience means every recommendation is based on real-world outcomes, not theoretical frameworks.",
  },
  {
    title: "NLP Certified with Psychology Background",
    desc: "Our approach is backed by science, not just motivation. Supreet Kaur holds NLP certification, a Masters in Psychology, and Graphology certification from the American Board. Every technique taught has a neurological and psychological basis.",
  },
  {
    title: "Serving All of Delhi NCR",
    desc: "In-person sessions at our Dwarka, Delhi centre. Online sessions for Noida, Gurgaon, Faridabad, Greater Noida, Ghaziabad, and pan-India. On-site delivery for schools and corporates across Delhi NCR.",
  },
  {
    title: "MSME Registered Organisation",
    desc: "Government-recognised registration ensures institutional credibility, proper invoicing, GST-compliant billing, and documentation that satisfies school trusts, corporate procurement teams, and government bodies.",
  },
  {
    title: "200+ Trainers in Our Network",
    desc: "If Supreet Kaur cannot personally take your batch due to scheduling, her certified trainers deliver the same methodology, the same quality, and the same structured approach. Every trainer has completed the full Train the Trainer Certification.",
  },
  {
    title: "Josh Talks Speaker and Award-Winning Educator",
    desc: "Supreet Kaur\u2019s expertise has been recognised on Josh Talks, one of India\u2019s largest speaking platforms. This national recognition adds an additional layer of credibility beyond certifications and numbers.",
  },
];

const faqs = [
  {
    q: "Do you offer a free consultation before enrolling?",
    a: "Yes. We offer a complimentary 15-minute discovery call or in-person consultation at our Dwarka, Delhi centre. During this session, Supreet Kaur or a senior team member will understand your goals, assess your needs, and recommend the right life skills training program for you. This consultation is available for individuals, parents, school administrators, and corporate HR teams across Delhi, Noida, Gurgaon, and Faridabad. There is no obligation to enrol after the consultation.",
  },
  {
    q: "Can I attend life skills training online if I am not in Delhi?",
    a: "Absolutely. While our primary training centre is at Dwarka, Delhi, we offer comprehensive online life skills training sessions for individuals and groups across India. Our online programs cover NLP coaching, confidence building, communication skills, stress management, and all other services. The online sessions are live and interactive \u2014 not pre-recorded \u2014 using the same structured methodology and assessment process as in-person coaching. Many clients from Noida, Gurgaon, Faridabad, and other states attend online and report excellent results.",
  },
  {
    q: "What are your training hours and availability?",
    a: "Our regular hours are Monday to Saturday, 9 AM to 7 PM IST. We offer flexible scheduling including early morning, evening, and weekend batches to accommodate working professionals and students. School programs are conducted during school hours at the school premises across Delhi NCR. Corporate workshops in Gurgaon, Noida, and Delhi are scheduled based on the organisation\u2019s preference. For urgent queries outside regular hours, WhatsApp messages are monitored and responded to as quickly as possible.",
  },
  {
    q: "How quickly can I start after contacting you?",
    a: "Most individual coaching programs can begin within 3 to 5 days of your initial consultation. Group programs and school partnerships typically take 1 to 2 weeks to set up, including needs assessment and curriculum customisation. Corporate workshops in Delhi NCR can be arranged within 2 weeks. The speed depends on batch availability and your preferred schedule. Contact us today to check current batch openings for life skills training in Delhi.",
  },
  {
    q: "Do you offer programs in both Hindi and English?",
    a: "Yes. Supreet Kaur and our team of 200+ certified trainers deliver programs in both Hindi and English. Many sessions, especially for schools in Delhi and Faridabad, are conducted bilingually to ensure maximum understanding and engagement. Corporate workshops in Gurgaon and Noida are typically delivered in English, though we adapt based on the audience. The language of delivery is always confirmed during the consultation to match your preference.",
  },
  {
    q: "Is Hidden Potential a registered and credible organisation?",
    a: "Yes. Hidden Potential is an MSME registered organisation, affiliated with Skill India, and founded by Supreet Kaur who holds NLP certification, a Masters in Psychology, and Graphology certification from the American Board. Supreet is a recognised Josh Talks speaker and award-winning educator. With 14+ years of experience and 5000+ individuals trained across Delhi NCR, Hidden Potential is one of the most established life skills training providers in the region.",
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
export default function ContactPage() {
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
              "radial-gradient(circle at 85% 20%, rgba(124,58,237,0.08) 0%, transparent 60%)",
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
              Get in Touch
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Book Your Free Life Skills Evaluation
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
            Every transformation begins with a single conversation. This is yours.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            Whether you are a parent in Dwarka seeking life skills training for your child, a
            school administrator in Noida evaluating NEP 2020 program providers, a corporate HR
            team in Gurgaon looking for structured employee development workshops, or an individual
            in Delhi ready to begin your own transformational journey - Hidden Potential is here
            to help. Founded by{" "}
            <Link
              href="/about"
              className="text-white/80 font-semibold hover:text-white transition-colors"
            >
              Supreet Kaur
            </Link>
            , our life skills
            training in Delhi serves clients across Delhi, Dwarka, Noida, Gurgaon, Faridabad, and
            online across India. Reaching out is the first step. A free 15-minute consultation is
            available for all new inquiries - no obligation, no pressure.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/assessment"
              className="btn-premium-fill"
            >
              Book a Free Consultation
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </Link>
            <a
              href="https://wa.me/919899209335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-ghost-plain"
            >
              WhatsApp Us Directly
            </a>
          </div>

          {/* Trust signals - 5 items */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "14+ Years Experience",
              "5000+ Trained",
              "200+ Trainers Certified",
              "MSME Registered",
              "Mon\u2013Sat 9AM\u20137PM",
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
          SECTION 2 - HOW TO REACH US
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Reach Us</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 leading-tight max-w-2xl">
            How to Get in Touch with Our Life Skills Training Team in Delhi
          </h2>

          {/* 4 contact method cards - clean simple style */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {contactMethods.map((m) => (
              <div
                key={m.title}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-teal/20 transition-all p-6"
              >
                <h3 className="font-bold text-primary-navy text-[15px] mb-3 leading-snug">
                  {m.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Service area paragraph */}
          <p className="text-base text-charcoal leading-relaxed">
            Hidden Potential provides life skills training in Delhi and across the entire NCR
            region. In-person coaching and group programs are delivered at our Dwarka, Sector 19B
            centre, which is accessible from all parts of Delhi including South Delhi, West Delhi,
            Janakpuri, Rohini, and Pitampura. For clients in Noida, Gurgaon, Faridabad, and
            Greater Noida, we offer comprehensive online life skills training sessions using the
            same structured methodology as in-person programs. School programs are delivered on-site
            at your school premises anywhere in Delhi NCR. For corporate teams, our{" "}
            <Link
              href="/services/workshops"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              corporate workshops
            </Link>{" "}
            are conducted at your office location in Gurgaon, Noida, Delhi, or Faridabad - we
            come to you.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 - FIND YOUR PROGRAM
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Find Your Program</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Choose the Right Life Skills Training Program for You
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Not sure where to start? Select the option that best describes you, and we will guide
              you to the right program.
            </p>
          </div>

          {/* 8 service guide cards - numbered audience style, 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {serviceGuide.map((s) => (
              <div
                key={s.num}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-teal/20 transition-all p-6 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="text-[11px] font-bold tabular-nums text-primary-teal bg-teal-light px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                  >
                    {s.num}
                  </span>
                  <h3 className="font-bold text-primary-navy text-[15px] leading-snug">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{s.desc}</p>
                {s.linkHref && s.linkLabel && (
                  <Link
                    href={s.linkHref}
                    className="mt-4 text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                  >
                    {s.linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 - WHY PEOPLE TRUST US
          Background: Navy-light (#F3F0FF)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-navy-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Why People Trust Us</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Why 5000+ Individuals in Delhi NCR Choose Hidden Potential
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Trust is earned through consistency, credentials, and results. Here is why
              individuals, schools, and organisations across Delhi NCR have chosen Hidden Potential
              for life skills training.
            </p>
          </div>

          {/* 6 trust signal cards - differentiator style, 3-column grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustSignals.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
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
                    {t.title}
                  </h3>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 - CONTACT FORM
          Background: Off-white
          NOTE: This is a frontend-only form. The form submission handler needs
          to be connected to a server action or API route (e.g., /api/contact)
          to process and send form data.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Send a Message</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 leading-tight max-w-2xl">
            Contact Us - We Respond Within 24 Hours
          </h2>

          {/* Intro paragraph */}
          <p className="text-base text-charcoal leading-relaxed mb-10 max-w-3xl">
            Use the form below to reach our life skills training team in Delhi. Please share your
            name, contact details, location, and the type of program you are interested in - this
            helps us respond with the most relevant information immediately. All inquiries are
            treated with complete confidentiality. Supreet Kaur personally reviews new program
            inquiries and ensures every response is tailored to your specific situation. Whether
            you are in Dwarka, Noida, Gurgaon, Faridabad, or anywhere in India, we will respond
            within 24 hours - typically much sooner. For urgent matters, WhatsApp is the fastest
            channel.
          </p>

          {/* Contact Form - Client Component (handles onSubmit) */}
          <ContactForm />
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
              Common Questions About Life Skills Training in Delhi
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
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
              href="/about"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Learn about Supreet Kaur →
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
              "radial-gradient(circle at 85% 20%, rgba(124,58,237,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Your Transformation Starts with One Message
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Taking action is the hardest part, and you have already taken the first step by
            reaching this page. Whether you are a parent in Dwarka looking for life skills training
            for your child, a school administrator in Noida evaluating program providers, or a
            corporate team in Gurgaon seeking structured workshops, Hidden Potential is here to
            help. Over 5000 individuals across Delhi NCR have already started their journey through
            NLP coaching, student life skills programs, women&rsquo;s empowerment pathways, and
            trainer certification. Your transformation is one conversation away. Reach out today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+919899209335"
              className="btn-premium-fill"
            >
              Call Now
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </a>
            <a
              href="https://wa.me/919899209335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-ghost-plain"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Cross-sell */}
          <p className="text-xs text-white/40 mb-4">
            Ready to enrol?{" "}
            <Link
              href="/enroll"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Skip straight to enrollment
            </Link>{" "}
            - select your program and get started today.
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

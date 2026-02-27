/**
 * ENROLL PAGE
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /enroll
 *
 * 7-section structure:
 *   Section 1  — HERO                 (dark gradient, H1, Lora italic, body para, 2 CTAs, trust signals)
 *   Section 2  — CHOOSE YOUR PROGRAM  (off-white, id="programs", 10 numbered teal-header cards w/ individual CTAs)
 *   Section 3  — HOW ENROLLMENT WORKS (white, 5 numbered step cards — single column)
 *   Section 4  — ENROLLMENT FORM      (navy-light, id="enroll-form", EnrollForm client component)
 *   Section 5  — TRUST BUILDERS       (off-white, 6 differentiator-style cards)
 *   Section 6  — FAQ                  (white, 6 Q&As with FAQPage schema)
 *   Section 7  — CTA                  (dark gradient, body, 2 CTAs, cross-sell, location line)
 *
 * Schemas: Service + FAQPage (both embedded as JSON-LD)
 * Keywords: "enroll in life skills training in Delhi" × 10+
 * Locations: Delhi, Dwarka, Noida, Gurgaon, Faridabad × 15+
 * Internal links: 15+
 */

import type { Metadata } from "next";
import Link from "next/link";
import EnrollForm from "./EnrollForm";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Enroll Now | Life Skills Training in Delhi | Hidden Potential",
  description:
    "Enroll in life skills training in Delhi with Hidden Potential. NLP coaching, confidence building, communication mastery, trainer certification. 14+ years. 5000+ trained. Dwarka, Noida, Gurgaon. Limited batch sizes.",
  openGraph: {
    title: "Enroll in Life Skills Training in Delhi — Start Your Transformation",
    description:
      "Join 5000+ individuals across Delhi NCR. NLP coaching, student programs, women's empowerment, trainer certification. Dwarka, Noida, Gurgaon, Faridabad.",
    type: "website",
    url: "https://hiddenpotentialskills.com/enroll",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enroll in Life Skills Training in Delhi | Hidden Potential",
    description:
      "Join 5000+ across Delhi NCR. NLP coaching, student programs, women's empowerment, trainer certification. Limited batch sizes. Enroll today.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/enroll",
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
      name: "Enroll Now",
      item: "https://hiddenpotentialskills.com/enroll",
    },
  ],
};

// ── Schema: Service ───────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Life Skills Training Enrollment in Delhi",
  description:
    "Enroll in NLP-based life skills training programs in Delhi NCR. Individual coaching, school programs, corporate workshops. 14+ years experience. 5000+ trained.",
  serviceType: "Life Skills Training Enrollment",
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
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Faridabad" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
  },
};

// ── Schema: FAQPage ───────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens after I submit the enrollment form?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Within 24 hours of submitting your enrollment form, a team member from Hidden Potential will contact you via phone or WhatsApp to discuss your goals, recommend the best program pathway, share detailed pricing, and help you select a convenient batch. Supreet Kaur personally reviews all enrollment submissions to ensure you are placed in the right program. We serve individuals across Delhi, Dwarka, Noida, Gurgaon, and Faridabad, with both in-person and online options available.",
      },
    },
    {
      "@type": "Question",
      name: "Can I enroll in life skills training online if I am outside Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While our primary training centre is in Dwarka, Delhi, we offer comprehensive online life skills training programs that deliver the same curriculum, engagement, and results as in-person sessions. All online batches include live interactive sessions — not pre-recorded content — with assignments, feedback, and direct access to Supreet Kaur and her team. Clients from Noida, Gurgaon, Faridabad, and cities across India regularly enroll in our online programs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee structure for life skills training programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing varies based on the program, duration, and delivery mode. Individual NLP coaching sessions have different pricing from group programs and integrated pathways. We offer flexible payment options including EMI for longer programs. Special pricing is available for students, schools, and group enrollments. Submit the enrollment form and we will share detailed pricing within 24 hours. Being MSME registered, we provide proper invoicing for institutional and corporate payments.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch programs or reschedule after enrolling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We understand that circumstances change. If you need to switch to a different program, change your batch timing, or reschedule sessions, our team will accommodate your request with minimal friction. We recommend providing at least 48 hours advance notice for batch changes. Our goal is to make life skills training in Delhi NCR as accessible and stress-free as the learning itself.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any prerequisites to enroll?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No formal prerequisites for most programs. Our life skills programs are designed for beginners and experienced learners alike. For student programs like An Enlightened Learner, we recommend ages 10 and above. For the Train the Trainer Certification, a basic interest in teaching and personal development is helpful but no prior certification is required. Supreet Kaur and the team customise each program to match your current level, whether you join from Delhi, Noida, Gurgaon, or online.",
      },
    },
    {
      "@type": "Question",
      name: "Do I receive a certificate after completing the program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All participants receive a certificate of completion from Hidden Potential upon successfully finishing their program. The Train the Trainer Certification includes an advanced professional certification recognised across Delhi NCR. All certificates carry MSME registration details and Skill India affiliation, adding institutional credibility to your achievement. Certificates are provided in both digital and physical formats.",
      },
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const programs = [
  {
    num: "01",
    title: "An Enlightened Learner — Student Program",
    desc: "For students aged 10 to 18. A 12 to 16 week structured program covering confidence building, communication skills, emotional intelligence, study techniques, goal setting, and exam resilience. Uses NLP-based tools for lasting behavioural change. Available in-person at Dwarka, Delhi and online for students across Noida, Gurgaon, and Faridabad.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "View Full Program Details \u2192",
    ctaLabel: "Enroll Now",
    ctaHref: "#enroll-form",
  },
  {
    num: "02",
    title: "Communication Mastery",
    desc: "For students, professionals, and anyone seeking to transform how they communicate. 8 to 12 week program covering verbal and non-verbal communication, public speaking, conflict resolution, assertiveness, and NLP language patterns. Available across Delhi NCR.",
    linkHref: "/programs/communication-mastery",
    linkLabel: "View Full Program Details \u2192",
    ctaLabel: "Enroll Now",
    ctaHref: "#enroll-form",
  },
  {
    num: "03",
    title: "Self Mastery for Women",
    desc: "Exclusively for women aged 28 and above seeking personal empowerment, confidence rebuilding, emotional resilience, and identity reclamation. 8 to 12 week program in a safe, supportive environment. In-person at Dwarka and online.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "View Full Program Details \u2192",
    ctaLabel: "Enroll Now",
    ctaHref: "#enroll-form",
  },
  {
    num: "04",
    title: "Train the Trainer Certification",
    desc: "For aspiring life skills trainers and educators. 3-month structured certification covering NLP integration, training methodology, session design, and practical delivery. 200+ trainers already certified across Delhi NCR. Professional certification with MSME and Skill India recognition.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "View Full Program Details \u2192",
    ctaLabel: "Enroll Now",
    ctaHref: "#enroll-form",
  },
  {
    num: "05",
    title: "Art Therapy for Healing",
    desc: "For individuals dealing with stress, anxiety, emotional blocks, or life transitions. Flexible duration — individual and group formats. Uses creative expression as a therapeutic tool for emotional processing and resilience building.",
    linkHref: "/programs/art-therapy",
    linkLabel: "View Full Program Details \u2192",
    ctaLabel: "Enroll Now",
    ctaHref: "#enroll-form",
  },
  {
    num: "06",
    title: "NLP Coaching — Individual Sessions",
    desc: "Personalised one-on-one NLP coaching with Supreet Kaur. For professionals, entrepreneurs, and individuals seeking deep behavioural transformation. Sessions focus on belief restructuring, confidence anchoring, and emotional state management. In-person at Dwarka, Delhi or online.",
    linkHref: "/services/nlp-coaching",
    linkLabel: "View Full Details \u2192",
    ctaLabel: "Enroll Now",
    ctaHref: "#enroll-form",
  },
  {
    num: "07",
    title: "Corporate Workshop Package",
    desc: "Customised workshops for organisations in Gurgaon, Noida, Delhi, and Faridabad. Topics include team communication, leadership development, stress management, and emotional intelligence. Delivered at your premises. Institutional invoicing available.",
    linkHref: "/services/workshops",
    linkLabel: "View Workshop Options \u2192",
    ctaLabel: "Request Proposal",
    ctaHref: "/contact",
  },
  {
    num: "08",
    title: "School Partnership Program",
    desc: "For schools in Delhi NCR seeking structured, NEP 2020 aligned life skills programs. Annual and semester options available. Includes student workshops, teacher training, parent sessions, and documented outcomes.",
    linkHref: "/for/schools",
    linkLabel: "View School Programs \u2192",
    ctaLabel: "Schedule Consultation",
    ctaHref: "/contact",
  },
  {
    num: "09",
    title: "Individual Service Sessions",
    desc: "Standalone sessions in specific skill areas: Confidence Building, Stress Management, Goal Setting and Achievement, Career Guidance and Planning, Emotional Intelligence, or Communication Skills Training. Ideal if you want focused development in one area before committing to a full pathway.",
    ctaLabel: "Enroll Now",
    ctaHref: "#enroll-form",
  },
  {
    num: "10",
    title: "Not Sure Which Program Fits?",
    desc: "Book a free 15-minute discovery call with Supreet Kaur or a senior team member. We will understand your situation, identify your goals, and recommend the right program. No obligation, no pressure. Available for individuals, parents, schools, and corporates across Delhi NCR.",
    linkHref: "/contact",
    linkLabel: "Contact Us \u2192",
    ctaLabel: "Book Free Call",
    ctaHref: "/contact",
  },
];

const steps = [
  {
    num: "01",
    title: "Choose Your Program",
    desc: "Browse the program options above or visit individual program pages for detailed information. Not sure which one fits? Book a free discovery call and we will guide you.",
  },
  {
    num: "02",
    title: "Fill the Enrollment Form",
    desc: "Share your details and program preference using the form below. It takes less than 2 minutes. This does not commit you to anything — it simply starts the conversation.",
  },
  {
    num: "03",
    title: "Receive Your Personalised Plan",
    desc: "Within 24 hours, our team contacts you with a customised training plan, batch options, and pricing details. Supreet Kaur personally reviews every enrollment submission.",
  },
  {
    num: "04",
    title: "Confirm Your Batch and Schedule",
    desc: "Choose from available batches — weekday morning, weekday evening, weekend, or flexible scheduling. In-person batches run at our Dwarka, Delhi centre. Online batches serve Noida, Gurgaon, Faridabad, and pan-India.",
  },
  {
    num: "05",
    title: "Begin Your Transformation",
    desc: "Attend your first session and start building the skills that will transform your personal and professional life. Ongoing support, feedback, and progress tracking are included throughout your program.",
  },
];

const trustBuilders = [
  {
    title: "No-Risk First Session",
    desc: "Attend your first session with confidence. If you feel the program is not the right fit, we will work with you to find a better match or adjust the approach. Your investment in yourself should feel right from day one.",
  },
  {
    title: "Flexible Payment Options",
    desc: "EMI available for longer programs. Special pricing for students and group enrollments. Institutional billing with GST-compliant invoicing for schools and corporates. Being MSME registered, we handle all documentation professionally.",
  },
  {
    title: "Small Batch Sizes",
    desc: "Maximum 15 to 20 participants per batch to ensure personalised attention, individual feedback, and meaningful interaction. Unlike mass workshops with hundreds of attendees, you receive focused development.",
  },
  {
    title: "Certified and Recognised",
    desc: "MSME registered, Skill India affiliated. Supreet Kaur holds NLP certification, Masters in Psychology, Graphology from American Board, and is a Josh Talks speaker. Your training comes from a nationally recognised expert.",
  },
  {
    title: "Multiple Delivery Formats",
    desc: "In-person at our Dwarka, Delhi centre. Live online for Noida, Gurgaon, Faridabad, and across India. On-site delivery for schools and corporate teams. Hybrid options combining in-person and online sessions.",
  },
  {
    title: "Post-Program Support",
    desc: "Completing a program does not mean the support ends. Alumni receive access to WhatsApp support groups, refresher sessions, and an ongoing community of learners. Your transformation is supported beyond the last session.",
  },
];

const faqs = [
  {
    q: "What happens after I submit the enrollment form?",
    a: "Within 24 hours of submitting your enrollment form, a team member from Hidden Potential will contact you via phone or WhatsApp to discuss your goals, recommend the best program pathway, share detailed pricing, and help you select a convenient batch. Supreet Kaur personally reviews all enrollment submissions to ensure you are placed in the right program. We serve individuals across Delhi, Dwarka, Noida, Gurgaon, and Faridabad, with both in-person and online options available.",
  },
  {
    q: "Can I enroll in life skills training online if I am outside Delhi?",
    a: "Yes. While our primary training centre is in Dwarka, Delhi, we offer comprehensive online life skills training programs that deliver the same curriculum, engagement, and results as in-person sessions. All online batches include live interactive sessions — not pre-recorded content — with assignments, feedback, and direct access to Supreet Kaur and her team. Clients from Noida, Gurgaon, Faridabad, and cities across India regularly enroll in our online programs.",
  },
  {
    q: "What is the fee structure for life skills training programs?",
    a: "Pricing varies based on the program, duration, and delivery mode. Individual NLP coaching sessions have different pricing from group programs and integrated pathways. We offer flexible payment options including EMI for longer programs. Special pricing is available for students, schools, and group enrollments. Submit the enrollment form and we will share detailed pricing within 24 hours. Being MSME registered, we provide proper invoicing for institutional and corporate payments.",
  },
  {
    q: "Can I switch programs or reschedule after enrolling?",
    a: "Yes. We understand that circumstances change. If you need to switch to a different program, change your batch timing, or reschedule sessions, our team will accommodate your request with minimal friction. We recommend providing at least 48 hours advance notice for batch changes. Our goal is to make life skills training in Delhi NCR as accessible and stress-free as the learning itself.",
  },
  {
    q: "Are there any prerequisites to enroll?",
    a: "No formal prerequisites for most programs. Our life skills programs are designed for beginners and experienced learners alike. For student programs like An Enlightened Learner, we recommend ages 10 and above. For the Train the Trainer Certification, a basic interest in teaching and personal development is helpful but no prior certification is required. Supreet Kaur and the team customise each program to match your current level, whether you join from Delhi, Noida, Gurgaon, or online.",
  },
  {
    q: "Do I receive a certificate after completing the program?",
    a: "Yes. All participants receive a certificate of completion from Hidden Potential upon successfully finishing their program. The Train the Trainer Certification includes an advanced professional certification recognised across Delhi NCR. All certificates carry MSME registration details and Skill India affiliation, adding institutional credibility to your achievement. Certificates are provided in both digital and physical formats.",
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

/** Renders either an <a> (hash anchors) or a Next.js <Link> (page routes). */
function CardCta({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const chevron = (
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
  );
  const cls =
    "mt-4 inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors self-start";

  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {label}
        {chevron}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {label}
      {chevron}
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function EnrollPage() {
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
              Enrollment Open
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Enroll in Life Skills Training in Delhi — Your Transformation Starts Today
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
            5000+ individuals have already taken this step. Today, it is your turn.
          </p>

          {/* Body paragraph (~120 words) */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            You have reached this page because something in your life is ready to change. Whether
            you are a parent in Dwarka seeking life skills training for your child, a professional
            in Gurgaon looking to upgrade communication and leadership skills, a woman in Delhi
            ready to reclaim confidence and identity, or an aspiring trainer in Noida seeking
            professional certification — enroll in life skills training in Delhi through Hidden
            Potential and access structured, assessment-based programs designed by{" "}
            <Link
              href="/about"
              className="text-white/80 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Supreet Kaur
            </Link>{" "}
            — NLP practitioner, Masters in Psychology, Josh Talks speaker with 14+ years of
            experience. Batches are intentionally small — 15 to 20 participants maximum — to
            ensure personalised attention. The next batch starts soon. Secure your spot today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Select Your Program Below
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
              Not Sure? Book a Free Call
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "14+ Years Experience",
              "5000+ Trained",
              "NLP Certified",
              "MSME Registered",
              "Skill India",
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
          SECTION 2 — CHOOSE YOUR PROGRAM
          Background: Off-white | id="programs" (anchor target from hero CTA)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="programs" className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Select Your Program</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Choose the Right Life Skills Training Program to Enroll In
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Each program at Hidden Potential is a structured, assessment-based pathway — not a
              one-time workshop. Whether you want to enroll in life skills training in Delhi for
              your child, yourself, your team, or your school, there is a program designed
              specifically for your situation. Review the options below and select the one that
              best matches your goals. Choose your program, click the button on the card, and fill
              the form in Section 4. Not sure? Program 10 is for you.
            </p>
          </div>

          {/* 10 program cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {programs.map((p) => (
              <div
                key={p.num}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
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
                  {p.linkHref && p.linkLabel && (
                    <Link
                      href={p.linkHref}
                      className="mt-4 text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                    >
                      {p.linkLabel}
                    </Link>
                  )}
                  {/* Individual program CTA button */}
                  <CardCta href={p.ctaHref} label={p.ctaLabel} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — HOW ENROLLMENT WORKS
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Your Enrollment Process — Simple, Transparent, and Personal
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed">
              From your first interaction to your first session, every step of enrolling in life
              skills training at Hidden Potential is straightforward and human. No confusing
              processes, no hidden commitments, and no pressure. Here is exactly what happens when
              you decide to enroll in life skills training in Delhi through us.
            </p>
          </div>

          {/* 5 step cards — single column */}
          <div className="flex flex-col gap-5">
            {steps.map((s) => (
              <div
                key={s.num}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <span className="block text-3xl font-extrabold text-primary-teal tabular-nums mb-3 leading-none">
                  {s.num}
                </span>
                <h3 className="font-bold text-primary-navy text-[17px] mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — ENROLLMENT FORM
          Background: Navy-light (#F3F0FF) | id="enroll-form" (anchor target from program card CTAs)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="enroll-form" className="bg-navy-light py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>Enroll Now</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-2xl">
            Start Your Life Skills Training Journey — Fill This Form
          </h2>
          <p className="text-base text-charcoal/75 leading-relaxed mb-8">
            Filling this form does not commit you to any payment or program. It simply starts the
            conversation. Once you submit, a member of the Hidden Potential team — and in most
            cases{" "}
            <Link
              href="/about"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Supreet Kaur
            </Link>{" "}
            personally — will contact you within 24 hours to understand your goals, answer your
            questions, and recommend the right pathway. Your information is held in complete
            confidence and never shared with third parties. Whether you are in Delhi, Noida,
            Gurgaon, Faridabad, or joining online from anywhere across India, this form is your
            first step toward enrolling in life skills training that will genuinely change what you
            are capable of achieving.
          </p>

          <EnrollForm />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — TRUST BUILDERS
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Enroll with Confidence</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Why 5000+ People Across Delhi NCR Enrolled with Confidence
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Making the decision to enroll in life skills training in Delhi is an investment —
              of time, focus, and trust. Here is what makes that investment feel secure when you
              choose Hidden Potential over the alternatives.
            </p>
          </div>

          {/* 6 trust builder cards — 3-column grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustBuilders.map((t) => (
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
          SECTION 6 — FAQ
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Common Questions About Enrolling in Life Skills Training
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
            Your Best Self Is One Decision Away
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Limited batch sizes mean personalised attention, but also limited availability.
            5000+ individuals across Delhi NCR have already enrolled in life skills training and
            built measurable, lasting change in their confidence, communication, and clarity
            through Hidden Potential. Whether you are a student in Dwarka, a professional in
            Gurgaon, a parent in Noida, or a woman seeking empowerment in Faridabad — the right
            program is waiting for you. No more putting it off. The best investment you will ever
            make is in yourself. Enroll in life skills training in Delhi today and begin the most
            important journey of your life.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
            >
              Scroll Up to Enroll
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
            <a
              href="https://wa.me/919899209335"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/5 rounded-md transition-colors"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Cross-sell */}
          <p className="text-xs text-white/40 mb-4">
            Have questions first?{" "}
            <Link
              href="/contact"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Contact our team directly
            </Link>{" "}
            or{" "}
            <Link
              href="/assessment"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              take a free assessment
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

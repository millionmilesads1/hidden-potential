/**
 * SUPPORTING PAGE — FAQ
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /faq
 *
 * Comprehensive FAQ resource — NOT the short FAQ section from individual
 * service pages. Covers all 26 questions across 6 categories.
 *
 * Custom 4-section layout:
 *   Section 1 — HERO              (dark gradient, H1, Lora italic, body, CTA, trust)
 *   Section 2 — CATEGORY NAV      (off-white, horizontal anchor pill nav)
 *   Section 3 — FAQ CATEGORIES    (white, 6 anchored category blocks)
 *   Section 4 — BOTTOM CTA        (dark gradient, 2 CTAs, cross-sell, location line)
 *
 * Schemas: FAQPage (all 26 Q&As) + BreadcrumbList
 *
 * Primary keyword: "life skills training in Delhi" — 10+ mentions
 * Location signals: 15+ across all sections
 */

import type { Metadata } from "next";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "FAQ | Life Skills Training in Delhi — All Your Questions Answered | Hidden Potential" },
  description:
    "Frequently asked questions about life skills training at Hidden Potential in Delhi. Programs, pricing, duration, online options, certifications, NLP coaching, school programs. Everything you need to know.",
  openGraph: {
    title: "FAQ — Life Skills Training Questions Answered | Hidden Potential Delhi",
    description:
      "Complete FAQ: programs, pricing, online options, certifications, NLP coaching, school programs, corporate workshops. Hidden Potential, Dwarka, Delhi NCR.",
    type: "website",
    url: "https://hiddenpotentialskills.com/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Life Skills Training Delhi | Hidden Potential",
    description:
      "All your questions about life skills training in Delhi answered. Programs, pricing, online, certifications.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/faq",
  },
};

// ── Schema: FAQPage — ALL 26 questions ───────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    // ── Category 1: About Hidden Potential ───────────────────────────────────
    {
      "@type": "Question",
      name: "What is Hidden Potential Skills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hidden Potential Skills is a life skills training organisation founded by Supreet Kaur, based in Dwarka, Delhi. We offer structured, NLP-based programs for students, professionals, women, aspiring trainers, schools, and corporates across Delhi NCR — including Noida, Gurgaon, and Faridabad. With 14+ years of experience, 5000+ individuals trained, and 200+ certified trainers, we provide assessment-based developmental pathways that produce measurable, lasting transformation.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Supreet Kaur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Supreet Kaur is the founder and lead trainer at Hidden Potential Skills. She is a certified NLP practitioner, holds a Harvard-affiliated Life Skills certification, a Masters in Psychology, and Graphology certification from the American Board. She created the An Enlightened Learner program — the signature student development framework. With 14+ years of experience and recognition as a Josh Talks speaker, Supreet has trained 5000+ individuals and certified 200+ trainers across Delhi NCR.",
      },
    },
    {
      "@type": "Question",
      name: "Where is your training centre located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our training centre is at D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka, Delhi 110075. Located near Dwarka Sector 21 Metro Station on the Blue Line. Accessible from South Delhi, West Delhi, Janakpuri via metro, and from Gurgaon via NH-48. We also deliver programs online, at school premises, and at corporate offices across Delhi, Noida, Gurgaon, and Faridabad.",
      },
    },
    {
      "@type": "Question",
      name: "Is Hidden Potential a registered organisation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hidden Potential is registered under MSME (Micro, Small, and Medium Enterprises) and affiliated with Skill India. This government recognition ensures institutional credibility, proper invoicing, GST-compliant billing, and documentation that satisfies school trusts, corporate procurement teams, and government bodies.",
      },
    },
    // ── Category 2: Programs & Services ──────────────────────────────────────
    {
      "@type": "Question",
      name: "What programs do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer 5 flagship programs: An Enlightened Learner (student life skills), Communication Mastery, Self Mastery for Women, Train the Trainer Certification, and Art Therapy for Healing. Additionally, we provide 9 individual services: NLP Coaching, Confidence Building, Communication Skills Training, Study Skills, Stress Management, Emotional Intelligence, Goal Setting and Achievement, Career Guidance and Planning, and Corporate Workshops. All are available in Delhi NCR and online.",
      },
    },
    {
      "@type": "Question",
      name: "What is the An Enlightened Learner program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Enlightened Learner is Supreet Kaur's signature program — a comprehensive life skills development pathway designed for students aged 8 to 21, with three age-appropriate sub-groups (8–12, 13–16, and 17–21). It covers confidence building, communication skills, emotional intelligence, study techniques, goal setting, and exam resilience using NLP-based methods. It is the most complete starting point for personal transformation at Hidden Potential.",
      },
    },
    {
      "@type": "Question",
      name: "What is NLP coaching and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NLP — Neuro-Linguistic Programming — is a methodology that helps you understand and change the subconscious patterns driving your behaviour, emotions, and beliefs. At Hidden Potential, NLP coaching is delivered by certified practitioner Supreet Kaur and is integrated into all programs. Techniques include confidence anchoring, belief restructuring, cognitive reframing, language patterns, and emotional state management. NLP is not taught as a standalone weekend course — it is embedded into structured developmental pathways for lasting results.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer corporate workshops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We deliver customised corporate workshops at organisational offices across Delhi, Gurgaon, Noida, and Faridabad. Topics include team communication, leadership development, stress management, emotional intelligence, and conflict resolution. Workshops are designed for teams of 10 to 50 and can range from half-day sessions to multi-week programs. MSME registered for institutional billing.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Train the Trainer Certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 3-month structured certification program for individuals wanting to become professional life skills trainers. Covers NLP integration, training methodology, content design, session facilitation, and practical delivery skills. 200+ trainers have been certified across Delhi NCR. Certification is recognised with MSME registration and Skill India affiliation. Ideal for teachers, HR professionals, coaches, and experienced professionals transitioning into training.",
      },
    },
    // ── Category 3: Pricing & Payment ─────────────────────────────────────────
    {
      "@type": "Question",
      name: "How much does life skills training cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing varies by program, duration, format, and group size. Individual NLP coaching sessions, group programs, student pathways, and corporate workshops all have different structures. We offer student-friendly pricing, group discounts, and EMI options for longer programs. Contact us or submit an enrollment form to receive detailed pricing within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer EMI or instalment payment options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EMI options are available for programs spanning 3 months or longer. This makes programs like the Train the Trainer Certification, Communication Mastery, and structured NLP coaching pathways accessible without a large upfront payment.",
      },
    },
    {
      "@type": "Question",
      name: "Is there special pricing for students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer reduced pricing for school and college students. Group discounts are also available when enrolling with classmates or friends. We believe financial constraints should not prevent young people in Delhi NCR from accessing life skills training.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide invoices for corporate and school payments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hidden Potential is MSME registered and provides GST-compliant invoicing for all corporate and institutional payments. This satisfies procurement, L&D budget, and reimbursement requirements for organisations in Delhi, Gurgaon, Noida, and Faridabad.",
      },
    },
    // ── Category 4: Scheduling & Format ──────────────────────────────────────
    {
      "@type": "Question",
      name: "What are your training hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monday to Saturday, 9 AM to 7 PM IST. We offer flexible scheduling including early morning sessions, evening batches after 6 PM, and weekend batches. Individual NLP coaching appointments are scheduled based on mutual availability.",
      },
    },
    {
      "@type": "Question",
      name: "Can I attend online from anywhere in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All programs are available online through live, interactive video sessions — not pre-recorded content. The online experience uses the same structured methodology, NLP techniques, and assessment process as in-person training at our Dwarka centre. Clients from across India and sometimes internationally attend our online programs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer weekend batches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Weekend batches are available for most programs and are particularly popular with working professionals in Delhi, Gurgaon, and Noida who cannot attend weekday sessions. Weekend scheduling is confirmed during your initial consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long are the programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Durations vary: single-day workshops (3 to 4 hours), short programs (4 to 6 weeks), standard programs (8 to 12 weeks), comprehensive programs (12 to 16 weeks), and the Train the Trainer Certification (3 months). School annual programs run across the academic year. Individual NLP coaching sessions are ongoing based on your needs.",
      },
    },
    {
      "@type": "Question",
      name: "Can I attend sessions both in-person and online (hybrid)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hybrid arrangements are available where you attend some sessions at our Dwarka centre and some online. This is particularly useful for clients in Noida, Gurgaon, and Faridabad who want occasional in-person interaction but prefer the convenience of online for most sessions.",
      },
    },
    // ── Category 5: Results & Certification ──────────────────────────────────
    {
      "@type": "Question",
      name: "How do you measure progress and results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every learner begins with a structured pre-assessment that documents current confidence levels, communication patterns, emotional regulation, and other relevant metrics. At program completion, a post-assessment measures documented change. Growth is visible and quantifiable — not assumed based on subjective feedback. Schools receive detailed student progress reports.",
      },
    },
    {
      "@type": "Question",
      name: "Do I get a certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All program participants receive a certificate of completion from Hidden Potential. The Train the Trainer Certification includes an advanced professional certification. All certificates carry MSME registration details and Skill India affiliation. Digital and physical formats are provided.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most participants report noticeable shifts within the first 4 to 6 sessions — increased self-awareness, improved confidence in specific situations, and better emotional regulation. Lasting behavioural transformation requires the full program duration with consistent practice. This is why we offer structured pathways rather than one-day workshops.",
      },
    },
    {
      "@type": "Question",
      name: "Is there support after the program ends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alumni receive access to WhatsApp support groups, refresher sessions, and the Hidden Potential community. The Train the Trainer Certification includes ongoing support for newly certified trainers. We believe transformation is sustained through continued connection and practice.",
      },
    },
    // ── Category 6: Specific Audiences ───────────────────────────────────────
    {
      "@type": "Question",
      name: "What age group is the student program for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The An Enlightened Learner program is designed for students aged 8 to 21, with three developmental sub-groups: 8–12, 13–16, and 17–21. Each sub-group receives age-appropriate content, pacing, and skill focus. Young adults aged 18–21 access leadership and independence modules. For children under 8, activity-based programs are available through school partnerships.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer programs specifically for women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Self Mastery for Women is designed exclusively for women aged 28 and above. It covers confidence rebuilding, emotional resilience, boundary setting, identity reclamation, and self-worth development. Sessions are conducted in a safe, supportive, women-only environment. Available at our Dwarka centre and online.",
      },
    },
    {
      "@type": "Question",
      name: "Can schools partner with you for annual programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer semester and annual partnerships for schools across Delhi, Noida, Gurgaon, and Faridabad. Programs include student workshops, teacher training, parent engagement sessions, and documented outcome reports. NEP 2020 aligned. MSME registered for institutional billing. Contact us for a customised school proposal.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with corporates outside Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Corporate workshops can be delivered at any location across India. Our team of 200+ certified trainers enables national delivery. Online corporate programs are also available. The most common corporate clients are in Delhi, Gurgaon, and Noida, but we serve organisations across the country.",
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
      name: "FAQ",
      item: "https://hiddenpotentialskills.com/faq",
    },
  ],
};

// ── FAQ Data — structured by category ────────────────────────────────────────

const faqCategories = [
  {
    id: "about",
    navLabel: "About",
    sectionLabel: "About Hidden Potential",
    h2: "About Hidden Potential — Who We Are and Where We Are",
    faqs: [
      {
        q: "What is Hidden Potential Skills?",
        a: (
          <>
            Hidden Potential Skills is a life skills training organisation
            founded by{" "}
            <Link
              href="/about"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Supreet Kaur
            </Link>
            , based in Dwarka, Delhi. We offer structured, NLP-based programs
            for students, professionals, women, aspiring trainers, schools, and
            corporates across Delhi NCR — including Noida, Gurgaon, and
            Faridabad. With 14+ years of experience, 5000+ individuals trained,
            and 200+ certified trainers, we provide assessment-based
            developmental pathways that produce measurable, lasting
            transformation.
          </>
        ),
      },
      {
        q: "Who is Supreet Kaur?",
        a: (
          <>
            <Link
              href="/about"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Supreet Kaur
            </Link>{" "}
            is the founder and lead trainer at Hidden Potential Skills. She is a
            certified NLP practitioner, holds a Harvard-affiliated Life Skills
            certification, a Masters in Psychology, and Graphology
            certification from the American Board. She created the{" "}
            <Link
              href="/programs/enlightened-learner"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              An Enlightened Learner
            </Link>{" "}
            program — the signature student development framework. With 14+
            years of experience and recognition as a Josh Talks speaker,
            Supreet has trained 5000+ individuals and certified 200+ trainers
            across Delhi NCR.
          </>
        ),
      },
      {
        q: "Where is your training centre located?",
        a: (
          <>
            Our training centre is at D-802, Palm Court Apartment, Plot 3,
            Sector 19B, Dwarka,{" "}
            <Link
              href="/locations/delhi"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Delhi
            </Link>{" "}
            110075. Located near Dwarka Sector 21 Metro Station on the Blue
            Line. Accessible from South Delhi, West Delhi, and Janakpuri via
            metro, and from Gurgaon via NH-48. We also deliver programs online,
            at school premises, and at corporate offices across Delhi,{" "}
            <Link
              href="/locations/noida"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Noida
            </Link>
            ,{" "}
            <Link
              href="/locations/gurgaon"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Gurgaon
            </Link>
            , and{" "}
            <Link
              href="/locations/faridabad"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Faridabad
            </Link>
            .
          </>
        ),
      },
      {
        q: "Is Hidden Potential a registered organisation?",
        a: "Yes. Hidden Potential is registered under MSME (Micro, Small, and Medium Enterprises) and affiliated with Skill India. This government recognition ensures institutional credibility, proper invoicing, GST-compliant billing, and documentation that satisfies school trusts, corporate procurement teams, and government bodies.",
      },
    ],
  },
  {
    id: "programs",
    navLabel: "Programs",
    sectionLabel: "Programs & Services",
    h2: "Life Skills Programs and Services at Hidden Potential",
    faqs: [
      {
        q: "What programs do you offer?",
        a: (
          <>
            We offer 5 flagship programs:{" "}
            <Link
              href="/programs/enlightened-learner"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              An Enlightened Learner
            </Link>{" "}
            (student life skills),{" "}
            <Link
              href="/programs/communication-mastery"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Communication Mastery
            </Link>
            ,{" "}
            <Link
              href="/programs/self-mastery-women"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Self Mastery for Women
            </Link>
            ,{" "}
            <Link
              href="/programs/train-the-trainer"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Train the Trainer Certification
            </Link>
            , and{" "}
            <Link
              href="/programs/art-therapy"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Art Therapy for Healing
            </Link>
            . Additionally, we provide 9 individual services:{" "}
            <Link
              href="/services/nlp-coaching"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              NLP Coaching
            </Link>
            , Confidence Building, Communication Skills Training, Study Skills,
            Stress Management, Emotional Intelligence, Goal Setting and
            Achievement, Career Guidance and Planning, and Corporate Workshops.
            All available in Delhi NCR and online.
          </>
        ),
      },
      {
        q: "What is the An Enlightened Learner program?",
        a: (
          <>
            <Link
              href="/programs/enlightened-learner"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              An Enlightened Learner
            </Link>{" "}
            is Supreet Kaur&apos;s signature program — a comprehensive life
            skills development pathway designed for students aged 8 to 21, with
            three age-appropriate sub-groups (8–12, 13–16, and 17–21). It covers
            confidence building, communication skills, emotional intelligence,
            study techniques, goal setting, and exam resilience using NLP-based
            methods. It is the most complete starting point for personal
            transformation at Hidden Potential.
          </>
        ),
      },
      {
        q: "What is NLP coaching and how does it work?",
        a: (
          <>
            NLP — Neuro-Linguistic Programming — is a methodology that helps
            you understand and change the subconscious patterns driving your
            behaviour, emotions, and beliefs. At Hidden Potential,{" "}
            <Link
              href="/services/nlp-coaching"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              NLP coaching
            </Link>{" "}
            is delivered by certified practitioner Supreet Kaur and is
            integrated into all programs. Techniques include confidence
            anchoring, belief restructuring, cognitive reframing, language
            patterns, and emotional state management. NLP is not taught as a
            standalone weekend course — it is embedded into structured
            developmental pathways for lasting results.
          </>
        ),
      },
      {
        q: "Do you offer corporate workshops?",
        a: (
          <>
            Yes. We deliver customised{" "}
            <Link
              href="/services/workshops"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              corporate workshops
            </Link>{" "}
            at organisational offices across Delhi, Gurgaon, Noida, and
            Faridabad. Topics include team communication, leadership
            development, stress management, emotional intelligence, and conflict
            resolution. Workshops are designed for teams of 10 to 50 and can
            range from half-day sessions to multi-week programs. MSME registered
            for institutional billing.
          </>
        ),
      },
      {
        q: "What is the Train the Trainer Certification?",
        a: (
          <>
            A 3-month structured certification program for individuals wanting
            to become professional life skills trainers. Covers NLP integration,
            training methodology, content design, session facilitation, and
            practical delivery skills. 200+ trainers have been certified across
            Delhi NCR. Certification is recognised with MSME registration and
            Skill India affiliation. Ideal for teachers, HR professionals,
            coaches, and experienced professionals transitioning into training.{" "}
            <Link
              href="/programs/train-the-trainer"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Explore the Train the Trainer Certification →
            </Link>
          </>
        ),
      },
    ],
  },
  {
    id: "pricing",
    navLabel: "Pricing",
    sectionLabel: "Pricing & Payment",
    h2: "Pricing, Payment Options, and Invoicing",
    faqs: [
      {
        q: "How much does life skills training cost?",
        a: (
          <>
            Pricing varies by program, duration, format, and group size.
            Individual NLP coaching sessions, group programs, student pathways,
            and corporate workshops all have different structures. We offer
            student-friendly pricing, group discounts, and EMI options for
            longer programs.{" "}
            <Link
              href="/contact"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Contact us
            </Link>{" "}
            or submit an{" "}
            <Link
              href="/enroll"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              enrollment form
            </Link>{" "}
            to receive detailed pricing within 24 hours.
          </>
        ),
      },
      {
        q: "Do you offer EMI or instalment payment options?",
        a: (
          <>
            Yes. EMI options are available for programs spanning 3 months or
            longer. This makes programs like the{" "}
            <Link
              href="/programs/train-the-trainer"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Train the Trainer Certification
            </Link>
            ,{" "}
            <Link
              href="/programs/communication-mastery"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Communication Mastery
            </Link>
            , and structured NLP coaching pathways accessible without a large
            upfront payment.
          </>
        ),
      },
      {
        q: "Is there special pricing for students?",
        a: "Yes. We offer reduced pricing for school and college students. Group discounts are also available when enrolling with classmates or friends. We believe financial constraints should not prevent young people in Delhi NCR from accessing life skills training.",
      },
      {
        q: "Do you provide invoices for corporate and school payments?",
        a: "Yes. Hidden Potential is MSME registered and provides GST-compliant invoicing for all corporate and institutional payments. This satisfies procurement, L&D budget, and reimbursement requirements for organisations in Delhi, Gurgaon, Noida, and Faridabad.",
      },
    ],
  },
  {
    id: "scheduling",
    navLabel: "Scheduling",
    sectionLabel: "Scheduling & Format",
    h2: "Training Hours, Formats, and Program Duration",
    faqs: [
      {
        q: "What are your training hours?",
        a: "Monday to Saturday, 9 AM to 7 PM IST. We offer flexible scheduling including early morning sessions, evening batches after 6 PM, and weekend batches. Individual NLP coaching appointments are scheduled based on mutual availability.",
      },
      {
        q: "Can I attend online from anywhere in India?",
        a: "Yes. All programs are available online through live, interactive video sessions — not pre-recorded content. The online experience uses the same structured methodology, NLP techniques, and assessment process as in-person training at our Dwarka centre. Clients from across India and sometimes internationally attend our online programs.",
      },
      {
        q: "Do you offer weekend batches?",
        a: "Yes. Weekend batches are available for most programs and are particularly popular with working professionals in Delhi, Gurgaon, and Noida who cannot attend weekday sessions. Weekend scheduling is confirmed during your initial consultation.",
      },
      {
        q: "How long are the programs?",
        a: (
          <>
            Durations vary: single-day workshops (3 to 4 hours), short programs
            (4 to 6 weeks), standard programs (8 to 12 weeks), comprehensive
            programs (12 to 16 weeks), and the{" "}
            <Link
              href="/programs/train-the-trainer"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Train the Trainer Certification
            </Link>{" "}
            (3 months). School annual programs run across the academic year.
            Individual{" "}
            <Link
              href="/services/nlp-coaching"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              NLP coaching
            </Link>{" "}
            sessions are ongoing based on your needs.
          </>
        ),
      },
      {
        q: "Can I attend sessions both in-person and online (hybrid)?",
        a: (
          <>
            Yes. Hybrid arrangements are available where you attend some
            sessions at our Dwarka centre and some online. This is particularly
            useful for clients in{" "}
            <Link
              href="/locations/noida"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Noida
            </Link>
            ,{" "}
            <Link
              href="/locations/gurgaon"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Gurgaon
            </Link>
            , and{" "}
            <Link
              href="/locations/faridabad"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Faridabad
            </Link>{" "}
            who want occasional in-person interaction but prefer the convenience
            of online for most sessions.
          </>
        ),
      },
    ],
  },
  {
    id: "results",
    navLabel: "Results",
    sectionLabel: "Results & Certification",
    h2: "Measuring Progress, Certifications, and Post-Program Support",
    faqs: [
      {
        q: "How do you measure progress and results?",
        a: (
          <>
            Every learner begins with a structured pre-assessment that
            documents current confidence levels, communication patterns,
            emotional regulation, and other relevant metrics. At program
            completion, a post-assessment measures documented change. Growth is
            visible and quantifiable — not assumed based on subjective feedback.
            Schools receive detailed student progress reports. Learn more at our{" "}
            <Link
              href="/assessment"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Life Skills Assessment page
            </Link>
            .
          </>
        ),
      },
      {
        q: "Do I get a certificate?",
        a: (
          <>
            Yes. All program participants receive a certificate of completion
            from Hidden Potential. The{" "}
            <Link
              href="/programs/train-the-trainer"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Train the Trainer Certification
            </Link>{" "}
            includes an advanced professional certification. All certificates
            carry MSME registration details and Skill India affiliation. Digital
            and physical formats are provided.
          </>
        ),
      },
      {
        q: "How quickly will I see results?",
        a: "Most participants report noticeable shifts within the first 4 to 6 sessions — increased self-awareness, improved confidence in specific situations, and better emotional regulation. Lasting behavioural transformation requires the full program duration with consistent practice. This is why we offer structured pathways rather than one-day workshops.",
      },
      {
        q: "Is there support after the program ends?",
        a: "Yes. Alumni receive access to WhatsApp support groups, refresher sessions, and the Hidden Potential community. The Train the Trainer Certification includes ongoing support for newly certified trainers. We believe transformation is sustained through continued connection and practice.",
      },
    ],
  },
  {
    id: "audiences",
    navLabel: "Audiences",
    sectionLabel: "Specific Audiences",
    h2: "Programs for Students, Women, Schools, and Corporates",
    faqs: [
      {
        q: "What age group is the student program for?",
        a: (
          <>
            The{" "}
            <Link
              href="/programs/enlightened-learner"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              An Enlightened Learner
            </Link>{" "}
            program is designed for students aged 8 to 21, with three
            developmental sub-groups: 8–12, 13–16, and 17–21. Each sub-group
            receives age-appropriate content and skill focus. For children under
            8, activity-based programs are available through school partnerships.
          </>
        ),
      },
      {
        q: "Do you offer programs specifically for women?",
        a: (
          <>
            Yes.{" "}
            <Link
              href="/programs/self-mastery-women"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Self Mastery for Women
            </Link>{" "}
            is designed exclusively for women aged 28 and above. It covers
            confidence rebuilding, emotional resilience, boundary setting,
            identity reclamation, and self-worth development. Sessions are
            conducted in a safe, supportive, women-only environment. Available
            at our Dwarka, Delhi centre and online.
          </>
        ),
      },
      {
        q: "Can schools partner with you for annual programs?",
        a: (
          <>
            Yes. We offer semester and annual partnerships for schools across
            Delhi, Noida, Gurgaon, and Faridabad. Programs include student
            workshops, teacher training, parent engagement sessions, and
            documented outcome reports. NEP 2020 aligned. MSME registered for
            institutional billing.{" "}
            <Link
              href="/for/schools"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Contact us for a customised school proposal →
            </Link>
          </>
        ),
      },
      {
        q: "Do you work with corporates outside Delhi?",
        a: (
          <>
            Yes. Corporate workshops can be delivered at any location across
            India. Our team of 200+ certified trainers enables national
            delivery. Online corporate programs are also available. The most
            common corporate clients are in Delhi, Gurgaon, and Noida, but we
            serve organisations across the country.{" "}
            <Link
              href="/for/professionals"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Explore programs for professionals →
            </Link>
          </>
        ),
      },
    ],
  },
];

// ── Category nav pills data ───────────────────────────────────────────────────
const navPills = faqCategories.map((c) => ({
  id: c.id,
  label: c.navLabel,
}));

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
export default function FaqPage() {
  return (
    <>
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
              Everything You Need to Know
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Frequently Asked Questions — Life Skills Training in Delhi
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
            26 questions. Every answer you need before starting your
            transformation.
          </p>

          {/* Body */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            Hidden Potential offers life skills training in Delhi NCR —
            including{" "}
            <Link
              href="/services/nlp-coaching"
              className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
            >
              NLP coaching
            </Link>
            ,{" "}
            <Link
              href="/programs/enlightened-learner"
              className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
            >
              student programs
            </Link>
            ,{" "}
            <Link
              href="/services/workshops"
              className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
            >
              corporate workshops
            </Link>
            , and{" "}
            <Link
              href="/programs/train-the-trainer"
              className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
            >
              trainer certification
            </Link>{" "}
            — guided by{" "}
            <Link
              href="/about"
              className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
            >
              Supreet Kaur
            </Link>
            , 14+ years experience, 5000+ trained. Below are comprehensive
            answers to the most common questions from students, professionals,
            parents, schools, and organisations across Dwarka, Noida, Gurgaon,
            and Faridabad. If your question is not answered here, contact us
            directly.
          </p>

          {/* CTA */}
          <div className="flex justify-center mb-10">
            <Link
              href="/contact"
              className="btn-premium-fill"
            >
              Still Have Questions? Contact Us
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "14+ Years Experience",
              "5000+ Trained",
              "200+ Trainers Certified",
              "Dwarka, Delhi & Online",
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
          SECTION 2 — CATEGORY NAVIGATION
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-8 border-b border-gray-200 sticky top-[72px] z-30">
        <div className="max-w-5xl mx-auto px-6">
          {/* Scrollable pill row */}
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-xs font-bold text-charcoal/50 uppercase tracking-wider flex-shrink-0 mr-1">
              Jump to:
            </span>
            {navPills.map((pill) => (
              <a
                key={pill.id}
                href={`#${pill.id}`}
                className="flex-shrink-0 px-4 py-1.5 text-xs font-bold text-primary-teal border border-primary-teal rounded-full bg-white hover:bg-primary-teal hover:text-white transition-colors whitespace-nowrap"
              >
                {pill.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — FAQ CATEGORIES
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-20">
            {faqCategories.map((cat, catIdx) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-44">

                {/* Category header */}
                <div className="mb-10">
                  <SectionLabel>{cat.sectionLabel}</SectionLabel>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-navy leading-tight">
                    {cat.h2}
                  </h2>
                </div>

                {/* FAQ cards — same style as nlp-coaching FAQ section */}
                <div className="flex flex-col gap-5">
                  {cat.faqs.map((faq, faqIdx) => (
                    <div
                      key={faqIdx}
                      className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
                    >
                      {/* Question — teal left border, off-white bg */}
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
                        <div className="text-sm text-charcoal leading-relaxed">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual separator between categories (not after last) */}
                {catIdx < faqCategories.length - 1 && (
                  <div className="mt-16 border-t border-gray-100" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom nudge */}
          <p className="text-center text-sm text-charcoal/70 mt-16">
            Still have questions?{" "}
            <Link
              href="/contact"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Contact us directly →
            </Link>
            <span className="mx-3 text-charcoal/25">·</span>
            <Link
              href="/assessment"
              className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
            >
              Take the free assessment →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — BOTTOM CTA
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
            Question Not Answered? Let Us Help
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            If you have a specific question about life skills training in Delhi
            that is not covered above, reach out directly.{" "}
            <Link
              href="/about"
              className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
            >
              Supreet Kaur
            </Link>{" "}
            and the Hidden Potential team respond within 24 hours. Whether you
            are a parent exploring student programs, a professional considering
            NLP coaching, a school evaluating partnerships, or an organisation
            planning workshops — we are based in Dwarka, Delhi and serve Noida,
            Gurgaon, Faridabad, and pan-India online. We are here to guide you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="btn-premium-fill"
            >
              Contact Us
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
            Explore:{" "}
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
              href="/for/schools"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              For Schools
            </Link>
            <span className="mx-1.5 text-white/20">·</span>
            <Link
              href="/for/professionals"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              For Professionals
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

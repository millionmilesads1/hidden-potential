/**
 * B2B PAGE — LIFE SKILLS PROGRAMS FOR SCHOOLS
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /for/schools
 *
 * 7-section structure:
 *   Section 1  — HERO                (dark gradient, H1, Lora italic, body para, 2 CTAs, trust signals)
 *   Section 2  — WHY SCHOOLS NEED    (off-white, 3 explanatory paragraphs)
 *   Section 3  — WHAT YOUR SCHOOL GETS (white, 8 offerings cards numbered 01–08)
 *   Section 4  — WHO THIS IS FOR     (navy-light, 6 audience cards, some with links)
 *   Section 5  — WHY HIDDEN POTENTIAL (off-white, 6 differentiator cards)
 *   Section 6  — FAQ                 (white, 6 Q&As with FAQPage schema)
 *   Section 7  — CTA                 (dark gradient, para, 2 CTAs, cross-sell, location line)
 *
 * Schemas: Service + FAQPage + BreadcrumbList (all embedded as JSON-LD)
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Life Skills Programs for Schools in Delhi | NEP 2020 Aligned | Hidden Potential" },
  description:
    "Comprehensive life skills programs for schools in Delhi by certified NLP practitioner Supreet Kaur. 14+ years experience. 5000+ students trained. NEP 2020 aligned. MSME registered. Dwarka, Noida, Gurgaon.",
  openGraph: {
    title: "Life Skills Programs for Schools in Delhi — NEP 2020 Aligned Curriculum",
    description:
      "NLP-based life skills curriculum for schools in Delhi NCR. Student workshops, teacher training, parent engagement, exam stress management. MSME registered. Skill India affiliated.",
    type: "website",
    url: "https://hiddenpotentialskills.com/for/schools",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Skills Programs for Schools in Delhi | Hidden Potential",
    description:
      "NLP-based life skills curriculum for schools in Delhi NCR. NEP 2020 aligned. 14+ years. 5000+ trained. MSME registered.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/for/schools",
  },
};

// ── Schema: Service ───────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Life Skills Programs for Schools in Delhi",
  description:
    "Comprehensive NLP-based life skills programs for schools in Delhi, Noida, Gurgaon, and Faridabad. Student workshops, teacher training, parent engagement, SEL integration. NEP 2020 aligned. MSME registered.",
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
  serviceType: "Life Skills Training for Schools",
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
      name: "What age groups do your life skills programs for schools cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our life skills programs for schools in Delhi are designed for students from Class 4 through Class 12. We customise content based on age group and developmental stage. For younger students in Classes 4 to 6, we focus on confidence building, communication basics, and emotional awareness through experiential activities. For middle school students in Classes 7 and 8, we introduce goal setting, study techniques, and peer relationship skills. For senior students in Classes 9 to 12, we cover stress management, career clarity, leadership development, and exam resilience using NLP-based techniques. Every module is designed by Supreet Kaur, drawing on 14+ years of experience and her Harvard-affiliated Life Skills certification, working with students across Delhi NCR including schools in Dwarka, Noida, and Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical school life skills program last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible durations to match your school's academic calendar. Options include single-day workshops of 3 to 4 hours for awareness sessions and assemblies, weekly sessions across a semester spanning 12 to 16 weeks for deeper skill development, and comprehensive annual programs with monthly themes, quarterly assessments, and year-end reports. Schools in Delhi, Noida, and Faridabad most commonly choose the semester-long format because it allows sustained practice and measurable outcomes. Every program includes a structured pre-assessment, age-appropriate modules built on the An Enlightened Learner framework, and a detailed post-program report for school management and parents.",
      },
    },
    {
      "@type": "Question",
      name: "Are your school programs aligned with NEP 2020 requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our founder, Supreet Kaur, has formally completed IGNOU's UGC-approved Professional Development Programme on NEP 2020 Implementation with an A Grade — making Hidden Potential one of the few life skills providers in Delhi NCR with formal NEP 2020 training credentials. Our life skills programs for schools are designed to align with the National Education Policy 2020 mandate for holistic, experiential, and competency-based learning. We integrate social emotional learning, critical thinking, communication skills, and self-awareness development as outlined in the NEP 2020 framework. Schools receive NEP-compliant documentation that supports accreditation, inspection readiness, and compliance reporting. Supreet Kaur's curriculum draws on her NLP certification, Harvard-affiliated Life Skills training, and Graphology expertise to create programs that go well beyond what NEP 2020 requires.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of life skills programs for schools in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Program pricing depends on the scope, duration, number of students, and format. We offer affordable packages specifically structured for schools in Delhi, Noida, Gurgaon, and Faridabad. Government and aided schools receive special pricing considerations. Being MSME registered, we provide institutional invoicing, proper documentation, and GST-compliant billing. Contact us for a customised proposal tailored to your school's specific needs, budget, and academic calendar.",
      },
    },
    {
      "@type": "Question",
      name: "Do you train teachers as part of the school program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We believe lasting change in schools requires training the entire ecosystem. Our school programs include dedicated teacher training modules that equip educators with NLP-based classroom techniques, student engagement strategies, and emotional intelligence tools. We also conduct parent engagement sessions to bridge the school-home learning gap. Supreet Kaur has certified over 200 trainers across Delhi NCR through the Train the Trainer Certification program, many of whom are school teachers and counsellors who now deliver life skills sessions independently within their institutions.",
      },
    },
    {
      "@type": "Question",
      name: "Can we see results from other schools you have worked with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We have partnered with schools across Delhi, Dwarka, Noida, Gurgaon, and Faridabad, training over 5000 students with documented pre-assessment and post-assessment outcomes. During our initial consultation, we share relevant case studies, school testimonials, and measurable outcome data. Visit our Success Stories page for published transformations. We are happy to arrange a reference call with school principals who have implemented our programs so you can hear directly from peers in your region.",
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
      name: "Life Skills Programs for Schools",
      item: "https://hiddenpotentialskills.com/for/schools",
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const offerings = [
  {
    num: "01",
    title: "Student Life Skills Workshops",
    desc: "Age-appropriate modules for Classes 4 through 12 covering confidence building, communication skills, emotional regulation, study techniques, and goal setting. Each workshop uses experiential learning methods and NLP-based tools designed by Supreet Kaur, creator of the An Enlightened Learner program. Sessions are interactive and participation-driven, not lecture-based. Schools across Delhi, Dwarka, and Noida have reported measurable improvements in student confidence and classroom participation after implementing our workshops.",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore the Student Life Skills Program \u2192",
  },
  {
    num: "02",
    title: "Teacher Training and NLP Integration",
    desc: "Equip your teaching staff with NLP-based classroom management techniques, student engagement strategies, and emotional intelligence tools. Teachers learn to identify hidden potential in students, manage diverse learning needs, and create psychologically safe classroom environments. This is not generic professional development — it is structured NLP integration built on Supreet Kaur\u2019s certified methodology and 14+ years of school-level experience. Over 200 educators across Delhi NCR have been certified through this approach.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification \u2192",
  },
  {
    num: "03",
    title: "Parent Engagement Sessions",
    desc: "Bridge the gap between school learning and home environment. Parent sessions cover effective communication with children, understanding developmental stages, managing academic pressure without creating anxiety, and supporting life skills development at home. When parents, teachers, and students are aligned, transformation accelerates significantly. Sessions available at school premises across Delhi NCR or online for parent convenience.",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery \u2192",
  },
  {
    num: "04",
    title: "Exam Stress Management Programs",
    desc: "Scientific, NLP-based techniques for managing exam anxiety, building focus, and improving memory retention. Students learn confidence anchoring for exam halls, cognitive reframing for setbacks, and emotional state management for performing under pressure. These are structured tools that students practise and apply independently. Particularly effective for schools in South Delhi, Gurgaon, and Faridabad during pre-board and board exam seasons.",
    linkHref: "/services/stress-management",
    linkLabel: "Explore Stress Management \u2192",
  },
  {
    num: "05",
    title: "Social Emotional Learning Integration",
    desc: "Embed structured social emotional learning into your existing curriculum. Our SEL framework covers self-awareness, self-regulation, social awareness, relationship skills, and responsible decision-making \u2014 aligned with both international SEL standards and NEP 2020 guidelines. Schools receive implementation guides, teacher resource materials, and assessment rubrics that make integration practical and sustainable across the academic year.",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Explore Emotional Intelligence \u2192",
  },
  {
    num: "06",
    title: "Assembly and Special Event Programs",
    desc: "High-impact sessions designed for school assemblies, annual days, career guidance days, and special events. Topics include goal setting, growth mindset, career exploration, leadership, and personal branding for students. Designed to inspire large groups while delivering actionable takeaways that students remember beyond the event. Available for schools across Delhi, Noida, Gurgaon, and Faridabad.",
    linkHref: "/services/goal-setting",
    linkLabel: "Explore Goal Setting & Achievement \u2192",
  },
  {
    num: "07",
    title: "Art Therapy and Creative Expression",
    desc: "Therapeutic creative expression programs for students dealing with academic stress, bullying, emotional challenges, or social anxiety. Art therapy provides a non-verbal outlet for processing emotions and building resilience. Facilitated by trained practitioners, these sessions complement the broader life skills curriculum and are particularly effective for younger students and those who find verbal expression difficult.",
    linkHref: "/programs/art-therapy",
    linkLabel: "Explore Art Therapy for Healing \u2192",
  },
  {
    num: "08",
    title: "Customised Annual School Programs",
    desc: "Year-long structured curriculum tailored to your school\u2019s culture, age groups, academic calendar, and specific challenges. Annual programs include monthly themed modules, quarterly student assessments, teacher check-ins, parent sessions, and a comprehensive year-end report with documented outcomes. This is our most impactful offering because sustained engagement produces the deepest, most lasting transformation in student development.",
    linkHref: "/contact",
    linkLabel: "Schedule a School Consultation \u2192",
  },
];

const audiences = [
  {
    num: "01",
    title: "CBSE Schools in Delhi and NCR",
    desc: "CBSE schools across Delhi, Dwarka, Rohini, Pitampura, and wider NCR seeking to meet NEP 2020 life skills requirements through structured, assessment-based programs. Our curriculum maps to CBSE\u2019s competency-based learning framework and provides documentation for compliance and accreditation.",
    linkHref: "/services/study-skills",
    linkLabel: "Explore Study Skills \u2192",
  },
  {
    num: "02",
    title: "ICSE and International Schools in Gurgaon and Noida",
    desc: "ICSE, IB, and Cambridge-affiliated schools in Gurgaon, Noida, and Greater Noida seeking premium, evidence-based life skills programs that complement their existing holistic education approach. Our NLP-based methodology integrates seamlessly with international pedagogical standards and adds measurable developmental outcomes.",
    linkHref: "/services/communication-skills",
    linkLabel: "Explore Communication Skills Training \u2192",
  },
  {
    num: "03",
    title: "Government and Aided Schools in Delhi",
    desc: "Government schools and aided institutions in Delhi looking for affordable, high-quality life skills programs with proper institutional documentation. Special pricing structures available. Being MSME registered and Skill India affiliated, Hidden Potential provides government-compliant billing and all required paperwork.",
  },
  {
    num: "04",
    title: "Pre-Schools and Early Learning Centers",
    desc: "Play schools and early learning centres in Dwarka, West Delhi, Janakpuri, and surrounding areas seeking age-appropriate foundational life skills programs. We design simplified, activity-based modules for younger children focused on emotional awareness, basic communication, and confidence through creative expression and play.",
  },
  {
    num: "05",
    title: "Coaching Institutes and Tutorial Centers",
    desc: "Coaching centres and tutorial institutions in South Delhi, Faridabad, and Ghaziabad that want to differentiate their offering by adding structured life skills, exam stress management, and study technique modules alongside academic preparation. This gives students a competitive edge beyond subject knowledge alone.",
    linkHref: "/services/career-guidance",
    linkLabel: "Explore Career Guidance & Planning \u2192",
  },
  {
    num: "06",
    title: "School Principals and Management Committees",
    desc: "Decision-makers evaluating life skills providers who need a credible, experienced, MSME-registered partner with documented outcomes. We provide detailed proposals, reference calls with existing school partners, case studies, and pilot program options so you can evaluate impact before committing to a full partnership.",
    linkHref: "/contact",
    linkLabel: "Schedule a Free Consultation \u2192",
  },
];

const differentiators = [
  {
    title: "NLP-Based Scientific Methodology",
    desc: "Our school programs are not generic motivational assemblies. Every session uses NLP-certified techniques including confidence anchoring, cognitive reframing, and belief restructuring. Supreet Kaur brings NLP certification, Harvard-affiliated Life Skills training, a Masters in Psychology, and Graphology certification from the American Board to every curriculum she designs.",
  },
  {
    title: "NEP 2020 Aligned with Documentation",
    desc: "Programs designed to meet National Education Policy 2020 requirements for holistic and experiential learning. Schools receive NEP-aligned documentation supporting accreditation, inspections, and compliance reporting. This makes it straightforward for administrators to demonstrate life skills integration to boards, parents, and regulatory bodies.",
  },
  {
    title: "Measurable Outcomes with Pre and Post Assessment",
    desc: "Every batch begins with a structured student assessment and ends with a documented progress report. Growth in confidence, communication, emotional regulation, and study habits is visible and measurable. Over 5000 students have been assessed and tracked through this system. Schools receive detailed analytics, not feel-good feedback.",
  },
  {
    title: "MSME Registered and Skill India Affiliated",
    desc: "Hidden Potential is a government-recognised MSME registered organisation with Skill India affiliation. This means institutional credibility, proper invoicing, GST-compliant billing, and documentation that satisfies school management, trust boards, and government requirements. Supreet Kaur is also a recognised Josh Talks speaker.",
  },
  {
    title: "Customised to Your School\u2019s Culture",
    desc: "No two schools are the same. Programs are customised based on board affiliation, student demographics, existing challenges, academic calendar, and budget. Scheduling is flexible \u2014 during school hours, after school, or integrated into existing periods. Schools in Delhi, Noida, Gurgaon, and Faridabad have all received uniquely tailored implementations.",
  },
  {
    title: "14+ Years of School-Level Experience",
    desc: "Supreet Kaur is not a new entrant to school education. With over 14 years of hands-on experience, 5000+ students trained, 200+ trainers certified, and the creation of the An Enlightened Learner program as a signature framework, Hidden Potential offers depth that newer providers cannot match.",
  },
];

const faqs = [
  {
    q: "What age groups do your life skills programs for schools cover?",
    a: "Our life skills programs for schools in Delhi are designed for students from Class 4 through Class 12. We customise content based on age group and developmental stage. For younger students in Classes 4 to 6, we focus on confidence building, communication basics, and emotional awareness through experiential activities. For middle school students in Classes 7 and 8, we introduce goal setting, study techniques, and peer relationship skills. For senior students in Classes 9 to 12, we cover stress management, career clarity, leadership development, and exam resilience using NLP-based techniques. Every module is designed by Supreet Kaur, drawing on 14+ years of experience and her Harvard-affiliated Life Skills certification, working with students across Delhi NCR including schools in Dwarka, Noida, and Gurgaon.",
  },
  {
    q: "How long does a typical school life skills program last?",
    a: "We offer flexible durations to match your school\u2019s academic calendar. Options include single-day workshops of 3 to 4 hours for awareness sessions and assemblies, weekly sessions across a semester spanning 12 to 16 weeks for deeper skill development, and comprehensive annual programs with monthly themes, quarterly assessments, and year-end reports. Schools in Delhi, Noida, and Faridabad most commonly choose the semester-long format because it allows sustained practice and measurable outcomes. Every program includes a structured pre-assessment, age-appropriate modules built on the An Enlightened Learner framework, and a detailed post-program report for school management and parents.",
  },
  {
    q: "Are your school programs aligned with NEP 2020 requirements?",
    a: "Yes. Our founder, Supreet Kaur, has formally completed IGNOU\u2019s UGC-approved Professional Development Programme on NEP 2020 Implementation with an A Grade \u2014 making Hidden Potential one of the few life skills providers in Delhi NCR with formal NEP 2020 training credentials. Our life skills programs for schools are designed to align with the National Education Policy 2020 mandate for holistic, experiential, and competency-based learning. We integrate social emotional learning, critical thinking, communication skills, and self-awareness development as outlined in the NEP 2020 framework. Schools receive NEP-compliant documentation that supports accreditation, inspection readiness, and compliance reporting. Supreet Kaur\u2019s curriculum draws on her NLP certification, Harvard-affiliated Life Skills training, and Graphology expertise to create programs that go well beyond what NEP 2020 requires.",
  },
  {
    q: "What is the cost of life skills programs for schools in Delhi?",
    a: "Program pricing depends on the scope, duration, number of students, and format. We offer affordable packages specifically structured for schools in Delhi, Noida, Gurgaon, and Faridabad. Government and aided schools receive special pricing considerations. Being MSME registered, we provide institutional invoicing, proper documentation, and GST-compliant billing. Contact us for a customised proposal tailored to your school\u2019s specific needs, budget, and academic calendar.",
  },
  {
    q: "Do you train teachers as part of the school program?",
    a: "Yes. We believe lasting change in schools requires training the entire ecosystem. Our school programs include dedicated teacher training modules that equip educators with NLP-based classroom techniques, student engagement strategies, and emotional intelligence tools. We also conduct parent engagement sessions to bridge the school-home learning gap. Supreet Kaur has certified over 200 trainers across Delhi NCR through the Train the Trainer Certification program, many of whom are school teachers and counsellors who now deliver life skills sessions independently within their institutions.",
  },
  {
    q: "Can we see results from other schools you have worked with?",
    a: "Absolutely. We have partnered with schools across Delhi, Dwarka, Noida, Gurgaon, and Faridabad, training over 5000 students with documented pre-assessment and post-assessment outcomes. During our initial consultation, we share relevant case studies, school testimonials, and measurable outcome data. Visit our Success Stories page for published transformations. We are happy to arrange a reference call with school principals who have implemented our programs so you can hear directly from peers in your region.",
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
export default function ForSchoolsPage() {
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
              School Programs &amp; Institutional Partnerships
            </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Life Skills Programs for Schools in Delhi — Building Future-Ready Students
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
            Academic excellence is only half the equation. Life skills complete the picture.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            Schools across Delhi NCR invest heavily in academic performance but the skills that
            matter most in life — confidence, communication, emotional regulation, resilience, and
            self-awareness — are rarely taught with the same rigour. Hidden Potential brings
            structured, NLP-based life skills programs directly into schools, designed by Supreet
            Kaur, creator of the An Enlightened Learner program. With 14+ years of experience,
            Harvard-affiliated Life Skills certification, NLP credentials, and over 5000 students
            trained across Delhi, Dwarka, Noida, Gurgaon, and Faridabad, our programs are NEP 2020
            aligned, assessment-driven, and built for measurable impact. MSME registered for
            institutional partnerships.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="btn-premium-fill"
            >
              Schedule a School Consultation
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </Link>
          </div>

          {/* Trust signals — 6 items */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "14+ Years Experience",
              "5000+ Students Trained",
              "200+ Trainers Certified",
              "NEP 2020 Aligned",
              "MSME Registered",
              "NEP 2020 Certified (IGNOU)",
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
          SECTION 2 — WHY SCHOOLS NEED LIFE SKILLS
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Why Life Skills in Schools</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 leading-tight max-w-2xl">
            Why Schools in Delhi Need Structured Life Skills Programs
          </h2>

          <div className="flex flex-col gap-6 text-base text-charcoal leading-relaxed">
            <p>
              NEP 2020 now mandates holistic development including life skills, social emotional
              learning, and experiential education as core curricular requirements — not optional
              additions. Schools in Delhi NCR that rely solely on academic instruction are falling
              behind the policy framework and parental expectations. Parents in Dwarka, South Delhi,
              Noida, and Gurgaon are actively choosing schools that offer structured life skills
              development alongside academics, and accreditation bodies are placing increasing weight
              on documented holistic development outcomes.
            </p>
            <p>
              Student mental health challenges are rising sharply across Delhi NCR — exam anxiety,
              social media-driven self-doubt, poor emotional regulation, communication gaps, and lack
              of career clarity are reported by school counsellors and principals across Rohini,
              Pitampura, Faridabad, and Greater Noida. These are not problems that more tutoring
              solves. They require structured interventions targeting the belief systems and
              behavioural patterns driving these challenges. UNICEF data on youth mental health in
              India reflects a growing crisis that academic results alone cannot address.
            </p>
            <p>
              <Link
                href="/about"
                className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
              >
                Supreet Kaur
              </Link>{" "}
              has spent 14+ years integrating NLP-based life skills into school environments across
              Delhi NCR. She created the{" "}
              <Link
                href="/programs/enlightened-learner"
                className="font-semibold text-primary-teal hover:text-teal-dark transition-colors"
              >
                An Enlightened Learner program
              </Link>{" "}
              specifically as a structured student development framework for school contexts. Unlike
              one-off motivational speakers, Hidden Potential delivers assessment-based programs with
              documented outcomes — the difference between information and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — WHAT YOUR SCHOOL GETS
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header: content left, image right */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            <div>
              <SectionLabel>What Your School Gets</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
                Comprehensive Life Skills Curriculum for Schools in Delhi NCR
              </h2>
              <p className="text-base text-charcoal/75 leading-relaxed">
                Our school programs cover the full ecosystem — students, teachers, and parents —
                because lasting transformation requires alignment across all three. Here is what your
                school receives through a partnership with Hidden Potential.
              </p>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl">
              <div className="relative w-full" style={{ height: "400px" }}>
                <Image
                  src="/images/students/supreet-teaching.jpg"
                  alt="Supreet Kaur conducting a life skills workshop for school students in Delhi, NEP 2020 aligned program"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* 8 offerings cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {offerings.map((o) => (
              <div
                key={o.num}
                className="card-service"
              >
                {/* Teal header bar with number + title */}
                <div className="bg-primary-teal px-5 py-4">
                  <span className="text-[11px] font-bold text-white/50 tabular-nums">
                    {o.num}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 leading-snug">
                    {o.title}
                  </h3>
                </div>
                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{o.desc}</p>
                  {o.linkHref && o.linkLabel && (
                    <Link
                      href={o.linkHref}
                      className="mt-4 text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                    >
                      {o.linkLabel}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — WHICH SCHOOLS BENEFIT
          Background: Navy-light (#F3F0FF)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-navy-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Who This Is For</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              Which Schools in Delhi NCR Benefit Most from Life Skills Programs?
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Life skills programs at Hidden Potential are designed for schools across board
              affiliations, age groups, and institutional types. Whether you are a CBSE school in
              Dwarka, an international school in Gurgaon, or a coaching centre in Faridabad, we
              customise our approach to fit your context.
            </p>
          </div>

          {/* 6 audience cards — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {audiences.map((a) => (
              <div
                key={a.num}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-teal/20 transition-all p-6 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="text-[11px] font-bold tabular-nums text-primary-teal bg-teal-light px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                  >
                    {a.num}
                  </span>
                  <h3 className="font-bold text-primary-navy text-[15px] leading-snug">
                    {a.title}
                  </h3>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{a.desc}</p>
                {a.linkHref && a.linkLabel && (
                  <Link
                    href={a.linkHref}
                    className="mt-4 text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors"
                  >
                    {a.linkLabel}
                  </Link>
                )}
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
              Why Schools Across Delhi NCR Choose Hidden Potential for Life Skills
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Delhi has many providers offering motivational sessions and one-day workshops for
              schools. Here is why Hidden Potential delivers deeper, more lasting impact.
            </p>
          </div>

          {/* ── Featured: NEP 2020 differentiator (full width) + IGNOU callout ── */}
          <div className="mb-5 bg-white rounded-lg border border-gray-200 shadow-sm p-6">
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
                NEP 2020 Aligned with Documentation
              </h3>
            </div>
            <p className="text-sm text-charcoal/70 leading-relaxed mb-5">
              Programs designed to meet National Education Policy 2020 requirements for holistic
              and experiential learning. Schools receive NEP-aligned documentation supporting
              accreditation, inspections, and compliance reporting. This makes it straightforward
              for administrators to demonstrate life skills integration to boards, parents, and
              regulatory bodies.
            </p>

            {/* ── IGNOU Callout Box ─────────────────────────────── */}
            <div
              className="rounded-lg p-5 flex items-start gap-4"
              style={{
                background: "#F5F2FA",
                borderLeft: "4px solid #7C3AED",
              }}
            >
              {/* Graduation cap icon */}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(109,40,217,0.12)" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#7C3AED" }}
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path d="M12 14l-4-2.222V15" />
                </svg>
              </div>

              <div>
                <p className="text-sm text-charcoal/85 leading-relaxed mb-3">
                  Our founder, Supreet Kaur, has formally completed the UGC-approved
                  Professional Development Programme on{" "}
                  <em>&lsquo;Implementation of NEP 2020&rsquo;</em> from Indira Gandhi
                  National Open University (IGNOU) with an{" "}
                  <strong className="text-primary-navy">A Grade.</strong> This is not just
                  alignment by claim. It is alignment by qualification.
                </p>
                <a
                  href="/certificates/nep-2020-ignou.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-semibold hover:underline transition-colors"
                  style={{ color: "#7C3AED" }}
                >
                  View Certificate →
                </a>
              </div>
            </div>
          </div>

          {/* ── Remaining 5 differentiator cards — 3-column grid ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.filter((_, i) => i !== 1).map((d) => (
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
          SECTION 6 — FAQ
          Background: White
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
              Common Questions About Life Skills Programs for Schools in Delhi
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card-service"
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
            Bring Life Skills Programs to Your School in Delhi NCR
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Your students spend 6 to 8 hours a day in your school — more waking time than they
            spend at home. The habits, beliefs, and emotional patterns they develop during these
            years shape their entire adult lives. A structured life skills program does not compete
            with academics — it amplifies academic performance by building the confidence, focus,
            emotional regulation, and communication skills that make learning effective. Over 5000
            students across Delhi NCR have experienced this transformation through Hidden Potential.
            Your school could be next.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="btn-premium-fill"
            >
              Schedule a School Consultation
              <span className="btn-icon-circle" aria-hidden="true"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
            </Link>
            <Link
              href="/contact"
              className="btn-premium-ghost-plain"
            >
              Download Program Brochure
            </Link>
          </div>

          {/* Cross-sell */}
          <p className="text-xs text-white/40 mb-4">
            Also explore:{" "}
            <Link
              href="/services/workshops"
              className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Corporate Workshops in Delhi
            </Link>{" "}
            — structured team development for your teaching staff
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

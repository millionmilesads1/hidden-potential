/**
 * AUDIENCE PAGE - TRAIN THE TRAINER & LIFE SKILLS FOR EDUCATORS AND COACHES
 * ─────────────────────────────────────────────────────────────────────────────
 * Route: /for/teachers-and-coaches
 *
 * 7-section structure:
 *   Section 1  - HERO                          (dark gradient, H1, Lora italic, body, 2 CTAs, trust signals)
 *   Section 2  - THE EDUCATOR CHALLENGE        (off-white, intro + 6 pain-point cards)
 *   Section 3  - RECOMMENDED PROGRAMS          (white, 8 program cards numbered 01–08)
 *   Section 4  - WHO SPECIFICALLY BENEFITS     (navy-light, 6 persona cards)
 *   Section 5  - WHY HIDDEN POTENTIAL          (off-white, 6 differentiator cards)
 *   Section 6  - FAQ                           (white, 6 Q&As)
 *   Section 7  - FINAL CTA                     (dark gradient, para, 2 CTAs, cross-sell, location line)
 *
 * Schemas: Service + FAQPage + BreadcrumbList (all embedded as JSON-LD)
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: { absolute: "Train the Trainer Certification for Teachers & Coaches in Delhi | Hidden Potential" },
  description:
    "Train the Trainer Certification for educators, teachers, and coaches in Delhi NCR. NLP integration, facilitation skills, Skill India affiliated. 200+ certified trainers. Supreet Kaur. Dwarka & online.",
  openGraph: {
    title: "Train the Trainer Certification in Delhi - Train the Trainer. Lead With Impact.",
    description:
      "Structured Train the Trainer Certification for school teachers, educators, coaches, and aspiring trainers in Delhi NCR. NLP-based. Skill India affiliated. MSME registered. 200+ certified.",
    type: "website",
    url: "https://hiddenpotentialskills.com/for/teachers-and-coaches",
  },
  twitter: {
    card: "summary_large_image",
    title: "Train the Trainer Certification for Teachers & Coaches | Hidden Potential Delhi",
    description:
      "NLP-based Train the Trainer Certification for educators and coaches. Delhi NCR. Skill India affiliated. 200+ certified. Supreet Kaur.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/for/teachers-and-coaches",
  },
};

// ── Schema: Service ───────────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Train the Trainer Certification for Teachers and Coaches in Delhi",
  description:
    "Structured Train the Trainer Certification for educators, school teachers, aspiring trainers, and coaches in Delhi NCR. NLP integration, facilitation methodology, curriculum design. Skill India affiliated, MSME registered. 200+ certified trainers across Delhi NCR.",
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
  serviceType: "Train the Trainer Certification and Educator Development",
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
      name: "What is the Train the Trainer Certification at Hidden Potential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Train the Trainer Certification at Hidden Potential is a structured professional development program for educators, coaches, school teachers, HR professionals, and aspiring trainers. It covers the complete life skills curriculum (25 life skills), NLP integration and behavioural tools, training design and facilitation methodology, pre and post assessment creation, and professional trainer profile development. Two tracks are available: a 1-month Crash Course for experienced educators seeking structured NLP integration, and a 3-month Full Certification for those building a complete professional training identity. The certification is Skill India affiliated and MSME registered.",
      },
    },
    {
      "@type": "Question",
      name: "Is this certification recognised? What is its accreditation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Train the Trainer Certification at Hidden Potential is issued under the MSME registered organisation Hidden Potential, which is also Skill India affiliated. Supreet Kaur holds NLP certification, Harvard-affiliated Life Skills certification, a Masters in Psychology, Graphology certification from the American Board, and has formally completed the UGC-approved Professional Development Programme on NEP 2020 Implementation from IGNOU with an A Grade. The certification carries the institutional credibility of these credentials and has been completed by 200+ trainers across Delhi NCR who now deliver programs in schools, organisations, and independently.",
      },
    },
    {
      "@type": "Question",
      name: "I am a school teacher. How will this certification help me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a school teacher, the Train the Trainer Certification adds several dimensions to your professional profile: NLP-based classroom management and student engagement techniques that transform how you handle difficult students and groups; a structured life skills curriculum aligned with NEP 2020 that you can integrate into your existing teaching; the ability to design and deliver outcome-based workshops independently; and a recognised certification that strengthens your professional identity. Many teachers in Delhi NCR who complete this program go on to deliver life skills sessions within their schools or build independent training practices alongside their teaching careers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I build an income as a certified life skills trainer after completing this program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many graduates of the Train the Trainer Certification at Hidden Potential - particularly women educators and coaches - use it to build independent income streams. Options include conducting paid life skills workshops for schools and corporates, one-on-one coaching practice, group programs for parents or communities, and online training delivery. Supreet Kaur supports certified trainers in building their professional profile and connecting with opportunities within the Hidden Potential ecosystem. The certification is particularly effective for women seeking professional identity and flexible income alongside existing commitments.",
      },
    },
    {
      "@type": "Question",
      name: "What NLP tools are included in the certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Train the Trainer Certification integrates NLP extensively. Participants learn: foundations of NLP and understanding belief systems; NLP confidence anchoring techniques for use in training sessions; cognitive reframing methods for working with resistant or fearful participants; NLP language patterns for influence and effective facilitation; and how to apply these tools when delivering life skills sessions with students, professionals, and corporate teams. This NLP integration is what makes Hidden Potential certified trainers significantly more effective than those trained on standard facilitation-only programs.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the program and can I attend while working full-time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two tracks are available. The 1-Month Crash Course is intensive and suits experienced educators and professionals who need structured NLP integration and certification within a compressed timeline. The 3-Month Full Certification is the complete professional development track - comprehensive curriculum mastery, full NLP integration, practical facilitation with real groups, and detailed profile development. Both tracks are scheduled with working professionals in mind: weekend sessions, evening batches, and online participation options are available. Teachers, coaches, and working professionals across Delhi, Gurgaon, and Noida have completed both tracks without disrupting their existing schedules.",
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
      name: "Train the Trainer Certification for Teachers and Coaches",
      item: "https://hiddenpotentialskills.com/for/teachers-and-coaches",
    },
  ],
};

// ── Page Content Data ─────────────────────────────────────────────────────────

const painPoints = [
  {
    num: "01",
    title: "You Know Your Subject but Struggle to Make It Stick in the Room",
    desc: "There is a significant difference between knowing something deeply and being able to transfer that knowledge to others in a way that changes how they think and behave. Facilitation is a skill system - one that can be systematically learned, and one that dramatically amplifies the impact of everything else you know.",
  },
  {
    num: "02",
    title: "Classroom Management Feels Reactive Rather Than Intentional",
    desc: "You deal with disruptive students, disengaged groups, and resistant participants by responding in the moment - often ineffectively. NLP-based classroom and group management techniques give you a proactive framework: tools for reading group energy, managing emotional states, and creating the psychological safety that makes genuine learning possible.",
  },
  {
    num: "03",
    title: "Your Facilitation Style Does Not Create the Transformation You Envisioned",
    desc: "You entered teaching or coaching to make a difference. But session after session, participants leave unchanged in any meaningful way. The gap between information delivery and genuine transformation is bridged by NLP-based techniques - reframing, anchoring, belief work - that reach participants at the level where change actually happens.",
  },
  {
    num: "04",
    title: "You Have No Formal Certification Backing Your Coaching Practice",
    desc: "You have experience, insight, and genuine skill. But without a recognised certification, every conversation with a potential client, school, or organisation requires you to prove yourself from scratch. A structured, credentialed certification gives your practice the professional foundation it deserves.",
  },
  {
    num: "05",
    title: "You Want an Independent Training Career but Do Not Know How to Build It",
    desc: "The desire to train, coach, or facilitate professionally is real - but the pathway from intention to a functioning independent practice feels unclear. The Train the Trainer Certification provides not just skills and credentials, but a structured understanding of how to build, market, and operate a professional training identity.",
  },
  {
    num: "06",
    title: "Your Communication in Professional Settings Lacks the Authority You Feel Inside",
    desc: "In one-on-one conversations, you are confident and clear. In front of groups, workshops, or institutional presentations, something contracts. Trainer presence - the ability to hold a room, command attention, and deliver with authority - is a learnable skill, and it transforms the impact of every session you run.",
  },
];

const recommendedPrograms = [
  {
    num: "01",
    title: "Train the Trainer Certification",
    desc: "The flagship program for educators, coaches, and aspiring trainers. Covers 25 life skills through a structured framework, NLP integration and behavioural tools, training and facilitation methodology, curriculum design, assessment creation, and professional trainer profile development. Two tracks: 1-Month Crash Course and 3-Month Full Certification. Skill India affiliated. MSME registered. 200+ certified across Delhi NCR.",
    match: "Best for: Teachers, coaches, counsellors, HR professionals, and aspiring independent trainers",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification \u2192",
  },
  {
    num: "02",
    title: "NLP Coaching - Individual Sessions",
    desc: "One-on-one work with Supreet Kaur to develop your trainer presence, facilitation confidence, and personal belief system as an educator. Addresses the internal patterns - self-doubt, authority anxiety, people-pleasing - that limit your impact in the room. Complements the Train the Trainer Certification as a powerful individual development track.",
    match: "Best for: Educators and coaches doing deep individual work on their facilitation presence",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching \u2192",
  },
  {
    num: "03",
    title: "Communication Mastery Program",
    desc: "Structured communication and leadership training for educators who want to command a room, deliver with clarity, and use language that influences and inspires. Covers public speaking, voice modulation, structured thinking in speech, assertive communication, and leadership presence. Directly applicable to classroom, workshop, and corporate training contexts.",
    match: "Best for: Teachers and trainers building professional communication skills and platform presence",
    linkHref: "/programs/communication-mastery",
    linkLabel: "Explore Communication Mastery \u2192",
  },
  {
    num: "04",
    title: "An Enlightened Learner Program",
    desc: "Understanding the student development framework you will be trained to deliver. Educators and aspiring life skills trainers benefit from directly experiencing the An Enlightened Learner curriculum as participants before facilitating it with their own groups. This experiential understanding deepens your facilitation significantly.",
    match: "Best for: Teachers and trainers who will be delivering the AEL curriculum with students",
    linkHref: "/programs/enlightened-learner",
    linkLabel: "Explore An Enlightened Learner \u2192",
  },
  {
    num: "05",
    title: "Confidence Building Program",
    desc: "For educators whose facilitation impact is limited by personal confidence gaps rather than knowledge or skill gaps. Uses NLP anchoring, belief mapping, and progressive exposure techniques to build genuine trainer authority. Particularly effective for women educators and newer coaches building their professional presence.",
    match: "Best for: Newer educators, women trainers, and coaches building professional confidence",
    linkHref: "/services/confidence-building",
    linkLabel: "Explore Confidence Building \u2192",
  },
  {
    num: "06",
    title: "Emotional Intelligence Training",
    desc: "For educators and coaches who work in emotionally complex environments - schools, counselling contexts, corporate L&D. Develop the self-awareness and emotional regulation that prevents burnout, improves your ability to connect with participants at different emotional states, and elevates your facilitation quality.",
    match: "Best for: Educators in high-demand environments and coaches working with emotional content",
    linkHref: "/services/emotional-intelligence",
    linkLabel: "Explore Emotional Intelligence \u2192",
  },
  {
    num: "07",
    title: "Corporate Workshops (as Facilitator)",
    desc: "For certified trainers looking to deliver in corporate contexts. Understanding corporate workshop dynamics, stakeholder expectations, and business-oriented facilitation skills is a distinct competency. Hidden Potential's corporate program experience helps trainers successfully bridge from educational to professional training contexts.",
    match: "Best for: Certified trainers expanding into corporate training markets",
    linkHref: "/services/workshops",
    linkLabel: "Explore Corporate Workshops \u2192",
  },
  {
    num: "08",
    title: "Goal Setting & Achievement",
    desc: "For educators building an independent training practice or coaches helping clients navigate career clarity. Understanding goal-setting methodology from both sides - as practitioner and facilitator - deepens your ability to deliver this module powerfully. Also directly applicable for building your own training business plan.",
    match: "Best for: Aspiring independent trainers and coaches building their professional direction",
    linkHref: "/services/goal-setting",
    linkLabel: "Explore Goal Setting \u2192",
  },
];

const personas = [
  {
    num: "01",
    title: "School Teachers Seeking Professional Certification",
    desc: "You teach every day but want a formal life skills certification that adds depth to your professional profile, enables you to integrate structured life skills into your school, and opens doors to independent training income alongside your teaching career.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification \u2192",
  },
  {
    num: "02",
    title: "Aspiring Life Skills Trainers and Facilitators",
    desc: "You want to become a professional life skills trainer but need the curriculum mastery, NLP tools, facilitation methodology, and recognised credential to do it credibly. The Train the Trainer Certification provides all four, plus ongoing connection with the Hidden Potential community of certified trainers across Delhi NCR.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification \u2192",
  },
  {
    num: "03",
    title: "Counsellors and Psychologists Adding Structured Training Skills",
    desc: "You work with individuals therapeutically but want to expand into structured group facilitation, workshops, and training delivery. The certification bridges the gap between therapeutic work and structured life skills training, adding a powerful dimension to your professional practice.",
    linkHref: "/services/nlp-coaching",
    linkLabel: "Explore NLP Coaching \u2192",
  },
  {
    num: "04",
    title: "Coaches Building Credibility and Structured Methodology",
    desc: "You coach individuals but lack a formal, structured methodology and recognised credential to back your practice. The Train the Trainer Certification provides both - a rigorous NLP-based framework and a certification that gives potential clients the confidence to invest in your services.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification \u2192",
  },
  {
    num: "05",
    title: "HR Professionals Creating Internal Training Capability",
    desc: "You are responsible for your organisation's people development and want to build a sustainable internal life skills delivery capability rather than perpetually purchasing external training. The certification turns you into a credentialed life skills facilitator who can deliver transformational programs within your own organisation.",
    linkHref: "/programs/train-the-trainer",
    linkLabel: "Explore Train the Trainer Certification \u2192",
  },
  {
    num: "06",
    title: "Women Educators Seeking Independent Career Income",
    desc: "Many women educators complete the Train the Trainer Certification specifically to build a professional income stream that uses their existing skills and knowledge in a structured, credentialed way. It creates a flexible, independent practice that can grow alongside or beyond existing teaching or homemaking commitments.",
    linkHref: "/programs/self-mastery-women",
    linkLabel: "Explore Self Mastery for Women \u2192",
  },
];

const differentiators = [
  {
    title: "MSME Registered and Skill India Affiliated Certification",
    desc: "The Train the Trainer Certification is issued by a government-recognised MSME registered and Skill India affiliated organisation. This gives the credential institutional weight that is relevant for school partnerships, corporate clients, and independent practice credibility. Supreet Kaur's additional qualifications - Harvard-affiliated Life Skills training, NLP certification, Masters in Psychology, IGNOU NEP 2020 certification with A Grade - underpin every program she trains.",
  },
  {
    title: "NEP 2020 Aligned Curriculum Design Training",
    desc: "Certified trainers learn to design life skills programs that are NEP 2020 aligned - with proper documentation, competency mapping, and assessment rubrics. For educators working with schools, this makes implementing and reporting on life skills programs straightforward. This NEP 2020 alignment is backed by Supreet Kaur's A Grade completion of the IGNOU UGC-approved programme.",
  },
  {
    title: "Practical Facilitation with Real Student Groups",
    desc: "The Train the Trainer Certification is not theoretical. Participants practise facilitation with actual student groups under guided supervision, receive structured feedback on their delivery, and complete a practical facilitation demonstration before certification. You enter your first paid session having already delivered under expert observation - not learning on your clients.",
  },
  {
    title: "NLP Integration That Elevates Every Training Session",
    desc: "Most trainer certifications teach facilitation technique. Hidden Potential's program integrates full NLP methodology - confidence anchoring, belief restructuring, reframing techniques, and language patterns for influence. This NLP dimension is what separates certified Hidden Potential trainers from standard facilitators. It creates the behavioural transformation in participants that makes sessions genuinely memorable.",
  },
  {
    title: "200+ Certified Trainers Across Delhi NCR",
    desc: "Over 200 trainers have been certified through this program across Delhi, Noida, Gurgaon, and Faridabad. This community of graduates is living proof of the certification's value - many now deliver programs in schools, corporations, and independently. During and after the program, you join a network of practitioners who support, refer, and collaborate with each other.",
  },
  {
    title: "Flexible Tracks: Crash Course or Full Certification",
    desc: "Two structured options match different needs and timelines. The 1-Month Crash Course suits experienced educators who need focused NLP integration and certification quickly. The 3-Month Full Certification is the comprehensive professional development track - complete curriculum mastery, full NLP integration, practical facilitation, and profile development. Both are scheduled with working professionals in mind.",
  },
];

const faqs = [
  {
    q: "What is the Train the Trainer Certification at Hidden Potential?",
    a: "The Train the Trainer Certification at Hidden Potential is a structured professional development program for educators, coaches, school teachers, HR professionals, and aspiring trainers. It covers the complete life skills curriculum (25 life skills), NLP integration and behavioural tools, training design and facilitation methodology, pre and post assessment creation, and professional trainer profile development. Two tracks are available: a 1-month Crash Course for experienced educators seeking structured NLP integration, and a 3-month Full Certification for those building a complete professional training identity. The certification is Skill India affiliated and MSME registered.",
  },
  {
    q: "Is this certification recognised? What is its accreditation?",
    a: "The Train the Trainer Certification at Hidden Potential is issued under the MSME registered organisation Hidden Potential, which is also Skill India affiliated. Supreet Kaur holds NLP certification, Harvard-affiliated Life Skills certification, a Masters in Psychology, Graphology certification from the American Board, and has formally completed the UGC-approved Professional Development Programme on NEP 2020 Implementation from IGNOU with an A Grade. The certification carries the institutional credibility of these credentials and has been completed by 200+ trainers across Delhi NCR who now deliver programs in schools, organisations, and independently.",
  },
  {
    q: "I am a school teacher. How will this certification help me?",
    a: "As a school teacher, the Train the Trainer Certification adds several dimensions to your professional profile: NLP-based classroom management and student engagement techniques that transform how you handle difficult students and groups; a structured life skills curriculum aligned with NEP 2020 that you can integrate into your existing teaching; the ability to design and deliver outcome-based workshops independently; and a recognised certification that strengthens your professional identity. Many teachers in Delhi NCR who complete this program go on to deliver life skills sessions within their schools or build independent training practices alongside their teaching careers.",
  },
  {
    q: "Can I build an income as a certified life skills trainer after completing this program?",
    a: "Yes. Many graduates of the Train the Trainer Certification at Hidden Potential - particularly women educators and coaches - use it to build independent income streams. Options include conducting paid life skills workshops for schools and corporates, one-on-one coaching practice, group programs for parents or communities, and online training delivery. Supreet Kaur supports certified trainers in building their professional profile and connecting with opportunities within the Hidden Potential ecosystem. The certification is particularly effective for women seeking professional identity and flexible income alongside existing commitments.",
  },
  {
    q: "What NLP tools are included in the certification?",
    a: "The Train the Trainer Certification integrates NLP extensively. Participants learn: foundations of NLP and understanding belief systems; NLP confidence anchoring techniques for use in training sessions; cognitive reframing methods for working with resistant or fearful participants; NLP language patterns for influence and effective facilitation; and how to apply these tools when delivering life skills sessions with students, professionals, and corporate teams. This NLP integration is what makes Hidden Potential certified trainers significantly more effective than those trained on standard facilitation-only programs.",
  },
  {
    q: "How long is the program and can I attend while working full-time?",
    a: "Two tracks are available. The 1-Month Crash Course is intensive and suits experienced educators and professionals who need structured NLP integration and certification within a compressed timeline. The 3-Month Full Certification is the complete professional development track - comprehensive curriculum mastery, full NLP integration, practical facilitation with real groups, and detailed profile development. Both tracks are scheduled with working professionals in mind: weekend sessions, evening batches, and online participation options are available. Teachers, coaches, and working professionals across Delhi, Gurgaon, and Noida have completed both tracks without disrupting their existing schedules.",
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
export default function ForTeachersAndCoachesPage() {
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
            For Teachers &amp; Coaches
          </span>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Train the Trainer Certification for Educators &amp; Coaches in Delhi - Train the Trainer. Lead With Impact.
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
            You were born to teach. Now learn to transform.
          </p>

          {/* Body paragraph */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto">
            The gap between a teacher and a transformational trainer is not knowledge - it is
            methodology, NLP tools, facilitation depth, and a credential that signals professional
            mastery. Hidden Potential&rsquo;s{" "}
            <Link
              href="/programs/train-the-trainer"
              className="font-semibold text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              Train the Trainer Certification
            </Link>{" "}
            is the structured pathway for educators, school teachers, coaches, and aspiring
            trainers across Delhi NCR. Designed and led by{" "}
            <Link
              href="/about"
              className="font-semibold text-white/80 hover:text-white transition-colors underline underline-offset-2"
            >
              Supreet Kaur
            </Link>{" "}
            - NLP certified, Harvard-affiliated Life Skills training, Masters in Psychology, 14+
            years, 200+ trainers certified. Skill India affiliated. MSME registered. Two tracks:
            1-Month Crash Course or 3-Month Full Certification.
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
              href="/programs/train-the-trainer"
              className="btn-premium-ghost-plain"
            >
              Explore the Certification
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {[
              "200+ Trainers Certified",
              "Skill India Affiliated",
              "MSME Registered",
              "NLP & Harvard Certified Trainer",
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
          SECTION 2 - THE EDUCATOR CHALLENGE
          Background: Off-white
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>The Educator&apos;s Challenge</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight max-w-3xl">
              What Holds Talented Educators and Coaches Back from Transformational Impact
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              Delhi NCR has thousands of talented, knowledgeable educators. Very few of them have
              the structured methodology, NLP tools, and professional certification to turn that
              knowledge into transformation. Here is what we hear most often from educators and
              coaches who come to Hidden Potential.
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
              <SectionLabel>Programs for Teachers &amp; Coaches</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 leading-tight">
                Life Skills Programs Designed for Educators and Coaches in Delhi NCR
              </h2>
              <p className="text-base text-charcoal/75 leading-relaxed">
                The Train the Trainer Certification is the core offering for this audience.
                Complementary programs develop the personal and professional skills that elevate
                your training effectiveness and open new career pathways.
              </p>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl">
              <div className="relative w-full" style={{ height: "400px" }}>
                <Image
                  src="/images/students/supreet-teaching.jpg"
                  alt="Train the Trainer Certification for educators and coaches by Hidden Potential Delhi"
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
              Which Educators and Coaches in Delhi NCR Benefit Most?
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              The Train the Trainer Certification serves educators and coaches across experience
              levels and career stages. Whether you are a school teacher in Dwarka, a coach in
              Gurgaon, or an aspiring trainer building from scratch - there is a track and a
              pathway designed for your specific situation.
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
              Why Educators Across Delhi NCR Choose Hidden Potential for Trainer Certification
            </h2>
            <p className="text-base text-charcoal/75 leading-relaxed max-w-3xl">
              There are many training certifications available in Delhi NCR. Here is what makes
              the Hidden Potential Train the Trainer Certification a deeper, more career-defining
              investment.
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
              Common Questions from Educators and Coaches
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
            You Already Have the Calling. Now Get the Certification That Matches It.
          </h2>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            The educators and coaches who create lasting transformation are not necessarily the
            most knowledgeable in the room. They are the ones with the NLP tools to reach people
            at the level where change happens, the facilitation methodology to create structured
            outcomes, and the professional certification that signals their mastery. Over 200
            trainers have completed the Train the Trainer Certification at Hidden Potential.
            They are now delivering programs in schools, corporations, and independent practices
            across Delhi, Noida, Gurgaon, and Faridabad. Your place in that community is open.
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
              Enroll in the Certification
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
            - bring structured life skills into your school as a certified trainer
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

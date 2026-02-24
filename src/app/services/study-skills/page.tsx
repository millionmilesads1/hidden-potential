import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Study Skills Training for Students | Smarter Learning, Stronger Results | Hidden Potential",
  description:
    "Study skills training for students in Delhi. Smart study strategies, time management, goal execution, memory techniques & exam preparation. Ages 8-21. Dwarka, Delhi & Online.",
  openGraph: {
    title:
      "Study Skills Training for Students | Smarter Learning, Stronger Results | Hidden Potential",
    description:
      "Study skills training for students in Delhi. Smart study strategies, time management, goal execution, memory techniques & exam preparation. Ages 8-21. Dwarka, Delhi & Online.",
    url: "https://hiddenpotentialskills.com/services/study-skills",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Study Skills Training for Students | Smarter Learning, Stronger Results | Hidden Potential",
    description:
      "Study skills training for students in Delhi. Smart study strategies, time management, goal execution, memory techniques & exam preparation. Ages 8-21. Dwarka, Delhi & Online.",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/services/study-skills",
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   LOCAL HELPER
───────────────────────────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────────────────────
   SCHEMA MARKUP
───────────────────────────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Study Skills Training for Students",
  serviceType: "Study Skills Training",
  provider: {
    "@type": "Organization",
    name: "Hidden Potential",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka",
      addressLocality: "Delhi",
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
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What age is best to start study skills training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ideal starting age is 8 to 10 years old, when basic learning habits are being formed. Starting early prevents the development of ineffective study patterns that become harder to change in later years. However, study skills are trainable at any student age — we work with students from 8 to 21 across Foundation, Growth, and Mastery stages.",
      },
    },
    {
      "@type": "Question",
      name: "Will study skills training help with board exam preparation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Study skills training at Hidden Potential specifically addresses board exam preparation through structured revision planning, memory techniques for high-volume content retention, practice test strategies, time management during exams, and NLP-based anxiety management. Students preparing for CBSE, ICSE, and state board exams consistently show improved performance after structured study skills training.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from regular tuition classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuition classes teach subject content — they help students understand what to learn. Study skills training teaches how to learn — the strategies, systems, and habits that make all learning more effective. Many students attend tuitions but still underperform because the problem is their learning method, not their content knowledge. Study skills training at Hidden Potential addresses the root cause and often reduces the need for subject-specific tuitions.",
      },
    },
    {
      "@type": "Question",
      name: "Can study skills training help with competitive exam preparation like JEE or NEET?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Competitive exams require high-volume information retention, time-pressured performance, and sustained focus over long preparation periods — all of which are trainable study skills. Students preparing for JEE, NEET, CLAT, and other competitive exams benefit from structured memory techniques, time management systems, practice test strategies, and exam anxiety management that are core components of study skills training at Hidden Potential.",
      },
    },
    {
      "@type": "Question",
      name: "Is study skills training available online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Study skills training is available offline at our Dwarka, Delhi location, online for students across Delhi NCR and pan-India, and in hybrid format. Online sessions follow the same structured methodology including assessments, practice exercises, and progress tracking.",
      },
    },
    {
      "@type": "Question",
      name: "How long does study skills training take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most parents and students report noticeable improvements in study habits, organisation, and time management within 4 to 6 weeks of structured training. Academic performance improvements — better test scores and grades — typically become visible within one to two academic terms as new study strategies become habitual. The Foundation pathway runs 3 months, with options to continue into Growth (6 months) and Mastery (12 months) levels.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function StudySkillsPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ═══════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)" }}
        >
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

          <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
              <span
                className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-teal rounded-full mb-6"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                Academic Excellence
              </span>

            <h1
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto"
              style={{
                fontFamily: "var(--font-display)",
                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              Study Skills Training for Students — Smarter Learning, Stronger Results
            </h1>

            <p
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto"
              style={{
                fontFamily: "var(--font-accent)",
                fontStyle: "italic",
                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              Academic success is not about studying harder — it&apos;s about studying smarter with
              the right systems.
            </p>

            <p className="text-base text-white/65 max-w-3xl mx-auto mb-10 leading-relaxed">
              Every year, thousands of students across Delhi NCR spend hours studying yet fail to see
              proportionate results. They sit with their books, attend tuitions, complete worksheets
              — but the grades do not reflect the effort. The problem is almost never intelligence or
              dedication. It is the absence of structured study skills. At Hidden Potential, study
              skills training for students is built on the understanding that learning itself is a
              skill — and like any skill, it can be taught, practised, and mastered. From smart study
              strategies and time management systems to goal-setting frameworks and memory
              enhancement techniques, our study skills program gives students aged 8 to 21 the tools
              to learn more effectively, retain information longer, perform better in exams, and
              develop the academic discipline that carries into career success. Every student begins
              with an assessment so the training targets their specific learning gaps — not a generic
              one-size-fits-all approach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Take the Learning Assessment
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white/90 rounded-md transition-colors hover:text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Book a Discovery Call
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                "Ages 8 to 21",
                "Assessment-Based",
                "NEP 2020 Aligned",
                "Dwarka, Delhi & Online",
              ].map((signal) => (
                <span
                  key={signal}
                  className="text-[11px] font-semibold text-white/45 uppercase tracking-wider flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-primary-gold inline-block" />
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2 — WHY IT MATTERS
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#F8F6F2]">
          <div className="max-w-4xl mx-auto px-6">
            <SectionLabel>Why Study Skills Matter</SectionLabel>
            <h2
              className="text-2xl md:text-3xl font-bold mb-8 leading-snug"
              style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}
            >
              Why Most Students in Delhi Struggle Despite Working Hard
            </h2>
            <div className="space-y-6 text-base leading-relaxed" style={{ color: "#2D2D2D" }}>
              <p>
                India&apos;s education system excels at delivering content — textbooks, syllabi,
                exams, and assessments are thorough and demanding. What it consistently fails to
                teach is how to learn. Students are told what to study but never taught how to study.
                They are given deadlines but never taught time management. They are expected to focus
                but never given concentration techniques. They are graded on memory but never taught
                memory strategies.
              </p>
              <p>
                The result is predictable: students who work hard but underperform, students who
                develop exam anxiety because effort does not translate to results, and students who
                lose confidence in their own intelligence because they assume the problem is their
                brain rather than their method. Research from educational psychology consistently
                shows that study skills — not IQ — are the strongest predictor of academic
                performance. A student with average intelligence and excellent study skills will
                consistently outperform a gifted student with poor study habits.
              </p>
              <p>
                At Hidden Potential in Delhi, study skills training is a structured component of the
                An Enlightened Learner student program. It is not an afterthought or an optional
                add-on — it is treated as one of the 13 essential life skills that every student
                needs to develop for long-term success. Students learn how to study, not just what to
                study — and the difference in academic performance is measurable within the first
                three months.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3 — WHAT YOU'LL DEVELOP
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-4">
              <SectionLabel>Skills You&apos;ll Build</SectionLabel>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-5 leading-snug max-w-3xl mx-auto"
              style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}
            >
              Study Skills We Develop at Hidden Potential for Students in Delhi
            </h2>
            <p
              className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              Study skills training covers the complete learning system — from how you organise your
              study time to how you retain information, prepare for exams, and build the academic
              discipline that lasts beyond any single test.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 01 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#7C3AED" }}>
                  <span className="text-white/60 text-xs font-bold">01</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Smart Study Strategies
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Not all study methods are equally effective. Highlighting textbooks, re-reading
                    notes, and passive revision are among the least effective learning strategies
                    according to educational research — yet they are what most students in Delhi
                    default to. At Hidden Potential, students learn evidence-based study techniques
                    including active recall, spaced repetition, the Feynman technique for deep
                    understanding, and elaborative interrogation. These methods are proven to improve
                    retention by 40 to 60 percent compared to passive study — and they become habits
                    through structured practice.
                  </p>
                </div>
              </div>

              {/* Card 02 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#7C3AED" }}>
                  <span className="text-white/60 text-xs font-bold">02</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Time Management and Study Planning
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Most students do not have a time problem — they have a planning problem. Without a
                    structured approach to managing study time, homework, revision, and extracurricular
                    activities, students either procrastinate until deadline pressure forces action or
                    study inefficiently by spending equal time on subjects regardless of difficulty.
                    Our time management training teaches students to create realistic study schedules,
                    prioritise subjects based on difficulty and exam proximity, use time-blocking
                    techniques, and build the daily discipline that makes cramming unnecessary.
                  </p>
                </div>
              </div>

              {/* Card 03 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#7C3AED" }}>
                  <span className="text-white/60 text-xs font-bold">03</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Goal Setting and Academic Execution
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Setting academic goals is easy. Executing them consistently is where most students
                    fail. At Hidden Potential, goal setting is not about writing targets on a vision
                    board — it is a structured execution framework. Students learn to break large goals
                    into weekly and daily actions, track their own progress, identify when they are
                    falling behind before it becomes critical, and develop the accountability habits
                    that make long-term academic success sustainable rather than dependent on external
                    pressure from parents or teachers.
                  </p>
                </div>
              </div>

              {/* Card 04 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#7C3AED" }}>
                  <span className="text-white/60 text-xs font-bold">04</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Memory Enhancement and Retention Techniques
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Memory is not a fixed capacity — it is a trainable skill. Students at Hidden
                    Potential learn structured memory techniques including mind mapping for visual
                    learners, mnemonic systems for factual content, spaced repetition scheduling for
                    long-term retention, and active recall practice methods. These techniques are
                    particularly effective for students preparing for board exams, competitive exams,
                    and entrance tests where large volumes of information need to be retained and
                    recalled accurately.
                  </p>
                </div>
              </div>

              {/* Card 05 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#7C3AED" }}>
                  <span className="text-white/60 text-xs font-bold">05</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Exam Preparation and Test-Taking Strategies
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    Knowing the material and performing well on exams are two different skills. Exam
                    preparation training at Hidden Potential covers structured revision planning,
                    practice test strategies, time allocation during exams, managing exam anxiety
                    through NLP-based techniques, and the specific test-taking skills that help
                    students demonstrate their knowledge effectively under timed pressure. Parents
                    across Delhi and Noida consistently report that their children&apos;s exam scores
                    improve even before they finish the full program cycle.
                  </p>
                </div>
              </div>

              {/* Card 06 */}
              <div className="rounded-lg border border-[#E8E8E8] overflow-hidden">
                <div className="px-5 py-3 flex items-center gap-3" style={{ background: "#7C3AED" }}>
                  <span className="text-white/60 text-xs font-bold">06</span>
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Focus, Concentration and Digital Discipline
                  </h3>
                </div>
                <div className="px-5 py-5 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                    In an age of smartphones, social media, and constant digital distraction, the
                    ability to focus deeply for sustained periods is becoming increasingly rare — and
                    increasingly valuable. Study skills training at Hidden Potential includes
                    structured concentration-building exercises, digital discipline strategies for
                    managing screen time, and mindfulness-based focus techniques that help students
                    maintain attention during study sessions, lectures, and exams. This is not about
                    banning devices — it is about building the mental discipline to choose focus when
                    it matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 4 — WHO IT'S FOR
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#F3F0FF]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-4">
              <SectionLabel>Who This Is For</SectionLabel>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-5 leading-snug max-w-3xl mx-auto"
              style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}
            >
              Which Students Benefit from Study Skills Training in Delhi?
            </h2>
            <p
              className="text-base text-center max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#6B6B6B" }}
            >
              Study skills gaps appear differently across age groups, but the impact is consistent —
              underperformance relative to potential. If your child is working hard but not seeing
              results, study skills training is almost certainly the missing piece.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Audience 01 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>01</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}>
                    Students Aged 8-12 (Foundation Stage)
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Young learners who are developing their basic learning habits. At this age, the
                  focus is on building study routines, basic organisation skills, reading
                  comprehension strategies, and the habit of active learning rather than passive
                  consumption. Early study skills training at Hidden Potential prevents the bad
                  habits that become entrenched by middle school.
                </p>
                <Link href="/programs/enlightened-learner" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                  Explore An Enlightened Learner &rarr;
                </Link>
              </div>

              {/* Audience 02 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>02</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}>
                    Students Aged 13-16 (Growth Stage)
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Middle and high school students facing increasing academic demands — multiple
                  subjects, board exam preparation, competitive exam readiness, and growing
                  extracurricular commitments. This is the stage where study skills become essential
                  survival tools. Training focuses on time management systems, subject-specific study
                  strategies, memory techniques for high-volume content, and exam preparation
                  frameworks.
                </p>
              </div>

              {/* Audience 03 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>03</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}>
                    Students Aged 17-21 (Mastery Stage)
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Senior secondary and college students preparing for entrance exams, competitive
                  tests, or university coursework. At this stage, study skills training at Hidden
                  Potential focuses on advanced learning strategies, self-directed study planning,
                  research and analytical skills, and the academic discipline required for higher
                  education success.
                </p>
              </div>

              {/* Audience 04 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>04</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}>
                    Students with Exam Anxiety
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  If your child understands the material in class but freezes during exams, the
                  problem is not knowledge — it is exam anxiety combined with lack of structured
                  test-taking strategies. Study skills training combined with NLP-based confidence
                  techniques addresses both the skill gap and the emotional pattern.
                </p>
                <Link href="/services/nlp-coaching" className="text-xs font-semibold text-primary-teal hover:text-teal-dark transition-colors">
                  Learn about NLP Coaching &rarr;
                </Link>
              </div>

              {/* Audience 05 */}
              <div className="bg-white rounded-lg p-5 border border-[#E8E8E8]">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[11px] font-bold text-primary-teal rounded-full px-2 py-0.5 shrink-0 mt-0.5" style={{ background: "#EDE9FE" }}>05</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}>
                    Parents Seeking Academic Support Beyond Tuition
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Tuition teaches content. Study skills training teaches how to learn content
                  independently and efficiently. If your child is attending tuitions but still
                  underperforming, study skills training at Hidden Potential addresses the root cause
                  — the learning method, not the content gap. Many parents in Delhi, Noida, and
                  Gurgaon find that structured study skills training reduces or eliminates the need
                  for subject-specific tuitions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5 — WHY DIFFERENT
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#F8F6F2]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-4">
              <SectionLabel>Why Hidden Potential</SectionLabel>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-12 leading-snug max-w-3xl mx-auto"
              style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}
            >
              Why Study Skills Training at Hidden Potential Produces Better Academic Results
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Diff 1 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: "#EDE9FE" }}>
                  <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}>
                  Assessment-Based, Not Generic
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Every student begins with a structured learning assessment that identifies their
                  specific study skill gaps — time management, memory retention, exam technique,
                  focus, or planning. Training is then personalised. A student who struggles with
                  focus receives different interventions than a student who struggles with exam
                  anxiety.
                </p>
              </div>

              {/* Diff 2 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: "#EDE9FE" }}>
                  <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}>
                  Part of a Complete Life Skills System
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Study skills at Hidden Potential are not taught in isolation. They are integrated
                  into the An Enlightened Learner pathway alongside confidence building,
                  communication skills, emotional intelligence, and digital literacy. This means
                  students develop the complete skill set for academic and life success — not just
                  exam performance.
                </p>
              </div>

              {/* Diff 3 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: "#EDE9FE" }}>
                  <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}>
                  NLP-Enhanced Learning Techniques
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Hidden Potential integrates NLP-based techniques into study skills training —
                  including confidence anchoring for exam situations, belief restructuring for
                  students who have internalised &ldquo;I am not good at studies&rdquo; narratives,
                  and state management techniques for maintaining focus and calm during high-pressure
                  academic situations.
                </p>
              </div>

              {/* Diff 4 */}
              <div className="bg-white rounded-lg p-6 border border-[#E8E8E8]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: "#EDE9FE" }}>
                  <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}>
                  Measurable Improvement with Pre and Post Assessment
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Academic improvement is tracked and documented. Students complete a pre-assessment
                  at entry and a post-assessment at each level completion. Parents receive structured
                  progress reports showing measurable development in study habits, time management,
                  and learning efficiency — not just anecdotal feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 6 — FAQ
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-4">
              <SectionLabel>Frequently Asked Questions</SectionLabel>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-12 leading-snug"
              style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}
            >
              Common Questions About Study Skills Training in Delhi
            </h2>

            <div className="space-y-5">
              {[
                {
                  q: "What age is best to start study skills training?",
                  a: "The ideal starting age is 8 to 10 years old, when basic learning habits are being formed. Starting early prevents the development of ineffective study patterns that become harder to change in later years. However, study skills are trainable at any student age — we work with students from 8 to 21 across Foundation, Growth, and Mastery stages.",
                },
                {
                  q: "Will study skills training help with board exam preparation?",
                  a: "Yes. Study skills training at Hidden Potential specifically addresses board exam preparation through structured revision planning, memory techniques for high-volume content retention, practice test strategies, time management during exams, and NLP-based anxiety management. Students preparing for CBSE, ICSE, and state board exams consistently show improved performance after structured study skills training.",
                },
                {
                  q: "How is this different from regular tuition classes?",
                  a: "Tuition classes teach subject content — they help students understand what to learn. Study skills training teaches how to learn — the strategies, systems, and habits that make all learning more effective. Many students attend tuitions but still underperform because the problem is their learning method, not their content knowledge. Study skills training at Hidden Potential addresses the root cause and often reduces the need for subject-specific tuitions.",
                },
                {
                  q: "Can study skills training help with competitive exam preparation like JEE or NEET?",
                  a: "Yes. Competitive exams require high-volume information retention, time-pressured performance, and sustained focus over long preparation periods — all of which are trainable study skills. Students preparing for JEE, NEET, CLAT, and other competitive exams benefit from structured memory techniques, time management systems, practice test strategies, and exam anxiety management that are core components of study skills training at Hidden Potential.",
                },
                {
                  q: "Is study skills training available online?",
                  a: "Yes. Study skills training is available offline at our Dwarka, Delhi location, online for students across Delhi NCR and pan-India, and in hybrid format. Online sessions follow the same structured methodology including assessments, practice exercises, and progress tracking.",
                },
                {
                  q: "How long does study skills training take to show results?",
                  a: "Most parents and students report noticeable improvements in study habits, organisation, and time management within 4 to 6 weeks of structured training. Academic performance improvements — better test scores and grades — typically become visible within one to two academic terms as new study strategies become habitual. The Foundation pathway runs 3 months, with options to continue into Growth (6 months) and Mastery (12 months) levels.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-lg overflow-hidden border border-[#E8E8E8]">
                  <div className="px-6 py-4 bg-[#F8F6F2] border-l-4 border-primary-teal">
                    <p className="text-sm font-bold" style={{ color: "#2D1B69", fontFamily: "var(--font-display)" }}>{q}</p>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 7 — CTA
        ═══════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden py-24"
          style={{ background: "linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 85% 20%, rgba(109,40,217,0.08) 0%, transparent 60%)" }}
          />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)", textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
            >
              Your Child Doesn&apos;t Need More Study Hours. They Need Better Study Skills.
            </h2>
            <p className="text-base text-white/65 mb-10 leading-relaxed">
              The difference between a struggling student and a high-performing student is rarely
              intelligence — it is method. Structured study skills training at Hidden Potential in
              Dwarka, Delhi gives students the learning systems, time management frameworks, and exam
              strategies that schools do not teach. Start with a free learning assessment to identify
              your child&apos;s specific study skill gaps and receive a personalised development
              pathway.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Take the Learning Assessment
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white/90 rounded-md transition-colors hover:text-white"
                style={{ border: "1px solid rgba(255,255,255,0.25)", fontFamily: "var(--font-display)" }}
              >
                Book a Discovery Call
              </Link>
            </div>

            <p className="text-xs text-white/40 mb-4">
              Also explore:{" "}
              <Link href="/programs/enlightened-learner" className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors">
                An Enlightened Learner
              </Link>{" "}
              — the complete life skills program for students aged 8-21
            </p>

            <p className="text-[11px] text-white/30 leading-relaxed">
              Available at Dwarka (Sector 19B), Delhi{" "}|{" "}
              <Link href="/locations/noida" className="text-white/45 hover:text-white/70 transition-colors">Noida</Link>
              {" "}|{" "}
              <Link href="/locations/gurgaon" className="text-white/45 hover:text-white/70 transition-colors">Gurgaon</Link>
              {" "}|{" "}
              <Link href="/locations/faridabad" className="text-white/45 hover:text-white/70 transition-colors">Faridabad</Link>
              {" "}| Online across India
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

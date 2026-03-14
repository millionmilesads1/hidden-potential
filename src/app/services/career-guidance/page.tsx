import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Career Guidance & Planning in Delhi | Discover Your Direction | Hidden Potential' },
  description: 'Career guidance and planning in Delhi for students, young adults & professionals. Career assessment, direction clarity, transition planning & professional development. Dwarka, Delhi & Online.',
  openGraph: {
    title: 'Career Guidance & Planning in Delhi | Discover Your Direction | Hidden Potential',
    description: 'Career guidance and planning in Delhi for students, young adults & professionals. Career assessment, direction clarity, transition planning & professional development. Dwarka, Delhi & Online.',
    url: 'https://hiddenpotentialskills.com/services/career-guidance',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Guidance & Planning in Delhi | Discover Your Direction | Hidden Potential',
    description: 'Career guidance and planning in Delhi for students, young adults & professionals. Career assessment, direction clarity, transition planning & professional development. Dwarka, Delhi & Online.',
  },
  alternates: { canonical: 'https://hiddenpotentialskills.com/services/career-guidance' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Career Guidance & Planning',
  description: 'Structured career guidance and planning in Delhi for students, young adults and professionals. Multi-dimensional assessment, career direction clarity, transition planning and professional development.',
  provider: { '@type': 'Organization', name: 'Hidden Potential', url: 'https://hiddenpotentialskills.com' },
  areaServed: [
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'City', name: 'Faridabad' },
  ],
  serviceType: 'Career Guidance & Planning',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is career guidance and how is it different from career counselling?', acceptedAnswer: { '@type': 'Answer', text: 'Career counselling is typically a single session or test-based interaction that provides general career recommendations. Career guidance at Hidden Potential is a structured, multi-session process that includes comprehensive assessment across multiple dimensions, personalised direction setting, actionable planning, and integration with developmental pathways. The result is not a list of career suggestions — it is a clear, structured plan for your next career steps.' } },
    { '@type': 'Question', name: 'At what age should career guidance start?', acceptedAnswer: { '@type': 'Answer', text: 'The most impactful career guidance begins at ages 14 to 16, before critical stream selection decisions after 10th. However, career guidance is valuable at every stage — college students clarifying direction, professionals considering transitions, and women planning career re-entry all benefit from structured assessment and planning. At Hidden Potential, career guidance is available for students from age 14 through professionals of all ages.' } },
    { '@type': 'Question', name: 'What assessments are used in career guidance?', acceptedAnswer: { '@type': 'Answer', text: 'Career guidance at Hidden Potential uses a multi-dimensional assessment approach including cognitive strength mapping, structured personality profiling, interest inventories, values mapping, graphology-based handwriting analysis for personality insights, and NLP-based self-exploration techniques. This comprehensive approach produces more accurate and actionable career direction than any single test.' } },
    { '@type': 'Question', name: 'Can career guidance help with career change decisions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Career transition is one of the most common reasons professionals in Delhi seek career guidance. Structured assessment helps identify your transferable skills, genuine interests, and personality-career alignment — providing evidence-based clarity on whether a career change is advisable and what specific direction would suit you best. Transition planning includes gap analysis, timeline structuring, and the confidence building required to make a significant professional change.' } },
    { '@type': 'Question', name: 'Is career guidance available online?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Career guidance at Hidden Potential is available offline at our Dwarka, Delhi location and online for learners across Noida, Gurgaon, Faridabad, and pan-India. Online sessions include the same comprehensive assessments, personalised guidance, and structured planning as in-person sessions.' } },
    { '@type': 'Question', name: 'How many sessions does career guidance take?', acceptedAnswer: { '@type': 'Answer', text: 'A comprehensive career guidance process typically involves 3 to 5 structured sessions: initial assessment and profiling, results analysis and career direction discussion, action planning and pathway design, and follow-up accountability sessions. The exact number depends on the complexity of your situation — a student choosing after 12th may need fewer sessions than a professional planning a complete career transition.' } },
  ],
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="inline-block text-xs font-bold tracking-widest uppercase text-primary-teal mb-4">
    {children}
  </p>
);

const trustSignals = ['Graphology & Assessment Based', '14+ Years Experience', 'Students to Professionals', 'Dwarka, Delhi & Online'];

const skillCards = [
  {
    num: '01',
    title: 'Comprehensive Career Assessment',
    body: "Every career guidance journey begins with a multi-dimensional assessment that goes beyond basic aptitude testing. At Hidden Potential, career assessment includes cognitive strength mapping, personality profiling using structured tools, interest inventory analysis, values identification, graphology-based personality insights from handwriting analysis, and NLP-based self-exploration. This comprehensive assessment creates a detailed profile of who you are — not just what you can do — as the foundation for career direction.",
  },
  {
    num: '02',
    title: 'Career Direction and Stream Selection',
    body: "For students approaching critical decision points — after 10th, after 12th, or during college — career direction guidance helps identify which academic streams, subjects, and specialisations align with their assessed strengths, interests, and personality. This is particularly valuable in Delhi where parental and societal pressure often overrides students' genuine inclinations. Career direction at Hidden Potential is evidence-based, using assessment data rather than assumption to guide decisions.",
  },
  {
    num: '03',
    title: 'Career Exploration and Industry Awareness',
    body: "Many students and young adults in Delhi make career decisions based on extremely limited exposure — knowing only the careers their parents, relatives, and teachers have. Career exploration at Hidden Potential broadens awareness of available career paths, emerging industries, unconventional careers that match specific profiles, and the real-world realities of different professions. This prevents the common regret of discovering your ideal career years after committing to a different path.",
  },
  {
    num: '04',
    title: 'Career Transition Planning for Professionals',
    body: "Professionals in Delhi NCR considering career changes — whether driven by dissatisfaction, industry shifts, personal growth, or life changes — need structured transition planning. Career transition coaching at Hidden Potential includes honest assessment of transferable skills, gap analysis for target careers, structured transition timelines, financial planning considerations, and the confidence building required to make a significant professional change.",
  },
  {
    num: '05',
    title: 'Career Re-Entry Support for Women',
    body: "Women returning to careers after breaks — for family, children, or personal reasons — face unique challenges: skill gaps in rapidly changing fields, confidence erosion from years away from professional environments, and a job market that often undervalues career breaks. Career re-entry at Hidden Potential combines career assessment with confidence rebuilding, skill gap identification, and practical job search strategies specifically designed for women navigating return-to-work transitions.",
    link: '/programs/self-mastery-women',
    linkText: 'Explore Self Mastery for Women →',
  },
  {
    num: '06',
    title: 'Professional Development and Growth Planning',
    body: "For professionals who are not seeking a career change but want structured development within their current field — building leadership skills, preparing for senior roles, developing executive presence, or creating a path to specific professional goals. This includes skill gap analysis, development planning, communication and leadership coaching, and structured accountability for professional growth milestones.",
    link: '/programs/communication-mastery',
    linkText: 'Explore Communication Mastery →',
  },
];

const audienceCards = [
  {
    num: '01',
    title: 'Students After 10th and 12th (Ages 15-18)',
    body: "The most critical career decision window — when stream selection determines the trajectory of academic and professional life. Career guidance at Hidden Potential helps students at this stage through comprehensive assessment that identifies their genuine strengths and interests, rather than defaulting to parental expectations or marks-based selection. This prevents the common pattern of students entering engineering or medical streams that do not align with their natural abilities.",
    link: '/programs/enlightened-learner',
    linkText: 'Explore An Enlightened Learner →',
  },
  {
    num: '02',
    title: 'College Students and Young Adults (Ages 18-25)',
    body: "Students and young adults who have already entered academic programs but feel uncertain about their career direction, or who are approaching graduation without a clear professional path. Career guidance at this stage includes career exploration, industry awareness, internship and entry-level planning, and the professional skills development needed to enter the workforce confidently.",
  },
  {
    num: '03',
    title: 'Professionals Seeking Career Change (Ages 25-45)',
    body: "Working professionals in Delhi NCR who feel stuck, unfulfilled, or misaligned in their current careers. Whether you are considering a complete career change, an industry shift, entrepreneurship, or a move into training and coaching — structured career transition planning ensures your next move is informed by assessment rather than impulse.",
  },
  {
    num: '04',
    title: 'Women Re-Entering the Workforce',
    body: "Women who took career breaks and want to return with clarity and confidence. Career re-entry at Hidden Potential addresses both the practical aspects — skill assessment, gap analysis, job search strategy — and the emotional aspects — confidence rebuilding, identity reclamation, and overcoming the self-doubt that career breaks often create.",
    link: '/programs/self-mastery-women',
    linkText: 'Explore Self Mastery for Women →',
  },
  {
    num: '05',
    title: 'Parents Seeking Guidance for Their Children',
    body: "Parents in Delhi who want to support their children's career decisions with structured assessment rather than assumptions. Career guidance at Hidden Potential provides parents with objective, assessment-based insights into their child's strengths, interests, and personality — helping the family make informed decisions together rather than defaulting to conventional expectations.",
  },
];

const differentiatorCards = [
  {
    title: 'Multi-Dimensional Assessment, Not Single-Test Results',
    body: "Most career counselling in Delhi relies on a single aptitude test that produces a list of recommended careers. At Hidden Potential, career assessment integrates cognitive strengths, personality profiling, interest mapping, values identification, graphology-based handwriting analysis, and NLP-based self-exploration. This multi-dimensional approach identifies career directions that a single test could never reveal.",
  },
  {
    title: 'Assessment by an Experienced Practitioner, Not Software',
    body: "Career assessments at Hidden Potential are conducted and interpreted by Supreet Kaur — a certified graphologist, NLP practitioner, and trainer with 14 years of experience across 5000+ individuals. The interpretation of assessment results requires expertise, contextual understanding, and the ability to synthesise multiple data points into actionable guidance. Software-generated career reports cannot replicate this.",
  },
  {
    title: 'Integrated Into Complete Development Pathways',
    body: "Career guidance does not end at 'here is your direction.' At Hidden Potential, career guidance is connected to the full ecosystem of programs — students can enter the An Enlightened Learner pathway, professionals can develop through Communication Mastery, women can rebuild through Self Mastery, and aspiring trainers can certify through Train the Trainer. The guidance leads directly to developmental action.",
  },
  {
    title: 'Honest, Not Aspirational',
    body: "Career guidance at Hidden Potential is honest. If the assessment shows that your current career path is well-suited to your strengths, we will tell you that — even if you came hoping for a dramatic change. If the career you are dreaming of requires skills you currently lack, we will be specific about the gap and what it takes to close it. Good career guidance serves your best interest, not your immediate expectations.",
  },
];

const faqs = [
  { q: 'What is career guidance and how is it different from career counselling?', a: "Career counselling is typically a single session or test-based interaction that provides general career recommendations. Career guidance at Hidden Potential is a structured, multi-session process that includes comprehensive assessment across multiple dimensions, personalised direction setting, actionable planning, and integration with developmental pathways. The result is not a list of career suggestions — it is a clear, structured plan for your next career steps." },
  { q: 'At what age should career guidance start?', a: 'The most impactful career guidance begins at ages 14 to 16, before critical stream selection decisions after 10th. However, career guidance is valuable at every stage — college students clarifying direction, professionals considering transitions, and women planning career re-entry all benefit from structured assessment and planning. At Hidden Potential, career guidance is available for students from age 14 through professionals of all ages.' },
  { q: 'What assessments are used in career guidance?', a: 'Career guidance at Hidden Potential uses a multi-dimensional assessment approach including cognitive strength mapping, structured personality profiling, interest inventories, values mapping, graphology-based handwriting analysis for personality insights, and NLP-based self-exploration techniques. This comprehensive approach produces more accurate and actionable career direction than any single test.' },
  { q: 'Can career guidance help with career change decisions?', a: 'Yes. Career transition is one of the most common reasons professionals in Delhi seek career guidance. Structured assessment helps identify your transferable skills, genuine interests, and personality-career alignment — providing evidence-based clarity on whether a career change is advisable and what specific direction would suit you best. Transition planning includes gap analysis, timeline structuring, and the confidence building required to make a significant professional change.' },
  { q: 'Is career guidance available online?', a: 'Yes. Career guidance at Hidden Potential is available offline at our Dwarka, Delhi location and online for learners across Noida, Gurgaon, Faridabad, and pan-India. Online sessions include the same comprehensive assessments, personalised guidance, and structured planning as in-person sessions.' },
  { q: 'How many sessions does career guidance take?', a: 'A comprehensive career guidance process typically involves 3 to 5 structured sessions: initial assessment and profiling, results analysis and career direction discussion, action planning and pathway design, and follow-up accountability sessions. The exact number depends on the complexity of your situation — a student choosing after 12th may need fewer sessions than a professional planning a complete career transition.' },
];

export default function CareerGuidancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>

        {/* ── SECTION 1: HERO ── */}
        <section style={{ background: 'linear-gradient(180deg, #1A0F3C 0%, #6F00FF 100%)' }} className="relative overflow-hidden py-20 md:py-28 px-4">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 85% 20%, rgba(109,40,217,0.08) 0%, transparent 60%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-5">
              <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-teal rounded-full" style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)" }}>
                Career Direction &amp; Growth
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Career Guidance &amp; Planning in Delhi — Discover Your Direction, Build Your Path
            </h1>
            <p className="text-xl text-white/80 mb-6 italic" style={{ fontFamily: 'var(--font-accent)' }}>
              A fulfilling career is not found by accident — it is built through clarity, planning, and deliberate action.
            </p>
            <p className="text-base text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Choosing a career is one of the most consequential decisions anyone makes — yet it is also one of the least supported. Students in Delhi are expected to choose career paths at 15 or 16 based on limited exposure, parental expectations, and peer influence. Professionals navigate career transitions, plateaus, and dissatisfaction without structured guidance. Women returning to careers after breaks face a market that has moved on without them. At Hidden Potential, career guidance in Delhi is not a one-time aptitude test or a counselling session with generic advice. It is a structured process that begins with self-assessment — understanding your genuine strengths, values, interests, and personality patterns — and moves through career exploration, direction setting, skill gap analysis, and actionable planning. Whether you are a student deciding what to study after 10th or 12th, a young adult confused about career direction, a professional considering a career change, or a woman re-entering the workforce — career guidance at Hidden Potential helps you make informed, confident decisions backed by structured assessment rather than guesswork.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-white/60 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              {trustSignals.map((sig, i) => (
                <span key={sig} className="flex items-center gap-2">
                  {i > 0 && <span className="hidden sm:inline text-white/30">•</span>}
                  {sig}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment" className="inline-block bg-primary-teal text-white font-bold px-8 py-4 rounded-lg text-sm hover:bg-teal-dark transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                Take the Career Assessment
              </Link>
              <Link href="/contact" className="inline-block border border-white/40 text-white font-bold px-8 py-4 rounded-lg text-sm hover:border-white/70 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                Book a Career Guidance Session
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: WHY IT MATTERS ── */}
        <section className="py-20 px-4 bg-[#F8F6F2]">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>WHY CAREER GUIDANCE MATTERS</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
              Why Most Career Decisions in India Are Made Backwards — and How to Fix It
            </h2>
            <div className="space-y-6 text-charcoal leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              <p>The typical career decision process in India works backwards. Parents and society present a narrow set of &apos;acceptable&apos; career options — engineering, medicine, law, MBA, government services. Students choose from this limited menu based on marks, entrance exam results, and family pressure. Years later, they find themselves in careers they never chose, doing work that does not align with their strengths or interests, wondering why professional success does not translate to personal fulfilment.</p>
              <p>The alternative is structured career guidance — a process that starts with who you are rather than what society expects. What are your genuine cognitive strengths? What are your personality-driven working preferences? What values must your career honour for you to feel fulfilled? What interests have you been suppressing because they did not fit the expected mould? What skills do you already have that transfer into careers you have never considered? These questions are not philosophical — they are assessable, structured, and lead to specific, actionable career directions.</p>
              <p>At Hidden Potential in Delhi, career guidance integrates multiple assessment methodologies. Supreet Kaur is a certified graphologist and uses handwriting analysis alongside structured personality assessments, interest inventories, values mapping, and NLP-based self-exploration to build a comprehensive career profile. This multi-dimensional approach reveals career directions that a single aptitude test could never identify — because career fit is not about aptitude alone. It is about the alignment of strengths, interests, values, and personality with career demands and environments.</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: WHAT YOU'LL DEVELOP ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>WHAT YOU&apos;LL DEVELOP</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Career Guidance Services at Hidden Potential in Delhi
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Career guidance at Hidden Potential is not a single session — it is a structured process spanning assessment, exploration, planning, and execution support. Each stage builds on the previous one to create a clear, actionable career roadmap.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {skillCards.map((card) => (
                <div key={card.num} className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                  <div className="bg-primary-teal px-6 py-4 flex items-center gap-3">
                    <span className="text-white/50 font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>{card.num}</span>
                    <h3 className="text-white font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>{card.title}</h3>
                  </div>
                  <div className="bg-white px-6 py-5">
                    <p className="text-charcoal text-sm leading-relaxed mb-3" style={{ fontFamily: 'var(--font-body)' }}>{card.body}</p>
                    {card.link && (
                      <Link href={card.link} className="text-primary-teal text-sm font-semibold hover:text-teal-dark transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                        {card.linkText}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: WHO IT'S FOR ── */}
        <section className="py-20 px-4 bg-[#F3F0FF]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>WHO THIS IS FOR</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Who Benefits from Career Guidance in Delhi?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Career confusion and misalignment affect every age group — from students facing stream selection to professionals questioning their career path. Our career guidance in Delhi is structured to serve each stage with appropriate assessment and planning.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audienceCards.map((card) => (
                <div key={card.num} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#EDE9FE] flex items-center justify-center mb-4">
                    <span className="text-primary-teal font-bold text-xs" style={{ fontFamily: 'var(--font-display)' }}>{card.num}</span>
                  </div>
                  <h3 className="font-bold text-primary-navy mb-3 text-base" style={{ fontFamily: 'var(--font-display)' }}>{card.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed mb-3" style={{ fontFamily: 'var(--font-body)' }}>{card.body}</p>
                  {card.link && (
                    <Link href={card.link} className="text-primary-teal text-sm font-semibold hover:text-teal-dark transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                      {card.linkText}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: WHY DIFFERENT ── */}
        <section className="py-20 px-4 bg-[#F8F6F2]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>WHY HIDDEN POTENTIAL</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Why Career Guidance at Hidden Potential Produces Better Decisions Than Conventional Career Counselling
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {differentiatorCards.map((card) => (
                <div key={card.title} className="bg-white rounded-lg p-6 shadow-sm flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EDE9FE] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-navy mb-2 text-base" style={{ fontFamily: 'var(--font-display)' }}>{card.title}</h3>
                    <p className="text-charcoal text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: FAQ ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-10 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Common Questions About Career Guidance in Delhi
            </h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <div key={item.q}>
                  <div className="bg-[#F8F6F2] border-l-4 border-primary-teal px-6 py-4">
                    <p className="font-bold text-primary-navy text-sm" style={{ fontFamily: 'var(--font-display)' }}>{item.q}</p>
                  </div>
                  <div className="border border-t-0 border-gray-100 px-6 py-4">
                    <p className="text-charcoal text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: CTA ── */}
        <section style={{ background: 'linear-gradient(180deg, #1A0F3C 0%, #6F00FF 100%)' }} className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Your Career Should Fit Who You Are — Not What Others Expect
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              The most costly career mistake is not choosing the wrong job — it is never discovering the right direction because you relied on assumptions instead of assessment. Career guidance at Hidden Potential in Dwarka, Delhi begins with a comprehensive multi-dimensional assessment that reveals your genuine strengths, interests, values, and personality patterns — then builds a structured plan for your next career steps. Whether you are a student at a crossroads, a professional ready for change, or a woman returning to work — start with clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/assessment" className="inline-block bg-primary-teal text-white font-bold px-8 py-4 rounded-lg text-sm hover:bg-teal-dark transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                Take the Career Assessment
              </Link>
              <Link href="/contact" className="inline-block border border-white/40 text-white font-bold px-8 py-4 rounded-lg text-sm hover:border-white/70 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                Book a Career Guidance Session
              </Link>
            </div>
            <p className="text-white/50 text-sm mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Also explore:{' '}
              <Link href="/services/goal-setting" className="text-primary-gold hover:text-white transition-colors underline">
                Goal Setting &amp; Achievement Coaching
              </Link>
              {' '}— because career direction without execution planning stays theoretical
            </p>
            <p className="text-white/40 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
              Available at Dwarka (Sector 19B), Delhi | Noida | Gurgaon | Faridabad | Online across India
            </p>
          </div>
        </section>

      </main>
    </>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Goal Setting & Achievement Coaching in Delhi | Plan, Execute, Succeed | Hidden Potential',
  description: 'Goal setting and achievement coaching in Delhi for students, professionals & women. Structured planning, execution frameworks & accountability systems. Dwarka, Delhi & Online.',
  openGraph: {
    title: 'Goal Setting & Achievement Coaching in Delhi | Plan, Execute, Succeed | Hidden Potential',
    description: 'Goal setting and achievement coaching in Delhi for students, professionals & women. Structured planning, execution frameworks & accountability systems. Dwarka, Delhi & Online.',
    url: 'https://hiddenpotentialskills.com/services/goal-setting',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goal Setting & Achievement Coaching in Delhi | Plan, Execute, Succeed | Hidden Potential',
    description: 'Goal setting and achievement coaching in Delhi for students, professionals & women. Structured planning, execution frameworks & accountability systems. Dwarka, Delhi & Online.',
  },
  alternates: { canonical: 'https://hiddenpotentialskills.com/services/goal-setting' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Goal Setting & Achievement Coaching',
  description: 'Structured goal setting and achievement coaching in Delhi for students, professionals and women. Execution frameworks, milestone planning, and accountability systems.',
  provider: { '@type': 'Organization', name: 'Hidden Potential', url: 'https://hiddenpotentialskills.com' },
  areaServed: [
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'City', name: 'Faridabad' },
  ],
  serviceType: 'Goal Setting & Achievement Coaching',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is goal setting coaching and how is it different from life coaching?', acceptedAnswer: { '@type': 'Answer', text: 'Goal setting coaching at Hidden Potential is specifically focused on the skills and systems required to achieve goals consistently — clarity, planning, execution, accountability, and adaptation. Life coaching is typically broader, covering general life satisfaction, relationships, and personal development. Our goal setting coaching is structured, assessment-based, and produces measurable outcomes rather than general motivation.' } },
    { '@type': 'Question', name: 'Can goal setting coaching help students with academic goals?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Goal setting and structured execution are core components of the An Enlightened Learner student program. Students learn to set specific academic targets, create study plans with milestones, track their own progress, and develop the daily habits that make consistent academic improvement sustainable. This is integrated with study skills, time management, and confidence building for a complete academic achievement system.' } },
    { '@type': 'Question', name: 'How long does goal setting coaching take?', acceptedAnswer: { '@type': 'Answer', text: 'Goal clarity and initial planning can be established within 2 to 4 coaching sessions. Building the execution habits and accountability systems that sustain long-term achievement typically develops over 3 to 6 months of structured coaching. Most meaningful goals require at least one full program cycle to achieve — which is why Hidden Potential integrates goal setting into developmental pathways rather than offering it as a one-time workshop.' } },
    { '@type': 'Question', name: 'Is goal setting coaching available online?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Goal setting coaching at Hidden Potential is available offline at our Dwarka, Delhi location, online across India, and in hybrid format. Online sessions include the same structured assessments, planning frameworks, accountability reviews, and progress tracking as in-person coaching.' } },
    { '@type': 'Question', name: 'What if I do not know what my goals should be?', acceptedAnswer: { '@type': 'Answer', text: 'That is actually the most common starting point. Many people know they want more from life but cannot articulate what that looks like. Goal setting coaching at Hidden Potential begins with structured clarity exercises and NLP-based values elicitation specifically designed to help you identify goals that align with your genuine values and strengths — rather than goals imposed by external expectations.' } },
    { '@type': 'Question', name: 'How is this different from self-help books about goal setting?', acceptedAnswer: { '@type': 'Answer', text: 'Self-help books provide information. Goal setting coaching provides implementation. The gap between knowing what to do and actually doing it consistently is where most people fail. Coaching at Hidden Potential provides personalised assessment, structured frameworks, accountability, regular progress reviews, obstacle management, and course correction — the execution support that books cannot deliver.' } },
  ],
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="inline-block text-xs font-bold tracking-widest uppercase text-primary-teal mb-4">
    {children}
  </p>
);

const trustSignals = ['Structured Execution Framework', 'NLP-Enhanced', 'All Age Groups', 'Dwarka, Delhi & Online'];

const skillCards = [
  {
    num: '01',
    title: 'Goal Clarity and Prioritisation',
    body: "Most people fail at goals not because they cannot execute, but because they are pursuing the wrong goals — goals inherited from parents, imposed by society, or chosen based on what looks impressive rather than what genuinely matters. At Hidden Potential, goal setting begins with structured clarity exercises that help you distinguish between goals you think you should want and goals that align with your actual values, strengths, and circumstances. NLP-based techniques including values elicitation and belief mapping help uncover what you genuinely want to achieve — not what you have been conditioned to pursue.",
  },
  {
    num: '02',
    title: 'Milestone Planning and Structured Execution',
    body: 'A goal without a plan is just an intention. Milestone planning breaks large goals into structured phases with specific deliverables, timelines, and measurable checkpoints. At Hidden Potential, you learn to work backwards from your desired outcome — identifying the quarterly, monthly, weekly, and daily actions required to reach it. This reverse-engineering approach transforms overwhelming goals into manageable daily practices that build momentum through consistent small wins.',
  },
  {
    num: '03',
    title: 'Habit System Design',
    body: "Goals are achieved through habits, not through bursts of motivation. At Hidden Potential, you learn to design habit systems — the daily and weekly routines that make goal-relevant actions automatic rather than dependent on willpower. This includes understanding habit loops, designing environmental triggers, building habit stacks, and creating accountability mechanisms that sustain habits through the inevitable periods when motivation drops.",
  },
  {
    num: '04',
    title: 'Obstacle Anticipation and Resilience',
    body: "Every meaningful goal encounters obstacles — unexpected challenges, loss of motivation, competing priorities, self-doubt, and external circumstances. Most people treat obstacles as reasons to quit. Effective goal achievers anticipate obstacles in advance and prepare response strategies. At Hidden Potential, obstacle anticipation is built into every goal plan — including 'if-then' contingency planning, NLP-based belief restructuring for moments of self-doubt, and resilience techniques that help you persist through difficulty without burnout.",
  },
  {
    num: '05',
    title: 'Accountability and Progress Tracking',
    body: 'Accountability is the most underrated component of goal achievement. Research consistently shows that people who have structured accountability — someone who reviews their progress regularly — are 65 percent more likely to achieve their goals than those who work alone. At Hidden Potential, accountability is built into the coaching process through regular progress reviews, structured self-tracking systems, and milestone celebrations that reinforce the execution habit.',
  },
  {
    num: '06',
    title: 'Course Correction and Adaptive Planning',
    body: 'No plan survives contact with reality unchanged. The ability to assess progress honestly, identify what is working and what is not, and adjust your approach without abandoning your goal is a critical achievement skill. At Hidden Potential, you develop the skill of adaptive planning — maintaining commitment to the destination while remaining flexible about the route. This prevents the common pattern of rigid plan failure followed by complete abandonment.',
  },
];

const audienceCards = [
  {
    num: '01',
    title: 'Students Setting Academic Goals (Ages 13-21)',
    body: 'Students who set targets every term but consistently fall short — not because they lack ability, but because they lack structured planning and execution systems. Goal setting is integrated into the An Enlightened Learner program alongside study skills, confidence building, and time management — creating a complete system for academic achievement rather than isolated goal-setting exercises.',
    link: '/programs/enlightened-learner',
    linkText: 'Explore An Enlightened Learner →',
  },
  {
    num: '02',
    title: 'Professionals Pursuing Career Goals',
    body: 'Professionals in Delhi NCR who want promotions, career transitions, leadership roles, or salary growth but lack a structured plan for getting there. Career goal coaching at Hidden Potential helps you clarify your professional direction, identify the specific skills and experiences required, create milestone plans with timelines, and build the execution habits that distinguish people who advance from people who plateau.',
    link: '/services/career-guidance',
    linkText: 'Explore Career Guidance →',
  },
  {
    num: '03',
    title: 'Women Reclaiming Personal Ambitions',
    body: "Women who spent years prioritising family and others' needs and now want to pursue their own goals — whether returning to a career, starting a business, developing a skill, or rebuilding their identity. The Self Mastery for Women pathway includes structured goal setting as a core component because reclaiming your ambitions requires both the emotional permission and the practical execution systems to follow through.",
    link: '/programs/self-mastery-women',
    linkText: 'Explore Self Mastery for Women →',
  },
  {
    num: '04',
    title: 'Aspiring Trainers Building a Career',
    body: 'Individuals who want to become life skills trainers, NLP practitioners, or coaches but do not know how to structure the journey from aspiration to certification to active practice. The Train the Trainer pathway includes career goal planning as a structured component — helping you build a viable training career, not just accumulate certifications.',
    link: '/programs/train-the-trainer',
    linkText: 'Explore Train the Trainer →',
  },
  {
    num: '05',
    title: 'Anyone Stuck Between Ambition and Action',
    body: 'If you consistently set goals but fail to follow through, if you start strong but lose momentum, if you know what you want but cannot seem to make consistent progress — the problem is almost certainly a systems gap, not a motivation gap. Goal setting coaching at Hidden Potential provides the structured frameworks that bridge the gap between wanting and doing.',
  },
];

const differentiatorCards = [
  {
    title: 'Execution-Focused, Not Motivation-Focused',
    body: 'Most goal-setting programs focus on inspiration — helping you dream bigger and want more. Hidden Potential focuses on execution — giving you the structured systems, habit frameworks, and accountability mechanisms that turn goals into documented outcomes. Motivation fades. Systems persist.',
  },
  {
    title: 'NLP-Enhanced Goal Clarity',
    body: 'NLP techniques including values elicitation, belief mapping, and subconscious pattern identification help you clarify goals that genuinely align with who you are — not goals you have been conditioned to pursue. This prevents the common pattern of achieving goals that do not actually make you fulfilled.',
  },
  {
    title: 'Integrated Into Life Skills Pathways',
    body: "Goal setting at Hidden Potential is not a standalone workshop. It is integrated into every developmental pathway — students, women, professionals, and trainers all develop execution skills within their program context. This means goal-setting skills are practised and reinforced across months of structured development.",
  },
  {
    title: 'Assessment-Based Personalisation',
    body: 'Every learner begins with a structured assessment that identifies their specific achievement gaps — some people need clarity, others need planning skills, others need accountability systems, others need belief restructuring. Your coaching is personalised to your specific execution pattern.',
  },
];

const faqs = [
  { q: 'What is goal setting coaching and how is it different from life coaching?', a: 'Goal setting coaching at Hidden Potential is specifically focused on the skills and systems required to achieve goals consistently — clarity, planning, execution, accountability, and adaptation. Life coaching is typically broader, covering general life satisfaction, relationships, and personal development. Our goal setting coaching is structured, assessment-based, and produces measurable outcomes rather than general motivation.' },
  { q: 'Can goal setting coaching help students with academic goals?', a: 'Yes. Goal setting and structured execution are core components of the An Enlightened Learner student program. Students learn to set specific academic targets, create study plans with milestones, track their own progress, and develop the daily habits that make consistent academic improvement sustainable. This is integrated with study skills, time management, and confidence building for a complete academic achievement system.' },
  { q: 'How long does goal setting coaching take?', a: 'Goal clarity and initial planning can be established within 2 to 4 coaching sessions. Building the execution habits and accountability systems that sustain long-term achievement typically develops over 3 to 6 months of structured coaching. Most meaningful goals require at least one full program cycle to achieve — which is why Hidden Potential integrates goal setting into developmental pathways rather than offering it as a one-time workshop.' },
  { q: 'Is goal setting coaching available online?', a: 'Yes. Goal setting coaching at Hidden Potential is available offline at our Dwarka, Delhi location, online across India, and in hybrid format. Online sessions include the same structured assessments, planning frameworks, accountability reviews, and progress tracking as in-person coaching.' },
  { q: 'What if I do not know what my goals should be?', a: 'That is actually the most common starting point. Many people know they want more from life but cannot articulate what that looks like. Goal setting coaching at Hidden Potential begins with structured clarity exercises and NLP-based values elicitation specifically designed to help you identify goals that align with your genuine values and strengths — rather than goals imposed by external expectations.' },
  { q: 'How is this different from self-help books about goal setting?', a: 'Self-help books provide information. Goal setting coaching provides implementation. The gap between knowing what to do and actually doing it consistently is where most people fail. Coaching at Hidden Potential provides personalised assessment, structured frameworks, accountability, regular progress reviews, obstacle management, and course correction — the execution support that books cannot deliver.' },
];

export default function GoalSettingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>

        {/* ── SECTION 1: HERO ── */}
        <section style={{ background: 'linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)' }} className="relative overflow-hidden py-20 md:py-28 px-4">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 85% 20%, rgba(109,40,217,0.08) 0%, transparent 60%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-5">
              <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-teal rounded-full" style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)" }}>
                Purpose &amp; Achievement
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Goal Setting &amp; Achievement Coaching in Delhi — Plan, Execute, Succeed
            </h1>
            <p className="text-xl text-white/80 mb-6 italic" style={{ fontFamily: 'var(--font-accent)' }}>
              Goals without execution systems are just wishes — and wishes don&apos;t produce results.
            </p>
            <p className="text-base text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Everyone sets goals. Very few people achieve them consistently. The difference is not motivation, willpower, or talent — it is system. Most goal-setting advice focuses on writing SMART goals, creating vision boards, or finding your &apos;why.&apos; These are starting points, not solutions. At Hidden Potential, goal setting and achievement coaching in Delhi teaches the complete execution system — from clarifying what you genuinely want, to breaking it into structured milestones, to building the daily habits and accountability systems that turn intentions into measurable outcomes. Whether you are a student setting academic targets, a professional pursuing career advancement, a woman reclaiming personal ambitions after years of putting everyone else first, or an aspiring trainer building a new career — the methodology is the same: clarity, structure, action, accountability, and measurement. Every journey begins with a structured assessment because effective goal setting starts with understanding where you actually are, not just where you want to be.
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
                Take the Goal Clarity Assessment
              </Link>
              <Link href="/contact" className="inline-block border border-white/40 text-white font-bold px-8 py-4 rounded-lg text-sm hover:border-white/70 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: WHY IT MATTERS ── */}
        <section className="py-20 px-4 bg-[#F8F6F2]">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>WHY GOAL SETTING MATTERS</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
              Why 92% of People Fail to Achieve Their Goals — and How to Be in the 8%
            </h2>
            <div className="space-y-6 text-charcoal leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              <p>Research from the University of Scranton found that 92 percent of people who set New Year&apos;s resolutions never achieve them. Harvard Business School studies consistently show that the small percentage of people who write down specific goals and create execution plans earn ten times more than those who do not. The pattern is clear across every context — academic, professional, personal, and financial: goal achievement is not about desire. It is about structure.</p>
              <p>In Delhi NCR, the gap between ambition and achievement is visible everywhere. Students set academic goals every term and fall short because they lack study planning systems. Professionals want promotions but have no structured career development plan. Women want to rebuild their identity and pursue personal goals but cannot find time because every hour is claimed by others&apos; needs. Aspiring trainers want to launch their careers but do not know how to structure the journey from intention to certification to practice.</p>
              <p>At Hidden Potential, goal setting is not a motivational exercise. It is a structured coaching process that addresses every stage of the achievement cycle: goal clarity and prioritisation, milestone planning, habit system design, obstacle anticipation, accountability structures, progress tracking, and course correction. Every learner works with frameworks developed through 14 years of coaching experience — frameworks that have helped 5000+ individuals across Delhi turn vague ambitions into documented, measurable achievements.</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: WHAT YOU'LL DEVELOP ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>WHAT YOU&apos;LL DEVELOP</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Goal Setting and Achievement Skills Developed at Hidden Potential in Delhi
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Goal achievement is not a single skill — it is a system of interconnected competencies spanning clarity, planning, execution, and adaptation. Weakness in any one area causes the entire system to fail. Our goal setting coaching in Delhi addresses the complete achievement cycle.
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
                    <p className="text-charcoal text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{card.body}</p>
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
                Who Benefits from Goal Setting Coaching in Delhi?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Goal achievement challenges affect every age group and life stage. Whether your goals are academic, professional, personal, or entrepreneurial — the underlying execution skills are the same and entirely trainable.
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
                Why Goal Setting Coaching at Hidden Potential Produces Actual Results
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
              Common Questions About Goal Setting Coaching in Delhi
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
        <section style={{ background: 'linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)' }} className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Stop Setting Goals. Start Achieving Them.
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              The difference between people who achieve their goals and people who do not is not talent, motivation, or luck — it is system. Goal setting and achievement coaching at Hidden Potential in Dwarka, Delhi gives you the structured clarity, execution frameworks, and accountability systems that turn intentions into documented results. Start with a free assessment to understand your current achievement patterns and receive a personalised development plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/assessment" className="inline-block bg-primary-teal text-white font-bold px-8 py-4 rounded-lg text-sm hover:bg-teal-dark transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                Take the Goal Clarity Assessment
              </Link>
              <Link href="/contact" className="inline-block border border-white/40 text-white font-bold px-8 py-4 rounded-lg text-sm hover:border-white/70 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                Book a Discovery Call
              </Link>
            </div>
            <p className="text-white/50 text-sm mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Also explore:{' '}
              <Link href="/services/study-skills" className="text-primary-gold hover:text-white transition-colors underline">
                Study Skills Training
              </Link>
              {' '}— because academic goal achievement requires smart study systems
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

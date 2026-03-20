import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Corporate Workshops in Delhi | Life Skills & Communication Training for Teams | Hidden Potential' },
  description: 'Corporate workshops in Delhi for teams & organisations. Communication, leadership, stress management, emotional intelligence & team building. Customised programs. Dwarka, Delhi & Online.',
  openGraph: {
    title: 'Corporate Workshops in Delhi | Life Skills & Communication Training for Teams | Hidden Potential',
    description: 'Corporate workshops in Delhi for teams & organisations. Communication, leadership, stress management, emotional intelligence & team building. Customised programs. Dwarka, Delhi & Online.',
    url: 'https://hiddenpotentialskills.com/services/workshops',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Workshops in Delhi | Life Skills & Communication Training for Teams | Hidden Potential',
    description: 'Corporate workshops in Delhi for teams & organisations. Communication, leadership, stress management, emotional intelligence & team building. Customised programs. Dwarka, Delhi & Online.',
  },
  alternates: { canonical: 'https://hiddenpotentialskills.com/services/workshops' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Workshops - Life Skills & Communication Training',
  description: 'Customised corporate workshops in Delhi for teams and organisations. Communication, leadership, stress management, emotional intelligence, and team building programs with pre and post assessment.',
  provider: { '@type': 'Organization', name: 'Hidden Potential', url: 'https://hiddenpotentialskills.com' },
  areaServed: [
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'City', name: 'Faridabad' },
  ],
  serviceType: 'Corporate Life Skills & Communication Workshops',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How are corporate workshops customised?', acceptedAnswer: { '@type': 'Answer', text: "Every corporate workshop at Hidden Potential begins with an organisational needs discussion - understanding your team's specific challenges, development objectives, industry context, and desired outcomes. Based on this assessment, the workshop content, examples, exercises, and delivery format are customised. A communication workshop for an IT team looks very different from one designed for a healthcare organisation." } },
    { '@type': 'Question', name: 'What is the minimum and maximum group size for workshops?', acceptedAnswer: { '@type': 'Answer', text: 'Corporate workshops at Hidden Potential are effective for groups of 10 to 50 participants per session. Smaller groups (10 to 20) allow for more individual practice and feedback. Larger groups (20 to 50) can be accommodated for awareness-level sessions and keynotes. For organisations with larger teams, multiple sessions can be scheduled to ensure quality interaction.' } },
    { '@type': 'Question', name: 'Do you offer ongoing training programs or only single workshops?', acceptedAnswer: { '@type': 'Answer', text: 'Both. Single workshops are available for specific skill areas - typically half-day or full-day formats. For organisations seeking sustained development, Hidden Potential offers multi-session programs spanning weeks or months with progressive skill building, practice assignments, and measurable assessments. Ongoing programs produce significantly better results than single sessions.' } },
    { '@type': 'Question', name: 'Are corporate workshops available online?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Corporate workshops are available in-person at your location across Delhi NCR, online via video conferencing for distributed teams, and in hybrid formats. Online workshops include the same interactive exercises, breakout activities, and practice components as in-person sessions.' } },
    { '@type': 'Question', name: 'What industries do you serve?', acceptedAnswer: { '@type': 'Answer', text: 'Hidden Potential has delivered corporate workshops across IT, healthcare, education, financial services, retail, manufacturing, and professional services. The core human skills - communication, leadership, emotional intelligence, stress management - are universal across industries. Workshop customisation ensures content relevance for your specific industry context.' } },
    { '@type': 'Question', name: 'How do you measure workshop effectiveness?', acceptedAnswer: { '@type': 'Answer', text: 'Corporate workshops at Hidden Potential include pre-training baseline assessment and post-training evaluation to measure skill development. Additionally, participant feedback, facilitator observations, and follow-up assessments at 30 and 90 days can be included for organisations seeking comprehensive ROI documentation.' } },
  ],
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="inline-block text-xs font-bold tracking-widest uppercase text-primary-teal mb-4">
    {children}
  </p>
);

const trustSignals = ['Customised Programs', 'Pre & Post Assessment', 'MSME Registered', 'Skill India Network', 'Dwarka, Delhi & Pan-India'];

const workshopCards = [
  {
    num: '01',
    title: 'Communication Skills for Teams',
    body: 'Structured communication training covering professional workplace communication, presentation skills, email and written communication, meeting behaviour, client-facing communication, cross-functional collaboration, and feedback delivery. Particularly valuable for teams where communication breakdowns cause delays, misunderstandings, and conflicts. Available as half-day, full-day, or multi-session programs with progressive skill building.',
    link: '/services/communication-skills',
    linkText: 'Learn about Communication Skills Training →',
  },
  {
    num: '02',
    title: 'Leadership and Management Development',
    body: "Leadership training for new managers, mid-level leaders, and senior executives. Covers leadership communication, team management, delegation, performance conversations, conflict handling, decision-making, emotional intelligence for leaders, and executive presence. Leadership workshops at Hidden Potential focus on practical skill development through role-play, case studies, and structured feedback - not motivational lectures.",
  },
  {
    num: '03',
    title: 'Stress Management and Resilience Building',
    body: 'Workplace stress management workshops covering emotional regulation, mindfulness practices for professional environments, boundary setting, burnout prevention, energy management, and sustainable performance strategies. Particularly relevant for high-pressure organisations, client-facing teams, and managers dealing with team burnout. NLP-based techniques provide tools that employees can use immediately.',
    link: '/services/stress-management',
    linkText: 'Learn about Stress Management →',
  },
  {
    num: '04',
    title: 'Emotional Intelligence for Workplace Excellence',
    body: 'Emotional intelligence workshops covering self-awareness, emotional regulation, empathy in professional contexts, social skills for workplace effectiveness, and EI-based leadership. Research from TalentSmart shows that emotional intelligence accounts for 58 percent of job performance across industries - making this the highest-ROI training investment available.',
    link: '/services/emotional-intelligence',
    linkText: 'Learn about Emotional Intelligence →',
  },
  {
    num: '05',
    title: 'Team Building and Collaboration',
    body: "Structured team development workshops that go beyond recreational activities to build genuine collaboration skills - trust building, communication clarity within teams, conflict resolution, shared goal alignment, role clarity, and the interpersonal skills that make cross-functional collaboration effective. These workshops are assessment-based and produce actionable team development plans, not just a fun day out.",
  },
  {
    num: '06',
    title: 'Trainer Development and Internal Capability Building',
    body: 'For organisations that want to build internal training capability - developing in-house trainers who can deliver life skills content to their teams on an ongoing basis. Based on the Train the Trainer certification methodology, these workshops cover training design, facilitation skills, audience management, assessment tools, and feedback delivery.',
    link: '/programs/train-the-trainer',
    linkText: 'Learn about Train the Trainer →',
  },
];

const audienceCards = [
  {
    num: '01',
    title: 'IT and Technology Companies',
    body: 'Technical teams with strong domain skills but gaps in communication, client management, presentation skills, and leadership readiness. IT companies in Delhi NCR, Noida, and Gurgaon are among the most frequent seekers of structured soft skills training because the gap between technical competence and professional effectiveness is most visible in technology environments.',
  },
  {
    num: '02',
    title: 'Startups and Growing Organisations',
    body: 'Fast-growing companies where team dynamics, communication, and leadership skills have not kept pace with headcount growth. Startups often promote technical performers into management roles without providing leadership training - creating management problems that slow growth and increase turnover.',
  },
  {
    num: '03',
    title: 'Corporates and MNCs',
    body: "Large organisations seeking structured training programs for employee development, leadership pipelines, and organisational culture improvement. Hidden Potential delivers customised programs that align with corporate L&D objectives and integrate with existing development frameworks.",
  },
  {
    num: '04',
    title: 'Schools and Educational Institutions',
    body: "Schools across Delhi NCR seeking structured life skills training for teachers, counsellors, and administrative staff - as well as student programs aligned with NEP 2020 requirements. Teacher training workshops are particularly impactful because they multiply the benefit across every student the teacher interacts with.",
    link: '/for/schools',
    linkText: 'Explore Programs for Schools →',
  },
  {
    num: '05',
    title: 'Healthcare and Service Organisations',
    body: 'Hospitals, clinics, and service organisations where communication, empathy, stress management, and emotional regulation directly impact patient and client experience. Structured life skills training for frontline staff in healthcare and service industries produces measurable improvements in patient satisfaction and employee wellbeing.',
  },
];

const differentiatorCards = [
  {
    title: 'Customised, Not Off-the-Shelf',
    body: "Every corporate workshop is designed based on organisational needs assessment - not a generic curriculum delivered identically to every company. The training content, examples, exercises, and case studies are tailored to your industry, team challenges, and development objectives.",
  },
  {
    title: 'Practice-Intensive, Not Lecture-Based',
    body: "Participants practise skills in every session - through role-play, simulations, structured exercises, and real-world scenarios. Skill development happens through doing, not through listening to presentations about what to do. This methodology produces actual behavioural change, not just knowledge transfer.",
  },
  {
    title: 'Pre and Post Assessment for Measurable ROI',
    body: "Every workshop includes baseline assessment before training and progress evaluation after completion. This provides documented evidence of skill development for L&D reporting, ROI justification, and participant development tracking.",
  },
  {
    title: '14 Years of Training Expertise Across 5000+ Individuals',
    body: "Supreet Kaur brings 14 years of training and coaching experience across students, professionals, women, and aspiring trainers - with over 5000 individuals trained and over 200 trainers certified. This depth of experience across diverse audiences ensures that corporate workshops at Hidden Potential are facilitated with expertise, not just curriculum.",
  },
];

const faqs = [
  { q: 'How are corporate workshops customised?', a: "Every corporate workshop at Hidden Potential begins with an organisational needs discussion - understanding your team's specific challenges, development objectives, industry context, and desired outcomes. Based on this assessment, the workshop content, examples, exercises, and delivery format are customised. A communication workshop for an IT team looks very different from one designed for a healthcare organisation." },
  { q: 'What is the minimum and maximum group size for workshops?', a: 'Corporate workshops at Hidden Potential are effective for groups of 10 to 50 participants per session. Smaller groups (10 to 20) allow for more individual practice and feedback. Larger groups (20 to 50) can be accommodated for awareness-level sessions and keynotes. For organisations with larger teams, multiple sessions can be scheduled to ensure quality interaction.' },
  { q: 'Do you offer ongoing training programs or only single workshops?', a: 'Both. Single workshops are available for specific skill areas - typically half-day or full-day formats. For organisations seeking sustained development, Hidden Potential offers multi-session programs spanning weeks or months with progressive skill building, practice assignments, and measurable assessments. Ongoing programs produce significantly better results than single sessions.' },
  { q: 'Are corporate workshops available online?', a: 'Yes. Corporate workshops are available in-person at your location across Delhi NCR, online via video conferencing for distributed teams, and in hybrid formats. Online workshops include the same interactive exercises, breakout activities, and practice components as in-person sessions.' },
  { q: 'What industries do you serve?', a: 'Hidden Potential has delivered corporate workshops across IT, healthcare, education, financial services, retail, manufacturing, and professional services. The core human skills - communication, leadership, emotional intelligence, stress management - are universal across industries. Workshop customisation ensures content relevance for your specific industry context.' },
  { q: 'How do you measure workshop effectiveness?', a: 'Corporate workshops at Hidden Potential include pre-training baseline assessment and post-training evaluation to measure skill development. Additionally, participant feedback, facilitator observations, and follow-up assessments at 30 and 90 days can be included for organisations seeking comprehensive ROI documentation.' },
];

export default function WorkshopsPage() {
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
                Corporate Training &amp; Development
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Corporate Workshops in Delhi - Life Skills &amp; Communication Training for Teams
            </h1>
            <p className="text-xl text-white/80 mb-6 italic" style={{ fontFamily: 'var(--font-accent)' }}>
              Your team&apos;s technical skills got them hired - their life skills determine how far they&apos;ll go together.
            </p>
            <p className="text-base text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Technical competence is table stakes in today&apos;s workplace. What separates high-performing teams from average ones - and what determines whether organisations retain their best people - is the quality of human skills: communication, emotional intelligence, stress management, conflict resolution, leadership, and collaboration. Yet most organisations in Delhi NCR invest heavily in technical training while treating human skills as an afterthought - an occasional team-building event or a motivational speaker who leaves everyone inspired for 48 hours before old patterns return. At Hidden Potential, corporate workshops are not motivational events. They are structured, assessment-based training programs designed to develop measurable improvement in the specific human skills your organisation needs most. Whether your team needs communication training, leadership development, stress management and resilience, emotional intelligence coaching, or a comprehensive life skills program - every workshop is customised based on organisational assessment, delivered through practice-intensive methodology, and measured through pre and post evaluation.
            </p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-10 text-white/60 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              {trustSignals.map((sig, i) => (
                <span key={sig} className="flex items-center gap-2">
                  {i > 0 && <span className="hidden sm:inline text-white/30">•</span>}
                  {sig}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-premium-fill">
                Request a Workshop Proposal
              </Link>
              <Link href="/contact" className="btn-premium-ghost-plain">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: WHY IT MATTERS ── */}
        <section className="py-20 px-4 bg-[#F8F6F2]">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>WHY CORPORATE TRAINING MATTERS</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
              Why Organisations in Delhi NCR Are Investing in Life Skills Training
            </h2>
            <div className="space-y-6 text-charcoal leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              <p>The World Economic Forum&apos;s Future of Jobs Report consistently identifies human skills - communication, emotional intelligence, critical thinking, leadership, and resilience - as the competencies most demanded by employers globally. In India, the skills gap is even more pronounced. A 2023 report by the India Skills Report found that less than 50 percent of graduates are considered employable - not because of technical deficiency, but because of gaps in communication, teamwork, problem-solving, and professional behaviour.</p>
              <p>For organisations in Delhi NCR, these gaps translate directly into lost productivity, poor team dynamics, ineffective leadership, high employee turnover, client relationship problems, and a workplace culture that drives talent away rather than retaining it. The cost is not abstract - it is measurable in missed deadlines, client complaints, team conflicts, and the six to nine months of salary it costs to replace every employee who leaves because of poor management or toxic culture.</p>
              <p>Structured life skills training is not a luxury or a nice-to-have corporate perk. It is a business investment with measurable returns in team performance, employee retention, leadership effectiveness, client satisfaction, and organisational culture. At Hidden Potential, corporate workshops are designed to deliver these returns through structured, practice-intensive programs that produce real skill development - not just training day attendance certificates.</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: WORKSHOP AREAS ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel>WORKSHOP AREAS</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Corporate Workshop Topics Available at Hidden Potential in Delhi
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Every corporate workshop at Hidden Potential is customised based on organisational needs assessment. Below are the core training areas available - each can be delivered as a standalone workshop or combined into a comprehensive development program.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workshopCards.map((card) => (
                <div key={card.num} className="card-service">
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
                Which Organisations Benefit from Corporate Workshops in Delhi?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Hidden Potential delivers customised corporate workshops across Delhi NCR for organisations of all sizes and industries. If your team&apos;s human skills are not keeping pace with your technical requirements, structured training produces measurable improvement.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audienceCards.map((card) => (
                <div key={card.num} className="card-service">
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
                Why Corporate Workshops at Hidden Potential Deliver Better Results Than Standard Training Providers
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {differentiatorCards.map((card) => (
                <div key={card.title} className="card-service">
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
              Common Questions About Corporate Workshops in Delhi
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
              Invest in Your Team&apos;s Human Skills - The Returns Are Measurable
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Technical skills are the minimum requirement. Human skills are the competitive advantage. Corporate workshops at Hidden Potential in Delhi deliver structured, practice-intensive training that produces measurable improvement in communication, leadership, emotional intelligence, and team effectiveness. Every workshop is customised to your organisational needs and measured through pre and post assessment. Start with a free needs consultation to identify the training that will have the highest impact on your team&apos;s performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/contact" className="btn-premium-fill">
                Request a Workshop Proposal
              </Link>
              <Link href="/contact" className="btn-premium-ghost-plain">
                Book a Discovery Call
              </Link>
            </div>
            <p className="text-white/50 text-sm mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Also explore:{' '}
              <Link href="/programs/train-the-trainer" className="text-primary-gold hover:text-white transition-colors underline">
                Train the Trainer Certification
              </Link>
              {' '}- build internal training capability within your organisation
            </p>
            <p className="text-white/40 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
              Available across Delhi NCR | On-Site at Your Location | Online for Distributed Teams
            </p>
          </div>
        </section>

      </main>
    </>
  );
}

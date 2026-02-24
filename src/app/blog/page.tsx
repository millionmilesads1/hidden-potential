import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Life Skills Blog | Tips, Research & Insights | Hidden Potential',
  description:
    'Expert articles on emotional intelligence, communication, confidence building, NLP, and structured personal development. Written by certified life skills professionals.',
  openGraph: {
    title: 'Life Skills Blog — Expert Insights on Personal Development | Hidden Potential',
    description:
      'Research-backed articles on emotional intelligence, communication mastery, confidence building, NLP techniques, and structured life skills development by Supreet Kaur.',
    type: 'website',
    url: 'https://hiddenpotentialskills.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life Skills Blog — Expert Insights on Personal Development | Hidden Potential',
    description:
      'Research-backed articles on emotional intelligence, communication mastery, confidence building, NLP techniques, and structured life skills development.',
  },
  alternates: {
    canonical: 'https://hiddenpotentialskills.com/blog',
  },
};

// ── Schema ─────────────────────────────────────────────────────────────────────
const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Hidden Potential Life Skills Blog',
  description:
    'Expert articles on life skills, emotional intelligence, NLP, communication, and structured personal development.',
  url: 'https://hiddenpotentialskills.com/blog',
  author: {
    '@type': 'Person',
    name: 'Supreet Kaur',
    jobTitle: 'Founder & Director, Hidden Potential',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Hidden Potential',
    url: 'https://hiddenpotentialskills.com',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hiddenpotentialskills.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://hiddenpotentialskills.com/blog' },
  ],
};

// ── Blog post data (placeholder — replace with real posts when available) ──────
const posts = [
  {
    slug: 'what-are-life-skills',
    category: 'Life Skills',
    categoryColor: 'text-primary-teal bg-teal-light',
    title: 'What Are Life Skills and Why Do They Matter in 2026?',
    excerpt:
      'Life skills are the foundation of everything we do — how we communicate, how we handle stress, how we make decisions. Yet most school curricula still treat them as optional. Here is why that needs to change.',
    author: 'Supreet Kaur',
    date: 'February 18, 2026',
    readTime: '6 min read',
    href: '/blog/what-are-life-skills',
    relatedHref: '/programs/enlightened-learner',
    relatedLabel: 'An Enlightened Learner Program',
    featured: true,
  },
  {
    slug: 'how-to-improve-communication-skills',
    category: 'Communication',
    categoryColor: 'text-primary-teal bg-teal-light',
    title: 'How to Improve Communication Skills: A Structured Approach',
    excerpt:
      'Most people believe communication is a personality trait — you either have it or you do not. This is wrong. Communication is a skill set that can be systematically built through structured practice and feedback.',
    author: 'Supreet Kaur',
    date: 'February 10, 2026',
    readTime: '8 min read',
    href: '/blog/how-to-improve-communication-skills',
    relatedHref: '/programs/communication-mastery',
    relatedLabel: 'Communication Mastery',
    featured: false,
  },
  {
    slug: 'how-to-build-self-confidence',
    category: 'Confidence',
    categoryColor: 'text-primary-teal bg-teal-light',
    title: 'How to Build Self-Confidence: From Self-Doubt to Self-Assurance',
    excerpt:
      'Confidence is not about feeling fearless. It is about developing a trust in yourself — your ability to handle situations, make decisions, and recover from setbacks. Here is the structured path to building it.',
    author: 'Supreet Kaur',
    date: 'January 28, 2026',
    readTime: '7 min read',
    href: '/blog/how-to-build-self-confidence',
    relatedHref: '/services/confidence-building',
    relatedLabel: 'Confidence Building Program',
    featured: false,
  },
  {
    slug: 'emotional-intelligence-for-students',
    category: 'Emotional Intelligence',
    categoryColor: 'text-primary-teal bg-teal-light',
    title: 'Emotional Intelligence for Students: The Guide Parents and Teachers Need',
    excerpt:
      'Academic performance alone does not predict student success. Research consistently shows that emotional intelligence — the ability to understand and manage emotions — is a stronger predictor of life outcomes.',
    author: 'Supreet Kaur',
    date: 'January 15, 2026',
    readTime: '9 min read',
    href: '/blog/emotional-intelligence-for-students',
    relatedHref: '/services/emotional-intelligence',
    relatedLabel: 'Emotional Intelligence Coaching',
    featured: false,
  },
  {
    slug: 'stress-management-techniques-for-students',
    category: 'Stress Management',
    categoryColor: 'text-primary-teal bg-teal-light',
    title: 'Stress Management Techniques for Students That Actually Work',
    excerpt:
      'Exam stress, peer pressure, academic expectations — students today face immense psychological load. This article explores structured, evidence-backed stress management techniques for students at every stage.',
    author: 'Supreet Kaur',
    date: 'January 5, 2026',
    readTime: '7 min read',
    href: '/blog/stress-management-techniques-for-students',
    relatedHref: '/services/stress-management',
    relatedLabel: 'Stress Management Coaching',
    featured: false,
  },
];

const categories = ['All', 'Life Skills', 'Communication', 'Confidence', 'Emotional Intelligence', 'Stress Management', 'NLP', 'Women', 'Schools'];

// ── Sub-components ─────────────────────────────────────────────────────────────
function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${light ? 'text-primary-gold' : 'text-primary-teal'}`}>
      {children}
    </p>
  );
}

function PostCard({ post, featured = false }: { post: (typeof posts)[0]; featured?: boolean }) {
  return (
    <article className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden ${featured ? 'md:col-span-2' : ''}`}>
      {/* Category bar */}
      <div className="h-1 w-full bg-primary-teal" />

      <div className={`p-6 flex flex-col flex-1 ${featured ? 'md:flex-row md:gap-8' : ''}`}>
        <div className={`flex flex-col flex-1 ${featured ? '' : ''}`}>
          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${post.categoryColor}`}>
              {post.category}
            </span>
            <span className="text-[11px] text-charcoal/45">{post.date}</span>
            <span className="text-[11px] text-charcoal/45">·</span>
            <span className="text-[11px] text-charcoal/45">{post.readTime}</span>
          </div>

          {/* Title */}
          <h2 className={`font-extrabold text-primary-navy leading-snug mb-3 ${featured ? 'text-xl md:text-2xl' : 'text-[17px]'}`}>
            <Link href={post.href} className="hover:text-primary-teal transition-colors">
              {post.title}
            </Link>
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-charcoal/70 leading-relaxed flex-1 mb-5">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between flex-wrap gap-3 mt-auto">
            <div className="flex items-center gap-2">
              {/* Author avatar placeholder */}
              <div className="w-7 h-7 rounded-full bg-navy-light border border-primary-teal/20 flex items-center justify-center">
                <span className="text-[9px] font-bold text-primary-teal">SK</span>
              </div>
              <span className="text-xs font-semibold text-charcoal/60">{post.author}</span>
            </div>

            <Link
              href={post.href}
              className="text-xs font-bold text-primary-teal hover:text-teal-dark transition-colors flex items-center gap-1"
            >
              Read Article
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Related content nudge */}
          <p className="text-[11px] text-charcoal/40 italic mt-3 pt-3 border-t border-gray-100">
            Related:{' '}
            <Link href={post.relatedHref} className="not-italic font-semibold text-primary-teal/70 hover:text-primary-teal transition-colors">
              {post.relatedLabel}
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      <section
        style={{ background: 'linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)' }}
        className="relative pt-24 pb-20 text-center overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{ background: 'radial-gradient(circle at 85% 20%, rgba(109,40,217,0.08) 0%, transparent 60%)' }}
            className="absolute inset-0"
          />
          <div
            style={{ background: 'radial-gradient(circle at 15% 80%, rgba(200,169,81,0.06) 0%, transparent 50%)' }}
            className="absolute inset-0"
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full mb-6" style={{ background: 'rgba(124,58,237,0.12)' }}>
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary-teal">
              Life Skills Blog
            </span>
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-5"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
          >
            Life Skills Blog — Expert Insights on Personal Development
          </h1>

          <p
            className="text-xl md:text-2xl text-white/75 italic mb-6"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            Research-backed articles on confidence, communication, emotional intelligence, and structured growth.
          </p>

          <p className="text-base text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            Written by <Link href="/about" className="text-white/80 font-semibold hover:text-white transition-colors underline underline-offset-2">Supreet Kaur</Link> — certified NLP practitioner, Masters in Psychology, and award-winning life skills educator with 14+ years of experience training 5000+ individuals across Delhi NCR. Every article connects to structured, actionable pathways.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {['Expert-Written', 'Research-Backed', 'Actionable Insights', '14+ Years Experience'].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary-teal inline-block" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CATEGORY PILLS ───────────────────────────────────────── */}
      <section className="bg-off-white py-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-charcoal/40 uppercase tracking-wider mr-1 flex-shrink-0">
              Browse by:
            </span>
            {categories.map((cat, i) => (
              <span
                key={i}
                className={`px-4 py-1.5 text-xs font-bold rounded-full border transition-colors cursor-default ${
                  i === 0
                    ? 'bg-primary-teal text-white border-primary-teal'
                    : 'border-gray-200 text-charcoal/60 bg-white hover:border-primary-teal/40'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-charcoal/35 mt-3">
            Category filtering coming soon. More articles publishing weekly.
          </p>
        </div>
      </section>

      {/* ── SECTION 3: POSTS ────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Latest Articles</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-navy mb-3">
            Life Skills Insights & Guides
          </h2>
          <p className="text-charcoal/65 text-sm leading-relaxed mb-10 max-w-2xl">
            Every article is grounded in structured life skills practice. Each one connects theory to the real transformation work done at Hidden Potential across Delhi NCR.
          </p>

          {/* Featured post */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <PostCard post={featured} featured />
          </div>

          {/* Remaining posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Coming soon note */}
          <div className="mt-12 bg-navy-light rounded-lg border border-primary-teal/10 p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-teal mb-2">More Coming Soon</p>
            <h3 className="text-base font-extrabold text-primary-navy mb-2">New Articles Every Week</h3>
            <p className="text-sm text-charcoal/65 leading-relaxed max-w-xl mx-auto">
              Topics in the pipeline include: goal setting frameworks, how to choose a life coach, NLP techniques for everyday use, exam stress management for Class 10 & 12, and more.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: NEWSLETTER / CTA NUDGE ──────────────────────────────── */}
      <section className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: explore pathways */}
            <div>
              <SectionLabel>Go Deeper</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-navy mb-4">
                Reading Inspires. Structure Transforms.
              </h2>
              <p className="text-charcoal/65 text-sm leading-relaxed mb-6">
                Articles give you awareness. Hidden Potential's structured programmes give you a personalised, step-by-step pathway from where you are to where you want to be — supported by assessment, practice, and real accountability.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-teal hover:bg-teal-dark text-white text-sm font-bold rounded-lg transition-colors shadow-md"
                >
                  Take the Assessment
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-teal/30 hover:border-primary-teal text-primary-teal text-sm font-bold rounded-lg transition-colors"
                >
                  Book Free Evaluation
                </Link>
              </div>
            </div>

            {/* Right: popular topics quick links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-4">Explore by Topic</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Confidence Building', href: '/services/confidence-building' },
                  { label: 'Communication Skills Training', href: '/programs/communication-mastery' },
                  { label: 'Emotional Intelligence', href: '/services/emotional-intelligence' },
                  { label: 'Stress Management', href: '/services/stress-management' },
                  { label: 'Life Skills for Students', href: '/programs/enlightened-learner' },
                  { label: 'NLP Coaching', href: '/services/nlp-coaching' },
                  { label: 'Goal Setting', href: '/services/goal-setting' },
                  { label: 'Life Skills for Schools', href: '/for/schools' },
                ].map((topic) => (
                  <Link
                    key={topic.href}
                    href={topic.href}
                    className="flex items-center justify-between px-4 py-2.5 bg-white rounded-lg border border-gray-200 hover:border-primary-teal/40 hover:shadow-sm transition-all group"
                  >
                    <span className="text-sm font-semibold text-primary-navy group-hover:text-primary-teal transition-colors">
                      {topic.label}
                    </span>
                    <svg className="w-3.5 h-3.5 text-charcoal/30 group-hover:text-primary-teal transition-colors" fill="none" viewBox="0 0 14 14">
                      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FINAL CTA ────────────────────────────────────────────── */}
      <section
        style={{ background: 'linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)' }}
        className="relative py-20 text-center overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(109,40,217,0.12) 0%, transparent 70%)' }}
            className="absolute inset-0"
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-6">
          <SectionLabel light>Begin Your Journey</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
            Knowledge Is the Starting Point.<br className="hidden md:block" /> Transformation Begins with a Decision.
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            14+ years of structured life skills training. 5000+ individuals transformed across Delhi NCR. Every journey starts with a free 30-minute evaluation call with{' '}
            <Link href="/about" className="text-white/80 font-semibold hover:text-white transition-colors underline underline-offset-2">
              Supreet Kaur
            </Link>
            .
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-teal hover:bg-teal-dark text-white font-bold rounded-lg text-sm transition-colors shadow-md"
            >
              Take the Assessment
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 hover:border-white/70 hover:bg-white/5 text-white font-bold rounded-lg text-sm transition-colors"
            >
              Book Free Evaluation
            </Link>
          </div>

          <p className="text-xs text-white/40">
            Also explore:{' '}
            <Link href="/resources" className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors">
              Books &amp; Resources
            </Link>
            {' '}·{' '}
            <Link href="/success-stories" className="text-white/65 hover:text-white font-semibold underline underline-offset-2 transition-colors">
              Success Stories
            </Link>
          </p>

          <p className="text-[11px] text-white/30 mt-8">
            Available at Dwarka (Sector 19B), Delhi &nbsp;·&nbsp;{' '}
            <Link href="/locations/noida" className="hover:text-white/50 transition-colors">Noida</Link>
            {' '}&nbsp;·&nbsp;{' '}
            <Link href="/locations/gurgaon" className="hover:text-white/50 transition-colors">Gurgaon</Link>
            {' '}&nbsp;·&nbsp;{' '}
            <Link href="/locations/faridabad" className="hover:text-white/50 transition-colors">Faridabad</Link>
            {' '}&nbsp;·&nbsp;{' '}Online across India
          </p>
        </div>
      </section>
    </main>
  );
}

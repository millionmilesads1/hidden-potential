'use client';

import { useState } from 'react';
import Link from 'next/link';

// ── Types ──────────────────────────────────────────────────────────────────────
type Profile  = 'student' | 'young-adult' | 'professional' | 'woman' | 'trainer' | 'school';
type Challenge = 'confidence' | 'communication' | 'stress' | 'direction' | 'healing' | 'institution';
type Goal     = 'build-confidence' | 'communicate' | 'manage-stress' | 'career-clarity' | 'become-trainer' | 'school-program';

interface Answers {
  profile:   Profile | null;
  challenge: Challenge | null;
  goal:      Goal | null;
}

interface Option {
  value: string;
  label: string;
  sublabel?: string;
  desc: string;
  emoji: string;
}

interface Recommendation {
  name: string;
  tagline: string;
  description: string;
  href: string;
  highlights: string[];
  secondaryHref?: string;
  secondaryLabel?: string;
}

// ── Question Data ──────────────────────────────────────────────────────────────
const q1Options: Option[] = [
  { value: 'student',      label: 'Student',              sublabel: 'Ages 8–21',  desc: 'Building academic confidence and life skills',         emoji: '📚' },
  { value: 'young-adult',  label: 'Young Adult',          sublabel: 'Ages 18–25', desc: 'Transitioning from college to career life',            emoji: '🎓' },
  { value: 'professional', label: 'Working Professional', sublabel: 'Ages 25+',   desc: 'Growing in communication, leadership, and presence',   emoji: '💼' },
  { value: 'woman',        label: 'Woman',                sublabel: 'Ages 28+',   desc: 'Seeking personal strength and emotional independence',  emoji: '✨' },
  { value: 'trainer',      label: 'Aspiring Trainer',     sublabel: 'Any age',    desc: 'Wanting to become a certified life skills facilitator', emoji: '🏆' },
  { value: 'school',       label: 'School / Institution', sublabel: 'B2B',        desc: 'Looking for structured programs for my students',       emoji: '🏫' },
];

const q2Options: Option[] = [
  { value: 'confidence',    label: 'Lack of Confidence',         desc: 'Self-doubt, hesitation, and fear of judgment',            emoji: '🎯' },
  { value: 'communication', label: 'Communication Struggles',    desc: 'Difficulty expressing ideas clearly or assertively',      emoji: '🗣️' },
  { value: 'stress',        label: 'Stress & Overwhelm',         desc: 'Anxiety, emotional reactivity, and mental fatigue',      emoji: '🧘' },
  { value: 'direction',     label: 'Unclear Direction',          desc: 'Not knowing what to do next or where to focus',          emoji: '🧭' },
  { value: 'healing',       label: 'Need for Emotional Reset',   desc: 'Processing past experiences and finding inner peace',    emoji: '🌱' },
  { value: 'institution',   label: 'Student Wellbeing at Scale', desc: 'Building structured programs for an institution',        emoji: '🏫' },
];

const q3Options: Option[] = [
  { value: 'build-confidence', label: 'Build Confidence',              desc: 'Develop unshakeable self-belief and presence',          emoji: '💪' },
  { value: 'communicate',      label: 'Communicate Better',            desc: 'Speak clearly, listen deeply, lead conversations',      emoji: '💬' },
  { value: 'manage-stress',    label: 'Manage Stress',                 desc: 'Build emotional resilience and sustained calm',         emoji: '🌊' },
  { value: 'career-clarity',   label: 'Career & Life Clarity',        desc: 'Make confident decisions about direction and future',   emoji: '🚀' },
  { value: 'become-trainer',   label: 'Become a Certified Trainer',   desc: 'Start a coaching or facilitation career',               emoji: '🎓' },
  { value: 'school-program',   label: 'Structured School Program',    desc: 'Implement life skills curriculum for my institution',   emoji: '🏫' },
];

const questions = [
  { step: 1, question: 'Which best describes you?',                options: q1Options },
  { step: 2, question: 'What is your biggest challenge right now?', options: q2Options },
  { step: 3, question: 'What is your primary goal?',               options: q3Options },
];

const answerKeys: (keyof Answers)[] = ['profile', 'challenge', 'goal'];

// ── Recommendation Engine ──────────────────────────────────────────────────────
function getRecommendation(answers: Answers): Recommendation {
  const { profile, challenge, goal } = answers;

  if (profile === 'school') {
    return {
      name: 'Life Skills Programs for Schools',
      tagline: 'NEP 2020 Aligned · 5000+ Students Trained · MSME Registered',
      description: 'A comprehensive institutional partnership covering student workshops, teacher training, parent engagement sessions, and exam stress management. Fully documented and compliance-ready for Delhi NCR schools.',
      href: '/for/schools',
      highlights: ['Student Confidence Workshops', 'Teacher Development Programs', 'NEP 2020 Aligned Curriculum', 'MSME Documented Reporting'],
      secondaryHref: '/programs/train-the-trainer',
      secondaryLabel: 'Train the Trainer Certification',
    };
  }

  if (profile === 'trainer') {
    return {
      name: 'Train the Trainer Certification',
      tagline: 'MSME + Skill India Certified · 1-Month or 3-Month Programs',
      description: "Become a certified life skills facilitator with Hidden Potential's structured Train the Trainer program. NLP integration, curriculum design, practical facilitation, and dual certification.",
      href: '/programs/train-the-trainer',
      highlights: ['Life Skills Curriculum Design', 'NLP Integration & Techniques', 'Practical Facilitation Training', 'MSME + Skill India Certified'],
      secondaryHref: '/programs/communication-mastery',
      secondaryLabel: 'Communication Mastery Program',
    };
  }

  if (profile === 'woman') {
    if (challenge === 'healing' || challenge === 'stress' || goal === 'manage-stress') {
      return {
        name: 'Art Therapy for Healing',
        tagline: 'Clarity & Peace Through Creative Expression · All Ages',
        description: 'A therapeutic pathway combining mindfulness, reflective journaling, and art-based expression. Designed to help you process emotions, release mental clutter, and find genuine inner clarity. No artistic skill required.',
        href: '/programs/art-therapy',
        highlights: ['Mindfulness & Meditation', 'Reflective Journaling', 'Art-Based Therapy Sessions', '1, 3 & 6-Month Tracks'],
        secondaryHref: '/programs/self-mastery-women',
        secondaryLabel: 'Self Mastery for Women Program',
      };
    }
    return {
      name: 'Self Mastery for Women',
      tagline: 'Holistic Growth & Emotional Leadership · Ages 28+',
      description: 'A structured program for women ready to reclaim their identity, build emotional strength, and live with independent confidence. Covers inner self and identity, emotional resilience, relationships, and personal growth.',
      href: '/programs/self-mastery-women',
      highlights: ['Identity & Inner Strength', 'Emotional Resilience Building', 'Relationship Dynamics', 'Financial & Personal Independence'],
      secondaryHref: '/programs/art-therapy',
      secondaryLabel: 'Art Therapy for Healing',
    };
  }

  if (profile === 'student') {
    if (challenge === 'communication' || goal === 'communicate') {
      return {
        name: 'Communication Mastery',
        tagline: 'From Hesitation to Leadership Presence · Ages 8–65',
        description: 'A structured communication and leadership program covering confidence and presence, verbal and non-verbal communication, professional expression, and leadership communication. Foundation to Mastery levels.',
        href: '/programs/communication-mastery',
        highlights: ['Public Speaking & Presentation', 'Assertive Expression', 'Non-Verbal Communication', 'Leadership Presence'],
        secondaryHref: '/programs/enlightened-learner',
        secondaryLabel: 'An Enlightened Learner Program',
      };
    }
    return {
      name: 'An Enlightened Learner',
      tagline: 'Structured Life Skills for Students · Ages 8–21',
      description: 'A comprehensive life skills development program with Foundation, Growth, and Mastery levels. Covers self-mastery, communication, academic efficiency, and real-world readiness. Pre and post assessment included.',
      href: '/programs/enlightened-learner',
      highlights: ['Self Mastery & Emotional Intelligence', 'Communication & Social Skills', 'Study Skills & Focus', 'Real-World Readiness'],
      secondaryHref: '/programs/communication-mastery',
      secondaryLabel: 'Communication Mastery Program',
    };
  }

  if (profile === 'young-adult') {
    if (goal === 'become-trainer') {
      return {
        name: 'Train the Trainer Certification',
        tagline: 'MSME + Skill India Certified · 1-Month or 3-Month Programs',
        description: "Become a certified life skills facilitator with Hidden Potential's Train the Trainer program. Ideal for young adults passionate about teaching, coaching, or education. Dual certification included.",
        href: '/programs/train-the-trainer',
        highlights: ['Life Skills Curriculum Design', 'NLP Integration & Techniques', 'Practical Facilitation Training', 'MSME + Skill India Certified'],
        secondaryHref: '/for/young-adults',
        secondaryLabel: 'Life Skills for Young Adults',
      };
    }
    return {
      name: 'Communication Mastery',
      tagline: 'Career-Ready Communication & Leadership · Ages 8–65',
      description: 'Build the communication and leadership skills that define career success. Public speaking, assertive expression, professional communication, and executive presence — structured across Foundation, Growth, and Mastery levels.',
      href: '/programs/communication-mastery',
      highlights: ['Professional Communication', 'Public Speaking & Stage Presence', 'Leadership & Executive Presence', 'Career Readiness Skills'],
      secondaryHref: '/for/young-adults',
      secondaryLabel: 'Life Skills for Young Adults',
    };
  }

  // Default: professional
  if (goal === 'become-trainer') {
    return {
      name: 'Train the Trainer Certification',
      tagline: 'MSME + Skill India Certified · 1-Month or 3-Month Programs',
      description: "Transition your professional expertise into a coaching career with Hidden Potential's Train the Trainer certification. NLP integration, curriculum design, and practical facilitation. Dual certification included.",
      href: '/programs/train-the-trainer',
      highlights: ['Life Skills Curriculum Design', 'NLP Integration & Techniques', 'Practical Facilitation Training', 'MSME + Skill India Certified'],
      secondaryHref: '/for/professionals',
      secondaryLabel: 'Life Skills for Professionals',
    };
  }

  if (challenge === 'stress' || goal === 'manage-stress') {
    return {
      name: 'Stress Management Coaching',
      tagline: 'Regain Calm · Build Resilience · Perform Better',
      description: 'Structured stress management combining NLP reprogramming, mindfulness techniques, and emotional regulation strategies. Designed for professionals navigating high-pressure environments and demanding responsibilities.',
      href: '/services/stress-management',
      highlights: ['NLP Belief Reprogramming', 'Emotional Regulation Strategies', 'Mindfulness Techniques', 'Work-Life Integration'],
      secondaryHref: '/for/professionals',
      secondaryLabel: 'Life Skills for Professionals',
    };
  }

  if (challenge === 'communication' || goal === 'communicate') {
    return {
      name: 'Communication Mastery',
      tagline: 'Leadership Communication & Executive Presence',
      description: 'Structured communication training for professionals who want to lead with clarity and influence. Covers assertive expression, executive presence, public speaking, and professional credibility. Foundation to Mastery levels.',
      href: '/programs/communication-mastery',
      highlights: ['Executive Presence & Gravitas', 'Public Speaking Mastery', 'Assertive Communication', 'Professional Influence'],
      secondaryHref: '/services/workshops',
      secondaryLabel: 'Group Workshops for Teams',
    };
  }

  return {
    name: 'Life Skills for Professionals',
    tagline: 'Structured Soft Skills & Leadership Development',
    description: 'A tailored life skills pathway for working professionals. Communication, confidence, emotional intelligence, goal-setting, and stress management — with customised group workshop options for teams and organisations.',
    href: '/for/professionals',
    highlights: ['Communication & Leadership', 'Emotional Intelligence (EI)', 'Goal Setting & Accountability', 'Stress Management'],
    secondaryHref: '/services/workshops',
    secondaryLabel: 'Group Workshops for Teams',
  };
}

// ── Sub-components ─────────────────────────────────────────────────────────────
function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${light ? 'text-primary-gold' : 'text-primary-teal'}`}>
      {children}
    </p>
  );
}

function OptionCard({
  option,
  isSelected,
  onClick,
}: {
  option: Option;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-4 rounded-lg border transition-all duration-200 w-full cursor-pointer ${
        isSelected
          ? 'border-primary-teal bg-teal-light shadow-md ring-1 ring-primary-teal/30'
          : 'border-gray-200 bg-white hover:border-primary-teal/40 hover:shadow-md shadow-sm'
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-xl leading-none mt-0.5 flex-shrink-0">{option.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <span className="font-bold text-sm text-primary-navy">{option.label}</span>
            {option.sublabel && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary-teal bg-teal-light/80 px-1.5 py-0.5 rounded-full">
                {option.sublabel}
              </span>
            )}
          </div>
          <p className="text-xs text-charcoal/65 leading-relaxed">{option.desc}</p>
        </div>
        {isSelected && (
          <div
            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
            style={{ background: '#7C3AED' }}
          >
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
    </button>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function AssessmentClient() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Answers>({ profile: null, challenge: null, goal: null });
  const [selected, setSelected] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 3;
  const currentQ = questions[currentStep - 1];

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  const handleNext = () => {
    if (!selected) return;

    const key = answerKeys[currentStep - 1];
    const newAnswers = { ...answers, [key]: selected } as Answers;
    setAnswers(newAnswers);
    setSelected(null);

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      const prevKey = answerKeys[currentStep - 2];
      setCurrentStep(currentStep - 1);
      setSelected(answers[prevKey]);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setAnswers({ profile: null, challenge: null, goal: null });
    setSelected(null);
    setShowResults(false);
  };

  const recommendation = showResults ? getRecommendation(answers) : null;

  return (
    <main>
      {/* ── SECTION 1: HERO ──────────────────────────────────────────────────── */}
      <section
        style={{ background: 'linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)' }}
        className="relative pt-24 pb-20 text-center overflow-hidden"
      >
        {/* Decorative glows */}
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
          {/* Label badge */}
          <div
            className="inline-flex items-center px-3 py-1 rounded-full mb-6"
            style={{ background: 'rgba(124,58,237,0.12)' }}
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary-teal">
              Discover Your Pathway
            </span>
          </div>

          {/* H1 */}
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-5"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
          >
            Take Your Life Skills Assessment —<br className="hidden md:block" /> Discover Your Growth Pathway
          </h1>

          {/* Lora italic tagline */}
          <p
            className="text-xl md:text-2xl text-white/75 italic mb-6"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            Know your starting point. Choose your direction. Begin your transformation.
          </p>

          {/* Body */}
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            This short 3-question assessment helps us understand your profile, your current challenges, and your primary goals — so we can recommend the right structured pathway for your stage of growth. Answer honestly. There are no wrong answers.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/40">
            {['Takes 2 Minutes', 'Confidential', 'No Sign-Up Required', 'Personalised Pathway'].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary-teal inline-block" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: QUIZ ───────────────────────────────────────────────────── */}
      {!showResults && (
        <section className="bg-off-white py-16">
          <div className="max-w-2xl mx-auto px-6">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-2">
                <span>Step {currentStep} of {totalSteps}</span>
                <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
              </div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-teal rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
              <SectionLabel>Question {currentStep}</SectionLabel>
              <h2 className="text-xl md:text-2xl font-extrabold text-primary-navy mb-6 leading-snug">
                {currentQ.question}
              </h2>

              {/* Options grid */}
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {currentQ.options.map((option) => (
                  <OptionCard
                    key={option.value}
                    option={option}
                    isSelected={selected === option.value}
                    onClick={() => handleSelect(option.value)}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    onClick={handleBack}
                    className="text-sm font-semibold text-charcoal/50 hover:text-charcoal/80 transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                      <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  onClick={handleNext}
                  disabled={!selected}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white transition-all duration-200 ${
                    selected
                      ? 'bg-primary-teal hover:bg-teal-dark shadow-md cursor-pointer'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  {currentStep < totalSteps ? 'Continue' : 'Show My Pathway'}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Reassurance */}
            <p className="text-center text-xs text-charcoal/40 mt-5 leading-relaxed">
              Your answers are used only to recommend the right pathway. We do not store or share this information.
            </p>
          </div>
        </section>
      )}

      {/* ── SECTION 3: RESULTS ────────────────────────────────────────────────── */}
      {showResults && recommendation && (
        <>
          {/* Result hero */}
          <section
            style={{ background: 'linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)' }}
            className="relative py-20 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div
                style={{ background: 'radial-gradient(circle at 70% 30%, rgba(109,40,217,0.1) 0%, transparent 60%)' }}
                className="absolute inset-0"
              />
            </div>

            <div className="relative max-w-2xl mx-auto px-6 text-center">
              <SectionLabel light>Assessment Complete</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
                Your Recommended Pathway
              </h2>
              <p className="text-white/55 text-sm mb-10 leading-relaxed max-w-lg mx-auto">
                Based on your profile and goals, here is the structured pathway best matched to your current stage of growth.
              </p>

              {/* Recommendation card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-xl mb-8 text-left">
                {/* Card header */}
                <div className="bg-primary-teal px-6 py-5">
                  <p className="text-teal-light text-[11px] font-bold uppercase tracking-widest mb-1.5">
                    Recommended Pathway
                  </p>
                  <h3 className="text-white text-xl font-extrabold leading-tight">
                    {recommendation.name}
                  </h3>
                  <p className="text-white/65 text-xs mt-1.5">{recommendation.tagline}</p>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <p className="text-charcoal/80 text-sm leading-relaxed mb-5">
                    {recommendation.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2.5 mb-7">
                    {recommendation.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: '#7C3AED' }}
                        >
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                            <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-xs font-semibold text-charcoal/75">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={recommendation.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-teal hover:bg-teal-dark text-white text-sm font-bold transition-colors"
                    >
                      Explore This Pathway
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border-2 border-primary-navy/20 hover:border-primary-teal/40 text-primary-navy text-sm font-bold transition-colors bg-white"
                    >
                      Book Free Evaluation
                    </Link>
                  </div>
                </div>
              </div>

              {/* Secondary recommendation */}
              {recommendation.secondaryHref && (
                <p className="text-white/45 text-xs mb-8">
                  Also consider:{' '}
                  <Link
                    href={recommendation.secondaryHref}
                    className="text-white/70 font-semibold hover:text-white underline underline-offset-2 transition-colors"
                  >
                    {recommendation.secondaryLabel}
                  </Link>
                </p>
              )}

              {/* Retake */}
              <button
                onClick={handleRestart}
                className="text-xs text-white/35 hover:text-white/60 underline underline-offset-2 transition-colors"
              >
                Retake the assessment
              </button>

              {/* Location line */}
              <p className="text-[11px] text-white/30 mt-10 leading-relaxed">
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

          {/* All pathways nudge */}
          <section className="bg-off-white py-14">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <SectionLabel>Explore All Pathways</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-navy mb-4">
                Not Sure? Explore All Programmes
              </h2>
              <p className="text-charcoal/65 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
                Your assessment gives a starting point, but the best pathway is confirmed through a free 30-minute evaluation call with Supreet Kaur. Every programme can be customised to your specific context, challenges, and goals.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-left">
                {[
                  { name: 'An Enlightened Learner', sub: 'For Students · Ages 8–21', href: '/programs/enlightened-learner' },
                  { name: 'Communication Mastery', sub: 'For All Ages · 8–65', href: '/programs/communication-mastery' },
                  { name: 'Self Mastery for Women', sub: 'For Women · Ages 28+', href: '/programs/self-mastery-women' },
                  { name: 'Train the Trainer', sub: 'Certification Programme', href: '/programs/train-the-trainer' },
                  { name: 'Art Therapy for Healing', sub: 'Therapeutic Pathway · All Ages', href: '/programs/art-therapy' },
                  { name: 'For Schools & Institutions', sub: 'B2B Partnership · NEP 2020', href: '/for/schools' },
                ].map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary-teal/40 hover:shadow-md transition-all group"
                  >
                    <p className="font-bold text-sm text-primary-navy group-hover:text-primary-teal transition-colors mb-0.5">
                      {p.name}
                    </p>
                    <p className="text-xs text-charcoal/55">{p.sub}</p>
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-teal hover:bg-teal-dark text-white font-bold rounded-lg text-sm transition-colors shadow-md"
              >
                Book Your Free Evaluation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

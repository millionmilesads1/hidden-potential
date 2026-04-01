'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// ─── Data ────────────────────────────────────────────────────────────────────

const questionsData = {
  health: [
    {
      q: 'How would you describe your daily energy levels?',
      options: [
        { emoji: '😴', text: 'I often feel tired or low in energy', score: 1 },
        { emoji: '😐', text: 'My energy fluctuates throughout the day', score: 2 },
        { emoji: '🙂', text: 'I generally feel active and capable', score: 3 },
        { emoji: '⚡', text: 'I consistently feel energetic and physically balanced', score: 4 },
      ],
    },
    {
      q: 'How intentional are you about maintaining your physical health?',
      options: [
        { emoji: '🚫', text: 'I rarely pay attention to health habits', score: 1 },
        { emoji: '⚖️', text: 'I try occasionally but lack consistency', score: 2 },
        { emoji: '👍', text: 'I follow some healthy habits regularly', score: 3 },
        { emoji: '💪', text: 'I consciously maintain exercise, nutrition and rest', score: 4 },
      ],
    },
    {
      q: 'When your body shows signs of stress or fatigue, how do you respond?',
      options: [
        { emoji: '🚫', text: 'I ignore it and keep pushing myself', score: 1 },
        { emoji: '🤷', text: 'I notice it but don\'t change my habits', score: 2 },
        { emoji: '🌿', text: 'I try to make small adjustments', score: 3 },
        { emoji: '💚', text: 'I prioritise rest, recovery and balance', score: 4 },
      ],
    },
  ],
  emotional: [
    {
      q: 'When you experience strong emotions, you usually',
      options: [
        { emoji: '😤', text: 'react immediately without thinking', score: 1 },
        { emoji: '😞', text: 'feel overwhelmed and struggle to manage them', score: 2 },
        { emoji: '🧠', text: 'pause and try to understand the situation', score: 3 },
        { emoji: '🌿', text: 'respond thoughtfully with emotional awareness', score: 4 },
      ],
    },
    {
      q: 'When something doesn\'t go as planned',
      options: [
        { emoji: '😠', text: 'I stay frustrated for a long time', score: 1 },
        { emoji: '😔', text: 'I find it difficult to move on', score: 2 },
        { emoji: '🙂', text: 'I gradually regain balance and adjust', score: 3 },
        { emoji: '🌟', text: 'I reflect, learn and adapt quickly', score: 4 },
      ],
    },
    {
      q: 'How aware are you of your emotional triggers?',
      options: [
        { emoji: '🤷', text: 'I rarely recognise them', score: 1 },
        { emoji: '😕', text: 'I notice them after reacting', score: 2 },
        { emoji: '🧠', text: 'I am becoming aware of them', score: 3 },
        { emoji: '🌿', text: 'I understand them and manage my responses consciously', score: 4 },
      ],
    },
  ],
  spiritual: [
    {
      q: 'How often do you experience moments of inner calm or reflection?',
      options: [
        { emoji: '🌪', text: 'Rarely', score: 1 },
        { emoji: '🌥', text: 'Occasionally', score: 2 },
        { emoji: '🌤', text: 'Fairly regularly', score: 3 },
        { emoji: '☀️', text: 'Very frequently', score: 4 },
      ],
    },
    {
      q: 'When life becomes stressful, you',
      options: [
        { emoji: '😵', text: 'feel disconnected or lost', score: 1 },
        { emoji: '📱', text: 'distract yourself with activities', score: 2 },
        { emoji: '🧘', text: 'take moments to pause and reflect', score: 3 },
        { emoji: '🌟', text: 'consciously reconnect with inner calm', score: 4 },
      ],
    },
    {
      q: 'To what extent do you feel connected to a deeper sense of meaning in life?',
      options: [
        { emoji: '🤔', text: 'I rarely think about it', score: 1 },
        { emoji: '💭', text: 'I occasionally reflect on it', score: 2 },
        { emoji: '🌱', text: 'I feel some sense of deeper connection', score: 3 },
        { emoji: '✨', text: 'I regularly reflect on life\'s meaning', score: 4 },
      ],
    },
  ],
  love: [
    {
      q: 'In close relationships, you generally',
      options: [
        { emoji: '😶', text: 'find it difficult to express feelings', score: 1 },
        { emoji: '🤐', text: 'express feelings but with hesitation', score: 2 },
        { emoji: '🙂', text: 'communicate feelings fairly openly', score: 3 },
        { emoji: '❤️', text: 'express emotions with clarity and warmth', score: 4 },
      ],
    },
    {
      q: 'When misunderstandings happen in close relationships',
      options: [
        { emoji: '🚪', text: 'I withdraw or avoid conversation', score: 1 },
        { emoji: '😔', text: 'I feel hurt but struggle to express it', score: 2 },
        { emoji: '💬', text: 'I try to resolve the situation', score: 3 },
        { emoji: '💞', text: 'I actively work toward understanding', score: 4 },
      ],
    },
    {
      q: 'How emotionally connected do you feel in your important relationships?',
      options: [
        { emoji: '💔', text: 'Often disconnected', score: 1 },
        { emoji: '😐', text: 'Somewhat connected but inconsistent', score: 2 },
        { emoji: '🙂', text: 'Mostly connected and supportive', score: 3 },
        { emoji: '❤️', text: 'Deeply connected and emotionally secure', score: 4 },
      ],
    },
  ],
  social: [
    {
      q: 'How comfortable are you in social interactions?',
      options: [
        { emoji: '🙈', text: 'I often feel uncomfortable or withdrawn', score: 1 },
        { emoji: '😶', text: 'I participate but feel reserved', score: 2 },
        { emoji: '🙂', text: 'I interact comfortably with most people', score: 3 },
        { emoji: '🤝', text: 'I connect easily and enjoy meaningful conversations', score: 4 },
      ],
    },
    {
      q: 'When meeting new people',
      options: [
        { emoji: '🙃', text: 'I avoid initiating conversation', score: 1 },
        { emoji: '🙂', text: 'I respond if approached', score: 2 },
        { emoji: '👋', text: 'I engage politely and confidently', score: 3 },
        { emoji: '🌟', text: 'I initiate conversations and build connections', score: 4 },
      ],
    },
    {
      q: 'How supported do you feel by your social circle?',
      options: [
        { emoji: '😔', text: 'I often feel alone', score: 1 },
        { emoji: '😕', text: 'I have limited support', score: 2 },
        { emoji: '🙂', text: 'I have some supportive people', score: 3 },
        { emoji: '❤️', text: 'I feel supported by meaningful relationships', score: 4 },
      ],
    },
  ],
  career: [
    {
      q: 'How clear are you about your professional direction?',
      options: [
        { emoji: '🤷', text: 'I feel confused about my path', score: 1 },
        { emoji: '💭', text: 'I have ideas but lack clarity', score: 2 },
        { emoji: '🧭', text: 'I have a general direction', score: 3 },
        { emoji: '🎯', text: 'I have clear goals and direction', score: 4 },
      ],
    },
    {
      q: 'How actively do you develop your skills?',
      options: [
        { emoji: '🚫', text: 'Rarely invest in learning', score: 1 },
        { emoji: '📖', text: 'Occasionally learn when needed', score: 2 },
        { emoji: '📈', text: 'Regularly improve skills', score: 3 },
        { emoji: '🚀', text: 'Consistently invest in growth', score: 4 },
      ],
    },
    {
      q: 'How fulfilled do you feel in your professional life?',
      options: [
        { emoji: '😞', text: 'Mostly dissatisfied', score: 1 },
        { emoji: '😐', text: 'Somewhat satisfied', score: 2 },
        { emoji: '🙂', text: 'Generally fulfilled', score: 3 },
        { emoji: '🌟', text: 'Deeply fulfilled and motivated', score: 4 },
      ],
    },
  ],
  financial: [
    {
      q: 'How aware are you of your financial situation?',
      options: [
        { emoji: '🙈', text: 'I rarely track finances', score: 1 },
        { emoji: '🤔', text: 'I have a rough idea', score: 2 },
        { emoji: '📊', text: 'I monitor income and expenses', score: 3 },
        { emoji: '💼', text: 'I actively manage financial planning', score: 4 },
      ],
    },
    {
      q: 'When making financial decisions',
      options: [
        { emoji: '⚡', text: 'I act impulsively', score: 1 },
        { emoji: '🤷', text: 'I think briefly before deciding', score: 2 },
        { emoji: '🧠', text: 'I consider decisions carefully', score: 3 },
        { emoji: '📈', text: 'I plan finances strategically', score: 4 },
      ],
    },
    {
      q: 'How secure do you feel about your financial future?',
      options: [
        { emoji: '😟', text: 'Very uncertain', score: 1 },
        { emoji: '😕', text: 'Somewhat uncertain', score: 2 },
        { emoji: '🙂', text: 'Moderately confident', score: 3 },
        { emoji: '💪', text: 'Confident and financially prepared', score: 4 },
      ],
    },
  ],
  quality: [
    {
      q: 'How balanced does your life feel right now?',
      options: [
        { emoji: '😩', text: 'Very unbalanced and stressful', score: 1 },
        { emoji: '😐', text: 'Somewhat imbalanced', score: 2 },
        { emoji: '🙂', text: 'Mostly balanced', score: 3 },
        { emoji: '🌟', text: 'Well balanced and fulfilling', score: 4 },
      ],
    },
    {
      q: 'How often do you create time for activities you enjoy?',
      options: [
        { emoji: '🚫', text: 'Rarely', score: 1 },
        { emoji: '🙂', text: 'Occasionally', score: 2 },
        { emoji: '🌿', text: 'Fairly regularly', score: 3 },
        { emoji: '✨', text: 'Frequently', score: 4 },
      ],
    },
    {
      q: 'How satisfied are you with your overall lifestyle?',
      options: [
        { emoji: '😞', text: 'Mostly dissatisfied', score: 1 },
        { emoji: '😐', text: 'Somewhat satisfied', score: 2 },
        { emoji: '🙂', text: 'Generally satisfied', score: 3 },
        { emoji: '🌟', text: 'Highly satisfied', score: 4 },
      ],
    },
  ],
  purpose: [
    {
      q: 'How clear are you about your life direction or purpose?',
      options: [
        { emoji: '😕', text: 'I feel lost about it', score: 1 },
        { emoji: '🤔', text: 'I have vague ideas', score: 2 },
        { emoji: '🌱', text: 'I am developing clarity', score: 3 },
        { emoji: '✨', text: 'I feel strongly aligned with my purpose', score: 4 },
      ],
    },
    {
      q: 'How often do you reflect on your personal growth?',
      options: [
        { emoji: '🚫', text: 'Rarely', score: 1 },
        { emoji: '🙂', text: 'Occasionally', score: 2 },
        { emoji: '🌿', text: 'Fairly regularly', score: 3 },
        { emoji: '🌟', text: 'Very frequently', score: 4 },
      ],
    },
    {
      q: 'To what extent do you feel your life is moving in a meaningful direction?',
      options: [
        { emoji: '🧱', text: 'I feel stuck', score: 1 },
        { emoji: '🤷', text: 'I feel uncertain', score: 2 },
        { emoji: '🌱', text: 'I feel I am progressing', score: 3 },
        { emoji: '🌟', text: 'I feel strongly aligned with my path', score: 4 },
      ],
    },
  ],
  growth: [
    {
      q: 'When faced with challenges',
      options: [
        { emoji: '😓', text: 'I feel discouraged quickly', score: 1 },
        { emoji: '🤷', text: 'I struggle but try to cope', score: 2 },
        { emoji: '💪', text: 'I work through the challenge', score: 3 },
        { emoji: '🚀', text: 'I see challenges as opportunities to grow', score: 4 },
      ],
    },
    {
      q: 'How committed are you to improving yourself?',
      options: [
        { emoji: '😐', text: 'Not very committed', score: 1 },
        { emoji: '🙂', text: 'Somewhat committed', score: 2 },
        { emoji: '💪', text: 'Quite committed', score: 3 },
        { emoji: '🔥', text: 'Deeply committed to growth', score: 4 },
      ],
    },
    {
      q: 'How open are you to learning new perspectives about life?',
      options: [
        { emoji: '🚫', text: 'Resistant to change', score: 1 },
        { emoji: '🤔', text: 'Somewhat open', score: 2 },
        { emoji: '🙂', text: 'Open and curious', score: 3 },
        { emoji: '🌟', text: 'Actively seeking growth and transformation', score: 4 },
      ],
    },
  ],
} as const;

type QuestionSectionId = 'health' | 'emotional' | 'spiritual' | 'love' | 'social' | 'career' | 'financial' | 'quality' | 'purpose' | 'growth';
const questionSectionIds: QuestionSectionId[] = ['health', 'emotional', 'spiritual', 'love', 'social', 'career', 'financial', 'quality', 'purpose', 'growth'];

const sectionOrder = ['intro', 'health', 'emotional', 'spiritual', 'love', 'social', 'career', 'financial', 'quality', 'purpose', 'growth'] as const;
type SectionId = (typeof sectionOrder)[number];

const sectionMeta: Record<SectionId, { icon: string; title: string }> = {
  intro:     { icon: '📋', title: 'Info' },
  health:    { icon: '🧘', title: 'Health' },
  emotional: { icon: '💛', title: 'Emotions' },
  spiritual: { icon: '🌿', title: 'Spiritual' },
  love:      { icon: '❤️', title: 'Love' },
  social:    { icon: '🤝', title: 'Social' },
  career:    { icon: '🚀', title: 'Career' },
  financial: { icon: '💰', title: 'Finance' },
  quality:   { icon: '🌈', title: 'Quality' },
  purpose:   { icon: '🎯', title: 'Purpose' },
  growth:    { icon: '🌟', title: 'Growth' },
};

const sectionFullMeta: Record<QuestionSectionId, { title: string; icon: string; desc: string }> = {
  health:    { title: 'Health & Physical Well-Being',       icon: '🧘', desc: 'These questions focus on your daily energy, physical health habits, and how you respond to stress or fatigue.' },
  emotional: { title: 'Emotional Awareness & Regulation',   icon: '💛', desc: 'These questions explore how you experience, manage, and respond to emotions in daily life.' },
  spiritual: { title: 'Spiritual Connection (Inner Awareness)', icon: '🌿', desc: 'This section focuses on inner reflection and personal awareness, not religious belief.' },
  love:      { title: 'Love & Emotional Intimacy',          icon: '❤️', desc: 'These questions look at how you express emotions, handle misunderstandings, and connect in close relationships.' },
  social:    { title: 'Social Life & Community',            icon: '🤝', desc: 'This section explores your comfort in social settings, how you meet new people, and your sense of support.' },
  career:    { title: 'Career & Professional Growth',       icon: '🚀', desc: 'These questions focus on your professional clarity, skill development, and sense of fulfilment at work.' },
  financial: { title: 'Money & Financial Awareness',        icon: '💰', desc: 'This section looks at your awareness of finances, decision-making, and confidence about your financial future.' },
  quality:   { title: 'Quality of Life',                    icon: '🌈', desc: 'These questions reflect on life balance, personal enjoyment, and overall lifestyle satisfaction.' },
  purpose:   { title: 'Purpose & Meaning in Life',          icon: '🎯', desc: 'These questions explore how clearly you understand your life direction, personal growth, and sense of meaning.' },
  growth:    { title: 'Personal Growth & Self-Leadership',  icon: '🌟', desc: 'This section focuses on how you face challenges, your commitment to growth, and openness to new perspectives.' },
};

const sectionResultMeta: Record<QuestionSectionId, { title: string; icon: string; color: string }> = {
  health:    { title: 'Health & Physical Well-Being',       icon: '🧘', color: '#7C3AED' },
  emotional: { title: 'Emotional Awareness & Regulation',   icon: '💛', color: '#6D28D9' },
  spiritual: { title: 'Spiritual Connection',               icon: '🌿', color: '#C8A951' },
  love:      { title: 'Love & Emotional Intimacy',          icon: '❤️', color: '#7C3AED' },
  social:    { title: 'Social Life & Community',            icon: '🤝', color: '#6D28D9' },
  career:    { title: 'Career & Professional Growth',       icon: '🚀', color: '#C8A951' },
  financial: { title: 'Money & Financial Awareness',        icon: '💰', color: '#7C3AED' },
  quality:   { title: 'Quality of Life',                    icon: '🌈', color: '#6D28D9' },
  purpose:   { title: 'Purpose & Meaning in Life',          icon: '🎯', color: '#C8A951' },
  growth:    { title: 'Personal Growth & Self-Leadership',  icon: '🌟', color: '#7C3AED' },
};

const TOTAL_QS = 30;
const MAX_SCORE = 120;

type Answers = Partial<Record<QuestionSectionId, Record<number, number>>>;

interface PersonInfo {
  name: string;
  age: string;
  profession: string;
  city: string;
  email: string;
  phone: string;
}

const introFields = [
  { id: 'name' as const,       label: 'Name',                   type: 'text',   placeholder: 'Enter your full name',         err: 'Please enter your name' },
  { id: 'age' as const,        label: 'Age',                    type: 'number', placeholder: 'Enter your age',              err: 'Please enter your age' },
  { id: 'profession' as const, label: 'Profession / Occupation', type: 'text',  placeholder: 'Enter your profession',       err: 'Please enter your profession' },
  { id: 'city' as const,       label: 'City',                   type: 'text',   placeholder: 'Enter your city',             err: 'Please enter your city' },
  { id: 'email' as const,      label: 'Email Address',          type: 'email',  placeholder: 'Enter your email address',    err: 'Please enter your email address' },
  { id: 'phone' as const,      label: 'Phone Number',           type: 'tel',    placeholder: 'Enter your phone number',     err: 'Please enter your phone number' },
] as const;

// ─── Domain score interpretation ─────────────────────────────────────────────

function domainInterp(score: number): string {
  if (score >= 10) return 'Strong alignment';
  if (score >= 7)  return 'Developing area';
  if (score >= 4)  return 'Needs attention';
  return 'Immediate growth opportunity';
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AdultAssessmentClient() {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [personInfo, setPersonInfo] = useState<PersonInfo>({
    name: '', age: '', profession: '', city: '', email: '', phone: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof PersonInfo, string>>>({});
  const [results, setResults] = useState<{
    totalScore: number;
    overallPercent: number;
    band: string;
    bandColor: string;
    bandBg: string;
    bandEmoji: string;
    bandDesc: string;
    sectionScores: Record<QuestionSectionId, { score: number; max: number; interp: string }>;
  } | null>(null);
  const [animatedBars, setAnimatedBars] = useState(false);

  const answeredCount = Object.values(answers).reduce(
    (sum, section) => sum + Object.keys(section ?? {}).length, 0,
  );
  const progressPct = results ? 100 : Math.round((answeredCount / TOTAL_QS) * 100);
  const progressLabels = [
    'Getting Started',
    'Health & Physical Well-Being',
    'Emotional Awareness & Regulation',
    'Spiritual Connection',
    'Love & Emotional Intimacy',
    'Social Life & Community',
    'Career & Professional Growth',
    'Money & Financial Awareness',
    'Quality of Life',
    'Purpose & Meaning in Life',
    'Personal Growth & Self-Leadership',
  ];
  const progressText = results
    ? 'Assessment Complete'
    : progressLabels[currentSection] ?? 'Assessment';

  useEffect(() => {
    if (results) {
      const t = setTimeout(() => setAnimatedBars(true), 300);
      return () => clearTimeout(t);
    }
    setAnimatedBars(false);
  }, [results]);

  const validateIntro = useCallback(() => {
    const newErrors: Partial<Record<keyof PersonInfo, string>> = {};
    introFields.forEach(({ id, err }) => {
      if (!personInfo[id].trim()) newErrors[id] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [personInfo]);

  const validateSection = useCallback(
    (sId: QuestionSectionId) =>
      (answers[sId] ? Object.keys(answers[sId]!).length : 0) === questionsData[sId].length,
    [answers],
  );

  const goTo = useCallback((idx: number) => {
    setCurrentSection(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const nextSection = useCallback(() => {
    const sId = sectionOrder[currentSection];
    if (sId === 'intro') {
      if (!validateIntro()) return;
    } else if (questionSectionIds.includes(sId as QuestionSectionId)) {
      if (!validateSection(sId as QuestionSectionId)) {
        alert('Please answer all questions in this section before proceeding.');
        return;
      }
    }
    if (currentSection < sectionOrder.length - 1) goTo(currentSection + 1);
  }, [currentSection, validateIntro, validateSection, goTo]);

  const prevSection = useCallback(() => {
    if (currentSection > 0) goTo(currentSection - 1);
  }, [currentSection, goTo]);

  const selectOption = useCallback((sId: QuestionSectionId, qi: number, score: number) => {
    setAnswers(prev => ({ ...prev, [sId]: { ...(prev[sId] ?? {}), [qi]: score } }));
  }, []);

  const submitAssessment = useCallback(() => {
    if (!validateSection('growth')) {
      alert('Please answer all questions in this section before submitting.');
      return;
    }

    let totalScore = 0;
    const sectionScores = {} as Record<QuestionSectionId, { score: number; max: number; interp: string }>;

    questionSectionIds.forEach(sId => {
      let sTotal = 0;
      const max = questionsData[sId].length * 4;
      if (answers[sId]) Object.values(answers[sId]!).forEach(s => { sTotal += s; totalScore += s; });
      sectionScores[sId] = { score: sTotal, max, interp: domainInterp(sTotal) };
    });

    const overallPercent = Math.round((totalScore / MAX_SCORE) * 100);
    let band: string, bandColor: string, bandBg: string, bandEmoji: string, bandDesc: string;

    if (overallPercent >= 83) {
      band = 'Strong Life Alignment'; bandColor = '#16A34A'; bandBg = 'rgba(22,163,74,0.15)'; bandEmoji = '🌟';
      bandDesc = 'You demonstrate strong life alignment across most areas. Keep building on these strengths and continue your journey of intentional growth.';
    } else if (overallPercent >= 58) {
      band = 'Developing Balance'; bandColor = '#C8A951'; bandBg = 'rgba(200,169,81,0.2)'; bandEmoji = '🌱';
      bandDesc = 'You are developing across multiple life areas with meaningful room to grow. Focused training can help you create deeper alignment and lasting change.';
    } else {
      band = 'Needs Focused Attention'; bandColor = '#EF4444'; bandBg = 'rgba(239,68,68,0.15)'; bandEmoji = '🤲';
      bandDesc = 'Several life areas would benefit from structured guidance and support. This is a powerful starting point - every skill here can be developed with the right approach.';
    }

    setResults({ totalScore, overallPercent, band, bandColor, bandBg, bandEmoji, bandDesc, sectionScores });
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL;
      if (webhookUrl) {
        fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'adult',
            name: personInfo.name,
            age: personInfo.age,
            profession: personInfo.profession,
            city: personInfo.city,
            email: personInfo.email,
            phone: personInfo.phone,
            totalScore,
            resultLevel: band,
            sections: {
              healthPhysical: sectionScores.health.score,
              emotionalAwareness: sectionScores.emotional.score,
              spiritualConnection: sectionScores.spiritual.score,
              loveIntimacy: sectionScores.love.score,
              socialLife: sectionScores.social.score,
              careerProfessional: sectionScores.career.score,
              moneyFinancial: sectionScores.financial.score,
              qualityOfLife: sectionScores.quality.score,
              purposeMeaning: sectionScores.purpose.score,
              personalGrowth: sectionScores.growth.score,
            },
          }),
        }).catch(() => {});
      }
    } catch (_) {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [answers, validateSection, personInfo]);

  if (results) {
    return (
      <ResultsView
        results={results}
        personInfo={personInfo}
        animatedBars={animatedBars}
        progressText={progressText}
      />
    );
  }

  const activeSectionId = sectionOrder[currentSection];
  const isLastSection = currentSection === sectionOrder.length - 1;

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#F3F0FF', minHeight: '100vh' }}>

      {/* ── Fixed Progress Bar ─────────────────────────────────────────────── */}
      <ProgressBar pct={progressPct} label={progressText} />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px 100px' }}>

        {/* ── Header ────────────────────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg, #2D1B69, #7C3AED)',
            color: '#C8A951', padding: '8px 20px', borderRadius: 50,
            fontSize: 12, fontWeight: 700, letterSpacing: '1.5px',
            textTransform: 'uppercase', marginBottom: 20,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            ⭐ Hidden Potential Skills
          </div>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(26px, 5vw, 40px)', color: '#2D1B69',
            lineHeight: 1.2, marginBottom: 12, fontWeight: 800,
          }}>
            Hidden Potential Life Alignment{' '}
            <span style={{ color: '#7C3AED' }}>Assessment</span>
          </h1>
          <p style={{ fontSize: 16, color: '#6B6B6B', maxWidth: 540, margin: '0 auto 8px', lineHeight: 1.6 }}>
            (Adult Life Skills Self-Reflection | Age 22+)
          </p>
          <p style={{ fontSize: 15, color: '#6B6B6B', maxWidth: 540, margin: '0 auto 20px', lineHeight: 1.6 }}>
            This assessment invites you to reflect honestly on different areas of your life. There are no right or wrong answers.
          </p>
          <div style={{
            background: '#EDE9FE', borderLeft: '4px solid #7C3AED',
            padding: '14px 18px', borderRadius: '0 10px 10px 0',
            fontSize: 14, color: '#2D2D2D', lineHeight: 1.5,
            maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', textAlign: 'left',
          }}>
            <strong style={{ color: '#7C3AED' }}>Your responses will help you understand:</strong> your current life patterns, areas of strength, areas that may need growth, and how your life alignment improves after training.
          </div>
          <p style={{ fontSize: 14, color: '#6B6B6B', maxWidth: 540, margin: '16px auto 0', lineHeight: 1.5 }}>
            Please choose the option that <strong>most closely reflects your present reality.</strong>
          </p>
        </div>

        {/* ── Section Nav Pills ──────────────────────────────────────────────── */}
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
          {sectionOrder.map((sId, i) => {
            const m = sectionMeta[sId];
            const isActive = i === currentSection;
            const isDone = i < currentSection;
            return (
              <div key={sId} style={{
                display: 'flex', alignItems: 'center', gap: 4,
                padding: '6px 14px', borderRadius: 50, fontSize: 12,
                fontWeight: 600, cursor: 'default',
                background: isActive ? '#7C3AED' : isDone ? '#EDE9FE' : '#fff',
                color: isActive ? '#fff' : isDone ? '#7C3AED' : '#6B6B6B',
                border: `2px solid ${isActive ? 'transparent' : isDone ? '#7C3AED' : '#e5e7eb'}`,
                transform: isActive ? 'scale(1.05)' : 'none',
                boxShadow: isActive ? '0 4px 15px rgba(124,58,237,0.3)' : 'none',
                transition: 'all 0.3s ease',
              }}>
                {m.icon} {m.title}
              </div>
            );
          })}
        </div>

        {/* ── Section 0: Basic Information ─────────────────────────────────── */}
        {activeSectionId === 'intro' && (
          <Card>
            <SectionHeader icon="📋" iconBg="rgba(124,58,237,0.1)" title="Basic Information" />
            <p style={{ fontSize: 15, color: '#6B6B6B', marginTop: 12, marginBottom: 28 }}>
              Please fill in your details before starting the assessment.
            </p>
            {introFields.map(field => (
              <div key={field.id} style={{ marginBottom: 22 }}>
                <label style={{ display: 'block', fontWeight: 600, fontSize: 14, color: '#2D1B69', marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {field.label} <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type={field.type}
                  value={personInfo[field.id]}
                  placeholder={field.placeholder}
                  onChange={e => {
                    setPersonInfo(prev => ({ ...prev, [field.id]: e.target.value }));
                    if (errors[field.id]) setErrors(prev => ({ ...prev, [field.id]: undefined }));
                  }}
                  style={{
                    width: '100%', padding: '14px 18px', boxSizing: 'border-box',
                    border: `2px solid ${errors[field.id] ? '#EF4444' : '#e5e7eb'}`,
                    borderRadius: 12, fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15, color: '#2D2D2D', background: '#fafafa', outline: 'none',
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = '#7C3AED';
                    e.target.style.background = '#fff';
                    e.target.style.boxShadow = '0 0 0 4px rgba(124,58,237,0.1)';
                  }}
                  onBlur={e => {
                    if (!errors[field.id]) e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                {errors[field.id] && (
                  <p style={{ color: '#EF4444', fontSize: 13, fontWeight: 500, marginTop: 6 }}>
                    {errors[field.id]}
                  </p>
                )}
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 32 }}>
              <Btn variant="next" onClick={nextSection}>Begin Assessment →</Btn>
            </div>
          </Card>
        )}

        {/* ── Question Sections ─────────────────────────────────────────────── */}
        {questionSectionIds.map(sId => {
          if (activeSectionId !== sId) return null;
          const meta = sectionFullMeta[sId];
          return (
            <Card key={sId}>
              <SectionHeader icon={meta.icon} iconBg="rgba(124,58,237,0.1)" title={meta.title} />
              <p style={{ fontSize: 15, color: '#6B6B6B', lineHeight: 1.6, marginBottom: 28, paddingLeft: 62 }}>
                {meta.desc}
              </p>
              {questionsData[sId].map((q, qi) => {
                const selected = answers[sId]?.[qi];
                return (
                  <div key={qi} style={{ marginBottom: 28 }}>
                    <div style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: 1,
                      textTransform: 'uppercase', color: '#7C3AED', marginBottom: 8,
                    }}>
                      Question {qi + 1} of 3
                    </div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: '#2D1B69', marginBottom: 14, lineHeight: 1.4 }}>
                      {q.q}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {q.options.map((opt, oi) => {
                        const isSelected = selected === opt.score;
                        return (
                          <div
                            key={oi}
                            onClick={() => selectOption(sId, qi, opt.score)}
                            style={{
                              display: 'flex', alignItems: 'center', gap: 14,
                              padding: '16px 20px', borderRadius: 14, cursor: 'pointer',
                              border: `2px solid ${isSelected ? '#7C3AED' : '#e5e7eb'}`,
                              background: isSelected ? '#EDE9FE' : '#fafafa',
                              position: 'relative', overflow: 'hidden',
                              transform: isSelected ? 'translateX(4px)' : 'none',
                              boxShadow: isSelected ? '0 4px 20px rgba(124,58,237,0.15)' : 'none',
                              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                            }}
                          >
                            {isSelected && (
                              <div style={{
                                position: 'absolute', left: 0, top: 0, bottom: 0, width: 4,
                                background: '#7C3AED', borderRadius: '12px 0 0 12px',
                              }} />
                            )}
                            <div style={{
                              fontSize: 22, flexShrink: 0, width: 36, height: 36,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              background: '#fff', borderRadius: 10,
                              boxShadow: isSelected ? '0 2px 12px rgba(124,58,237,0.2)' : '0 2px 8px rgba(0,0,0,0.04)',
                            }}>
                              {opt.emoji}
                            </div>
                            <div style={{ fontSize: 15, fontWeight: 500, color: '#2D2D2D', flexGrow: 1 }}>
                              {opt.text}
                            </div>
                            <div style={{
                              width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                              border: `2px solid ${isSelected ? '#7C3AED' : '#d1d5db'}`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              background: isSelected ? '#7C3AED' : 'transparent',
                              transition: 'all 0.3s ease',
                            }}>
                              {isSelected && <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>✓</span>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32, gap: 12 }}>
                <Btn variant="back" onClick={prevSection}>← Back</Btn>
                {isLastSection
                  ? <Btn variant="submit" onClick={submitAssessment}>Submit Assessment ✨</Btn>
                  : <Btn variant="next" onClick={nextSection}>Next Section →</Btn>
                }
              </div>
            </Card>
          );
        })}

      </div>
    </div>
  );
}

// ─── Results View ─────────────────────────────────────────────────────────────

function ResultsView({ results, personInfo, animatedBars, progressText }: {
  results: NonNullable<ReturnType<typeof useState<any>>[0]>;
  personInfo: PersonInfo;
  animatedBars: boolean;
  progressText: string;
}) {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#F3F0FF', minHeight: '100vh' }}>
      <ProgressBar pct={100} label={progressText} />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '80px 20px 40px' }}>

        {/* Print */}
        <button
          onClick={() => window.print()}
          style={{
            width: '100%', padding: '14px 24px', borderRadius: 12, fontSize: 15,
            fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: 'pointer',
            marginBottom: 28, background: '#fff', color: '#2D1B69', border: '2px solid #2D1B69',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#2D1B69'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.color = '#2D1B69'; }}
        >
          🖨️ Print / Save as PDF
        </button>

        {/* Profile */}
        <div style={{
          background: '#fff', borderRadius: 16, padding: '22px 24px',
          boxShadow: '0 2px 20px rgba(45,27,105,0.06)', marginBottom: 28,
          border: '1px solid rgba(45,27,105,0.05)',
        }}>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 700, color: '#2D1B69', marginBottom: 14 }}>
            Participant Profile
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { label: 'Name',        value: personInfo.name },
              { label: 'Age',         value: `${personInfo.age} years` },
              { label: 'Profession',  value: personInfo.profession },
              { label: 'City',        value: personInfo.city },
              { label: 'Email',       value: personInfo.email },
              { label: 'Phone',       value: personInfo.phone },
            ].map(item => (
              <div key={item.label} style={{ padding: '10px 14px', background: '#F3F0FF', borderRadius: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#6B6B6B', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#2D1B69', marginTop: 2, wordBreak: 'break-word' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Score Hero */}
        <div style={{
          background: 'linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)',
          borderRadius: 24, padding: '48px 36px', textAlign: 'center',
          color: '#fff', marginBottom: 28, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(200,169,81,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '-30%', left: '-10%', width: 250, height: 250, background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>{results.bandEmoji}</div>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.8, marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Total Score
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 64, fontWeight: 800, lineHeight: 1, marginBottom: 4 }}>
              {results.totalScore}<span style={{ fontSize: 28, opacity: 0.6 }}>/{MAX_SCORE}</span>
            </div>
            <div style={{ fontSize: 15, opacity: 0.7, marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              ({results.overallPercent}%)
            </div>
            <div style={{
              display: 'inline-block', padding: '8px 24px', borderRadius: 50,
              fontWeight: 700, fontSize: 15, marginTop: 8,
              background: results.bandBg, color: results.bandColor,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              {results.band}
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.85, marginTop: 16, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
              {results.bandDesc}
            </p>
          </div>
        </div>

        {/* Score Legend */}
        <div style={{
          background: '#fff', borderRadius: 16, padding: '18px 24px', marginBottom: 20,
          border: '1px solid rgba(45,27,105,0.06)',
        }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: '#2D1B69', marginBottom: 12 }}>Domain Score Guide (out of 12)</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { range: '10–12', label: 'Strong alignment',             color: '#16A34A' },
              { range: '7–9',   label: 'Developing area',              color: '#C8A951' },
              { range: '4–6',   label: 'Needs attention',              color: '#F97316' },
              { range: '3',     label: 'Immediate growth opportunity',  color: '#EF4444' },
            ].map(item => (
              <div key={item.range} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                <span style={{ fontWeight: 800, color: item.color, minWidth: 36 }}>{item.range}</span>
                <span style={{ color: '#6B6B6B' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Scores */}
        <div style={{ display: 'grid', gap: 14, marginBottom: 28 }}>
          {questionSectionIds.map(sId => {
            const s = results.sectionScores[sId];
            const meta = sectionResultMeta[sId];
            const barPct = Math.round((s.score / s.max) * 100);
            return (
              <div key={sId} style={{
                background: '#fff', borderRadius: 16, padding: '22px 24px',
                boxShadow: '0 2px 20px rgba(45,27,105,0.05)', border: '1px solid rgba(45,27,105,0.04)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 15, color: '#2D1B69', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ fontSize: 20 }}>{meta.icon}</span> {meta.title}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 18, color: meta.color }}>{s.score}/{s.max}</div>
                </div>
                <div style={{ height: 10, background: '#f3f4f6', borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 10, background: meta.color,
                    width: animatedBars ? `${barPct}%` : '0%',
                    transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
                  }} />
                </div>
                <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 8 }}>
                  {s.interp}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #7C3AED, #2D1B69)',
          borderRadius: 20, padding: 36, textAlign: 'center', color: '#fff',
        }}>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 10, color: '#ffffff' }}>
            Want to Develop These Skills?
          </h3>
          <p style={{ fontSize: 15, opacity: 0.9, marginBottom: 20, lineHeight: 1.5 }}>
            Hidden Potential Skills offers personalised life skills training programs for adults, designed to build alignment across every area measured in this assessment.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', background: '#fff', color: '#7C3AED',
              borderRadius: 12, fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
            }}
          >
            Book a Free Consultation →
          </Link>
        </div>

      </div>
    </div>
  );
}

// ─── Shared primitives ────────────────────────────────────────────────────────

function ProgressBar({ pct, label }: { pct: number; label: string }) {
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40,
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
      boxShadow: '0 -2px 20px rgba(45,27,105,0.1)',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '10px 24px 8px', maxWidth: 800, margin: '0 auto',
      }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#2D1B69', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label}</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#7C3AED' }}>{pct}%</span>
      </div>
      <div style={{ height: 5, background: '#e5e7eb' }}>
        <div style={{
          height: '100%', background: 'linear-gradient(90deg, #7C3AED, #2D1B69, #C8A951)',
          backgroundSize: '200% 100%', width: `${pct}%`,
          transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)', borderRadius: '0 3px 3px 0',
        }} />
      </div>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 20, padding: 36,
      boxShadow: '0 4px 30px rgba(45,27,105,0.07)', marginBottom: 24,
      border: '1px solid rgba(45,27,105,0.04)',
    }}>
      {children}
    </div>
  );
}

function SectionHeader({ icon, iconBg, title }: { icon: string; iconBg: string; title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
      <div style={{
        width: 48, height: 48, borderRadius: 14, display: 'flex',
        alignItems: 'center', justifyContent: 'center', fontSize: 24,
        flexShrink: 0, background: iconBg,
      }}>
        {icon}
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 700, color: '#2D1B69' }}>
        {title}
      </div>
    </div>
  );
}

function Btn({ variant, onClick, children }: {
  variant: 'back' | 'next' | 'submit';
  onClick: () => void;
  children: React.ReactNode;
}) {
  if (variant === 'back') return (
    <button onClick={onClick} style={{
      padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700,
      fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: 'pointer',
      background: 'transparent', color: '#6B6B6B', border: '2px solid #e5e7eb',
      display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.3s ease',
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2D1B69'; (e.currentTarget as HTMLElement).style.color = '#2D1B69'; }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLElement).style.color = '#6B6B6B'; }}>
      {children}
    </button>
  );

  const isSubmit = variant === 'submit';
  return (
    <button onClick={onClick} style={{
      padding: isSubmit ? '16px 40px' : '14px 32px',
      fontSize: isSubmit ? 16 : 15, borderRadius: 12, fontWeight: 700,
      fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: 'pointer', border: 'none',
      background: 'linear-gradient(135deg, #2D1B69, #7C3AED)', color: '#fff',
      boxShadow: '0 4px 20px rgba(45,27,105,0.3)',
      display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.3s ease',
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(45,27,105,0.4)'; }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(45,27,105,0.3)'; }}>
      {children}
    </button>
  );
}

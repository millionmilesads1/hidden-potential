'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// ─── Data ────────────────────────────────────────────────────────────────────

const questionsData = {
  section1: [
    {
      q: 'When homework is given, I usually...',
      options: [
        { emoji: '⏰', text: 'Wait for reminders', score: 1 },
        { emoji: '📝', text: 'Do it late but somehow finish', score: 2 },
        { emoji: '✅', text: 'Plan and complete it on time', score: 3 },
      ],
    },
    {
      q: 'Before starting my day (school / classes), I usually...',
      options: [
        { emoji: '😰', text: 'Forget things or rush', score: 1 },
        { emoji: '😊', text: 'Manage some things myself', score: 2 },
        { emoji: '🎒', text: 'Prepare materials properly', score: 3 },
      ],
    },
    {
      q: 'When academic work is assigned...',
      options: [
        { emoji: '😴', text: 'I delay or avoid starting', score: 1 },
        { emoji: '🌀', text: 'I start but get distracted', score: 2 },
        { emoji: '🚀', text: 'I start and complete it in one go', score: 3 },
      ],
    },
    {
      q: 'When I have multiple subjects or tasks...',
      options: [
        { emoji: '🤯', text: 'I feel confused', score: 1 },
        { emoji: '🔄', text: 'I switch between tasks', score: 2 },
        { emoji: '🎯', text: 'I prioritise and complete systematically', score: 3 },
      ],
    },
    {
      q: "When I don't understand something...",
      options: [
        { emoji: '😶', text: 'I stay silent', score: 1 },
        { emoji: '👥', text: 'I ask peers later', score: 2 },
        { emoji: '🙋', text: 'I ask confidently', score: 3 },
      ],
    },
  ],
  section2: [
    {
      q: 'Managing daily responsibilities...',
      options: [
        { emoji: '🔔', text: 'I need frequent reminders', score: 1 },
        { emoji: '📗', text: 'I manage some tasks independently', score: 2 },
        { emoji: '🌟', text: 'I handle most responsibilities on my own', score: 3 },
      ],
    },
    {
      q: 'When I make a mistake...',
      options: [
        { emoji: '🙈', text: 'I deny or defend it', score: 1 },
        { emoji: '😔', text: 'I accept but feel scared or guilty', score: 2 },
        { emoji: '🔧', text: 'I take responsibility and correct it', score: 3 },
      ],
    },
    {
      q: 'When a task is clearly my responsibility...',
      options: [
        { emoji: '🙄', text: 'I avoid it', score: 1 },
        { emoji: '🔁', text: 'I do it after reminders', score: 2 },
        { emoji: '🏆', text: 'I complete it without reminders', score: 3 },
      ],
    },
    {
      q: 'Balancing work, personal time and interests...',
      options: [
        { emoji: '😩', text: 'Feels tiring and confusing', score: 1 },
        { emoji: '⚖️', text: 'I somehow adjust', score: 2 },
        { emoji: '📊', text: 'I plan and balance effectively', score: 3 },
      ],
    },
    {
      q: 'When I have to manage things on my own...',
      options: [
        { emoji: '🧍', text: 'I wait for instructions', score: 1 },
        { emoji: '📦', text: 'I manage basic tasks', score: 2 },
        { emoji: '💪', text: 'I handle routines confidently', score: 3 },
      ],
    },
  ],
  section3: [
    {
      q: 'When I am corrected or scolded...',
      options: [
        { emoji: '😤', text: 'I react strongly or shut down', score: 1 },
        { emoji: '😢', text: 'I stay upset for long', score: 2 },
        { emoji: '🌱', text: 'I try to improve myself', score: 3 },
      ],
    },
    {
      q: 'When I fail or lose...',
      options: [
        { emoji: '🛑', text: 'I give up easily', score: 1 },
        { emoji: '😞', text: 'I feel discouraged', score: 2 },
        { emoji: '🔄', text: 'I practise and try again', score: 3 },
      ],
    },
    {
      q: 'When someone speaks rudely to me...',
      options: [
        { emoji: '😡', text: 'I react aggressively', score: 1 },
        { emoji: '🚶', text: 'I avoid the situation', score: 2 },
        { emoji: '💬', text: 'I respond calmly', score: 3 },
      ],
    },
    {
      q: 'When plans change suddenly...',
      options: [
        { emoji: '😣', text: 'I get very upset', score: 1 },
        { emoji: '🤐', text: 'I withdraw', score: 2 },
        { emoji: '🔄', text: 'I adjust and move on', score: 3 },
      ],
    },
    {
      q: 'When I feel angry or overwhelmed...',
      options: [
        { emoji: '💥', text: 'I react immediately', score: 1 },
        { emoji: '😶', text: 'I suppress my feelings', score: 2 },
        { emoji: '🧘', text: 'I try to calm myself first', score: 3 },
      ],
    },
  ],
  section4: [
    {
      q: 'When studying and tempted by screens...',
      options: [
        { emoji: '🖥️', text: 'I stop studying', score: 1 },
        { emoji: '⚠️', text: 'I try but get distracted', score: 2 },
        { emoji: '🎯', text: 'I stay focused till I finish', score: 3 },
      ],
    },
    {
      q: 'When asked to stop screen usage...',
      options: [
        { emoji: '😤', text: 'I argue or resist', score: 1 },
        { emoji: '😒', text: 'I stop but feel irritated', score: 2 },
        { emoji: '👍', text: 'I stop and return to routine', score: 3 },
      ],
    },
    {
      q: 'When I see disturbing or confusing content online...',
      options: [
        { emoji: '👀', text: 'I continue watching', score: 1 },
        { emoji: '😟', text: "I feel worried but don't tell anyone", score: 2 },
        { emoji: '🛡️', text: 'I inform a trusted adult / authority', score: 3 },
      ],
    },
    {
      q: 'When using devices for work or study...',
      options: [
        { emoji: '🎮', text: 'I switch to entertainment', score: 1 },
        { emoji: '🌀', text: 'I multitask poorly', score: 2 },
        { emoji: '📚', text: 'I use it only for the intended purpose', score: 3 },
      ],
    },
    {
      q: 'When screen time is limited...',
      options: [
        { emoji: '😠', text: 'I complain', score: 1 },
        { emoji: '😐', text: 'I feel upset but comply', score: 2 },
        { emoji: '🤝', text: 'I understand and follow limits', score: 3 },
      ],
    },
  ],
  section5: [
    {
      q: 'In group situations...',
      options: [
        { emoji: '😶', text: 'I avoid participating', score: 1 },
        { emoji: '😊', text: 'I participate but hesitate', score: 2 },
        { emoji: '💡', text: 'I share ideas and listen', score: 3 },
      ],
    },
    {
      q: 'When someone hurts my feelings...',
      options: [
        { emoji: '⚔️', text: 'I fight or cut off', score: 1 },
        { emoji: '🚪', text: 'I avoid the situation', score: 2 },
        { emoji: '🗣️', text: 'I express myself calmly', score: 3 },
      ],
    },
    {
      q: 'When someone needs help...',
      options: [
        { emoji: '🚫', text: 'I ignore it', score: 1 },
        { emoji: '🤔', text: 'I think about helping', score: 2 },
        { emoji: '🤲', text: 'I support them', score: 3 },
      ],
    },
    {
      q: 'When I meet people different from me...',
      options: [
        { emoji: '😒', text: 'I judge or tease', score: 1 },
        { emoji: '🧱', text: 'I keep distance', score: 2 },
        { emoji: '🌍', text: 'I respect and include', score: 3 },
      ],
    },
    {
      q: 'During conflicts...',
      options: [
        { emoji: '👎', text: 'I complain or blame', score: 1 },
        { emoji: '🚶', text: 'I walk away', score: 2 },
        { emoji: '⚖️', text: 'I try to resolve it', score: 3 },
      ],
    },
  ],
} as const;

type QuestionSectionId = 'section1' | 'section2' | 'section3' | 'section4' | 'section5';
const questionSectionIds: QuestionSectionId[] = ['section1', 'section2', 'section3', 'section4', 'section5'];

const sectionOrder = ['intro', 'section1', 'section2', 'section3', 'section4', 'section5', 'reflection'] as const;
type SectionId = (typeof sectionOrder)[number];

const sectionMeta: Record<SectionId, { icon: string; title: string }> = {
  intro:      { icon: '📋', title: 'Info' },
  section1:   { icon: '📖', title: 'Study' },
  section2:   { icon: '🚀', title: 'Routine' },
  section3:   { icon: '💖', title: 'Emotions' },
  section4:   { icon: '📱', title: 'Digital' },
  section5:   { icon: '🤝', title: 'Social' },
  reflection: { icon: '✍️', title: 'Reflect' },
};

const sectionFullMeta: Record<QuestionSectionId, { title: string; icon: string; desc: string }> = {
  section1: {
    title: 'School & Study Readiness',
    icon: '📖',
    desc: "These questions look at how you manage studies, learning tasks, and classroom behaviour. Choose what feels closest to your usual behaviour, not what sounds ideal. 😊",
  },
  section2: {
    title: 'Routine, Independence & Responsibility',
    icon: '🚀',
    desc: 'This section focuses on daily routines, responsibility, and self-management in everyday life.',
  },
  section3: {
    title: 'Emotional Awareness & Behaviour',
    icon: '💖',
    desc: 'These questions help understand how you experience, manage, and express emotions in daily situations.',
  },
  section4: {
    title: 'Digital Awareness & Screen Discipline',
    icon: '📱',
    desc: 'This section looks at how you use screens, mobile devices, and the internet responsibly.',
  },
  section5: {
    title: 'Social Skills, Friendship & Group Behaviour',
    icon: '🤝',
    desc: 'These questions focus on relationships, communication, teamwork, and empathy.',
  },
};

const sectionResultMeta: Record<QuestionSectionId, { title: string; icon: string; color: string }> = {
  section1: { title: 'School & Study Readiness',                    icon: '📖', color: '#7C3AED' },
  section2: { title: 'Routine, Independence & Responsibility',      icon: '🚀', color: '#6D28D9' },
  section3: { title: 'Emotional Awareness & Behaviour',             icon: '💖', color: '#C8A951' },
  section4: { title: 'Digital Awareness & Screen Discipline',       icon: '📱', color: '#7C3AED' },
  section5: { title: 'Social Skills, Friendship & Group Behaviour', icon: '🤝', color: '#6D28D9' },
};

const TOTAL_QS = 25;

type Answers = Partial<Record<QuestionSectionId, Record<number, number>>>;

interface StudentInfo {
  studentName: string;
  studentAge: string;
  schoolName: string;
  studentClass: string;
  parentName: string;
  parentPhone: string;
}

const introFields = [
  { id: 'studentName' as const,  label: 'Student Name',          type: 'text',   placeholder: 'Enter your full name',        err: 'Please enter your name' },
  { id: 'studentAge' as const,   label: 'Age',                   type: 'number', placeholder: 'Enter your age',             err: 'Please enter your age' },
  { id: 'schoolName' as const,   label: 'School Name',           type: 'text',   placeholder: 'Enter your school name',      err: 'Please enter your school name' },
  { id: 'studentClass' as const, label: 'Class / Grade',         type: 'text',   placeholder: 'e.g., 8th, 10th, 12th',      err: 'Please enter your class/grade' },
  { id: 'parentName' as const,   label: 'Parent Name',           type: 'text',   placeholder: 'Enter parent/guardian name',  err: 'Please enter parent name' },
  { id: 'parentPhone' as const,  label: 'Parent Contact Number', type: 'tel',    placeholder: 'Enter contact number',        err: 'Please enter contact number' },
] as const;

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AssessmentClient() {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    studentName: '', studentAge: '', schoolName: '',
    studentClass: '', parentName: '', parentPhone: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof StudentInfo, string>>>({});
  const [reflection1, setReflection1] = useState('');
  const [reflection2, setReflection2] = useState('');
  const [results, setResults] = useState<{
    overallPercent: number;
    band: string;
    bandColor: string;
    bandBg: string;
    bandEmoji: string;
    bandDesc: string;
    sectionScores: Record<QuestionSectionId, { score: number; max: number; percent: number }>;
  } | null>(null);
  const [animatedBars, setAnimatedBars] = useState(false);

  const answeredCount = Object.values(answers).reduce(
    (sum, section) => sum + Object.keys(section ?? {}).length, 0,
  );
  const progressPct = results ? 100 : Math.round((answeredCount / TOTAL_QS) * 100);
  const progressLabels = [
    'Getting Started', 'School & Study', 'Routine & Responsibility',
    'Emotional Awareness', 'Digital Discipline', 'Social Skills', 'Final Reflection',
  ];
  const progressText = results
    ? 'Screening Complete'
    : progressLabels[currentSection] ?? 'Assessment';

  useEffect(() => {
    if (results) {
      const t = setTimeout(() => setAnimatedBars(true), 300);
      return () => clearTimeout(t);
    }
    setAnimatedBars(false);
  }, [results]);

  const validateIntro = useCallback(() => {
    const newErrors: Partial<Record<keyof StudentInfo, string>> = {};
    introFields.forEach(({ id, err }) => {
      if (!studentInfo[id].trim()) newErrors[id] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [studentInfo]);

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
    } else if (sId !== 'reflection' && questionSectionIds.includes(sId as QuestionSectionId)) {
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
    let totalScore = 0;
    const sectionScores = {} as Record<QuestionSectionId, { score: number; max: number; percent: number }>;

    questionSectionIds.forEach(sId => {
      let sTotal = 0;
      const max = questionsData[sId].length * 3;
      if (answers[sId]) Object.values(answers[sId]!).forEach(s => { sTotal += s; totalScore += s; });
      sectionScores[sId] = { score: sTotal, max, percent: Math.round((sTotal / max) * 100) };
    });

    const overall = Math.round((totalScore / (TOTAL_QS * 3)) * 100);
    let band: string, bandColor: string, bandBg: string, bandEmoji: string, bandDesc: string;

    if (overall >= 80) {
      band = 'Strong Skill Behaviour'; bandColor = '#16A34A'; bandBg = 'rgba(22,163,74,0.15)'; bandEmoji = '🌟';
      bandDesc = 'You demonstrate strong life skills across most areas. Keep building on these strengths and consider mentoring others who are still developing.';
    } else if (overall >= 50) {
      band = 'Developing'; bandColor = '#C8A951'; bandBg = 'rgba(200,169,81,0.2)'; bandEmoji = '🌱';
      bandDesc = 'You are on the right track with room to grow. Focused training in specific areas can help you level up your daily habits, emotional responses, and social interactions.';
    } else {
      band = 'Needs Support'; bandColor = '#EF4444'; bandBg = 'rgba(239,68,68,0.15)'; bandEmoji = '🤲';
      bandDesc = 'You would benefit from structured life skills guidance. This is a starting point, not a limitation. With the right support, every skill here can be developed.';
    }

    setResults({ overallPercent: overall, band, bandColor, bandBg, bandEmoji, bandDesc, sectionScores });
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL;
      if (webhookUrl) {
        fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'student',
            name: studentInfo.studentName,
            age: studentInfo.studentAge,
            school: studentInfo.schoolName,
            email: '',
            phone: studentInfo.parentPhone,
            totalScore,
            resultLevel: band,
            sections: {
              selfAwareness: sectionScores.section1.score,
              emotionalIntelligence: sectionScores.section3.score,
              communication: 0,
              socialSkills: sectionScores.section5.score,
              responsibility: sectionScores.section2.score,
              criticalThinking: 0,
              creativity: 0,
              digitalLiteracy: sectionScores.section4.score,
              healthWellness: 0,
              goalSetting: 0,
            },
          }),
        }).catch(() => {});
      }
    } catch (_) {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [answers, studentInfo]);

  if (results) {
    return (
      <ResultsView
        results={results}
        studentInfo={studentInfo}
        animatedBars={animatedBars}
        progressText={progressText}
      />
    );
  }

  const activeSectionId = sectionOrder[currentSection];

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
            Life Skills & Behavioral{' '}
            <span style={{ color: '#7C3AED' }}>Readiness Screening</span>
          </h1>
          <p style={{ fontSize: 16, color: '#6B6B6B', maxWidth: 540, margin: '0 auto 20px', lineHeight: 1.6 }}>
            This assessment helps students reflect on their daily habits, learning behaviour, emotions, relationships, digital usage and decision-making.
          </p>
          <div style={{
            background: '#EDE9FE', borderLeft: '4px solid #7C3AED',
            padding: '14px 18px', borderRadius: '0 10px 10px 0',
            fontSize: 14, color: '#2D2D2D', lineHeight: 1.5,
            maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', textAlign: 'left',
          }}>
            <strong style={{ color: '#7C3AED' }}>Note:</strong> This is NOT a psychological test. It is a developmental life-skills screening tool designed to build self-awareness, identify behavioural patterns, and highlight growth areas for training and guidance.
          </div>
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

        {/* ── Section 0: Student Info ───────────────────────────────────────── */}
        {activeSectionId === 'intro' && (
          <Card>
            <SectionHeader icon="📋" iconBg="rgba(124,58,237,0.1)" title="Student Information" />
            <p style={{ fontSize: 15, color: '#6B6B6B', marginTop: 12, marginBottom: 28 }}>
              Please fill in your details before starting the screening.
            </p>
            {introFields.map(field => (
              <div key={field.id} style={{ marginBottom: 22 }}>
                <label style={{ display: 'block', fontWeight: 600, fontSize: 14, color: '#2D1B69', marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {field.label} <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type={field.type}
                  value={studentInfo[field.id]}
                  placeholder={field.placeholder}
                  onChange={e => {
                    setStudentInfo(prev => ({ ...prev, [field.id]: e.target.value }));
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
              <Btn variant="next" onClick={nextSection}>Begin Screening →</Btn>
            </div>
          </Card>
        )}

        {/* ── Sections 1–5: Questions ───────────────────────────────────────── */}
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
                      Question {qi + 1} of 5
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
                <Btn variant="next" onClick={nextSection}>Next Section →</Btn>
              </div>
            </Card>
          );
        })}

        {/* ── Section 6: Final Reflection ───────────────────────────────────── */}
        {activeSectionId === 'reflection' && (
          <Card>
            <SectionHeader icon="✍️" iconBg="rgba(200,169,81,0.1)" title="Final Reflection" />
            <p style={{ fontSize: 15, color: '#6B6B6B', marginTop: 12, marginBottom: 28 }}>
              Take a moment to reflect honestly. There are no right or wrong answers here.
            </p>
            {[
              { label: 'One habit that is making my daily life difficult is...', value: reflection1, set: setReflection1 },
              { label: 'One skill I genuinely want to improve is...', value: reflection2, set: setReflection2 },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 17, fontWeight: 700, color: '#2D1B69', marginBottom: 14, lineHeight: 1.4 }}>
                  {item.label}
                </div>
                <textarea
                  value={item.value}
                  onChange={e => item.set(e.target.value)}
                  placeholder="Write your honest answer here..."
                  rows={3}
                  style={{
                    width: '100%', padding: '16px 18px', boxSizing: 'border-box',
                    border: '2px solid #e5e7eb', borderRadius: 12,
                    fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: '#2D2D2D',
                    resize: 'vertical', background: '#fafafa', outline: 'none',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#C8A951'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 4px rgba(200,169,81,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32, gap: 12 }}>
              <Btn variant="back" onClick={prevSection}>← Back</Btn>
              <Btn variant="submit" onClick={submitAssessment}>Submit Screening ✨</Btn>
            </div>
          </Card>
        )}

      </div>
    </div>
  );
}

// ─── Results View ─────────────────────────────────────────────────────────────

function ResultsView({ results, studentInfo, animatedBars, progressText }: {
  results: NonNullable<ReturnType<typeof useState<any>>[0]>;
  studentInfo: StudentInfo;
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

        {/* Student Profile */}
        <div style={{
          background: '#fff', borderRadius: 16, padding: '22px 24px',
          boxShadow: '0 2px 20px rgba(45,27,105,0.06)', marginBottom: 28,
          border: '1px solid rgba(45,27,105,0.05)',
        }}>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 700, color: '#2D1B69', marginBottom: 14 }}>
            Student Profile
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { label: 'Name',    value: studentInfo.studentName },
              { label: 'Age',     value: `${studentInfo.studentAge} years` },
              { label: 'School',  value: studentInfo.schoolName },
              { label: 'Class',   value: studentInfo.studentClass },
              { label: 'Parent',  value: studentInfo.parentName },
              { label: 'Contact', value: studentInfo.parentPhone },
            ].map(item => (
              <div key={item.label} style={{ padding: '10px 14px', background: '#F3F0FF', borderRadius: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#6B6B6B', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#2D1B69', marginTop: 2 }}>
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
              Overall Score
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 64, fontWeight: 800, lineHeight: 1, marginBottom: 4 }}>
              {results.overallPercent}<span style={{ fontSize: 28, opacity: 0.6 }}>%</span>
            </div>
            <div style={{
              display: 'inline-block', padding: '8px 24px', borderRadius: 50,
              fontWeight: 700, fontSize: 15, marginTop: 16,
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

        {/* Section Scores */}
        <div style={{ display: 'grid', gap: 14, marginBottom: 28 }}>
          {questionSectionIds.map(sId => {
            const s = results.sectionScores[sId];
            const meta = sectionResultMeta[sId];
            const interp = s.percent >= 80 ? 'Strong. Keep it up!' : s.percent >= 50 ? 'Developing. Room to grow.' : 'Needs focused support.';
            return (
              <div key={sId} style={{
                background: '#fff', borderRadius: 16, padding: '22px 24px',
                boxShadow: '0 2px 20px rgba(45,27,105,0.05)', border: '1px solid rgba(45,27,105,0.04)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 15, color: '#2D1B69', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ fontSize: 20 }}>{meta.icon}</span> {meta.title}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 18, color: meta.color }}>{s.percent}%</div>
                </div>
                <div style={{ height: 10, background: '#f3f4f6', borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 10, background: meta.color,
                    width: animatedBars ? `${s.percent}%` : '0%',
                    transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
                  }} />
                </div>
                <div style={{ fontSize: 13, color: '#6B6B6B', marginTop: 8 }}>
                  {interp} ({s.score}/{s.max} points)
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
            Hidden Potential Skills offers NEP 2020 aligned life skills training programs for students, designed to build the exact competencies measured in this screening.
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

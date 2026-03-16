import type { Metadata } from 'next';
import AdultAssessmentClient from './AdultAssessmentClient';

export const metadata: Metadata = {
  title: { absolute: 'Adult Life Alignment Assessment | Hidden Potential Skills' },
  description:
    'Take the Hidden Potential Life Alignment Assessment (Age 22+). Reflect on 10 life areas — health, emotions, relationships, career, finance, and more — to discover your growth pathway.',
  openGraph: {
    title: 'Adult Life Alignment Assessment | Hidden Potential Skills',
    description:
      'A structured 30-question self-reflection for adults. Understand your current life patterns, areas of strength, and where to focus for growth. Free assessment.',
    type: 'website',
    url: 'https://hiddenpotentialskills.com/assessment/adults',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adult Life Alignment Assessment | Hidden Potential Skills',
    description:
      'A structured 30-question self-reflection for adults. Understand your current life patterns, areas of strength, and where to focus for growth.',
  },
  alternates: {
    canonical: 'https://hiddenpotentialskills.com/assessment/adults',
  },
};

export default function AdultAssessmentPage() {
  return <AdultAssessmentClient />;
}

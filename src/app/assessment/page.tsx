import type { Metadata } from 'next';
import AssessmentClient from './AssessmentClient';

export const metadata: Metadata = {
  title: { absolute: 'Life Skills Assessment | Discover Your Growth Pathway | Hidden Potential' },
  description:
    'Take a structured life skills assessment to identify strengths, gaps, and the right development pathway. Confidential evaluation by certified professionals. Free consultation.',
  openGraph: {
    title: 'Life Skills Assessment — Discover Your Growth Pathway | Hidden Potential',
    description:
      'Answer 3 questions and receive a personalised pathway recommendation. NLP-based life skills programs for students, professionals, women, and trainers in Delhi NCR.',
    type: 'website',
    url: 'https://hiddenpotentialskills.com/assessment',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life Skills Assessment — Discover Your Growth Pathway | Hidden Potential',
    description:
      'Answer 3 questions and receive a personalised pathway recommendation. NLP-based life skills programs for students, professionals, women, and trainers in Delhi NCR.',
  },
  alternates: {
    canonical: 'https://hiddenpotentialskills.com/assessment',
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Life Skills Assessment — Discover Your Growth Pathway",
  description:
    "A structured life skills assessment to identify your strengths, developmental gaps, and the right program pathway. Confidential evaluation by certified professionals. Free consultation.",
  url: "https://hiddenpotentialskills.com/assessment",
  provider: {
    "@type": "Organization",
    name: "Hidden Potential",
    url: "https://hiddenpotentialskills.com",
  },
  areaServed: ["Delhi", "Noida", "Gurgaon", "Faridabad"],
  serviceType: "Life Skills Assessment",
};

export default function AssessmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AssessmentClient />
    </>
  );
}

import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

// ── SEO Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Gallery | Hidden Potential — Life Skills Training in Delhi",
  description:
    "Photo gallery of Hidden Potential's workshops, trainings, events and student journeys across Delhi NCR. 14+ years of transforming lives captured in one place.",
  openGraph: {
    title: "Gallery — Hidden Potential Life Skills Academy",
    description:
      "Glimpses of transformation — school workshops, corporate trainings, art therapy and more from Hidden Potential's 14+ year journey.",
    type: "website",
    url: "https://hiddenpotentialskills.com/gallery",
  },
  alternates: {
    canonical: "https://hiddenpotentialskills.com/gallery",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const schema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Hidden Potential Gallery",
  description:
    "Photo documentation of Hidden Potential's life skills training programs, workshops, corporate sessions, events and student journeys.",
  url: "https://hiddenpotentialskills.com/gallery",
  author: {
    "@type": "Person",
    name: "Supreet Kaur",
  },
  publisher: {
    "@type": "Organization",
    name: "Hidden Potential",
    url: "https://hiddenpotentialskills.com",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GalleryClient />
    </div>
  );
}

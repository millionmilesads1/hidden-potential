/**
 * Dynamic sitemap for hiddenpotentialskills.com
 * Generated via Next.js App Router MetadataRoute.Sitemap convention.
 *
 * When blog posts are added via CMS or MDX, dynamically fetch all blog post
 * slugs and add them to this sitemap with priority 0.5 and changeFrequency weekly.
 *
 * lastModified dates are static - update them only when content substantively changes.
 */

import { MetadataRoute } from "next";

const BASE_URL = "https://hiddenpotentialskills.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Homepage ──────────────────────────────────────────────────────────────
  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date("2025-11-01"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // ── Program pages (5) ─────────────────────────────────────────────────────
  const programs: MetadataRoute.Sitemap = [
    "/programs/enlightened-learner",
    "/programs/communication-mastery",
    "/programs/self-mastery-women",
    "/programs/train-the-trainer",
    "/programs/art-therapy",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date("2025-11-01"),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // ── Service pages (9) ─────────────────────────────────────────────────────
  const services: MetadataRoute.Sitemap = [
    "/services/nlp-coaching",
    "/services/confidence-building",
    "/services/communication-skills",
    "/services/study-skills",
    "/services/stress-management",
    "/services/emotional-intelligence",
    "/services/goal-setting",
    "/services/career-guidance",
    "/services/workshops",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date("2025-11-01"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // ── Location pages (4) ────────────────────────────────────────────────────
  const locations: MetadataRoute.Sitemap = [
    "/locations/delhi",
    "/locations/noida",
    "/locations/gurgaon",
    "/locations/faridabad",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date("2025-11-01"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ── Audience pages (7) ────────────────────────────────────────────────────
  const audience: MetadataRoute.Sitemap = [
    "/for/schools",
    "/for/professionals",
    "/for/young-adults",
    "/for/women",
    "/for/corporates",
    "/for/teachers-and-coaches",
    "/for/parents",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date("2025-11-01"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ── High-priority supporting pages ───────────────────────────────────────
  const highPriority: MetadataRoute.Sitemap = [
    "/contact",
    "/enroll",
    "/assessment",
    "/assessment/adults",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date("2025-11-01"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ── About ─────────────────────────────────────────────────────────────────
  const about: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2025-11-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // ── Success stories ───────────────────────────────────────────────────────
  const successStories: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/success-stories`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // ── Blog index + posts ────────────────────────────────────────────────────
  const blog: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-02-18"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...[
      "/blog/what-are-life-skills",
      "/blog/how-to-improve-communication-skills",
      "/blog/how-to-build-self-confidence",
      "/blog/emotional-intelligence-for-students",
      "/blog/stress-management-techniques-for-students",
    ].map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date("2026-02-18"),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];

  // ── Medium-priority supporting pages ──────────────────────────────────────
  const medium: MetadataRoute.Sitemap = [
    "/faq",
    "/resources",
    "/gallery",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date("2025-11-01"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // ── Legal pages ───────────────────────────────────────────────────────────
  const legal: MetadataRoute.Sitemap = [
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [
    ...homepage,
    ...programs,
    ...services,
    ...locations,
    ...audience,
    ...highPriority,
    ...about,
    ...successStories,
    ...blog,
    ...medium,
    ...legal,
  ];
}

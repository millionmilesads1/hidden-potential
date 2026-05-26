# SEO Action Plan: hiddenpotentialskills.com

**Overall Score: 70 / 100**
**Audit Date:** 2026-05-26

Fix every CRITICAL item before launch. Do HIGH items in week 1. Schedule MEDIUM for month 1.

---

## CRITICAL - Fix Before Launch (Total: ~45 min)

### C1. Unblock AI search crawlers in robots.txt
**File:** `public/robots.txt`
**Time:** 15 min
**Impact:** Unlocks visibility in ChatGPT Search, Perplexity, and Google AI Overviews. Currently zero AI search visibility on 3 of 5 major platforms.

Replace the GPTBot, ChatGPT-User, PerplexityBot, and Google-Extended blocks with `Allow: /`. Keep CCBot, anthropic-ai, and cohere-ai blocked (training-only bots). Full corrected file in Section 7 of FULL-AUDIT-REPORT.md.

---

### C2. Add `export const viewport` to layout.tsx
**File:** `src/app/layout.tsx`
**Time:** 5 min
**Impact:** Fixes missing viewport meta tag on every page. Without this, every page fails Google's mobile-friendliness test.

```ts
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2D1B69",
};
```

---

### C3. Fix sameAs social URLs in Organization schema
**File:** `src/app/page.tsx:47-52`
**Time:** 5 min
**Impact:** Schema sameAs currently points to non-existent accounts. Google follows these URLs to verify the business entity for Knowledge Panel.

Change to match the actual active social URLs from the footer:
- Facebook: `https://www.facebook.com/supriiyaas`
- Instagram: `https://www.instagram.com/lifeskillspecialistsupreet`
- LinkedIn: `https://www.linkedin.com/in/supreet-kaur-a73415239/`
- YouTube: `https://www.youtube.com/@hiddenpotentialskills`

---

### C4. Remove noindex pages from sitemap
**File:** `src/app/sitemap.ts`
**Time:** 2 min
**Impact:** Removes contradiction between `robots: { index: false }` metadata and sitemap inclusion on `/privacy` and `/terms`.

Delete the two entries from the `legal` array in the sitemap URLs list.

---

### C5. Replace success-stories placeholder content
**File:** `src/app/success-stories/page.tsx`
**Time:** Depends on gathering real content
**Impact:** Prevents E-E-A-T failure from fabricated testimonial data on a live indexed page. The file itself warns of placeholder data. This page must have real content before receiving any organic traffic.

Replace every placeholder story card with a real client testimonial. The expert endorsements section is already real and strong.

---

## HIGH - Week 1 (Total: ~4-5 hours)

### H1. Fix internal `/books` links to `/resources`
**Files:** `src/app/page.tsx:1608`, `src/app/about/page.tsx:1067`, `src/app/about/page.tsx:1365`
**Time:** 5 min

Change `href="/books"` to `href="/resources"` in all 3 locations. Also update the Navbar label "Books" to "Resources" at `src/components/layout/Navbar.tsx:36`.

---

### H2. Add BreadcrumbList schema to 13 pages
**Files:** All 9 `/services/*/page.tsx` and 4 `/programs/*/page.tsx` (all except enlightened-learner)
**Time:** 45 min

Also fix the existing Enlightened Learner breadcrumb: positions 2 and 3 both point to `/programs/enlightened-learner`. Reduce to a 2-item breadcrumb (Home > An Enlightened Learner).

Template for each service page:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hiddenpotentialskills.com" },
    { "@type": "ListItem", "position": 2, "name": "[Page Name]", "item": "https://hiddenpotentialskills.com/services/[slug]" }
  ]
}
```

---

### H3. Standardize opening hours across all schema
**Files:** `src/app/page.tsx` (LocalBusiness), `src/app/contact/page.tsx`, all 4 `/locations/*/page.tsx`
**Time:** 30 min

Correct hours (per FAQ and contact body copy): Monday-Saturday, 9:00 AM-7:00 PM.

Change all `openingHours` values to `"Mo-Sa 09:00-19:00"`. Also update footer text to match.

---

### H4. Add AggregateRating to homepage LocalBusiness schema
**File:** `src/app/page.tsx` (LocalBusiness node)
**Time:** 10 min

17 documented reviews (16x 5-star, 1x 4-star = 4.9 avg). Only add if these correspond to real Google Business Profile reviews.

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "17",
  "bestRating": "5",
  "worstRating": "1"
}
```

---

### H5. Fix addressLocality inconsistency
**Files:** `src/app/page.tsx:65` and `:86`
**Time:** 5 min

Change `addressLocality: "South West Delhi"` to `addressLocality: "Delhi"` to match the contact page, location pages, and footer.

---

### H6. Standardize telephone format in all schema
**Files:** `src/app/contact/page.tsx`, all 4 `/locations/*/page.tsx`
**Time:** 15 min

All schema `telephone` properties must use E.164 format `+919899209335` (no hyphens). Homepage schema is already correct. Update the 5 files that use `+91-9899209335`.

---

### H7. Add WebSite schema to homepage
**File:** `src/app/page.tsx`
**Time:** 15 min

Add as a third `<script type="application/ld+json">` block. Enables Sitelinks Search Box for branded queries.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://hiddenpotentialskills.com/#website",
  "url": "https://hiddenpotentialskills.com",
  "name": "Hidden Potential",
  "description": "Structured life skills training academy in Delhi NCR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://hiddenpotentialskills.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

### H8. Add Twitter card metadata to 10 missing pages
**Files:** `page.tsx`, `about/page.tsx`, `programs/art-therapy`, `programs/train-the-trainer`, `programs/self-mastery-women`, `gallery/page.tsx`, `blog/page.tsx`, `assessment/page.tsx`, `success-stories/page.tsx`
**Time:** 30 min

Add to each page's `metadata` export:
```ts
twitter: {
  card: "summary_large_image",
  title: "[Same as title]",
  description: "[Same as description]",
},
```

---

### H9. Add Content-Security-Policy header
**File:** `next.config.mjs`
**Time:** 20 min

Add to the security headers array:
```js
{
  key: "Content-Security-Policy",
  value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.indexnow.org",
}
```

---

### H10. Add Google Maps embed to contact page
**File:** `src/app/contact/page.tsx`
**Time:** 20 min

Get the embed iframe from Google Maps > D-802, Palm Court Apartment, Sector 19B, Dwarka > Share > Embed a map. Adds a direct HTML link between the website and the GBP listing, plus helps users find the physical centre.

---

### H11. Fix Facebook profile URL inconsistency
**Context:** Homepage schema sameAs uses `facebook.com/hiddenpotentialskills`, footer uses `facebook.com/supriiyaas`. These are different profiles.

Confirm which is the active Hidden Potential brand page. Update both the homepage schema `sameAs` (already included in C3) and footer link to point to the same URL. If `hiddenpotentialskills` is a dead/unmanaged page, update everything to `supriiyaas`.

---

### H12. Verify ContactForm and EnrollForm are backend-connected
**Files:** `src/app/contact/ContactForm.tsx`, `src/app/enroll/EnrollForm.tsx`
**Time:** Test + connect if needed

Git status shows both files are modified. A form that submits to no backend is a silent trust failure. Verify both are connected to a server action or third-party form service before launch.

---

## MEDIUM - Month 1 (Total: ~12-15 hours)

### M1. Fix AnimatedHeroContent LCP issue (mobile)
**File:** `src/components/ui/AnimatedHeroContent.tsx`
**Time:** 2-3 hours

Replace the Framer Motion `initial={{ opacity: 0 }}` H1 with a server-rendered `<h1>` that uses a CSS `@keyframes fadeIn` animation. The mobile LCP candidate (the H1 text) must be immediately present in the DOM, not dependent on JS hydration to become visible.

---

### M2. Fix Particles performance issues
**File:** `src/app/page.tsx:534, 1702` and `src/components/ui/particles.tsx`
**Time:** 2 hours

1. Lazy-load both `<Particles>` instances with `next/dynamic({ ssr: false, loading: () => null })`.
2. Throttle the `mousemove` handler in `particles.tsx` using `requestAnimationFrame`.
3. Consider replacing entirely with a CSS-only particle effect for the production site.

---

### M3. Fix MagicCard global event listeners
**File:** `src/components/ui/magic-card.tsx:54-58`
**Time:** 1 hour

Move `document.addEventListener("mousemove", ...)` to the card element with `{ passive: true }`. With 8 instances on the homepage, each calling `getBoundingClientRect()` on every mouse move, this is the primary INP bottleneck.

---

### M4. Add AVIF + optimizePackageImports to next.config.mjs
**File:** `next.config.mjs`
**Time:** 10 min

```js
images: {
  formats: ['image/avif', 'image/webp'],
},
experimental: {
  optimizePackageImports: ['framer-motion', 'lucide-react'],
},
```

---

### M5. Expand Harvard credential explanation
**Files:** `src/app/about/page.tsx`, `src/app/page.tsx`
**Time:** 30 min

The "Harvard Life Skills Affiliate" credential appears on multiple pages without a program name, year, or issuing body. Add the specific Harvard Extension School program name, year completed, and how the certification was earned. This is the site's weakest E-E-A-T signal - Quality Raters will look for it.

---

### M6. Add unique content blocks to Noida, Gurgaon, Faridabad location pages
**Files:** `src/app/locations/noida/page.tsx`, `gurgaon/page.tsx`, `faridabad/page.tsx`
**Time:** 3-4 hours

Each page needs at minimum one section that is genuinely unique: specific local schools or companies served, area-specific testimonials, or a neighbourhood guide. The current 14 program cards and 6 differentiator cards are identical across all 4 locations.

---

### M7. Add "near me" FAQ questions to location pages
**Files:** All 4 `/locations/*/page.tsx`
**Time:** 30 min

Add one FAQ question per location page targeting "near me" queries:
- Delhi: "Who is the best life skills trainer near me in Delhi?"
- Noida: "Is there a certified life skills coach near me in Noida?"
- Gurgaon: "Where can I find life skills training near me in Gurgaon?"
- Faridabad: "Who offers structured life skills programs near me in Faridabad?"

---

### M8. Differentiate H2 headings across program pages
**Files:** All 5 `/programs/*/page.tsx`
**Time:** 1 hour

Replace shared H2s with program-specific variations:
- "Growth Is Measured, Not Assumed" - differentiate per program (e.g., "How We Track Each Student's Learning Progress" for AEL vs "Measuring Communication Growth Over 3 Levels" for Communication Mastery)
- "What Changes After This Program" - make program-specific (e.g., "What Students Achieve After An Enlightened Learner" vs "How Professional Communication Changes After Mastery")

---

### M9. Add "What is X" definition blocks to service and program pages
**Files:** All 9 service pages, all 5 program pages
**Time:** 2-3 hours

Add a 60-word definition as the first prose block below the H1 on every service/program page. Pattern: "[Service/Program] is [direct definition]. At Hidden Potential, [delivery method]. [Outcome and who it's for]."

This directly improves Featured Snippet eligibility and AI citation readiness.

---

### M10. Add lang="en-IN" and update llms-full.txt social links
**Files:** `src/app/layout.tsx:71`, `public/llms-full.txt:66`
**Time:** 10 min

1. Change `lang="en"` to `lang="en-IN"` on the `<html>` tag.
2. Replace "Social Media: links not yet published" in llms-full.txt with the actual social URLs.
3. Add `<link rel="alternate" type="text/plain" href="/llms.txt" />` to the layout head.

---

### M11. Add serviceArea schema to non-Delhi location pages
**Files:** `src/app/locations/noida/page.tsx`, `gurgaon/page.tsx`, `faridabad/page.tsx`
**Time:** 45 min

Replace `addressLocality: "Delhi"` on these pages with a `serviceArea` property pointing to the correct city as an `AdministrativeArea`. The physical address should only appear on the Delhi page.

---

### M12. Add image to Supreet Kaur Person schema and complete homepage LocalBusiness
**Files:** `src/app/about/page.tsx`, `src/app/page.tsx`
**Time:** 20 min

1. Add `"image": "https://hiddenpotentialskills.com/images/founder/supreet-hp-banner.jpg"` to the Supreet Kaur Person schema.
2. Add `url`, `image`, `logo`, `geo`, and `priceRange` to the homepage LocalBusiness schema node.

---

### M13. Fix Art Therapy Course instructor and add course prerequisites
**File:** `src/app/programs/art-therapy/page.tsx`
**Time:** 20 min

1. Add Nishchay Sharma as a second instructor in the Course schema (he is the art therapy lead per /about).
2. Add `"inLanguage": ["en", "hi"]` and `"coursePrerequisites": "No prior experience required"` to all 5 Course schemas.

---

### M14. Reduce Plus Jakarta Sans to 2 weights
**File:** `src/app/layout.tsx:8`
**Time:** 5 min

Change `weight: ["400", "500", "600", "700", "800"]` to `weight: ["400", "700"]`. Eliminates 3 font file requests with no visible design impact.

---

### M15. Remove duplicate .animate-marquee CSS and fix will-change
**File:** `src/app/globals.css`
**Time:** 15 min

1. Delete the duplicate `.animate-marquee` block at lines 652-658 (overrides the first with a different duration).
2. Move `will-change: transform, opacity` on `.hero-float-1` (line 25) and `.hero-float-2` (line 30) inside their animation keyframes rather than permanently applied.

---

## LOW - Backlog

| Item | File | Notes |
|------|------|-------|
| Update sitemap lastmod dates | `src/app/sitemap.ts` | Update pages changed after 2025-11-01 |
| Remove priority/changeFreq from sitemap | `src/app/sitemap.ts` | Google ignores both fields |
| Link blog Article schema to Person @id | `src/app/blog/[slug]/page.tsx` | Strengthens knowledge graph |
| Change Article to BlogPosting in blog schema | `src/app/blog/[slug]/page.tsx` | More semantically accurate subtype |
| Add "Leave us a Google review" CTA | contact and success-stories pages | Drive review velocity |
| Add GeoCoordinates to Noida/Gurgaon/Faridabad schemas | location page files | 5 decimal precision, verify on Maps |
| Fix expert endorsement photo filenames (spaces) | `/public/Dr Subodh Kumar.jpeg` etc | Rename to kebab-case to prevent 404s |
| Add transformation examples to service pages | All 9 service pages | 1 brief named outcome per page |
| Tighten springBounce animation | `src/lib/animations.ts` | stiffness: 120, damping: 20 |
| Replace boxShadow in whileHover with CSS class | `AnimateGroup.tsx:73`, `AnimatedProgramsGrid.tsx:34` | Use CSS transition instead |
| Update SITE-ARCHITECTURE.md remaining pages table | `SITE-ARCHITECTURE.md` | All "remaining" pages are built |

---

## Progress Tracker

| Priority | Total | Completed | Remaining |
|----------|-------|-----------|-----------|
| CRITICAL | 5 | 0 | 5 |
| HIGH | 12 | 0 | 12 |
| MEDIUM | 15 | 0 | 15 |
| LOW | 11 | 0 | 11 |
| **TOTAL** | **43** | **0** | **43** |

---

*See FULL-AUDIT-REPORT.md for detailed findings, code samples, and rationale for every item.*

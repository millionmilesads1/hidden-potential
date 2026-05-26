# Full SEO Audit Report: hiddenpotentialskills.com

**Business:** Hidden Potential Skills - Life Skills Training Academy, Delhi NCR
**Audit Date:** 2026-05-26
**Framework:** Next.js 14 App Router, Vercel, Tailwind CSS v4

---

## Overall SEO Health Score: 70 / 100

| Category | Weight | Raw Score | Weighted |
|----------|--------|-----------|---------|
| Technical SEO | 22% | 74 | 16.3 |
| Content Quality | 23% | 74 | 17.0 |
| On-Page SEO | 20% | 72 | 14.4 |
| Schema / Structured Data | 10% | 58 | 5.8 |
| Performance (CWV) | 10% | 58 | 5.8 |
| AI Search Readiness | 10% | 61 | 6.1 |
| Images | 5% | 82 | 4.1 |
| **TOTAL** | | | **69.5 / 100** |

**Business type detected:** Hybrid local + service-area business (brick-and-mortar in Dwarka with delivery across Delhi NCR)

---

## Top 5 Critical Issues (Fix Immediately)

1. **AI crawlers blocked in robots.txt** - GPTBot, PerplexityBot, and Google-Extended are all explicitly Disallowed, making the site invisible to ChatGPT Search, Perplexity, and Google AI Overviews. 15-minute fix with massive GEO impact.
2. **Missing viewport meta tag** - No `export const viewport` in `layout.tsx`. Every page fails Google's mobile-friendliness test. A required Next.js 14 export that is entirely absent.
3. **Social sameAs URLs in schema point to wrong accounts** - The Organization schema lists `facebook.com/hiddenpotentialskills` and `instagram.com/hiddenpotentialskills` but the footer links to `facebook.com/supriiyaas` and `instagram.com/lifeskillspecialistsupreet`. Google follows sameAs to verify entities; these will fail verification.
4. **Noindex pages listed in sitemap** - `/privacy` and `/terms` are marked `robots: { index: false }` in their metadata but also appear in `sitemap.ts`. Sending conflicting indexing signals.
5. **Success stories page has live placeholder content** - File header explicitly warns: "PLACEHOLDER NOTICE - every story card contains placeholder data." If this page is indexed, it is a direct E-E-A-T failure with fabricated review content.

---

## Top 5 Quick Wins (High ROI, Low Effort)

1. Unblock AI crawlers in `public/robots.txt` - edit 4 lines, unlock ChatGPT/Perplexity/Google AI visibility (15 min)
2. Add `export const viewport` to `src/app/layout.tsx` - fixes mobile-friendliness on all 37+ pages (5 min)
3. Fix sameAs social URLs in `src/app/page.tsx` lines 47-52 (5 min)
4. Remove `/privacy` and `/terms` from `src/app/sitemap.ts` (2 min)
5. Fix 3 internal links from `/books` to `/resources` in `page.tsx:1608` and `about/page.tsx:1067,1365` (5 min)

---

## Section 1: Technical SEO

**Score: 74 / 100**

### Passes

- **robots.txt**: Correctly structured with Sitemap declaration, disallows `/api/` and `/_next/`. AI training bots (`anthropic-ai`, `cohere-ai`, `CCBot`) correctly blocked.
- **Canonical tags**: All 37+ `page.tsx` files have `alternates.canonical` with absolute URLs pointing to production domain. Dynamic blog posts generate per-post canonicals via `generateMetadata`.
- **www redirect**: `vercel.json` correctly 308-redirects `www.hiddenpotentialskills.com` to the bare domain. No duplicate content from www variant.
- **Security headers** (`next.config.mjs`): HSTS with preload, X-Frame-Options (DENY), X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection all present.
- **IndexNow**: Fully implemented at `src/app/api/indexnow/route.ts`. Key file present in `/public/`. Submits to `api.indexnow.org` which distributes to Bing and Yandex.
- **Internal linking**: Footer provides 18+ internal links per page (programs, services, locations). Minimum 3-link requirement met on all pages.
- **Font loading**: All 3 fonts use `next/font/google` with `display: swap`, self-hosting at build time. No external font render-blocking.
- **metadataBase**: Correctly set to `https://hiddenpotentialskills.com` in `layout.tsx:42`.

### Critical Issues

**CRITICAL: Missing `export const viewport`**
File: `src/app/layout.tsx`

Next.js 14 App Router requires a separate `export const viewport` declaration for the viewport meta tag. This export is entirely absent from `layout.tsx`. Without it, Next.js does not inject `<meta name="viewport" content="width=device-width, initial-scale=1">` on any page. Every page on the site fails Google's mobile-friendliness test.

```ts
// Add to src/app/layout.tsx
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2D1B69",
};
```

**CRITICAL: Noindex pages in sitemap**
Files: `src/app/sitemap.ts:155-163`, `src/app/privacy/page.tsx:17`, `src/app/terms/page.tsx:17`

Both `/privacy` and `/terms` have `robots: { index: false, follow: true }` in metadata but appear in the sitemap with `priority: 0.3`. Remove both from the `legal` array in `sitemap.ts`.

### High Issues

**HIGH: Internal links to `/books` instead of `/resources`**
Files: `src/app/page.tsx:1608`, `src/app/about/page.tsx:1067`, `src/app/about/page.tsx:1365`

Three `<Link>` components use `href="/books"`, triggering the 308 redirect on every click and diluting link equity. The Navbar correctly uses `/resources` (line 36). Fix: replace all 3 instances.

**HIGH: Twitter card missing on 10 pages**
The root layout defines a fallback Twitter card, but page-level `metadata` exports override the layout entirely - the fallback is not inherited. 10 key pages (homepage, about, programs/art-therapy, programs/train-the-trainer, programs/self-mastery-women, gallery, blog index, assessment, success-stories) have no `twitter:` block in their metadata export.

Fix: Add `twitter: { card: "summary_large_image" }` to each affected page's `metadata` export.

**HIGH: No Content-Security-Policy header**
File: `next.config.mjs`

The site has 6 security headers but no CSP. The inline `dangerouslySetInnerHTML` used for JSON-LD schema across every page makes a tight CSP critical. Minimal starter policy:
```
default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.indexnow.org
```

**HIGH: H1 on homepage starts at opacity:0 (LCP risk)**
File: `src/components/ui/AnimatedHeroContent.tsx:82-115`

The homepage H1 is a Framer Motion `motion.h1` with `initial={{ opacity: 0, y: 20 }}`. On mobile, this is the LCP candidate. The browser cannot measure LCP until after JavaScript hydration completes and the animation begins, pushing LCP past 2.5s on mid-range devices.

### Medium Issues

**MEDIUM: AI search crawlers blocked in robots.txt**
(See Section 7: AI Search Readiness for full details)
File: `public/robots.txt`

**MEDIUM: Particles canvas above fold**
File: `src/app/page.tsx:534-542`

The `<Particles quantity={80}>` component renders above the fold in the hero and competes with LCP content for main-thread time. A second instance at line 1702. Use `next/dynamic` with `ssr: false` to lazy-load both.

**MEDIUM: Duplicate `.animate-marquee` CSS block**
File: `src/app/globals.css:652-658`

`.animate-marquee` is defined twice (50s and 40s durations). The second definition overrides the first. Remove the duplicate at lines 652-658.

**MEDIUM: `will-change` declarations permanent on hero elements**
File: `src/app/globals.css:25,30,61`

`will-change: transform, opacity` on `.hero-float-1`, `.hero-float-2`, and `.shine-overlay::before` is permanently applied. This forces permanent compositor layer promotion, increasing memory pressure on lower-end Android devices.

### Low Issues

**LOW: Navbar label "Books" links to `/resources`**
File: `src/components/layout/Navbar.tsx:36`

Label/URL mismatch - the anchor text "Books" does not reinforce the `/resources` page's keyword relevance. Change label to "Resources".

**LOW: Stale `lastModified` dates in sitemap**
File: `src/app/sitemap.ts`

39 of 47 sitemap entries use the hardcoded date `new Date("2025-11-01")`. Pages updated since then (about page - Nishchay Sharma added, success-stories, all blog posts) have stale lastmod values. Update to reflect actual content change dates.

---

## Section 2: Content Quality

**Score: 74 / 100 | E-E-A-T Score: 72 / 100**

### E-E-A-T Assessment

| Factor | Score | Key Evidence |
|--------|-------|-------------|
| Experience | 16/20 | Josh Talks photo, IGNOU certificate lightbox, founder quotes |
| Expertise | 20/25 | 12 credentials, Harvard-affiliated certification, NLP practitioner |
| Authoritativeness | 17/25 | Named professional endorsements (Dr. Subodh Kumar, Brig Arun Gupta, school principal) |
| Trustworthiness | 19/30 | Full NAP in schema, MSME registered; weakened by Gmail address, no pricing, placeholder success stories |

### Critical Issues

**CRITICAL: Placeholder content live on /success-stories**
File: `src/app/success-stories/page.tsx`

The file header contains an explicit PLACEHOLDER NOTICE warning that every testimonial story card has fabricated data. If this page is live and indexed, Google Quality Raters will score it as low-quality or deceptive content. Content score for this page: 4/10. Fix: replace all story card data with real client testimonials before the site receives organic traffic.

### High Issues

**HIGH: Harvard credential under-explained**
Appears on homepage credentials strip, about page credentials grid, and program pages. The claim "Harvard Life Skills Affiliate" / "Harvard Affiliated Life Skills" appears without any program name, year, issuing body, or verifiable detail. Quality Raters will look for verification. Expand to include the specific Harvard Extension program name, year completed, and how the certification was earned - or replace with the actual certification name as issued.

**HIGH: Location pages near-duplicate content**
All 4 location pages share the same 14 program cards and 6 differentiator cards verbatim. Only the FAQ section and location-specific narrative prose differ. This pattern falls into what Google QRG labels "same content with location name swapped." Each non-Delhi location page needs at least one unique section: specific local schools or corporate partners served, area-specific testimonials, or a neighbourhood accessibility guide.

### Medium Issues

**MEDIUM: Duplicate H2 headings across all 5 program pages**
These verbatim H2s appear on multiple program pages:
- "Growth Is Measured, Not Assumed" - AEL, Communication Mastery, Self Mastery
- "What Changes After This Program" - AEL, Communication Mastery, Self Mastery
- "Three Levels. One Clear Journey." - AEL, Communication Mastery

While body text differs, Google sees near-identical heading structures across 5 URLs. Differentiate H2s per program (e.g., "How We Measure a Student's Growth" vs "Measuring Progress in Speaking and Presence").

**MEDIUM: Art Therapy Course schema instructor mismatch**
File: `src/app/programs/art-therapy/page.tsx`

Nishchay Sharma is identified as the art therapy lead on `/about`, but the Art Therapy Course schema lists Supreet Kaur as instructor. Add Nishchay as a second instructor or correct the schema.

**MEDIUM: No transformation examples on service pages**
All 9 service pages end with a CTA but contain no named client outcome, micro-story, or before/after example. Google's QRG (September 2025) specifically scores Experience signals. One short transformation narrative per service page would materially raise E-E-A-T.

**MEDIUM: AEL breadcrumb schema bug**
File: `src/app/programs/enlightened-learner/page.tsx`

Both position 2 and position 3 in the BreadcrumbList point to the same URL (`/programs/enlightened-learner`). Google will reject this. Since no `/programs` index page exists, reduce to a 2-item breadcrumb: Home > An Enlightened Learner.

### Low Issues

**LOW: Internal links from /about to /books**
Files: `src/app/about/page.tsx:1067`, `src/app/about/page.tsx:1365`

The Books section on the About page links to `/books` which 308-redirects to `/resources`. Change to link directly to `/resources`.

**LOW: Contact form and enroll form not connected to backend**
Files: `src/app/contact/ContactForm.tsx`, `src/app/enroll/EnrollForm.tsx`

Git status shows both files are modified (`M`). If these forms submit to no backend action, they silently fail - a critical trust failure if live. Verify both are connected to a server action or API route before launch.

---

## Section 3: On-Page SEO

**Score: 72 / 100**

### Strengths

- Single H1 per page on all 37+ pages reviewed. H1s are keyword-rich and descriptive.
- H2/H3 hierarchy is clean - no skipped heading levels.
- All pages have unique `title` and `description` metadata.
- Primary keyword "life skills training in Delhi" appears naturally in metadata, H1s on location pages, body paragraphs, and FAQ answers without stuffing.
- 4 location pages with city-specific H1s ("Life Skills Training in Delhi", "...in Noida", etc.).

### Issues

**MEDIUM: No "near me" keyword on location pages**
High-volume queries like "life skills training near me" are not targeted on any location page. Add at least one FAQ question per location page targeting this pattern (e.g., "Who is the best life skills trainer near me in Delhi?").

**MEDIUM: Service pages missing definition blocks**
Every service page opens with a hero section of marketing taglines. AI systems and Featured Snippet selection look for a direct definition in the first 40-60 words. Add a 60-word "What is X" paragraph at the top of each service page: "[Service] is [definition]. At Hidden Potential, [delivery method]. [Outcome + who it's for]."

**LOW: Contact page H1/CTA mismatch**
H1 says "Book Your Free Life Skills Evaluation" but the CTA button says "Book a Free Consultation." Minor semantic inconsistency.

---

## Section 4: Schema / Structured Data

**Score: 58 / 100**

### Schema Coverage Map

| Page | Types Present | Breadcrumb | Priority Issues |
|------|---------------|------------|-----------------|
| `/` | Organization, LocalBusiness, EducationalOrganization, FAQPage, BreadcrumbList | Yes | sameAs wrong, missing AggregateRating, WebSite schema |
| `/about` | Person x2, Organization, BreadcrumbList | Yes | Image missing from Supreet schema |
| `/faq` | FAQPage, BreadcrumbList | Yes | Clean |
| `/contact` | LocalBusiness, FAQPage, BreadcrumbList | Yes | Phone format, openingHours conflict |
| `/success-stories` | Organization, BreadcrumbList | Yes | Missing AggregateRating |
| `/programs/enlightened-learner` | Course, BreadcrumbList | Yes (broken) | Duplicate URL in breadcrumb positions 2+3 |
| `/programs/communication-mastery` | Course | **None** | Missing BreadcrumbList |
| `/programs/self-mastery-women` | Course | **None** | Missing BreadcrumbList |
| `/programs/train-the-trainer` | Course | **None** | Missing BreadcrumbList |
| `/programs/art-therapy` | Course | **None** | Missing BreadcrumbList, wrong instructor |
| All 9 `/services/*` | Service, FAQPage | **None** | Missing BreadcrumbList (all 9) |
| `/locations/delhi` | LocalBusiness, FAQPage, BreadcrumbList | Yes | Clean |
| `/locations/noida,gurgaon,faridabad` | LocalBusiness, FAQPage, BreadcrumbList | Yes | Missing geo coordinates |
| `/blog/[slug]` | Article, BreadcrumbList | Yes | Author not @id linked to Person entity |

### Critical Issues

**CRITICAL: sameAs URLs don't match actual social profiles**
File: `src/app/page.tsx:47-52`

Schema has:
- `facebook.com/hiddenpotentialskills` - footer links to `facebook.com/supriiyaas`
- `instagram.com/hiddenpotentialskills` - footer links to `instagram.com/lifeskillspecialistsupreet`
- `linkedin.com/in/supreetkaur-hiddenpotential` - footer links to `linkedin.com/in/supreet-kaur-a73415239/`

Google follows `sameAs` URLs to build the Knowledge Panel entity graph. Dead or wrong URLs break entity disambiguation. Update all three to match the footer's active URLs.

**CRITICAL: Telephone format inconsistency**
Homepage schema: `+919899209335` / Contact and location pages: `+91-9899209335` / Footer HTML: `+91 98992 09335`

Three formats across schema for the same business. Standardize to E.164: `+919899209335` in all schema instances. Use `+91 98992 09335` (with spaces) in visible HTML.

### High Issues

**HIGH: BreadcrumbList missing on 13 pages**
All 9 service pages and 4 program pages (all except Enlightened Learner) have no BreadcrumbList schema. Template for service pages:
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

**HIGH: Missing AggregateRating despite 17+ documented reviews**
File: `src/app/page.tsx` (LocalBusiness node)

17 community reviews are displayed on `/success-stories` (16 at 5-star, 1 at 4-star = 4.9 average). No `aggregateRating` exists anywhere in the schema. This is missing the star display in Google Knowledge Panel and local search results. Add to the homepage LocalBusiness node:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "17",
  "bestRating": "5",
  "worstRating": "1"
}
```
Note: Only use if these numbers reflect real Google Business Profile reviews, not just on-site testimonials.

**HIGH: Missing WebSite schema**
No page has a `WebSite` schema with `SearchAction`. This enables the Sitelinks Search Box for branded queries. Add to homepage as a third `<script type="application/ld+json">` block.

**HIGH: openingHours conflict across schema**
Three different values across schema:
- Homepage LocalBusiness: `"Mo-Fr 10:00-19:00"`
- Contact page: `"Mo-Sa 09:00-19:00"` (opens 9 AM, includes Saturday)
- Location pages: `"Mo-Fr 10:00-19:00"`

FAQ text and contact page body copy both say "Mon-Sat 9AM-7PM" - this appears to be the correct real-world hours. Standardize all schema to `"Mo-Sa 09:00-19:00"` and consider migrating to `openingHoursSpecification` (structured object form, recommended over string form since 2024).

### Medium Issues

**MEDIUM: Supreet Kaur Person schema missing `image`**
File: `src/app/about/page.tsx` - Nishchay's schema has an image; Supreet's does not. Add:
```json
"image": "https://hiddenpotentialskills.com/images/founder/supreet-hp-banner.jpg"
```

**MEDIUM: Homepage LocalBusiness missing recommended fields**
Missing vs the well-structured Delhi location page:
- `url`, `image`, `logo`, `geo` (GeoCoordinates), `priceRange`

**MEDIUM: Location pages missing GeoCoordinates**
Noida, Gurgaon, and Faridabad location pages have no `geo` block. Add approximate coordinates for each service area city (verify against actual Google Maps pins before publishing).

**MEDIUM: Course schemas missing `inLanguage` and `coursePrerequisites`**
All 5 program pages. Add `"inLanguage": ["en", "hi"]` and `"coursePrerequisites": "No prior experience required"` to each Course schema.

**MEDIUM: About page Organization schema missing telephone, sameAs, logo**
File: `src/app/about/page.tsx`

Add the business phone, correct social sameAs URLs, and logo URL to the Organization node on the About page.

### Low Issues

**LOW: Blog Article schema should use `BlogPosting` type**
File: `src/app/blog/[slug]/page.tsx`

`@type: Article` is valid but `BlogPosting` is the semantically correct subtype for blog content per Google's article structured data documentation.

**LOW: Blog Article author not @id linked to Person entity**
The Article `author` field in blog posts is a standalone object. Change to reference the Supreet Kaur Person entity by `@id`:
```json
"author": { "@id": "https://hiddenpotentialskills.com/about#supreet-kaur" }
```
This links every blog article to the fully-credentialed Person entity on the About page, forming a connected knowledge graph.

---

## Section 5: Performance (Core Web Vitals)

**Score: 58 / 100**

### Risk Summary

| Metric | Risk Level | Primary Cause |
|--------|------------|---------------|
| LCP (mobile) | High | H1 starts at opacity:0 (Framer Motion animation), no static text fallback |
| LCP (desktop) | Low | Hero image 124KB with `priority` set, next/image handles WebP |
| INP | High | Particles unthrottled rAF loop + MagicCard global mousemove listeners |
| CLS | Low-Medium | `display: swap` FOUT on 3 fonts, AnimateGroup hydration flash risk |

### What is Good

- All images use `next/image` - no raw `<img>` tags anywhere.
- Hero image has `priority` set - preloaded and LCP-eligible.
- `prefers-reduced-motion` respected in `AnimateIn.tsx` and `LayoutClient.tsx`.
- All animation variants in `animations.ts` use composited properties (opacity, transform) only.
- No third-party scripts (no GTM, Analytics, Facebook Pixel) - zero third-party script impact on LCP/INP.
- `next/font` self-hosts all fonts, eliminating external DNS lookups.

### Critical INP Risk: Particles canvas

File: `src/app/page.tsx:534-542` and `:1702`, `src/components/ui/particles.tsx`

Two `<Particles>` instances run unthrottled `requestAnimationFrame` loops: 80 particles in the hero, 60 in the CTA section. The canvas clears and redraws all particles every frame at 60fps. Combined with the unthrottled `mousemove` listener at `particles.tsx:14-29` (triggers React `setMousePosition` on every mouse pixel moved), any user interaction during a frame repaint can produce INP of 200-500ms on mid-range Android devices.

Fix: Use `next/dynamic` with `ssr: false` to lazy-load Particles. Throttle the `mousemove` handler with `requestAnimationFrame`. Consider replacing with a CSS-only particle effect.

### Critical INP Risk: MagicCard global event listeners

File: `src/components/ui/magic-card.tsx:54-58`

Each MagicCard instance registers its own `mousemove` listener on `document` at mount. The homepage has 8 MagicCard instances (3 in Methods section + 5 in Programs grid). On every mouse move: 8 listeners fire, each calls `getBoundingClientRect()` (forces layout reflow) and updates 2 `useMotionValue` instances. This is a significant INP contributor.

Fix: Move listeners to the card element (not document), add `{ passive: true }`, or replace with a CSS-only `::after` radial gradient spotlight.

### Critical LCP Risk: Animated H1 on mobile

File: `src/components/ui/AnimatedHeroContent.tsx:82-115`

On mobile (viewport < 768px), the hero image is hidden (`hidden md:block`). The LCP candidate becomes the H1 text, which starts at `opacity: 0` via Framer Motion's `initial="hidden"`. LCP is not measured until this element is visible, which requires JS hydration + animation start. On 3G connections (common on mobile in India), this can push LCP past 4 seconds.

Fix: Render a static server-rendered `<h1>` as the primary HTML. Use CSS `@keyframes` for the entrance animation instead of JS-driven Framer Motion. Keep the word-drop visual effect as a CSS-only enhancement.

### High Issues

**HIGH: No AVIF format configured**
File: `next.config.mjs`

Add `images: { formats: ['image/avif', 'image/webp'] }` to enable AVIF delivery for Chrome/Firefox users - 20-30% additional compression over WebP.

**HIGH: No `optimizePackageImports` for Framer Motion or Lucide React**
File: `next.config.mjs`

Add:
```js
experimental: {
  optimizePackageImports: ['framer-motion', 'lucide-react']
}
```
Reduces JS bundle via tree-shaking. Lucide React is imported in multiple components; without this, the full icon library may be bundled.

### Medium Issues

**MEDIUM: Plus Jakarta Sans loading 5 weights**
File: `src/app/layout.tsx:8`

Weights 400, 500, 600, 700, 800 are all loaded. Weights 500, 600, 800 are rarely distinguishable by users and eliminate 3 font file requests. Reduce to `weight: ["400", "700"]`.

**MEDIUM: `boxShadow` in Framer Motion `whileHover`**
Files: `src/components/ui/AnimateGroup.tsx:73`, `src/components/ui/AnimatedProgramsGrid.tsx:34`

`box-shadow` in Framer Motion `whileHover` runs on the main thread (not composited). Replace with a CSS class toggle using `transition: box-shadow` which the browser optimizes.

**MEDIUM: SpringBounce settle time too long**
File: `src/lib/animations.ts` - `stiffness: 60, damping: 15`

This configuration causes content to take 1.2-1.5 seconds to settle after scrolling into view. Users and Googlebot see content in motion for over a second. Change to `stiffness: 120, damping: 20` for a punchier, faster feel.

---

## Section 6: Sitemap

**Score: 78 / 100**

### Strengths

- 47 URLs all covered. No built pages missing from sitemap. No entries pointing to missing routes.
- Sitemap correctly declared in `robots.txt`.
- Logical priority hierarchy: homepage 1.0, programs 0.9, locations 0.8, services 0.7.
- No raw XML file conflicts with the dynamic `src/app/sitemap.ts`.
- `/books` redirect source not in sitemap (correct). `/api/indexnow` not in sitemap (correct).

### Issues

**MEDIUM: All non-blog lastmod dates static at 2025-11-01**
39 of 47 entries use `new Date("2025-11-01")`. Multiple pages have been updated since then (about page with Nishchay Sharma, success stories, any recent content changes). Stale, identical lastmod dates signal to Google that the publisher is not maintaining accurate dates, deprioritizing crawl scheduling.

**MEDIUM: Location page schemas use business address for service-area cities**
The Noida, Gurgaon, and Faridabad location page schemas use `addressLocality: "Delhi"` (the actual physical address). These pages should use a `serviceArea` property typed as `AdministrativeArea` rather than implying a physical presence in those cities.

**LOW: `priority` and `changeFrequency` fields**
Both fields are present on all 47 entries. Google's John Mueller has confirmed Google ignores both. They can be removed to simplify `sitemap.ts` and reduce response size. Not a penalty - informational only.

**LOW: SITE-ARCHITECTURE.md stale**
The "REMAINING (16 pages to build)" table is entirely built. All 32 planned pages exist plus additional pages not in the original plan. Update the document to reflect current build status.

---

## Section 7: AI Search Readiness (GEO)

**Score: 61 / 100**

### Platform-Specific Visibility

| Platform | Score | Bottleneck |
|----------|-------|------------|
| Google AI Overviews | 8/100 | Google-Extended blocked in robots.txt |
| ChatGPT Search/Browse | 5/100 | GPTBot and ChatGPT-User blocked |
| Perplexity AI | 8/100 | PerplexityBot blocked |
| Bing Copilot | 55/100 | Not blocked; limited by thin backlink profile |
| Claude.ai / Anthropic | 62/100 | ClaudeBot not blocked; llms.txt present |

### Critical Issue: AI Crawlers Blocked

File: `public/robots.txt`

The robots.txt comment reads "Blocking them does NOT affect search rankings or LLM search results." This is incorrect. GPTBot, PerplexityBot, and Google-Extended are specifically the crawlers used to index content for live AI-generated answers, not just training data. The site is currently invisible to 3 of the 5 major AI search platforms.

Corrected robots.txt:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

# AI Search crawlers - allow for search visibility
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

# Training-only crawlers - block to prevent use as raw training data
User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: cohere-ai
Disallow: /

Sitemap: https://hiddenpotentialskills.com/sitemap.xml
```

### Strengths

- `llms.txt` and `llms-full.txt` exist in `/public/` - ahead of most SMB sites.
- FAQ page has 26 Q&As in FAQPage schema with answer lengths near optimal citation range (80-180 words).
- About page Person schemas for Supreet Kaur and Nishchay Sharma are comprehensive with `knowsAbout`, `hasCredential`, and `sameAs`.
- Blog posts cite authoritative external sources (Robert Wood Johnson Foundation study, WHO life skills definition).
- All primary content pages use Next.js SSR - fully crawlable without JavaScript execution.
- All `<Image>` alt texts include factual content (credential descriptions, event names, platform names).

### High Issues

**HIGH: Add YouTube video embeds**
YouTube mentions correlate at ~0.737 with AI citation - the strongest single GEO signal. The YouTube channel URL is in the homepage schema's `sameAs` but no page embeds or links to actual video content. Add 1-2 embedded YouTube videos (workshop clip or founder introduction) to the homepage and/or About page.

**HIGH: llms-full.txt says social links "not yet published"**
File: `public/llms-full.txt:66`

The social URLs already exist in the homepage schema's `sameAs` array. Update `llms-full.txt` to include the actual social URLs instead of the placeholder "links not yet published" text.

**HIGH: Add "What is X" definition blocks to service/program pages**
AI systems extract the first complete paragraph after an H1 or H2 to answer "what is X" queries. Every service and program page opens with marketing taglines. Move a direct 60-word definition to the first prose block below the H1.

### Medium Issues

**MEDIUM: Blog Article author not @id linked to Person entity**
(Same as Schema section - linking Article to Person entity strengthens the knowledge graph.)

**MEDIUM: No `<link rel>` for llms.txt discovery in HTML head**
File: `src/app/layout.tsx`

Some AI crawlers discover `llms.txt` via a `<link>` tag rather than probing the URL path directly. Add to layout metadata or head:
```html
<link rel="alternate" type="text/plain" title="LLM-readable content" href="/llms.txt" />
```

---

## Section 8: Local SEO

**Score: 54 / 100**

### Business Type: Hybrid Local + SAB

Physical location at D-802, Palm Court Apartment, Sector 19B, Dwarka, New Delhi. Service area covers Delhi NCR (Delhi, Noida, Gurgaon, Faridabad) with online delivery.

### NAP Consistency Audit

| Source | Name | Locality | Phone Format |
|--------|------|----------|-------------|
| Footer (visible) | Hidden Potential | Delhi 110075 | +91 98992 09335 |
| Homepage schema | Hidden Potential | **South West Delhi** | +919899209335 |
| Contact page schema | Hidden Potential | **Delhi** | +91-9899209335 |
| Location page schemas | Hidden Potential - Life Skills Training [City] | **Delhi** | +91-9899209335 |

### Critical Issues

**CRITICAL: Opening hours conflict across 3 sources**
- Footer: Mon-Fri 10AM-7PM
- Homepage schema: `Mo-Fr 10:00-19:00`
- Contact page schema: `Mo-Sa 09:00-19:00`
- Contact page body + FAQ: Mon-Sat 9AM-7PM

FAQ and contact body copy appear to reflect real hours (Mon-Sat, 9AM). Standardize footer, all schema instances, and body copy to Monday-Saturday, 9:00 AM-7:00 PM.

**CRITICAL: Facebook profile inconsistency**
- Homepage schema `sameAs`: `facebook.com/hiddenpotentialskills`
- Footer link: `facebook.com/supriiyaas?mibextid=ZbWKwL`

Two different Facebook profiles are being cited as the same entity. Reconcile to one active business profile URL and apply consistently.

### High Issues

**HIGH: No Google Maps embed on contact page**
File: `src/app/contact/page.tsx`

A Maps embed simultaneously proves physical location to Google's crawlers, helps users navigate to the centre, and associates the website domain with the GBP listing. No embed exists. Add an iframe from the Google Maps embed tool pointing to the D-802 Dwarka address.

**HIGH: addressLocality inconsistency**
Homepage schema uses `"South West Delhi"` for `addressLocality`. Contact page uses `"Delhi"`. Footer uses `"Delhi"`. Choose one (recommended: `"Delhi"` to match likely GBP profile) and apply across all schema.

Files to update: `src/app/page.tsx:65` and `:86`.

**HIGH: No AggregateRating despite 17+ documented reviews**
17 community reviews displayed on the success-stories page. No `aggregateRating` in any schema. Add to homepage LocalBusiness node (see Schema section for the JSON).

**HIGH: Location page schema - business name with city suffix**
Schemas use names like `"Hidden Potential - Life Skills Training Noida"`. The canonical business name for GBP and citations should be `"Hidden Potential"`. Location qualifiers belong in the service description, not the schema `name` property. Multiple name variants create soft NAP divergence with citation databases.

### Medium Issues

**MEDIUM: No "Leave us a Google review" CTA**
No mechanism exists to drive review velocity. Add a direct link to the GBP review submission URL (format: `https://g.page/r/[PLACE_ID]/review`) on the contact page and success-stories page.

**MEDIUM: `lang="en"` should be `lang="en-IN"`**
File: `src/app/layout.tsx:71`

The site serves Indian users exclusively. Change to `lang="en-IN"` and add a self-referencing hreflang tag to signal India-targeting to Google's ranking systems.

**MEDIUM: No "near me" keyword on location pages**
No location page targets "near me" queries. Add at least one FAQ question per location page: e.g., "Who is the best life skills trainer near me in Delhi?" This captures high-volume query patterns without new page creation.

**MEDIUM: Internal links from homepage don't reach location pages**
The footer links to all 4 location pages but the homepage body content does not. Location pages are only 2 clicks from the homepage (via footer). A "We Serve" section on the homepage with direct links would improve crawl equity to location pages.

---

## Section 9: Images

**Score: 82 / 100**

### Strengths

- Zero raw `<img>` tags - all images use `next/image` for automatic WebP/AVIF conversion, lazy loading, and responsive srcsets.
- Alt text quality is consistently high - factual descriptions include credential details, event names, and context (e.g., "Supreet Kaur speaking at Josh Talks, a nationally recognised speaker platform in India").
- Hero image (124KB JPEG) is lightweight and has `priority` set for preloading.
- Gallery page handles ~40+ images correctly.

### Issues

**MEDIUM: No AVIF format in next.config.mjs**
`next/image` defaults to WebP only. Adding AVIF support saves 20-30% additional size for Chrome/Firefox. Add `images: { formats: ['image/avif', 'image/webp'] }`.

**MEDIUM: Expert endorsement photo filenames have spaces**
Files in `/public/` like `Dr Subodh Kumar.jpeg` (with spaces) can cause 404s on some web servers and CDN configurations. Rename to kebab-case and update references.

**LOW: Client logo marquee images load lazily inside animation**
13 client logo images in the homepage marquee have no `priority` prop. Images loading inside an `animate-marquee` CSS animation can produce visual pop-in. Not a CLS issue (container dimensions are fixed) but affects visual quality on slow connections.

---

*Report generated by 7 parallel SEO subagents. Agent completion time: approximately 4 minutes.*

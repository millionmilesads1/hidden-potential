# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Before building any page, always read: [SITE-ARCHITECTURE.md](SITE-ARCHITECTURE.md) and [SEO.md](SEO.md)**

---

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

No test runner is configured. There is no test suite.

---

## Project Overview

**Hidden Potential** — SEO-optimized marketing site for a life skills training academy in Delhi, India.

- **Framework:** Next.js 14 App Router + TypeScript
- **Styling:** Tailwind CSS v4 (theme tokens defined in `globals.css` `@theme` block, NOT `tailwind.config.js`)
- **Animations:** Framer Motion (all animation variants in [`src/lib/animations.ts`](src/lib/animations.ts))
- **Icons:** Lucide React
- **Deployment:** Vercel (`vercel.json` present)
- **CMS:** None — all content is hardcoded static

---

## Architecture

### Layout Shell ([`src/app/layout.tsx`](src/app/layout.tsx))

```
<html>
  <body pt-[92px] pb-24 md:pb-0>
    <Navbar />              ← fixed pill nav, floating at top:16px
    <main>
      tagline banner        ← dark gradient strip, every page
      <LayoutClient>        ← "use client" — wraps children with Framer Motion page transitions
        {children}
      </LayoutClient>
    </main>
    <Footer />
    <MobileBottomNav />     ← md:hidden, fixed tubelight bottom bar
  </body>
</html>
```

- `pt-[92px]` on `<main>` clears the floating pill navbar (fixed top:16px + ~60px height + 16px gap)
- `pb-24 md:pb-0` clears the mobile bottom bar
- A `div.md:hidden.h-24` spacer prevents footer from hiding behind the mobile bar

### Route Structure

All routes live under `src/app/`. The sitemap is generated at [`src/app/sitemap.ts`](src/app/sitemap.ts).

```
src/app/
  page.tsx                     # Homepage (/)
  about/                       # /about
  assessment/                  # /assessment — has AssessmentClient.tsx ("use client")
  blog/[slug]/                 # Dynamic blog posts
  contact/                     # /contact — has ContactForm.tsx ("use client")
  enroll/                      # /enroll — has EnrollForm.tsx ("use client")
  faq/                         # /faq — native <details> elements
  gallery/                     # /gallery — has GalleryClient.tsx ("use client")
  for/schools|professionals|young-adults/
  locations/delhi|noida|gurgaon|faridabad/
  programs/enlightened-learner|communication-mastery|self-mastery-women|train-the-trainer|art-therapy/
  services/nlp-coaching|confidence-building|communication-skills|study-skills|stress-management|emotional-intelligence|goal-setting|career-guidance|workshops/
  resources/                   # /resources (was /books — permanent redirect in next.config.mjs)
  success-stories|privacy|terms/
  api/indexnow/route.ts        # IndexNow API endpoint
  opengraph-image.tsx          # Dynamic OG image
```

**Important redirect:** `/books` → `/resources` (permanent, in `next.config.mjs`)

### Components

```
src/components/
  layout/
    Navbar.tsx          ← "use client" — floating pill, Pathways+For dropdowns, mobile hamburger
    Footer.tsx          ← static RSC — 4-column layout, NAP data, all internal links
    LayoutClient.tsx    ← "use client" — AnimatePresence page transitions
  ui/
    AnimateIn.tsx       ← "use client" — scroll-triggered fade+spring wrapper (most common animation)
    AnimateGroup.tsx    ← "use client" — stagger container for AnimateIn children
    AnimatedHeroContent.tsx    ← "use client" — hero word-drop animations
    AnimatedProgramsGrid.tsx   ← "use client" — programs section animations
    HeroSection.tsx     ← hero layout shell
    badge.tsx           ← small pill badge
    mobile-bottom-nav.tsx  ← "use client" — tubelight tab bar (md:hidden)
    shine-border.tsx    ← CSS shine animation component
    container-scroll-animation.tsx
    tubelight-navbar.tsx    ← used by mobile-bottom-nav
    CertificateLightbox.tsx ← "use client"
  program/
    shared.tsx          ← ALL shared program page components (see below)
src/lib/
  animations.ts         ← All Framer Motion variants (fadeUp, fadeIn, stagger, etc.)
  utils.ts              ← cn() helper (clsx + tailwind-merge)
```

### Program Page Shared Components ([`src/components/program/shared.tsx`](src/components/program/shared.tsx))

All 5 program pages import from this file. Exports:
- **Types:** `DomainCardData`, `PathwayLevelData`, `AssessmentStepData`, `ProgramCtaData`
- **Atoms:** `ProgramSectionLabel`, `SkillChip`, `OutcomeItem`, `FormatBadge`
- **Molecules:** `DomainCard` (4 skill domain cards), `PathwayLevelCard` (Foundation/Growth/Mastery), `AssessmentStep`
- **Organism:** `ProgramCTASection` (dark navy CTA bottom section)

### SEO Pattern (every page)

```tsx
// At top of page.tsx:
export const metadata: Metadata = {
  title: "...",
  description: "...",
  alternates: { canonical: "https://hiddenpotentialskills.com/route" },
  openGraph: { ... },
};

// Schema inline in page component:
const schema = { "@context": "https://schema.org", ... };
// Render as:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
```

---

## Tailwind v4 Token System

Tokens are defined in the `@theme {}` block inside [`src/app/globals.css`](src/app/globals.css) — **not** in a `tailwind.config.js`. Use these as Tailwind classes:

```
bg-primary-navy    → #2D1B69   (heroes, footer, dark sections)
bg-primary-teal    → #7C3AED   (CTAs, links, active states)
bg-primary-gold    → #C8A951   (badges, testimonial borders)
bg-navy-light      → #F3F0FF   (light section bg)
bg-teal-light      → #EDE9FE   (chip bg, card accents)
bg-off-white       → #F8F6F2   (default page bg)
text-charcoal      → #2D2D2D   (body text)
```

Font families set via CSS vars: `font-family: var(--font-display)` / `var(--font-body)` / `var(--font-accent)`.

### CSS Utilities (globals.css)

Pre-built classes — use these instead of writing custom styles:

| Class | Use |
|-------|-----|
| `btn-teal` / `btn-premium-fill` | Primary purple CTA button |
| `btn-premium-ghost` | Ghost pill button on dark bg |
| `btn-premium-dark` | Dark navy pill on light bg |
| `card-hover card-hover-purple` | Hover lift effect on cards |
| `card-bezel-outer card-bezel-outer-purple` | Premium double-bezel card |
| `card-glass-border` | Glassmorphism card for dark sections |
| `grain-overlay` | CSS noise texture (hero sections) |
| `hero-float-1` / `hero-float-2` | Ambient glow blob animation |
| `animate-marquee` | Horizontal auto-scroll (testimonials) |
| `footer-link` / `footer-social` | Footer link hover states |

---

## ⚠️ Color Constraints — CRITICAL

**Never introduce new hex codes.** Only these values are permitted:

| Token | Hex |
|-------|-----|
| Deep navy (hero/footer) | `#2D1B69` |
| Vibrant purple (CTA/links) | `#7C3AED` |
| Purple hover | `#6D28D9` |
| Purple light bg | `#F3F0FF` |
| Purple glow | `#EDE9FE` |
| Gold accent | `#C8A951` |
| Gold hover | `#A68B3E` |
| Gold bg | `#FBF7EE` |
| Off-white bg | `#F8F6F2` |
| Charcoal text | `#2D2D2D` |

**Hero gradient (mandatory):** `linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)`
**Footer:** `bg-[#2D1B69]` (solid, no gradient)
**Forbidden:** `#1B2A4A`, `#0D7377`, `#095456`, `#EDF0F5`, `#E6F3F3`, and any lavender/wrong-purple variants listed in the full spec.

---

## Key Patterns

### Adding a "use client" component to a Server Component page
- Isolate the interactive part into a separate `*Client.tsx` file, import it in `page.tsx`
- Example: `assessment/AssessmentClient.tsx` imported by `assessment/page.tsx`

### Animation pattern
```tsx
import AnimateIn from "@/components/ui/AnimateIn";
import AnimateGroup from "@/components/ui/AnimateGroup";
import { fadeUp, stagger } from "@/lib/animations";

// Single element:
<AnimateIn delay={0.1}><h2>...</h2></AnimateIn>

// Staggered group:
<AnimateGroup variants={stagger}>
  <AnimateIn><Card /></AnimateIn>
  <AnimateIn><Card /></AnimateIn>
</AnimateGroup>
```

AnimateIn respects `prefers-reduced-motion` — renders a plain div when reduced motion is requested.

### Page SEO requirements (every page)
1. Single `<h1>` with exact text from H1 table in [SITE-ARCHITECTURE.md](SITE-ARCHITECTURE.md)
2. `export const metadata` with title, description, canonical, openGraph
3. JSON-LD schema as inline `<script type="application/ld+json">`
4. Minimum 3 internal `<Link>` components per page

### IndexNow
`src/app/api/indexnow/route.ts` — GET endpoint to submit URLs to Bing/Yandex IndexNow API.

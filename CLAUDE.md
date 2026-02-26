> **Before building any page, always read: SITE-ARCHITECTURE.md and SEO.md**

# HIDDEN POTENTIAL — Next.js Build Plan for Claude Code

## PROJECT OVERVIEW

Building a 32-page SEO-optimized website for "Hidden Potential" — a structured life skills training academy in Delhi, India. The site targets students (8-21), women (28+), professionals, aspiring trainers, and school administrators.

**Domain:** hiddenpotentialskills.com
**Framework:** Next.js 14+ (App Router)
**Styling:** Tailwind CSS v4
**Deployment:** TBD (Vercel recommended)
**CMS:** None for V1 (static content, hardcoded)
**Payment:** None for V1 (inquiry-only)

---

## ⚠️ DEFINITIVE COLOR PALETTE — DO NOT DEVIATE

> **This palette is final. Never introduce new hex codes. Every page, component, and inline style must use only these values.**

### Purple Scale (Primary)
| Token | Hex | Usage |
|-------|-----|-------|
| `primary-navy` | `#2D1B69` | Heroes, footer, headings, dark sections |
| `teal-dark` | `#6D28D9` | Button hover states, active states |
| `primary-teal` | `#7C3AED` | CTAs, links, labels, section borders |
| `teal-hover` | `#8B5CF6` | Link hover, soft accent |
| `teal-light` | `#EDE9FE` | Light tag backgrounds, card accents |
| `navy-light` | `#F3F0FF` | Alternating section backgrounds |

### Dark Gradient Endpoint
| Usage | Hex | Context |
|-------|-----|---------|
| Hero gradient dark stop | `#1A0F3C` | Used ONLY inside `linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)` — nowhere else |

### Gold Accents (Secondary)
| Token | Hex | Usage |
|-------|-----|-------|
| `primary-gold` | `#C8A951` | Credential badges, testimonial borders, pre-labels |
| `gold-dark` | `#A68B3E` | Gold hover states |
| `gold-light` | `#FBF7EE` | Gold-tinted section backgrounds |

### Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| `off-white` | `#F8F6F2` | Default section background |
| `charcoal` | `#2D2D2D` | Body text |
| `gray-600` | `#6B6B6B` | Secondary text, meta |
| `gray-400` | `#9B9B9B` | Placeholder, disabled |

### ❌ FORBIDDEN COLORS — Never Use
| Forbidden Hex | Reason |
|---------------|--------|
| `#1B2A4A` | Old navy (pre-rebrand) — replaced by `#2D1B69` |
| `#0D7377` | Old teal (pre-rebrand) — replaced by `#7C3AED` |
| `#095456` | Old teal-dark (pre-rebrand) — replaced by `#6D28D9` |
| `#EDF0F5` | Old navy-light (pre-rebrand) — replaced by `#F3F0FF` |
| `#E6F3F3` | Old teal-light (pre-rebrand) — replaced by `#EDE9FE` |
| `#D6C4EB` | Lavender — incorrect gradient experiment |
| `#9B6DC6` | Medium lavender — incorrect gradient experiment |
| `#6B2FB5` | Mid purple — incorrect gradient experiment |
| `#4A1D8A` | Wrong purple — incorrect gradient experiment |
| `#7B2FBE` | Wrong purple variant |
| `#6B21A8` | Wrong purple variant |
| `#3B1F8E` | Wrong purple variant |
| `#5B189A` | Wrong purple variant |

### Hero & Dark Section Gradient (MANDATORY)
```
background: linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)
```
**This is the ONLY gradient for hero sections, pathway sections, CTA sections, and the footer background. Never change the angle, stops, or colors.**

### Decorative Blob Overlay (Hero sections only)
```
radial-gradient(circle at 85% 20%, rgba(109,40,217,0.08) 0%, transparent 60%)
```

### Footer Background
```
bg-[#2D1B69]  (solid color, no gradient)
```

---

## TECH STACK

- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS v4 with custom config
- Google Fonts: Plus Jakarta Sans, DM Sans, Lora
- next-seo or built-in metadata API for SEO
- Schema.org JSON-LD for structured data
- next-sitemap for sitemap generation
- React Hook Form for contact/inquiry forms
- Framer Motion for animations (optional, Phase 2)
- next/image for optimized images

---

## BRAND IDENTITY TOKENS (Tailwind Config)

### Colors (see "DEFINITIVE COLOR PALETTE" section above for full rules)
```
primary-navy: #2D1B69   ← deep purple (was #1B2A4A — old value, do not use)
primary-teal: #7C3AED   ← vibrant purple (was #0D7377 — old value, do not use)
primary-gold: #C8A951
off-white: #F8F6F2
charcoal: #2D2D2D

navy-light: #F3F0FF     ← purple light bg (was #EDF0F5 — old value, do not use)
teal-light: #EDE9FE     ← purple glow (was #E6F3F3 — old value, do not use)
teal-dark: #6D28D9      ← dark purple (was #095456 — old value, do not use)
gold-light: #FBF7EE
gold-dark: #A68B3E

success: #2D8F5E
warning: #E07A5F
gray-100: #F5F5F5
gray-200: #E8E8E8
gray-400: #9B9B9B
gray-600: #6B6B6B
```

### Color Usage Rule (60-25-10-5)
- Purple 60%: Headers, nav, hero sections, footer, H1/H2 → use `#2D1B69`
- Teal 25%: CTAs, links, hover states, section labels, icons → use `#7C3AED`
- Gold 10%: Accent highlights, credential badges, testimonial borders → use `#C8A951`
- Off-white 5%: Alternating section backgrounds → use `#F8F6F2`

### Typography
```
font-display: "Plus Jakarta Sans" (400,500,600,700,800)
font-body: "DM Sans" (400,500,700)
font-accent: "Lora" italic only (400,600)
```

### Type Scale
```
hero-h1: Plus Jakarta Sans 800, 42-56px (responsive)
section-h2: Plus Jakarta Sans 700, 28-36px
card-h3: Plus Jakarta Sans 700, 20-24px
body: DM Sans 400, 16px, line-height 1.7
body-bold: DM Sans 700, 16px
quote: Lora Italic 400, 18-22px
label: Plus Jakarta Sans 700, 11-12px, uppercase, tracking wider
button: Plus Jakarta Sans 700, 14px
nav: Plus Jakarta Sans 600, 14px
```

### Spacing Scale
```
xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 48px, 2xl: 96px
```

### Border Radius
```
sm: 6px, md: 10px, lg: 16px
```

---

## COMPLETE SITEMAP & ROUTES

### TIER 1 — Core Pages (In Navigation)
| # | Page | Route | Nav Label |
|---|------|-------|-----------|
| 1 | Homepage | / | Home |
| 2 | About Supreet Kaur | /about | About |
| 3 | Assessment Page | /assessment | Assessment |
| 4 | Contact / Book Evaluation | /contact | Contact |
| 5 | Blog Hub | /blog | Blog |
| 6 | Book Free Evaluation (CTA) | /contact#book-evaluation | CTA Button |

### TIER 1 — Programs (Nav Dropdown: "Pathways")
| # | Page | Route |
|---|------|-------|
| 7 | An Enlightened Learner (AEL) | /programs/enlightened-learner |
| 8 | Communication Mastery | /programs/communication-mastery |
| 9 | Self Mastery for Women | /programs/self-mastery-women |
| 10 | Train the Trainer Certification | /programs/train-the-trainer |
| 11 | Art Therapy for Healing | /programs/art-therapy |

### TIER 2 — Sub-Service Pages (Internal Link + Footer Only)
| # | Page | Route |
|---|------|-------|
| 12 | NLP Coaching | /services/nlp-coaching |
| 13 | Confidence Building | /services/confidence-building |
| 14 | Communication Skills Training | /services/communication-skills |
| 15 | Study Skills & Memory | /services/study-skills |
| 16 | Stress Management | /services/stress-management |
| 17 | Emotional Intelligence | /services/emotional-intelligence |
| 18 | Goal Setting & Accountability | /services/goal-setting |
| 19 | Career & Life Transition | /services/career-transition |
| 20 | Group Workshops | /services/workshops |

### TIER 2 — Location Pages (Footer + Internal Links)
| # | Page | Route |
|---|------|-------|
| 21 | Life Coach in Delhi | /locations/delhi |
| 22 | Life Skills Coaching in Noida | /locations/noida |
| 23 | Life Skills Coaching in Gurgaon | /locations/gurgaon |
| 24 | Life Skills Coaching in Faridabad | /locations/faridabad |

### TIER 2 — Audience Pages (Internal Links)
| # | Page | Route |
|---|------|-------|
| 25 | Life Skills for Professionals | /for/professionals |
| 26 | Life Skills for Young Adults | /for/young-adults |

### TIER 2 — B2B Page
| # | Page | Route |
|---|------|-------|
| 27 | Life Skills for Schools | /for/schools |

### TIER 3 — Supporting Pages
| # | Page | Route |
|---|------|-------|
| 28 | Success Stories | /success-stories |
| 29 | FAQ | /faq |
| 30 | Books by Supreet Kaur | /books |
| 31 | Enrollment / Apply | /enroll |
| 32 | Privacy Policy | /privacy |
| 33 | Terms of Service | /terms |

---

## NAVIGATION STRUCTURE

### Desktop Nav
```
Logo | Home | Pathways ▼ | Assessment | For Schools | About | Blog | [Book Free Evaluation - CTA Button]

Pathways Dropdown:
├── An Enlightened Learner (Ages 8-21)
├── Communication Mastery (Ages 8-65)
├── Self Mastery for Women (28+)
├── Train the Trainer Certification
└── Art Therapy for Healing
```

### Mobile Nav (Hamburger)
Same structure, full-screen overlay with navy background.

### Footer
```
Column 1: Logo + Tagline + Social Links
Column 2: Programs (all 5)
Column 3: Services (all 9 sub-services)
Column 4: Locations (all 4 cities) + Contact Info
Bottom: © Hidden Potential | Privacy | Terms | MSME Reg | Skill India
```

---

## GLOBAL COMPONENTS

### 1. Navbar
- Sticky on scroll
- Deep purple background (#2D1B69)
- Logo left, nav center, CTA button right
- CTA: "Book Free Evaluation" → teal bg, white text
- Mobile: hamburger menu, full-screen navy overlay
- Active page indicator: gold underline

### 2. Footer
- Navy background, 4-column layout
- All internal links present for SEO
- NAP (Name, Address, Phone) for local SEO
- WhatsApp link + Phone + Email
- MSME registration badge
- Social links (placeholder URLs for V1)

### 3. CTA Section (Reusable)
- Two variants: Light (off-white bg) and Dark (navy bg)
- Heading + subtext + 2 buttons (Primary + Secondary)
- Used at bottom of every page

### 4. Trust Bar (Reusable)
- Stats: 14+ Years | 5000+ Trained | 200+ Trainers | Josh Talks Speaker
- Used on Homepage, About, For Schools

### 5. Credential Badges (Reusable)
- NLP Practitioner
- Harvard Life Skills (Affiliated)
- Graphology (American Board)
- Train the Trainer (ILA)
- Art Therapy (IISD)
- Masters in Psychology
- Published Author (2 Books)
- MSME Registered
- Skill India Certified
- Award-Winning Educator

### 6. Program Card
- White bg, subtle border
- Icon/illustration area (teal or gold bg)
- Program name (navy, Plus Jakarta Sans 700)
- Age range badge
- 1-line description
- "Explore Pathway →" link (teal)

### 7. Testimonial Card
- White bg, gold left border
- Quote text (Lora Italic)
- Name + designation
- Photo placeholder (circle)

### 8. Section Header
- Label (teal, uppercase, small) + H2 (navy) + Subtitle (charcoal)
- Centered or left-aligned variants

---

## PAGE-BY-PAGE CONTENT SPECS

### PAGE 1: HOMEPAGE (/)

**Title Tag:** Life Skills Training in Delhi | Hidden Potential — Structured Growth Pathways
**Meta:** Structured life skills programs for students, women & professionals in Delhi. Assessment-based placement. 14+ years experience. 5000+ trained. Book free evaluation.
**Schema:** Organization + LocalBusiness

**Sections:**
1. HERO — Dark navy gradient bg
   - H1: "Build the Inner Strength That Schools Never Taught You"
   - Subtitle: "Structured transformational pathways for students, women, professionals and future trainers."
   - CTA 1: "Take the Assessment" (teal) → /assessment
   - CTA 2: "Explore Your Pathway" (outline) → #programs
   - Trust badges row below CTAs

2. BRAND STORY
   - "For years, academic systems focused on grades, performance and achievement. But something essential was missing."
   - Emotional resilience. Self-awareness. Communication mastery. Clarity of identity.
   - "Hidden Potential was created to bridge that gap."
   - "This is not a training institute. It is a transformational academy..."

3. TRANSFORMATION MODEL
   - 3 Pillars: System | Science | Structure
   - 4 Growth Stages: Awareness → Practice → Application → Mastery
   - 3 Development Levels: Foundation → Growth → Mastery Track
   - Visual: Clean infographic-style layout

4. PROGRAMS (as Pathway Cards)
   - 5 cards with "From X to Y" transformation headlines
   - AEL: "From hesitation to confidence. From emotional confusion to clarity."
   - Comm: "From fear of speaking to leadership presence."
   - Women: "From emotional overwhelm to grounded strength."
   - TTT: "From learner to leader. From passion to professional pathway."
   - Art: "From mental clutter to emotional clarity."

5. DIFFERENTIATOR
   - "Most programs offer information. We design transformation."
   - Assessment-based placement, Structured progression, Measurable growth, NLP integration, Multi-level pathways, Identity-driven development

6. TRUST BAR (Stats)

7. TESTIMONIALS (3 cards, carousel on mobile)

8. ENROLLMENT FLOW
   - Step 1: Take the Life Skills Assessment
   - Step 2: Receive Your Personalized Pathway
   - Step 3: Begin Your Transformation
   - Step 4: Progress Through Structured Levels
   - "No guesswork. Only guided evolution."

9. FINAL CTA
   - "You don't need more motivation. You need structured transformation."
   - CTA: "Begin Your Journey" → /assessment

---

### PAGE 2: ABOUT SUPREET KAUR (/about)

**Title Tag:** About Supreet Kaur | Life Skills Coach in Delhi — 14+ Years Experience
**Meta:** Meet Supreet Kaur, founder of Hidden Potential. Masters in Psychology, NLP practitioner, certified art therapist, Josh Talks speaker. 5000+ individuals trained across Delhi NCR.
**Schema:** Person + hasCredential

**Sections:**
1. HERO — Photo left, bio right
   - Name: Supreet Kaur
   - Title: "Founder & Director, Hidden Potential"
   - Bio: Full bio from content doc (structured, not motivational)
   
2. PROFESSIONAL EXPERTISE
   - Emotional Intelligence & Behavioural Development
   - Communication & Leadership Skills
   - NLP-based Reprogramming Techniques
   - Structured Life Skills Curriculum Design
   - Art Therapy & Reflective Practices
   - Train-the-Trainer Certification Programs

3. WHY HIDDEN POTENTIAL WAS BUILT
   - Origin story: gap between education system and real growth
   - "Awareness → Practice → Application → Mastery"

4. HER APPROACH: System | Science | Structure
   - System: Defined developmental pathway
   - Science: EI research, behavioural psychology, NLP frameworks
   - Structure: Guided practice, real-life application, feedback

5. CREDENTIALS GRID
   - Masters in Psychology
   - NLP Practitioner
   - Harvard Life Skills (Affiliated)
   - Graphology (American Board)
   - Train the Trainer (ILA)
   - Art Therapy (IISD)
   - MSME Registered
   - Skill India Certified

6. IMPACT & RECOGNITION
   - 14+ Years Experience
   - 5000+ Individuals Trained
   - 200+ Trainers Developed
   - Published Author of Two Books
   - Josh Talks Speaker
   - Award-Winning Educator

7. BOOKS SECTION (showcase)
   - Book covers (placeholder)
   - Titles (placeholder)
   - Brief descriptions

8. CTA: Book a Discovery Call

---

### PAGES 7-11: PROGRAM PAGES (Template)

Each program page follows the SAME 7-section structure:

1. **HERO** — Program name, transformation headline ("From X to Y"), age range badge, CTA
2. **What This Program Delivers** — Core outcomes list + Pre/Post Assessment mention
3. **Who It Is Designed For** — Target audience + specific challenges
4. **Key Areas / Skill Domains** — 4 structured domains with descriptions
5. **Development Pathway** — Foundation/Growth/Mastery with durations + learning model
6. **Assessment & Measurement** — Pre-assessment, feedback, observation, post-assessment
7. **Outcomes + Format** — Expected results, mode (Online/Offline/Hybrid), CTAs

**Program-Specific Data:**

#### An Enlightened Learner (/programs/enlightened-learner)
- Ages: 8-21 (sub-groups: 8-12, 13-16, 17-21)
- Duration: Foundation 3mo / Growth 6mo / Mastery 12mo
- 4 Domains: Self Mastery | Communication & Social | Academic & Thinking | Real-World Readiness
- 13 key skills listed
- CTAs: Take a Skill Assessment | Apply for Enrollment

#### Communication Mastery (/programs/communication-mastery)
- Ages: 8-65
- Duration: Foundation 3mo / Growth 6mo / Mastery 12mo
- 4 Domains: Confidence & Presence | Verbal & Non-Verbal | Professional Communication | Leadership Communication
- Mode: Offline | Online | Schools and Corporate Workshops
- CTAs: Book a Communication Assessment | Enroll

#### Self Mastery for Women (/programs/self-mastery-women)
- Ages: 28+
- Duration: Foundation / Growth / Mastery (stages, not fixed months)
- 4 Domains: Inner Self & Identity | Emotional Strength | Relationships & Society | Independence & Personal Growth
- Learning model: Awareness → Practice → Application → Integration
- Mode: Group | 1:1 Available
- CTAs: Book a Discovery Session | Begin Your Journey

#### Train the Trainer (/programs/train-the-trainer)
- Duration: 1-Month Crash Course OR 3-Month Full Certification
- 4 Domains: Life Skills Curriculum Mastery | Training & Facilitation | Assessment & Program Design | NLP Integration
- Certification: Yes (MSME + Skill India)
- Learning model: Awareness → Practice → Application → Demonstration
- CTAs: Apply for Course | Book a Discovery Call

#### Art Therapy (/programs/art-therapy)
- Ages: All age groups
- Duration: 1-Month Reset / 3-Month Clarity / 6-Month Integration
- 3 Pillars: Mindfulness & Meditation | Reflective Journaling | Art-Based Therapeutic Expression
- Learning model: Awareness → Expression → Reflection → Integration
- "No artistic skill required. Only willingness to grow."
- CTAs: Book a Session | Begin Your Reflective Journey

---

### PAGES 12-20: SUB-SERVICE PAGES (Template)

Each sub-service page:
- H1 with location keyword: "[Service] Training in Delhi"
- 500-800 words unique content
- What it is, who it's for, how HP approaches it
- Link to relevant program pages
- CTA: Book Free Evaluation
- Schema: Service

### PAGES 21-24: LOCATION PAGES (Template)

Each location page:
- H1: "Life Skills Coaching in [City]"
- 600-1000 words unique content about that city's needs
- All programs available in that location
- Local testimonial if available
- Contact info + service area
- Schema: LocalBusiness with areaServed

### PAGE 27: FOR SCHOOLS (/for/schools)

- B2B landing page for school administrators
- H1: "Life Skills Programs for Schools in Delhi NCR"
- Stats: 5000+ learners, 200+ trainers
- Programs: Curriculum, Communication, EI, Teacher Development, Parent Sessions
- NEP 2020 alignment
- Partnership process: Needs Assessment → Curriculum Design → Implementation → Assessment
- Testimonial: Raaj Kumar (Managing Trustee)
- CTA: Schedule a School Consultation

---

## SEO REQUIREMENTS (Every Page)

1. Unique title tag (50-60 chars) with primary keyword
2. Unique meta description (150-160 chars) with CTA
3. H1 tag with primary keyword (only one per page)
4. Structured H2/H3 hierarchy
5. Internal links to 3-5 other pages minimum
6. Image alt text with keywords
7. Schema.org JSON-LD (page-type specific)
8. Open Graph + Twitter Card meta tags
9. Canonical URL
10. Next/prev for paginated content (blog)

**Schema Types by Page:**
- Homepage: Organization + LocalBusiness
- About: Person + hasCredential
- Programs: Course + hasCourseInstance
- Services: Service
- Locations: LocalBusiness + areaServed
- Blog: Article + author
- For Schools: EducationalOrganization
- FAQ: FAQPage

---

## BUILD ORDER (Phases)

### PHASE 1 — Foundation (Week 1)
- [ ] Next.js project setup with App Router
- [ ] Tailwind config with all brand tokens
- [ ] Google Fonts setup (Plus Jakarta Sans, DM Sans, Lora)
- [ ] Global layout (Navbar + Footer)
- [ ] Reusable components: CTA Section, Trust Bar, Section Header, Program Card
- [ ] Homepage (complete)
- [ ] Contact page with inquiry form

### PHASE 2 — Core Pages (Week 2)
- [ ] About Supreet Kaur (full content)
- [ ] Assessment page
- [ ] All 5 Program pages (using template)
- [ ] Enrollment/Apply page
- [ ] For Schools (B2B page)

### PHASE 3 — SEO Pages (Week 3)
- [ ] 9 Sub-service pages
- [ ] 4 Location pages
- [ ] 2 Audience pages
- [ ] FAQ page
- [ ] Success Stories page
- [ ] Books page

### PHASE 4 — Blog & SEO (Week 4)
- [ ] Blog hub with listing
- [ ] Blog post template
- [ ] 3-5 initial blog posts
- [ ] Sitemap generation
- [ ] Schema markup all pages
- [ ] Meta tags audit
- [ ] robots.txt
- [ ] Privacy Policy + Terms

### PHASE 5 — Polish & Launch
- [ ] Mobile responsive testing
- [ ] Performance optimization (Core Web Vitals)
- [ ] Image optimization + placeholders
- [ ] 404 page
- [ ] Loading states
- [ ] Analytics setup (GA4)
- [ ] Search Console submission

---

## DUMMY/PLACEHOLDER ITEMS FOR V1

- Photos: Use solid color blocks or abstract geometric patterns matching brand
- Testimonial photos: Circle placeholder with initials
- Book covers: Styled placeholder cards
- Calendly: Link to # with "Coming Soon" or direct WhatsApp link
- Social URLs: Link to # 
- Pricing: Show program structure without prices, CTA to "Get Pricing"
- Blog posts: 3 placeholder articles with real titles from blog strategy
- Payment gateway: Not needed — inquiry form only

---

## CONTACT & BUSINESS DATA

- Business Name: Hidden Potential (MSME registered name)
- Website Name: Hidden Potential Skills
- Founder: Supreet Kaur
- Phone: 9899209335
- Email: hiddenpotential2030@gmail.com
- Address: D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka, South West Delhi, 110075
- Hours: Weekdays 10 AM - 7 PM (weekends/evenings by appointment)
- Service Areas: Delhi (Dwarka), Noida, Gurgaon, Faridabad, Online Pan-India


---

## COMPLETE SEO SPECIFICATIONS (EVERY PAGE)

### MASTER KEYWORD MAP

Each page targets a PRIMARY keyword (in title tag + H1) and 2-3 SECONDARY keywords (in H2s, body copy, meta description). Never stuff keywords — write naturally but ensure these terms appear.

#### TIER 1 — Core Pages

| Page | Primary Keyword | Secondary Keywords | Monthly Search Volume (India) |
|------|----------------|-------------------|-------------------------------|
| Homepage (/) | life skills training in delhi | life skills coach delhi, life skills program, personality development delhi | 1,900 + 720 + 590 |
| About (/about) | life skills coach in delhi | life coach delhi, supreet kaur life skills, NLP coach delhi | 720 + 480 + 390 |
| Assessment (/assessment) | life skills assessment | life skills test for students, personality assessment delhi | 1,300 + 880 |
| Contact (/contact) | life skills coaching near me | book life coach delhi, life skills evaluation | 590 + 210 |
| Blog Hub (/blog) | life skills blog | life skills articles, personal development blog india | 480 + 320 |

#### TIER 1 — Program Pages

| Page | Primary Keyword | Secondary Keywords | Monthly Search Volume (India) |
|------|----------------|-------------------|-------------------------------|
| AEL (/programs/enlightened-learner) | life skills program for students | life skills for children, personality development for students, life skills for teenagers | 2,400 + 1,600 + 1,300 |
| Communication (/programs/communication-mastery) | communication skills training | public speaking course delhi, communication skills course, personality development course | 6,600 + 2,900 + 8,100 |
| Women (/programs/self-mastery-women) | personality development for women | women empowerment program, self improvement for women, confidence building for women | 1,300 + 880 + 720 |
| TTT (/programs/train-the-trainer) | train the trainer certification india | life skills trainer course, train the trainer program, become a life coach india | 2,900 + 1,600 + 1,300 |
| Art Therapy (/programs/art-therapy) | art therapy in delhi | art therapy for anxiety, art therapy for students, creative therapy near me | 880 + 590 + 480 |

#### TIER 2 — Sub-Service Pages

| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| NLP (/services/nlp-coaching) | NLP coach in delhi | NLP therapy delhi, neuro linguistic programming near me |
| Confidence (/services/confidence-building) | confidence building program delhi | how to build confidence, self confidence training |
| Communication (/services/communication-skills) | communication skills training delhi | speaking skills improvement, verbal communication course |
| Study Skills (/services/study-skills) | study skills training for students | memory improvement course, how to study effectively |
| Stress (/services/stress-management) | stress management coaching delhi | stress relief program, how to manage stress |
| EI (/services/emotional-intelligence) | emotional intelligence coaching | EI training delhi, emotional intelligence for students |
| Goal Setting (/services/goal-setting) | goal setting workshop delhi | accountability coaching, goal planning program |
| Career (/services/career-transition) | career coaching delhi | life transition coaching, career guidance program |
| Workshops (/services/workshops) | life skills workshop delhi | team building workshop, group workshop near me |

#### TIER 2 — Location Pages

| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| Delhi (/locations/delhi) | life coach in delhi | life skills training dwarka, personality development delhi |
| Noida (/locations/noida) | life skills coaching in noida | personality development noida, life coach noida |
| Gurgaon (/locations/gurgaon) | life skills coaching in gurgaon | personality development gurgaon, life coach gurgaon |
| Faridabad (/locations/faridabad) | life skills coaching in faridabad | personality development faridabad, life coach faridabad |

#### TIER 2 — Audience & B2B Pages

| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| Professionals (/for/professionals) | life skills for professionals | soft skills training for employees, corporate personality development |
| Young Adults (/for/young-adults) | life skills for young adults | personality development for college students, career readiness program |
| Schools (/for/schools) | life skills program for schools | NEP 2020 life skills, life skills training for school students delhi |

#### TIER 3 — Supporting Pages

| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| Success Stories (/success-stories) | life skills training results | student transformation stories, coaching testimonials |
| FAQ (/faq) | life skills training FAQ | what are life skills, life coaching questions |
| Books (/books) | supreet kaur books | life skills books india, personal development books |
| Enrollment (/enroll) | enroll life skills program | join life skills course delhi, apply life skills training |

---

### COMPLETE TITLE TAGS & META DESCRIPTIONS (ALL PAGES)

RULES:
- Title tags: 50-60 characters, primary keyword first, brand name last
- Meta descriptions: 150-160 characters, include CTA language, one keyword minimum
- Every title tag ends with "| Hidden Potential" (unless too long, then omit)

#### Core Pages

**Homepage (/)**
- Title: Life Skills Training in Delhi | Structured Growth Pathways | Hidden Potential
- Meta: Structured life skills programs for students, women & professionals in Delhi. Assessment-based placement. 14+ years experience. Book your free evaluation today.

**About (/about)**
- Title: About Supreet Kaur | Life Skills Coach in Delhi | Hidden Potential
- Meta: Meet Supreet Kaur — Masters in Psychology, NLP practitioner, Josh Talks speaker. 14+ years training 5000+ individuals. Award-winning life skills educator in Delhi.

**Assessment (/assessment)**
- Title: Life Skills Assessment | Discover Your Growth Pathway | Hidden Potential
- Meta: Take a structured life skills assessment to identify strengths, gaps, and the right development pathway. Confidential evaluation by certified professionals. Free consultation.

**Contact (/contact)**
- Title: Book Free Evaluation | Contact Hidden Potential | Life Skills Delhi
- Meta: Schedule a free 30-minute life skills evaluation call. WhatsApp, phone, or online. Serving Delhi, Noida, Gurgaon, Faridabad & online pan-India.

**Blog Hub (/blog)**
- Title: Life Skills Blog | Tips, Research & Insights | Hidden Potential
- Meta: Expert articles on emotional intelligence, communication, confidence building, NLP, and structured personal development. Written by certified life skills professionals.

#### Program Pages

**An Enlightened Learner (/programs/enlightened-learner)**
- Title: Life Skills Program for Students (Ages 8-21) | An Enlightened Learner
- Meta: Structured life skills development for children & teens. Emotional intelligence, communication, self-discipline & academic efficiency. Pre & post assessment. 3 levels.

**Communication Mastery (/programs/communication-mastery)**
- Title: Communication Skills Training & Public Speaking Course | Hidden Potential
- Meta: Structured communication & leadership program for ages 8-65. Public speaking, presentation skills, professional communication. Foundation to Mastery levels.

**Self Mastery for Women (/programs/self-mastery-women)**
- Title: Personality Development for Women (28+) | Self Mastery Program
- Meta: Holistic growth program for women. Emotional resilience, personal identity, financial independence & confident expression. Group & 1:1 options available.

**Train the Trainer (/programs/train-the-trainer)**
- Title: Train the Trainer Certification India | Life Skills Facilitator Course
- Meta: Become a certified life skills trainer. 1-month or 3-month programs. NLP integration, curriculum design, practical facilitation. MSME + Skill India certified.

**Art Therapy (/programs/art-therapy)**
- Title: Art Therapy in Delhi | Healing Through Creative Expression | Hidden Potential
- Meta: Guided art therapy for stress, anxiety & emotional clarity. Meditation, journaling & therapeutic art. No artistic skill required. 1, 3 & 6-month programs.

#### Sub-Service Pages

**NLP Coaching (/services/nlp-coaching)**
- Title: NLP Coach in Delhi | Neuro-Linguistic Programming | Hidden Potential
- Meta: Certified NLP coaching for belief restructuring, emotional reprogramming & communication modeling. For students & adults. Book your session in Delhi.

**Confidence Building (/services/confidence-building)**
- Title: Confidence Building Program in Delhi | Overcome Hesitation
- Meta: Structured confidence training for students, professionals & women. Overcome self-doubt, build self-assurance & develop strong self-image. Assessment-based approach.

**Communication Skills (/services/communication-skills)**
- Title: Communication Skills Training in Delhi | Speaking & Expression
- Meta: Develop clear, confident communication. Public speaking, assertiveness, active listening & professional expression. Individual & group sessions available.

**Study Skills (/services/study-skills)**
- Title: Study Skills Training for Students | Memory & Focus Improvement
- Meta: Smart study strategies, memory techniques, time management & focus training for students. Research-backed methods for academic performance improvement.

**Stress Management (/services/stress-management)**
- Title: Stress Management Coaching in Delhi | Emotional Regulation
- Meta: Structured stress management program. Mindfulness techniques, emotional regulation, work-life balance strategies. For students, women & professionals.

**Emotional Intelligence (/services/emotional-intelligence)**
- Title: Emotional Intelligence Coaching | EI Training in Delhi
- Meta: Develop emotional awareness, empathy, self-regulation & social skills. Science-backed EI training for students, professionals & educators.

**Goal Setting (/services/goal-setting)**
- Title: Goal Setting Workshop in Delhi | Accountability Coaching
- Meta: Structured goal-setting & accountability program. Clear planning frameworks, progress tracking & motivated execution. Individual & group formats.

**Career Transition (/services/career-transition)**
- Title: Career Coaching in Delhi | Life Transition Guidance
- Meta: Navigate career changes & life transitions with clarity. Decision-making frameworks, confidence building & professional direction. Book free consultation.

**Group Workshops (/services/workshops)**
- Title: Life Skills Workshop in Delhi | Group & Corporate Programs
- Meta: Interactive life skills workshops for schools, corporates & community groups. Team building, communication, emotional intelligence. Customizable programs.

#### Location Pages

**Delhi (/locations/delhi)**
- Title: Life Coach in Delhi | Life Skills Training Dwarka & South Delhi
- Meta: Expert life skills coaching in Delhi. Serving Dwarka, South Delhi & nearby areas. 14+ years experience, 5000+ trained. Book your free evaluation.

**Noida (/locations/noida)**
- Title: Life Skills Coaching in Noida | Personality Development Program
- Meta: Structured life skills training in Noida. Communication, confidence, emotional intelligence programs for students & professionals. Online & offline.

**Gurgaon (/locations/gurgaon)**
- Title: Life Skills Coaching in Gurgaon | Professional Development
- Meta: Life skills & personality development programs in Gurgaon. Corporate workshops, student programs, communication training. Assessment-based approach.

**Faridabad (/locations/faridabad)**
- Title: Life Skills Coaching in Faridabad | Student & Family Programs
- Meta: Life skills training in Faridabad. Programs for students, women & families. Emotional intelligence, communication, confidence building. Free evaluation.

#### Audience & B2B Pages

**Professionals (/for/professionals)**
- Title: Life Skills for Professionals | Corporate Soft Skills Training Delhi
- Meta: Structured life skills & soft skills development for working professionals. Communication, leadership, stress management & emotional intelligence programs.

**Young Adults (/for/young-adults)**
- Title: Life Skills for Young Adults (18-25) | Career Readiness Delhi
- Meta: Prepare for professional life with structured life skills training. Communication, confidence, decision-making & leadership development for college students.

**For Schools (/for/schools)**
- Title: Life Skills Program for Schools in Delhi NCR | NEP 2020 Aligned
- Meta: Structured life skills curriculum for schools. NEP 2020 aligned. 5000+ students trained, 200+ trainers developed. Annual partnership programs available.

#### Supporting Pages

**Success Stories (/success-stories)**
- Title: Success Stories | Life Skills Training Results | Hidden Potential
- Meta: Real transformation stories from students, women & professionals trained at Hidden Potential. Measurable growth through structured life skills pathways.

**FAQ (/faq)**
- Title: FAQ | Life Skills Training Questions Answered | Hidden Potential
- Meta: Common questions about life skills programs, enrollment process, assessment, pricing, online options & certification at Hidden Potential.

**Books (/books)**
- Title: Books by Supreet Kaur | Life Skills & Personal Development
- Meta: Published works by Supreet Kaur on life skills education, personal development & structured growth. Available for purchase.

**Enrollment (/enroll)**
- Title: Enroll in Life Skills Program | Apply Now | Hidden Potential
- Meta: Start your transformation journey. Take the assessment, receive your personalized pathway recommendation & begin structured life skills development.

**Privacy Policy (/privacy)**
- Title: Privacy Policy | Hidden Potential
- Meta: How Hidden Potential collects, uses and protects your personal information. Read our complete privacy policy.

**Terms of Service (/terms)**
- Title: Terms of Service | Hidden Potential
- Meta: Terms and conditions for using Hidden Potential website and enrolling in life skills programs.

---

### INTERNAL LINKING MAP

Every page MUST link to at least 3 other pages. This tells Google which pages matter and how topics connect.

#### Homepage Links To:
→ All 5 program pages (pathway cards)
→ /assessment (hero CTA)
→ /about (brand story section)
→ /contact (final CTA)
→ /for/schools (if space in nav or body)
→ /success-stories (testimonials section)

#### About Page Links To:
→ /programs/enlightened-learner (signature program mention)
→ /programs/train-the-trainer (certification mention)
→ /books (book showcase section)
→ /contact (CTA)
→ /assessment (CTA)

#### Each Program Page Links To:
→ /assessment (primary CTA)
→ /contact (secondary CTA)
→ /about (founder credentials mention)
→ 2-3 relevant sub-service pages (e.g., AEL → /services/communication-skills, /services/confidence-building, /services/emotional-intelligence)
→ 1-2 relevant location pages (mention "Available in Delhi, Noida, Gurgaon, Faridabad")
→ Related program page (cross-sell: AEL → Communication Mastery, Women → Art Therapy)

#### Each Sub-Service Page Links To:
→ Parent program page (e.g., /services/confidence-building → /programs/enlightened-learner AND /programs/communication-mastery)
→ /assessment (CTA)
→ /contact (CTA)
→ 1-2 other related sub-service pages
→ Nearest location page

#### Each Location Page Links To:
→ All 5 program pages
→ /assessment (CTA)
→ /contact (CTA)
→ /for/schools (if applicable)
→ 2-3 relevant sub-service pages

#### For Schools Page Links To:
→ /programs/enlightened-learner
→ /programs/communication-mastery
→ /programs/train-the-trainer
→ /services/workshops
→ /contact (consultation CTA)
→ /success-stories (testimonial proof)
→ /about (founder credentials)

#### Blog Posts Link To:
→ Each blog post MUST link to 3-5 internal pages
→ Primary program page related to topic
→ 1-2 sub-service pages related to topic
→ Relevant location page
→ /assessment (CTA within article)

---

### BLOG CONTENT → SERVICE PAGE MAPPING

This maps which blog topics drive traffic to which service/program pages. When writing blog posts, each article funnels readers to specific pages.

| Blog Topic | Target Keyword | Links To |
|-----------|---------------|----------|
| How to Improve Communication Skills | communication skills improvement (22,200/mo) | /programs/communication-mastery, /services/communication-skills |
| How to Build Self Confidence | how to build self confidence (14,800/mo) | /services/confidence-building, /programs/enlightened-learner |
| What Are Life Skills and Why Do They Matter | what are life skills (33,100/mo) | Homepage, /programs/enlightened-learner, /for/schools |
| Emotional Intelligence Guide for Students | emotional intelligence for students (6,600/mo) | /services/emotional-intelligence, /programs/enlightened-learner |
| How to Overcome Stage Fright | how to overcome stage fright (8,100/mo) | /programs/communication-mastery, /services/confidence-building |
| Stress Management Techniques for Students | stress management for students (9,900/mo) | /services/stress-management, /programs/enlightened-learner |
| Best Personality Development Tips | personality development tips (40,500/mo) | Homepage, /programs/communication-mastery, /for/professionals |
| Goal Setting Strategies That Work | goal setting strategies (4,400/mo) | /services/goal-setting, /programs/enlightened-learner |
| How to Become a Life Coach in India | how to become a life coach in india (6,600/mo) | /programs/train-the-trainer |
| Art Therapy Benefits and Techniques | art therapy benefits (3,600/mo) | /programs/art-therapy |

---

### SCHEMA MARKUP SPECIFICATIONS

Implement JSON-LD structured data in the <head> of every page using Next.js metadata API or a dedicated component.

#### Homepage Schema
```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "EducationalOrganization"],
  "name": "Hidden Potential",
  "alternateName": "Hidden Potential Skills",
  "url": "https://hiddenpotentialskills.com",
  "logo": "https://hiddenpotentialskills.com/logo.png",
  "description": "Structured life skills training academy in Delhi offering assessment-based programs for students, women, professionals and aspiring trainers.",
  "founder": {
    "@type": "Person",
    "name": "Supreet Kaur",
    "jobTitle": "Founder & Director",
    "description": "Masters in Psychology, NLP Practitioner, Josh Talks Speaker, Award-Winning Life Skills Educator"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka",
    "addressLocality": "Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110075",
    "addressCountry": "IN"
  },
  "telephone": "+91-9899209335",
  "email": "hiddenpotential2030@gmail.com",
  "openingHours": "Mo-Fr 10:00-19:00",
  "areaServed": [
    {"@type": "City", "name": "Delhi"},
    {"@type": "City", "name": "Noida"},
    {"@type": "City", "name": "Gurgaon"},
    {"@type": "City", "name": "Faridabad"}
  ],
  "sameAs": [],
  "priceRange": "₹₹"
}
```

#### About Page Schema (Add to homepage schema)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Supreet Kaur",
  "jobTitle": "Founder & Director, Hidden Potential",
  "description": "Life skills educator with 14+ years experience, Masters in Psychology, NLP Practitioner, Josh Talks Speaker",
  "knowsAbout": ["Life Skills Education", "Emotional Intelligence", "NLP", "Art Therapy", "Communication Training", "Train the Trainer"],
  "hasCredential": [
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Masters in Psychology"},
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "certificate", "name": "NLP Practitioner"},
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "certificate", "name": "Harvard Affiliated Life Skills"},
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "certificate", "name": "Graphology - American Board"},
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "certificate", "name": "Art Therapy - IISD"},
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "certificate", "name": "Train the Trainer - ILA"}
  ],
  "award": "Award-Winning Life Skills Educator",
  "worksFor": {"@type": "Organization", "name": "Hidden Potential"}
}
```

#### Program Pages Schema (Template — customize per program)
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "[Program Name]",
  "description": "[Program description]",
  "provider": {
    "@type": "Organization",
    "name": "Hidden Potential",
    "url": "https://hiddenpotentialskills.com"
  },
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "name": "Foundation Level",
      "courseMode": ["onsite", "online", "blended"],
      "duration": "P3M",
      "locationCreated": {"@type": "Place", "address": {"@type": "PostalAddress", "addressLocality": "Delhi", "addressCountry": "IN"}}
    },
    {
      "@type": "CourseInstance",
      "name": "Growth Level",
      "courseMode": ["onsite", "online", "blended"],
      "duration": "P6M"
    },
    {
      "@type": "CourseInstance",
      "name": "Mastery Level",
      "courseMode": ["onsite", "online", "blended"],
      "duration": "P12M"
    }
  ],
  "educationalLevel": "[age range]",
  "teaches": ["[skill 1]", "[skill 2]", "[skill 3]"],
  "numberOfCredits": 0,
  "isAccessibleForFree": false
}
```

#### Sub-Service Pages Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service Name]",
  "description": "[Service description]",
  "provider": {"@type": "Organization", "name": "Hidden Potential"},
  "areaServed": [
    {"@type": "City", "name": "Delhi"},
    {"@type": "City", "name": "Noida"},
    {"@type": "City", "name": "Gurgaon"},
    {"@type": "City", "name": "Faridabad"}
  ],
  "serviceType": "Life Skills Training"
}
```

#### Location Pages Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hidden Potential - [City Name]",
  "description": "Life skills training and coaching in [City]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[City]",
    "addressRegion": "Delhi NCR",
    "addressCountry": "IN"
  },
  "telephone": "+91-9899209335",
  "areaServed": {"@type": "City", "name": "[City]"},
  "parentOrganization": {"@type": "Organization", "name": "Hidden Potential"}
}
```

#### FAQ Page Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {"@type": "Answer", "text": "[Answer text]"}
    }
  ]
}
```

#### Blog Post Schema (Template)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post Title]",
  "author": {"@type": "Person", "name": "Supreet Kaur"},
  "publisher": {"@type": "Organization", "name": "Hidden Potential", "logo": {"@type": "ImageObject", "url": "https://hiddenpotentialskills.com/logo.png"}},
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "description": "[Meta description]",
  "mainEntityOfPage": {"@type": "WebPage", "@id": "https://hiddenpotentialskills.com/blog/[slug]"}
}
```

#### For Schools Page Schema
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Hidden Potential - School Programs",
  "description": "NEP 2020 aligned life skills curriculum for schools in Delhi NCR",
  "areaServed": [
    {"@type": "City", "name": "Delhi"},
    {"@type": "City", "name": "Noida"},
    {"@type": "City", "name": "Gurgaon"},
    {"@type": "City", "name": "Faridabad"}
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "School Programs",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Life Skills Curriculum"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Communication Mastery Workshops"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Teacher Development Programs"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Parent Awareness Sessions"}}
    ]
  }
}
```

---

### TECHNICAL SEO CHECKLIST (Build Into Every Page)

Claude Code MUST implement these for EVERY page during build:

1. **Metadata**: Use Next.js generateMetadata() or metadata export in each page.tsx
2. **Single H1**: Every page gets exactly ONE H1 tag containing the primary keyword
3. **Heading Hierarchy**: H1 → H2 → H3 only. Never skip levels.
4. **Image Alt Text**: Every <Image> component gets descriptive alt text with keyword where natural
5. **Internal Links**: Minimum 3 internal <Link> components per page (see linking map above)
6. **Canonical URL**: Set via metadata on every page
7. **Open Graph Tags**: Title, description, image, url, type for every page
8. **Twitter Card Tags**: card, title, description, image for every page
9. **JSON-LD Schema**: Render as <script type="application/ld+json"> in each page's layout or component
10. **Semantic HTML**: Use <main>, <article>, <section>, <nav>, <aside>, <header>, <footer> appropriately
11. **Loading Performance**: Use next/image with priority for above-fold images, lazy for below-fold
12. **URL Structure**: Lowercase, hyphens only, no trailing slashes, no underscores

### SITEMAP & ROBOTS CONFIGURATION

Create `next-sitemap.config.js` at project root:
```javascript
module.exports = {
  siteUrl: 'https://hiddenpotentialskills.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/admin/'] }
    ]
  },
  transform: async (config, path) => {
    // Custom priority per page type
    let priority = 0.7;
    let changefreq = 'weekly';
    
    if (path === '/') { priority = 1.0; changefreq = 'daily'; }
    else if (path.startsWith('/programs/')) { priority = 0.9; changefreq = 'weekly'; }
    else if (path === '/about' || path === '/assessment') { priority = 0.8; changefreq = 'monthly'; }
    else if (path.startsWith('/services/')) { priority = 0.7; changefreq = 'monthly'; }
    else if (path.startsWith('/locations/')) { priority = 0.7; changefreq = 'monthly'; }
    else if (path.startsWith('/blog/')) { priority = 0.6; changefreq = 'weekly'; }
    else if (path === '/privacy' || path === '/terms') { priority = 0.1; changefreq = 'yearly'; }
    
    return { loc: path, changefreq, priority, lastmod: new Date().toISOString() };
  }
};
```

### SEO COMPONENT TO CREATE

Create a reusable SchemaMarkup component at `/components/SchemaMarkup.tsx`:
```typescript
interface SchemaMarkupProps {
  data: Record<string, any>;
}

export default function SchemaMarkup({ data }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

Use in every page:
```typescript
import SchemaMarkup from '@/components/SchemaMarkup';

export default function Page() {
  const schema = { /* page-specific schema from specs above */ };
  return (
    <>
      <SchemaMarkup data={schema} />
      {/* Page content */}
    </>
  );
}
```


---

### H1 TAGS FOR EVERY PAGE (MANDATORY — ONE PER PAGE, NO EXCEPTIONS)

Claude Code MUST use these EXACT H1 tags. Do not modify, rephrase, or split them. One H1 per page only.

#### Core Pages
| Page | Route | H1 Tag |
|------|-------|--------|
| Homepage | / | Build the Inner Strength That Schools Never Taught You |
| About | /about | Supreet Kaur — Life Skills Coach & Transformational Educator in Delhi |
| Assessment | /assessment | Take Your Life Skills Assessment — Discover Your Growth Pathway |
| Contact | /contact | Book Your Free Life Skills Evaluation |
| Blog Hub | /blog | Life Skills Blog — Expert Insights on Personal Development |

#### Program Pages
| Page | Route | H1 Tag |
|------|-------|--------|
| An Enlightened Learner | /programs/enlightened-learner | An Enlightened Learner — Structured Life Skills Program for Students (Ages 8–21) |
| Communication Mastery | /programs/communication-mastery | Communication Mastery — Structured Communication & Leadership Training (Ages 8–65) |
| Self Mastery for Women | /programs/self-mastery-women | Self Mastery for Women — Holistic Growth & Emotional Leadership Program (28+) |
| Train the Trainer | /programs/train-the-trainer | Train the Trainer Certification — Become a Certified Life Skills Facilitator in India |
| Art Therapy | /programs/art-therapy | Art Therapy for Healing — Creative Pathway for Clarity & Self-Discovery in Delhi |

#### Sub-Service Pages
| Page | Route | H1 Tag |
|------|-------|--------|
| NLP Coaching | /services/nlp-coaching | NLP Coaching in Delhi — Rewire Beliefs & Unlock Behavioral Change |
| Confidence Building | /services/confidence-building | Confidence Building Program in Delhi — From Self-Doubt to Self-Assurance |
| Communication Skills | /services/communication-skills | Communication Skills Training in Delhi — Speak Clearly, Lead Confidently |
| Study Skills | /services/study-skills | Study Skills Training for Students — Smarter Learning, Stronger Results |
| Stress Management | /services/stress-management | Stress Management Coaching in Delhi — Regain Calm, Build Resilience |
| Emotional Intelligence | /services/emotional-intelligence | Emotional Intelligence Coaching — Develop Self-Awareness & Empathy in Delhi |
| Goal Setting | /services/goal-setting | Goal Setting & Accountability Workshop in Delhi — Plan, Track, Achieve |
| Career Transition | /services/career-transition | Career & Life Transition Coaching in Delhi — Navigate Change with Clarity |
| Group Workshops | /services/workshops | Life Skills Workshops in Delhi — Interactive Group & Corporate Programs |

#### Location Pages
| Page | Route | H1 Tag |
|------|-------|--------|
| Delhi | /locations/delhi | Life Skills Training in Delhi — Structured Programs in Dwarka & South Delhi |
| Noida | /locations/noida | Life Skills Coaching in Noida — Personality Development for Students & Professionals |
| Gurgaon | /locations/gurgaon | Life Skills Coaching in Gurgaon — Communication, Confidence & Leadership Programs |
| Faridabad | /locations/faridabad | Life Skills Coaching in Faridabad — Programs for Students, Women & Families |

#### Audience & B2B Pages
| Page | Route | H1 Tag |
|------|-------|--------|
| Professionals | /for/professionals | Life Skills for Professionals — Soft Skills & Leadership Development in Delhi |
| Young Adults | /for/young-adults | Life Skills for Young Adults — Career Readiness & Confidence Building (18–25) |
| For Schools | /for/schools | Life Skills Program for Schools in Delhi NCR — NEP 2020 Aligned Curriculum |

#### Supporting Pages
| Page | Route | H1 Tag |
|------|-------|--------|
| Success Stories | /success-stories | Success Stories — Real Transformations Through Structured Life Skills Training |
| FAQ | /faq | Frequently Asked Questions — Life Skills Training at Hidden Potential |
| Books | /books | Books by Supreet Kaur — Life Skills & Personal Development |
| Enrollment | /enroll | Enroll Now — Start Your Structured Transformation Journey |
| Privacy Policy | /privacy | Privacy Policy |
| Terms of Service | /terms | Terms of Service |


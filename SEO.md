# SEO.md - The Ultimate SEO Blueprint for Next.js Websites
# Master specification for every website built by Million Global Leads
# Drop this file into every project root alongside CLAUDE.md
# AI code assistants MUST read and follow this for EVERY page built
# No exceptions. No shortcuts. No "I'll add it later."
# Version: 3.0 | Last Updated: February 2026

---

# PURPOSE

This file defines every SEO requirement that must be implemented on every website we build. Any AI assistant or developer working on this project must read this file before creating any page and apply every applicable rule.

This is not a suggestion list. This is a mandatory specification. If a page does not meet every applicable requirement in this file, that page is not complete.

---

# TABLE OF CONTENTS

1. Keyword Strategy and Research
2. Technical SEO (Site-Level)
3. On-Page SEO (Per-Page Requirements)
4. Schema Markup (Structured Data)
5. Content SEO and Quality Standards
6. Content Writing Rules
7. Blog and Content Marketing
8. Internal Linking
9. Local SEO
10. Core Web Vitals and Performance
11. Image and Media SEO
12. Mobile SEO
13. URL and Site Structure
14. Indexing and Crawlability
15. E-E-A-T Signals
16. External SEO and Link Building
17. Conversion SEO
18. Security
19. International SEO (if applicable)
20. AI Search and SGE Readiness
21. Analytics and Tracking Setup
22. Accessibility and Inclusive SEO
23. Ongoing SEO Maintenance Schedule
24. Pre-Launch Checklist
25. Post-Launch Checklist
26. SEO Tools Reference
27. Minimum SEO Per Page (Hard Gate)

---

# 1. KEYWORD STRATEGY AND RESEARCH

Do this BEFORE writing any content for any page. Never write content without keyword research.

## 1.1 Research Process
- Identify 1 primary keyword per page (the main term you want to rank for)
- Identify 3-5 secondary keywords per page (variations and related terms)
- Identify 5-10 LSI keywords per page (semantically related terms Google expects to see)
- Identify 3-5 long-tail keywords per page (question-based, 4+ word phrases)
- Check search volume, keyword difficulty, and search intent for every keyword
- Map every keyword to a specific page
- NO two pages should target the same primary keyword (keyword cannibalization kills rankings)

## 1.2 Search Intent Classification
Every keyword falls into one of four intents. Match your page type to the intent:

| Intent | What It Means | Page Type |
|--------|---------------|-----------|
| Informational | User wants to learn something | Blog posts, guides, how-to pages |
| Navigational | User searching for a specific brand/site | Homepage, about page |
| Commercial Investigation | User comparing options before deciding | Comparison pages, "best of" lists |
| Transactional | User ready to take action | Service pages, enrollment pages, contact |

If your page type does not match the search intent of your target keyword, you will not rank. Period.

## 1.3 Competitive Analysis (Do This For Every Primary Keyword)
- Search the primary keyword on Google
- Open the top 5 ranking pages
- Analyze: word count, headings used, topics covered, FAQs answered, schema used
- Identify what they all cover (these are mandatory topics for your page)
- Identify what none of them cover (this is your content gap opportunity)
- Your page must cover EVERYTHING the top 5 cover PLUS the gaps they missed
- If the top results have 2000 words, yours needs 2500+. Always outdo them

## 1.4 Keyword Mapping Template
Create this spreadsheet for every project before writing begins:

| Page | URL | Primary Keyword | Search Vol | KD | Secondary Keywords | LSI Keywords | Long-tail Keywords | Intent | Top Competitor Word Count |
|------|-----|-----------------|------------|----|--------------------|--------------|--------------------|---------|----|

## 1.5 Tools for Research
- Google Keyword Planner (free, baseline volumes)
- Ubersuggest (free tier available)
- Ahrefs or SEMrush (paid, most accurate)
- Google Search Console (existing site data)
- Google Autocomplete + People Also Ask (free, intent-rich)
- AnswerThePublic (question-based keywords)
- AlsoAsked.com (PAA clustering)
- Google Trends (seasonality and trending topics)
- Keyword Surfer Chrome extension (free, shows volume in SERP)

---

# 2. TECHNICAL SEO (Site-Level)

These are implemented ONCE at the site level, not per page.

## 2.1 Site Structure
- [ ] Clean URL structure: lowercase, hyphens, no underscores, no special characters
- [ ] URL hierarchy reflects site architecture: /category/subcategory/page
- [ ] Maximum 3 levels deep for any page (ideally 2)
- [ ] No duplicate URLs (with/without trailing slash must resolve to one version)
- [ ] Trailing slash consistency enforced in next.config (pick one and stick to it)
- [ ] Flat architecture preferred: most important pages within 2 clicks of homepage
- [ ] Hub-and-spoke model: pillar pages link to cluster pages and vice versa

## 2.2 robots.txt
Create a robots.txt file at /public/robots.txt:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /thank-you
Disallow: /success

# Block AI training crawlers that do not benefit SEO
# These bots scrape content for model training, not for search indexing
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Diffbot
Disallow: /

User-agent: Omgilibot
Disallow: /

User-agent: FacebookBot
Disallow: /

User-agent: ImagesiftBot
Disallow: /

# Allow search engine bots explicitly
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Yandex
Allow: /

# Allow social media preview bots (for OG images and link previews)
User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: WhatsApp
Allow: /

Sitemap: https://[DOMAIN]/sitemap.xml
```

### robots.txt Rules:
- Never block CSS or JS files. Google needs them to render pages
- Never block image directories. Google Image Search is a traffic source
- Block admin, API, and thank-you pages
- Block AI training crawlers that scrape your content without sending traffic
- Allow all search engine bots and social preview bots explicitly
- Test with Google Search Console's robots.txt tester after deployment
- Review and update every 6 months as new AI crawlers appear
- Add comments explaining why each rule exists so future developers do not remove them

### Why Block AI Training Crawlers:
- GPTBot, CCBot, and similar bots scrape content for LLM training datasets
- They consume server resources without sending any traffic to your site
- Blocking them has ZERO impact on Google, Bing, or any search engine rankings
- They are not search engine crawlers, they are data harvesting crawlers
- Your content should work for you in search results, not train someone else's model for free
- If a client specifically wants their content in AI training data (rare), remove the relevant blocks

## 2.3 llms.txt
Create a llms.txt file at /public/llms.txt. This is a newer standard that tells AI systems (chatbots, AI search engines, AI assistants) what your site is about in a format they can easily consume. Unlike robots.txt (which controls access), llms.txt provides structured context so AI systems accurately represent your brand when they reference your content.

```markdown
# [Business Name]

> [One-line description of the business with primary keyword and location]

## About
[2-3 sentence summary of the business. Include: what you do, who you serve, where you operate, key differentiators. This is the text AI assistants will use when asked about your business.]

## Services
- [Service 1]: [Brief description] | [URL]
- [Service 2]: [Brief description] | [URL]
- [Service 3]: [Brief description] | [URL]

## Programs
- [Program 1]: [Brief description] | [URL]
- [Program 2]: [Brief description] | [URL]

## Key Information
- Founded: [Year]
- Founder: [Name], [Credentials]
- Location: [City, Region, Country]
- Service Areas: [List of areas served]
- Contact: [Phone] | [Email]
- Website: [Full URL]

## Credentials and Trust Signals
- [Certification 1]
- [Certification 2]
- [Registration/Affiliation]
- [Years of experience] years in [industry]
- [Number] clients/students served

## Social Profiles
- LinkedIn: [URL]
- Instagram: [URL]
- YouTube: [URL]
- Facebook: [URL]

## Content
- Blog: [Blog URL]
- Resources: [Resources URL]
```

### llms.txt Rules:
- Keep it concise but comprehensive. AI systems parse this for quick brand understanding
- Use the exact brand name, not abbreviations, in the header
- The description line after the header is the MOST important line. AI systems often use this as the primary reference
- Include every service and program with its URL so AI can direct users correctly
- Include credentials and trust signals so AI represents your authority accurately
- Update whenever services, team, or key information changes
- This file does NOT replace schema markup. Schema is for search engines. llms.txt is for AI assistants
- Place at /public/llms.txt so it is accessible at https://[DOMAIN]/llms.txt
- Also create /public/llms-full.txt with extended descriptions (500+ words per service) for AI systems that want deeper context

### llms-full.txt (Extended Version)
Create at /public/llms-full.txt with detailed information:
```markdown
# [Business Name] - Detailed Information

## Complete Service Descriptions
### [Service 1 Name]
[Full description, 200-500 words covering: what it is, who it is for, methodology, outcomes, pricing model if public, how to get started. Include the same information that appears on the service page.]

### [Service 2 Name]
[Same format]

## Founder Background
[Full bio paragraph covering experience, qualifications, certifications, speaking engagements, publications, achievements]

## Methodology
[How the business delivers results. Frameworks, approaches, what makes it different]

## Testimonials Summary
[3-5 representative client outcomes with names and context]

## FAQ
[Top 10-15 most asked questions with comprehensive answers]
```

## 2.4 XML Sitemap
- [ ] Auto-generated sitemap at /sitemap.xml
- [ ] In Next.js App Router: create app/sitemap.ts that dynamically generates sitemap
- [ ] Include ALL indexable pages with correct lastmod dates
- [ ] Exclude non-indexable pages (admin, API routes, 404, thank-you pages)
- [ ] Priority values: Homepage 1.0, main pages 0.8, subpages 0.6, blog posts 0.5
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools after launch
- [ ] Maximum 50,000 URLs per sitemap (split into multiple if larger)
- [ ] Reference sitemap URL in robots.txt

### Static Sitemap (for small sites with known pages):
```ts
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://[DOMAIN]'
  
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' as const },
    // Add all static pages here
  ]
  
  return staticPages
}
```

### Dynamic Sitemap (for sites with blog posts, dynamic routes):
```ts
// app/sitemap.ts
import { MetadataRoute } from 'next'

// Import your data fetching functions
// import { getAllBlogPosts } from '@/lib/blog'
// import { getAllServices } from '@/lib/services'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://[DOMAIN]'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
  ]
  
  // Dynamic blog posts
  // const posts = await getAllBlogPosts()
  // const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   priority: 0.5,
  //   changeFrequency: 'monthly',
  // }))
  
  // Dynamic service pages
  // const services = await getAllServices()
  // const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
  //   url: `${baseUrl}/services/${service.slug}`,
  //   lastModified: new Date(service.updatedAt),
  //   priority: 0.8,
  //   changeFrequency: 'monthly',
  // }))
  
  return [
    ...staticPages,
    // ...blogPages,
    // ...servicePages,
  ]
}
```

### Alternative: next-sitemap Package (for larger sites):
For sites with many dynamic routes, the next-sitemap package auto-generates sitemaps including dynamic routes:
```bash
npm install next-sitemap
```
Create next-sitemap.config.js in the project root:
```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://[DOMAIN]',
  generateRobotsTxt: false, // We manage robots.txt manually for AI crawler control
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*', '/thank-you', '/success'],
  transform: async (config, path) => {
    // Custom priority per path pattern
    let priority = 0.7
    if (path === '/') priority = 1.0
    if (path.startsWith('/services/') || path.startsWith('/programs/')) priority = 0.8
    if (path.startsWith('/blog/')) priority = 0.5
    if (path === '/about' || path === '/contact') priority = 0.8
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
```
Add to package.json scripts:
```json
{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}
```

### Sitemap Validation:
- After deployment, visit https://[DOMAIN]/sitemap.xml and confirm it loads correctly
- Verify all important pages are listed
- Verify no excluded pages (admin, thank-you, API) appear
- Submit to Google Search Console under Sitemaps section
- Submit to Bing Webmaster Tools
- If sitemap shows errors in Search Console, fix them immediately

## 2.5 Next.js Configuration (next.config.js or next.config.ts)
```js
const nextConfig = {
  // Force trailing slash consistency
  trailingSlash: false,
  
  // Enable image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Security headers (also helps SEO trust signals)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  
  // Redirects for common SEO issues
  async redirects() {
    return [
      // Handle www to non-www or vice versa at hosting level (Vercel) when possible
      // Add old URL redirects here during site migrations
    ]
  },
}
```

## 2.6 404 and Error Pages
- [ ] Custom 404 page (app/not-found.tsx) with:
  - Helpful message explaining page not found
  - Search functionality or popular page links
  - Navigation back to homepage and key pages
  - Same site styling and branding (not a broken looking page)
- [ ] Custom error page (app/error.tsx) for 500 errors
- [ ] Both pages return correct HTTP status codes
- [ ] 404 page should have internal links to help users find what they need

## 2.7 HTTPS
- [ ] Entire site served over HTTPS (enforced by hosting platform)
- [ ] No mixed content (HTTP resources loaded on HTTPS pages)
- [ ] HSTS header enabled (see headers config above)
- [ ] SSL certificate valid and not expired

## 2.8 WWW vs Non-WWW
- [ ] Pick one version and redirect the other with 301 redirect
- [ ] Configure at hosting level (Vercel handles this with domain settings)
- [ ] Canonical URLs must match the chosen version
- [ ] All internal links use the chosen version

## 2.9 Redirects
- [ ] Always use 301 (permanent) for moved pages, not 302 (temporary)
- [ ] Avoid redirect chains (A to B to C should be A to C directly)
- [ ] Maximum 1 redirect hop
- [ ] Redirect all old URLs during site migrations. Missed redirects equal lost rankings
- [ ] Test all redirects after implementation

## 2.10 Pagination
- [ ] Use proper pagination handling for blog listings
- [ ] Each paginated page should have unique meta title (e.g., "Blog - Page 2")
- [ ] Implement "Load More" or numbered pagination with proper URL handling
- [ ] Avoid infinite scroll without URL-based state management

---

# 3. ON-PAGE SEO (Per-Page Requirements)

EVERY page must have ALL of the following. No exceptions.

## 3.1 Static Metadata Export
For pages where all metadata is known at build time (homepage, about, contact, static service pages):

```ts
import { Metadata } from 'next'

export const metadata: Metadata = {
  // REQUIRED: unique per page
  title: "Primary Keyword | Secondary Context | Brand Name",  // Under 60 characters
  description: "Compelling description with primary keyword, location if local, CTA. Under 155 characters.",
  
  // REQUIRED: canonical URL
  alternates: {
    canonical: "https://[DOMAIN]/exact-page-path",
  },
  
  // REQUIRED: Open Graph
  openGraph: {
    title: "Page Title for Social Sharing",
    description: "Description optimized for social engagement",
    type: "website",  // or "article" for blog posts
    url: "https://[DOMAIN]/exact-page-path",
    siteName: "[Brand Name]",
    locale: "en_IN",  // or appropriate locale
    images: [
      {
        url: "https://[DOMAIN]/og/page-specific-image.jpg",  // 1200x630px
        width: 1200,
        height: 630,
        alt: "Descriptive alt text for OG image",
      },
    ],
  },
  
  // REQUIRED: Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Page Title for Twitter",
    description: "Description for Twitter sharing",
    images: ["https://[DOMAIN]/og/page-specific-image.jpg"],
  },
  
  // OPTIONAL: robots (only if page needs special handling)
  // Default is index, follow. Only add if you need to change it
  // robots: { index: false, follow: false },  // For thank-you, admin pages
}
```

## 3.2 Dynamic Metadata (generateMetadata)
For pages with dynamic routes like /blog/[slug], /services/[slug], /locations/[city]:

```ts
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Define the params type
type Props = {
  params: Promise<{ slug: string }>
}

// Generate static params for build-time generation
export async function generateStaticParams() {
  // Fetch all slugs from your data source
  // const posts = await getAllBlogPosts()
  // return posts.map((post) => ({ slug: post.slug }))
  return []
}

// Dynamic metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  
  // Fetch the page data
  // const post = await getBlogPost(slug)
  // if (!post) return {}
  
  const baseUrl = 'https://[DOMAIN]'
  
  return {
    title: `${post.title} | [Brand Name]`,  // Under 60 chars
    description: post.metaDescription,  // Under 155 chars
    
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      url: `${baseUrl}/blog/${slug}`,
      siteName: '[Brand Name]',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: `${baseUrl}${post.ogImage}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [`${baseUrl}${post.ogImage}`],
    },
  }
}

// The page component
export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  // const post = await getBlogPost(slug)
  // if (!post) notFound()
  
  return (
    <>
      {/* Page content */}
      {/* Schema JSON-LD */}
    </>
  )
}
```

## 3.3 Title Tag Rules
- Primary keyword appears first or near the beginning
- Under 60 characters (Google truncates beyond this)
- Format: "Primary Keyword | Context | Brand" or "Primary Keyword - Context | Brand"
- Every page has a UNIQUE title (no duplicates across the site)
- Include location for local businesses (e.g., "NLP Coaching in Delhi")
- Never stuff keywords. Must read naturally
- Test display in SERP preview tools before finalizing

## 3.4 Meta Description Rules
- Under 155 characters (Google truncates around 155)
- Contains primary keyword naturally (Google bolds matching terms in results)
- Includes a call-to-action element ("Learn more", "Book free consultation", "Enroll today")
- Includes a differentiator or trust signal (Certified, 10+ years, 500+ trained)
- Compelling enough to improve click-through rate from search results
- Every page has a UNIQUE description
- Include location for local businesses
- This is your ad copy in search results. Write it to get clicks

## 3.5 Heading Hierarchy
- ONE H1 per page. Contains the primary keyword
- H1 should be the first heading on the page
- H2s for major sections. Contain secondary keywords where natural
- H3s for subsections within H2 sections
- H4s for further nesting if needed
- Never skip heading levels (H1 to H3 without H2 is wrong)
- Headings must be descriptive and useful, not just keyword dumps
- Every H2 and H3 should be meaningful enough to serve as a table of contents entry
- Include location signals in at least 2-3 headings for local businesses

## 3.6 Canonical Tags
- EVERY page must have a canonical URL pointing to itself
- Canonical must be the absolute URL (https://domain.com/path)
- Must match the URL the page is served at
- If content exists at multiple URLs, all versions point to the canonical
- Implemented via metadata.alternates.canonical in Next.js

## 3.7 Breadcrumbs
- Present on every inner page (not homepage)
- Format: Home > Section > Current Page
- Clickable links for each level except current page
- Implemented with BreadcrumbList schema
- Helps both users and Google understand site hierarchy

---

# 4. SCHEMA MARKUP (Structured Data)

Schema helps Google understand page content and triggers rich results in search.

## 4.1 Implementation Method
Use JSON-LD format embedded via script tags in the page component:
```tsx
const schema = { /* schema object */ }

// Inside the component return:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```
Multiple schema objects can be placed on one page using an array or separate script tags.

### Reusable Schema Component (recommended for consistency):
```tsx
// components/SchemaMarkup.tsx
type SchemaMarkupProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function SchemaMarkup({ data }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Usage in any page:
// <SchemaMarkup data={organizationSchema} />
// <SchemaMarkup data={[breadcrumbSchema, serviceSchema, faqSchema]} />
```

## 4.2 Required Schema Per Page Type

### Every Single Page:
- [ ] BreadcrumbList schema (except homepage)

### Homepage:
- [ ] Organization schema (name, logo, URL, address, social profiles, founder, contact)
- [ ] WebSite schema with SearchAction (if site has search functionality)
- [ ] SiteNavigationElement schema (optional, for sitelinks in search results)

### Service Pages:
- [ ] Service schema (name, description, provider, areaServed, serviceType)
- [ ] FAQPage schema (mandatory if FAQ section exists on page)
- [ ] BreadcrumbList schema

### Program and Course Pages:
- [ ] Course schema (name, description, provider, courseMode, educationalLevel)
- [ ] FAQPage schema
- [ ] BreadcrumbList schema

### Location Pages:
- [ ] LocalBusiness schema (name, address, phone, email, hours, areaServed, geo coordinates)
- [ ] FAQPage schema
- [ ] BreadcrumbList schema

### Blog Posts:
- [ ] Article or BlogPosting schema (headline, author, publisher, datePublished, dateModified, image)
- [ ] BreadcrumbList schema
- [ ] FAQPage schema (if post has FAQ section)

### About Page:
- [ ] Person schema (for founder or key person)
- [ ] Organization schema
- [ ] BreadcrumbList schema

### FAQ Page:
- [ ] FAQPage schema covering all questions
- [ ] BreadcrumbList schema

### Contact Page:
- [ ] LocalBusiness schema (full contact details with geo coordinates)
- [ ] BreadcrumbList schema

### Product Pages (if applicable):
- [ ] Product schema with Offer, price, availability, reviews

### Testimonial and Review Pages:
- [ ] Review schema or AggregateRating schema

### Event and Workshop Pages:
- [ ] Event schema with date, location, description, organizer

## 4.3 Schema Templates

### Organization Schema (homepage):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Business Name]",
  "url": "https://[DOMAIN]",
  "logo": "https://[DOMAIN]/logo.png",
  "description": "[Business description with primary keyword]",
  "founder": {
    "@type": "Person",
    "name": "[Founder Name]",
    "jobTitle": "[Title]",
    "url": "https://[DOMAIN]/about",
    "sameAs": [
      "https://www.linkedin.com/in/[profile]"
    ]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Address]",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[ZIP]",
    "addressCountry": "[Country Code]"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "[Phone]",
    "contactType": "customer service",
    "email": "[Email]",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/[page]",
    "https://www.instagram.com/[handle]",
    "https://www.linkedin.com/company/[page]",
    "https://www.youtube.com/@[channel]"
  ],
  "foundingDate": "[YYYY]",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "[number]"
  }
}
```

### WebSite Schema with SearchAction (homepage):
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "[Business Name]",
  "url": "https://[DOMAIN]",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://[DOMAIN]/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### Service Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service Name]",
  "description": "[Service description with primary keyword]",
  "provider": {
    "@type": "Organization",
    "name": "[Business Name]",
    "url": "https://[DOMAIN]"
  },
  "areaServed": {
    "@type": "City",
    "name": "[City Name]"
  },
  "serviceType": "[Service Category]",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  }
}
```

### FAQPage Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text with keyword]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Detailed answer with keyword and location signals]"
      }
    }
  ]
}
```

### LocalBusiness Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Business Name]",
  "url": "https://[DOMAIN]",
  "telephone": "[Phone]",
  "email": "[Email]",
  "image": "https://[DOMAIN]/images/business-photo.jpg",
  "priceRange": "[$$]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street]",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[ZIP]",
    "addressCountry": "[Country Code]"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[LAT]",
    "longitude": "[LNG]"
  },
  "openingHours": "[Hours in schema format]",
  "areaServed": [
    { "@type": "City", "name": "[City 1]" },
    { "@type": "City", "name": "[City 2]" }
  ]
}
```

### Article Schema (blog posts):
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post Title]",
  "author": {
    "@type": "Person",
    "name": "[Author Name]",
    "url": "https://[DOMAIN]/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "[Business Name]",
    "logo": {
      "@type": "ImageObject",
      "url": "https://[DOMAIN]/logo.png"
    }
  },
  "datePublished": "[ISO Date]",
  "dateModified": "[ISO Date]",
  "image": "https://[DOMAIN]/blog/[image].jpg",
  "description": "[Meta description]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://[DOMAIN]/blog/[slug]"
  }
}
```

### Course Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "[Course/Program Name]",
  "description": "[Description with primary keyword]",
  "provider": {
    "@type": "Organization",
    "name": "[Business Name]",
    "url": "https://[DOMAIN]"
  },
  "courseMode": ["onsite", "online"],
  "educationalLevel": "beginner",
  "areaServed": {
    "@type": "City",
    "name": "[City]"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "onsite",
    "instructor": {
      "@type": "Person",
      "name": "[Instructor Name]"
    }
  }
}
```

### HowTo Schema (for process and step-by-step content):
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "[How to Do Something]",
  "description": "[Brief description]",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "[Step title]",
      "text": "[Step description]"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "[Step title]",
      "text": "[Step description]"
    }
  ]
}
```

### VideoObject Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "[Video Title]",
  "description": "[Video description with keyword]",
  "thumbnailUrl": "[Thumbnail URL]",
  "uploadDate": "[ISO Date]",
  "contentUrl": "[Video URL]",
  "embedUrl": "[Embed URL]",
  "duration": "PT[X]M[Y]S"
}
```

### Event Schema (for workshops and events):
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "[Event Name]",
  "description": "[Event description]",
  "startDate": "[ISO DateTime]",
  "endDate": "[ISO DateTime]",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "[Venue Name]",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "[City]"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "[Business Name]",
    "url": "https://[DOMAIN]"
  },
  "offers": {
    "@type": "Offer",
    "price": "[Price]",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://[DOMAIN]/events/[event-slug]"
  }
}
```

## 4.4 Schema Validation
- Test every page at: https://validator.schema.org/
- Test for rich results at: https://search.google.com/test/rich-results
- Fix ALL errors. Zero errors is the only acceptable state
- Warnings are acceptable but should be resolved when possible
- Re-validate after any content or schema changes

---

# 5. CONTENT SEO AND QUALITY STANDARDS

## 5.1 Content Requirements Per Page Type

| Page Type | Min Words | Primary KW Mentions | FAQs | Internal Links | Schema Types |
|-----------|-----------|---------------------|------|----------------|--------------|
| Service Page | 2,000 | 10+ | 6 | 7-9 | Service, FAQPage, Breadcrumb |
| Program/Course Page | 2,000 | 10+ | 6 | 7-9 | Course, FAQPage, Breadcrumb |
| Location Page | 1,500 | 8+ | 6 | 10+ | LocalBusiness, FAQPage, Breadcrumb |
| Audience Page | 1,500 | 8+ | 4-6 | 10+ | Service, FAQPage, Breadcrumb |
| Blog Post (standard) | 1,500-2,500 | 8+ | 3-5 | 5-7 | Article, FAQPage, Breadcrumb |
| Blog Post (pillar) | 3,000-5,000 | 15+ | 6-10 | 10+ | Article, FAQPage, Breadcrumb |
| Homepage | 800-1,200 | 5+ | 0 | 10+ | Organization, WebSite |
| About Page | 1,000-1,500 | 3-5 | 0 | 5-7 | Person, Organization, Breadcrumb |
| Contact Page | 300-500 | 2-3 | 3 | 3-5 | LocalBusiness, Breadcrumb |
| Legal Pages | N/A | 0 | 0 | 2-3 | None needed |
| For Schools/Institutions | 1,500 | 8+ | 6 | 8-10 | Service, FAQPage, Breadcrumb |

## 5.2 Keyword Placement Rules
- Primary keyword in: meta title, meta description, H1, first 100 words, last 100 words, at least 2 H2s, image alt text, URL slug
- Primary keyword density: 0.5-1.5% (10+ mentions in 2000 words). Never forced
- Secondary keywords: 3-5 mentions each, spread across the page
- LSI keywords: woven naturally throughout. These tell Google you cover the topic comprehensively
- Long-tail keywords: work into FAQ section, subheadings, and natural paragraph flow
- NEVER keyword stuff. If it sounds unnatural when read aloud, rewrite it

## 5.3 Content Freshness
- [ ] Add "Last updated: [date]" to service, program, and blog pages
- [ ] Plan quarterly content review to update statistics, examples, and references
- [ ] Freshness is a Google ranking factor. Stale content loses rankings over time
- [ ] Blog should publish minimum 2-4 posts per month for first 6 months

## 5.4 Content Decay Detection
Content decay is when a page that was ranking well starts losing traffic and positions over time. Detect it early to prevent permanent ranking loss.

### How to Identify Decaying Content:
- In Google Search Console, go to Performance > Pages
- Compare the last 3 months vs the previous 3 months
- Sort by "Clicks difference" (descending) to find pages losing the most traffic
- Any page that has lost 20%+ clicks over a 90-day period is decaying
- Also check: pages where average position has dropped by 3+ spots

### Content Decay Causes and Fixes:
| Cause | How to Identify | Fix |
|-------|----------------|-----|
| Outdated information | Stats, examples, references are old | Update with current data |
| New competitors | Competitor published better content | Expand and improve your content |
| Search intent shift | Top results changed format (videos, listicles) | Match the new intent format |
| Lost backlinks | Check Ahrefs for dropped referring domains | Rebuild lost links or earn new ones |
| Technical issues | Check crawl stats, page speed changes | Fix technical regressions |

### Decay Prevention Schedule:
- Monthly: Check GSC for pages losing clicks (quick scan)
- Quarterly: Deep audit of all money pages (service, program, location pages)
- Every 6 months: Full content refresh on all major pages (update examples, stats, CTA language)
- Annually: Rewrite any page that has lost 50%+ of peak traffic

## 5.5 Content That Google Explicitly Penalizes or Devalues
- Thin content (under 300 words with no depth)
- Duplicate content (same text on multiple pages, even paraphrased)
- Keyword-stuffed content (unnatural keyword repetition)
- Auto-generated content with no human editing or unique value
- Doorway pages (multiple similar pages targeting different locations with identical template content)
- Hidden text or links
- Content that does not match the search intent of the target keyword
- Scraped or copied content from other websites
- Content with excessive ads above the fold
- Misleading titles that do not match page content (clickbait)

---

# 6. CONTENT WRITING RULES

These rules apply to ALL content written for every page on every project.

## 6.1 Mandatory Style Rules
- NO em dashes anywhere in any content. Use commas, semicolons, colons, or separate sentences instead
- Write for humans first, search engines second
- Second person ("you") for engagement and direct address
- Active voice preferred over passive voice
- Short paragraphs: 2-4 sentences maximum for web readability
- Break up content with subheadings every 200-300 words
- Every paragraph must add unique value. No filler sentences
- Every sentence must earn its place on the page

## 6.2 What NOT to Write
- No AI-sounding generic phrases:
  - "In today's fast-paced world..."
  - "In this comprehensive guide..."
  - "Without further ado..."
  - "It's important to note that..."
  - "In conclusion..."
  - "Are you looking for..."
  - "Look no further..."
  - "Whether you are a... or a..."
  - "In the ever-evolving landscape of..."
  - "Unlock your potential..."
  - "Dive into..."
  - "Navigate the complexities of..."
  - "Embark on a journey..."
  - "Harness the power of..."
  - "Delve into..."
  - Any phrase that sounds like it came from a template
- No filler introductions. Get to the point in the first sentence
- No unnecessary transitions that add words but not meaning
- No repeating the same point in different words to pad word count
- No vague claims without backing them up ("We are the best" means nothing without proof)

## 6.3 What TO Write
- Specific numbers and data points ("Trained 500+ students" not "trained many students")
- Real examples from actual experience
- Actionable advice the reader can use immediately
- Direct answers to the questions the reader came with
- Unique insights competitors do not cover
- Stories and case studies that illustrate points
- Content that makes the reader feel they found the definitive resource on this topic

## 6.4 Competition-Crushing Content Standard
Every page we publish must be THE BEST page on the internet for its target keyword. This means:
- Research the top 5 ranking pages for the primary keyword before writing
- Cover every topic they cover
- Cover topics they missed (content gap = ranking opportunity)
- Provide more detail, better examples, more specific data
- Better formatting: easier to scan, clearer headings, better visual breaks
- More comprehensive FAQ section targeting long-tail questions they ignored
- Stronger E-E-A-T signals woven throughout
- If top competitors have 2000 words, write 2500. If they have 3000, write 3500+
- The reader should never need to hit the back button and check another result

## 6.5 FAQ Writing Rules
- Every FAQ question should target a long-tail keyword people actually search
- Do NOT write generic questions like "What is NLP?" unless that is a real search query for your context
- Pull questions from: Google People Also Ask, AnswerThePublic, client's actual customer questions
- Answers should be comprehensive (3-5 sentences minimum) not one-liners
- Include location signals in at least 2 FAQ answers for local businesses
- Include credentials or trust signals in at least 1 FAQ answer
- Every FAQ section must have FAQPage schema markup

---

# 7. BLOG AND CONTENT MARKETING

## 7.1 Blog Infrastructure (Build Into Every Site)
- [ ] Blog index page at /blog with category filtering
- [ ] Individual post template with proper Article schema
- [ ] Author box on every post with credentials, photo, and link to About page
- [ ] Related posts section at the bottom of each post (3-4 related articles)
- [ ] Social sharing buttons (WhatsApp, Twitter, LinkedIn, Facebook, Copy Link)
- [ ] Category pages with unique meta titles and descriptions (not thin tag pages)
- [ ] Table of contents for posts over 2000 words (improves UX and can trigger TOC in SERP)
- [ ] "Last updated" date visible on every post
- [ ] Estimated reading time
- [ ] RSS feed at /feed.xml or /rss.xml (useful for syndication and podcast apps)
- [ ] Breadcrumb: Home > Blog > Category > Post Title
- [ ] Open Graph image auto-generated or manually created per post

### RSS Feed Implementation:
```ts
// app/feed.xml/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://[DOMAIN]'
  // const posts = await getAllBlogPosts()
  
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>[Business Name] Blog</title>
    <link>${baseUrl}/blog</link>
    <description>[Blog description with primary keyword]</description>
    <language>en-in</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${/* posts.map(post => `
    <item>
      <title>${post.title}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description>${post.excerpt}</description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <guid>${baseUrl}/blog/${post.slug}</guid>
    </item>
    `).join('') */ ''}
  </channel>
</rss>`

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
```

## 7.2 Blog Post SEO Checklist (Per Post)
- [ ] Keyword research completed before writing
- [ ] Primary keyword in: title, H1, URL slug, first 100 words, meta description
- [ ] Primary keyword in at least one H2
- [ ] 1,500+ words minimum for standard posts, 3,000+ for pillar content
- [ ] At least 3 internal links to service or program pages
- [ ] At least 1 external link to a high-authority source
- [ ] All images have descriptive alt text with keyword context
- [ ] Article schema with author, publisher, dates, image
- [ ] FAQPage schema if post has FAQ section
- [ ] Compelling title that drives clicks (not just keyword optimized)
- [ ] Meta description with keyword and CTA
- [ ] Subheadings (H2, H3) every 200-300 words
- [ ] Table of contents for long posts
- [ ] Author box with credentials
- [ ] Related posts section
- [ ] Social sharing buttons
- [ ] Last updated date displayed

## 7.3 Blog Writing Standards
Every blog post must be well-researched, original, and the best resource available on its topic:
- Research the topic thoroughly before writing. Read at least 5 existing top-ranking articles
- Include original insights, frameworks, or perspectives not found elsewhere
- Back claims with data, statistics, or credible sources
- Include practical, actionable takeaways the reader can implement
- Use real examples and case studies where possible
- Structure for readability: short paragraphs, clear subheadings, bullet points for lists
- Include relevant images, diagrams, or visual aids that enhance understanding
- Address objections and common misconceptions about the topic
- Write a conclusion that summarizes key takeaways and includes a CTA
- Link to 3+ service or program pages naturally within the content
- After writing, ask: "Is this the best article on this topic on the entire internet?" If not, improve it

## 7.4 Content Strategy
- Target highest-volume keywords first for maximum impact
- Create pillar content (comprehensive 3,000-5,000 word guides) for main topics
- Create cluster content (focused 1,500-2,500 word articles) linking back to pillars
- Pillar pages and cluster pages must interlink extensively
- Update old content every 3-6 months with fresh data, examples, and insights
- Content calendar: minimum 2-4 posts per month for first 6 months
- Repurpose blog content into social media posts, email newsletters, video scripts
- Track which posts drive traffic and conversions. Double down on what works

---

# 8. INTERNAL LINKING

## 8.1 Rules
- Every page must have 7+ internal links to other pages (minimum 5 for smaller pages)
- Use descriptive anchor text with keywords. NEVER use "click here" or "learn more" alone
- Anchor text should include the primary keyword of the TARGET page, not the source page
- Link contextually within body content. Navigation links count but body links carry more weight
- Every page must be reachable within 3 clicks from the homepage
- No orphan pages (pages with zero internal links pointing to them)
- Every new page should receive at least 3 internal links from existing pages
- Fix orphan pages immediately when discovered

## 8.2 Anchor Text Best Practices
- Vary anchor text. Do not use the exact same anchor for every link to the same page
- Mix keyword-rich anchors with natural phrases
- Example: "Our [NLP coaching program in Delhi](/services/nlp-coaching) covers..." where the anchor matches the target page's primary keyword
- Do not over-optimize. If every anchor to a page is the exact primary keyword, it looks spammy

## 8.3 Linking Structure
- Homepage links to all major category and pillar pages
- Category pages link to all their child pages
- Child pages link back to parent category plus 2-3 sibling pages
- All pages link to Contact and primary CTA page (Enroll, Book, etc.)
- Blog posts link to relevant service and program pages (this drives traffic to money pages)
- Service pages link to relevant blog posts once blog content exists

## 8.4 Audience Section as Internal Linking Vehicle
- "Who It's For" sections on service and program pages are the PRIMARY internal linking mechanism
- Every audience card links to a relevant page
- Example: "Working Professionals" card links to /for/professionals
- Example: "Women seeking confidence" card links to /programs/self-mastery-women
- This creates a natural, topically relevant link web across the site

## 8.5 Cross-Sell Links
- Every CTA section should include 2-3 cross-sell links to related services or programs
- Example: NLP Coaching CTA section links to Confidence Building and Communication Mastery
- These keep users on the site longer and improve internal link distribution

## 8.6 Footer Links
- Footer should contain links to all major pages organized by category
- Include legal pages (Privacy Policy, Terms of Service)
- Include contact information and social media links
- Footer links appear on every page so they distribute link equity site-wide

## 8.7 Internal Linking Audit Checklist
- [ ] No orphan pages (every page receives at least 3 internal links)
- [ ] No broken internal links returning 404
- [ ] Most important pages (money pages) have the most internal links pointing to them
- [ ] Deep pages (3+ clicks from homepage) are linked from higher-level pages
- [ ] Blog posts link to relevant service and program pages
- [ ] Anchor text is descriptive and includes target page keywords

---

# 9. LOCAL SEO

Apply this entire section for any business with a physical location or service area.

## 9.1 Location Signals Per Page
- 15+ location mentions per page for local businesses (distributed naturally)
- Primary location in: H1, meta title, meta description, first paragraph, last paragraph
- Secondary locations throughout body content
- Use specific area names, not just city (neighborhoods, sectors, landmarks, metro stations)
- Every mention must read naturally in context. Never stuff location names

## 9.2 Location Signal Types
- Primary: City name and neighborhood where business is physically located
- Secondary: Surrounding cities and areas served
- Tertiary: Specific neighborhoods, landmarks, metro stations, well-known areas
- Contextual: References to local culture, business environment, community
- Geographic modifiers: "in Delhi", "near Dwarka", "across NCR", "South West Delhi"

## 9.3 Google Business Profile (Post-Launch Setup)
- [ ] Create or claim Google Business Profile
- [ ] Exact NAP match (Name, Address, Phone) between website and GBP
- [ ] Choose the most specific primary business category
- [ ] Add all relevant secondary categories (up to 9)
- [ ] Add all services individually with descriptions matching website service pages
- [ ] Write keyword-rich business description (750 characters max)
- [ ] Upload minimum 10 high-quality photos (exterior, interior, team, work in action, certificates)
- [ ] Set correct business hours and keep updated
- [ ] Set service area if serving beyond physical location
- [ ] Enable messaging
- [ ] Post updates weekly (tips, offers, events, behind-the-scenes)
- [ ] Respond to every review within 24-48 hours (positive and negative)
- [ ] Add products or services section with descriptions and prices
- [ ] Add business attributes (wheelchair accessible, women-led, etc.)

## 9.4 NAP Consistency
Name, Address, Phone must be IDENTICAL everywhere:
- Website footer
- Website contact page
- Schema markup on the website
- Google Business Profile
- All directory listings
- All social media profiles
- Any online mentions or citations

Even small differences hurt rankings. "Street" vs "St." or "Inc." vs "Inc" or different phone number formats cause inconsistency issues.

## 9.5 Local Schema
- LocalBusiness schema on contact page and all location pages
- Include geo coordinates (latitude, longitude) for accurate map placement
- Include opening hours in schema format
- Include service area covering all cities and regions served
- Service schema on all service pages with areaServed property

## 9.6 Location Pages Strategy
- Create a dedicated page for each city or area the business serves
- Each location page must have UNIQUE content (not the same template with the city name swapped)
- Include: local landmarks, area-specific context, local client testimonials, embedded Google Map
- Target keywords: "[service] in [city]", "[service] near [area]", "best [service] [city]"
- Each location page should list ALL services available in that area with links to service pages
- LocalBusiness schema with correct address and service area on each

## 9.7 Local Citations and Directories
Build listings on these platforms. Adjust per target market:

### India-Specific:
- Google Business Profile (mandatory)
- Justdial
- Sulekha
- IndiaMART
- Yellow Pages India
- TradeIndia

### International/Universal:
- Google Business Profile (mandatory)
- Bing Places
- Apple Maps (Apple Business Connect)
- Yelp
- Facebook Business Page
- LinkedIn Company Page
- Industry-specific directories relevant to the client's niche

### For Netherlands/Europe:
- Google Business Profile (mandatory)
- Bing Places
- Yelp Netherlands
- Gouden Gids (Golden Pages)
- Telefoonboek.nl
- KvK (Chamber of Commerce listing)
- Trustpilot

Ensure NAP is identical across every single listing. Audit annually.

## 9.8 Review Generation Strategy
- Ask every satisfied customer for a Google review within 24 hours of service delivery
- Provide a direct Google review link (generate from Google Place ID)
- Include review request in post-service follow-up emails and WhatsApp messages
- Respond to every review personally within 48 hours
- Never buy or fake reviews. Google detects and penalizes fake reviews
- Target: minimum 20 reviews with 4.5+ average rating in first 3 months
- Ongoing: 2-4 new reviews per month minimum
- Address negative reviews professionally. Acknowledge, apologize, offer resolution

---

# 10. CORE WEB VITALS AND PERFORMANCE

Google uses page speed and user experience as direct ranking factors.

## 10.1 Target Metrics

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP (Largest Contentful Paint) | Under 2.5s | 2.5s - 4.0s | Over 4.0s |
| INP (Interaction to Next Paint) | Under 200ms | 200ms - 500ms | Over 500ms |
| CLS (Cumulative Layout Shift) | Under 0.1 | 0.1 - 0.25 | Over 0.25 |
| TTFB (Time to First Byte) | Under 200ms | 200ms - 500ms | Over 500ms |
| Total Page Size | Under 1.5MB | 1.5MB - 3MB | Over 3MB |
| HTTP Requests | Under 30 | 30 - 60 | Over 60 |

## 10.2 Performance Optimizations for Next.js
- [ ] Use Next.js Image component for ALL images (automatic optimization, lazy loading, WebP/AVIF conversion)
- [ ] Lazy load all below-fold content and components
- [ ] Minimize JavaScript bundle size using dynamic imports for heavy components
- [ ] Preload critical fonts using next/font
- [ ] Minimize CSS (Tailwind purges unused classes automatically)
- [ ] Server-side render all pages (default in Next.js App Router)
- [ ] No render-blocking resources in the critical path
- [ ] Enable compression (Vercel handles this automatically)
- [ ] Use a CDN (Vercel Edge Network provides this by default)
- [ ] Inline critical CSS for above-the-fold content
- [ ] Remove unused JavaScript and CSS
- [ ] Limit third-party scripts (each adds latency)
- [ ] Use Suspense boundaries for streaming SSR where appropriate
- [ ] Implement proper loading states to prevent layout shift

## 10.3 Font Optimization for Next.js
```ts
// In layout.tsx: use next/font for zero layout shift
import { Inter, Lora } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body'
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-accent'
})
```
- [ ] Use font-display: swap (prevents invisible text during font load)
- [ ] Limit to 2-3 font families maximum
- [ ] Use variable fonts when available (smaller file size, more flexibility)
- [ ] Load only the character subsets you need
- [ ] If using Hindi/Devanagari text, include 'devanagari' in subsets array

## 10.4 Testing
- Test every page with: https://pagespeed.web.dev/
- Mobile score target: 85+ (aim for 90+)
- Desktop score target: 90+ (aim for 95+)
- Test on real mobile devices with throttled connections
- Fix any red or orange metrics before launch
- Re-test after every major content or code update
- Monitor Core Web Vitals in Google Search Console after launch (real user data)

---

# 11. IMAGE AND MEDIA SEO

## 11.1 Image Optimization Rules
- [ ] Use Next.js Image component for every image (never raw img tags)
- [ ] Always specify width and height props (prevents CLS)
- [ ] Use descriptive filenames: "nlp-coaching-delhi-training.webp" not "IMG_4532.jpg"
- [ ] Rename all image files before uploading to include relevant keywords
- [ ] Compress images before upload (target under 200KB for most, under 100KB for thumbnails)
- [ ] Next.js Image handles WebP/AVIF conversion automatically
- [ ] Lazy load all images except above-the-fold hero images
- [ ] Hero and LCP images use priority={true} in Next.js Image component
- [ ] Use responsive images via Next.js Image sizes prop for different screen widths
- [ ] Serve images from same domain or configured external domains in next.config

## 11.2 Alt Text Rules
- EVERY image must have descriptive alt text. No exceptions
- Include keywords naturally. Never stuff
- Describe what the image shows in plain language
- Keep under 125 characters
- Include location context for local business images
- Examples:
  - Good: "Supreet Kaur conducting NLP coaching session in Delhi classroom"
  - Good: "Corporate workshop participants during communication skills training"
  - Bad: "image1" or "" (empty) or "NLP coaching NLP training NLP Delhi NLP course"
- Decorative images (borders, backgrounds): use alt="" (empty string, not missing)

## 11.3 OG Images
- Create a unique OG image for each important page (1200x630px)
- Include the page title and brand name on the image
- If unique per page is not feasible, create a branded default OG image
- Specify in metadata openGraph.images with full URL, width, height, and alt text
- Test OG images with: https://www.opengraph.xyz/

## 11.4 Video SEO
- Host videos on YouTube AND embed on the page (dual visibility in both platforms)
- Add VideoObject schema markup for every embedded video
- Include a full video transcript on the page (Google cannot watch videos but reads transcripts)
- Optimize YouTube title, description, and tags with target keywords
- Use a custom thumbnail with text overlay for YouTube videos
- Create a video sitemap if the site has multiple video pages
- Lazy load video embeds to prevent impact on page speed
- Use lite-youtube-embed or similar for performance-friendly YouTube embeds

## 11.5 Media Accessibility
- All images have alt text (WCAG compliance)
- Videos have captions or subtitles
- Audio content has transcripts
- Color contrast meets WCAG AA standards minimum

---

# 12. MOBILE SEO

Google uses mobile-first indexing. It indexes the mobile version of your site first. If mobile is broken, desktop rankings do not matter.

## 12.1 Requirements
- [ ] Fully responsive design (mobile-first approach in CSS)
- [ ] No horizontal scrolling on any screen size
- [ ] Tap targets at least 48x48px with adequate spacing between them
- [ ] Font size minimum 16px for body text on mobile (prevents auto-zoom)
- [ ] No content hidden on mobile that is visible on desktop (Google indexes mobile version)
- [ ] Forms are usable on mobile (large input fields, proper keyboard types, autocomplete enabled)
- [ ] Navigation works perfectly on mobile (hamburger menu, dropdown accessibility)
- [ ] Phone numbers are click-to-call links on mobile
- [ ] Maps are interactive and usable on mobile
- [ ] Images scale correctly on all screen sizes
- [ ] No intrusive interstitials or popups that block content on mobile (Google penalizes this)

## 12.2 Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```
Next.js handles this automatically in the App Router, but verify it exists in the rendered HTML.

## 12.3 Testing
- Test on actual mobile devices, not just browser resize
- Test all forms, navigation, and interactive elements on mobile
- Test on both Android and iOS devices
- Test on slow connections (3G simulation in Chrome DevTools)

---

# 13. URL AND SITE STRUCTURE

## 13.1 URL Rules
- Short and descriptive (under 75 characters, ideally 3-5 words in slug)
- Include primary keyword in the URL slug
- Use hyphens (-) to separate words. NEVER underscores (_)
- All lowercase. No uppercase letters
- No stop words unless needed for readability (a, the, in, of, and)
- No parameters, session IDs, or dynamic strings in indexable URLs
- No dates in service, program, or page URLs (they do not expire)
- Blog post URLs: /blog/[keyword-rich-slug] (not /blog/2026/02/24/slug)
- No file extensions in URLs (.html, .php)

## 13.2 URL Structure Hierarchy
```
/ (homepage)
|-- /about
|-- /programs/
|   |-- /programs/[program-slug]
|-- /services/
|   |-- /services/[service-slug]
|-- /locations/
|   |-- /locations/[city-slug]
|-- /for/
|   |-- /for/[audience-slug]
|-- /blog/
|   |-- /blog/[post-slug]
|-- /contact
|-- /enroll
|-- /success-stories
|-- /faq
|-- /resources
|-- /privacy-policy
|-- /terms
|-- /sitemap.xml
|-- /robots.txt
|-- /llms.txt
|-- /llms-full.txt
|-- /feed.xml
```

## 13.3 Breadcrumb Navigation
- Present on every inner page (not on homepage)
- Format: Home > Section > Current Page
- Clickable links for every level except current page
- Implemented with BreadcrumbList schema markup
- Visible in the page UI and in schema data

---

# 14. INDEXING AND CRAWLABILITY

## 14.1 Indexing Rules
- [ ] Every important page must be indexable (no accidental noindex tags)
- [ ] Noindex pages that should not appear in search: thank-you pages, admin pages, tag pages with thin content, internal search result pages
- [ ] Use robots meta tag in metadata export for page-level control
- [ ] Never accidentally block important pages in robots.txt
- [ ] Check index status regularly: site:yourdomain.com in Google

## 14.2 Crawl Budget Optimization
- [ ] Fix all broken links (404 errors) immediately
- [ ] No redirect chains (A to B to C should be A to C)
- [ ] No redirect loops
- [ ] Minimize parameter-based URLs that generate duplicate content
- [ ] Keep sitemap clean with only indexable pages
- [ ] Internal linking structure helps Google discover all pages efficiently
- [ ] Block AI training crawlers in robots.txt to save crawl budget for actual search engines

## 14.3 Search Console Setup (Post-Launch)
- [ ] Verify site in Google Search Console via DNS record (most reliable)
- [ ] Submit XML sitemap
- [ ] Check for crawl errors weekly for first month, then monthly
- [ ] Monitor index coverage (how many pages submitted vs indexed)
- [ ] Request indexing for new or updated important pages manually
- [ ] Set up Bing Webmaster Tools as well
- [ ] Enable email alerts for critical issues

## 14.4 Common Indexing Blockers
- Noindex meta tag accidentally applied to important pages
- Robots.txt blocking the page or its resources
- Canonical tag pointing to a different URL
- Orphan pages with no internal links pointing to them
- Thin or duplicate content that Google chooses not to index
- Server errors (5xx) during Google's crawl
- Very slow page load causing crawl timeout
- Pages behind login or JavaScript-only rendering (less common with Next.js SSR)

---

# 15. E-E-A-T SIGNALS

E-E-A-T stands for Experience, Expertise, Authoritativeness, Trustworthiness. Google's quality raters use this framework to evaluate content quality. While not a direct algorithm factor, it heavily influences how algorithms assess and rank your content. Critical for YMYL (Your Money Your Life) topics: health, finance, legal, education.

## 15.1 Experience Signals
- [ ] First-person experience statements in content ("In our 14+ years of training...")
- [ ] Specific examples from actual work, not generic hypothetical scenarios
- [ ] Case studies and success stories with real details and outcomes
- [ ] Photos from actual sessions, events, and work (not stock photos)
- [ ] Client testimonials with specific outcomes mentioned
- [ ] Behind-the-scenes content showing real processes

## 15.2 Expertise Signals
- [ ] Author credentials displayed on every blog post and content page
- [ ] Detailed About page with full qualifications, certifications, education, and career journey
- [ ] Author schema markup on blog posts and key pages
- [ ] Credentials mentioned naturally throughout body content, not just on the About page
- [ ] Links to verifiable credentials (certification bodies, LinkedIn, published work)
- [ ] In-depth, accurate content that demonstrates genuine subject mastery
- [ ] Formal certifications displayed with issuing body and grade (e.g., IGNOU NEP 2020 certification)

## 15.3 Authoritativeness Signals
- [ ] Awards, recognition, and media appearances mentioned and linked
- [ ] Speaking engagements, conferences, and guest appearances documented
- [ ] Partnerships with recognized organizations highlighted
- [ ] Government registrations or affiliations (MSME, Skill India, ISO, etc.)
- [ ] Press mentions or media features linked from the website
- [ ] Specific numbers: students trained, years of experience, programs delivered
- [ ] Published books, research, whitepapers, or original content referenced
- [ ] Backlinks from authoritative websites in the industry

## 15.4 Trustworthiness Signals
- [ ] Physical address displayed prominently (footer and contact page)
- [ ] Phone number and email visible on every page
- [ ] Privacy Policy and Terms of Service pages published and linked from footer
- [ ] HTTPS enabled across entire site
- [ ] Real testimonials with reviewer names and context (not anonymous)
- [ ] Business registration details mentioned (MSME number, etc.)
- [ ] Professional, error-free website design (no broken pages, no placeholder text)
- [ ] Clear pricing information or transparent "contact for pricing" process
- [ ] Secure forms with no spam vulnerabilities
- [ ] Google reviews visible or linked from the website

## 15.5 How to Implement E-E-A-T Throughout Every Page
E-E-A-T is NOT a section on a page. It is woven THROUGHOUT every page:
- Hero section: trust bar with credentials, numbers, certifications
- Body content: credentials mentioned naturally in flowing sentences
- FAQ answers: reference qualifications and experience when relevant
- CTA sections: reinforce credibility before asking for action
- Footer: full contact details, registration info, social proof
- Author box on blog posts: photo, name, credentials, link to About page
- Testimonials strategically placed near conversion points
- Every factual claim backed by specific data or verifiable credential
- Certificate images displayed where relevant (About page, For Schools page)

---

# 16. EXTERNAL SEO AND LINK BUILDING

## 16.1 White Hat Link Building Strategies
- Guest posting on relevant industry blogs with a link back to the website
- Digital PR: create newsworthy content, pitch to media for coverage and backlinks
- Resource link building: get listed on "best [service] in [city]" roundup pages
- Broken link building: find broken links on relevant sites, offer your content as replacement
- Testimonial link building: give testimonials to tools and services you use, they link back to you
- Local partnerships: partner with complementary local businesses for mutual linking
- HARO / Connectively / Qwoted: respond to journalist queries for high-authority backlinks
- Industry directory submissions: get listed on niche-relevant directories
- Content marketing: create link-worthy content (original research, infographics, free tools, comprehensive guides)
- Speaking engagements: event pages link to speaker profiles and websites
- Podcast appearances: show notes link back to guest's website

## 16.2 Link Quality Criteria
- Relevance is more important than authority (a link from a relevant small blog beats an irrelevant high-DA site)
- Dofollow links pass ranking power. Nofollow links still drive traffic and brand awareness
- Anchor text should be natural and varied. Avoid exact-match keyword anchors on most links
- Links from within body content are more powerful than sidebar or footer links
- One link from 100 different domains is worth far more than 100 links from 1 domain
- Links from pages that themselves have backlinks are more valuable

## 16.3 Links to AVOID (Google Penalizes These)
- Paid links not marked with nofollow or sponsored attribute
- Link farms and Private Blog Networks (PBNs)
- Excessive reciprocal link exchanges
- Spammy, irrelevant directory submissions
- Automated link building tools or services
- Blog comment spam
- Forum profile spam
- Links from penalized or hacked websites
- Links from completely irrelevant websites

## 16.4 Social Signals
- Active social media profiles linked from the website
- Share buttons on blog content
- Consistent social posting drives branded searches which indirectly help SEO
- YouTube videos embedded on site create cross-platform signals
- Claim all relevant social platforms to control brand SERP appearance
- Social profiles rank for brand name searches and build trust

---

# 17. CONVERSION SEO

SEO is not just about traffic. It is about traffic that converts into leads and customers.

## 17.1 CTA Optimization
- [ ] Every page has at least one clear CTA
- [ ] CTA above the fold on every page (visible without scrolling)
- [ ] CTA at the bottom of every page (after they have read the content)
- [ ] CTA text is action-oriented: "Book Free Consultation" not "Submit"
- [ ] Phone number and WhatsApp link visible on every page
- [ ] Contact information in the footer of every page
- [ ] Multiple conversion paths: form, phone call, WhatsApp, email
- [ ] CTA button colors contrast with the page background (stand out visually)

## 17.2 Trust Signals for Conversion
- [ ] Trust bar near hero section (credentials, student count, certifications, years of experience)
- [ ] Social proof wherever possible (testimonials, client logos, review ratings)
- [ ] Professional design throughout (poor design kills trust and conversions)
- [ ] Real photos instead of stock photos where possible
- [ ] Clear and honest messaging (no bait-and-switch or misleading claims)

## 17.3 Page Speed for Conversion
- Slow pages kill conversions even if they rank on page 1
- Target under 3 seconds total load time
- Forms must load and function immediately
- Every second of delay reduces conversions by approximately 7%

## 17.4 Form Optimization
- [ ] Minimum required fields (name, phone or email, message). Every extra field reduces submissions
- [ ] Proper input types for mobile (type="tel" for phone, type="email" for email)
- [ ] Autocomplete attributes on form fields
- [ ] Clear error messages if validation fails
- [ ] Thank-you page or confirmation message after submission
- [ ] Form submissions tracked as conversions in GA4

---

# 18. SECURITY

Security signals affect both SEO rankings and user trust.

- [ ] HTTPS everywhere with valid SSL certificate (no mixed content)
- [ ] Security headers configured in next.config.js (see Technical SEO section)
- [ ] No exposed API keys in client-side code or source code
- [ ] Environment variables used for all sensitive configuration
- [ ] Form submissions protected against spam (honeypot fields or reCAPTCHA)
- [ ] Regular dependency updates (run npm audit periodically)
- [ ] No sensitive data in URL parameters
- [ ] Content Security Policy headers where feasible
- [ ] Rate limiting on API routes and form submissions
- [ ] Input sanitization on all form fields to prevent XSS
- [ ] Permissions-Policy header to disable unnecessary browser APIs

---

# 19. INTERNATIONAL SEO (If Applicable)

Only implement if the site serves multiple languages or countries. Skip for single-language, single-country sites.

- [ ] Hreflang tags on every page specifying language and region
- [ ] x-default hreflang for the primary version
- [ ] Language-specific URLs: /en/, /hi/, or subdomain structure (en.domain.com)
- [ ] Content properly translated by humans (not auto-translated)
- [ ] Localized content (currency, address formats, cultural references, examples)
- [ ] Each language version has its own sitemap
- [ ] Default language specified
- [ ] Hreflang tags must be reciprocal (if page A points to page B, page B must point back)
- [ ] Google Search Console geotargeting configured if using subdomains or subfolders

---

# 20. AI SEARCH AND SGE READINESS

Google is rolling out AI Overviews (formerly SGE) that show AI-generated summaries at the top of search results. AI chatbots like ChatGPT, Perplexity, and Claude are becoming alternative search channels. To get cited in these summaries and maintain visibility as search evolves:

## 20.1 Content Structure for AI Citation
- Write clear, direct answers to questions immediately under relevant subheadings
- Use question as H2 or H3, answer immediately in the first sentence after the heading
- Use definition-style sentences: "[Term] is [definition]" for concept queries
- Provide comparison tables for "vs" and "best" type queries
- Include numbered steps for process and how-to queries
- Use bullet points for list-based information
- FAQ sections with clear question-and-answer format are prime candidates for AI citations

## 20.2 Structured Data for AI
- AI Overviews heavily pull from schema-marked content
- FAQPage schema, HowTo schema, and Article schema increase chances of citation
- Keep all structured data accurate and consistent with visible page content
- Include specific data points, statistics, and unique insights that AI can reference
- Comprehensive, factually accurate content is prioritized by AI summaries

## 20.3 llms.txt for AI Discovery
- Maintain /llms.txt and /llms-full.txt (see Section 2.3) so AI systems accurately represent your brand
- This is the new equivalent of what robots.txt did for search engines in the early days
- As AI assistants become more common, having structured brand information in llms.txt ensures correct representation
- Update llms.txt whenever services, team, or key information changes

## 20.4 AI Chatbot Optimization
- AI chatbots (ChatGPT, Perplexity, Claude) increasingly serve as search alternatives
- They pull from web content to answer user questions
- To appear in AI chatbot responses:
  - Be the most comprehensive, authoritative source on your topics
  - Use clear, factual language that AI can easily parse and cite
  - Include specific data points, numbers, and credentials (AI prefers citing specific claims)
  - Schema markup helps AI systems understand your content's structure
  - Strong E-E-A-T signals increase the likelihood of being cited as a trusted source
  - Earn backlinks from authoritative domains (AI cross-references authority)

## 20.5 Brand Protection in AI Era
- Build deep topical authority by publishing comprehensive content on your core topics
- Generate branded searches through social media, video, PR, and offline presence
- Earn authoritative backlinks from trusted sources. AI cross-references authority signals
- Keep business information consistent across entire web presence
- Claim and optimize knowledge panels where available
- Maintain active, updated content. AI deprioritizes stale sources
- Monitor how AI chatbots describe your brand. Search for your brand name in ChatGPT, Perplexity, and Google AI Overviews quarterly

## 20.6 What NOT to Do for AI Search
- Do not write content specifically for AI and ignore human readability
- Do not stuff content with questions just to trigger AI citations
- Do not add schema markup for content that does not exist on the page
- Focus on being the most helpful, accurate, comprehensive resource. AI follows quality

---

# 21. ANALYTICS AND TRACKING SETUP

## 21.1 Google Analytics 4 (GA4) - MANDATORY for every site
- [ ] Install GA4 tracking code on every page (via GTM or directly)
- [ ] Set up conversion events:
  - Form submissions (contact, enquiry, enrollment)
  - Phone number clicks (click-to-call)
  - WhatsApp button clicks
  - CTA button clicks (Enroll Now, Book Consultation)
  - Email link clicks
  - Scroll depth (25%, 50%, 75%, 100%)
  - Time on page thresholds (30s, 60s, 120s)
  - File downloads (PDF, brochure)
- [ ] Set up audiences for remarketing
- [ ] Link GA4 with Google Ads account (if running paid ads)
- [ ] Link GA4 with Google Search Console
- [ ] Enable enhanced measurement (scrolls, outbound clicks, site search, file downloads, video engagement)
- [ ] Set up custom reports for monthly client reporting
- [ ] Verify data is flowing correctly before launch

## 21.2 Google Search Console - MANDATORY
- [ ] Verify site ownership via DNS record (most reliable method)
- [ ] Submit XML sitemap
- [ ] Monitor weekly in first month, then monthly:
  - Coverage issues (errors, warnings, excluded pages)
  - Core Web Vitals report (real user data)
  - Manual actions (penalties from Google)
  - Links report (external links and internal links)
  - Performance (clicks, impressions, CTR, average position)
- [ ] Set up email alerts for critical issues
- [ ] Request indexing for important new or updated pages

## 21.3 Google Tag Manager (Recommended)
- [ ] Install GTM container instead of hardcoding tracking scripts
- [ ] Manage all tracking pixels and scripts from GTM dashboard
- [ ] Easier to add, modify, or remove tracking without touching code
- [ ] Set up triggers for:
  - Form submissions
  - Button clicks (CTA, phone, WhatsApp)
  - Scroll depth milestones
  - Video engagement
  - File downloads
  - Outbound link clicks

## 21.4 Additional Tracking (Based on client needs)
- Facebook/Meta Pixel (for Meta Ads retargeting)
- LinkedIn Insight Tag (for B2B clients)
- Microsoft Clarity (free heatmaps and session recordings)
- Hotjar (paid heatmaps and feedback tools)
- CallRail or similar (call tracking with dynamic number insertion)

## 21.5 Reporting Setup
- Create a monthly report template covering:
  - Organic traffic growth (month over month, year over year)
  - Keyword ranking changes for target keywords
  - Top performing pages by traffic and conversions
  - Conversion counts and conversion rate by channel
  - Core Web Vitals status
  - New backlinks acquired
  - Content published and performance
  - Google Business Profile insights (views, calls, direction requests)
  - Content decay alerts (pages losing traffic)
  - AI search visibility check (quarterly)
- Send reports to client monthly with actionable insights, not just data dumps

---

# 22. ACCESSIBILITY AND INCLUSIVE SEO

Accessibility is both an SEO signal and increasingly a legal requirement. Accessible sites perform better in search because they have cleaner code, better structure, and better user experience.

## 22.1 Semantic HTML
- [ ] Use proper HTML elements: nav for navigation, main for main content, article for blog posts, section for content sections, aside for sidebars, footer for footer
- [ ] Do not use divs for everything. Semantic elements help screen readers AND search engines understand page structure
- [ ] Use button elements for interactive actions, anchor elements for navigation links
- [ ] Form inputs have associated label elements (not just placeholder text)

## 22.2 ARIA Labels and Roles
- [ ] Add aria-label to icon-only buttons (hamburger menu, social icons, close buttons)
- [ ] Add aria-label to navigation regions when multiple nav elements exist
- [ ] Use aria-current="page" on active navigation links
- [ ] Use aria-expanded on dropdown toggles
- [ ] Use role="main" only if the main element is not used (prefer semantic HTML)
- [ ] Do NOT add aria attributes that duplicate native HTML semantics (redundant roles)

## 22.3 Keyboard Navigation
- [ ] All interactive elements are reachable and operable via keyboard (Tab, Enter, Escape)
- [ ] Visible focus indicators on all focusable elements (do not remove outline without replacement)
- [ ] Logical tab order that follows visual layout
- [ ] Skip navigation link at the top of every page ("Skip to main content")
- [ ] Dropdown menus and modals are keyboard-accessible and can be closed with Escape

## 22.4 Color and Visual Accessibility
- [ ] Text color contrast ratio meets WCAG AA: 4.5:1 for normal text, 3:1 for large text
- [ ] Never rely on color alone to convey information (add icons, text labels, or patterns)
- [ ] Links within body text are distinguishable from surrounding text (underline or bold, not just color)
- [ ] Check contrast with: https://webaim.org/resources/contrastchecker/

## 22.5 Accessibility Testing
- Run Lighthouse Accessibility audit on every page (target 90+ score)
- Test with a screen reader (VoiceOver on Mac, NVDA on Windows) at least once before launch
- Run axe DevTools browser extension on key pages
- Test all forms, modals, and interactive components with keyboard only

## 22.6 Why This Matters for SEO
- Google considers page experience as a ranking factor. Accessibility is part of page experience
- Accessible sites have cleaner HTML structure, which helps Google parse and index content
- Alt text on images (an accessibility requirement) directly helps image SEO
- Semantic HTML helps Google understand content hierarchy and relationships
- An increasing number of countries are enacting web accessibility laws. Non-compliant sites face legal risk AND reputation damage
- Accessible sites reach more users, which means more traffic, more engagement, and more conversions

---

# 23. ONGOING SEO MAINTENANCE SCHEDULE

SEO is not a one-time setup. Rankings require ongoing maintenance and improvement.

## 23.1 Weekly Tasks
- Check Google Search Console for new crawl errors or indexing issues
- Monitor keyword rankings for primary target keywords
- Respond to new Google reviews within 48 hours
- Publish at least one Google Business Profile post (tip, update, offer)
- Check website uptime and page speed

## 23.2 Monthly Tasks
- Publish 2-4 blog posts targeting keyword strategy
- Check and fix all broken links (internal and external)
- Update any outdated content, statistics, or references
- Audit Core Web Vitals and fix any degradation
- Review analytics: traffic trends, conversion rates, top pages, user behavior
- Monitor competitor rankings and any new content they published
- Identify new backlink opportunities
- Review and update meta titles and descriptions for underperforming pages (low CTR in GSC)
- Send monthly analytics report to client
- Check for content decay (pages losing 20%+ clicks over 90 days)

## 23.3 Quarterly Tasks
- Full technical SEO audit using Screaming Frog or Ahrefs Site Audit
- Content gap analysis: what topics are competitors ranking for that you are not?
- Internal linking audit and optimization
- Schema markup validation across all pages
- Review and update keyword strategy based on new Search Console and analytics data
- Refresh content on all major service and program pages (add new examples, stats, insights)
- Check local citation consistency across all directories
- Review and improve pages with declining rankings
- Check AI search visibility: search your brand and key services in ChatGPT, Perplexity, Google AI Overviews
- Update llms.txt and llms-full.txt if services or information changed

## 23.4 Semi-Annual Tasks
- Full site architecture review
- Content refresh for all major pages (update stats, examples, CTAs, testimonials)
- Competitor landscape analysis (new competitors, new strategies)
- Review and rebuild backlink strategy based on results
- Evaluate new SEO features and opportunities (new schema types, algorithm updates, AI changes)
- Domain authority benchmark and comparison
- Update SEO.md if new best practices have emerged
- Review robots.txt for new AI crawlers to block
- Accessibility audit (Lighthouse + manual keyboard testing)

## 23.5 Annual Tasks
- Complete site audit covering all 27 sections of this document
- Review and renew SSL certificate if not auto-renewing
- Audit all third-party tools and integrations for relevance and cost
- Set new annual SEO goals based on previous year's performance
- Evaluate if site architecture needs restructuring based on growth
- Plan content calendar for the coming year based on keyword and traffic data

---

# 24. PRE-LAUNCH CHECKLIST

Run through EVERY item before deploying any website to production. Nothing goes live with unchecked items.

## Technical
- [ ] All pages return 200 status code
- [ ] No broken internal links (use a crawler to check entire site)
- [ ] No broken external links
- [ ] No broken images
- [ ] robots.txt is correct and not blocking important pages or resources
- [ ] robots.txt blocks AI training crawlers (GPTBot, CCBot, etc.)
- [ ] sitemap.xml generates correctly with all indexable pages
- [ ] llms.txt is published and accessible at /llms.txt
- [ ] llms-full.txt is published and accessible at /llms-full.txt
- [ ] RSS feed works at /feed.xml (if blog exists)
- [ ] Canonical URLs are correct on every page
- [ ] No duplicate title tags across any pages
- [ ] No duplicate meta descriptions across any pages
- [ ] Custom 404 page works and looks good
- [ ] All redirects working correctly (especially important for site migrations)
- [ ] HTTPS working everywhere with no mixed content warnings
- [ ] Security headers present in response headers
- [ ] Mobile responsive on all pages at all breakpoints
- [ ] All forms working and submitting correctly
- [ ] All phone numbers are click-to-call on mobile
- [ ] All external links open in new tab where appropriate
- [ ] Skip navigation link present on every page

## Content
- [ ] No placeholder text anywhere (lorem ipsum, TODO, coming soon, etc.)
- [ ] No spelling or grammar errors on any page
- [ ] No em dashes in any content
- [ ] All phone numbers, email addresses, and physical address are correct
- [ ] All links go to correct destinations
- [ ] No "coming soon" pages linked from navigation
- [ ] Every service and program page has 2,000+ words
- [ ] Primary keyword mentioned 10+ times naturally on every target page
- [ ] Location signals present on every page (15+ for local businesses)
- [ ] E-E-A-T signals woven throughout every content page
- [ ] All testimonials have names and context
- [ ] Privacy Policy and Terms of Service pages published

## Schema
- [ ] Organization schema on homepage validated
- [ ] WebSite schema on homepage validated
- [ ] BreadcrumbList schema on all inner pages validated
- [ ] Service, Course, or Product schema on relevant pages validated
- [ ] FAQPage schema on pages with FAQ sections validated
- [ ] LocalBusiness schema on location and contact pages validated
- [ ] Article schema on blog posts validated (if blog content exists at launch)
- [ ] ALL schema tested at https://search.google.com/test/rich-results with zero errors

## Performance
- [ ] PageSpeed Insights: Mobile 85+, Desktop 90+
- [ ] No render-blocking resources
- [ ] All images optimized and using Next.js Image component
- [ ] Fonts loading correctly with swap display
- [ ] LCP under 2.5 seconds on mobile
- [ ] CLS under 0.1
- [ ] No console errors on any page
- [ ] Total page size under 1.5MB for most pages

## Accessibility
- [ ] Lighthouse Accessibility score 90+ on all key pages
- [ ] All images have alt text
- [ ] All form inputs have associated labels
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works for all interactive elements
- [ ] Skip navigation link is present and functional

## Analytics
- [ ] Google Analytics 4 installed and receiving data
- [ ] All conversion events configured and firing correctly
- [ ] Google Search Console verified
- [ ] Google Tag Manager installed (if using)
- [ ] Facebook Pixel installed (if applicable)
- [ ] Test all tracking with real form submissions before launch

---

# 25. POST-LAUNCH CHECKLIST

Do these in the specified timeframes after going live.

## Day 1
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Request indexing for homepage and top 5 priority pages in Search Console
- [ ] Verify all forms are working with real test submissions
- [ ] Verify analytics is tracking all pages and events correctly
- [ ] Check entire site on actual mobile devices (Android and iOS)
- [ ] Link website URL in Google Business Profile (if local business)
- [ ] Share website launch on all social media profiles

## First Week
- [ ] Monitor Search Console for crawl errors daily
- [ ] Check index coverage (how many pages submitted vs indexed)
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Set up or update Google Business Profile completely (if local business)
- [ ] Submit site to relevant local directories (if local business)
- [ ] Fix any issues that appear in Search Console immediately
- [ ] Request indexing for all remaining important pages
- [ ] Verify llms.txt is accessible and contains accurate information

## First Month
- [ ] Verify all pages appearing in Google index (site:domain.com)
- [ ] Benchmark initial keyword rankings for all target keywords
- [ ] Check rankings for target keywords and record baseline
- [ ] Review Search Console performance report
- [ ] Publish first 2-4 blog posts
- [ ] Build first backlinks (directories, social profiles, partnerships)
- [ ] Begin Google review generation campaign (if local business)
- [ ] Collect first 5-10 Google reviews
- [ ] Review analytics data and identify any issues or opportunities
- [ ] Send first monthly report to client

## Ongoing (After First Month)
- Follow the Ongoing SEO Maintenance Schedule in Section 23

---

# 26. SEO TOOLS REFERENCE

| Purpose | Free Tools | Paid Tools |
|---------|-----------|------------|
| Keyword Research | Google Keyword Planner, Ubersuggest (limited), AnswerThePublic, Google Trends, Keyword Surfer | Ahrefs, SEMrush, Moz Pro |
| Technical Audit | Google Search Console, PageSpeed Insights, Lighthouse, Rich Results Test | Screaming Frog, Ahrefs Site Audit, Sitebulb |
| Rank Tracking | Google Search Console (own site only) | Ahrefs, SEMrush, AccuRanker, SE Ranking |
| Backlink Analysis | Google Search Console (own site only) | Ahrefs, SEMrush, Majestic, Moz Link Explorer |
| Schema Validation | Google Rich Results Test, Schema.org Validator | None needed (free tools are sufficient) |
| Speed Testing | PageSpeed Insights, GTmetrix, WebPageTest, Lighthouse | None needed |
| Mobile Testing | Chrome DevTools device simulation | BrowserStack, LambdaTest |
| Analytics | Google Analytics 4, Google Search Console | Mixpanel, Amplitude |
| Heatmaps and Session Recording | Microsoft Clarity (free) | Hotjar, Crazy Egg, FullStory |
| Local SEO | Google Business Profile, Google Maps | BrightLocal, Whitespark, Moz Local |
| Content Optimization | Google NLP API, AnswerThePublic | Surfer SEO, Clearscope, MarketMuse, Frase |
| Competitor Analysis | Google Search (manual), SimilarWeb (limited) | Ahrefs, SEMrush, SpyFu |
| Link Building Outreach | Hunter.io (limited), Google Search | Pitchbox, BuzzStream, Respona |
| SERP Preview | mangools SERP Simulator (free) | Rank Math SERP preview |
| OG Image Testing | opengraph.xyz, metatags.io | None needed |
| Broken Link Checking | Google Search Console, Check My Links (Chrome extension) | Screaming Frog, Ahrefs |
| Site Crawling | Google Search Console | Screaming Frog, Sitebulb, Ahrefs |
| Accessibility | Lighthouse, axe DevTools, WebAIM Contrast Checker | None needed for basics |
| AI Search Monitoring | Manual searches in ChatGPT, Perplexity, Google AI Overviews | None established yet |

---

# 27. MINIMUM SEO PER PAGE (Hard Gate)

This is the absolute minimum for ANY page created on ANY project. If ANY of these items are missing, the page is NOT complete and must NOT be deployed.

1. Unique meta title (under 60 characters, primary keyword + brand)
2. Unique meta description (under 155 characters, primary keyword + CTA)
3. Canonical URL pointing to itself (absolute URL)
4. Open Graph tags (title, description, image with 1200x630px, url, siteName)
5. Twitter Card tags (card type, title, description, image)
6. ONE H1 containing the primary keyword
7. Proper heading hierarchy (H1 then H2 then H3, no skipped levels)
8. BreadcrumbList schema (on all inner pages)
9. Page-type-specific schema (Service, Course, LocalBusiness, Article, FAQPage, etc.)
10. Internal links: 7+ to other pages using descriptive keyword-rich anchor text
11. All images using Next.js Image component with descriptive alt text
12. Mobile responsive layout with no horizontal scrolling
13. Page loads under 3 seconds on mobile
14. No duplicate content with any other page on the site
15. No em dashes anywhere in the content
16. No placeholder text, lorem ipsum, or TODO markers
17. Primary keyword mentioned 10+ times naturally (for content pages 2000+ words)
18. Location signals present (15+ mentions for local business pages)
19. E-E-A-T signals woven into body content (credentials, experience, trust markers)
20. At least one CTA above the fold and one at the bottom of the page
21. Semantic HTML elements used (nav, main, article, section, footer)
22. All form inputs have associated label elements
23. Skip navigation link present
24. Color contrast meets WCAG AA (4.5:1 for body text)

If a page fails any of these 24 checks, it goes back for fixes before deployment.

---

# NOTES

- This document covers SEO best practices as of February 2026. Search algorithms evolve constantly. Review and update this document every 6 months
- Not every section applies to every client. Use judgment based on business type, budget, and goals. But when a section applies, implement it fully
- SEO is a long game. Set client expectations: meaningful ranking improvements typically take 3-6 months of consistent effort
- Never promise specific rankings or traffic numbers. Promise process, methodology, and best practices. Not outcomes
- When in doubt about any SEO decision, ask: "Does this help the user?" If yes, it almost certainly helps SEO too
- No em dashes in any content, anywhere, ever. Use commas, semicolons, colons, periods, or restructure the sentence
- AI search (ChatGPT, Perplexity, Google AI Overviews) is becoming a significant traffic channel. Optimize for both traditional search AND AI citation
- robots.txt, llms.txt, and sitemap.xml are your three gatekeeping files. Keep them accurate and updated

---

# END OF SEO.md

*Million Global Leads - AI-Powered Digital Marketing Agency*
*milliongloballeads.com*

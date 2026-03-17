import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Hidden Potential' },
  description:
    'How Hidden Potential collects, uses and protects your personal information. Read our complete privacy policy.',
  openGraph: {
    title: 'Privacy Policy | Hidden Potential',
    description: 'How Hidden Potential collects, uses and protects your personal information.',
    type: 'website',
    url: 'https://hiddenpotentialskills.com/privacy',
  },
  alternates: {
    canonical: 'https://hiddenpotentialskills.com/privacy',
  },
  robots: { index: false, follow: true },
};

const lastUpdated = 'February 1, 2026';

export default function PrivacyPage() {
  return (
    <div>
      {/* ── HEADER ──────────────────────────────────────────────────────────── */}
      <section
        style={{ background: 'linear-gradient(180deg, #2D1B69 0%, #1A0F3C 100%)' }}
        className="pt-24 pb-16 text-center"
      >
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-primary-teal mb-3">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/55 text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* ── CONTENT ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Intro */}
          <div className="bg-navy-light rounded-lg border border-primary-teal/10 p-5 mb-10">
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Hidden Potential (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <strong>hiddenpotentialskills.com</strong> or contact us regarding our life skills training programmes. Please read this policy carefully. If you disagree with its terms, please discontinue use of the website.
            </p>
          </div>

          <div className="prose max-w-none space-y-10">

            {/* 1 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                Information We Collect
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p><strong className="text-charcoal">Personal Information You Provide:</strong> When you submit an inquiry form, contact us by email, WhatsApp, or phone, or request a free evaluation, we collect information such as your name, email address, phone number, age group, and the nature of your enquiry.</p>
                <p><strong className="text-charcoal">Assessment Data:</strong> If you complete our Life Skills Assessment on the website, your responses are processed entirely in your browser and are not stored on our servers. Assessment answers are used only to display a pathway recommendation and are not transmitted to us unless you subsequently contact us.</p>
                <p><strong className="text-charcoal">Automatically Collected Data:</strong> We may collect standard usage data through analytics tools (such as Google Analytics), including your IP address, browser type, device type, pages visited, and time spent on the website. This data is aggregated and does not identify you personally.</p>
                <p><strong className="text-charcoal">Communications:</strong> If you contact us by email or WhatsApp, we retain those communications to provide support and follow up on your enquiry.</p>
              </div>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                How We Use Your Information
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>We use the information we collect to:</p>
                <ul className="list-none space-y-2">
                  {[
                    'Respond to your enquiries and provide information about our programmes',
                    'Schedule and conduct free evaluation calls and consultations',
                    'Provide our life skills training, coaching, and certification programmes',
                    'Send programme information, schedules, and updates relevant to your enquiry',
                    'Improve our website and services based on aggregated usage data',
                    'Comply with legal obligations and resolve disputes',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-teal mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>We do not use your information for unsolicited marketing. We do not send promotional emails without your consent.</p>
              </div>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
                How We Share Your Information
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:</p>
                <ul className="list-none space-y-2">
                  {[
                    'Service Providers: Third-party tools that help us operate the website (e.g., email services, analytics platforms), bound by confidentiality obligations',
                    'Legal Requirements: When required by law, court order, or governmental authority',
                    'Business Transfer: In the event of a merger, acquisition, or sale of assets, subject to the same privacy commitments',
                    'With Your Consent: When you have explicitly authorised us to share your information',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-teal mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
                Cookies and Tracking Technologies
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyse site usage. Types of cookies we may use include:</p>
                <ul className="list-none space-y-2">
                  {[
                    'Essential Cookies: Required for the website to function correctly',
                    'Analytics Cookies: Help us understand how visitors interact with the website (e.g., Google Analytics)',
                    'Preference Cookies: Remember your settings and preferences',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-teal mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>You can control cookies through your browser settings. Disabling cookies may affect some website functionality.</p>
              </div>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">5</span>
                Data Retention
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to provide our services, comply with legal obligations, and resolve disputes. Enquiry data is retained for a maximum of 3 years. You may request deletion of your data at any time by contacting us.</p>
              </div>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">6</span>
                Data Security
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>We implement reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your information to the best of our ability.</p>
              </div>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">7</span>
                Your Rights
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>Depending on your location and applicable law, you may have the right to:</p>
                <ul className="list-none space-y-2">
                  {[
                    'Access the personal information we hold about you',
                    'Request correction of inaccurate or incomplete information',
                    'Request deletion of your personal information',
                    'Withdraw consent for data processing where consent was the basis',
                    'Object to processing of your personal information',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-teal mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>To exercise these rights, please contact us using the details in Section 9 below.</p>
              </div>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">8</span>
                Third-Party Links
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed">
                <p>Our website may contain links to third-party websites (e.g., WhatsApp, social media platforms). We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
              </div>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">9</span>
                Changes to This Policy
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed">
                <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to review this policy periodically. Continued use of the website after changes constitutes acceptance of the updated policy.</p>
              </div>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">10</span>
                Contact Us
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-2">
                <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
                <div className="mt-4 bg-off-white rounded-lg border border-gray-200 p-5 space-y-1.5">
                  <p><strong className="text-charcoal">Hidden Potential</strong></p>
                  <p>D-802, Palm Court Apartment, Plot 3, Sector 19B, Dwarka, South West Delhi — 110075</p>
                  <p>
                    Email:{' '}
                    <a href="mailto:hiddenpotential2030@gmail.com" className="text-primary-teal hover:text-teal-dark underline underline-offset-2 transition-colors">
                      hiddenpotential2030@gmail.com
                    </a>
                  </p>
                  <p>
                    Phone:{' '}
                    <a href="tel:+919899209335" className="text-primary-teal hover:text-teal-dark underline underline-offset-2 transition-colors">
                      +91 98992 09335
                    </a>
                  </p>
                  <p>Hours: Monday – Friday, 10 AM – 7 PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Back links */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
            <Link href="/" className="text-primary-teal hover:text-teal-dark font-semibold transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Home
            </Link>
            <Link href="/terms" className="text-charcoal/50 hover:text-primary-teal font-semibold transition-colors">
              Terms of Service →
            </Link>
            <Link href="/contact" className="text-charcoal/50 hover:text-primary-teal font-semibold transition-colors">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Terms of Service | Hidden Potential' },
  description:
    'Terms and conditions for using Hidden Potential website and enrolling in life skills programs.',
  alternates: {
    canonical: 'https://hiddenpotentialskills.com/terms',
  },
  robots: { index: false, follow: true },
};

const lastUpdated = 'February 1, 2026';

export default function TermsPage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────────────────────────── */}
      <section
        style={{ background: '#6F00FF' }}
        className="pt-24 pb-16 text-center"
      >
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-primary-teal mb-3">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Terms of Service
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
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of <strong>hiddenpotentialskills.com</strong> (the &ldquo;Website&rdquo;) and your enrolment in any programmes, services, or consultations offered by <strong>Hidden Potential</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;). By accessing the Website or engaging with our services, you agree to be bound by these Terms. If you do not agree, please do not use the Website or our services.
            </p>
          </div>

          <div className="prose max-w-none space-y-10">

            {/* 1 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                Acceptance of Terms
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>By using this Website, submitting an enquiry, enrolling in any programme, or engaging in a consultation with Hidden Potential, you confirm that you are at least 18 years of age (or have parental/guardian consent if under 18), that you have read and understood these Terms, and that you agree to be bound by them. We reserve the right to update these Terms at any time with notice published on this page.</p>
              </div>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                Services Offered
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>Hidden Potential offers structured life skills training programmes, coaching, workshops, and certifications including (but not limited to):</p>
                <ul className="list-none space-y-2">
                  {[
                    'An Enlightened Learner — life skills programme for students (Ages 8–21)',
                    'Communication Mastery — structured communication and leadership training',
                    'Self Mastery for Women — holistic growth programme for women (28+)',
                    'Train the Trainer Certification — certified facilitator programme',
                    'Art Therapy for Healing — therapeutic creative expression programme',
                    'Sub-service coaching: NLP, confidence building, stress management, emotional intelligence, and others',
                    'School and institutional partnership programmes',
                    'Free evaluation calls and life skills assessments',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-teal mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>Programme details, formats, durations, and pricing are confirmed at the time of enrolment and may vary. Contact us at <Link href="/contact" className="text-primary-teal hover:text-teal-dark underline underline-offset-2 transition-colors">hiddenpotentialskills.com/contact</Link> for current programme information.</p>
              </div>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
                Enrolment and Eligibility
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>Enrolment in Hidden Potential programmes is subject to availability, a free evaluation call, and programme-specific eligibility requirements. We reserve the right to decline enrolment at our discretion. For programmes involving minors (under 18 years), a parent or legal guardian must provide written consent prior to enrolment and may be required to participate in certain programme components.</p>
              </div>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
                Fees, Payment, and Refunds
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p><strong className="text-charcoal">Fees:</strong> Programme fees are communicated during the evaluation call and confirmed in writing prior to enrolment. Fees are subject to change. Once confirmed, fees for your enrolled programme will not change mid-programme without notice and agreement.</p>
                <p><strong className="text-charcoal">Payment:</strong> Payment terms are agreed upon at enrolment. We may offer instalment options at our discretion. All fees are in Indian Rupees (INR) unless otherwise stated.</p>
                <p><strong className="text-charcoal">Refund Policy:</strong> Free evaluation calls and assessments are complimentary with no payment required. For paid programmes, refund eligibility is discussed and confirmed at the time of enrolment. In general, fees paid for completed sessions are non-refundable. For programmes not yet commenced, refunds may be considered on a case-by-case basis. Please contact us directly to discuss your specific situation.</p>
                <p><strong className="text-charcoal">Institutional Programmes:</strong> For school and corporate partnerships, payment terms and refund conditions are governed by the specific agreement executed between Hidden Potential and the institution.</p>
              </div>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">5</span>
                Participant Conduct
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>All participants are expected to engage respectfully with trainers, facilitators, and other participants. We reserve the right to remove any participant from a programme without refund if their conduct is disruptive, harmful, or violates our code of conduct. Participants must not record, share, or reproduce session materials without written permission from Hidden Potential.</p>
              </div>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">6</span>
                Intellectual Property
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>All content on this Website — including text, programme frameworks, curriculum materials, worksheets, assessments, branding, logos, and visual design — is the exclusive intellectual property of Hidden Potential and its founder Supreet Kaur, unless otherwise stated. You may not reproduce, distribute, modify, create derivative works from, or commercially exploit any content without prior written permission.</p>
                <p>Programme materials provided to enrolled participants are for personal use only and may not be shared, resold, or used to develop competing programmes without written authorisation.</p>
              </div>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">7</span>
                Disclaimer of Warranties
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>Hidden Potential programmes are educational and developmental in nature. They are not a substitute for professional medical, psychological, psychiatric, or therapeutic treatment. If you are experiencing a mental health crisis, please seek help from a qualified medical or mental health professional.</p>
                <p>We make no guarantee that participation in our programmes will result in specific outcomes. Individual results depend on many factors including consistency of practice, personal commitment, and individual circumstances.</p>
                <p>The Website and its content are provided &ldquo;as is&rdquo; without warranties of any kind, express or implied.</p>
              </div>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">8</span>
                Limitation of Liability
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>To the maximum extent permitted by applicable law, Hidden Potential and its founder, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website or participation in our programmes, even if advised of the possibility of such damages. Our total liability for any claim shall not exceed the amount you paid us in the three months prior to the event giving rise to the claim.</p>
              </div>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">9</span>
                Third-Party Links and Services
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed">
                <p>The Website may contain links to third-party websites or services (e.g., WhatsApp, payment platforms). We are not responsible for the content, terms, or privacy practices of those platforms. Use of third-party services is subject to their respective terms of service.</p>
              </div>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">10</span>
                Governing Law and Disputes
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-3">
                <p>These Terms are governed by the laws of India. Any dispute arising from or relating to these Terms or your use of Hidden Potential services shall be subject to the exclusive jurisdiction of the courts of Delhi, India. We encourage you to contact us first to resolve any concerns informally before initiating formal proceedings.</p>
              </div>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">11</span>
                Changes to These Terms
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed">
                <p>We reserve the right to modify these Terms at any time. Updated Terms will be published on this page with a revised &ldquo;Last Updated&rdquo; date. Your continued use of the Website or services after changes are published constitutes acceptance of the updated Terms.</p>
              </div>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-xl font-extrabold text-primary-navy mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">12</span>
                Contact Us
              </h2>
              <div className="pl-10 text-sm text-charcoal/75 leading-relaxed space-y-2">
                <p>For questions about these Terms, please contact:</p>
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
            <Link href="/privacy" className="text-charcoal/50 hover:text-primary-teal font-semibold transition-colors">
              Privacy Policy →
            </Link>
            <Link href="/contact" className="text-charcoal/50 hover:text-primary-teal font-semibold transition-colors">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

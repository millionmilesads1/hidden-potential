"use client";

/**
 * EnrollForm — Client Component
 * Handles the enrollment form on /enroll.
 * TODO: Wire the handleSubmit function to a server action or POST /api/enroll
 *       to process and deliver the enrollment data.
 */

export default function EnrollForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect to server action or POST /api/enroll
    // const formData = new FormData(e.currentTarget);
    // await fetch('/api/enroll', { method: 'POST', body: formData });
  }

  const inputClass =
    "w-full px-4 py-3 text-sm text-charcoal bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-teal/30 focus:border-primary-teal transition-colors";

  const selectClass =
    "w-full px-4 py-3 text-sm text-charcoal bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/30 focus:border-primary-teal transition-colors appearance-none";

  const labelClass = "block text-sm font-semibold text-primary-navy mb-1.5";

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 md:p-10">
      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* ── Row 1: Full Name + Phone ─────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full Name <span className="text-primary-teal">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Your full name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number{" "}
              <span className="text-charcoal/40 font-normal text-xs">(WhatsApp preferred)</span>{" "}
              <span className="text-primary-teal">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+91 XXXXX XXXXX"
              className={inputClass}
            />
          </div>
        </div>

        {/* ── Row 2: Email + Location ──────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address <span className="text-primary-teal">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="location" className={labelClass}>
              Your Location <span className="text-primary-teal">*</span>
            </label>
            <select
              id="location"
              name="location"
              required
              defaultValue=""
              className={selectClass}
            >
              <option value="" disabled>
                Select your city
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Dwarka">Dwarka</option>
              <option value="Noida">Noida</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Faridabad">Faridabad</option>
              <option value="Online">Online / Outside Delhi NCR</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* ── Row 3: Program (full width) ──────────────────────────────────────── */}
        <div>
          <label htmlFor="program" className={labelClass}>
            Program <span className="text-primary-teal">*</span>
          </label>
          <select
            id="program"
            name="program"
            required
            defaultValue=""
            className={selectClass}
          >
            <option value="" disabled>
              Select a program
            </option>
            <option value="An Enlightened Learner">
              An Enlightened Learner (Student Program)
            </option>
            <option value="Communication Mastery">Communication Mastery</option>
            <option value="Self Mastery for Women">Self Mastery for Women</option>
            <option value="Train the Trainer">Train the Trainer Certification</option>
            <option value="Art Therapy">Art Therapy for Healing</option>
            <option value="NLP Coaching">NLP Coaching (Individual Sessions)</option>
            <option value="Corporate Workshop">Corporate Workshop Package</option>
            <option value="School Program">School Partnership Program</option>
            <option value="Individual Service">Individual Service Sessions</option>
            <option value="Not Sure Yet">Not Sure Yet — Help Me Choose</option>
          </select>
        </div>

        {/* ── Row 4: Preferred Mode + Batch Timing ─────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="mode" className={labelClass}>
              Preferred Mode <span className="text-primary-teal">*</span>
            </label>
            <select
              id="mode"
              name="mode"
              required
              defaultValue=""
              className={selectClass}
            >
              <option value="" disabled>
                Select preferred mode
              </option>
              <option value="In-Person">In-Person (Dwarka, Delhi)</option>
              <option value="Online">Online</option>
              <option value="At My Location">At My Location</option>
            </select>
          </div>
          <div>
            <label htmlFor="timing" className={labelClass}>
              Batch Timing{" "}
              <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
            </label>
            <select
              id="timing"
              name="timing"
              defaultValue=""
              className={selectClass}
            >
              <option value="">Select preferred timing</option>
              <option value="Weekday Morning">Weekday Morning</option>
              <option value="Weekday Evening">Weekday Evening</option>
              <option value="Weekend">Weekend</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        {/* ── Row 5: Goals or Challenges (optional) ───────────────────────────── */}
        <div>
          <label htmlFor="goals" className={labelClass}>
            Goals or Challenges{" "}
            <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
          </label>
          <textarea
            id="goals"
            name="goals"
            rows={4}
            placeholder="Briefly describe your goals, current challenges, or what you hope to achieve through life skills training. The more context you share, the more personalised your program recommendation will be."
            className="w-full px-4 py-3 text-sm text-charcoal bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-teal/30 focus:border-primary-teal transition-colors resize-none"
          />
        </div>

        {/* ── Row 6: How Did You Hear About Us ─────────────────────────────────── */}
        <div>
          <label htmlFor="source" className={labelClass}>
            How Did You Hear About Us{" "}
            <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
          </label>
          <select
            id="source"
            name="source"
            defaultValue=""
            className={selectClass}
          >
            <option value="">Select an option</option>
            <option value="Google Search">Google Search</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend or Family">Friend or Family</option>
            <option value="School">School</option>
            <option value="Workplace">Workplace</option>
            <option value="Josh Talks">Josh Talks</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* ── Submit ───────────────────────────────────────────────────────────── */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark rounded-md transition-colors"
          >
            Submit My Enrollment
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Privacy note */}
        <p className="text-xs text-charcoal/40 leading-relaxed">
          Submitting this form does not commit you to any payment or program. A member of our team
          will contact you within 24 hours to discuss your goals and share program details. Your
          information is kept strictly confidential and will never be shared with third parties. By
          submitting this form you consent to being contacted by Hidden Potential regarding your
          inquiry.
        </p>

      </form>
    </div>
  );
}

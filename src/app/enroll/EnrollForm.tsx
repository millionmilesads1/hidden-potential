"use client";

import { useState } from "react";

/**
 * EnrollForm — Client Component
 * Submits to Web3Forms for email capture, then opens a pre-filled WhatsApp
 * message. Shows a success or error state after submission.
 */

export default function EnrollForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("fullName") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const location = data.get("location") as string;
    const program = data.get("program") as string;
    const mode = data.get("mode") as string;
    const timing = (data.get("timing") as string) || "";
    const goals = (data.get("goals") as string) || "";
    const source = (data.get("source") as string) || "";

    // Submit to Web3Forms for email capture
    try {
      const payload = new FormData();
      payload.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
      payload.append("subject", `New Enrollment Request — ${program}`);
      payload.append("name", name);
      payload.append("phone", phone);
      payload.append("email", email);
      payload.append("location", location);
      payload.append("program", program);
      payload.append("mode", mode);
      if (timing) payload.append("timing", timing);
      if (goals) payload.append("goals", goals);
      if (source) payload.append("source", source);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const json = await res.json();
      if (!json.success) throw new Error("Web3Forms rejected the submission");
    } catch {
      setStatus("error");
      return;
    }

    // Open WhatsApp with pre-filled message
    const text = [
      `Hi Supreet, I would like to enroll in a Hidden Potential program.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Location: ${location}`,
      `Program: ${program}`,
      `Preferred Mode: ${mode}`,
      timing ? `Preferred Timing: ${timing}` : "",
      goals ? `Goals / Challenges: ${goals}` : "",
      source ? `How I heard about you: ${source}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/919899209335?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setStatus("success");
  }

  if (status === "error") {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-primary-navy mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Something Went Wrong
        </h3>
        <p className="text-sm text-charcoal/70 leading-relaxed mb-6 max-w-md mx-auto">
          We couldn&apos;t submit your enrollment right now. Please reach us directly on WhatsApp or by phone and we&apos;ll get you enrolled straight away.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="https://wa.me/919899209335"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-teal hover:bg-teal-dark text-white text-sm font-bold rounded-lg transition-colors"
          >
            WhatsApp Us
          </a>
          <a
            href="tel:+919899209335"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-teal/30 hover:border-primary-teal text-primary-teal text-sm font-bold rounded-lg transition-colors"
          >
            Call +91 98992 09335
          </a>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-charcoal/40 hover:text-charcoal/60 underline transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-primary-navy mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Enrollment Request Received
        </h3>
        <p className="text-sm text-charcoal/70 leading-relaxed mb-2 max-w-md mx-auto">
          A WhatsApp window has opened with your enrollment details pre-filled. Send the message to connect with the Hidden Potential team directly.
        </p>
        <p className="text-sm text-charcoal/70 leading-relaxed mb-6 max-w-md mx-auto">
          We will confirm your enrollment, share program schedule details, and answer any questions — typically within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="https://wa.me/919899209335"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-teal hover:bg-teal-dark text-white text-sm font-bold rounded-lg transition-colors"
          >
            Open WhatsApp
          </a>
          <a
            href="tel:+919899209335"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-teal/30 hover:border-primary-teal text-primary-teal text-sm font-bold rounded-lg transition-colors"
          >
            Call +91 98992 09335
          </a>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-charcoal/40 hover:text-charcoal/60 underline transition-colors"
        >
          Submit another enrollment
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 text-sm text-charcoal bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-teal/30 focus:border-primary-teal transition-colors";

  const selectClass =
    "w-full px-4 py-3 text-sm text-charcoal bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/30 focus:border-primary-teal transition-colors appearance-none";

  const labelClass = "block text-sm font-semibold text-primary-navy mb-1.5";

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 md:p-10">
      <form className="space-y-6" onSubmit={handleSubmit} aria-describedby="enroll-form-note" noValidate>

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
              aria-required="true"
              placeholder="Your full name"
              autoComplete="name"
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
              aria-required="true"
              placeholder="+91 XXXXX XXXXX"
              autoComplete="tel"
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
              aria-required="true"
              placeholder="you@example.com"
              autoComplete="email"
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
              aria-required="true"
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
            aria-required="true"
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
              aria-required="true"
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
            disabled={status === "submitting"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark disabled:opacity-70 rounded-md transition-colors"
          >
            {status === "submitting" ? "Opening WhatsApp…" : "Submit My Enrollment"}
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
        <p id="enroll-form-note" className="text-xs text-charcoal/40 leading-relaxed">
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

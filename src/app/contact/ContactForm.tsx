"use client";

import { useState } from "react";

/**
 * ContactForm — Client Component
 * On submit, builds a pre-filled WhatsApp message and opens it in a new tab,
 * then shows a success state with direct contact options.
 */

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("fullName") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const location = data.get("location") as string;
    const interest = data.get("interest") as string;
    const message = (data.get("message") as string) || "";

    const text = [
      `Hi Supreet, I came from the Hidden Potential website and would like to enquire about life skills coaching.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Location: ${location}`,
      `Interested in: ${interest}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/919899209335?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setStatus("success");
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
          Your Message Is Ready
        </h3>
        <p className="text-sm text-charcoal/70 leading-relaxed mb-6 max-w-md mx-auto">
          A WhatsApp window has opened with your details pre-filled. Simply send the message to connect with Supreet Kaur directly. You can also reach us by phone or email below.
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
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 md:p-10">
      <form className="space-y-6" onSubmit={handleSubmit} aria-describedby="contact-form-note" noValidate>
        {/* Row 1: Name + Phone */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-primary-navy mb-1.5"
            >
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
              className="w-full px-4 py-3 text-sm text-charcoal bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-teal/30 focus:border-primary-teal transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-primary-navy mb-1.5"
            >
              Phone Number <span className="text-primary-teal">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              aria-required="true"
              placeholder="+91 XXXXX XXXXX"
              autoComplete="tel"
              className="w-full px-4 py-3 text-sm text-charcoal bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-teal/30 focus:border-primary-teal transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Email + Location */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-primary-navy mb-1.5"
            >
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
              className="w-full px-4 py-3 text-sm text-charcoal bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-teal/30 focus:border-primary-teal transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-primary-navy mb-1.5"
            >
              Your Location <span className="text-primary-teal">*</span>
            </label>
            <select
              id="location"
              name="location"
              required
              aria-required="true"
              defaultValue=""
              className="w-full px-4 py-3 text-sm text-charcoal bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/30 focus:border-primary-teal transition-colors appearance-none"
            >
              <option value="" disabled>
                Select your city
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Dwarka">Dwarka</option>
              <option value="Noida">Noida</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Faridabad">Faridabad</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Row 3: Interested In (full width) */}
        <div>
          <label
            htmlFor="interest"
            className="block text-sm font-semibold text-primary-navy mb-1.5"
          >
            I Am Interested In <span className="text-primary-teal">*</span>
          </label>
          <select
            id="interest"
            name="interest"
            required
            aria-required="true"
            defaultValue=""
            className="w-full px-4 py-3 text-sm text-charcoal bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/30 focus:border-primary-teal transition-colors appearance-none"
          >
            <option value="" disabled>
              Select a program
            </option>
            <option value="Life Skills for My Child">Life Skills for My Child</option>
            <option value="School Program">School Program</option>
            <option value="Corporate Workshop">Corporate Workshop</option>
            <option value="NLP Coaching">NLP Coaching</option>
            <option value="Train the Trainer">Train the Trainer</option>
            <option value="Self Mastery for Women">Self Mastery for Women</option>
            <option value="Art Therapy">Art Therapy</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Row 4: Message (full width, optional) */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-primary-navy mb-1.5"
          >
            Your Message{" "}
            <span className="text-charcoal/40 font-normal text-xs">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a little about your goals, challenges, or any questions you have. The more context you share, the more helpful our response will be."
            className="w-full px-4 py-3 text-sm text-charcoal bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-teal/30 focus:border-primary-teal transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold text-white bg-primary-teal hover:bg-teal-dark disabled:opacity-70 rounded-md transition-colors"
        >
          {status === "submitting" ? "Opening WhatsApp…" : "Start My Transformation Journey"}
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

        {/* Privacy note */}
        <p id="contact-form-note" className="text-xs text-charcoal/40 leading-relaxed">
          Your information is kept strictly confidential and will never be shared with third
          parties. By submitting this form you consent to being contacted by Hidden Potential
          regarding your inquiry.
        </p>
      </form>
    </div>
  );
}

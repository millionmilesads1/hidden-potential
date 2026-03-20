import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const programs = [
  { label: "An Enlightened Learner", href: "/programs/enlightened-learner" },
  { label: "Communication Mastery", href: "/programs/communication-mastery" },
  { label: "Self Mastery for Women", href: "/programs/self-mastery-women" },
  { label: "Train the Trainer",      href: "/programs/train-the-trainer" },
  { label: "Art Therapy for Healing", href: "/programs/art-therapy" },
];

const services = [
  { label: "NLP Coaching",             href: "/services/nlp-coaching" },
  { label: "Confidence Building",      href: "/services/confidence-building" },
  { label: "Communication Skills",     href: "/services/communication-skills" },
  { label: "Study Skills & Memory",    href: "/services/study-skills" },
  { label: "Stress Management",        href: "/services/stress-management" },
  { label: "Emotional Intelligence",   href: "/services/emotional-intelligence" },
  { label: "Goal Setting",             href: "/services/goal-setting" },
  { label: "Career Guidance",          href: "/services/career-guidance" },
  { label: "Group Workshops",          href: "/services/workshops" },
];

const locations = [
  { label: "Life Coach in Delhi",       href: "/locations/delhi" },
  { label: "Life Skills in Noida",      href: "/locations/noida" },
  { label: "Life Skills in Gurgaon",    href: "/locations/gurgaon" },
  { label: "Life Skills in Faridabad",  href: "/locations/faridabad" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#2D1B69" }}>

      {/* ── Top tagline strip ─────────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center cursor-pointer shrink-0">
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "#C8A951" }}
            >
              Hidden
            </span>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.9)" }}
            >
              {" "}Potential
            </span>
          </Link>

          <p
            className="text-sm text-center sm:text-right"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              color: "#C8A951",
              opacity: 0.8,
            }}
          >
            &ldquo;Deeper the Roots, Stronger the Branches&rdquo;
          </p>
        </div>
      </div>

      {/* ── Main grid ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 - Brand */}
        <div className="flex flex-col gap-5">
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
          >
            A structured transformational academy for students, women, professionals
            and future trainers. System. Science. Structure.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-1">
            <a
              href="https://www.facebook.com/hiddenpotentialskills"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hidden Potential on Facebook (opens in new tab)"
              className="footer-social cursor-pointer"
            >
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.instagram.com/hiddenpotentialskills"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hidden Potential on Instagram (opens in new tab)"
              className="footer-social cursor-pointer"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/supreetkaur-hiddenpotential"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hidden Potential on LinkedIn (opens in new tab)"
              className="footer-social cursor-pointer"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.youtube.com/@hiddenpotentialskills"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hidden Potential on YouTube (opens in new tab)"
              className="footer-social cursor-pointer"
            >
              <Youtube size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Credential pills */}
          <div className="flex flex-wrap gap-2 mt-1">
            {["MSME Registered", "Skill India Certified", "NEP 2020"].map((badge) => (
              <span
                key={badge}
                className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#C8A951",
                  border: "1px solid rgba(200,169,81,0.3)",
                  background: "rgba(200,169,81,0.06)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Column 2 - Programs */}
        <nav aria-labelledby="footer-programs-heading">
          <h3
            id="footer-programs-heading"
            className="text-[10px] font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: "var(--font-body)", color: "#C8A951" }}
          >
            Programs
          </h3>
          <ul className="flex flex-col gap-3">
            {programs.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="footer-link text-sm cursor-pointer"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3 - Services */}
        <nav aria-labelledby="footer-services-heading">
          <h3
            id="footer-services-heading"
            className="text-[10px] font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: "var(--font-body)", color: "#C8A951" }}
          >
            Services
          </h3>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="footer-link text-sm cursor-pointer"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 4 - Locations + NAP */}
        <div className="flex flex-col gap-7">
          <nav aria-labelledby="footer-locations-heading">
            <h3
              id="footer-locations-heading"
              className="text-[10px] font-bold uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-body)", color: "#C8A951" }}
            >
              Locations
            </h3>
            <ul className="flex flex-col gap-3">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="footer-link text-sm cursor-pointer"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address
            className="not-italic flex flex-col gap-2.5 text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className="leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              D-802, Palm Court Apartment, Sector 19B, Dwarka, Delhi 110075
            </span>
            <a
              href="tel:+919899209335"
              aria-label="Call Hidden Potential at +91 98992 09335"
              className="footer-contact cursor-pointer"
            >
              +91 98992 09335
            </a>
            <a
              href="mailto:hiddenpotential2030@gmail.com"
              aria-label="Email Hidden Potential at hiddenpotential2030@gmail.com"
              className="footer-contact cursor-pointer break-all"
            >
              hiddenpotential2030@gmail.com
            </a>
            <a
              href="https://wa.me/919899209335"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Hidden Potential on WhatsApp (opens in new tab)"
              className="footer-whatsapp inline-flex items-center gap-1.5 font-medium cursor-pointer"
            >
              WhatsApp Us →
            </a>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              Mon–Fri: 10 AM – 7 PM
            </span>
          </address>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.3)" }}
          >
            © {new Date().getFullYear()} Hidden Potential. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy Policy",   href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="footer-utility text-xs cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

const programs = [
  { label: "An Enlightened Learner", href: "/programs/enlightened-learner" },
  { label: "Communication Mastery", href: "/programs/communication-mastery" },
  { label: "Self Mastery for Women", href: "/programs/self-mastery-women" },
  { label: "Train the Trainer", href: "/programs/train-the-trainer" },
  { label: "Art Therapy for Healing", href: "/programs/art-therapy" },
];

const services = [
  { label: "NLP Coaching", href: "/services/nlp-coaching" },
  { label: "Confidence Building", href: "/services/confidence-building" },
  { label: "Communication Skills", href: "/services/communication-skills" },
  { label: "Study Skills & Memory", href: "/services/study-skills" },
  { label: "Stress Management", href: "/services/stress-management" },
  { label: "Emotional Intelligence", href: "/services/emotional-intelligence" },
  { label: "Goal Setting", href: "/services/goal-setting" },
  { label: "Career Guidance", href: "/services/career-guidance" },
  { label: "Group Workshops", href: "/services/workshops" },
];

const locations = [
  { label: "Life Coach in Delhi", href: "/locations/delhi" },
  { label: "Life Skills in Noida", href: "/locations/noida" },
  { label: "Life Skills in Gurgaon", href: "/locations/gurgaon" },
  { label: "Life Skills in Faridabad", href: "/locations/faridabad" },
];

const footerLinkClass =
  "text-sm text-white/65 hover:text-white transition-colors";

export default function Footer() {
  return (
    <footer className="bg-[#2D1B69]">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 — Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-flex items-center gap-0">
            <span className="text-xl font-extrabold text-primary-gold" style={{ fontFamily: "var(--font-display)" }}>
              Hidden
            </span>
            <span className="text-xl font-extrabold text-white" style={{ fontFamily: "var(--font-display)" }}>
              {" "}Potential
            </span>
          </Link>

          <p className="text-sm leading-relaxed text-white/65" style={{ fontFamily: "var(--font-body)" }}>
            A structured transformational academy for students, women, professionals
            and future trainers. System. Science. Structure.
          </p>

          {/* Social links placeholder */}
          <div className="flex items-center gap-4 mt-2">
            {["FB", "IG", "LI", "YT"].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="text-xs font-semibold text-white/40 hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Programs */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest text-primary-gold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Programs
          </h3>
          <ul className="flex flex-col gap-2.5">
            {programs.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className={footerLinkClass} style={{ fontFamily: "var(--font-body)" }}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Services */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest text-primary-gold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Services
          </h3>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className={footerLinkClass} style={{ fontFamily: "var(--font-body)" }}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Locations + NAP */}
        <div className="flex flex-col gap-6">
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest text-primary-gold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Locations
            </h3>
            <ul className="flex flex-col gap-2.5">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={footerLinkClass} style={{ fontFamily: "var(--font-body)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAP — Name Address Phone */}
          <address
            className="not-italic flex flex-col gap-2 text-sm text-white/65"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span>D-802, Palm Court Apartment, Sector 19B, Dwarka, Delhi 110075</span>
            <a href="tel:+919899209335" className="text-white/65 hover:text-white transition-colors">
              +91 98992 09335
            </a>
            <a href="mailto:hiddenpotential2030@gmail.com" className="text-white/65 hover:text-white transition-colors break-all">
              hiddenpotential2030@gmail.com
            </a>
            <a
              href="https://wa.me/919899209335"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-white hover:text-primary-teal transition-colors"
            >
              WhatsApp Us
            </a>
            <span className="text-xs text-white/40">Mon–Fri: 10 AM – 7 PM</span>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40" style={{ fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} Hidden Potential. All rights reserved. MSME Registered. Skill India Certified.
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 hover:text-white transition-colors"
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

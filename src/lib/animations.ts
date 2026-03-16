import type { Variants } from "framer-motion";

// Ease curve — feels smooth and intentional, not springy
export const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── Base variants ─────────────────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease } },
};

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

// ── Stagger containers ────────────────────────────────────────────────────────

export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0 } },
};

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0 } },
};

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0 } },
};

// ── Page transition ───────────────────────────────────────────────────────────

export const pageVariants: Variants = {
  hidden:  { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.22, ease },
  },
};

// ── Navbar mount ──────────────────────────────────────────────────────────────

export const navbarVariants: Variants = {
  hidden:  { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease, delay: 0.1 },
  },
};

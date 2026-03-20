import type { Variants } from "framer-motion";

// ── Easing ────────────────────────────────────────────────────────────────────
export const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── Spring presets ────────────────────────────────────────────────────────────
export const springBounce  = { type: "spring", stiffness: 60,  damping: 15 } as const;
export const springSnappy  = { type: "spring", stiffness: 300, damping: 20 } as const;
export const springInstant = { type: "spring", stiffness: 500, damping: 30 } as const;

// ── Section entrances - y:100, spring physics ─────────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { ...springBounce } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease } },
};

// Slide from left - subtext, images
export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { ...springBounce } },
};

// Slide from right
export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { ...springBounce } },
};

// Scale from 0 - CTA button entrance
export const scaleSpring: Variants = {
  hidden:  { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } },
};

// Card entrance - y:80
export const cardEntrance: Variants = {
  hidden:  { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { ...springBounce } },
};

// Word / letter drop - y:-80, slight rotation. Use as child variant inside a
// stagger container; the container controls timing, not a `custom` index.
export const letterDrop: Variants = {
  hidden:  { opacity: 0, y: -80, rotate: -6 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

// Stagger container for headline words (0.08s between words)
export const headlineContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

// ── Stagger containers - 0.15s between children ───────────────────────────────
export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0 } },
};

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0 } },
};

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.20, delayChildren: 0 } },
};

// ── Page transition - scale + fade ───────────────────────────────────────────
export const pageVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.25, ease },
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

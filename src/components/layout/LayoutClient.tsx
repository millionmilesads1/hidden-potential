"use client";

/**
 * LayoutClient - wraps page {children} with Framer Motion page transitions.
 * Uses usePathname() as the AnimatePresence key so each route change
 * triggers exit → enter animation in Next.js App Router.
 * Transition: fade + scale (0.96 → 1) for a premium SaaS feel.
 */

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { pageVariants } from "@/lib/animations";

export default function LayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce   = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ minHeight: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

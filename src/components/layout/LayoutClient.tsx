"use client";

/**
 * LayoutClient — wraps page {children} with Framer Motion page transitions.
 * Uses usePathname() as the AnimatePresence key so each route change
 * triggers exit → enter animation in Next.js App Router.
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
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

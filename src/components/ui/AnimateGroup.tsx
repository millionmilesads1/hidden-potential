"use client";

/**
 * AnimateGroup — stagger container that auto-wraps each child in a motion.div
 * with the fadeUp variant. Use it for grids of cards, feature lists, steps, etc.
 *
 * Example:
 *   <AnimateGroup className="grid grid-cols-3 gap-6">
 *     <Card />  <Card />  <Card />
 *   </AnimateGroup>
 */

import { Children } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import { fadeUp, stagger } from "@/lib/animations";
import type { Variants } from "framer-motion";

interface AnimateGroupProps {
  children: ReactNode;
  className?: string;
  /** Speed of stagger: "normal" (0.10s) | "fast" (0.07s) | "slow" (0.14s) */
  speed?: "fast" | "normal" | "slow";
  margin?: string;
  /** Override item variant (default: fadeUp) */
  itemVariants?: Variants;
}

const staggerSpeeds = {
  fast:   0.07,
  normal: 0.10,
  slow:   0.14,
};

export default function AnimateGroup({
  children,
  className,
  speed = "normal",
  margin = "-80px 0px",
  itemVariants = fadeUp,
}: AnimateGroupProps) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin } as Parameters<typeof useInView>[1]);
  const reduce = useReducedMotion();

  const containerVariants: Variants = {
    hidden:  {},
    visible: {
      transition: { staggerChildren: staggerSpeeds[speed] },
    },
  };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {Children.map(children, (child) =>
        child == null ? null : (
          <motion.div variants={itemVariants} style={{ height: "100%" }}>
            {child}
          </motion.div>
        )
      )}
    </motion.div>
  );
}

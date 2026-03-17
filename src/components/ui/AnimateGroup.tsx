"use client";

/**
 * AnimateGroup — stagger container that auto-wraps each child in a motion.div
 * with the cardEntrance variant. Use it for grids of cards, feature lists, etc.
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
import { cardEntrance } from "@/lib/animations";
import type { Variants } from "framer-motion";

interface AnimateGroupProps {
  children: ReactNode;
  className?: string;
  /** Speed of stagger: "fast" (0.10s) | "normal" (0.15s) | "slow" (0.20s) */
  speed?: "fast" | "normal" | "slow";
  margin?: string;
  /** Override item variant (default: cardEntrance — y:80 spring) */
  itemVariants?: Variants;
}

const staggerSpeeds = {
  fast:   0.10,
  normal: 0.15,
  slow:   0.20,
};

export default function AnimateGroup({
  children,
  className,
  speed = "normal",
  margin = "-40px 0px",
  itemVariants = cardEntrance,
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
          <motion.div
            variants={itemVariants}
            style={{ height: "100%" }}
            whileHover={{
              y: -4,
              boxShadow: "0 8px 28px rgba(0,0,0,0.10)",
              transition: { type: "spring", stiffness: 300, damping: 22 },
            }}
          >
            {child}
          </motion.div>
        )
      )}
    </motion.div>
  );
}

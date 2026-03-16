"use client";

import React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/animations";
import type { Variants } from "framer-motion";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Extra delay in seconds merged into the variant transition */
  delay?: number;
  /** Override default fadeUp variant */
  variants?: Variants;
  /** How far from the viewport edge to trigger (default "-40px 0px") */
  margin?: string;
}

export default function AnimateIn({
  children,
  className,
  style,
  delay = 0,
  variants = fadeUp,
  margin = "-40px 0px",
}: AnimateInProps) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin } as Parameters<typeof useInView>[1]);
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  // Merge delay into the visible transition so variant-level timing is respected
  const activeVariants: Variants = delay > 0
    ? {
        ...variants,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...((variants.visible as Record<string, unknown>)?.transition ?? {}),
            delay,
          },
        },
      }
    : variants;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={activeVariants}
    >
      {children}
    </motion.div>
  );
}

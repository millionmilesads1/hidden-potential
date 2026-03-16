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
  /** Extra delay in seconds on top of any stagger delay */
  delay?: number;
  /** Override default fadeUp variant */
  variants?: Variants;
  /** How far from the viewport edge to trigger (default "-80px 0px") */
  margin?: string;
}

export default function AnimateIn({
  children,
  className,
  style,
  delay = 0,
  variants = fadeUp,
  margin = "-80px 0px",
}: AnimateInProps) {
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin } as Parameters<typeof useInView>[1]);
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={reduce ? false : "hidden"}
      animate={inView ? "visible" : "hidden"}
      variants={reduce ? undefined : variants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { fadeIn, fadeLeft, fadeRight, fadeUp, scaleIn } from "@/lib/animations";
import {
  motion,
  TargetAndTransition,
  useInView,
  Variants,
} from "framer-motion";
import { ReactNode, useRef } from "react";

type AnimationType = "fadeUp" | "fadeLeft" | "fadeRight" | "fadeIn" | "scaleIn";

interface RevealBlockProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  once?: boolean;
}

const animationMap: Record<AnimationType, Variants> = {
  fadeUp,
  fadeLeft,
  fadeRight,
  fadeIn,
  scaleIn,
};

export function RevealBlock({
  children,
  animation = "fadeUp",
  delay = 0,
  className = "",
  once = true,
}: RevealBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  const baseVariants = animationMap[animation];

  // Usa TargetAndTransition para tipar corretamente o estado visible
  const visibleState = baseVariants.visible as TargetAndTransition;

  const variants: Variants = {
    hidden: baseVariants.hidden,
    visible: {
      ...visibleState,
      transition: {
        ...(visibleState.transition ?? {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

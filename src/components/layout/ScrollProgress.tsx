"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  // useScroll retorna scrollYProgress: valor de 0 a 1
  const { scrollYProgress } = useScroll();

  // useSpring suaviza o movimento da barra (sem ela ficaria travado)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-primary origin-left"
      style={{ scaleX }}
    />
  );
}

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot — segue o cursor na hora
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 1000, mass: 0.2 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 1000, mass: 0.2 });

  // Ring — segue com atraso (cria o efeito premium)
  const ringX = useSpring(mouseX, { damping: 22, stiffness: 160, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 22, stiffness: 160, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, [data-hover]",
      );
      if (target) setHovering(true);
    };

    const onOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, [data-hover]",
      );
      if (target) setHovering(false);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  return (
    <>
      {/* Ponto central — rápido */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-primary"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: clicking ? 5 : 7,
          height: clicking ? 5 : 7,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Anel externo — com lag */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid rgba(230, 50, 50, 0.5)",
        }}
        animate={{
          width: clicking ? 20 : hovering ? 56 : 36,
          height: clicking ? 20 : hovering ? 56 : 36,
          backgroundColor: hovering ? "rgba(230, 50, 50, 0.08)" : "transparent",
          borderColor: hovering
            ? "rgba(230, 50, 50, 0.9)"
            : "rgba(230, 50, 50, 0.45)",
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  );
}

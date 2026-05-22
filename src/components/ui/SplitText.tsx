"use client";

import { letterVariant, staggerContainer } from "@/lib/animations";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextProps {
  text: string; // O texto a ser animado
  className?: string; // Classes CSS (aplica no container)
  delay?: number; // Atraso inicial em segundos
  once?: boolean; // Animar só uma vez
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  once = true,
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px 0px" });

  // Quebra o texto em palavras
  const words = text.split(" ");

  return (
    <motion.span
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      // flex-wrap para quebrar linha naturalmente
      className={`inline-flex flex-wrap ${className}`}
      style={{ gap: "0 0.3em" }}
    >
      {words.map((word, index) => (
        // overflow-hidden esconde a palavra antes de entrar
        <span key={index} className="overflow-hidden inline-block">
          <motion.span
            variants={letterVariant}
            className="inline-block"
            style={{ transitionDelay: `${delay + index * 0.04}s` }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

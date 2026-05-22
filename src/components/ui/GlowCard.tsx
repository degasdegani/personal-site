"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glow?: "red" | "white" | "none"; // Cor do glow
  padding?: string; // Padding interno customizável
}

export function GlowCard({
  children,
  className = "",
  glow = "red",
  padding = "p-6",
}: GlowCardProps) {
  const [hovered, setHovered] = useState(false);

  // Cores da borda gradiente por tipo de glow
  const borderGradient = {
    red: hovered
      ? "from-primary/50 via-primary/10 to-transparent"
      : "from-primary/20 via-primary/5 to-transparent",
    white: hovered
      ? "from-white/15 via-white/5 to-transparent"
      : "from-white/8 via-white/2 to-transparent",
    none: "from-border to-transparent",
  };

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={hovered ? { y: -6, scale: 1.01 } : { y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-2xl p-px ${className}`}
    >
      {/* Camada da borda gradiente */}
      <div
        className={`
          absolute inset-0 rounded-2xl
          bg-gradient-to-br ${borderGradient[glow]}
          transition-all duration-500
        `}
      />

      {/* Conteúdo do card */}
      <div className={`relative rounded-2xl bg-surface ${padding} h-full`}>
        {/* Glow interno no hover */}
        {glow === "red" && (
          <div
            className={`
              absolute inset-0 rounded-2xl pointer-events-none
              bg-gradient-to-br from-primary/8 to-transparent
              transition-opacity duration-500
              ${hovered ? "opacity-100" : "opacity-0"}
            `}
          />
        )}

        {/* Conteúdo filho */}
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
}

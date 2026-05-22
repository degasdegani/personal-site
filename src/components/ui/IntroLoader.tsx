"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 18 + 6;
        if (next >= 100) {
          clearInterval(interval);
          setDone(true);
          setTimeout(() => setVisible(false), 700);
          return 100;
        }
        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Glow de fundo */}
          <motion.div
            animate={{ opacity: done ? 0 : [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
          </motion.div>

          {/* Nome */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 text-center relative z-10"
          >
            <p
              className="font-bold text-gradient block mb-3"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.04em",
              }}
            >
              Eduardo Degani
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ originX: 0 }}
              className="h-px bg-gradient-to-r from-primary via-primary/50 to-transparent"
            />
          </motion.div>

          {/* Barra de progresso */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 w-56"
          >
            <div className="w-full h-px bg-border overflow-hidden">
              <motion.div
                className="h-full bg-primary origin-left"
                animate={{ scaleX: Math.min(progress, 100) / 100 }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-label text-muted uppercase tracking-[0.2em] mt-3 font-mono text-center">
              {String(Math.min(Math.round(progress), 100)).padStart(3, "0")}
            </p>
          </motion.div>

          {/* Cortina de saída — sobe e revela o site */}
          <motion.div
            initial={{ y: "100%" }}
            exit={{
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.05,
              },
            }}
            className="absolute inset-x-0 bottom-0 h-1 bg-primary"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

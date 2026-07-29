"use client";

import Image from "next/image";

import { RevealBlock } from "@/components/ui/RevealBlock";
import { SplitText } from "@/components/ui/SplitText";
import { TextScramble } from "@/components/ui/TextScramble";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springCfg = { damping: 30, stiffness: 80, mass: 1 };
  const smoothX = useSpring(mouseX, springCfg);
  const smoothY = useSpring(mouseY, springCfg);

  const textX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const textY = useTransform(smoothY, [-1, 1], [-8, 8]);
  const photoX = useTransform(smoothX, [-1, 1], [18, -18]);
  const photoY = useTransform(smoothY, [-1, 1], [12, -12]);
  const blob1X = useTransform(smoothX, [-1, 1], [-50, 50]);
  const blob1Y = useTransform(smoothY, [-1, 1], [-35, 35]);
  const blob2X = useTransform(smoothX, [-1, 1], [40, -40]);
  const blob2Y = useTransform(smoothY, [-1, 1], [25, -25]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Blobs */}
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute -top-40 -left-20 w-[900px] h-[900px] rounded-full bg-primary/10 blur-[180px] pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="absolute -bottom-40 -right-20 w-[700px] h-[700px] rounded-full bg-primary/6 blur-[150px] pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 pointer-events-none" />

      <div className="container-site relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-32">
          {/* Texto */}
          <motion.div style={{ x: textX, y: textY }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-4 mb-10"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ originX: 1, display: "block" }}
                className="w-10 h-px bg-primary"
              />
              <TextScramble
                text="DESENVOLVEDOR FULL STACK"
                className="text-label tracking-widest text-primary"
                delay={0.8}
                duration={1000}
              />
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ originX: 0, display: "block" }}
                className="w-10 h-px bg-primary"
              />
            </motion.div>

            <h1
              className="font-bold mb-8"
              style={{ letterSpacing: "-0.04em", lineHeight: 1.15 }}
            >
              <span
                className="block"
                style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
              >
                <SplitText
                  text="Eduardo"
                  className="text-gradient"
                  delay={0.5}
                />
              </span>
              <span
                className="block"
                style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
              >
                <SplitText
                  text="Degani"
                  className="text-gradient-subtle"
                  delay={0.7}
                />
              </span>
            </h1>

            <RevealBlock animation="fadeUp" delay={0.8} className="mb-6">
              <p className="text-body-md text-subtle">
                Eduardo Degani Malvestio Moraes
              </p>
            </RevealBlock>

            <RevealBlock animation="fadeUp" delay={0.9} className="mb-5">
              <p className="flex items-center gap-2 text-body-md text-foreground-dim">
                <span aria-hidden>📍</span>
                Ribeirão Preto, SP
              </p>
            </RevealBlock>

            <RevealBlock animation="fadeUp" delay={1.1}>
              <p className="text-body-md text-subtle max-w-sm leading-relaxed">
                Desenvolvo com{" "}
                <span className="text-foreground-dim">
                  C# e ASP.NET Core
                </span>{" "}
                no backend e{" "}
                <span className="text-foreground-dim">
                  Next.js, TypeScript e React
                </span>{" "}
                no frontend. Vim das vendas para o desenvolvimento em 2024 e
                venho construindo projetos reais desde então.
              </p>
            </RevealBlock>
          </motion.div>

          {/* Foto */}
          <motion.div
            style={{ x: photoX, y: photoY }}
            className="relative flex items-center justify-center"
          >
            <RevealBlock animation="scaleIn" delay={0.7}>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/25 rounded-3xl blur-3xl scale-110 animate-glow-pulse" />
                <div className="relative w-72 h-[26rem] lg:w-80 lg:h-[30rem] rounded-3xl overflow-hidden border border-border/60">
                  <Image
                    src="/foto.png"
                    alt="Foto de Eduardo Degani — Desenvolvedor Full Stack"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 288px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center bg-surface -z-10">
                    <div className="text-center px-6">
                      <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold text-gradient-red">
                          ED
                        </span>
                      </div>
                      <p className="text-label text-subtle uppercase tracking-widest">
                        Adicione sua foto
                      </p>
                      <p className="text-label text-muted mt-1 font-mono">
                        /public/foto.png
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealBlock>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-label uppercase tracking-widest text-muted">
          scroll
        </span>
        <div className="relative w-px h-12 overflow-hidden">
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.4,
            }}
            className="absolute top-0 w-px h-full bg-gradient-to-b from-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}

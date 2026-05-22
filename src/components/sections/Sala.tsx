"use client";

import { GlowCard } from "@/components/ui/GlowCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { TextScramble } from "@/components/ui/TextScramble";
import { motion } from "framer-motion";

const acronym = [
  {
    letter: "S",
    word: "Sites",
    desc: "Institucionais, portfólios e plataformas com design premium e performance máxima.",
  },
  {
    letter: "A",
    word: "Agendamentos",
    desc: "Sistemas de agendamento inteligentes. Do barbeiro ao clínico, sem fricção.",
  },
  {
    letter: "L",
    word: "Landing Pages",
    desc: "Páginas de conversão de alto impacto. Cada pixel pensado para vender.",
  },
  {
    letter: "A",
    word: "Automação",
    desc: "Fluxos automáticos de WhatsApp, e-mail e pagamento. Seu negócio rodando 24h.",
  },
];

const differentials = [
  {
    title: "Design de nível internacional",
    desc: "Visual premium que compete com agências de São Paulo e Rio.",
  },
  {
    title: "Stack moderna",
    desc: "Next.js, TypeScript, animações cinematográficas. Nada de templates.",
  },
  {
    title: "Visão de negócio",
    desc: "5 anos em vendas. Construo experiências que vendem, não só que parecem bonitas.",
  },
  {
    title: "Interior de SP",
    desc: "Presença local com execução global. O mercado regional ainda não viu isso.",
  },
];

export function Sala() {
  return (
    <section
      id="sala"
      className="relative py-32 border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Label */}
        <RevealBlock animation="fadeUp" className="mb-8">
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-label uppercase tracking-widest text-primary">
              Agência
            </span>
          </div>
        </RevealBlock>

        {/* Nome grande */}
        <RevealBlock animation="fadeUp" delay={0.1} className="mb-4">
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(4rem, 12vw, 11rem)",
              letterSpacing: "-0.05em",
              lineHeight: 0.9,
            }}
          >
            <TextScramble
              text="S.A.L.A."
              className="text-gradient-red"
              delay={0.4}
              duration={1200}
            />
          </h2>
        </RevealBlock>

        <RevealBlock animation="fadeUp" delay={0.2} className="mb-20">
          <p className="text-body-lg text-subtle max-w-2xl leading-relaxed">
            Uma nova forma de fazer digital no interior de São Paulo.
            Experiências que as grandes agências cobram caro demais — entregues
            com a agilidade de quem mora perto e a qualidade de quem conhece o
            mercado global.
          </p>
        </RevealBlock>

        {/* Acrônimo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
          {acronym.map((item, i) => (
            <RevealBlock key={i} animation="fadeUp" delay={i * 0.1}>
              <GlowCard glow="red" padding="p-8">
                <div className="flex items-start gap-6">
                  <span
                    className="text-gradient-red font-bold shrink-0"
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {item.letter}
                  </span>
                  <div>
                    <h3 className="text-foreground font-semibold text-lg mb-2">
                      {item.word}
                    </h3>
                    <p className="text-body-md text-subtle leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </RevealBlock>
          ))}
        </div>

        {/* Diferenciais */}
        <RevealBlock animation="fadeUp" className="mb-10">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-6 h-px bg-border" />
            <span className="text-label uppercase tracking-widest text-subtle">
              Por que a S.A.L.A.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentials.map((d, i) => (
              <RevealBlock key={i} animation="fadeUp" delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors duration-300 group">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <h3 className="text-foreground font-semibold mb-2">
                        {d.title}
                      </h3>
                      <p className="text-body-md text-subtle leading-relaxed">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </RevealBlock>

        {/* CTA final */}
        <RevealBlock animation="fadeUp" delay={0.2}>
          <div className="relative rounded-3xl p-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
            <div className="relative rounded-3xl bg-surface p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-label uppercase tracking-widest text-primary mb-3">
                  Vamos conversar
                </p>
                <h3 className="text-display-md font-bold text-gradient mb-3">
                  Tem um projeto em mente?
                </h3>
                <p className="text-body-md text-subtle max-w-md">
                  Uma conversa de 30 minutos pode transformar sua presença
                  digital. Sem enrolação, sem proposta genérica.
                </p>
              </div>

              <div className="flex flex-col gap-4 shrink-0">
                <MagneticButton>
                  <motion.a
                    href="https://wa.me/message/QOSB3WG2HDCLJ1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white text-label uppercase tracking-widest hover:bg-primary/85 transition-colors duration-300 whitespace-nowrap"
                  >
                    Falar no WhatsApp <span className="opacity-60">→</span>
                  </motion.a>
                </MagneticButton>
                <MagneticButton>
                  <motion.a
                    href="mailto:contatodegani@gmail.com"
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground-dim text-label uppercase tracking-widest hover:border-primary/50 hover:text-foreground transition-all duration-300 whitespace-nowrap"
                  >
                    Enviar e-mail
                  </motion.a>
                </MagneticButton>
                <p className="text-label text-muted text-center">
                  Respondo em até 24h
                </p>
              </div>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}

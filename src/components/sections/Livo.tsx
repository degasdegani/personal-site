"use client";

import { GlowCard } from "@/components/ui/GlowCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { TextScramble } from "@/components/ui/TextScramble";
import { motion } from "framer-motion";

const features = [
  {
    icon: "📅",
    title: "Agendamento Inteligente",
    description:
      "Clientes agendam online 24h. Sem ligações, sem confusão, sem horários perdidos.",
  },
  {
    icon: "💬",
    title: "Notificações via WhatsApp",
    description:
      "Lembretes automáticos via Z-API. Zero faltas, máximo profissionalismo.",
  },
  {
    icon: "💳",
    title: "Pagamento Integrado",
    description:
      "Cobrança automática via Asaas. Receba antes, atenda sem preocupação.",
  },
  {
    icon: "📊",
    title: "Dashboard Completo",
    description: "Visualize agendamentos, receita e clientes em tempo real.",
  },
];

const plans = [
  {
    name: "Start",
    price: "R$ 97",
    highlight: false,
    desc: "Para quem está começando",
  },
  { name: "Pro", price: "R$ 297", highlight: true, desc: "O mais escolhido" },
  {
    name: "Prime",
    price: "R$ 497",
    highlight: false,
    desc: "Múltiplas unidades",
  },
];

export function Livo() {
  return (
    <section
      id="livo"
      className="relative py-32 border-t border-border overflow-hidden"
    >
      {/* Fundo diferenciado — shift sutil de atmosfera */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Label */}
        <RevealBlock animation="fadeUp" className="mb-6">
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-label uppercase tracking-widest text-primary">
              Produto
            </span>
          </div>
        </RevealBlock>

        {/* Headline */}
        <RevealBlock animation="fadeUp" delay={0.1} className="mb-6">
          <h2
            className="text-display-lg font-bold"
            style={{ letterSpacing: "-0.03em" }}
          >
            <TextScramble
              text="Livo"
              className="text-gradient-red"
              delay={0.3}
              duration={800}
            />
            <span className="text-gradient block mt-1">
              Agendamento para barbearias,
            </span>
            <span className="text-foreground-dim font-light block">
              do jeito que deveria ser.
            </span>
          </h2>
        </RevealBlock>

        <RevealBlock animation="fadeUp" delay={0.2} className="mb-20">
          <p className="text-body-lg text-subtle max-w-xl leading-relaxed">
            Um SaaS completo que transforma a gestão de barbearias. Agendamento
            online, pagamentos automáticos, notificações via WhatsApp e
            dashboard em tempo real — tudo em um só lugar.
          </p>
        </RevealBlock>

        {/* Layout: Mockup + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Mockup do app */}
          <RevealBlock animation="fadeLeft" delay={0.1}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow atrás do card */}
              <div className="absolute inset-0 bg-primary/15 rounded-3xl blur-3xl scale-105" />

              {/* App window */}
              <div className="relative bg-surface border border-border/80 rounded-3xl overflow-hidden">
                {/* Barra superior */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-border bg-surface-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <div className="flex-1 mx-4 bg-border/60 rounded-full px-3 py-1 text-center">
                    <span className="text-label text-muted font-mono">
                      app.livo.com.br
                    </span>
                  </div>
                </div>

                {/* Header do app */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-white text-xs font-bold">L</span>
                    </div>
                    <span className="text-foreground font-semibold text-sm">
                      Livo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-label text-subtle">Online</span>
                  </div>
                </div>

                {/* Conteúdo do app */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-label text-subtle uppercase tracking-widest mb-1">
                        Hoje
                      </p>
                      <p className="text-foreground font-semibold">
                        21 de Maio, 2026
                      </p>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-xl px-3 py-1.5">
                      <span className="text-label text-primary">+ Novo</span>
                    </div>
                  </div>

                  {/* Agendamentos */}
                  {[
                    {
                      time: "09:00",
                      name: "João Silva",
                      service: "Corte + Barba",
                      color: "bg-primary",
                    },
                    {
                      time: "10:30",
                      name: "Carlos Lima",
                      service: "Corte",
                      color: "bg-blue-500",
                    },
                    {
                      time: "14:00",
                      name: "Pedro Santos",
                      service: "Barba",
                      color: "bg-purple-500",
                    },
                    {
                      time: "16:00",
                      name: "Rafael Costa",
                      service: "Corte + Sobrancelha",
                      color: "bg-green-500",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-2 transition-colors mb-2"
                    >
                      <div className={`w-1 h-10 rounded-full ${item.color}`} />
                      <div className="w-14">
                        <span className="text-label font-mono text-foreground-dim">
                          {item.time}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground font-medium">
                          {item.name}
                        </p>
                        <p className="text-label text-subtle">{item.service}</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </motion.div>
                  ))}

                  {/* Stats mini */}
                  <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-border">
                    {[
                      { label: "Hoje", value: "4" },
                      { label: "Receita", value: "R$320" },
                      { label: "Clientes", value: "127" },
                    ].map((s, i) => (
                      <div key={i} className="text-center">
                        <p className="text-foreground font-bold text-lg">
                          {s.value}
                        </p>
                        <p className="text-label text-muted uppercase tracking-widest">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </RevealBlock>

          {/* Features */}
          <div className="space-y-5">
            {features.map((f, i) => (
              <RevealBlock key={i} animation="fadeRight" delay={i * 0.1}>
                <GlowCard glow="red" padding="p-5">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <h3 className="text-foreground font-semibold mb-1">
                        {f.title}
                      </h3>
                      <p className="text-body-md text-subtle leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </RevealBlock>
            ))}
          </div>
        </div>

        {/* Planos */}
        <RevealBlock animation="fadeUp" className="mb-6">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-6 h-px bg-border" />
            <span className="text-label uppercase tracking-widest text-subtle">
              Planos
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((plan, i) => (
              <RevealBlock key={i} animation="scaleIn" delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl p-px ${plan.highlight ? "" : ""}`}
                >
                  {plan.highlight && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-transparent" />
                  )}
                  <div
                    className={`relative rounded-2xl p-7 h-full ${plan.highlight ? "bg-surface" : "bg-surface border border-border"}`}
                  >
                    {plan.highlight && (
                      <span className="text-label text-primary uppercase tracking-widest block mb-4">
                        ✦ {plan.desc}
                      </span>
                    )}
                    <p className="text-foreground-dim text-label uppercase tracking-widest mb-2">
                      {plan.name}
                    </p>
                    <p
                      className="font-bold text-gradient mb-1"
                      style={{ fontSize: "2.5rem", letterSpacing: "-0.03em" }}
                    >
                      {plan.price}
                    </p>
                    <p className="text-label text-muted">/mês</p>
                    {!plan.highlight && (
                      <p className="text-label text-subtle mt-4 uppercase tracking-widest">
                        {plan.desc}
                      </p>
                    )}
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </RevealBlock>

        {/* CTA Livo */}
        <RevealBlock
          animation="fadeUp"
          delay={0.2}
          className="mt-14 text-center"
        >
          <MagneticButton className="inline-block">
            <motion.a
              href="https://livo-lime.vercel.app/"
              target="_blank"
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white text-label uppercase tracking-widest hover:bg-primary/85 transition-colors duration-300"
            >
              Conhecer o Livo <span className="opacity-60">→</span>
            </motion.a>
          </MagneticButton>
        </RevealBlock>
      </div>
    </section>
  );
}

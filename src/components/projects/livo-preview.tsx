"use client";

import { motion } from "framer-motion";

// Mockup do dashboard do Livo — reaproveitado como screenshot
// representativo na página de detalhe do case (src/app/projetos/livo).
export function LivoDashboardMockup() {
  return (
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
                <p className="text-foreground font-bold text-lg">{s.value}</p>
                <p className="text-label text-muted uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

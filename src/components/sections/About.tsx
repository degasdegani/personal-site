"use client";

import { RevealBlock } from "@/components/ui/RevealBlock";
import { SplitText } from "@/components/ui/SplitText";

// ── Dados da seção ─────────────────────────────────────
const stats = [
  { value: "9", label: "Anos em vendas e gestão comercial" },
  { value: "43", label: "Modelos de dados em produção" },
  { value: "4", label: "Projetos em destaque" },
  { value: "200+", label: "Clientes atendidos" },
];

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "C#",
  "ASP.NET Core",
  "SQL Server",
  "Entity Framework",
  "JWT",
  "REST API",
];

const milestones = [
  {
    period: "2016–2019",
    title: "Vendas & Consórcios",
    description:
      "Atendimento consultivo, negociação e gestão de carteira de clientes na Disal Administradora de Consórcios.",
  },
  {
    period: "2020–2024",
    title: "Marketing Digital & Desenvolvimento Web",
    description:
      "Landing pages e páginas de e-commerce em HTML, CSS e JavaScript, evoluindo a stack para React, Next.js e TypeScript (Digital Red, PJ).",
  },
  {
    period: "Abr/2025–Mai/2026",
    title: "Gerente de Contas — Stone Co.",
    description:
      "Gestão de carteira com mais de 200 clientes ativos, implantação e suporte técnico de soluções de pagamento.",
  },
  {
    period: "Jan/2024–Atual",
    title: "Desenvolvedor Full Stack Autônomo — S.A.L.A Tecnologia",
    description:
      "Produto próprio: SaaS multi-tenant com 43 modelos de dados, RBAC de 3 perfis e motor financeiro de comissões.",
  },
];

// ── Componente ─────────────────────────────────────────
export function About() {
  return (
    <section
      id="sobre"
      className="relative py-32 border-t border-border overflow-hidden"
    >
      {/* Glow sutil no lado esquerdo */}
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container-site relative z-10">
        {/* ── Label da seção ── */}
        <RevealBlock animation="fadeUp" className="mb-20">
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-label uppercase tracking-widest text-primary">
              Sobre
            </span>
          </div>
        </RevealBlock>

        {/* ── Layout principal: duas colunas ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Coluna esquerda — Texto */}
          <div>
            {/* Headline com SplitText */}
            <h2 className="text-display-lg font-bold mb-8 leading-tight">
              <SplitText
                text="Desenvolvedor Full Stack."
                className="text-gradient block"
                delay={0.1}
              />
            </h2>

            {/* Parágrafos do manifesto */}
            <RevealBlock animation="fadeUp" delay={0.1} className="mb-6">
              <p className="text-body-lg text-foreground-dim leading-relaxed">
                Desenvolvedor full stack com produto SaaS próprio em produção —
                plataforma multi-tenant com 43 modelos de dados, controle de
                acesso por perfis, motor financeiro de comissões e integração
                de pagamentos, construída do zero ao deploy.
              </p>
            </RevealBlock>

            <RevealBlock animation="fadeUp" delay={0.2} className="mb-6">
              <p className="text-body-md text-subtle leading-relaxed">
                Trabalho com desenvolvimento web desde 2020, quando comecei
                escrevendo landing pages em HTML, CSS e JavaScript para
                projetos de marketing digital e e-commerce, evoluindo a stack
                ao longo do tempo para React, Next.js e TypeScript.
              </p>
            </RevealBlock>

            <RevealBlock animation="fadeUp" delay={0.3}>
              <p className="text-body-md text-subtle leading-relaxed">
                Além do produto próprio, trabalho com uma segunda trilha de
                projetos em C#, ASP.NET Core, Clean Architecture, autenticação
                JWT e Entity Framework Core.
              </p>
            </RevealBlock>
          </div>

          {/* Coluna direita — Linha do tempo */}
          <div className="relative">
            {/* Linha vertical conectando os milestones */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

            <div className="space-y-10 pl-8">
              {milestones.map((item, index) => (
                <RevealBlock
                  key={index}
                  animation="fadeLeft"
                  delay={index * 0.12}
                >
                  <div className="relative">
                    {/* Ponto na linha do tempo */}
                    <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background" />

                    {/* Período */}
                    <span className="text-label uppercase tracking-widest text-primary block mb-1">
                      {item.period}
                    </span>

                    {/* Título */}
                    <h3 className="text-body-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-body-md text-subtle leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <RevealBlock animation="fadeUp" className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background p-8 flex flex-col items-center text-center hover:bg-surface transition-colors duration-300"
              >
                <span
                  className="text-gradient-red font-bold block mb-2"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}
                >
                  {stat.value}
                </span>
                <span className="text-label uppercase tracking-widest text-subtle">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </RevealBlock>

        {/* ── Stack tecnológica ── */}
        <RevealBlock animation="fadeUp">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-6 h-px bg-border" />
            <span className="text-label uppercase tracking-widest text-subtle">
              Stack
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {stack.map((tech, index) => (
              <RevealBlock key={index} animation="scaleIn" delay={index * 0.05}>
                <span className="inline-flex items-center px-4 py-2 rounded-full border border-border text-label text-foreground-dim hover:border-primary/40 hover:text-foreground transition-all duration-300 cursor-default">
                  {tech}
                </span>
              </RevealBlock>
            ))}
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}

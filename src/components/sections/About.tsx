"use client";

import { RevealBlock } from "@/components/ui/RevealBlock";
import { SplitText } from "@/components/ui/SplitText";

// ── Dados da seção ─────────────────────────────────────
const stats = [
  { value: "5+", label: "Anos em vendas" },
  { value: "2", label: "Produtos em construção" },
  { value: "3", label: "Projetos no portfólio" },
  { value: "1", label: "Missão clara" },
];

const stack = [
  "C#",
  "ASP.NET Core",
  "SQL Server",
  "Entity Framework",
  "JWT",
  "REST API",
  "Next.js",
  "TypeScript",
  "React",
  "SignalR",
];

const milestones = [
  {
    period: "2019 – 2023",
    title: "Vendas & Gestão de Contas",
    description:
      "Anos construindo relacionamentos, entendendo clientes em profundidade e desenvolvendo visão estratégica de negócio. Uma base que nenhuma faculdade ensina.",
  },
  {
    period: "2024",
    title: "Transição Intencional",
    description:
      "Decisão consciente de entrar no desenvolvimento de software. Começou pelos fundamentos: lógica, C#, orientação a objetos. Sem atalhos.",
  },
  {
    period: "2025",
    title: "Backend Developer",
    description:
      "APIs profissionais com ASP.NET Core, autenticação JWT, arquitetura em camadas, SQL Server, Entity Framework. Dois projetos de portfólio no GitHub.",
  },
  {
    period: "Agora",
    title: "Developer & Founder",
    description:
      "Construindo o Livo e a S.A.L.A. — transformando visão de negócio e habilidade técnica em produtos digitais reais.",
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
                text="Da venda"
                className="text-gradient block"
                delay={0.1}
              />
              <SplitText
                text="ao código."
                className="text-gradient-red block"
                delay={0.3}
              />
            </h2>

            {/* Parágrafos do manifesto */}
            <RevealBlock animation="fadeUp" delay={0.1} className="mb-6">
              <p className="text-body-lg text-foreground-dim leading-relaxed">
                Passei anos em vendas aprendendo o que nenhum curso técnico
                ensina: como entender pessoas, identificar problemas reais e
                construir soluções que geram valor de verdade.
              </p>
            </RevealBlock>

            <RevealBlock animation="fadeUp" delay={0.2} className="mb-6">
              <p className="text-body-md text-subtle leading-relaxed">
                Em 2024, tomei a decisão mais importante da minha carreira:
                migrar para o desenvolvimento de software. Não por acidente —
                por visão. Eu sabia que a combinação de mentalidade comercial
                com habilidade técnica seria rara e poderosa.
              </p>
            </RevealBlock>

            <RevealBlock animation="fadeUp" delay={0.3}>
              <p className="text-body-md text-subtle leading-relaxed">
                Hoje desenvolvo com{" "}
                <span className="text-foreground-dim">C# e ASP.NET Core</span>,
                construo o <span className="text-foreground-dim">Livo</span> —
                um SaaS real para barbearias — e estruturo a{" "}
                <span className="text-foreground-dim">S.A.L.A.</span>, minha
                visão de como entregar experiências digitais premium no interior
                de São Paulo.
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
          <div className="flex flex-wrap gap-2">
            {stack.map((tech, index) => (
              <RevealBlock key={index} animation="scaleIn" delay={index * 0.05}>
                <span className="inline-flex items-center px-4 py-2 rounded-full border border-border text-label text-foreground-dim hover:border-primary/40 hover:text-foreground transition-all duration-300 cursor-default">
                  {tech}
                </span>
              </RevealBlock>
            ))}
          </div>
        </RevealBlock>

        {/* ── Citação final ── */}
        <RevealBlock animation="fadeUp" delay={0.2} className="mt-24">
          <div className="border-l-2 border-primary pl-8 max-w-2xl">
            <p
              className="text-foreground font-light italic leading-relaxed"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
            >
              &ldquo;Não vim para o desenvolvimento esquecer o que aprendi em
              vendas. Vim para unir os dois e construir algo que poucos
              conseguem: produtos que vendem porque são bons, e são bons porque
              eu entendo quem usa.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-6 h-px bg-primary" />
              <span className="text-label uppercase tracking-widest text-primary">
                Eduardo Degani
              </span>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}

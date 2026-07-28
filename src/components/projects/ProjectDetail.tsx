import type { ReactNode } from "react";
import Link from "next/link";

import type { Project } from "@/components/projects/data";
import { GlowCard } from "@/components/ui/GlowCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { TextScramble } from "@/components/ui/TextScramble";

interface ProjectDetailProps {
  project: Project;
  /** Visual real (mockup/screenshot) para exibir junto aos placeholders. */
  heroVisual?: ReactNode;
}

export function ProjectDetail({ project, heroVisual }: ProjectDetailProps) {
  const placeholderCount = project.screenshots;

  return (
    <div className="relative">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="container-site relative z-10 py-32">
        {/* Voltar */}
        <RevealBlock animation="fadeUp" className="mb-10">
          <Link
            href="/#projetos"
            data-hover
            className="text-label uppercase tracking-widest text-subtle hover:text-foreground transition-colors duration-300 inline-flex items-center gap-2"
          >
            <span className="opacity-60">←</span> Todos os projetos
          </Link>
        </RevealBlock>

        {/* 1. Título, stack completa, GitHub */}
        <RevealBlock animation="fadeUp" delay={0.1} className="mb-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="text-label uppercase tracking-widest text-primary">
              Case técnico
            </span>
          </div>
          <h1
            className="text-display-lg font-bold"
            style={{ letterSpacing: "-0.03em" }}
          >
            <TextScramble
              text={project.name}
              className="text-gradient-red"
              delay={0.2}
              duration={800}
            />
          </h1>
        </RevealBlock>

        <RevealBlock animation="fadeUp" delay={0.2} className="mb-8">
          <p className="text-body-lg text-subtle max-w-2xl leading-relaxed">
            {project.tagline}
          </p>
        </RevealBlock>

        <RevealBlock animation="fadeUp" delay={0.25} className="mb-24">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-label uppercase tracking-widest px-3 py-1.5 rounded-full border border-border text-foreground-dim"
              >
                {tech}
              </span>
            ))}
          </div>
          <MagneticButton className="inline-block">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground-dim text-label uppercase tracking-widest hover:border-primary/50 hover:text-foreground transition-all duration-300"
            >
              Ver repositório no GitHub <span className="opacity-60">→</span>
            </a>
          </MagneticButton>
        </RevealBlock>

        {/* 2. Contexto */}
        <RevealBlock animation="fadeUp" className="mb-24 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-6 h-px bg-border" />
            <span className="text-label uppercase tracking-widest text-subtle">
              Contexto
            </span>
          </div>
          <p className="text-body-md text-foreground-dim leading-relaxed">
            {project.context}
          </p>
        </RevealBlock>

        {/* 3. Decisões técnicas de arquitetura */}
        <RevealBlock animation="fadeUp" className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-6 h-px bg-border" />
            <span className="text-label uppercase tracking-widest text-subtle">
              Decisões técnicas de arquitetura
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architecture.map((item, i) => (
              <RevealBlock key={i} animation="fadeUp" delay={i * 0.05}>
                <div className="h-full p-5 rounded-2xl border border-border hover:border-primary/30 transition-colors duration-300 group">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-body-md text-subtle leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </RevealBlock>

        {/* 4. Desafio técnico + solução */}
        <RevealBlock animation="fadeUp" className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-6 h-px bg-border" />
            <span className="text-label uppercase tracking-widest text-subtle">
              Desafio técnico
            </span>
          </div>
          <GlowCard glow="red" padding="p-8 md:p-10">
            <h3 className="text-foreground font-semibold text-xl mb-6">
              {project.challenge.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-label uppercase tracking-widest text-primary mb-2">
                  Problema
                </p>
                <p className="text-body-md text-foreground-dim leading-relaxed">
                  {project.challenge.problem}
                </p>
              </div>
              <div>
                <p className="text-label uppercase tracking-widest text-primary mb-2">
                  Solução
                </p>
                <p className="text-body-md text-foreground-dim leading-relaxed">
                  {project.challenge.solution}
                </p>
              </div>
            </div>
          </GlowCard>
        </RevealBlock>

        {/* 5. Screenshots */}
        <RevealBlock animation="fadeUp">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-6 h-px bg-border" />
            <span className="text-label uppercase tracking-widest text-subtle">
              Capturas de tela
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {heroVisual && (
              <RevealBlock animation="scaleIn">
                <div className="h-full flex items-center">{heroVisual}</div>
              </RevealBlock>
            )}
            {Array.from({ length: placeholderCount }).map((_, i) => (
              <RevealBlock key={i} animation="scaleIn" delay={i * 0.05}>
                <div className="aspect-video rounded-2xl border border-dashed border-border flex items-center justify-center bg-surface">
                  <p className="text-label text-muted uppercase tracking-widest">
                    Screenshot em breve
                  </p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </RevealBlock>
      </div>
    </div>
  );
}

"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/components/projects/data";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { TextScramble } from "@/components/ui/TextScramble";

export function Projects() {
  return (
    <section
      id="projetos"
      className="relative py-32 border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Label */}
        <RevealBlock animation="fadeUp" className="mb-6">
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-label uppercase tracking-widest text-primary">
              Projetos
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
              text="Projetos"
              className="text-gradient-red"
              delay={0.3}
              duration={800}
            />
            <span className="text-gradient block mt-1">
              construídos do zero,
            </span>
            <span className="text-foreground-dim font-light block">
              da arquitetura ao deploy.
            </span>
          </h2>
        </RevealBlock>

        <RevealBlock animation="fadeUp" delay={0.2} className="mb-16">
          <p className="text-body-lg text-subtle max-w-xl leading-relaxed">
            Backend em C# e ASP.NET Core, frontend em Next.js e TypeScript.
            Cada projeto abaixo tem uma página de detalhe com as decisões de
            arquitetura por trás dele.
          </p>
        </RevealBlock>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <RevealBlock key={project.slug} animation="fadeUp" delay={i * 0.1}>
              <ProjectCard project={project} />
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

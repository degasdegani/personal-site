"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
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
  const screenshotUrls = Array.isArray(project.screenshots)
    ? project.screenshots
    : null;
  const placeholderCount = Array.isArray(project.screenshots)
    ? 0
    : project.screenshots;

  const totalScreenshotItems =
    (heroVisual ? 1 : 0) + (screenshotUrls ? screenshotUrls.length : placeholderCount);

  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxUrl) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxUrl(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxUrl]);

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

        {/* 3b. Decisões Técnicas */}
        {project.decisions && (
          <RevealBlock animation="fadeUp" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-6 h-px bg-border" />
              <span className="text-label uppercase tracking-widest text-subtle">
                Decisões Técnicas
              </span>
            </div>
            <div className="space-y-6">
              {project.decisions.map((decision, i) => (
                <RevealBlock key={decision.title} animation="fadeUp" delay={i * 0.05}>
                  <GlowCard glow="red" padding="p-6 md:p-8">
                    <h3 className="text-foreground font-semibold text-lg mb-5">
                      {decision.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-label uppercase tracking-widest text-primary mb-2">
                          Problema
                        </p>
                        <p className="text-body-md text-foreground-dim leading-relaxed">
                          {decision.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-label uppercase tracking-widest text-primary mb-2">
                          Solução
                        </p>
                        <p className="text-body-md text-foreground-dim leading-relaxed">
                          {decision.solution}
                        </p>
                      </div>
                    </div>
                    {decision.tradeoff && (
                      <div className="mt-6 pl-4 border-l-2 border-border">
                        <p className="text-label uppercase tracking-widest text-muted mb-1">
                          Trade-off
                        </p>
                        <p className="text-sm text-muted leading-relaxed">
                          {decision.tradeoff}
                        </p>
                      </div>
                    )}
                  </GlowCard>
                </RevealBlock>
              ))}
            </div>
          </RevealBlock>
        )}

        {/* 3c. Módulos */}
        {project.modules && (
          <RevealBlock animation="fadeUp" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-6 h-px bg-border" />
              <span className="text-label uppercase tracking-widest text-subtle">
                Módulos
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.modules.map((module, i) => (
                <RevealBlock key={module} animation="scaleIn" delay={i * 0.05}>
                  <span className="inline-flex items-center px-4 py-2 rounded-full border border-border text-label text-foreground-dim">
                    {module}
                  </span>
                </RevealBlock>
              ))}
            </div>
          </RevealBlock>
        )}

        {/* 3d. Padrões de Projeto */}
        {project.patterns && (
          <RevealBlock animation="fadeUp" className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-6 h-px bg-border" />
              <span className="text-label uppercase tracking-widest text-subtle">
                Padrões de Projeto
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.patterns.map((pattern, i) => (
                <RevealBlock key={pattern} animation="scaleIn" delay={i * 0.05}>
                  <span className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 text-label text-primary">
                    {pattern}
                  </span>
                </RevealBlock>
              ))}
            </div>
          </RevealBlock>
        )}

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
          <div
            className={
              totalScreenshotItems === 1
                ? "grid grid-cols-1 gap-6"
                : "grid grid-cols-1 md:grid-cols-2 gap-6"
            }
          >
            {heroVisual && (
              <RevealBlock animation="scaleIn">
                <div className="h-full flex items-center">{heroVisual}</div>
              </RevealBlock>
            )}
            {screenshotUrls
              ? screenshotUrls.map((url, i) => (
                  <RevealBlock key={url} animation="scaleIn" delay={i * 0.05}>
                    <button
                      type="button"
                      onClick={() => setLightboxUrl(url)}
                      aria-label={`Ampliar captura de tela ${i + 1} de ${project.name}`}
                      className="relative aspect-video w-full rounded-2xl border border-border overflow-hidden bg-surface cursor-pointer hover:border-primary/30 transition-colors duration-300"
                    >
                      <Image
                        src={url}
                        alt={`${project.name} — captura de tela ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </button>
                  </RevealBlock>
                ))
              : Array.from({ length: placeholderCount }).map((_, i) => (
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

      {/* Lightbox */}
      {lightboxUrl && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxUrl(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-6 md:p-12"
        >
          <button
            type="button"
            onClick={() => setLightboxUrl(null)}
            aria-label="Fechar"
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-white/50 transition-colors duration-300"
          >
            <span aria-hidden>✕</span>
          </button>
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxUrl}
              alt={`${project.name} — captura de tela ampliada`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}

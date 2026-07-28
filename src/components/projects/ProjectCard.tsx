"use client";

import Link from "next/link";

import { GlowCard } from "@/components/ui/GlowCard";
import type { Project } from "@/components/projects/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <GlowCard glow="red" padding="p-0" className="h-full">
      <div className="flex flex-col h-full overflow-hidden rounded-2xl">
        {/* Mockup representativo */}
        <div className="shrink-0">
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="h-36 flex items-center justify-center bg-gradient-to-br from-primary/12 via-surface to-transparent">
            <span className="text-4xl font-bold text-gradient-red">
              {project.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-foreground font-semibold text-lg mb-2">
            {project.name}
          </h3>
          <p className="text-body-md text-subtle leading-relaxed mb-5 flex-1">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.cardStack.map((tech) => (
              <span
                key={tech}
                className="text-label uppercase tracking-widest px-3 py-1 rounded-full border border-border text-foreground-dim"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={`/projetos/${project.slug}`}
            data-hover
            className="text-label uppercase tracking-widest text-primary hover:text-foreground transition-colors duration-300 inline-flex items-center gap-2"
          >
            Ver case completo <span className="opacity-60">→</span>
          </Link>
        </div>
      </div>
    </GlowCard>
  );
}

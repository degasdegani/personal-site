import type { Metadata } from "next";

import { getProject } from "@/components/projects/data";
import { LivoDashboardMockup } from "@/components/projects/livo-preview";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

const project = getProject("livo")!;

export const metadata: Metadata = {
  title: `${project.name} — Eduardo Degani`,
  description: project.tagline,
};

export default function LivoProjectPage() {
  return <ProjectDetail project={project} heroVisual={<LivoDashboardMockup />} />;
}

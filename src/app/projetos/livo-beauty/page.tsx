import type { Metadata } from "next";

import { getProject } from "@/components/projects/data";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

const project = getProject("livo-beauty")!;

export const metadata: Metadata = {
  title: `${project.name} — Eduardo Degani`,
  description: project.tagline,
  openGraph: {
    title: `${project.name} — Eduardo Degani`,
    description: project.tagline,
    url: `https://eduardodegani.vercel.app/projetos/${project.slug}`,
    type: "article",
  },
};

export default function LivoBeautyProjectPage() {
  return <ProjectDetail project={project} />;
}

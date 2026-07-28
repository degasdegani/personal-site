import type { Metadata } from "next";

import { getProject } from "@/components/projects/data";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

const project = getProject("orderflow")!;

export const metadata: Metadata = {
  title: `${project.name} — Eduardo Degani`,
  description: project.tagline,
  openGraph: {
    title: `${project.name} — Eduardo Degani`,
    description: project.tagline,
    url: `https://eduardodegani.vercel.app/projetos/${project.slug}`,
    type: "article",
    images: [
      "https://github.com/degasdegani/OrderFlow/raw/main/docs/screenshots/13-dashboard.png",
    ],
  },
};

export default function OrderFlowProjectPage() {
  return <ProjectDetail project={project} />;
}

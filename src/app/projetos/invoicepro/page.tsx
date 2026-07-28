import type { Metadata } from "next";

import { getProject } from "@/components/projects/data";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

const project = getProject("invoicepro")!;

export const metadata: Metadata = {
  title: `${project.name} — Eduardo Degani`,
  description: project.tagline,
  openGraph: {
    title: `${project.name} — Eduardo Degani`,
    description: project.tagline,
    url: `https://eduardodegani.vercel.app/projetos/${project.slug}`,
    type: "article",
    images: [
      "https://github.com/degasdegani/InvoicePro/raw/main/docs/images/01-dashboard.png",
    ],
  },
};

export default function InvoiceProProjectPage() {
  return <ProjectDetail project={project} />;
}

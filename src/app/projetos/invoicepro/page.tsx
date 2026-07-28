import type { Metadata } from "next";

import { getProject } from "@/components/projects/data";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

const project = getProject("invoicepro")!;

export const metadata: Metadata = {
  title: `${project.name} — Eduardo Degani`,
  description: project.tagline,
};

export default function InvoiceProProjectPage() {
  return <ProjectDetail project={project} />;
}

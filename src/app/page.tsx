import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { IntroLoader } from "@/components/ui/IntroLoader";

// Dados estruturados para o Google (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eduardo Degani",
  jobTitle: "Full Stack Developer",
  description:
    "Desenvolvedor Full Stack com experiência em C#, ASP.NET Core, SQL Server, Next.js e TypeScript. Portfólio técnico no interior de São Paulo.",
  url: "https://eduardodegani.vercel.app",
  email: "contatodegani@gmail.com",
  sameAs: [
    "https://github.com/degasdegani",
    "https://www.linkedin.com/in/eduardo-degani",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ribeirão Preto",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  knowsAbout: [
    "C#",
    "ASP.NET Core",
    "SQL Server",
    "Next.js",
    "TypeScript",
    "React",
    "REST API",
    "SaaS",
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <IntroLoader />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
      </main>

      <Footer />
    </>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Livo } from "@/components/sections/Livo";
import { Sala } from "@/components/sections/Sala";
import { IntroLoader } from "@/components/ui/IntroLoader";

// Dados estruturados para o Google (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eduardo Degani",
  jobTitle: "Backend Developer & Founder",
  description:
    "Backend developer, fundador do Livo e criador da S.A.L.A. Construindo experiências digitais premium no interior de São Paulo.",
  url: "https://eduardodegani.vercel.app",
  email: "contatodegani@gmail.com",
  sameAs: [
    "https://github.com/degasdegani",
    "https://www.linkedin.com/in/eduardo-degani",
    "https://www.instagram.com/degani.web",
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
        <Livo />
        <Sala />
      </main>

      <Footer />
    </>
  );
}

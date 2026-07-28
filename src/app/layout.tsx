import { CustomCursor } from "@/components/ui/CustomCursor";
import { LenisProvider } from "@/lib/lenis";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eduardo Degani — Full Stack Developer",
  description:
    "Desenvolvedor Full Stack com experiência em C#, ASP.NET Core, SQL Server, Next.js e TypeScript. Portfólio técnico no interior de São Paulo.",
  keywords: [
    "Eduardo Degani",
    "developer",
    "backend",
    "ASP.NET Core",
    "Next.js",
    "Livo",
    "Ribeirão Preto",
    "São Paulo",
    "portfólio",
  ],
  authors: [{ name: "Eduardo Degani", url: "https://github.com/degasdegani" }],
  creator: "Eduardo Degani",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Eduardo Degani — Full Stack Developer",
    description:
      "Desenvolvedor Full Stack com experiência em C#, ASP.NET Core, SQL Server, Next.js e TypeScript.",
    siteName: "Eduardo Degani",
    url: "https://eduardodegani.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Degani — Full Stack Developer",
    description:
      "Desenvolvedor Full Stack com experiência em C#, ASP.NET Core, SQL Server, Next.js e TypeScript.",
    creator: "@degani",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-background text-foreground font-sans antialiased overflow-x-hidden cursor-none">
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

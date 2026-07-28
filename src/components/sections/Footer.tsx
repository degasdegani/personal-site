"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/degasdegani" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eduardo-degani" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container-site">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Nome e título */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span
              className="font-bold text-gradient"
              style={{ fontSize: "1.1rem", letterSpacing: "-0.02em" }}
            >
              Eduardo Degani
            </span>
            <span className="w-1 h-1 rounded-full bg-muted" />
            <span className="text-label text-muted uppercase tracking-widest">
              Full Stack Developer
            </span>
          </div>

          {/* Links sociais */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                whileHover={{ y: -2 }}
                className="text-label text-subtle hover:text-foreground transition-colors duration-300 uppercase tracking-widest"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Direitos */}
          <p className="text-label text-muted">
            © {year} — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

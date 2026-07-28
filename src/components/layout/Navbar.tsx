"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 50);

      if (currentY > lastScrollY && currentY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { label: "Sobre", href: "/#sobre" },
    { label: "Projetos", href: "/#projetos" },
  ];

  const headerClass = scrolled
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-border bg-background/75 backdrop-blur-xl"
    : "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent";

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={headerClass}
        >
          <div className="container-site">
            <div className="flex items-center justify-between h-16">
              <Link
                href="/"
                className="text-label font-mono uppercase tracking-widest text-foreground hover:text-primary transition-colors duration-300"
              >
                ED
              </Link>

              <nav className="flex items-center gap-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-label uppercase tracking-widest text-subtle hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

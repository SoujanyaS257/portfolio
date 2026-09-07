import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { socials } from '../../data/socials';
import Logo from '../ui/Logo';

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      let current = "";
      for (const link of links) {
        const el = document.querySelector(link.href);
        if (el && el.getBoundingClientRect().top <= 120) current = link.href;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = useCallback(
    (hash) => (e) => {
      e.preventDefault();
      const wasOpen = open;
      setOpen(false);
      const target = document.querySelector(hash);
      if (!target) return;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.setTimeout(
        () => target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' }),
        wasOpen ? 250 : 0
      );
    },
    [open]
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-line/80 bg-white/70 shadow-sm backdrop-blur-lg" : "border-transparent bg-white/40 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Primary">
        <a href="#hero" onClick={scrollToSection('#hero')} className="flex items-center gap-2.5 font-display font-semibold text-ink">
          <Logo className="h-9 w-9" />
          <span className="hidden sm:inline">Soujanya S</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={scrollToSection(link.href)}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active === link.href ? "text-accent" : "text-ink hover:text-accent"
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-active-indicator"
                  className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={socials.resumePath}
            download
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-glow"
          >
            <Download size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5" />
            Resume
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-white/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={scrollToSection(link.href)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                    active === link.href ? "bg-accent/10 text-accent" : "text-ink hover:bg-surface"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={socials.resumePath}
                download
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white"
              >
                <Download size={15} aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { socials } from '../../data/socials';

export default function Footer() {
  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <footer className="border-t border-line bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display font-semibold text-ink">Soujanya S</p>
          <p className="text-sm text-muted">AI/ML Engineering Student • Bangalore, India</p>
        </div>
        <div className="flex items-center gap-4">
          <a href={`mailto:${socials.email}`} aria-label="Email" className="text-muted transition-colors hover:text-accent">
            <Mail size={18} aria-hidden="true" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-accent">
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-accent">
            <Github size={18} aria-hidden="true" />
          </a>
          <button onClick={scrollToTop} aria-label="Back to top" className="ml-2 rounded-md border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent">
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
      <p className="mt-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} Soujanya S. Built with React, Vite & Tailwind CSS.
      </p>
    </footer>
  );
}
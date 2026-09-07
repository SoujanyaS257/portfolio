import { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import { socials } from '../../data/socials';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  };

  const cards = [
    { icon: Mail, label: "Email", value: socials.email, href: `mailto:${socials.email}`, external: false },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/soujanya257", href: socials.linkedin, external: true },
    { icon: Github, label: "GitHub", value: "github.com/SoujanyaS257", href: socials.github, external: true },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-navy py-14 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo/25 blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <FadeIn>
          <p className="mb-3 inline-flex items-center justify-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-indigo-300">
            <span className="h-px w-6 bg-indigo-400" aria-hidden="true" /> Contact
          </p>
          <h2 className="font-display text-[28px] font-bold md:text-[38px]">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
              intelligent.
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] text-slate-400">
            Open to internship opportunities — reach out via email, LinkedIn, or GitHub.
          </p>
        </FadeIn>

        <div className="mx-auto mt-9 grid max-w-3xl gap-4 sm:grid-cols-3">
          {cards.map(({ icon: Icon, label, value, href, external }, i) => (
            <FadeIn key={label} delay={i * 0.05}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full flex-col items-center rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10"
              >
                <Icon size={20} className="mb-2.5 text-indigo-300 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <p className="text-[13px] font-medium text-slate-400">{label}</p>
                <p className="mt-1 break-words text-[13.5px] text-white group-hover:text-indigo-300">{value}</p>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <button
            onClick={handleCopy}
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur transition-all hover:border-indigo-400/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            {copied ? <Check size={16} className="text-safe" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied ? "Email copied" : "Copy email address"}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
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
      // Clipboard API unavailable — fail silently
    }
  };

  const cards = [
    { icon: Mail, label: "Email", value: socials.email, href: `mailto:${socials.email}`, external: false },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/soujanya257", href: socials.linkedin, external: true },
    { icon: Github, label: "GitHub", value: "github.com/SoujanyaS257", href: socials.github, external: true },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-surface py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="I'm open to internship opportunities and would be glad to connect. Reach out via email, LinkedIn, or GitHub."
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {cards.map(({ icon: Icon, label, value, href, external }, i) => (
            <FadeIn key={label} delay={i * 0.05}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-accent/40"
              >
                <Icon size={20} className="mb-3 text-accent" aria-hidden="true" />
                <p className="text-sm font-medium text-muted">{label}</p>
                <p className="mt-1 break-words text-sm text-ink group-hover:text-accent">{value}</p>
              </a>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.15}>
          <button
            onClick={handleCopy}
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {copied ? <Check size={16} className="text-safe" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied ? "Email copied" : "Copy email address"}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';
import { socials } from '../../data/socials';

export default function Hero() {
  return (
    <section id="hero" className="relative scroll-mt-20 flex items-center overflow-hidden bg-white pb-10 pt-24 md:pb-12 md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.07),_transparent_55%)]"
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-6xl px-6">
        <FadeIn>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-safe" aria-hidden="true" />
            Open to Internships & Placements
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="text-[42px] font-semibold leading-tight text-ink sm:text-5xl md:text-[64px] md:leading-[1.05]">
            Soujanya S
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-4 max-w-2xl text-xl font-medium text-ink md:text-2xl">
            Artificial Intelligence & Machine Learning Engineering Student
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
            Turning AI/ML concepts into practical, real-world systems — from an
            ongoing fraud-detection platform to computer vision and IoT.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={15} aria-hidden="true" />
            {socials.location}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" icon={ArrowRight} iconPosition="right">
              View Projects
            </Button>
            <Button href={socials.resumePath} variant="secondary" icon={Download} download>
              Download Resume
            </Button>
            <Button href={socials.github} variant="ghost" icon={Github} external aria-label="GitHub profile">
              GitHub
            </Button>
            <Button href={socials.linkedin} variant="ghost" icon={Linkedin} external aria-label="LinkedIn profile">
              LinkedIn
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
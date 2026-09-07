import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';
import Hero3D from '../three/Hero3D';
import { socials } from '../../data/socials';

export default function Hero() {
  return (
    <section id="hero" className="relative scroll-mt-20 overflow-hidden bg-navy pb-16 pt-28 text-white md:pb-20 md:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo/30 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet/25 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        <div>
          <FadeIn>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs font-medium text-slate-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-safe" aria-hidden="true" />
              Open to Internships & Campus Placements
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-display text-[42px] font-bold leading-[1.05] sm:text-5xl md:text-[60px] whitespace-nowrap">
              Hi, I'm Soujanya S{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
                Soujanya S
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-4 max-w-xl text-lg font-medium text-slate-200 md:text-xl">
              Artificial Intelligence & Machine Learning Engineering Student
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400 md:text-base">
              Turning AI/ML concepts into practical, real-world systems — from an
              ongoing fraud-detection platform to computer vision and IoT.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={14} aria-hidden="true" />
              {socials.location}
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#projects" icon={ArrowRight} iconPosition="right">View Projects</Button>
              <Button href={socials.resumePath} variant="secondary-dark" icon={Download} download>Download Resume</Button>
              <Button href={socials.github} variant="ghost-dark" icon={Github} external>GitHub</Button>
              <Button href={socials.linkedin} variant="ghost-dark" icon={Linkedin} external>LinkedIn</Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative hidden h-[380px] lg:block">
          <Hero3D />
        </FadeIn>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#F8FAFC]" aria-hidden="true" />
    </section>
  );
}
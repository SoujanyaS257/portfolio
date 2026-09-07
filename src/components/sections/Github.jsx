import { Github as GithubIcon, ArrowUpRight, Code } from 'lucide-react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../ui/FadeIn';
import { socials } from '../../data/socials';

export default function Github() {
  return (
    <section id="github" className="scroll-mt-20 bg-surface py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Code" title="GitHub & Coding Practice" />
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-card md:p-9">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo/10 blur-3xl" aria-hidden="true" />
            <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-ink to-navy p-3 text-white shadow-glow">
                  <GithubIcon size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">SoujanyaS257</h3>
                  <p className="mt-1 max-w-md text-[13.5px] leading-relaxed text-muted">
                    Project code and experiments are hosted on GitHub. I also regularly
                    practice Data Structures & Algorithms using Python to build problem-solving skills.
                  </p>
                </div>
              </div>
              <Button href={socials.github} external icon={ArrowUpRight} iconPosition="right">
                Visit GitHub Profile
              </Button>
            </div>
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-5 flex flex-col items-start justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3.5 text-sm text-muted transition-colors duration-200 hover:border-accent/40 sm:flex-row sm:items-center"
            >
              <span className="flex items-center gap-2">
                <Code size={16} className="shrink-0 text-accent" aria-hidden="true" />
                Regularly practicing Data Structures & Algorithms using Python — see my LeetCode profile.
              </span>
              <span className="inline-flex items-center gap-1 font-medium text-accent group-hover:text-accent-hover">
                View LeetCode Profile
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
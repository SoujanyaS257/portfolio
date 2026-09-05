import { Github as GithubIcon, ArrowUpRight, Code } from 'lucide-react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../ui/FadeIn';
import { socials } from '../../data/socials';

export default function Github() {
  return (
    <section id="github" className="scroll-mt-20 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Code" title="GitHub & Coding Practice" />
        <FadeIn>
          <div className="rounded-2xl border border-line bg-surface p-8 md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-ink p-3 text-white">
                  <GithubIcon size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">SoujanyaS257</h3>
                  <p className="mt-1 max-w-md text-sm text-muted">
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
              className="group mt-6 flex flex-col items-start justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm text-muted transition-colors duration-200 hover:border-accent/40 sm:flex-row sm:items-center"
            >
              <span className="flex items-center gap-2">
                <Code size={16} className="shrink-0 text-accent" aria-hidden="true" />
                Regularly practicing Data Structures & Algorithms using Python — see my LeetCode profile.
              </span>
              <span className="inline-flex items-center gap-1 font-medium text-accent group-hover:text-accent-hover">
                View LeetCode Profile
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
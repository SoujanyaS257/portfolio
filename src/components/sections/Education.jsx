import { GraduationCap } from 'lucide-react';
import { education } from '../../data/education';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../ui/FadeIn';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education" title="Education" />
        <div className="relative border-l-2 border-line pl-8">
          {education.map((edu, i) => (
            <FadeIn key={edu.institution} delay={i * 0.05} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
                <GraduationCap size={14} aria-hidden="true" />
              </span>
              <div className="rounded-xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-ink">{edu.institution}</h3>
                  <span className="font-mono text-sm text-muted">{edu.duration}</span>
                </div>
                <p className="mt-1 text-muted">{edu.degree}</p>
                <p className="mt-3 inline-flex items-center rounded-md bg-accent/10 px-3 py-1 font-mono text-sm font-medium text-accent">
                  {edu.scoreLabel}: {edu.score}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
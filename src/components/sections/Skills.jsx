import { skillCategories } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';
import SkillBadge from '../ui/SkillBadge';
import FadeIn from '../ui/FadeIn';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="Technologies and concepts I've worked with through coursework and projects."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <FadeIn key={cat.category} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <SkillBadge key={item} label={item} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
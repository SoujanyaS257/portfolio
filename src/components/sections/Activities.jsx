import { Users, Code2, Heart } from 'lucide-react';
import { activities } from '../../data/activities';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../ui/FadeIn';

const icons = [Users, Code2, Heart];

export default function Activities() {
  return (
    <section id="activities" className="scroll-mt-20 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Beyond Academics" title="Extra-Curricular & Activities" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((act, i) => {
            const Icon = icons[i % icons.length];
            return (
              <FadeIn key={act.title} delay={i * 0.05}>
                <div className="group h-full rounded-xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover">
                  <Icon size={19} className="mb-2.5 text-accent transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <h3 className="text-[15px] font-semibold text-ink">{act.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{act.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
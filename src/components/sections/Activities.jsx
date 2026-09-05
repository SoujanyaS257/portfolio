import { Users, Code2, Heart } from 'lucide-react';
import { activities } from '../../data/activities';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../ui/FadeIn';

const icons = [Users, Code2, Heart];

export default function Activities() {
  return (
    <section id="activities" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Beyond Academics" title="Extra-Curricular & Activities" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((act, i) => {
            const Icon = icons[i % icons.length];
            return (
              <FadeIn key={act.title} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
                  <Icon size={20} className="mb-3 text-accent" aria-hidden="true" />
                  <h3 className="text-base font-semibold text-ink">{act.title}</h3>
                  <p className="mt-2 text-sm text-muted">{act.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
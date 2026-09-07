import { Award } from 'lucide-react';
import { certifications } from '../../data/certifications';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../ui/FadeIn';

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 bg-surface py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Certifications" title="Certifications" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.title} delay={i * 0.05}>
              <div className="group h-full rounded-xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover">
                <div className="mb-3.5 inline-flex rounded-lg bg-accent/10 p-2.5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/15">
                  <Award size={20} className="text-accent" aria-hidden="true" />
                </div>
                <p className="text-[13px] font-medium text-muted">{cert.issuer}</p>
                <h3 className="mt-1 text-[15px] font-semibold text-ink">{cert.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
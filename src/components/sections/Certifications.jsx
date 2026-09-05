import { Award } from 'lucide-react';
import { certifications } from '../../data/certifications';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../ui/FadeIn';

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Certifications" title="Certifications" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.title} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover">
                <Award size={22} className="mb-4 text-accent" aria-hidden="true" />
                <p className="text-sm font-medium text-muted">{cert.issuer}</p>
                <h3 className="mt-1 text-base font-semibold text-ink">{cert.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
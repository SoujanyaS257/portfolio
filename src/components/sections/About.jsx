import { GraduationCap, Code2, Brain, Target } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../ui/FadeIn';

const highlights = [
  { icon: GraduationCap, text: "AI/ML undergraduate at Atria Institute of Technology" },
  { icon: Brain, text: "Interested in AI, Machine Learning, software development and data analytics" },
  { icon: Code2, text: "Builds practical, hands-on projects and practices DSA regularly" },
  { icon: Target, text: "Actively seeking internship and campus placement opportunities" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-surface py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          subtitle="Aspiring AI/ML engineer focused on building practical, real-world solutions."
        />
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              I'm an undergraduate engineering student pursuing a B.E. in Artificial Intelligence
              & Machine Learning at Atria Institute of Technology, Bangalore. I enjoy building
              practical projects across AI/ML, computer vision, and IoT — including an ongoing
              scam-detection system, a canine skin disease classifier, a real-time object
              detection tool, and an IoT-based cattle monitoring system.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Beyond coursework, I consistently practice Data Structures & Algorithms in
              Python and continue strengthening my foundations in software development
              and data analytics. I'm currently seeking internship and campus placement
              opportunities in AI/ML, software development, or data analytics roles.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="rounded-xl border border-line bg-white p-5">
                  <Icon size={20} className="mb-3 text-accent" aria-hidden="true" />
                  <p className="text-sm text-ink">{text}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
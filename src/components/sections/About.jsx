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
    <section id="about" className="scroll-mt-20 bg-surface py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          subtitle="Aspiring AI/ML engineer focused on building practical, real-world solutions."
        />
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <FadeIn>
            <p className="text-[15px] leading-relaxed text-muted md:text-base">
              I'm an undergraduate Artificial Intelligence & Machine Learning engineering
              student at Atria Institute of Technology, Bangalore, maintaining a CGPA of
              9.4. I enjoy translating AI/ML concepts into working systems — from an
              ongoing AI-based fraud-detection platform to projects in computer vision
              and IoT.
            </p>
            <p className="mt-3.5 text-[15px] leading-relaxed text-muted md:text-base">
              Beyond coursework, I consistently practice Data Structures & Algorithms in
              Python and continue strengthening my foundations in software development
              and data analytics. I'm currently seeking internship and campus placement
              opportunities in AI/ML, software development, or data analytics roles.
            </p>
          </FadeIn>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, text }, i) => (
              <FadeIn key={text} delay={0.1 + i * 0.05}>
                <div className="group h-full rounded-xl border border-line bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover">
                  <Icon size={19} className="mb-2.5 text-accent transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <p className="text-[13.5px] leading-snug text-ink">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
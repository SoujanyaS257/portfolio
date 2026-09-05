import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../ui/FadeIn';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          subtitle="A selection of projects spanning AI/ML, computer vision, and IoT — built to solve practical, real-world problems."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn
              key={project.id}
              delay={i * 0.05}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} featured={project.featured} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
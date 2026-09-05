import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, CheckCircle2 } from 'lucide-react';
import Button from './Button';

const statusStyles = {
  Ongoing: "bg-amber-50 text-suspicious border-suspicious/30",
  Completed: "bg-emerald-50 text-safe border-safe/30",
};

export default function ProjectCard({ project, featured = false }) {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const {
    name,
    description,
    status,
    technologies = [],
    achievements = [],
    features = [],
    inputs,
    details,
    github,
    demo,
    classification,
  } = project;

  return (
    <div
      className={`group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover md:p-8 ${
        featured ? "border-t-4 border-t-accent md:col-span-2" : ""
      }`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-3">
        {featured && (
          <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-accent">
            Featured Project
          </span>
        )}
        {status && (
          <span
            className={`rounded-full border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide ${
              statusStyles[status] || "border-line text-muted"
            }`}
          >
            {status}
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold text-ink md:text-2xl">{name}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>

      {inputs && inputs.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">
            Designed to analyze
          </p>
          <div className="flex flex-wrap gap-2">
            {inputs.map((item) => (
              <span
                key={item}
                className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[12px] text-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {classification && (
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-md border border-safe/30 bg-safe/10 px-2.5 py-1 text-xs font-medium text-safe">
            Safe
          </span>
          <span className="rounded-md border border-suspicious/30 bg-suspicious/10 px-2.5 py-1 text-xs font-medium text-suspicious">
            Suspicious
          </span>
          <span className="rounded-md border border-fraud/30 bg-fraud/10 px-2.5 py-1 text-xs font-medium text-fraud">
            Fraud
          </span>
        </div>
      )}

      {achievements.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {achievements.map((a) => (
            <li key={a} className="flex items-center gap-2 text-sm text-ink">
              <CheckCircle2 size={15} className="shrink-0 text-safe" aria-hidden="true" />
              {a}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-line px-2.5 py-1 font-mono text-[12px] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {details && (
        <div className="mt-5">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
          >
            View Details
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-3 rounded-lg bg-surface p-4 text-sm text-muted">
                  {details.problem && (
                    <p>
                      <span className="font-semibold text-ink">Problem: </span>
                      {details.problem}
                    </p>
                  )}
                  {details.solution && (
                    <p>
                      <span className="font-semibold text-ink">Solution: </span>
                      {details.solution}
                    </p>
                  )}
                  {features.length > 0 && (
                    <div>
                      <p className="mb-1 font-semibold text-ink">Key Features</p>
                      <ul className="list-disc space-y-1 pl-5">
                        {features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {!details && features.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          href={github || "#"}
          external={!!github}
          icon={Github}
          variant="secondary"
          disabled={!github}
          title={github ? "View source on GitHub" : "GitHub link coming soon"}
        >
          {github ? "GitHub" : "Repo Coming Soon"}
        </Button>
        {demo && (
          <Button href={demo} external icon={ExternalLink} variant="ghost">
            Live Demo
          </Button>
        )}
      </div>
    </div>
  );
}
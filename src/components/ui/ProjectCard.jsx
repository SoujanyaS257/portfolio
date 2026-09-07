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
    name, description, status, technologies = [], achievements = [], features = [],
    inputs, details, github, demo, classification, category,
    visualIcon: VisualIcon, visualGradient,
  } = project;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-card-hover">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: "0 0 0 1.5px rgba(37,99,235,0.35), 0 20px 45px -12px rgba(99,102,241,0.35)" }}
        aria-hidden="true"
      />

      {VisualIcon && (
        <div className={`relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br ${visualGradient || "from-accent/10 to-transparent"} md:h-36`}>
          <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
          <VisualIcon
            size={52}
            strokeWidth={1.3}
            className="relative text-ink/70 transition-transform duration-500 ease-out group-hover:scale-110"
            aria-hidden="true"
          />
          {category && (
            <span className="absolute left-4 top-4 rounded-full border border-line/60 bg-white/80 px-3 py-1 font-mono text-[11px] font-medium text-ink backdrop-blur">
              {category}
            </span>
          )}
        </div>
      )}

      <div className={`relative flex flex-1 flex-col p-6 md:p-7 ${featured ? "md:p-8" : ""}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2.5">
          {featured && (
            <span className="rounded-full bg-gradient-to-r from-accent to-violet px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-white">
              Featured Project
            </span>
          )}
          {status && (
            <span className={`rounded-full border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide ${statusStyles[status] || "border-line text-muted"}`}>
              {status}
            </span>
          )}
        </div>

        <h3 className="font-display text-xl font-bold text-ink md:text-[22px]">{name}</h3>
        <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{description}</p>

        {inputs && inputs.length > 0 && (
          <div className="mt-3.5">
            <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-muted">Designed to analyze</p>
            <div className="flex flex-wrap gap-1.5">
              {inputs.map((item) => (
                <span key={item} className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11.5px] text-ink">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {classification && (
          <div className="mt-3.5 flex flex-wrap gap-2">
            <span className="rounded-md border border-safe/30 bg-safe/10 px-2.5 py-1 text-xs font-medium text-safe">Safe</span>
            <span className="rounded-md border border-suspicious/30 bg-suspicious/10 px-2.5 py-1 text-xs font-medium text-suspicious">Suspicious</span>
            <span className="rounded-md border border-fraud/30 bg-fraud/10 px-2.5 py-1 text-xs font-medium text-fraud">Fraud</span>
          </div>
        )}

        {achievements.length > 0 && (
          <ul className="mt-3.5 space-y-1.5">
            {achievements.map((a) => (
              <li key={a} className="flex items-center gap-2 text-[13.5px] text-ink">
                <CheckCircle2 size={14} className="shrink-0 text-safe" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-md border border-line px-2.5 py-1 font-mono text-[11.5px] text-muted transition-colors group-hover:border-accent/20">
              {tech}
            </span>
          ))}
        </div>

        {details && (
          <div className="mt-4">
            <button onClick={() => setOpen(!open)} aria-expanded={open} className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover">
              View Details
              <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
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
                  <div className="mt-3.5 space-y-2.5 rounded-lg bg-surface p-4 text-[13.5px] text-muted">
                    {details.problem && <p><span className="font-semibold text-ink">Problem: </span>{details.problem}</p>}
                    {details.solution && <p><span className="font-semibold text-ink">Solution: </span>{details.solution}</p>}
                    {features.length > 0 && (
                      <div>
                        <p className="mb-1 font-semibold text-ink">Key Features</p>
                        <ul className="list-disc space-y-1 pl-5">
                          {features.map((f) => <li key={f}>{f}</li>)}
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
          <ul className="mt-3.5 list-disc space-y-1 pl-5 text-[13.5px] text-muted">
            {features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2.5 pt-1">
          <Button href={github || "#"} external={!!github} icon={Github} variant="secondary" disabled={!github} title={github ? "View source on GitHub" : "GitHub link coming soon"}>
            {github ? "GitHub" : "Repo Coming Soon"}
          </Button>
          {demo && <Button href={demo} external icon={ExternalLink} variant="ghost">Live Demo</Button>}
        </div>
      </div>
    </div>
  );
}
import FadeIn from './FadeIn';

export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <FadeIn className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={`mb-3 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
       </div>
      )}
      <h2 className="text-[28px] md:text-[32px] font-semibold text-ink">{title}</h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-base text-muted ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
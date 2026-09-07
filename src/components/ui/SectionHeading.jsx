import FadeIn from './FadeIn';

export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <FadeIn className={`mb-8 md:mb-10 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={`mb-2.5 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="font-display text-[26px] font-bold text-ink md:text-[30px]">{title}</h2>
      {subtitle && (
        <p className={`mt-2.5 max-w-2xl text-[15px] text-muted md:text-base ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
export default function SkillBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-white px-3 py-1.5 font-mono text-[13px] text-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md">
      {label}
    </span>
  );
}
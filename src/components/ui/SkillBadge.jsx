export default function SkillBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-white px-3 py-1.5 font-mono text-[12.5px] text-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_0_0_1px_rgba(37,99,235,0.15),0_4px_14px_-2px_rgba(37,99,235,0.25)]">
      {label}
    </span>
  );
}
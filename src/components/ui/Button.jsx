const base =
  "group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

const variants = {
  primary: "bg-accent text-white shadow-sm hover:bg-accent-hover hover:shadow-glow hover:-translate-y-0.5",
  secondary: "bg-white text-ink border border-line hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-sm",
  ghost: "bg-transparent text-ink border border-transparent hover:bg-surface hover:-translate-y-0.5",
  "secondary-dark": "bg-white/5 text-white border border-white/15 backdrop-blur hover:border-indigo/60 hover:bg-white/10 hover:-translate-y-0.5",
  "ghost-dark": "bg-transparent text-slate-300 border border-transparent hover:text-white hover:bg-white/5 hover:-translate-y-0.5",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  iconPosition = "left",
  external = false,
  download = false,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={16} aria-hidden="true" />}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon
          size={16}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
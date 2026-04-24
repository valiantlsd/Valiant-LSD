export function Button({ href, children, variant = "primary", icon: Icon = null, onClick, className = "" }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`button inline-flex items-center justify-center gap-2 rounded-[8px] border px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
        variant === "primary" ? "button-primary" : variant === "small" ? "button-small" : "button-secondary"
      } ${className}`.trim()}
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </a>
  );
}

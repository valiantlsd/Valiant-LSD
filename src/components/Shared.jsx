import { LogoMark } from "./LogoMark.jsx";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 ambient-gradient" />
      <div className="absolute inset-0 ambient-grid" />
    </div>
  );
}

export function SiteShell({ children }) {
  return <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">{children}</div>;
}

export function Eyebrow({ children, icon: Icon = null }) {
  return (
    <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      {children}
    </p>
  );
}

export function Section({ id, children, tone = "default" }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${tone === "dark" ? "section-dark" : ""}`}>
      {children}
    </section>
  );
}

export function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="mb-9 max-w-4xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] md:text-6xl">{title}</h2>
      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-7 text-text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function SectionSeal() {
  return (
    <div className="mb-7 flex items-center gap-4" aria-hidden="true">
      <div className="h-px flex-1 bg-border-line" />
      <div className="section-mark flex h-11 w-11 items-center justify-center rounded-[8px]">
        <LogoMark className="h-7 w-7" />
      </div>
      <div className="h-px flex-1 bg-border-line" />
    </div>
  );
}


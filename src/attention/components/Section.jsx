export function Section({ id, eyebrow, title, description, children, tone = "default" }) {
  return (
    <section className={`section section-${tone}`} id={id}>
      {(eyebrow || title || description) && (
        <div className="section-heading">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}


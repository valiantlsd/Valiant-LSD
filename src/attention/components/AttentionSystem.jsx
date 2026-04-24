import { useEffect, useRef, useState } from "react";
import { audiences } from "../content/siteContent.js";

const attentionPillars = [
  {
    id: "awareness",
    label: "Awareness",
    angle: 0,
    description: "Notice where attention is leaking and what emotional state is driving the leak.",
  },
  {
    id: "environment",
    label: "Environment",
    angle: 90,
    description: "Shape the room, tools, phone, calendar, and boundaries so focus becomes easier to choose.",
  },
  {
    id: "ritual",
    label: "Ritual",
    angle: 180,
    description: "Use repeatable start, reset, and review cues to make attention trainable.",
  },
  {
    id: "execution",
    label: "Execution",
    angle: 270,
    description: "Turn protected attention into shipped work, cleaner communication, and visible progress.",
  },
];

export function AttentionSystem() {
  const [activeId, setActiveId] = useState("businesses");
  const [activePillarId, setActivePillarId] = useState("awareness");
  const [rotation, setRotation] = useState(0);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef(null);
  const activeAudience = audiences.find((audience) => audience.id === activeId) ?? audiences[1];
  const activePillar = attentionPillars.find((pillar) => pillar.id === activePillarId) ?? attentionPillars[0];
  const ActiveIcon = activeAudience.icon;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    let last = performance.now();
    const loop = (now) => {
      const delta = now - last;
      last = now;

      if (!paused) {
        setRotation((current) => (current + delta * 0.0075) % 360);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [paused]);

  return (
    <div className="attention-system" aria-label="Attention Mastery audience selector">
      <div
        className="system-orbit"
        aria-label="Animated Attention Mastery core and four pillars"
        onMouseLeave={() => setPaused(false)}
      >
        <div className="attention-disc" aria-hidden="true">
          <span />
          <span />
        </div>
        <button
          className="core-device"
          type="button"
          onClick={() => setActivePillarId("awareness")}
          onFocus={() => setActivePillarId("awareness")}
          onMouseEnter={() => {
            setPaused(true);
            setActivePillarId("awareness");
          }}
          aria-label="Attention Mastery core"
        >
          <span>Attention</span>
          <strong>Mastery</strong>
        </button>

        {attentionPillars.map((pillar) => {
          const angle = ((rotation + pillar.angle - 90) * Math.PI) / 180;
          const x = Math.cos(angle) * 198;
          const y = Math.sin(angle) * 72;
          const depth = (Math.sin(angle) + 1) / 2;
          const scale = 0.72 + depth * 0.42;
          const zIndex = depth > 0.52 ? 12 + Math.round(depth * 12) : 2 + Math.round(depth * 6);
          const opacity = depth > 0.48 ? 0.82 + depth * 0.18 : 0.22 + depth * 0.28;

          return (
            <button
              className={`attention-pillar ${activePillarId === pillar.id ? "active" : ""}`}
              key={pillar.id}
              onClick={() => setActivePillarId(pillar.id)}
              onFocus={() => setActivePillarId(pillar.id)}
              onMouseEnter={() => {
                setPaused(true);
                setActivePillarId(pillar.id);
              }}
              type="button"
              style={{
                opacity,
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`,
                zIndex,
              }}
            >
              <span className="pillar-shadow" />
              <span className="pillar-top" />
              <span className="pillar-body" />
              <span className="pillar-base" />
              <strong>{pillar.label}</strong>
            </button>
          );
        })}
      </div>

      <article className="pillar-readout" aria-live="polite">
        <p className="eyebrow">Training Pillar</p>
        <h3>{activePillar.label}</h3>
        <p>{activePillar.description}</p>
      </article>

      <div className="audience-tabs" role="tablist" aria-label="Choose audience">
        {audiences.map((audience) => {
          const Icon = audience.icon;
          return (
            <button
              className={audience.id === activeId ? "audience-tab active" : "audience-tab"}
              key={audience.id}
              onClick={() => setActiveId(audience.id)}
              type="button"
              role="tab"
              aria-selected={audience.id === activeId}
            >
              <Icon aria-hidden="true" />
              {audience.label}
            </button>
          );
        })}
      </div>

      <article className="audience-card">
        <ActiveIcon aria-hidden="true" />
        <p className="eyebrow">{activeAudience.label}</p>
        <h3>{activeAudience.title}</h3>
        <p>{activeAudience.description}</p>
        <ul>
          {activeAudience.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

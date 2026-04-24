import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { vldPillars } from "../content/brand.js";
import { LogoMark } from "./LogoMark.jsx";

export function PillarSystem() {
  const prefersReducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState("spiritual");
  const [paused, setPaused] = useState(false);
  const [rotation, setRotation] = useState(0);
  const rafRef = useRef(null);
  const activePillar = useMemo(() => vldPillars.find((pillar) => pillar.id === activeId) ?? vldPillars[0], [activeId]);
  const outerPillars = vldPillars.filter((pillar) => pillar.id !== "spiritual");

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    let last = performance.now();
    const tick = (now) => {
      const delta = now - last;
      last = now;
      if (!paused) setRotation((current) => (current + delta * 0.007) % 360);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, prefersReducedMotion]);

  return (
    <section className="relative mx-auto max-w-[720px]" aria-label="Interactive Five Pillar System" onMouseLeave={() => setPaused(false)}>
      <div className="relative h-[520px] w-full overflow-visible sm:h-[600px]" style={{ perspective: "1600px" }}>
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[520px] -translate-x-1/2 -translate-y-1/2 sm:h-[440px] sm:w-[640px]">
          <div className="sacred-ring sacred-ring-one" />
          <div className="sacred-ring sacred-ring-two" />
        </div>

        <button
          type="button"
          onMouseEnter={() => {
            setPaused(true);
            setActiveId("spiritual");
          }}
          onFocus={() => setActiveId("spiritual")}
          onClick={() => setActiveId("spiritual")}
          className="core-sphere"
        >
          <span className="core-inner-ring" />
          <span>
            <span className="core-kicker">Governing Core</span>
            <span className="core-title">Spiritual</span>
          </span>
        </button>

        {outerPillars.map((pillar) => {
          const angle = ((rotation + pillar.angle - 90) * Math.PI) / 180;
          const x = Math.cos(angle) * 238;
          const y = Math.sin(angle) * 88;
          const depth = (Math.sin(angle) + 1) / 2;
          const scale = 0.72 + depth * 0.44;
          const zIndex = depth > 0.48 ? 130 + Math.round(depth * 20) : 28 + Math.round(depth * 18);
          const opacity = depth > 0.48 ? 0.88 : 0.36;
          const isActive = activeId === pillar.id;

          return (
            <button
              key={pillar.id}
              type="button"
              onMouseEnter={() => {
                setPaused(true);
                setActiveId(pillar.id);
              }}
              onFocus={() => setActiveId(pillar.id)}
              onClick={() => setActiveId(pillar.id)}
              className="orbit-pillar"
              style={{
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`,
                zIndex,
                opacity,
              }}
            >
              <span className="pillar-cap" style={{ boxShadow: isActive ? "0 0 28px rgba(198,161,91,0.22)" : "0 10px 22px rgba(0,0,0,0.2)" }} />
              <span className="pillar-shaft" />
              <span className="pillar-label" data-active={isActive ? "true" : "false"}>
                {pillar.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-[-20px] max-w-2xl border p-5 text-center md:p-6 panel-glass">
        <p className="text-[11px] uppercase tracking-[0.32em] text-brand-gold">{activePillar.role}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.01em]">{activePillar.label}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-text-muted">{activePillar.description}</p>
      </div>
    </section>
  );
}


import { ArrowRight } from "lucide-react";
import { brand } from "../content/siteContent.js";
import { AttentionSystem } from "./AttentionSystem.jsx";
import { Button } from "./Button.jsx";
import { LogoMark } from "./LogoMark.jsx";

export function Hero() {
  return (
    <section className="hero attention-hero" id="top">
      <div className="hero-watermark attention-hero-watermark" aria-hidden="true">
        <LogoMark />
      </div>
      <div className="hero-copy attention-hero-copy">
        <div className="hero-intro attention-hero-intro">
          <h1
            className="attention-hero-title"
            style={{
              fontSize: "clamp(5.5rem, 8.7vw, 9.6rem)",
              letterSpacing: "-0.05em",
              lineHeight: "0.82",
              margin: 0,
              maxWidth: "900px",
              width: "100%",
            }}
          >
            Attention Mastery for people and teams who need their focus back.
          </h1>
        </div>
        <div className="hero-message attention-hero-message">
          <p
            className="hero-principle attention-hero-principle"
            style={{ fontSize: "clamp(1.45rem, 2.2vw, 1.95rem)", lineHeight: 1.28, marginBottom: 0 }}
          >
            {brand.principle}
          </p>
          <p
            className="hero-text attention-hero-text"
            style={{ fontSize: "1.18rem", lineHeight: 1.75, marginBottom: 0 }}
          >
            {brand.subline}
          </p>
        </div>
        <div className="hero-actions attention-hero-actions">
          <Button href={brand.workshopBookingUrl}>
            Book a Workshop <ArrowRight size={16} />
          </Button>
        </div>
      </div>
      <AttentionSystem />
    </section>
  );
}

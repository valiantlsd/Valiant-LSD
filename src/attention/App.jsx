import {
  businessBenefits,
  brand,
  evidencePoints,
  modules,
  offers,
  outcomes,
} from "./content/siteContent.js";
import { Button } from "./components/Button.jsx";
import { Hero } from "./components/Hero.jsx";
import { LogoMark } from "./components/LogoMark.jsx";
import { Nav } from "./components/Nav.jsx";
import { Section } from "./components/Section.jsx";
import "./styles/app.css";

export default function App() {
  return (
    <div className="app">
      <div className="ambient" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Section
          id="outcomes"
          eyebrow="What it trains"
          title="Attention is not a soft skill. It is the control layer."
          description="The program turns focus into something observable, repeatable, and useful in real work, study, and leadership."
        >
          <div className="outcome-grid">
            {outcomes.map((item) => {
              const Icon = item.icon;
              return (
                <article className="card" key={item.title}>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </Section>

        <Section
          id="audiences"
          tone="band"
          eyebrow="Who this is for"
          title="One system. Three practical languages."
          description="Attention Mastery is shaped to meet the needs of individuals, businesses, and schools without losing clarity or practical value."
        >
          <div className="translation-grid">
            <article>
              <span>Individuals</span>
              <h3>Discipline, clarity, self-command.</h3>
              <p>For people who want to stop leaking life force into distraction and build a repeatable rhythm of execution.</p>
            </article>
            <article>
              <span>Businesses</span>
              <h3>Productivity, satisfaction, better execution.</h3>
              <p>For teams that need fewer attention leaks, clearer priorities, calmer communication, and higher-quality output.</p>
            </article>
            <article>
              <span>Schools</span>
              <h3>Focus, regulation, communication.</h3>
              <p>For institutions that need age-appropriate tools for attention, emotional steadiness, and self-leadership.</p>
            </article>
          </div>
        </Section>

        <Section
          id="program"
          eyebrow="Program structure"
          title="Four modules. One operating rhythm."
          description="A clear four-part structure that helps people and teams build stronger focus, steadier execution, and a more reliable working rhythm."
        >
          <div className="module-track">
            {modules.map((module) => (
              <article className="module" key={module.number}>
                <span>{module.number}</span>
                <h3>{module.title}</h3>
                <strong>{module.subtitle}</strong>
                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="business"
          tone="band"
          eyebrow="For businesses"
          title="The productivity problem is also an attention culture problem."
          description="Attention Mastery gives teams a shared language for focus, pressure, interruption, and recovery without turning training into corporate fog."
        >
          <div className="business-panel">
            <div className="business-mark" aria-hidden="true">
              <LogoMark />
            </div>
            <ul>
              {businessBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section
          eyebrow="Offer formats"
          title="Start with the workshop. Expand into the program."
          description="Begin with a practical workshop, then deepen the work through a structured four-week program for teams, schools, or individuals ready for more."
        >
          <div className="offer-grid">
            {offers.map((offer) => (
              <article className="offer" key={offer.title}>
                <p>{offer.tag}</p>
                <h3>{offer.title}</h3>
                <span>{offer.text}</span>
              </article>
            ))}
          </div>
        </Section>

        <Section
          tone="band"
          eyebrow="Research and evidence"
          title="The case for attention training is not philosophical only."
          description="The research is straightforward: frequent switching, unfinished work, and constant interruption all carry real performance costs."
        >
          <div className="trust-grid">
            {evidencePoints.map((point) => {
              const Icon = point.icon;
              return (
                <article className="card" key={point.title}>
                  <Icon aria-hidden="true" />
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                  <p className="card-source">{point.source}</p>
                </article>
              );
            })}
          </div>
        </Section>

        <section className="book" id="book">
          <h2>Bring Attention Mastery into a room and test the signal.</h2>
          <p>
            Book a workshop consultation and explore the right next step for your team, school, or individual work.
          </p>
          <div className="book-actions">
            <Button href={brand.workshopBookingUrl}>
              Book a Workshop
            </Button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <a href="/" aria-label="Go to home">
          <LogoMark className="footer-logo" />
        </a>
        <span>Attention Mastery by Valiant Lifestyle Design</span>
        <span>Focus. Regulation. Execution. Self-command.</span>
      </footer>
    </div>
  );
}

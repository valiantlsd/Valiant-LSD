import { BriefcaseBusiness, Sparkles } from "lucide-react";
import {
  attentionAudiences,
  attentionBusinessBenefits,
  attentionModules,
  attentionOffers,
  attentionOutcomes,
  attentionTrust,
  backLink,
} from "../content/brand.js";
import { Button } from "../components/Button.jsx";
import { LogoMark } from "../components/LogoMark.jsx";
import { Section, SectionIntro, Eyebrow } from "../components/Shared.jsx";

export function AttentionMasteryPage({ navigate }) {
  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-border-line bg-[rgba(9,9,9,0.72)] py-4 backdrop-blur-xl">
        <a className="flex min-w-0 items-center gap-3" href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
          <LogoMark className="h-10 w-10 shrink-0" />
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.28em] sm:block">Attention Mastery</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          <a href="#outcomes" className="text-sm text-text-muted">Outcomes</a>
          <a href="#audiences" className="text-sm text-text-muted">Audiences</a>
          <a href="#program" className="text-sm text-text-muted">Program</a>
          <a href="#book" className="text-sm text-text-muted">Book</a>
        </nav>
        <Button
          href={backLink.href}
          variant="small"
          icon={backLink.icon}
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          {backLink.label}
        </Button>
      </header>

      <section id="top" className="grid min-h-[calc(100vh-80px)] items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
        <div className="relative">
          <div className="pointer-events-none absolute left-[-26px] top-[34px] z-0 h-[260px] w-[260px] rotate-[-8deg] opacity-[0.09] sm:left-[-42px] sm:top-[26px] sm:h-[360px] sm:w-[360px] lg:left-[-62px] lg:h-[430px] lg:w-[430px]">
            <LogoMark className="h-full w-full" />
          </div>
          <Eyebrow icon={Sparkles}>First commercial pathway</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.02em] md:text-7xl lg:text-8xl">
            Attention Mastery for people and teams who need their focus back.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8">
            Train attention into a reliable operating system.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted md:text-lg">
            A grounded VLD program for focus, emotional regulation, execution, productivity, communication, and self-command.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#book">Book a Workshop</Button>
            <Button href="#program" variant="secondary">See the Program</Button>
          </div>
        </div>

        <div className="border p-6 panel-glass md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[rgba(198,161,91,0.11)] text-brand-gold">
              <BriefcaseBusiness className="h-6 w-6" />
            </span>
            <Eyebrow>Practical language</Eyebrow>
          </div>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.01em] md:text-4xl">
            One system. Three practical languages.
          </h2>
          <div className="mt-6 grid gap-3">
            {attentionAudiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <article key={audience.id} className="rounded-[8px] border border-border-line bg-[rgba(244,239,230,0.03)] p-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-brand-gold" />
                    <strong>{audience.label}</strong>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{audience.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-text-muted">{audience.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Section id="outcomes">
        <SectionIntro
          eyebrow="What it trains"
          title="Attention is not a soft skill. It is the control layer."
          description="The program turns focus into something observable, repeatable, and useful in real work, study, and leadership."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {attentionOutcomes.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border p-6 panel-soft">
                <Icon className="h-7 w-7 text-brand-gold" />
                <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">{item.text}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="audiences" tone="dark">
        <SectionIntro
          eyebrow="Audience translation"
          title="Grounded enough for institutions. Strong enough for private growth."
          description="The VLD spine remains intact, but the language changes according to the room."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {attentionAudiences.map((audience) => (
            <article key={audience.id} className="border p-6 panel-soft">
              <p className="eyebrow">{audience.label}</p>
              <h3 className="mt-4 text-2xl font-semibold">{audience.title}</h3>
              <p className="mt-4 text-sm leading-7 text-text-muted">{audience.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="program">
        <SectionIntro
          eyebrow="Program structure"
          title="Four modules. One operating rhythm."
          description="Simple enough to sell. Deep enough to carry the VLD philosophy."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {attentionModules.map((module) => (
            <article key={module.number} className="border p-6 panel-soft">
              <p className="text-[11px] uppercase tracking-[0.24em] text-brand-gold">{module.number}</p>
              <h3 className="mt-4 text-2xl font-semibold">{module.title}</h3>
              <strong className="mt-3 block">{module.subtitle}</strong>
              <p className="mt-4 text-sm leading-7 text-text-muted">{module.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="business" tone="dark">
        <SectionIntro
          eyebrow="For businesses"
          title="The productivity problem is also an attention culture problem."
          description="Attention Mastery gives teams a shared language for focus, pressure, interruption, and recovery without turning training into corporate fog."
        />
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex items-center justify-center border panel-soft">
            <LogoMark className="h-52 w-52 opacity-90" />
          </div>
          <div className="border p-6 panel-soft">
            <ul className="grid gap-3">
              {attentionBusinessBenefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-7">
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                  <span className="text-text-muted">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Offer formats"
          title="Start with the workshop. Expand into the program."
          description="The fastest monetization path is designed into the site: sell a practical session, gather proof, then graduate serious buyers into the four-week pathway."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {attentionOffers.map((offer) => (
            <article key={offer.title} className="border p-6 panel-soft">
              <p className="text-[11px] uppercase tracking-[0.24em] text-brand-gold">{offer.tag}</p>
              <h3 className="mt-4 text-2xl font-semibold">{offer.title}</h3>
              <p className="mt-4 text-sm leading-7 text-text-muted">{offer.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionIntro
          eyebrow="Trust and scope"
          title="Grounded enough for institutions. Deep enough to remain VLD."
          description="The language is practical on the surface and philosophical underneath. That is not dilution. It is responsible translation."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {attentionTrust.map((point) => {
            const Icon = point.icon;
            return (
              <article key={point.title} className="border p-6 panel-soft">
                <Icon className="h-6 w-6 text-brand-gold" />
                <h3 className="mt-4 text-2xl font-semibold">{point.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">{point.text}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <section id="book" className="py-20 text-center md:py-28">
        <Eyebrow>90-day campaign ready</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.01em] md:text-7xl">
          Bring Attention Mastery into a room and test the signal.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-muted">
          Book a workshop, request the four-week program outline, or start with a private Attention Intensive.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="mailto:hello@valiantlifestyledesign.com?subject=Attention%20Mastery%20Workshop">Book a Workshop</Button>
          <Button href="mailto:hello@valiantlifestyledesign.com?subject=Attention%20Mastery%20Program%20Outline" variant="secondary">
            Request Program Outline
          </Button>
        </div>
      </section>
    </>
  );
}


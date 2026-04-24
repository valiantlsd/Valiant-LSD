import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import {
  backLink,
  brand,
  vldJournal,
  vldPathways,
  vldPillars,
  vldPrivateOffers,
  vldSchoolPrograms,
  vldStandards,
} from "../content/brand.js";
import { Button } from "../components/Button.jsx";
import { LogoMark } from "../components/LogoMark.jsx";
import { PillarSystem } from "../components/PillarSystem.jsx";
import { Section, SectionIntro, SectionSeal, Eyebrow } from "../components/Shared.jsx";

export function VldPage({ navigate }) {
  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-border-line bg-[rgba(9,9,9,0.72)] py-4 backdrop-blur-xl">
        <a className="flex min-w-0 items-center gap-3" href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
          <LogoMark className="h-10 w-10 shrink-0" />
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.28em] sm:block">{brand.name}</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          <a href="#method" className="text-sm text-text-muted">Method</a>
          <a href="#private-work" className="text-sm text-text-muted">Private</a>
          <a href="#schools" className="text-sm text-text-muted">Schools</a>
          <a href="#about" className="text-sm text-text-muted">About</a>
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

      <section id="top" className="grid min-h-[calc(100vh-80px)] items-center gap-10 py-12 lg:grid-cols-[0.86fr_1.14fr] lg:py-16">
        <motion.div className="relative" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="pointer-events-none absolute left-[-26px] top-[34px] z-0 h-[260px] w-[260px] rotate-[-8deg] opacity-[0.11] sm:left-[-42px] sm:top-[26px] sm:h-[360px] sm:w-[360px] lg:left-[-62px] lg:h-[430px] lg:w-[430px]">
            <LogoMark className="h-full w-full" />
          </div>
          <Eyebrow icon={Sparkles}>Psychospiritual lifestyle design</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.02em] md:text-7xl lg:text-8xl">
            Discover the system beneath your life.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8">{brand.principle}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted md:text-lg">{brand.positioning}</p>
          <div className="mt-7 flex max-w-xl items-center gap-4 border border-[rgba(198,161,91,0.18)] bg-[rgba(244,239,230,0.035)] px-4 py-3 shadow-[0_18px_36px_rgba(0,0,0,0.16)]">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[8px] border border-[rgba(198,161,91,0.22)] bg-[linear-gradient(145deg,rgba(75,46,131,0.38),rgba(9,9,9,0.82))] shadow-[0_14px_34px_rgba(0,0,0,0.24)] sm:h-24 sm:w-24">
              <LogoMark className="h-16 w-16 sm:h-20 sm:w-20" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-gold">Stillness. Movement. Command.</p>
              <p className="mt-1 text-sm leading-6 text-text-muted">Stillness, movement, and self-command held inside one system.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#method">Enter the System <ArrowRight className="h-4 w-4" /></Button>
            <Button href="#pathways" variant="secondary">Choose a Path</Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
          <PillarSystem />
        </motion.div>
      </section>

      <Section id="pathways">
        <SectionSeal />
        <SectionIntro eyebrow="Two doorways" title="One root system. Two ways to enter." />
        <div className="grid gap-4 lg:grid-cols-2">
          {vldPathways.map((pathway) => {
            const Icon = pathway.icon;
            return (
              <article key={pathway.id} className="border p-6 md:p-8 panel-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[rgba(198,161,91,0.11)] text-brand-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <Eyebrow>{pathway.eyebrow}</Eyebrow>
                </div>
                <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.01em]">{pathway.title}</h3>
                <p className="mt-4 text-base leading-7 text-text-muted">{pathway.text}</p>
                <ul className="mt-6 grid gap-2">
                  {pathway.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="method">
        <SectionSeal />
        <div className="grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative hidden min-h-[310px] items-center justify-center border border-[rgba(198,161,91,0.18)] bg-[radial-gradient(circle_at_50%_40%,rgba(124,77,255,0.16),transparent_56%),linear-gradient(180deg,rgba(244,239,230,0.05),rgba(244,239,230,0.015))] p-8 lg:flex">
            <div className="absolute inset-8 rotate-[-3deg] border border-[rgba(244,239,230,0.06)]" />
            <LogoMark className="relative h-56 w-56 opacity-90" />
          </div>
          <SectionIntro
            eyebrow="The method"
            title="The Five Pillar System is not a list. It is a hierarchy."
            description="The outer domains are where life becomes visible. The spiritual core is the awareness that orders them. Private work uses the full map. School work translates the same root into age-appropriate outcomes."
          />
        </div>
        <div className="grid gap-px overflow-hidden border border-border-line bg-border-line md:grid-cols-5">
          {vldPillars.map((pillar) => (
            <article key={pillar.id} className="min-h-[230px] bg-[#090909] p-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-brand-gold">{pillar.role}</p>
              <h3 className="mt-4 text-xl font-semibold">{pillar.label}</h3>
              <p className="mt-4 text-sm leading-7 text-text-muted">{pillar.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="private-work" tone="dark">
        <SectionSeal />
        <SectionIntro
          eyebrow="Private work"
          title="For people who do not need more motivation. They need a new architecture."
          description="Private VLD work is selective by design. The process examines the visible behavior, the psychological pattern, and the symbolic meaning underneath it."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {vldPrivateOffers.map((offer) => (
            <article key={offer.title} className="border p-6 panel-soft">
              <p className="text-[11px] uppercase tracking-[0.24em] text-brand-gold">{offer.meta}</p>
              <h3 className="mt-4 text-2xl font-semibold">{offer.title}</h3>
              <p className="mt-4 text-sm leading-7 text-text-muted">{offer.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="schools">
        <SectionSeal />
        <SectionIntro
          eyebrow="Schools & institutions"
          title="Depth translated into focus, communication, and self-command."
          description="The school pathway keeps the structure but changes the language. It is built for age-appropriate delivery, clear outcomes, and a credible safeguarding posture."
        />
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-[rgba(124,77,255,0.18)] bg-[linear-gradient(180deg,rgba(75,46,131,0.12),rgba(83,101,84,0.08))] p-5">
            <p className="text-[11px] uppercase tracking-[0.26em] text-brand-gold">School translation</p>
            <div className="mt-5 grid gap-2">
              {vldPillars.map((pillar) => (
                <div key={pillar.id} className="flex items-center justify-between rounded-[8px] border border-border-line bg-[rgba(244,239,230,0.025)] px-4 py-3">
                  <span className="font-medium">{pillar.schoolLabel}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-text-muted">{pillar.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {vldSchoolPrograms.map((program) => (
              <article key={program.title} className="border p-6 panel-soft">
                <p className="text-[11px] uppercase tracking-[0.24em] text-brand-gold">{program.meta}</p>
                <h3 className="mt-4 text-2xl font-semibold">{program.title}</h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">{program.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about" tone="dark">
        <SectionSeal />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative">
            <div className="pointer-events-none absolute -left-8 top-10 hidden h-64 w-64 opacity-[0.08] md:block" aria-hidden="true">
              <LogoMark className="h-full w-full" />
            </div>
            <Eyebrow icon={ShieldCheck}>About Val</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] md:text-6xl">
              A coach becoming a psychospiritual architect.
            </h2>
            <p className="mt-5 text-base leading-7 text-text-muted">
              VLD grows from personal training, private coaching, content creation, and a deeper study of identity, shadow, discipline, and symbolic meaning.
            </p>
          </div>
          <div className="grid gap-3">
            {vldStandards.map((standard) => (
              <p key={standard} className="border p-5 text-base leading-7 text-text-muted panel-soft">{standard}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionIntro eyebrow="Journal / media" title="The public mind of the system." />
        <div className="grid gap-4 md:grid-cols-3">
          {vldJournal.map((seed) => (
            <article key={seed} className="border p-6 panel-soft">
              <BookOpen className="h-5 w-5 text-brand-gold" />
              <h3 className="mt-5 text-xl leading-8">{seed}</h3>
            </article>
          ))}
        </div>
      </Section>

      <section id="apply" className="py-20 text-center md:py-28">
        <Eyebrow>Enter with intention</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.01em] md:text-7xl">
          Choose the doorway that matches the work.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="mailto:hello@valiantlifestyledesign.com?subject=Private%20Work%20Application">Apply for Private Work</Button>
          <Button href="mailto:hello@valiantlifestyledesign.com?subject=School%20Program%20Overview" variant="secondary">
            Request School Overview
          </Button>
        </div>
      </section>
    </>
  );
}


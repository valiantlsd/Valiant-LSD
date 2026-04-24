import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./styles.css";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

const THEME = {
  bg: "#090909",
  ink: "#F4EFE6",
  muted: "#B8B0A4",
  line: "rgba(244,239,230,0.12)",
  panel: "rgba(244,239,230,0.045)",
  panelStrong: "rgba(244,239,230,0.075)",
  gold: "#C6A15B",
  moss: "#536554",
  oxblood: "#5A2026",
  purpleDeep: "#21142F",
  purple: "#4B2E83",
  purpleBright: "#7C4DFF",
  violet: "#6F58A8",
  smoke: "#141413",
};

const BRAND = {
  name: "VALIANT LIFESTYLE DESIGN",
  principle: "Spiritual awareness governs every domain of life.",
  positioning:
    "A psychospiritual lifestyle design system for high performers, and a grounded education pathway for attention, self-awareness, and self-command.",
  bookingUrl: "https://calendly.com/valiantlsd/30min",
};

const PILLARS = [
  {
    id: "spiritual",
    label: "Spiritual",
    schoolLabel: "Meaning",
    role: "Governing Core",
    angle: 0,
    blurb:
      "Awareness, meaning, perception, reverence, and the capacity to see the pattern beneath the pattern.",
    schoolBlurb:
      "A grounded language of purpose, values, attention, and the meaning a young person gives to their choices.",
  },
  {
    id: "physical",
    label: "Physical",
    schoolLabel: "Body",
    role: "Outer Domain",
    angle: 0,
    blurb:
      "Energy, strength, nervous-system regulation, and the body as the first instrument of discipline.",
    schoolBlurb:
      "Sleep, movement, breath, posture, and body awareness as practical foundations for focus.",
  },
  {
    id: "mental",
    label: "Mental",
    schoolLabel: "Attention",
    role: "Outer Domain",
    angle: 90,
    blurb:
      "Thought, focus, identity, pattern recognition, and the disciplined architecture of attention.",
    schoolBlurb:
      "Focus, digital distraction, self-talk, decision-making, and the ability to notice one's own patterns.",
  },
  {
    id: "social",
    label: "Social",
    schoolLabel: "Communication",
    role: "Outer Domain",
    angle: 180,
    blurb:
      "Presence, communication, belonging, boundaries, and the ability to move well inside human environments.",
    schoolBlurb:
      "Communication, peer pressure, respect, confidence, conflict, and relating without losing oneself.",
  },
  {
    id: "sexual",
    label: "Sexual",
    schoolLabel: "Vitality",
    role: "Outer Domain",
    angle: 270,
    blurb:
      "Desire, polarity, attraction, intimacy, creative force, and the integration of life-force into conscious action.",
    schoolBlurb:
      "A grounded language for energy, desire, creative force, self-worth, boundaries, and the way life-force gets directed into action.",
  },
];

const PATHWAYS = [
  {
    id: "private",
    eyebrow: "Private Work",
    title: "For high performers ready to be redesigned, not reassured.",
    text:
      "Private VLD work uses the Five Pillar System as a diagnostic map across body, attention, identity, relationships, standards, and spiritual orientation.",
    cta: "Book a Consultation",
    icon: UserRoundCheck,
    points: ["Strategic Intensive", "Private Immersion", "Yearlong Transformation"],
  },
  {
    id: "schools",
    eyebrow: "Schools, Teams & Institutions",
    title: "The same depth, translated into practical outcomes for groups and organizations.",
    text:
      "This pathway translates the system into practical sessions on attention, emotional regulation, communication, self-awareness, and self-command for schools, teams, and organizations.",
    cta: "Book a Consultation",
    icon: GraduationCap,
    points: ["Talks", "Workshops", "4-Week Attention Mastery"],
  },
];

const PRIVATE_OFFERS = [
  {
    title: "Strategic Intensive",
    meta: "A focused diagnostic intervention",
    text:
      "For the person who can feel the pattern but cannot yet see the architecture. We identify the bottleneck, name the standard, and design the next decisive move.",
  },
  {
    title: "Private Immersion",
    meta: "Deep recalibration across domains",
    text:
      "A high-touch container across body, attention, identity, relationships, ritual, and execution. Built for people who need structure, confrontation, and implementation.",
  },
  {
    title: "Yearlong Transformation",
    meta: "Long-horizon identity work",
    text:
      "A complete redesign of standards, rhythms, perception, embodiment, and expression. Selective by design. This is not casual coaching.",
  },
];

const SCHOOL_PROGRAMS = [
  {
    title: "Talks",
    meta: "Assemblies and large groups",
    text:
      "Clear sessions on attention, self-awareness, emotional regulation, digital overload, and the discipline of choice.",
  },
  {
    title: "Workshops",
    meta: "Interactive group delivery",
    text:
      "Practical exercises, reflection, discussion, and tools students can use immediately. Designed for age-appropriate delivery.",
  },
  {
    title: "Attention Mastery",
    meta: "4-week structured program",
    text:
      "A pathway for focus, self-command, communication, and emotional steadiness. Built for schools that want depth with safeguards.",
  },
];

const STANDARDS = [
  "Coaching and education, not therapy or medical treatment.",
  "Adult private work and school programming are structurally separate.",
  "School delivery uses age-appropriate language, outcomes, and safeguarding awareness.",
  "No guaranteed transformation claims. The standard is disciplined participation.",
];

const JOURNAL_ARTICLES = [
  {
    slug: "attention-is-a-spiritual-faculty",
    title: "Attention is not a productivity hack. It is a spiritual faculty.",
    deck:
      "Most people meet attention at the level of output. VLD meets it at the level of orientation, because what you can hold in awareness will eventually shape what you become.",
    excerpt:
      "A piece on why attention is deeper than efficiency, and why fractured attention eventually becomes a fractured life.",
    readTime: "6 min read",
    body: [
      "Attention is usually sold as a performance tool. Learn to focus better, and you will get more done. That is not wrong, but it is shallow. Attention does not only determine how much work you finish. It determines what kind of reality you are available to perceive, what impulses you obey, and what meanings you can actually stay with long enough to be changed by them.",
      "When attention is weak, life becomes reactive. The loudest stimulus wins. The phone wins. The unfinished task wins. The craving wins. The emotional spike wins. A person can still look functional on the outside while living from one fragmentation to the next. This is why attention is not just a workplace skill. It is the faculty that decides whether you live by command or by interruption.",
      "That matters practically as well as spiritually. Research on attention residue has shown that when people switch away from unfinished work, part of their mind often stays attached to the previous task, and performance on the next task suffers. Research on interruptions has also found that people often compensate by moving faster, but at the cost of more stress, frustration, effort, and time pressure. In other words, fractured attention does not disappear because we keep moving. It simply gets carried forward into everything else.",
      "This is where the spiritual layer enters. Spiritual awareness, as I use the term, is not decorative mysticism. It is the capacity to witness, order, and govern experience rather than being dragged around by it. It is the difference between having an inner seat of authority and living as a bundle of reactions. In that sense, attention is one of the most practical spiritual faculties we have. What you repeatedly attend to becomes the world that trains you.",
      "That is why VLD does not treat attention as a hack. A hack is temporary, external, and usually built to squeeze more output from the same fragmented life. Attention training, done properly, changes the life itself. It changes what you notice, what you feed, what you interrupt, what you refuse, and what you return to. It changes the quality of your choices long before it changes your calendar.",
      "If a person wants self-command, they cannot skip this layer. They can build routines, use timers, and install blockers, and some of that will help. But eventually the deeper question arrives: what rules your awareness when no tool is forcing you? That is where attention stops being a productivity conversation and becomes a spiritual one.",
    ],
    research: [
      {
        label: "Leroy (2009) on attention residue",
        href: "https://www.sciencedirect.com/science/article/abs/pii/S0749597809000399",
        note:
          "Shows that part of attention can remain attached to an unfinished prior task, reducing performance on the next one.",
      },
      {
        label: "Mark, Gudith, & Klocke (2008) on interruption costs",
        href: "https://www.researchgate.net/publication/221518077_The_cost_of_interrupted_work_More_speed_and_stress",
        note:
          "Found that interruptions can increase stress, frustration, effort, and time pressure even when people compensate by working faster.",
      },
    ],
  },
  {
    slug: "the-body-makes-philosophy-visible",
    title: "The body is where your philosophy becomes visible.",
    deck:
      "Every worldview eventually becomes posture, pace, appetite, breath, and behavior. The body is not outside the work. It is where the work becomes undeniable.",
    excerpt:
      "A piece on embodiment, why belief is not enough, and why self-command has to show up physically before it can be trusted.",
    readTime: "5 min read",
    body: [
      "People often speak about philosophy as if it lives only in language. They describe what they believe, what matters to them, what kind of life they want to build. But the body is where those claims are tested. Your posture, your energy, your sleep, your breath, your appetite, your sexual discipline, your training, your pace of speech, your capacity to stay present under pressure: all of this reveals what your philosophy is actually doing in you.",
      "That is why I came into this work through the body first. Personal training taught me something simple and severe: people can say they want change while their daily habits are proving allegiance to something else. The body does not care what story you prefer. It responds to repetition, neglect, stress, ritual, and command. It tells the truth long before the mouth does.",
      "This is not a reduction of life to aesthetics or fitness. It is an insistence that the body is part of the governing system. If the body is exhausted, dysregulated, inflamed, overstimulated, undertrained, or chronically ignored, then attention becomes harder to hold, emotions become harder to regulate, and standards become harder to maintain. A philosophy of discipline that never enters sleep, food, movement, and nervous-system regulation is not yet a philosophy that can carry a life.",
      "Modern research on embodiment and interoception points in the same direction: the body is not merely a passive vehicle for the mind. Our inner bodily signals contribute to our sense of self, our perception, and the way we organize experience. That matters because self-command is not only cognitive. It is also physiological. The person who cannot feel what is happening in themselves clearly will usually struggle to govern it clearly.",
      "This is one reason VLD refuses the split between the spiritual and the physical. Spiritual awareness without embodiment becomes abstraction. Physical discipline without spiritual awareness becomes control without meaning. The task is integration. The body becomes the instrument through which philosophy gains texture, rhythm, and proof.",
      "So when I say the body is where your philosophy becomes visible, I mean something precise. Whatever you truly believe about life will eventually appear in the way you carry yourself, the way you recover, the way you relate to desire, and the way you keep or betray your own standards. The body makes the invisible legible.",
    ],
    research: [
      {
        label: "Musculus, Tünte, Raab, & Kayhan (2021) on interoception and the self",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8547517/",
        note:
          "Reviews the role of bodily and interoceptive states in the development of the self from an embodied cognition perspective.",
      },
    ],
  },
  {
    slug: "a-school-safe-language-for-self-command",
    title: "A school-safe language for self-command without flattening the deeper work.",
    deck:
      "The answer is not dilution. It is translation: keeping the spine of the work while changing the language, outcomes, and boundaries so institutions can trust it.",
    excerpt:
      "A piece on how to speak about depth, discipline, and self-command in a way schools and organizations can actually use.",
    readTime: "6 min read",
    body: [
      "One of the central questions behind VLD is whether depth can survive translation. Can you take a philosophy rooted in spiritual awareness, discipline, shadow, embodiment, and self-command and make it usable for schools, teams, and institutions without draining the life out of it? I believe you can, but only if you understand that translation is not the same as dilution.",
      "Dilution removes the spine. Translation preserves the spine while changing the public language. A private client may be ready to hear about life-force, compulsion, symbolic meaning, and the deeper pattern underneath their behavior. A school leader, safeguarding lead, or organizational buyer needs a different doorway. They need to know what the work trains, how it is delivered, what outcomes it supports, and where the boundaries are.",
      "That means the language changes. Spiritual awareness becomes meaning, values, and attention. Mental mastery becomes focus, self-awareness, and decision-making. Emotional steadiness becomes regulation. Social power becomes communication, boundaries, and respect. The deeper philosophy is still there, but it is being offered in a form that a responsible institution can understand and stand behind.",
      "This is not only a branding choice. It is an ethical one. Institutions need clarity around age-appropriateness, scope, and trust. Frameworks like CASEL already describe self-awareness and self-management as core developmental capacities, which gives us a grounded public vocabulary for describing part of this work. That does not replace the deeper VLD view, but it does create a bridge between inner development and institutional legitimacy.",
      "The mistake would be flattening self-command into motivational fluff. Self-command is not just feeling inspired, nor is it behavior management for its own sake. It is the ability to notice what is happening in you, regulate what needs regulating, and act in alignment with a chosen standard. That is useful in private life, in schools, and in professional environments. The delivery changes, but the human problem does not disappear.",
      "So the task is to build two honest languages at once. One language can go deeper, name shadow more directly, and confront adulthood without euphemism. The other can be practical, safe, and institution-ready. Both can be true. The goal is not to hide the philosophy. The goal is to speak it responsibly enough that more people can actually benefit from it.",
    ],
    research: [
      {
        label: "CASEL framework on self-awareness and self-management",
        href: "https://casel.org/fundamentals-of-sel/what-is-the-casel-framework/",
        note:
          "Provides institution-recognized language for capacities like self-awareness and self-management that overlap with VLD's public-facing educational translation.",
      },
    ],
  },
];

const NAV_ITEMS = [
  { label: "Method", href: "#method" },
  { label: "Private", href: "#private-work" },
  { label: "Schools", href: "#schools" },
  { label: "About", href: "#about" },
];

export default function App() {
  const [articleSlug, setArticleSlug] = useState(() => getArticleSlugFromHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setArticleSlug(getArticleSlugFromHash(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (articleSlug) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [articleSlug]);

  const activeArticle = JOURNAL_ARTICLES.find((article) => article.slug === articleSlug) ?? null;

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: THEME.bg, color: THEME.ink }}>
      <AmbientBackground />
      <SiteShell>
        <Navbar />
        {activeArticle ? <ArticlePage article={activeArticle} /> : <main>
          <HeroSection />
          <PathwaysSection />
          <MethodSection />
          <PrivateWorkSection />
          <SchoolsSection />
          <TrustSection />
          <JournalSection />
          <FinalCtaSection />
        </main>}
        <Footer />
      </SiteShell>
    </div>
  );
}

function getArticleSlugFromHash(hash) {
  if (!hash.startsWith("#article/")) return null;
  return hash.replace("#article/", "").trim() || null;
}

function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 10%, rgba(124,77,255,0.18), transparent 29%), radial-gradient(circle at 78% 28%, rgba(198,161,91,0.1), transparent 24%), radial-gradient(circle at 16% 42%, rgba(75,46,131,0.16), transparent 26%), linear-gradient(180deg, rgba(9,9,9,0), rgba(9,9,9,0.84) 82%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,239,230,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,230,0.5) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "linear-gradient(to bottom, black, transparent 72%)",
        }}
      />
    </div>
  );
}

function SiteShell({ children }) {
  return <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">{children}</div>;
}

function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 border-b py-4 backdrop-blur-xl md:flex-nowrap md:gap-4"
      style={{ borderColor: THEME.line, background: "rgba(9,9,9,0.72)" }}
    >
      <a href="/" className="flex min-w-0 items-center gap-3">
        <LogoMark className="h-10 w-10 shrink-0" />
        <span className="hidden text-[11px] font-medium uppercase tracking-[0.28em] sm:block" style={{ color: THEME.ink }}>
          {BRAND.name}
        </span>
      </a>

      <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: THEME.muted }}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex w-full items-center gap-3 sm:w-auto">
        <a className="button button-small button-secondary flex-1 sm:flex-none" href="/">
          Home
        </a>
        <a className="button button-small button-primary flex-1 sm:flex-none" href={BRAND.bookingUrl}>
          Apply
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="grid min-h-[calc(100vh-80px)] items-center gap-10 py-12 lg:grid-cols-[0.86fr_1.14fr] lg:py-16">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <HeroLogoWatermark />
        <Eyebrow icon={Sparkles}>Psychospiritual lifestyle design</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-[2.85rem] font-semibold leading-[0.94] tracking-[-0.02em] sm:text-5xl md:text-7xl lg:text-8xl">
          Discover the system beneath your life.
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-8" style={{ color: THEME.ink }}>
          {BRAND.principle}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-7 md:text-lg" style={{ color: THEME.muted }}>
          {BRAND.positioning}
        </p>
        <BrandSignature />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={BRAND.bookingUrl} variant="primary">
            Enter the System <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="#pathways" variant="secondary">
            Choose a Path
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.12 }}
      >
        <PillarSystem />
      </motion.div>
    </section>
  );
}

function PillarSystem() {
  const prefersReducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState("spiritual");
  const [paused, setPaused] = useState(false);
  const [rotation, setRotation] = useState(0);
  const rafRef = useRef(null);
  const activePillar = useMemo(() => PILLARS.find((pillar) => pillar.id === activeId) ?? PILLARS[0], [activeId]);
  const outerPillars = PILLARS.filter((pillar) => pillar.id !== "spiritual");

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    let last = performance.now();
    const tick = (now) => {
      const delta = now - last;
      last = now;
      if (!paused) {
        setRotation((current) => (current + delta * 0.007) % 360);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, prefersReducedMotion]);

  return (
    <section
      className="relative mx-auto max-w-[720px]"
      aria-label="Interactive Five Pillar System"
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[520px] w-full overflow-visible sm:h-[600px]" style={{ perspective: "1600px" }}>
        <SacredRings />

        <button
          type="button"
          onMouseEnter={() => {
            setPaused(true);
            setActiveId("spiritual");
          }}
          onFocus={() => setActiveId("spiritual")}
          onClick={() => setActiveId("spiritual")}
          className="absolute left-1/2 top-1/2 z-[120] flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center outline-none ring-offset-2 ring-offset-black transition-transform focus-visible:ring-2 sm:h-[230px] sm:w-[230px]"
          style={{
            background:
              "radial-gradient(circle at 38% 28%, rgba(255,255,255,0.28), transparent 18%), radial-gradient(circle at 50% 46%, rgba(124,77,255,0.96), rgba(75,46,131,0.98) 44%, rgba(24,14,36,1) 72%, rgba(9,9,9,1) 100%)",
            border: "1px solid rgba(198,161,91,0.34)",
            boxShadow:
              "0 42px 90px rgba(0,0,0,0.52), inset 0 16px 28px rgba(255,255,255,0.08), inset 0 -20px 32px rgba(0,0,0,0.58), 0 0 74px rgba(124,77,255,0.2), 0 0 36px rgba(198,161,91,0.1)",
            "--tw-ring-color": THEME.gold,
          }}
        >
          <span className="absolute inset-[14px] rounded-full" style={{ border: "1px solid rgba(255,255,255,0.07)" }} />
          <span>
            <span className="block text-[11px] uppercase tracking-[0.42em]" style={{ color: THEME.gold }}>
              Governing Core
            </span>
            <span className="mt-3 block text-base font-semibold uppercase tracking-[0.24em]" style={{ color: THEME.ink }}>
              Spiritual
            </span>
          </span>
        </button>

        {outerPillars.map((pillar) => {
          const angle = ((rotation + pillar.angle - 90) * Math.PI) / 180;
          const x = Math.cos(angle) * 238;
          const y = Math.sin(angle) * 88;
          const depth = (Math.sin(angle) + 1) / 2;
          const scale = 0.72 + depth * 0.44;
          const zIndex = depth > 0.5 ? 130 + Math.round(depth * 20) : 28 + Math.round(depth * 18);
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
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center outline-none"
              style={{
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`,
                zIndex,
                opacity,
              }}
            >
              <span
                className="mb-[-2px] block h-4 w-24 rounded-[8px]"
                style={{
                  background: "linear-gradient(180deg, #F4EFE6, #BDB29F)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  boxShadow: isActive ? "0 0 28px rgba(198,161,91,0.22)" : "0 10px 22px rgba(0,0,0,0.2)",
                }}
              />
              <span
                className="relative block h-36 w-16 overflow-hidden rounded-[8px]"
                style={{
                  background:
                    "linear-gradient(100deg, rgba(255,255,255,0.34), transparent 22%), linear-gradient(180deg, #E8DED0, #A89B89 42%, #D8CDBE)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  boxShadow: isActive
                    ? "inset 0 7px 14px rgba(255,255,255,0.28), inset 0 -12px 20px rgba(0,0,0,0.16), 0 26px 44px rgba(0,0,0,0.34), 0 0 24px rgba(198,161,91,0.18)"
                    : "inset 0 7px 14px rgba(255,255,255,0.24), inset 0 -12px 20px rgba(0,0,0,0.16), 0 22px 34px rgba(0,0,0,0.28)",
                }}
              />
              <span
                className="mt-4 rounded-[8px] border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{
                  color: THEME.ink,
                  borderColor: isActive ? "rgba(198,161,91,0.35)" : THEME.line,
                  background: "rgba(9,9,9,0.76)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {pillar.label}
              </span>
            </button>
          );
        })}
      </div>

      <div
        className="mx-auto mt-[-20px] max-w-2xl border p-5 text-center md:p-6"
        style={{ borderColor: THEME.line, background: "rgba(9,9,9,0.68)", backdropFilter: "blur(18px)" }}
      >
        <p className="text-[11px] uppercase tracking-[0.32em]" style={{ color: THEME.gold }}>
          {activePillar.role}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.01em]">{activePillar.label}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7" style={{ color: THEME.muted }}>
          {activePillar.blurb}
        </p>
      </div>
    </section>
  );
}

function SacredRings() {
  return (
    <div className="absolute left-1/2 top-1/2 h-[380px] w-[520px] -translate-x-1/2 -translate-y-1/2 sm:h-[440px] sm:w-[640px]">
      <div
        className="absolute inset-x-0 top-1/2 h-[180px] -translate-y-1/2 rounded-full"
        style={{
          transform: "translateY(-50%) rotateX(67deg) rotateZ(-8deg)",
          border: "1px solid rgba(198,161,91,0.18)",
          boxShadow: "inset 0 0 44px rgba(198,161,91,0.04), 0 0 70px rgba(124,77,255,0.1)",
        }}
      />
      <div
        className="absolute inset-x-10 top-1/2 h-[130px] -translate-y-1/2 rounded-full"
        style={{
          transform: "translateY(-50%) rotateX(67deg) rotateZ(13deg)",
          border: "1px solid rgba(124,77,255,0.14)",
        }}
      />
    </div>
  );
}

function HeroLogoWatermark() {
  return (
    <div
      className="pointer-events-none absolute left-[-26px] top-[34px] z-0 h-[260px] w-[260px] sm:left-[-42px] sm:top-[26px] sm:h-[360px] sm:w-[360px] lg:left-[-62px] lg:h-[430px] lg:w-[430px]"
      aria-hidden="true"
      style={{
        opacity: 0.11,
        filter: "blur(0.2px)",
        transform: "rotate(-8deg)",
      }}
    >
      <LogoMark className="h-full w-full" />
    </div>
  );
}

function BrandSignature() {
  return (
    <div
      className="mt-7 flex max-w-xl items-center gap-4 border px-4 py-3"
      style={{ borderColor: "rgba(198,161,91,0.18)", background: "rgba(244,239,230,0.035)" }}
    >
      <div
        className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[8px] sm:h-24 sm:w-24"
        style={{
          background: "linear-gradient(145deg, rgba(75,46,131,0.38), rgba(9,9,9,0.82))",
          border: "1px solid rgba(198,161,91,0.22)",
          boxShadow: "0 14px 34px rgba(0,0,0,0.24)",
        }}
      >
        <LogoMark className="h-16 w-16 sm:h-20 sm:w-20" />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em]" style={{ color: THEME.gold }}>
          Stillness. Movement. Command.
        </p>
        <p className="mt-1 text-sm leading-6" style={{ color: THEME.muted }}>
          Stillness, movement, and self-command held inside one system.
        </p>
      </div>
    </div>
  );
}

function SectionSeal() {
  return (
    <div className="mb-7 flex items-center gap-4" aria-hidden="true">
      <div className="h-px flex-1" style={{ background: THEME.line }} />
      <div
        className="flex h-11 w-11 items-center justify-center rounded-[8px]"
        style={{
          border: "1px solid rgba(198,161,91,0.2)",
          background: "rgba(75,46,131,0.12)",
        }}
      >
        <LogoMark className="h-7 w-7" />
      </div>
      <div className="h-px flex-1" style={{ background: THEME.line }} />
    </div>
  );
}

function LogoMonolith() {
  return (
    <div
      className="relative hidden min-h-[310px] items-center justify-center border p-8 lg:flex"
      style={{
        borderColor: "rgba(198,161,91,0.18)",
        background:
          "radial-gradient(circle at 50% 40%, rgba(124,77,255,0.16), transparent 56%), linear-gradient(180deg, rgba(244,239,230,0.05), rgba(244,239,230,0.015))",
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-8"
        style={{
          border: "1px solid rgba(244,239,230,0.06)",
          transform: "rotate(-3deg)",
        }}
      />
      <LogoMark className="relative h-56 w-56 opacity-90" />
    </div>
  );
}

function PathwaysSection() {
  return (
    <Section id="pathways">
      <SectionSeal />
      <SectionIntro eyebrow="Two doorways" title="One root system. Two ways to enter." />
      <div className="grid gap-4 lg:grid-cols-2">
        {PATHWAYS.map((pathway) => (
          <PathwayPanel key={pathway.id} pathway={pathway} />
        ))}
      </div>
    </Section>
  );
}

function PathwayPanel({ pathway }) {
  const Icon = pathway.icon;

  return (
    <article className="border p-6 md:p-8" style={{ borderColor: THEME.line, background: THEME.panel }}>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-[8px]" style={{ background: "rgba(198,161,91,0.11)", color: THEME.gold }}>
          <Icon className="h-5 w-5" />
        </span>
        <Eyebrow>{pathway.eyebrow}</Eyebrow>
      </div>
      <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.01em]">{pathway.title}</h3>
      <p className="mt-4 text-base leading-7" style={{ color: THEME.muted }}>
        {pathway.text}
      </p>
      <ul className="mt-6 grid gap-2">
        {pathway.points.map((point) => (
          <li key={point} className="flex items-center gap-3 text-sm" style={{ color: THEME.ink }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: THEME.gold }} />
            {point}
          </li>
        ))}
      </ul>
      <a className="mt-7 inline-flex items-center gap-2 text-sm font-semibold" href={BRAND.bookingUrl} style={{ color: THEME.gold }}>
        {pathway.cta} <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
}

function MethodSection() {
  return (
    <Section id="method">
      <SectionSeal />
      <div className="grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <LogoMonolith />
        <SectionIntro
          eyebrow="The method"
          title="The Five Pillar System is not a list. It is an order."
          description="The outer domains are where life becomes visible. The spiritual core is the awareness that orders them. Private work uses the full map. School work translates the same root into age-appropriate outcomes."
        />
      </div>
      <div className="grid gap-px overflow-hidden border md:grid-cols-5" style={{ borderColor: THEME.line, background: THEME.line }}>
        {PILLARS.map((pillar) => (
          <article key={pillar.id} className="min-h-[230px] p-5" style={{ background: THEME.bg }}>
            <p className="text-[10px] uppercase tracking-[0.24em]" style={{ color: THEME.gold }}>
              {pillar.role}
            </p>
            <h3 className="mt-4 text-xl font-semibold">{pillar.label}</h3>
            <p className="mt-4 text-sm leading-7" style={{ color: THEME.muted }}>
              {pillar.blurb}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function PrivateWorkSection() {
  return (
    <Section id="private-work" tone="dark">
      <SectionSeal />
      <SectionIntro
        eyebrow="Private work"
        title="For people who do not need more motivation. They need a new architecture."
        description="Private VLD work is selective by design. The process examines the visible behavior, the psychological pattern, and the symbolic meaning underneath it."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {PRIVATE_OFFERS.map((offer) => (
          <Offer key={offer.title} offer={offer} />
        ))}
      </div>
      <div className="mt-8 border p-6 md:flex md:items-center md:justify-between md:gap-8" style={{ borderColor: THEME.line, background: THEME.panelStrong }}>
        <div>
          <h3 className="text-2xl font-semibold">This is for the high-agency client.</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7" style={{ color: THEME.muted }}>
            You are coachable, self-responsible, and ready to be challenged across body, attention, relationships, standards, and spiritual orientation.
          </p>
        </div>
        <div className="mt-5 shrink-0 md:mt-0">
          <Button href={BRAND.bookingUrl} variant="primary">
            Book a Consultation
          </Button>
        </div>
      </div>
    </Section>
  );
}

function SchoolsSection() {
  const [activeId, setActiveId] = useState("spiritual");
  const activePillar = PILLARS.find((pillar) => pillar.id === activeId) ?? PILLARS[0];

  return (
    <Section id="schools">
      <SectionSeal />
      <SectionIntro
        eyebrow="Schools, teams & institutions"
        title="Depth translated into focus, communication, and self-command."
        description="This pathway keeps the structure but changes the language for schools, teams, and organizations. It is built for clear outcomes, practical delivery, and a credible safeguarding posture where needed."
      />
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border p-5" style={{ borderColor: "rgba(124,77,255,0.18)", background: "linear-gradient(180deg, rgba(75,46,131,0.12), rgba(83,101,84,0.08))" }}>
          <p className="text-[11px] uppercase tracking-[0.26em]" style={{ color: THEME.gold }}>
            Institutional translation
          </p>
          <div className="mt-5 grid gap-2">
            {PILLARS.map((pillar) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveId(pillar.id)}
                className="flex items-center justify-between rounded-[8px] border px-4 py-3 text-left transition-colors"
                style={{
                  borderColor: activeId === pillar.id ? "rgba(198,161,91,0.52)" : THEME.line,
                  background: activeId === pillar.id ? "rgba(124,77,255,0.16)" : "rgba(244,239,230,0.025)",
                }}
              >
                <span className="font-medium">{pillar.schoolLabel}</span>
                <span className="text-xs uppercase tracking-[0.18em]" style={{ color: THEME.muted }}>
                  {pillar.label}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-5 border p-4" style={{ borderColor: THEME.line, background: "rgba(9,9,9,0.45)" }}>
            <h3 className="text-2xl font-semibold">{activePillar.schoolLabel}</h3>
            <p className="mt-3 text-sm leading-7" style={{ color: THEME.muted }}>
              {activePillar.schoolBlurb}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {SCHOOL_PROGRAMS.map((program) => (
            <Offer key={program.title} offer={program} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Button href={BRAND.bookingUrl} variant="primary">
          Book a Consultation
        </Button>
      </div>
    </Section>
  );
}

function TrustSection() {
  return (
    <Section id="about" tone="dark">
      <SectionSeal />
      <div className="relative max-w-5xl">
        <Eyebrow icon={ShieldCheck}>About Val</Eyebrow>
        <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] md:text-6xl">
          A life rebuilt into a philosophy of self-command.
        </h2>
        <div
          className="mt-6 max-w-4xl border p-6 md:p-8"
          style={{ borderColor: THEME.line, background: "rgba(244,239,230,0.03)" }}
        >
          <p className="text-[1.02rem] leading-8 md:text-[1.12rem] md:leading-9" style={{ color: "rgba(244,239,230,0.84)" }}>
            Addiction is where this work begins for me. I know what it is to live without a governing center, to be pulled by impulse, distraction, numbness, and self-sabotage, and to feel a life losing its coherence from the inside. The road out led me through personal training, coaching, content, relentless self-study, and a deeper confrontation with identity, shadow, discipline, and meaning. Valiant Lifestyle Design is the philosophy that grew out of rebuilding my own life from that place. At the core of it is a simple conviction: spiritual awareness governs everything else. The body, the mind, relationships, desire, work, and identity all become unstable when there is no deeper order beneath them. My work is about helping people recover authority over their attention and behavior, see the pattern they are living inside, and build a life shaped less by fragmentation and compulsion and more by meaning, structure, and conscious command.
          </p>
        </div>
      </div>
    </Section>
  );
}

function JournalSection() {
  return (
    <Section id="journal">
      <SectionIntro eyebrow="Journal / media" title="The public mind of the system." description="Essays, frameworks, and public writing from inside the VLD worldview." />
      <div className="grid gap-4 md:grid-cols-3">
        {JOURNAL_ARTICLES.map((article) => (
          <a
            key={article.slug}
            href={`#article/${article.slug}`}
            className="block border p-6 transition-transform hover:-translate-y-0.5"
            style={{ borderColor: THEME.line, background: THEME.panel }}
          >
            <BookOpen className="h-5 w-5" style={{ color: THEME.gold }} />
            <p className="mt-5 text-[11px] uppercase tracking-[0.24em]" style={{ color: THEME.gold }}>
              {article.readTime}
            </p>
            <h3 className="mt-3 text-xl leading-8">{article.title}</h3>
            <p className="mt-4 text-sm leading-7" style={{ color: THEME.muted }}>
              {article.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: THEME.gold }}>
              Read article <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}

function ArticlePage({ article }) {
  return (
    <main>
      <section className="py-12 md:py-16">
        <a href="#journal" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: THEME.gold }}>
          <ArrowLeft className="h-4 w-4" />
          Back to Journal
        </a>
        <div className="mt-8 max-w-4xl">
          <Eyebrow icon={BookOpen}>Journal / media</Eyebrow>
          <h1 className="mt-5 text-[2.45rem] font-semibold leading-tight tracking-[-0.02em] sm:text-4xl md:text-7xl">{article.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 md:text-xl" style={{ color: THEME.ink }}>
            {article.deck}
          </p>
          <p className="mt-5 text-sm uppercase tracking-[0.24em]" style={{ color: THEME.gold }}>
            {article.readTime}
          </p>
        </div>
      </section>

      <section className="border-y py-12 md:py-16" style={{ borderColor: THEME.line, background: "rgba(244,239,230,0.02)" }}>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-7">
            {article.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-[1.02rem] leading-8 md:text-[1.12rem] md:leading-9" style={{ color: "rgba(244,239,230,0.84)" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {article.research.length ? (
        <section className="py-12 md:py-16">
          <div className="max-w-4xl">
            <SectionIntro
              eyebrow="Research notes"
              title="Supporting material"
              description="References that support parts of the article where research adds weight to the argument."
            />
            <div className="grid gap-4">
              {article.research.map((source) => (
                <a
                  key={source.label}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block border p-5 transition-transform hover:-translate-y-0.5"
                  style={{ borderColor: THEME.line, background: THEME.panel }}
                >
                  <p className="text-sm font-semibold" style={{ color: THEME.ink }}>
                    {source.label}
                  </p>
                  <p className="mt-3 text-sm leading-7" style={{ color: THEME.muted }}>
                    {source.note}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: THEME.gold }}>
                    Open source <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FinalCtaSection />
    </main>
  );
}

function FinalCtaSection() {
  return (
    <section id="apply" className="py-20 text-center md:py-28">
      <Eyebrow>Enter with intention</Eyebrow>
      <h2 className="mx-auto mt-5 max-w-4xl text-[2.35rem] font-semibold leading-tight tracking-[-0.01em] sm:text-4xl md:text-7xl">
        Choose the doorway that matches the work.
      </h2>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href={BRAND.bookingUrl} variant="primary">
          Book a Consultation
        </Button>
      </div>
    </section>
  );
}

function Section({ id, children, tone = "default" }) {
  return (
    <section
      id={id}
      className="py-16 md:py-24"
      style={{
        borderTop: `1px solid ${THEME.line}`,
        background: tone === "dark" ? "rgba(244,239,230,0.02)" : "transparent",
      }}
    >
      {children}
    </section>
  );
}

function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="mb-9 max-w-4xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.01em] md:text-6xl">{title}</h2>
      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-7 md:text-lg" style={{ color: THEME.muted }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Offer({ offer }) {
  return (
    <article className="border p-6" style={{ borderColor: THEME.line, background: THEME.panel }}>
      <p className="text-[11px] uppercase tracking-[0.24em]" style={{ color: THEME.gold }}>
        {offer.meta}
      </p>
      <h3 className="mt-4 text-2xl font-semibold">{offer.title}</h3>
      <p className="mt-4 text-sm leading-7" style={{ color: THEME.muted }}>
        {offer.text}
      </p>
    </article>
  );
}

function Eyebrow({ children, icon: Icon }) {
  return (
    <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: THEME.gold }}>
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      {children}
    </p>
  );
}

function Button({ href, children, variant = "primary" }) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      className={`button inline-flex items-center justify-center gap-2 rounded-[8px] border px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
        isPrimary ? "button-primary" : "button-secondary"
      }`}
      style={{
        borderColor: isPrimary ? "rgba(198,161,91,0.4)" : THEME.line,
        background: isPrimary ? `linear-gradient(135deg, ${THEME.gold}, #F1D491)` : "rgba(75,46,131,0.12)",
        color: isPrimary ? "#11100E" : THEME.ink,
      }}
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-6 border-t py-10 md:flex-row md:items-center" style={{ borderColor: THEME.line }}>
      <div className="flex items-center gap-4">
        <a
          href="/"
          className="flex h-16 w-16 items-center justify-center rounded-[8px]"
          aria-label="Go to home"
          style={{
            border: "1px solid rgba(198,161,91,0.22)",
            background: "linear-gradient(145deg, rgba(75,46,131,0.26), rgba(9,9,9,0.8))",
          }}
        >
          <LogoMark className="h-12 w-12" />
        </a>
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em]">{BRAND.name}</p>
          <p className="mt-1 text-sm" style={{ color: THEME.muted }}>
            Stillness. Movement. Self-command.
          </p>
        </div>
      </div>
      <p className="text-sm" style={{ color: THEME.muted }}>
        Private Work · Schools · Method · Apply
      </p>
    </footer>
  );
}

function LogoMark({ className = "h-12 w-12" }) {
  return (
    <svg viewBox="0 0 500 500" className={className} aria-label="VLD logo" fill="none">
      <rect width="500" height="500" rx="48" fill="#090909" />
      <path d="M 411 97 L 391 78 L 362 63 L 339 58 L 311 58 L 289 62 L 271 68 L 242 83 L 220 99 L 201 118 L 186 138 L 173 162 L 162 193 L 154 240 L 154 291 L 161 335 L 160 339 L 140 329 L 119 315 L 92 290 L 80 275 L 67 254 L 56 229 L 46 193 L 43 167 L 42 192 L 45 220 L 50 241 L 59 265 L 79 299 L 95 318 L 109 331 L 144 355 L 171 368 L 198 378 L 185 348 L 175 311 L 170 275 L 170 234 L 175 202 L 183 177 L 194 155 L 207 136 L 229 113 L 255 94 L 281 80 L 312 71 L 347 70 L 376 78 L 395 89 L 407 99 L 429 126 Z" fill="#F4EFE6" />
      <path d="M 328 210 L 371 241 L 396 265 L 409 282 L 417 297 L 421 310 L 422 322 L 420 328 L 415 334 L 403 339 L 379 339 L 366 337 L 318 322 L 353 342 L 378 350 L 389 352 L 406 352 L 423 346 L 431 338 L 435 331 L 437 314 L 431 292 L 419 271 L 397 248 L 384 238 L 365 226 Z" fill="#F4EFE6" />
      <path d="M 273 224 L 258 234 L 240 251 L 227 267 L 212 293 L 204 318 L 203 335 L 206 343 L 216 351 L 231 350 L 292 313 L 336 296 L 321 297 L 296 302 L 267 313 L 228 335 L 222 337 L 219 335 L 219 319 L 228 290 L 247 256 Z" fill="#F4EFE6" />
      <path d="M 316 378 L 254 407 L 238 412 L 228 412 L 223 404 L 224 386 L 231 370 L 244 351 L 231 360 L 221 370 L 215 379 L 209 398 L 210 410 L 214 419 L 223 426 L 244 426 L 273 413 L 297 396 Z" fill="#F4EFE6" />
      <path d="M 425 385 L 419 369 L 412 362 L 404 358 L 413 373 L 414 386 L 412 391 L 400 400 L 384 404 L 368 405 L 318 398 L 342 411 L 369 419 L 385 419 L 402 415 L 417 406 L 424 395 Z" fill="#F4EFE6" />
      <path d="M 314 150 L 305 145 L 286 143 L 274 146 L 261 153 L 252 163 L 248 174 L 249 184 L 255 195 L 268 204 L 278 205 L 270 201 L 262 192 L 259 184 L 260 173 L 268 164 L 275 160 L 284 157 L 296 156 L 307 159 L 313 167 L 314 184 L 310 196 L 318 186 L 322 174 L 321 161 Z" fill="#F4EFE6" />
    </svg>
  );
}

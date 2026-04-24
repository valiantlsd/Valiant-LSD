import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Target,
  UserRoundCheck,
} from "lucide-react";

export const THEME = {
  bg: "#090909",
  ink: "#F4EFE6",
  muted: "#B8B0A4",
  line: "rgba(244,239,230,0.12)",
  panel: "rgba(244,239,230,0.045)",
  panelStrong: "rgba(244,239,230,0.075)",
  gold: "#C6A15B",
  purple: "#4B2E83",
  purpleBright: "#7C4DFF",
  green: "#536554",
};

export const brand = {
  name: "VALIANT LIFESTYLE DESIGN",
  principle: "Spiritual awareness governs every domain of life.",
  positioning:
    "A psychospiritual lifestyle design system for high performers, with practical pathways for private clients, institutions, and teams.",
};

export const homeDoors = [
  {
    id: "vld",
    eyebrow: "Flagship Brand",
    title: "Enter Valiant Lifestyle Design",
    text:
      "The full symbolic world: the Five Pillar System, private work, institutional translation, and the deeper philosophy beneath the brand.",
    href: "/vld",
    icon: Sparkles,
  },
  {
    id: "attention-mastery",
    eyebrow: "Attention Training",
    title: "Enter Attention Mastery",
    text:
      "The grounded offer: focus, regulation, execution, productivity, communication, and self-command for individuals, businesses, and schools.",
    href: "/attention-mastery",
    icon: Target,
  },
];

export const vldNav = [
  { label: "Method", href: "#method" },
  { label: "Private", href: "#private-work" },
  { label: "Schools", href: "#schools" },
  { label: "About", href: "#about" },
];

export const vldPillars = [
  {
    id: "spiritual",
    label: "Spiritual",
    schoolLabel: "Meaning",
    role: "Governing Core",
    angle: 0,
    description:
      "Awareness, meaning, perception, reverence, and the capacity to see the pattern beneath the pattern.",
    schoolDescription:
      "A grounded language of purpose, values, attention, and the meaning a young person gives to their choices.",
  },
  {
    id: "physical",
    label: "Physical",
    schoolLabel: "Body",
    role: "Outer Domain",
    angle: 0,
    description:
      "Energy, strength, nervous-system regulation, and the body as the first instrument of discipline.",
    schoolDescription:
      "Sleep, movement, breath, posture, and body awareness as practical foundations for focus.",
  },
  {
    id: "mental",
    label: "Mental",
    schoolLabel: "Attention",
    role: "Outer Domain",
    angle: 90,
    description:
      "Thought, focus, identity, pattern recognition, and the disciplined architecture of attention.",
    schoolDescription:
      "Focus, digital distraction, self-talk, decision-making, and the ability to notice one's own patterns.",
  },
  {
    id: "social",
    label: "Social",
    schoolLabel: "Communication",
    role: "Outer Domain",
    angle: 180,
    description:
      "Presence, communication, belonging, boundaries, and the ability to move well inside human environments.",
    schoolDescription:
      "Communication, peer pressure, respect, confidence, conflict, and relating without losing oneself.",
  },
  {
    id: "sexual",
    label: "Sexual",
    schoolLabel: "Vitality",
    role: "Outer Domain",
    angle: 270,
    description:
      "Desire, polarity, attraction, intimacy, creative force, and the integration of life-force into conscious action.",
    schoolDescription:
      "A grounded language for energy, desire, creative force, self-worth, boundaries, and the way life-force gets directed into action.",
  },
];

export const vldPathways = [
  {
    id: "private",
    eyebrow: "Private Work",
    title: "For high performers ready to be redesigned, not reassured.",
    text:
      "Private VLD work uses the Five Pillar System as a diagnostic map across body, attention, identity, relationships, standards, and spiritual orientation.",
    cta: "Apply for Private Work",
    icon: UserRoundCheck,
    points: ["Strategic Intensive", "Private Immersion", "Yearlong Transformation"],
  },
  {
    id: "schools",
    eyebrow: "Schools, Teams & Institutions",
    title: "The same depth, translated into practical outcomes for groups and organizations.",
    text:
      "This pathway translates the system into practical sessions on attention, emotional regulation, communication, self-awareness, and self-command for schools, teams, and organizations.",
    cta: "Request Program Overview",
    icon: GraduationCap,
    points: ["Talks", "Workshops", "Attention Mastery Program"],
  },
];

export const vldPrivateOffers = [
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

export const vldSchoolPrograms = [
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

export const vldStandards = [
  "Coaching and education, not therapy or medical treatment.",
  "Adult private work and school programming are structurally separate.",
  "School delivery uses age-appropriate language, outcomes, and safeguarding awareness.",
  "No guaranteed transformation claims. The standard is disciplined participation.",
];

export const vldJournal = [
  "Attention is not a productivity hack. It is a spiritual faculty.",
  "The body is where your philosophy becomes visible.",
  "A school-safe language for self-command without flattening the deeper work.",
];

export const attentionNav = [
  { label: "Outcomes", href: "#outcomes" },
  { label: "Audiences", href: "#audiences" },
  { label: "Program", href: "#program" },
  { label: "Business", href: "#business" },
  { label: "Book", href: "#book" },
];

export const attentionOutcomes = [
  {
    icon: Target,
    title: "Focused Execution",
    text: "Convert intention into protected work blocks, cleaner priorities, and fewer attention leaks.",
  },
  {
    icon: Sparkles,
    title: "Self-Awareness",
    text: "Notice the patterns, triggers, environments, and emotional loops that fragment attention.",
  },
  {
    icon: ShieldCheck,
    title: "Regulation",
    text: "Use breath, body cues, and reset rituals to return to presence before momentum collapses.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Productive Rhythm",
    text: "Track focus blocks, distractions, review habits, and execution without building a complicated productivity shrine.",
  },
];

export const attentionAudiences = [
  {
    id: "individuals",
    label: "Individuals",
    icon: UserRoundCheck,
    title: "Discipline, clarity, self-command.",
    text:
      "For people who want to stop leaking life force into distraction and build a repeatable rhythm of execution.",
  },
  {
    id: "businesses",
    label: "Businesses",
    icon: BriefcaseBusiness,
    title: "Productivity, satisfaction, better execution.",
    text:
      "For teams that need fewer attention leaks, clearer priorities, calmer communication, and higher-quality output.",
  },
  {
    id: "schools",
    label: "Schools",
    icon: GraduationCap,
    title: "Focus, regulation, communication.",
    text:
      "For institutions that need age-appropriate tools for attention, emotional steadiness, and self-leadership.",
  },
];

export const attentionModules = [
  {
    number: "01",
    title: "Awareness",
    subtitle: "See the attention leak.",
    text:
      "Map where attention goes, what pulls it away, and which emotional states are driving avoidance.",
  },
  {
    number: "02",
    title: "Environment",
    subtitle: "Design the field.",
    text:
      "Remove avoidable friction, shape digital boundaries, and build surroundings that make focus easier to choose.",
  },
  {
    number: "03",
    title: "Ritual",
    subtitle: "Make focus repeatable.",
    text:
      "Create simple start, reset, and review rituals that turn attention into a trained faculty, not a mood.",
  },
  {
    number: "04",
    title: "Execution",
    subtitle: "Prove it in output.",
    text:
      "Translate awareness into shipped work, cleaner communication, and a weekly operating rhythm.",
  },
];

export const attentionOffers = [
  {
    title: "90-Minute Workshop",
    tag: "Fastest starting point",
    text:
      "A practical session for teams, schools, or groups. Participants leave with an attention audit, reset protocol, and a simple execution plan.",
  },
  {
    title: "4-Week Program",
    tag: "Core offer",
    text:
      "A structured pathway through Awareness, Environment, Ritual, and Execution with weekly practices and review.",
  },
  {
    title: "Private Attention Intensive",
    tag: "Selective",
    text:
      "A focused private intervention for high-agency individuals who need a personal attention architecture.",
  },
];

export const attentionBusinessBenefits = [
  "Less time lost to context switching and unclear priorities.",
  "Calmer execution under pressure.",
  "Higher employee satisfaction through cleaner rhythms and reduced cognitive overload.",
  "Better communication because attention is trained before reaction takes over.",
  "A practical language for resilience that does not feel corporate or vague.",
];

export const attentionTrust = [
  {
    icon: ShieldCheck,
    title: "Responsible Scope",
    text:
      "Attention Mastery is coaching and education. It is not therapy, medical treatment, or a guaranteed cure for attention disorders.",
  },
  {
    icon: GraduationCap,
    title: "Institution-Ready",
    text:
      "Language and delivery can be adapted for schools, teams, founders, and private groups without losing the VLD spine.",
  },
  {
    icon: BookOpen,
    title: "Proof First",
    text:
      "The offer is built for workshops, beta programs, feedback, testimonials, and visible improvement before expansion.",
  },
  {
    icon: Sparkles,
    title: "VLD Source Code",
    text:
      "The deeper philosophy remains present: discipline, self-awareness, embodiment, meaning, and self-command.",
  },
];

export const backLink = {
  label: "Back to doorway",
  href: "/",
  icon: ArrowLeft,
};

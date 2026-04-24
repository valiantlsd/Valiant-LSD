import {
  BarChart3,
  Brain,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";

export const brand = {
  parent: "Valiant Lifestyle Design",
  product: "Attention Mastery",
  principle: "Train attention into a reliable operating system.",
  subline:
    "A grounded VLD program for focus, emotional regulation, execution, and self-command.",
  workshopBookingUrl: "https://calendly.com/valiantlsd/30min",
};

export const navItems = [
  { label: "Outcomes", href: "#outcomes" },
  { label: "Audiences", href: "#audiences" },
  { label: "Program", href: "#program" },
  { label: "Business", href: "#business" },
  { label: "Book", href: "#book" },
];

export const audiences = [
  {
    id: "individuals",
    label: "Individuals",
    icon: UserRound,
    title: "For people who know their life is leaking through distraction.",
    description:
      "Build a practical system for focus blocks, attention audits, environment design, weekly review, and disciplined follow-through.",
    outcomes: ["Clearer priorities", "Stronger daily rhythm", "Reduced mental noise", "More consistent execution"],
  },
  {
    id: "businesses",
    label: "Businesses",
    icon: BriefcaseBusiness,
    title: "For teams losing output to context switching, stress, and scattered execution.",
    description:
      "Train employees to protect attention, reduce avoidable friction, communicate more clearly, and finish higher-quality work with less nervous-system drag.",
    outcomes: ["Higher quality focus time", "Better execution rhythm", "Improved employee satisfaction", "Lower distraction cost"],
  },
  {
    id: "schools",
    label: "Schools",
    icon: GraduationCap,
    title: "For schools that need attention, self-awareness, and emotional steadiness.",
    description:
      "A safe educational pathway for focus, emotional regulation, communication, digital distraction, and self-command.",
    outcomes: ["Attention skills", "Emotional regulation", "Communication tools", "Age-appropriate self-leadership"],
  },
];

export const outcomes = [
  {
    icon: Target,
    title: "Focused Execution",
    text: "Convert intention into protected work blocks, cleaner priorities, and fewer attention leaks.",
  },
  {
    icon: Brain,
    title: "Self-Awareness",
    text: "Notice the patterns, triggers, environments, and emotional loops that fragment attention.",
  },
  {
    icon: HeartPulse,
    title: "Regulation",
    text: "Use breath, body cues, and reset rituals to return to presence before momentum collapses.",
  },
  {
    icon: BarChart3,
    title: "Measurable Rhythm",
    text: "Track focus blocks, distractions, review habits, and execution without building a complicated productivity shrine.",
  },
];

export const modules = [
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

export const offers = [
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

export const businessBenefits = [
  "Less time lost to context switching and unclear priorities.",
  "Calmer execution under pressure.",
  "Higher employee satisfaction through cleaner rhythms and reduced cognitive overload.",
  "Better communication because attention is trained before reaction takes over.",
  "A practical language for resilience that does not feel corporate or vague.",
];

export const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Responsible Scope",
    text:
      "Attention Mastery is coaching and education. It is not therapy, medical treatment, or a guaranteed cure for attention disorders.",
  },
  {
    icon: Building2,
    title: "Institution-Ready",
    text:
      "Language and delivery can be adapted for schools, teams, founders, and private groups without losing the VLD spine.",
  },
  {
    icon: CalendarCheck,
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

export const evidencePoints = [
  {
    icon: BarChart3,
    title: "Switching slows complex work",
    text:
      "Task-switching studies found measurable time costs, and those costs increased when tasks were more complex or less familiar.",
    source: "Rubinstein, Meyer, & Evans (2001)",
  },
  {
    icon: Brain,
    title: "Unfinished work follows you",
    text:
      "Research on attention residue showed that when people leave one task unfinished, part of their attention stays behind and performance on the next task suffers.",
    source: "Leroy (2009)",
  },
  {
    icon: ShieldCheck,
    title: "Interruptions raise stress",
    text:
      "Interrupted workers may compensate by moving faster, but studies found that this comes with higher stress, frustration, time pressure, and effort.",
    source: "Mark, Gudith, & Klocke (2008)",
  },
  {
    icon: BriefcaseBusiness,
    title: "Social media can erode work quality",
    text:
      "Studies of workplace social media use found that some platforms, especially when used for non-work checking, were associated with weaker project outcomes and more fragmented attention.",
    source: "Vithayathil, Dadgar, & Osiri (2018)",
  },
];

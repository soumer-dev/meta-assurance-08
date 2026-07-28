"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Car,
  Home,
  Briefcase,
  UserCheck,
  Heart,
  TrendingUp,
  Clock,
  ShieldCheck,
  Tag,
  EyeOff,
  Headphones,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  HardHat,
  HeartPulse,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { SiteLayout } from "../components/layout/SiteLayout";
import { CtaButton, Eyebrow, FinalCta, SectionHeading } from "../components/ui/ui-bits";
import { StatCounter } from "../components/ui/StatCounter";

const STATS = [
  { target: 25000, suffix: "+", label: "Clients protégés" },
  { target: 98, suffix: "%", label: "De satisfaction" },
  { target: 25, suffix: " ans", label: "D'expertise" },
  { target: 24, suffix: "h/7j", label: "D'assistance" },
];

type Offer = {
  icon: LucideIcon;
  segment: "Particuliers" | "Entreprises" | "Professions libérales";
  title: string;
  desc: string;
  points: string[];
  image: string;
  to: string;
};

const OFFERS: Offer[] = [
  {
    icon: Car,
    segment: "Particuliers",
    title: "Assurance Auto",
    desc: "Une protection adaptée à chaque conducteur, pour rouler l'esprit tranquille.",
    points: ["Responsabilité civile", "Assistance automobile", "Véhicule de remplacement"],
    image: "/assurance-auto-particuliers.webp",
    to: "/particuliers/assurance-auto",
  },
  {
    icon: Home,
    segment: "Particuliers",
    title: "Assurance Habitation",
    desc: "Protégez votre patrimoine avec une couverture pensée pour votre logement.",
    points: ["Responsabilité civile", "Suivi de sinistre dédié", "Remboursement des dommages"],
    image: "/assurance-habitation-particuliers.webp",
    to: "/particuliers/assurance-habitation",
  },
  {
    icon: Car,
    segment: "Entreprises",
    title: "Assurance Auto Pro",
    desc: "La couverture de votre flotte et de vos véhicules professionnels, sans zone d'ombre.",
    points: ["Flotte & véhicules pro", "Gestion des sinistres", "Assistance 24h/7j"],
    image: "/assurance-auto-entreprises.webp",
    to: "/entreprises/assurance-auto",
  },
  {
    icon: HardHat,
    segment: "Entreprises",
    title: "Accidents du travail",
    desc: "Protégez vos salariés et votre entreprise face aux conséquences d'un accident.",
    points: ["Couverture des salariés", "Prise en charge rapide", "Conformité légale"],
    image: "/assurance-accidents-du-travail.webp",
    to: "/entreprises/assurance-accidents-du-travail",
  },
  {
    icon: HeartPulse,
    segment: "Entreprises",
    title: "Maladie collective",
    desc: "Une couverture santé qui renforce l'attractivité et la fidélisation de vos équipes.",
    points: ["Consultations & médicaments", "Hospitalisation & chirurgie", "Dentaire & optique"],
    image: "/assurance-maladie-collective-entreprise.webp",
    to: "/entreprises/assurance-maladie-collective",
  },
  {
    icon: Building2,
    segment: "Entreprises",
    title: "Multirisque professionnelle",
    desc: "Locaux, équipements, marchandises : protégez la continuité de votre activité.",
    points: ["Locaux & équipements", "Pertes d'exploitation", "Responsabilité civile"],
    image: "/assurance-multirisque-professionnelle.webp",
    to: "/entreprises/assurance-multirisque-professionnelle",
  },
  {
    icon: Scale,
    segment: "Entreprises",
    title: "Responsabilité Civile Exploitation",
    desc: "Protégez votre entreprise quand son activité cause un dommage à un tiers.",
    points: ["Dommages aux tiers", "Défense & recours", "Couverture sur mesure"],
    image: "/assurance-responsabilite-civile-exploitation.webp",
    to: "/entreprises/assurance-responsabilite-civile-exploitation",
  },
  {
    icon: Briefcase,
    segment: "Professions libérales",
    title: "Offre Professions Libérales",
    desc: "Une offre globale pour votre cabinet : véhicule, locaux et responsabilité professionnelle réunis.",
    points: ["Auto professionnelle", "Multirisque cabinet", "Responsabilité civile d'exploitation"],
    image: "/assurance-professions-liberales.webp",
    to: "/assurance-pour-professionnels",
  },
];

const DIFFERENTIATORS = [
  {
    icon: UserCheck,
    title: "Conseil personnalisé",
    desc: "Un expert prend le temps d'analyser votre situation et vous recommande la solution optimale.",
  },
  {
    icon: Heart,
    title: "Accompagnement humain",
    desc: "Un conseiller dédié à vos côtés, de la souscription jusqu'à la gestion des sinistres.",
  },
  {
    icon: TrendingUp,
    title: "Suivi précis et adapté",
    desc: "Un suivi régulier pour des protections adaptées à vos besoins réels.",
  },
  {
    icon: Clock,
    title: "Réactivité garantie",
    desc: "Rappel en moins de 10 minutes. Assistance disponible 24h/7j en cas de sinistre.",
  },
];

const TRUST = [
  { icon: ShieldCheck, label: "Sinistre simplifié" },
  { icon: Tag, label: "Bon rapport qualité/prix" },
  { icon: EyeOff, label: "Zéro frais cachés" },
  { icon: Headphones, label: "Assistance sinistre 24h/7j" },
];

const TESTIMONIALS = [
  {
    quote: "Très bon service. Professionnel.",
    name: "My Abdelaziz HADIGUI",
    role: "Client particulier",
  },
  {
    quote: "Equipe très professionnelle. Client satisfait.",
    name: "COSMAVITA SARL",
    role: "Client professionnel",
  },
  {
    quote:
      "Agence proche de mon domicile, parking à proximité et relativement accessible. Le personnel de l'agence est très sympathique. Ma démarche a été aisée et rapide. Je suis très satisfait.",
    name: "Jean Genest BONCHE",
    role: "Client particulier",
  },
];

export function HomeClient() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const progress = useMotionValue(0);
  const progressSpring = useSpring(progress, { stiffness: 220, damping: 32, mass: 0.6 });
  const progressWidth = useTransform(progressSpring, (v) => `${v}%`);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pct = max > 0 ? (el.scrollLeft / max) * 100 : 0;
    progress.set(pct);
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  }, [progress]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCards = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-offer-card]");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              priority
              src="/hero-home.webp"
              alt="Famille marchant ensemble au coucher du soleil"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-65"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/20" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-12 lg:px-8 lg:py-36">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
              <span className="size-1.5 rounded-full bg-sky" />
              Meta Assurances et Conseils
            </span>
            {/* H1 → "La tranquillité d'esprit, assurée au quotidien." */}
            <h1 className="mt-5 text-4xl font-semibold leading-[1.02] text-balance sm:text-5xl lg:text-7xl">
              La tranquillité d'esprit,{" "}
              <span className="font-display italic text-sky">assurée au quotidien.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
              Avec votre agent d’assurance à Marrakech, bénéficiez d’un accompagnement dédié et de
              garanties auto et habitation sur mesure, au meilleur prix.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaButton to="/devis">Obtenir mon devis gratuit</CtaButton>
              <Link
                href="/pourquoi-nous"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Pourquoi nous choisir
              </Link>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-sky">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 py-8 text-navy lg:grid-cols-4 lg:px-8">
            {STATS.map((s) => (
              <StatCounter
                key={s.label}
                {...s}
                className="text-center"
                valueClassName="font-display text-2xl font-semibold sm:text-3xl"
                labelClassName="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/75"
              />
            ))}
          </div>
        </div>
      </section>

      {/* H2 → "Une protection complète pour ce qui compte" */}
      <section className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-28">
        <div
          className="absolute left-0 top-0 -z-10 h-1/2 w-1/2 opacity-10"
          style={{
            backgroundImage: "url('/offers-bg.webp')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
            backgroundSize: "auto",
          }}
        />
        <div className="absolute -right-20 bottom-20 -z-10 size-72 rounded-full bg-cta/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Nos offres</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-foreground text-balance sm:text-4xl lg:text-5xl">
                Une protection complète pour ce qui compte
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
                Auto ou habitation, particulier, entreprise ou profession libérale&nbsp;: nous
                construisons votre couverture avec soin, sur mesure, au meilleur rapport
                qualité-prix.
              </p>
            </div>

            {/* Desktop scroll controls */}
            <div className="hidden shrink-0 items-center gap-4 lg:flex">
              <div className="h-1 w-40 overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full rounded-full bg-gradient-cta"
                  style={{ width: progressWidth }}
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Offre précédente"
                  onClick={() => scrollByCards(-1)}
                  disabled={!canPrev}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition-all hover:-translate-y-0.5 hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
                >
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Offre suivante"
                  onClick={() => scrollByCards(1)}
                  disabled={!canNext}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-navy text-white transition-all hover:-translate-y-0.5 hover:bg-navy/90 disabled:pointer-events-none disabled:opacity-30"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal scroll-snap gallery */}
          <div
            ref={trackRef}
            className="offers-track mt-14 -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-6 lg:-mx-8 lg:px-8"
          >
            {/* H3 → repeats per offer (8 items) */}
            {OFFERS.map((offer, i) => (
              <motion.div
                key={offer.title}
                data-offer-card
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
                className="group relative flex min-h-[440px] w-[82vw] shrink-0 snap-start flex-col overflow-hidden rounded-3xl shadow-card sm:min-h-[480px] sm:w-[380px] lg:min-h-[500px] lg:w-[400px]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 640px) 82vw, 400px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/10 transition-opacity duration-500 group-hover:from-navy/95" />
                </div>

                <div className="relative flex grow flex-col justify-between p-5 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex size-10 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-white backdrop-blur-sm sm:size-12">
                      <offer.icon className="size-5 sm:size-6" />
                    </span>
                    <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/90 backdrop-blur-sm sm:px-3 sm:text-[11px] sm:tracking-[0.14em]">
                      {offer.segment}
                    </span>
                  </div>

                  <div className="mt-6">
                    <span className="text-xs font-semibold tracking-[0.2em] text-white/60">
                      {String(i + 1).padStart(2, "0")} / {String(OFFERS.length).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl lg:text-[1.65rem]">
                      {offer.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/80 sm:line-clamp-2">
                      {offer.desc}
                    </p>

                    <ul className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                      {offer.points.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/85"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={offer.to}
                      aria-label={`En savoir plus sur ${offer.title}`}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5 sm:mt-6 sm:px-5 sm:py-2.5"
                    >
                      En savoir plus
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* trailing spacer so the last card can reach the edge on desktop */}
            <div aria-hidden className="w-px shrink-0 lg:w-2" />
          </div>

          {/* Mobile progress bar */}
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-border lg:hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-cta"
              style={{ width: progressWidth }}
            />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy py-16 text-white sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -left-40 top-1/3 size-[420px] rounded-full bg-sky/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 z-0 h-1/2 w-1/2 opacity-10">
          <Image
            src="/differentiators-bg.png"
            alt=""
            fill
            sizes="50vw"
            className="object-fill object-bottom-left"
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <Eyebrow tone="onDark">Notre différence</Eyebrow>
            {/* H2 → "Un agent à vos côtés, pas une machine." */}
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl lg:text-5xl">
              Un agent à vos côtés,{" "}
              <span className="font-display italic text-sky">pas une machine.</span>
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed text-pretty">
              Nous vous guidons avec expertise et proximité vers les solutions d'assurance les mieux
              adaptées à votre situation, en toute clarté.
            </p>
            <div className="mt-8">
              <Link
                href="/pourquoi-nous"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow-card transition-transform hover:-translate-y-0.5"
              >
                Découvrir nos engagements
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {/* H3 → repeats per item: "Conseil personnalisé", "Accompagnement humain", "Suivi précis et adapté", "Réactivité garantie" (4 items) */}
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-sky/20 text-sky">
                  <item.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* H2 → "Votre sérénité est notre engagement" */}
          <SectionHeading eyebrow="Confiance" title="Votre sérénité est notre engagement" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-border bg-white p-6 shadow-soft"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-sky/15 text-sky">
                  <item.icon className="size-5" />
                </div>
                <p className="mt-5 text-sm font-semibold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* H2 → "Ce que disent nos clients" */}
          <SectionHeading eyebrow="Témoignages" title="Ce que disent nos clients" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8"
              >
                <p className="text-foreground">"{testimonial.quote}"</p>
                <p className="mt-6 font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2 → "Prêt à être mieux protégé ?" */}
      <FinalCta
        title="Prêt à être mieux protégé ?"
        subtitle="Obtenez votre devis personnalisé en quelques clics. Simple, clair, efficace."
        primary={{ label: "Demander mon devis", to: "/devis" }}
        secondary={{ label: "Demander une consultation" }}
      />
    </SiteLayout>
  );
}

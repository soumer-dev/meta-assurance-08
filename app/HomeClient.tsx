"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Home,
  UserCheck,
  Heart,
  TrendingUp,
  Clock,
  ShieldCheck,
  Tag,
  EyeOff,
  Headphones,
} from "lucide-react";
import { SiteLayout } from "../components/layout/SiteLayout";
import { CtaButton, Eyebrow, FinalCta, GlassCard, SectionHeading } from "../components/ui/ui-bits";
import { StatCounter } from "../components/ui/StatCounter";

const STATS = [
  { target: 25000, suffix: "+", label: "Clients protégés" },
  { target: 98, suffix: "%", label: "De satisfaction" },
  { target: 25, suffix: " ans", label: "D'expertise" },
  { target: 24, suffix: "h/7j", label: "D'assistance" },
];

const OFFERS = [
  {
    icon: Car,
    title: "Assurance Auto",
    desc: "Une protection adaptée à chaque conducteur pour vous trouver la formule parfaite pour votre usage.",
    points: ["Responsabilité civile", "Assistance automobile", "Véhicule de remplacement"],
    to: "/particuliers/assurance-auto",
  },
  {
    icon: Home,
    title: "Assurance Habitation",
    desc: "Protégez votre patrimoine avec une couverture adaptée à votre logement et à vos besoins réels.",
    points: ["Responsabilité civile", "Suivi de sinistre dédié", "Remboursement  des dommages "],
    to: "/particuliers/assurance-habitation",
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
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-12 lg:px-8 lg:py-36">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
              <span className="size-1.5 rounded-full bg-sky" />
              Meta Assurances et Conseils
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.02] text-balance sm:text-5xl lg:text-7xl">
              La tranquillité d'esprit,{" "}
              <span className="font-display italic text-sky">assurée au quotidien</span>
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

      <section className="relative isolate overflow-hidden py-24 sm:py-28">
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
          <SectionHeading
            eyebrow="Nos offres"
            title="Une protection complète pour ce qui compte"
            subtitle="Auto ou habitation, nous construisons votre couverture avec soin, sur mesure, au meilleur rapport qualité-prix."
          />
          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {OFFERS.map((offer) => (
              <GlassCard key={offer.title} className="flex flex-col">
                <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-sky/15 text-sky">
                  <offer.icon className="size-7" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-foreground">{offer.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{offer.desc}</p>
                <ul className="mt-6 space-y-3">
                  {offer.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="size-4 text-sky">✓</span> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={offer.to}
                    className="group inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
                  >
                    En savoir plus
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy py-24 text-white sm:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -left-40 top-1/3 size-[420px] rounded-full bg-sky/15 blur-3xl" />
        <div
          className="absolute bottom-0 left-0 z-0 h-1/2 w-1/2 opacity-10"
          style={{
            backgroundImage: "url('/differentiators-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom left",
            backgroundSize: "100% 100%",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <Eyebrow>Notre différence</Eyebrow>
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

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
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

      <section className="bg-surface py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Témoignages" title="Ce que disent nos clients" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl border border-border bg-white p-8 shadow-card"
              >
                <p className="text-foreground">"{testimonial.quote}"</p>
                <p className="mt-6 font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Prêt à être mieux protégé ?"
        subtitle="Obtenez votre devis personnalisé en quelques clics. Simple, clair, efficace."
        primary={{ label: "Demander mon devis", to: "/devis" }}
        secondary={{ label: "Demander un conseil" }}
      />
    </SiteLayout>
  );
}

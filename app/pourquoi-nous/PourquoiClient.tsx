"use client";

import { SiteLayout } from "../../components/SiteLayout";
import { FinalCta, PageHero, SectionHeading } from "../../components/ui-bits";
import { StatCounter } from "../../components/StatCounter";
import { UserCheck, Workflow, HeartHandshake, Ear, Check } from "lucide-react";

const PILLARS = [
  {
    n: "01",
    icon: UserCheck,
    title: "Conseil personnalisé",
    desc: "Nous prenons le temps d'analyser votre situation en profondeur : profil, patrimoine, besoins et contraintes, pour vous garantir une protection réellement efficace. Pas de solution générique.",
    points: [
      "Analyse précise de votre profil",
      "Recommandations adaptées à vos besoins",
      "Solutions sur mesure, sans standardisation",
    ],
  },
  {
    n: "02",
    icon: Workflow,
    title: "Gestion simplifiée",
    desc: "Nous facilitons toutes vos démarches pour vous faire gagner du temps au quotidien. Chaque étape est simplifiée, expliquée et suivie par votre conseiller.",
    points: [
      "Un interlocuteur unique",
      "Démarches rapides et fluides",
      "Suivi clair de vos contrats",
    ],
  },
  {
    n: "03",
    icon: HeartHandshake,
    title: "Accompagnement complet",
    desc: "De la souscription à la gestion des sinistres, nous restons à vos côtés. Votre conseiller vous guide à chaque étape, sans vous laisser naviguer seul dans les démarches administratives.",
    points: [
      "Gestion complète des sinistres",
      "Conseiller dédié et joignable",
      "Suivi proactif de votre dossier",
    ],
  },
  {
    n: "04",
    icon: Ear,
    title: "Écoute et proximité",
    desc: "Chaque client bénéficie d'une attention personnalisée. Nous écoutons vos besoins, anticipons vos questions et vous accompagnons avec disponibilité et bienveillance.",
    points: [
      "Écoute active de vos besoins",
      "Conseillers disponibles et réactifs",
      "Relation humaine et de confiance",
    ],
  },
];

const STATS = [
  { target: 25000, suffix: "+", label: "Clients protégés" },
  { target: 98, suffix: "%", label: "Satisfaction client" },
  { target: 25, suffix: " ans", label: "D'expertise" },
  { target: 30, suffix: "+", label: "Assureurs partenaires" },
];

export function PourquoiClient() {
  return (
    <SiteLayout>
      <PageHero
        badge="Assuré en toute tranquillité"
        title="Pourquoi choisir Meta assurances et conseils ?"
        italicWords="Meta"
        subtitle="Parce que votre protection mérite plus qu'une offre standard, nous créons avec vous une couverture sur mesure, pensée pour vous."
        image="/hero-pourquoi.webp"
        cta={{ label: "Obtenir mon devis", to: "/devis" }}
      />

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Nos piliers" title="4 engagements fondamentaux" />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-card lg:p-10"
              >
                <div className="absolute right-6 top-6 font-display text-6xl font-semibold text-sky/15">
                  {pillar.n}
                </div>
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-sky/15 text-sky">
                  <pillar.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{pillar.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-sky" /> {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy py-24 text-white sm:py-28">
        <div
          className="absolute bottom-0 left-0 z-0 h-1/2 w-1/2 opacity-10"
          style={{
            backgroundImage: "url('/methode-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom left",
            backgroundSize: "auto",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">
                Nos chiffres clés
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Ce qui nous fait avancer
              </h2>
              <p className="mt-5 text-white/75 leading-relaxed">
                Se protéger et prévoir l'avenir est fondamental. Notre mission est de vous soutenir
                aujourd'hui comme demain avec des solutions fiables et adaptées à votre vie.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80">
                <span className="size-2 rounded-full bg-sky" />
                Agence Meta assurances et conseils 
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 lg:col-span-7">
              {STATS.map((stat) => (
                <StatCounter
                  key={stat.label}
                  {...stat}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
                  valueClassName="font-display text-4xl font-semibold text-sky sm:text-5xl"
                  labelClassName="mt-2 text-sm text-white/75"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Commencez votre protection aujourd'hui"
        subtitle="Rejoignez les 25 000 clients qui nous font confiance. Devis gratuit et sans."
        primary={{ label: "Obtenir mon devis gratuit", to: "/devis" }}
        secondary={{ label: "Rappel immédiat" }}
      />
    </SiteLayout>
  );
}

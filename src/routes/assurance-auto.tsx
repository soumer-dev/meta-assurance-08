import { createFileRoute } from "@tanstack/react-router";
import {
  Car,
  ShieldCheck,
  Wrench,
  PhoneCall,
  HeartHandshake,
  AlertTriangle,
  TrendingUp,
  Clock,
  UserX,
  Check,
  Search,
  ListChecks,
  FileCheck,
  HeadphonesIcon,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import {
  CtaButton,
  FinalCta,
  PageHero,
  PhoneButton,
  SectionHeading,
} from "@/components/ui-bits";
import heroAuto from "@/assets/hero-auto.jpg";

export const Route = createFileRoute("/assurance-auto")({
  head: () => ({
    meta: [
      { title: "Assurance Auto — Meta Assurances et Conseils" },
      {
        name: "description",
        content:
          "Votre assurance auto enfin optimisée : RC, tous risques, assistance 0 km, véhicule de remplacement. Devis gratuit et sans engagement.",
      },
      { property: "og:title", content: "Assurance Auto — Meta Assurances et Conseils" },
      { property: "og:description", content: "Couverture auto sur mesure, accompagnement humain, devis en 2 minutes." },
      { property: "og:image", content: heroAuto },
      { name: "twitter:image", content: heroAuto },
    ],
  }),
  component: AutoPage,
});

const PAINS = [
  { icon: TrendingUp, text: "Votre prime augmente chaque année sans explication claire" },
  { icon: AlertTriangle, text: "Vous payez des garanties inutiles qui gonflent votre facture" },
  { icon: UserX, text: "En cas de sinistre, vous naviguez seul dans les démarches" },
  { icon: Clock, text: "Votre agent actuel ne répond pas dans les délais" },
];

const SOLUTION = [
  "Analyse complète de votre profil et de vos besoins",
  "Garanties adaptées à votre usage réel",
  "Conseiller dédié joignable en moins de 15 min",
  "Gestion complète de vos sinistres",
];

const GUARANTEES = [
  {
    icon: ShieldCheck,
    title: "Responsabilité civile",
    desc: "Couverture obligatoire des dommages causés aux tiers : corporels, matériels et immatériels.",
  },
  {
    icon: Car,
    title: "Tous risques",
    desc: "Protection maximale pour votre véhicule, qu'il s'agisse d'un accident responsable ou non.",
  },
  {
    icon: PhoneCall,
    title: "Assistance 0 km",
    desc: "En panne devant chez vous ? Nous intervenons immédiatement, sans franchise de distance.",
  },
  {
    icon: Wrench,
    title: "Véhicule de remplacement",
    desc: "Véhicule de substitution disponible dès le premier jour en cas de sinistre.",
  },
  {
    icon: HeartHandshake,
    title: "Protection du conducteur",
    desc: "Indemnisation de vos préjudices corporels en cas d'accident, même responsable.",
  },
  {
    icon: HeadphonesIcon,
    title: "Bris de glace",
    desc: "Remplacement rapide de votre pare-brise sans impact sur votre bonus-malus.",
  },
];

const STEPS = [
  { n: "01", icon: Search, title: "Comprendre votre profil", desc: "Votre agent examine votre situation et vos habitudes de conduite pour identifier les garanties essentielles." },
  { n: "02", icon: ListChecks, title: "Comparer les options", desc: "Nous sélectionnons les offres les plus adaptées sur le marché pour votre véhicule et votre budget." },
  { n: "03", icon: FileCheck, title: "Garanties sur mesure", desc: "Vous recevez une recommandation claire, sans jargon, avec un rapport qualité-prix transparent." },
  { n: "04", icon: HeartHandshake, title: "Accompagnement et suivi", desc: "Nous vous guidons du début à la fin pour une protection auto complète, claire et efficace." },
];

function AutoPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="Assurance Auto"
        title="Votre assurance auto, enfin optimisée."
        italicWords="enfin optimisée."
        subtitle="Un accompagnement clair et personnalisé pour conduire l'esprit tranquille."
        image={heroAuto}
        cta={{ label: "Protégez mon véhicule", to: "/devis" }}
      />

      {/* PROBLEM */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Le constat"
            title="Reconnaissez-vous ces situations ?"
            subtitle="Trop d'assurés paient trop cher pour une couverture inadaptée. Il est temps d'y remédier."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {PAINS.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft"
              >
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <Icon className="size-5" />
                </div>
                <p className="pt-1.5 text-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-navy p-10 text-white shadow-elevated lg:p-14">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">
                  Notre solution
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  Une couverture optimisée, un prix juste
                </h3>
                <p className="mt-4 text-white/75 leading-relaxed">
                  Nos agents d'assurance vous accompagnent à chaque étape pour protéger votre
                  véhicule, sans compromis entre qualité et budget.
                </p>
              </div>
              <ul className="space-y-4 lg:col-span-7">
                {SOLUTION.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-sky text-navy">
                      <Check className="size-4" />
                    </div>
                    <span className="text-white/90">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaButton to="/devis">Protéger mon véhicule</CtaButton>
              <PhoneButton>+212 (0) 524 406 972</PhoneButton>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Garanties"
            title="Une protection complète à chaque kilomètre"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GUARANTEES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-sky/15 text-sky">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <CtaButton to="/devis">Obtenir mon devis gratuit</CtaButton>
            <PhoneButton>Demander un conseil</PhoneButton>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-navy py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-sky">
            Notre méthode
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Votre assurance en 4 étapes simples
          </h2>
          <ol className="mt-14 grid gap-6 lg:grid-cols-4">
            {STEPS.map(({ n, icon: Icon, title, desc }) => (
              <li
                key={n}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <span className="font-display text-4xl font-semibold text-sky/90">{n}</span>
                <div className="mt-4 inline-flex size-10 items-center justify-center rounded-xl bg-sky/15 text-sky">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCta
        title="Anticipez les imprévus sur la route"
        subtitle="Un devis gratuit et sans engagement en quelques clics."
        primary={{ label: "Démarrer mon devis", to: "/devis" }}
        secondary={{ label: "Rappel immédiat" }}
      />
    </SiteLayout>
  );
}

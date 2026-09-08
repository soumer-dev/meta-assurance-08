import { SiteLayout } from "../../../components/layout/SiteLayout";
import {
  CtaButton,
  Eyebrow,
  FinalCta,
  PageHero,
  PhoneButton,
  SectionHeading,
} from "../../../components/ui/ui-bits";
import {
  ShieldCheck,
  Hammer,
  TrafficCone,
  Repeat,
  HeartHandshake,
  AlertTriangle,
  TrendingUp,
  Clock,
  UserX,
  Search,
  ListChecks,
  FileCheck,
  User,
  Users,
  Flame,
  Scale,
  PhoneCall,
} from "lucide-react";

const PAINS = [
  { icon: TrendingUp, text: "Votre prime augmente chaque année sans explication claire" },
  { icon: AlertTriangle, text: "Vous payez des garanties inutiles qui gonflent votre facture" },
  { icon: UserX, text: "En cas de sinistre, vous naviguez seul dans les démarches" },
  { icon: Clock, text: "Votre agent actuel ne répond pas dans les délais" },
];

const SOLUTION = [
  "Analyse complète de votre profil et de vos besoins",
  "Expert en assurance dédié à votre écoute",
  "Garanties adaptées à votre usage réel",
  "Gestion complète de vos sinistres",
];

const GUARANTEES = [
  {
    icon: ShieldCheck,
    title: "Responsabilité civile",
    desc: "Couverture obligatoire des dommages causés aux tiers : corporels, matériels et immatériels.",
  },
  {
    icon: User,
    title: "Protection du conducteur",
    desc: "Prise en charge des dommages corporels subis par le conducteur en cas d'accident.",
  },
  {
    icon: Users,
    title: "Protection des personnes transportées",
    desc: "Indemnisation des passagers en cas de dommages corporels lors d'un sinistre.",
  },
  {
    icon: Flame,
    title: "Incendie & vol",
    desc: "Protection de votre véhicule contre les risques d'incendie, de vol et de tentative de vol.",
  },
  {
    icon: Hammer,
    title: "Bris de glace",
    desc: "Remplacement rapide de votre pare-brise sans impact sur votre bonus-malus.",
  },
  {
    icon: TrafficCone,
    title: "Panne & accident",
    desc: "Prise en charge rapide des dommages matériels suite à une panne ou un accident.",
  },
  {
    icon: Scale,
    title: "Protection juridique",
    desc: "Assistance et prise en charge des frais juridiques en cas de litige lié à votre véhicule.",
  },
  {
    icon: PhoneCall,
    title: "Assistance en cas de sinistre",
    desc: "Assistance rapide et accompagnement en cas de sinistre couvert par votre contrat.",
  },
  {
    icon: Repeat,
    title: "Véhicule de remplacement",
    desc: "Mise à disposition d'un véhicule temporaire en cas d'immobilisation du vôtre.",
  },
];

const STEPS = [
  {
    n: "01",
    icon: Search,
    title: "Comprendre votre profil",
    desc: "Votre agent examine votre situation et vos habitudes de conduite pour identifier les garanties essentielles.",
  },
  {
    n: "02",
    icon: ListChecks,
    title: "Comparer les options",
    desc: "Nous sélectionnons les offres les plus adaptées sur le marché pour votre véhicule et votre budget.",
  },
  {
    n: "03",
    icon: FileCheck,
    title: "Garanties sur mesure",
    desc: "Vous recevez une recommandation claire, sans jargon, avec un rapport qualité-prix transparent.",
  },
  {
    n: "04",
    icon: HeartHandshake,
    title: "Accompagnement et suivi",
    desc: "Nous vous guidons du début à la fin pour une protection auto complète, claire et efficace.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Assurance Auto à Marrakech",
  description:
    "Assurance auto RC, tous risques et assistance 0 km à Marrakech. Devis gratuit et sans engagement.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Meta Assurances et Conseils",
    url: "https://www.metassur.com",
  },
  areaServed: { "@type": "City", name: "Marrakech" },
  serviceType: "Assurance Auto",
  url: "https://www.metassur.com/particuliers/assurance-auto",
  offers: {
    "@type": "Offer",
    description: "Devis gratuit et sans engagement.",
    priceCurrency: "MAD",
  },
};

export const metadata = {
  title: "Assurance Auto au Maroc : Devis gratuit et adapté",
  description:
    "Protégez votre véhicule avec une assurance auto adaptée à vos besoins au Maroc. Profitez de garanties personnalisées et d’un accompagnement professionnel.",
  keywords: [
    "assurance voiture Maroc",
    "assurance automobile Marrakech",
    "contrat assurance auto",
    "assurance auto pas chère Maroc",
  ],
  alternates: { canonical: "/particuliers/assurance-auto" },
  openGraph: {
    title: "Assurance Auto au Maroc : Devis gratuit et adapté",
    description:
      "Protégez votre véhicule avec une assurance auto adaptée à vos besoins au Maroc. Profitez de garanties personnalisées et d’un accompagnement professionnel.",
    url: "/particuliers/assurance-auto",
    images: [{ url: "/hero-auto.webp", width: 1200, height: 630, alt: "Assurance auto Marrakech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assurance Auto au Maroc : Devis gratuit et adapté",
    description:
      "Protégez votre véhicule avec une assurance auto adaptée à vos besoins au Maroc. Profitez de garanties personnalisées et d’un accompagnement professionnel.",
    images: ["/hero-auto.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteLayout>
        {/* H1 → "Votre assurance auto, enfin optimisée." */}
        <PageHero
          badge="Assurance Auto"
          title="Votre assurance auto, enfin optimisée."
          italicWords="enfin optimisée."
          subtitle="Un accompagnement clair et personnalisé pour conduire l'esprit tranquille."
          image="/hero-auto.webp"
          imageAlt="Conducteur serein au volant, protégé par une assurance auto sur mesure à Marrakech"
          imageTitle="Assurance auto Marrakech - devis gratuit"
          cta={{ label: "Protégez mon véhicule", to: "/devis" }}
        />

        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            {/* H2 → "Reconnaissez-vous ces situations ?" */}
            <SectionHeading
              eyebrow="Le constat"
              title="Reconnaissez-vous ces situations ?"
              subtitle="Trop d'assurés paient trop cher pour une couverture inadaptée. Il est temps d'y remédier."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {PAINS.map((pain) => (
                <div
                  key={pain.text}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft"
                >
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                    <pain.icon className="size-5" />
                  </div>
                  <p className="pt-1.5 text-foreground">{pain.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-24 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-navy p-10 text-white shadow-elevated lg:p-14">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <Eyebrow tone="onDark">Notre solution</Eyebrow>
                  {/* H3 → "Une couverture optimisée, un prix juste" */}
                  {/* ⚠️ HEADING ISSUE: renders directly after the page's <h1> with no <h2> in between — level skip (H1 → H3). */}
                  <h3 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    Une couverture optimisée, un prix juste
                  </h3>
                  <p className="mt-4 leading-relaxed text-white/75">
                    Nos agents d'assurance vous accompagnent à chaque étape pour protéger votre
                    véhicule, sans compromis entre qualité et budget.
                  </p>
                </div>
                <ul className="space-y-4 lg:col-span-7">
                  {SOLUTION.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-sky text-navy">
                        <ShieldCheck className="size-4" />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <CtaButton to="/devis">Protéger mon véhicule</CtaButton>
                <PhoneButton>Demander une consultation</PhoneButton>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            {/* H2 → "Une protection complète à chaque kilomètre" */}
            <SectionHeading
              eyebrow="Garanties"
              title="Une protection complète à chaque kilomètre"
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* H3 → repeats per guarantee: "Responsabilité civile", "Protection du conducteur", "Protection des personnes transportées", "Incendie & vol", "Bris de glace", "Panne & accident", "Protection juridique", "Assistance en cas de sinistre", "Véhicule de remplacement" (9 items) */}
              {GUARANTEES.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-sky/15 text-sky">
                    <item.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <CtaButton to="/devis">Obtenir mon devis gratuit</CtaButton>
              <PhoneButton>Demander une consultation</PhoneButton>
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
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-sky">
              <Eyebrow tone="onDark">Notre méthode</Eyebrow>
            </p>
            {/* H2 → "Votre assurance en 4 étapes simples" */}
            <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Votre assurance en 4 étapes simples
            </h2>
            {/* H3 → repeats per step: "Comprendre votre profil", "Comparer les options", "Garanties sur mesure", "Accompagnement et suivi" (4 items) */}
            <ol className="mt-14 grid gap-6 lg:grid-cols-4">
              {STEPS.map((step) => (
                <li
                  key={step.n}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
                >
                  <span className="font-display text-4xl font-semibold text-sky/90">{step.n}</span>
                  <div className="mt-4 inline-flex size-10 items-center justify-center rounded-xl bg-sky/15 text-sky">
                    <step.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* H2 → "Anticipez les imprévus sur la route" */}
        <FinalCta
          title="Anticipez les imprévus sur la route"
          subtitle="Un devis gratuit et sans engagement en quelques clics."
          primary={{ label: "Démarrer mon devis", to: "/devis" }}
          secondary={{ label: "Demander une consultation" }}
        />
      </SiteLayout>
    </>
  );
}

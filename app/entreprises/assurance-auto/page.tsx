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
  {
    icon: TrendingUp,
    text: "Vos coûts d’assurance augmentent avec l’évolution de votre parc",
  },
  {
    icon: AlertTriangle,
    text: "Vos véhicules n’ont pas toujours des garanties adaptées à leurs usages",
  },
  {
    icon: UserX,
    text: "La gestion de plusieurs véhicules multiplie les démarches",
  },
  {
    icon: Clock,
    text: "Un véhicule immobilisé peut rapidement perturber votre activité",
  },
];

const SOLUTION = [
  "Analyse de vos véhicules et de leurs usages",
  "Garanties adaptées à votre activité",
  "Conseiller dédié à votre entreprise",
  "Accompagnement en cas de sinistre",
];

const GUARANTEES = [
  {
    icon: ShieldCheck,
    title: "Responsabilité civile",
    desc: "Couverture des dommages causés aux tiers par les véhicules assurés.",
  },
  {
    icon: User,
    title: "Protection du conducteur",
    desc: "Protection des conducteurs de vos véhicules professionnels selon les garanties souscrites.",
  },
  {
    icon: Users,
    title: "Protection des passagers",
    desc: "Couverture des passagers transportés dans les véhicules de l’entreprise.",
  },
  {
    icon: Flame,
    title: "Incendie & vol",
    desc: "Protection contre l’incendie, le vol et la tentative de vol.",
  },
  {
    icon: Hammer,
    title: "Bris de glace",
    desc: "Prise en charge des vitrages couverts selon votre contrat.",
  },
  {
    icon: TrafficCone,
    title: "Dommages au véhicule",
    desc: "Protection contre certains dommages matériels selon la formule choisie.",
  },
  {
    icon: Scale,
    title: "Protection juridique",
    desc: "Assistance en cas de litige lié à vos véhicules professionnels.",
  },
  {
    icon: PhoneCall,
    title: "Assistance & dépannage",
    desc: "Accompagnement en cas de panne ou de sinistre couvert.",
  },
  {
    icon: Repeat,
    title: "Véhicule de remplacement",
    desc: "Une solution temporaire peut être prévue en cas d’immobilisation.",
  },
];

const STEPS = [
  {
    n: "01",
    icon: Search,
    title: "Analyser votre parc",
    desc: "Nous étudions vos véhicules, leurs usages et vos besoins.",
  },
  {
    n: "02",
    icon: ListChecks,
    title: "Comparer les options",
    desc: "Nous recherchons les garanties adaptées à votre entreprise.",
  },
  {
    n: "03",
    icon: FileCheck,
    title: "Adapter la couverture",
    desc: "Vous recevez une solution claire et adaptée à votre parc.",
  },
  {
    n: "04",
    icon: HeartHandshake,
    title: "Vous accompagner",
    desc: "Nous suivons vos contrats, vos véhicules et vos sinistres.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Assurance auto pour entreprises au Maroc",
  description:
    "Protégez les véhicules de votre entreprise avec une assurance auto professionnelle adaptée aux besoins de votre flotte au Maroc.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Meta Assurances et Conseils",
    url: "https://www.metassur.com",
  },
  areaServed: {
    "@type": "City",
    name: "Marrakech",
  },
  serviceType: "Assurance Auto Entreprise",
  url: "https://www.metassur.com/entreprises/assurance-auto",
  offers: {
    "@type": "Offer",
    description: "Devis gratuit et sans engagement.",
    priceCurrency: "MAD",
  },
};

export const metadata = {
  title: "Assurance Auto Entreprise Maroc : Flotte auto",
  description:
    "Protégez les véhicules de votre entreprise avec une assurance auto professionnelle adaptée aux besoins de votre flotte au Maroc.",
  alternates: {
    canonical: "/entreprises/assurance-auto",
  },
  openGraph: {
    title: "Assurance Auto Entreprise Maroc : Flotte auto",
    description:
      "Protégez les véhicules de votre entreprise avec une assurance auto professionnelle adaptée aux besoins de votre flotte au Maroc.",
    url: "/entreprises/assurance-auto",
    images: [
      {
        url: "/hero-auto.webp",
        width: 1200,
        height: 630,
        alt: "Assurance auto pour véhicules d’entreprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assurance Auto Entreprise Maroc : Flotte auto",
    description:
      "Une assurance adaptée aux véhicules de votre entreprise et à leurs usages professionnels.",
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
        <PageHero
          badge="Assurance Auto Entreprise"
          title="Assurance auto pour entreprises au Maroc "
          italicWords="auto pour entreprises"
          subtitle="Protégez vos véhicules professionnels avec des garanties adaptées à votre activité."
          image="/hero-auto.webp"
          imageAlt="Véhicules d’entreprise couverts par une assurance auto professionnelle"
          imageTitle="Assurance auto pour entreprises au Maroc"
          cta={{
            label: "Assurer mes véhicules",
            to: "/devis",
          }}
        />

        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Le constat"
              title="Reconnaissez-vous ces situations ?"
              subtitle="Gérer plusieurs véhicules demande une couverture claire, adaptée et facile à suivre."
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

                  <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    Une couverture adaptée à votre parc
                  </h2>

                  <p className="mt-4 leading-relaxed text-white/75">
                    Nous vous accompagnons pour assurer vos véhicules professionnels avec des
                    garanties adaptées à vos besoins.
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
                <CtaButton to="/devis">Assurer mes véhicules</CtaButton>

                <PhoneButton>Demander une consultation</PhoneButton>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Garanties"
              title="Une protection adaptée à vos véhicules"
              subtitle="Choisissez les garanties adaptées à vos usages professionnels."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

            <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Votre assurance en 4 étapes simples
            </h2>

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

        <FinalCta
          title="Protégez les véhicules de votre entreprise"
          subtitle="Un devis gratuit et sans engagement adapté à vos besoins."
          primary={{
            label: "Démarrer mon devis",
            to: "/devis",
          }}
          secondary={{
            label: "Demander une consultation",
          }}
        />
      </SiteLayout>
    </>
  );
}

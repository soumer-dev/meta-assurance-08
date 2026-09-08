import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "../../components/layout/SiteLayout";
import {
  CtaButton,
  Eyebrow,
  FinalCta,
  PageHero,
  PhoneButton,
  SectionHeading,
} from "../../components/ui/ui-bits";
import {
  Car,
  Building2,
  Scale,
  Check,
  Stethoscope,
  Calculator,
  GraduationCap,
  Briefcase,
  Eye,
  ShieldAlert,
  ClipboardList,
  SlidersHorizontal,
  UserCheck,
  ShieldCheck,
  Clock,
  LifeBuoy,
  ArrowRight,
  Footprints,
} from "lucide-react";

const VOLETS = [
  {
    n: "01",
    icon: Car,
    title: "Assurance auto professionnelle",
    intro:
      "Protégez le véhicule utilisé pour vos déplacements professionnels avec une formule adaptée à votre usage et à votre niveau de protection.",
    items: [
      "Responsabilité civile automobile",
      "Dommages au véhicule selon la formule choisie",
      "Vol, incendie et bris de glace selon les garanties souscrites",
      "Assistance automobile",
      "Véhicule de remplacement selon les conditions du contrat",
    ],
  },
  {
    n: "02",
    icon: Building2,
    title: "Assurance multirisque professionnelle",
    intro:
      "Protégez votre cabinet, vos bureaux, vos équipements et vos documents contre les principaux dommages susceptibles de perturber votre activité.",
    items: [
      "Incendie, explosion et dégâts des eaux",
      "Vol, vandalisme et bris de glace",
      "Dommages électriques aux équipements",
      "Protection du mobilier, du matériel et des aménagements",
      "Pertes d'exploitation selon la formule retenue",
    ],
  },
  {
    n: "03",
    icon: Scale,
    title: "Responsabilité civile professionnelle",
    intro:
      "La responsabilité civile professionnelle constitue le cœur de la protection d'un métier libéral. Elle peut couvrir les conséquences financières d'une erreur, d'une omission, d'une négligence ou d'un manquement commis dans le cadre de la prestation professionnelle.",
    items: [
      "Dommages corporels causés à un client ou à un tiers",
      "Dommages matériels liés à la prestation",
      "Préjudices financiers couverts par le contrat",
      "Frais de défense et de recours selon les garanties",
      "Protection adaptée aux obligations et risques propres à chaque profession",
    ],
  },
];

const PUBLIC = [
  { icon: Stethoscope, title: "Médecins, chirurgiens-dentistes et professionnels de santé" },
  { icon: Scale, title: "Avocats, notaires et professions juridiques" },
  { icon: Building2, title: "Architectes, ingénieurs et bureaux d'études" },
  { icon: Calculator, title: "Experts-comptables, commissaires aux comptes et consultants" },
  {
    icon: GraduationCap,
    title: "Professionnels du conseil, de la formation et de l'accompagnement",
  },
  { icon: Briefcase, title: "Autres activités libérales réglementées ou non réglementées" },
];

const REGROUPER = [
  { icon: Eye, text: "Bénéficier d'une vision globale de vos risques" },
  { icon: ShieldAlert, text: "Éviter les doublons ou les zones non couvertes entre les contrats" },
  { icon: ClipboardList, text: "Simplifier le suivi de vos garanties et échéances" },
  { icon: SlidersHorizontal, text: "Adapter les plafonds à la valeur de votre activité" },
  { icon: UserCheck, text: "Disposer d'un interlocuteur unique en cas de besoin ou de sinistre" },
];

const POURQUOI = [
  "Un conseiller dédié qui comprend les exigences de votre profession",
  "Une étude personnalisée de votre cabinet, de vos déplacements et de vos responsabilités",
  "Des garanties sélectionnées selon vos risques réels",
  "Une présentation claire des plafonds, franchises et exclusions",
  "Un accompagnement humain de la souscription à la gestion du sinistre",
];

const ENGAGEMENTS = [
  { icon: UserCheck, text: "Conseiller dédié" },
  { icon: ShieldCheck, text: "Garanties adaptées à votre activité" },
  { icon: Clock, text: "Réponse rapide et accompagnement humain" },
  { icon: LifeBuoy, text: "Assistance et suivi en cas de sinistre" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Assurance pour professionnels au Maroc",
  description:
    "Protégez votre activité professionnelle avec des solutions d'assurance adaptées aux besoins des indépendants, commerçants et entreprises au Maroc.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Meta Assurances et Conseils",
    url: "https://www.metassur.com",
  },
  areaServed: { "@type": "Country", name: "Maroc" },
  serviceType: "Assurance professions libérales",
  url: "https://www.metassur.com/assurance-pour-professionnels",
  offers: {
    "@type": "Offer",
    description: "Devis gratuit et sans engagement.",
    priceCurrency: "MAD",
  },
};

export const metadata = {
  title: "Assurance pour professionnels au Maroc",
  description:
    "Protégez votre activité professionnelle avec des solutions d'assurance adaptées aux besoins des indépendants, commerçants et entreprises au Maroc.",
  alternates: { canonical: "/assurance-pour-professionnels" },
  openGraph: {
    title: "Assurance pour professionnels au Maroc",
    description:
      "Protégez votre activité professionnelle avec des solutions d'assurance adaptées aux besoins des indépendants, commerçants et entreprises au Maroc.",
    url: "/assurance-pour-professionnels",
    images: [
      {
        url: "/assurance-professions-liberales-hero.webp",
        width: 1200,
        height: 630,
        alt: "Assurance professions libérales Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assurance pour professionnels au Maroc",
    description:
      "Protégez votre activité professionnelle avec des solutions d'assurance adaptées aux besoins des indépendants, commerçants et entreprises au Maroc.",
    images: ["/assurance-professions-liberales-hero.webp"],
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
        {/* H1 */}
        <PageHero
          badge="Offre Professions Libérales"
          title="Assurance pour professionnels au Maroc"
          italicWords="professionnels"
          subtitle="Une protection complète pour votre activité, votre cabinet, votre véhicule et votre responsabilité professionnelle."
          image="/assurance-professions-liberales-hero.webp"
          imageAlt="Professionnel libéral dans son cabinet, couvert par une offre d'assurance globale"
          imageTitle="Assurance professions libérales Maroc"
          cta={{ label: "Demander mon devis", to: "/devis" }}
        />

        {/* Intro */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src="/cabinet-professionnel-expertise.webp"
                    alt="Professionnel libéral au travail dans son cabinet couvert par une assurance sur mesure"
                    title="Assurance professions libérales Maroc"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <SectionHeading
                  align="left"
                  eyebrow="Notre expertise"
                  title="Une offre pensée pour les exigences de votre métier"
                />
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Médecins, dentistes, avocats, architectes, experts-comptables, consultants,
                    ingénieurs, notaires et autres professionnels libéraux exercent une activité
                    fondée sur l'expertise, la confiance et la responsabilité.
                  </p>
                  <p>
                    Un incident dans le cabinet, une erreur professionnelle, un dommage causé à un
                    client ou un accident impliquant le véhicule utilisé pour l'activité peut avoir
                    des conséquences importantes. L'offre globale Metassur permet de réunir les
                    principales protections dans une solution cohérente et adaptée à votre
                    profession.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Une couverture globale en trois volets */}
        <section className="bg-surface py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Notre offre" title="Une couverture globale en trois volets" />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {VOLETS.map((volet) => (
                <div
                  key={volet.n}
                  className="rounded-3xl border border-border bg-white p-8 shadow-soft"
                >
                  <span className="font-display text-3xl font-semibold text-sky/80">{volet.n}</span>
                  <div className="mt-4 inline-flex size-12 items-center justify-center rounded-2xl bg-sky/15 text-sky">
                    <volet.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{volet.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {volet.intro}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {volet.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-sky" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <CtaButton to="/devis">Obtenir mon devis gratuit</CtaButton>
              <PhoneButton>Demander une consultation</PhoneButton>
            </div>
          </div>
        </section>

        {/* La RC d'exploitation en complément */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Eyebrow>En complément</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  La responsabilité civile d'exploitation en complément
                </h2>
                <div className="mt-6 flex items-start gap-4">
                  <div className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky/15 text-sky">
                    <Footprints className="size-5" />
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    L'offre peut également intégrer une responsabilité civile d'exploitation pour
                    couvrir les incidents liés au fonctionnement quotidien du cabinet : chute d'un
                    visiteur, dommage causé par un équipement, dégât affectant un local voisin ou
                    incident provoqué par un collaborateur.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/entreprises/assurance-responsabilite-civile-exploitation"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-ink"
                  >
                    En savoir plus sur la RC d'exploitation
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src="/rc-exploitation-cabinet-liberal.webp"
                    alt="Visiteur accueilli dans un cabinet libéral couvert par la responsabilité civile d'exploitation"
                    title="Responsabilité civile d'exploitation Maroc"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* À quels professionnels s'adresse cette offre */}
        <section className="bg-surface py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Public concerné"
              title="À quels professionnels s'adresse cette offre ?"
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PUBLIC.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-sky/15 text-sky">
                    <item.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi regrouper vos assurances professionnelles */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Les avantages"
              title="Pourquoi regrouper vos assurances professionnelles ?"
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {REGROUPER.map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft"
                >
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky/15 text-sky">
                    <item.icon className="size-5" />
                  </div>
                  <p className="pt-1.5 text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Meta Assurances et Conseils */}
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
          <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Eyebrow tone="onDark">Notre accompagnement</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  Pourquoi choisir Meta Assurances et Conseils ?
                </h2>
              </div>
              <ul className="space-y-4 lg:col-span-7">
                {POURQUOI.map((item) => (
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
              <CtaButton to="/devis">Demander mon devis</CtaButton>
              <PhoneButton>Demander une consultation</PhoneButton>
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Votre projet"
              title="Prêt à mieux protéger votre activité ?"
              subtitle="Obtenez une étude personnalisée de vos risques et un devis adapté à votre métier, à votre budget et à votre niveau de protection."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ENGAGEMENTS.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft"
                >
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky/15 text-sky">
                    <item.icon className="size-5" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* H2 → "Demandez votre devis personnalisé" */}
        <FinalCta
          title="Demandez votre devis personnalisé"
          subtitle="Un conseiller Meta Assurances et Conseils analyse vos besoins et vous accompagne dans le choix d'une couverture adaptée à votre activité."
          primary={{ label: "Demander mon devis", to: "/devis" }}
          secondary={{ label: "Demander une consultation" }}
        />
      </SiteLayout>
    </>
  );
}

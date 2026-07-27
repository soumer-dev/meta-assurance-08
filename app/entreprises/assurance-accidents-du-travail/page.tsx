import Image from "next/image";
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
  HardHat,
  Factory,
  Truck,
  UtensilsCrossed,
  ShieldCheck,
  Building2,
  Footprints,
  Wrench,
  Briefcase,
  Car,
  AlertTriangle,
  Stethoscope,
  Clock,
  Activity,
  HeartHandshake,
  HeartPulse,
  ClipboardList,
  FileText,
  FileCheck,
  Archive,
} from "lucide-react";

const SECTORS = [
  { icon: HardHat, title: "Bâtiment et travaux publics" },
  { icon: Factory, title: "Industrie, maintenance et ateliers" },
  { icon: Truck, title: "Transport et logistique" },
  { icon: UtensilsCrossed, title: "Hôtellerie, restauration et commerce" },
  { icon: ShieldCheck, title: "Nettoyage, sécurité et gardiennage" },
  { icon: Building2, title: "Bureaux et entreprises de services" },
];

const EVENEMENTS = [
  { icon: Footprints, text: "Chute ou blessure dans les locaux professionnels" },
  { icon: Wrench, text: "Accident causé par une machine, un outil ou un équipement" },
  { icon: HardHat, text: "Incident survenu sur un chantier ou dans un atelier" },
  { icon: Briefcase, text: "Accident pendant une mission ou un déplacement professionnel" },
  {
    icon: Car,
    text: "Accident de trajet entre le domicile et le lieu de travail, dans les conditions applicables",
  },
  { icon: AlertTriangle, text: "Autre événement soudain lié à l'exécution du travail" },
];

const GARANTIES = [
  {
    icon: Stethoscope,
    title: "Frais médicaux et soins",
    desc: "Selon le contrat, les consultations, médicaments, examens, soins et frais d'hospitalisation consécutifs à l'accident peuvent être pris en charge.",
  },
  {
    icon: Clock,
    title: "Incapacité temporaire",
    desc: "Une indemnisation peut être prévue lorsque le salarié ne peut pas reprendre son activité pendant une période déterminée.",
  },
  {
    icon: Activity,
    title: "Invalidité permanente",
    desc: "Lorsque l'accident entraîne une réduction durable des capacités du salarié, une indemnité ou une rente peut être versée selon les conditions du contrat.",
  },
  {
    icon: HeartHandshake,
    title: "Indemnités en cas de décès",
    desc: "Lorsque l'accident du travail entraîne le décès du salarié, des indemnités ou rentes peuvent être versées à ses ayants droit, notamment au conjoint et aux enfants bénéficiaires, selon la réglementation applicable et les conditions prévues au contrat.",
  },
];

const REFLEXES = [
  {
    n: "01",
    icon: HeartPulse,
    title: "Assurer immédiatement la prise en charge du salarié",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Recueillir les informations sur les circonstances de l'accident",
  },
  {
    n: "03",
    icon: FileText,
    title: "Effectuer la déclaration dans les délais applicables",
  },
  {
    n: "04",
    icon: FileCheck,
    title: "Transmettre les documents médicaux et administratifs demandés",
  },
  {
    n: "05",
    icon: Archive,
    title: "Conserver les justificatifs utiles au traitement du dossier",
  },
];

const POURQUOI = [
  "Analyse des risques propres à votre activité",
  "Conseil sur les garanties et niveaux de couverture",
  "Explication claire des plafonds, franchises et exclusions",
  "Mise à jour du contrat lors de l'évolution des effectifs",
  "Accompagnement dans les démarches en cas de sinistre",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Assurance accidents du travail au Maroc",
  description:
    "Protégez vos salariés contre les conséquences des accidents du travail grâce à une couverture adaptée à votre entreprise au Maroc.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Meta Assurances et Conseils",
    url: "https://metassur.com",
  },
  areaServed: { "@type": "City", name: "Marrakech" },
  serviceType: "Assurance accidents du travail",
  url: "https://metassur.com/entreprises/assurance-accidents-du-travail",
  offers: {
    "@type": "Offer",
    description: "Devis gratuit et sans engagement.",
    priceCurrency: "MAD",
  },
};

export const metadata = {
  title: "Assurance accidents du travail au Maroc",
  description:
    "Protégez vos salariés contre les conséquences des accidents du travail grâce à une couverture adaptée à votre entreprise au Maroc.",
  alternates: { canonical: "/entreprises/assurance-accidents-du-travail" },
  openGraph: {
    title: "Assurance accidents du travail au Maroc",
    description:
      "Protégez vos salariés contre les conséquences des accidents du travail grâce à une couverture adaptée à votre entreprise au Maroc.",
    url: "/entreprises/assurance-accidents-du-travail",
    images: [
      {
        url: "/hero-accidents-travail.webp",
        width: 1200,
        height: 630,
        alt: "Assurance accidents du travail Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assurance accidents du travail au Maroc",
    description:
      "Protégez vos salariés contre les conséquences des accidents du travail grâce à une couverture adaptée à votre entreprise au Maroc.",
    images: ["/hero-accidents-travail.webp"],
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
        {/* H1 → "Assurance accidents du travail au Maroc" */}
        <PageHero
          badge="Assurance AT"
          title="Assurance accidents du travail au Maroc"
          italicWords="au Maroc"
          subtitle="Protégez vos salariés et votre entreprise contre les conséquences humaines et financières d'un accident survenu dans le cadre de l'activité professionnelle."
          image="/hero-accidents-travail.webp"
          cta={{ label: "Demander mon devis", to: "/devis" }}
        />

        {/* Intro */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            {/* H2 → "Une protection essentielle pour l'employeur et ses salariés" */}
            <div className="mb-14">
              <SectionHeading
                align="center"
                eyebrow="Comprendre le risque"
                title="Une protection essentielle pour l'employeur et ses salariés"
              />
            </div>
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src="/protection-employeur-salaries.webp"
                    alt="Une protection essentielle pour l'employeur et ses salariés"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Un accident du travail est un événement soudain survenu par le fait ou à
                    l'occasion du travail. Il peut se produire dans un bureau, un commerce, un
                    atelier, un chantier, un entrepôt ou pendant un déplacement professionnel. La
                    couverture peut également concerner le risque de trajet, notamment l'accident
                    survenu sur le parcours habituel entre le domicile du salarié et son lieu de
                    travail, sous réserve des conditions prévues par la réglementation et le
                    contrat. Au-delà de ses conséquences humaines, un accident peut entraîner des
                    frais médicaux, une interruption de travail et des obligations importantes pour
                    l'employeur.
                  </p>
                  <p>
                    L'assurance accidents du travail permet d'organiser la prise en charge du
                    salarié et de limiter l'impact financier du sinistre, conformément aux garanties
                    souscrites et à la réglementation applicable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* À qui s'adresse cette assurance */}
        <section className="bg-surface py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            {/* H2 → "À qui s'adresse cette assurance ?" */}
            <SectionHeading
              eyebrow="Public concerné"
              title="À qui s'adresse cette assurance ?"
              subtitle="Cette assurance concerne les entreprises employant un ou plusieurs salariés, quelle que soit leur taille. Elle est particulièrement importante dans les secteurs exposés aux risques physiques, sans être limitée à ces seules activités."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* H3 → repeats per sector: "Bâtiment et travaux publics", "Industrie, maintenance et ateliers", "Transport et logistique", "Hôtellerie, restauration et commerce", "Nettoyage, sécurité et gardiennage", "Bureaux et entreprises de services" (6 items) */}
              {SECTORS.map((item) => (
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

        {/* Quels événements peuvent être concernés */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            {/* H2 → "Quels événements peuvent être concernés ?" */}
            <SectionHeading
              eyebrow="Cas de couverture"
              title="Quels événements peuvent être concernés ?"
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {EVENEMENTS.map((event) => (
                <div
                  key={event.text}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft"
                >
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky/15 text-sky">
                    <event.icon className="size-5" />
                  </div>
                  <p className="pt-1.5 text-foreground">{event.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Les principales garanties */}
        <section className="bg-surface py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            {/* H2 → "Les principales garanties" */}
            <SectionHeading eyebrow="Garanties" title="Les principales garanties" />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* H3 → repeats per garantie: "Frais médicaux et soins", "Incapacité temporaire", "Invalidité permanente", "Indemnités en cas de décès" (4 items) */}
              {GARANTIES.map((item) => (
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
              <PhoneButton>Demander un conseil</PhoneButton>
            </div>
          </div>
        </section>

        {/* Que faire en cas d'accident */}
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
              <Eyebrow tone="onDark">Les bons réflexes</Eyebrow>
            </p>
            {/* H2 → "Que faire en cas d'accident ?" */}
            <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Que faire en cas d'accident ?
            </h2>
            {/* H3 → repeats per step: "Assurer immédiatement la prise en charge du salarié", "Recueillir les informations sur les circonstances de l'accident", "Effectuer la déclaration dans les délais applicables", "Transmettre les documents médicaux et administratifs demandés", "Conserver les justificatifs utiles au traitement du dossier" (5 items) */}
            <ol className="mt-14 grid gap-6 lg:grid-cols-5">
              {REFLEXES.map((step) => (
                <li
                  key={step.n}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
                >
                  <span className="font-display text-4xl font-semibold text-sky/90">{step.n}</span>
                  <div className="mt-4 inline-flex size-10 items-center justify-center rounded-xl bg-sky/15 text-sky">
                    <step.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-snug">{step.title}</h3>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pourquoi choisir Meta Assurances et Conseils */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-navy p-10 text-white shadow-elevated lg:p-14">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <Eyebrow tone="onDark">Notre accompagnement</Eyebrow>
                  {/* H3 → "Pourquoi choisir Meta Assurances et Conseils ?" */}
                  {/* ⚠️ HEADING ISSUE: this section has no <h2> of its own (only the Eyebrow span "Notre accompagnement") — the whole block relies on an <h3> with no parent heading landmark. */}
                  <h3 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    Pourquoi choisir Meta Assurances et Conseils ?
                  </h3>
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
                <PhoneButton>Demander un conseil</PhoneButton>
              </div>
            </div>
          </div>
        </section>

        {/* H2 → "Demandez votre devis personnalisé" */}
        <FinalCta
          title="Demandez votre devis personnalisé"
          subtitle="Un conseiller Meta Assurances et Conseils analyse vos besoins et vous accompagne dans le choix d'une couverture adaptée à votre activité."
          primary={{ label: "Demander mon devis", to: "/devis" }}
          secondary={{ label: "Rappel immédiat" }}
        />
      </SiteLayout>
    </>
  );
}

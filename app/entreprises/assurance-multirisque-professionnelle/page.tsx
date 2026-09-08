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
  Store,
  Briefcase,
  Building2,
  UtensilsCrossed,
  Stethoscope,
  Factory,
  Flame,
  Droplet,
  ShieldAlert,
  Zap,
  CloudLightning,
  Scale,
  TrendingDown,
  Cpu,
  Package,
  AlertTriangle,
  Users,
  FileText,
  ShieldCheck,
} from "lucide-react";

const PUBLIC = [
  { icon: Store, title: "Commerçants et artisans" },
  { icon: Briefcase, title: "Professions libérales et cabinets" },
  { icon: Building2, title: "Entreprises de services et agences" },
  { icon: UtensilsCrossed, title: "Hôtels, restaurants et cafés" },
  { icon: Stethoscope, title: "Établissements de santé ou d'enseignement" },
  { icon: Factory, title: "Ateliers, entrepôts et entreprises industrielles" },
  { icon: Building2, title: "PME et bureaux professionnels" },
];

const GARANTIES = [
  {
    icon: Flame,
    title: "Incendie et explosion",
    desc: "La garantie peut couvrir les dommages causés aux locaux, aménagements, équipements et stocks par un incendie, la fumée ou une explosion.",
  },
  {
    icon: Droplet,
    title: "Dégâts des eaux",
    desc: "Les dommages liés à une fuite, une rupture de canalisation ou une infiltration peuvent être pris en charge selon les conditions du contrat.",
  },
  {
    icon: ShieldAlert,
    title: "Vol et vandalisme",
    desc: "Le matériel, les marchandises ou certains biens peuvent être couverts en cas de vol, tentative de vol ou dégradation, sous réserve des mesures de sécurité exigées.",
  },
  {
    icon: Zap,
    title: "Dommages électriques",
    desc: "Une surtension, un court-circuit ou un incident électrique peut endommager les appareils informatiques, électroniques ou industriels.",
  },
  {
    icon: CloudLightning,
    title: "Bris de glace et événements climatiques",
    desc: "Les vitrines, enseignes, portes vitrées et certains dommages provoqués par des événements climatiques peuvent être inclus selon la formule retenue.",
  },
];

const EVALUATION = [
  { icon: Building2, text: "Valeur des locaux, aménagements et installations" },
  { icon: Cpu, text: "Valeur du matériel informatique et des machines" },
  { icon: Package, text: "Montant moyen des stocks et marchandises" },
  { icon: AlertTriangle, text: "Risques spécifiques au métier exercé" },
  { icon: Users, text: "Responsabilités envers les clients et les tiers" },
  { icon: TrendingDown, text: "Conséquences financières d'une interruption d'activité" },
  { icon: FileText, text: "Plafonds, franchises, exclusions et mesures de prévention" },
];

const POURQUOI = [
  "Diagnostic des risques propres à votre activité",
  "Construction d'une couverture adaptée à vos biens et responsabilités",
  "Explication des garanties, plafonds et exclusions",
  "Conseil sur les mesures de prévention",
  "Accompagnement lors de la déclaration et du suivi des sinistres",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Assurance multirisque professionnelle au Maroc",
  description:
    "Protégez vos locaux, équipements, stocks et votre activité avec une assurance multirisque professionnelle adaptée au Maroc.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Meta Assurances et Conseils",
    url: "https://www.metassur.com",
  },
  areaServed: { "@type": "City", name: "Marrakech" },
  serviceType: "Assurance multirisque professionnelle",
  url: "https://www.metassur.com/entreprises/assurance-multirisque-professionnelle",
  offers: {
    "@type": "Offer",
    description: "Devis gratuit et sans engagement.",
    priceCurrency: "MAD",
  },
};

export const metadata = {
  title: "Assurance multirisque professionnelle au Maroc",
  description:
    "Protégez vos locaux, équipements, stocks et votre activité avec une assurance multirisque professionnelle adaptée au Maroc.",
  alternates: { canonical: "/entreprises/assurance-multirisque-professionnelle" },
  openGraph: {
    title: "Assurance multirisque professionnelle au Maroc",
    description:
      "Protégez vos locaux, équipements, stocks et votre activité avec une assurance multirisque professionnelle adaptée au Maroc.",
    url: "/entreprises/assurance-multirisque-professionnelle",
    images: [
      {
        url: "/hero-multirisque-professionnelle.webp",
        width: 1200,
        height: 630,
        alt: "Assurance multirisque professionnelle Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assurance multirisque professionnelle au Maroc",
    description:
      "Protégez vos locaux, équipements, stocks et votre activité avec une assurance multirisque professionnelle adaptée au Maroc.",
    images: ["/hero-multirisque-professionnelle.webp"],
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
          badge="Assurance Multirisque Pro"
          title="Assurance multirisque professionnelle"
          italicWords="professionnelle"
          subtitle="Protégez vos locaux, vos équipements, vos marchandises, votre responsabilité et la continuité de votre activité face aux principaux risques professionnels."
          image="/hero-multirisque-professionnelle.webp"
          imageAlt="Locaux professionnels protégés par une assurance multirisque adaptée à l'activité"
          imageTitle="Assurance multirisque professionnelle Maroc"
          cta={{ label: "Demander mon devis", to: "/devis" }}
        />

        {/* Intro */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src="/couverture-globale-activite.webp"
                    alt="Entrepôt professionnel couvert par une assurance multirisque adaptée à l'activité"
                    title="Assurance multirisque professionnelle Maroc"
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
                  title="Une couverture globale pour votre activité"
                />
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Un incendie, un dégât des eaux, un vol ou un dommage électrique peut endommager
                    les biens professionnels et interrompre l'activité. L'assurance multirisque
                    professionnelle regroupe plusieurs garanties dans un même contrat afin de
                    protéger le patrimoine de l'entreprise et de faciliter sa reprise après un
                    sinistre.
                  </p>
                  <p>
                    La couverture doit être adaptée au secteur d'activité, aux caractéristiques des
                    locaux, à la valeur des biens et au niveau de responsabilité de l'entreprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* À qui s'adresse cette assurance */}
        <section className="bg-surface py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Public concerné" title="À qui s'adresse cette assurance ?" />
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

        {/* Protection des locaux et des biens */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow="Garanties" title="Protection des locaux et des biens" />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <PhoneButton>Demander une consultation</PhoneButton>
            </div>
          </div>
        </section>

        {/* Responsabilité civile professionnelle */}
        <section className="bg-surface py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Eyebrow>Responsabilité</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  Responsabilité civile professionnelle
                </h2>
                <div className="mt-6 flex items-start gap-4">
                  <div className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky/15 text-sky">
                    <Scale className="size-5" />
                  </div>
                  <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    <p>
                      Dans le cadre de son activité, une entreprise peut causer involontairement un
                      dommage corporel, matériel ou financier à un client, un fournisseur, un
                      visiteur ou un autre tiers.
                    </p>
                    <p>
                      La responsabilité civile professionnelle peut couvrir les conséquences
                      financières lorsque la responsabilité de l'entreprise est engagée en raison
                      d'une erreur, d'une négligence, d'une omission ou d'un incident lié à
                      l'activité assurée.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src="/responsabilite-civile-professionnelle.webp"
                    alt="Rencontre professionnelle illustrant la responsabilité civile de l'entreprise envers un tiers"
                    title="Responsabilité civile professionnelle"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pertes d'exploitation et continuité d'activité */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="order-2 lg:order-1 lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src="/pertes-exploitation-continuite.webp"
                    alt="Activité professionnelle protégée contre les pertes d'exploitation et interruptions"
                    title="Pertes d'exploitation et continuité d'activité"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-6">
                <Eyebrow>Continuité d'activité</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  Pertes d'exploitation et continuité d'activité
                </h2>
                <div className="mt-6 flex items-start gap-4">
                  <div className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky/15 text-sky">
                    <TrendingDown className="size-5" />
                  </div>
                  <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    <p>
                      Après un sinistre important, l'entreprise peut devoir interrompre ou réduire
                      son activité tout en continuant à supporter ses charges fixes.
                    </p>
                    <p>
                      La garantie pertes d'exploitation peut compenser une partie de la baisse de
                      chiffre d'affaires et certains frais supplémentaires nécessaires à la reprise,
                      selon la durée et les limites prévues au contrat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comment bien évaluer vos besoins */}
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
              <Eyebrow tone="onDark">Bien évaluer vos besoins</Eyebrow>
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Comment bien évaluer vos besoins ?
            </h2>
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {EVALUATION.map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky/15 text-sky">
                    <item.icon className="size-5" />
                  </div>
                  <p className="pt-1.5 text-white/90">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Meta Assurances et Conseils */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-navy p-10 text-white shadow-elevated lg:p-14">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <Eyebrow tone="onDark">Notre accompagnement</Eyebrow>
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
                <PhoneButton>Demander une consultation</PhoneButton>
              </div>
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

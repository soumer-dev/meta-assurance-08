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
  HeartHandshake,
  Wallet,
  Award,
  Users,
  Stethoscope,
  Pill,
  Microscope,
  BedDouble,
  Glasses,
  Baby,
  HeartPulse,
  Heart,
  ListChecks,
  Percent,
  Clock,
  MapPin,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";

const POURQUOI_PROPOSER = [
  { icon: HeartHandshake, text: "Améliorer la protection sociale des collaborateurs" },
  { icon: Wallet, text: "Réduire le reste à charge sur certaines dépenses de santé" },
  { icon: Award, text: "Renforcer l'attractivité de l'entreprise lors des recrutements" },
  { icon: Users, text: "Fidéliser les salariés et valoriser la politique sociale" },
  { icon: Stethoscope, text: "Contribuer à une meilleure prise en charge médicale des équipes" },
];

const DEPENSES = [
  {
    icon: Pill,
    title: "Consultations et médicaments",
    desc: "Les consultations auprès de médecins généralistes ou spécialistes, ainsi que les médicaments prescrits, peuvent être remboursés selon les taux et plafonds contractuels.",
  },
  {
    icon: Microscope,
    title: "Analyses, examens et imagerie",
    desc: "Les analyses médicales, radiographies, scanners et autres examens peuvent être pris en charge selon la formule choisie.",
  },
  {
    icon: BedDouble,
    title: "Hospitalisation et chirurgie",
    desc: "La couverture peut inclure les frais d'hospitalisation, les actes chirurgicaux, les honoraires médicaux et certains frais de séjour.",
  },
  {
    icon: Glasses,
    title: "Dentaire et optique",
    desc: "Certaines formules prévoient des remboursements ou forfaits pour les soins dentaires, prothèses, lunettes et lentilles.",
  },
  {
    icon: Baby,
    title: "Maternité",
    desc: "Les consultations, analyses, frais d'accouchement et certains soins liés à la maternité peuvent être intégrés à la couverture.",
  },
];

const FORMULE = [
  { icon: Users, text: "Nombre et profil des salariés" },
  { icon: Heart, text: "Situation familiale des bénéficiaires" },
  { icon: ListChecks, text: "Garanties prioritaires pour l'entreprise" },
  { icon: Percent, text: "Taux et plafonds de remboursement" },
  { icon: Clock, text: "Délais de carence et exclusions" },
  { icon: MapPin, text: "Réseau de soins et modalités de remboursement" },
  {
    icon: PiggyBank,
    text: "Budget global pris en charge par l'employeur et, le cas échéant, les salariés",
  },
];

const POURQUOI = [
  "Étude du profil et des besoins de vos collaborateurs",
  "Comparaison des niveaux de garanties disponibles",
  "Recherche d'un équilibre entre couverture et budget",
  "Présentation claire des conditions du contrat",
  "Accompagnement de l'entreprise et des bénéficiaires dans leurs démarches",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Assurance maladie collective au Maroc",
  description:
    "Proposez à vos salariés une assurance maladie collective adaptée aux besoins et au budget de votre entreprise au Maroc.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Meta Assurances et Conseils",
    url: "https://metassur.com",
  },
  areaServed: { "@type": "City", name: "Marrakech" },
  serviceType: "Assurance maladie collective",
  url: "https://metassur.com/entreprises/assurance-maladie-collective",
  offers: {
    "@type": "Offer",
    description: "Devis gratuit et sans engagement.",
    priceCurrency: "MAD",
  },
};

export const metadata = {
  title: "Assurance maladie collective au Maroc | Metassur",
  description:
    "Proposez à vos salariés une assurance maladie collective adaptée aux besoins et au budget de votre entreprise au Maroc.",
  alternates: { canonical: "/entreprises/assurance-maladie-collective" },
  openGraph: {
    title: "Assurance maladie collective au Maroc | Metassur",
    description:
      "Proposez à vos salariés une assurance maladie collective adaptée aux besoins et au budget de votre entreprise au Maroc.",
    url: "/entreprises/assurance-maladie-collective",
    images: [
      {
        url: "/hero-maladie-collective.webp",
        width: 1200,
        height: 630,
        alt: "Assurance maladie collective Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assurance maladie collective au Maroc | Metassur",
    description:
      "Proposez à vos salariés une assurance maladie collective adaptée aux besoins et au budget de votre entreprise au Maroc.",
    images: ["/hero-maladie-collective.webp"],
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
          badge="Assurance Maladie Collective"
          title="Assurance maladie collective"
          italicWords="collective"
          subtitle="Offrez à vos salariés une couverture santé adaptée et renforcez la protection sociale, l'attractivité et la fidélisation au sein de votre entreprise."
          image="/hero-maladie-collective.webp"
          cta={{ label: "Demander mon devis", to: "/devis" }}
        />

        {/* Intro */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src="/couverture-sante-entreprise.webp"
                    alt="Couverture santé pensée pour l'entreprise"
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
                  title="Une couverture santé pensée pour l'entreprise"
                />
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    L'assurance maladie collective est souscrite par l'entreprise au bénéfice de ses
                    salariés. Elle peut compléter les prestations du régime obligatoire et réduire
                    la part des dépenses de santé restant à la charge des collaborateurs.
                  </p>
                  <p>
                    Selon la formule retenue, la couverture peut également être étendue au conjoint
                    et aux enfants, sous réserve des conditions prévues par le contrat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi proposer une assurance maladie collective */}
        <section className="bg-surface py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Bénéfices"
              title="Pourquoi proposer une assurance maladie collective ?"
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {POURQUOI_PROPOSER.map((item) => (
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

        {/* Les dépenses de santé pouvant être couvertes */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Garanties"
              title="Les dépenses de santé pouvant être couvertes"
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {DEPENSES.map((item) => (
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

        {/* Ce que couvre l'assurance maladie collective */}
        <section className="bg-surface py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="order-2 lg:order-1 lg:col-span-6">
                <Eyebrow>Périmètre de la garantie</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  Ce que couvre l'assurance maladie collective
                </h2>
                <div className="mt-6 flex items-start gap-4">
                  <div className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky/15 text-sky">
                    <HeartPulse className="size-5" />
                  </div>
                  <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    <p>
                      L'assurance maladie collective prend en charge les dépenses de santé des
                      salariés et, selon le contrat, celles de leurs ayants droit : consultations,
                      médicaments, analyses, hospitalisation, soins dentaires, optique ou maternité.
                    </p>
                    <p>
                      Les maladies professionnelles ne relèvent pas de cette couverture. Elles sont
                      liées à l'exposition du salarié à un risque dans le cadre de son activité et
                      obéissent à un régime de reconnaissance et d'indemnisation distinct.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                  <Image
                    src="/assurance-maladie-couverture.webp"
                    alt="Ce que couvre l'assurance maladie collective"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comment choisir la bonne formule */}
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
              <Eyebrow tone="onDark">Bien choisir sa formule</Eyebrow>
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Comment choisir la bonne formule ?
            </h2>
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {FORMULE.map((item) => (
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

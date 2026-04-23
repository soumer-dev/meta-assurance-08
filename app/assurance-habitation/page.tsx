import { SiteLayout } from "../../components/SiteLayout";
import {
  CtaButton,
  FinalCta,
  PageHero,
  PhoneButton,
  SectionHeading,
} from "../../components/ui-bits";
import {
  Home,
  Key,
  Building2,
  TreePalm,
  Flame,
  Droplets,
  ShieldAlert,
  Wind,
  HeartHandshake,
  Wrench,
  PhoneCall,
  UserSearch,
  Truck,
  Wallet,
  Eye,
  ShieldCheck,
  HandHeart,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Assurance Habitation — Meta Assurances et Conseils",
  description:
    "Protégez votre logement et votre patrimoine. Couverture incendie, dégâts des eaux, vol, catastrophes naturelles. Devis gratuit en 2 minutes.",
};

const PROFILES = [
  {
    icon: Home,
    title: "Propriétaire occupant",
    desc: "Protection de vos murs, de votre mobilier et de votre responsabilité civile.",
  },
  {
    icon: Key,
    title: "Locataire",
    desc: "Couverture obligatoire dès l'entrée dans les lieux, avec des garanties étendues.",
  },
  {
    icon: Building2,
    title: "Propriétaire bailleur",
    desc: "Garanties loyers impayés, vacance locative et recours des locataires.",
  },
  {
    icon: TreePalm,
    title: "Résidence secondaire",
    desc: "Protection adaptée aux logements inoccupés temporairement.",
  },
];

const RISKS = [
  {
    icon: Flame,
    title: "Incendie & explosion",
    desc: "Protection complète contre les incendies, explosions et suites de ceux-ci.",
  },
  {
    icon: Droplets,
    title: "Dégâts des eaux",
    desc: "Votre logement reste protégé contre les fuites, les infiltrations et les débordements.",
  },
  {
    icon: ShieldAlert,
    title: "Vol",
    desc: "Remboursement de vos biens et frais de remise en état après effraction.",
  },
  {
    icon: Wind,
    title: "Catastrophes naturelles",
    desc: "Prise en charge face aux tempêtes, aux inondations et aux tremblements de terre.",
  },
  {
    icon: HeartHandshake,
    title: "Responsabilité civile",
    desc: "Protection si un tiers est victime d'un accident survenu dans votre logement.",
  },
  {
    icon: Wrench,
    title: "Bris d'équipements",
    desc: "Remplacement de vos équipements et installations endommagés.",
  },
];

const PROCESS = [
  {
    n: "01",
    icon: PhoneCall,
    title: "Déclaration immédiate",
    desc: "Un numéro dédié disponible 24h/7j. Déclarez votre sinistre en quelques minutes, sans formulaire complexe.",
  },
  {
    n: "02",
    icon: UserSearch,
    title: "Expert envoyé en 48h",
    desc: "Un expert indépendant se rend chez vous dans les 48h pour évaluer les dommages objectivement.",
  },
  {
    n: "03",
    icon: Truck,
    title: "Relogement d'urgence",
    desc: "Si votre logement devient inhabitable, nous organisons votre relogement temporaire immédiatement.",
  },
  {
    n: "04",
    icon: Wallet,
    title: "Indemnisation rapide",
    desc: "Règlement sous 10 jours ouvrés après accord. Nous suivons votre dossier jusqu'à sa résolution complète.",
  },
];

const VALUES = [
  {
    icon: Eye,
    title: "Transparence",
    desc: "Nos frais, nos commissions, nos process : tout est clair et explicite dès le départ.",
  },
  {
    icon: ShieldCheck,
    title: "Intégrité",
    desc: "Nous ne vous recommandons que ce dont vous avez réellement besoin. Jamais plus.",
  },
  {
    icon: HandHeart,
    title: "Empathie",
    desc: "Parce que l'assurance peut être stressante, nous la rendons simple, toujours.",
  },
  {
    icon: Clock,
    title: "Disponibilité",
    desc: "Assistance 24h/7j pour les urgences. Votre conseiller répond sous 15 min en journée.",
  },
];

function HabitationPage() {
  return (
    <SiteLayout>
      <PageHero
        badge="Assurance Habitation"
        title="Protégez votre logement, protégez votre vie."
        italicWords="protégez votre vie."
        subtitle="Votre logement est votre patrimoine. Nous construisons une couverture complète pour protéger chaque aspect de votre foyer."
        image="/hero-habitation.webp"
        cta={{ label: "Protégez votre logement", to: "/devis" }}
      />

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Votre profil" title="Une solution pour chaque situation" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROFILES.map((profile) => (
              <div
                key={profile.title}
                className="group flex flex-col rounded-3xl border border-border bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-sky/15 text-sky">
                  <profile.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{profile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Risques couverts"
            title="Protégé contre tous les aléas du quotidien"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RISKS.map((risk) => (
              <div
                key={risk.title}
                className="rounded-3xl border border-border bg-white p-7 shadow-card"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-sky/15 text-sky">
                  <risk.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{risk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{risk.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <CtaButton to="/devis">Obtenir mon devis gratuit</CtaButton>
            <PhoneButton>Demander un conseil</PhoneButton>
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
            Gestion des sinistres
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Un accompagnement de bout en bout
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-white/75 leading-relaxed">
            En cas de sinistre, vous n'êtes jamais seul. Notre équipe prend en charge l'intégralité
            du processus.
          </p>
          <ol className="mt-14 grid gap-6 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <li
                key={step.n}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
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

      <section className="relative isolate overflow-hidden py-24 sm:py-28">
        <div
          className="absolute left-0 top-0 z-0 h-1/2 w-1/2 opacity-50"
          style={{
            backgroundImage: "url('/valeursbg.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            backgroundSize: "auto",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Nos valeurs" title="Ce qui nous guide au quotidien" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-border bg-white p-7 shadow-soft"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-sky/15 text-sky">
                  <value.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Garantissez la sécurité de votre domicile"
        subtitle="Gratuit, sans engagement. Notre expert analyse votre situation et vous propose la meilleure couverture."
        primary={{ label: "Démarrer mon devis", to: "/devis" }}
      />
    </SiteLayout>
  );
}

export default HabitationPage;

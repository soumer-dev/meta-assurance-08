import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Car,
  Home as HomeIcon,
  Check,
  ShieldCheck,
  Tag,
  EyeOff,
  Headphones,
  UserCheck,
  Heart,
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import {
  CtaButton,
  Eyebrow,
  FinalCta,
  GlassCard,
  PhoneButton,
  SectionHeading,
} from "@/components/ui-bits";
import heroImg from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meta Assurances et Conseils — Agent Allianz à Marrakech" },
      {
        name: "description",
        content:
          "La tranquillité d'esprit, assurée au quotidien. Auto et habitation sur mesure, conseiller dédié, assistance 24h/7j.",
      },
      { property: "og:title", content: "Meta Assurances et Conseils" },
      { property: "og:description", content: "Auto et habitation sur mesure, agent Allianz à Marrakech." },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: "12 000+", label: "Clients protégés" },
  { value: "98%", label: "De satisfaction" },
  { value: "15 ans", label: "D'expertise" },
  { value: "24h/7j", label: "D'assistance" },
];

const OFFERS = [
  {
    icon: Car,
    title: "Assurance Auto",
    desc: "Responsabilité civile, tous risques, assistance 24h/7j. Nous trouvons la formule parfaite pour votre véhicule.",
    points: ["Tous risques & tiers", "Assistance 24h/7j", "Véhicule de remplacement"],
    to: "/assurance-auto",
  },
  {
    icon: HomeIcon,
    title: "Assurance Habitation",
    desc: "Protégez votre patrimoine avec une couverture adaptée à votre logement et à vos besoins réels.",
    points: ["Dommages & vol", "Relogement d'urgence", "Suivi de sinistre dédié"],
    to: "/assurance-habitation",
  },
] as const;

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
  { icon: Tag, label: "Tarifs exclusifs" },
  { icon: EyeOff, label: "Zéro frais cachés" },
  { icon: Headphones, label: "Assistance 24h/7j" },
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

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Famille marchant ensemble au coucher du soleil"
            className="size-full object-cover object-center opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/20" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-12 lg:px-8 lg:py-36">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
              <span className="size-1.5 rounded-full bg-sky" />
              Agence Allianz · Marrakech
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.02] text-balance sm:text-5xl lg:text-7xl">
              La tranquillité d'esprit,{" "}
              <span className="font-display italic text-sky">assurée au quotidien</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
              Avec votre agent Allianz, bénéficiez d'un accompagnement personnalisé et de garanties
              auto et habitation sur mesure, au meilleur prix.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaButton to="/devis">Obtenez votre devis auto en 2 minutes</CtaButton>
              <Link
                to="/pourquoi-nous"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Pourquoi nous choisir
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-gradient-sky">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 py-8 text-navy lg:grid-cols-4 lg:px-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl font-semibold sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/75">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="relative isolate overflow-hidden py-24 sm:py-28">
        <div className="absolute -left-20 top-20 size-72 rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute -right-20 bottom-20 size-72 rounded-full bg-cta/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Nos offres"
            title="Une protection complète pour ce qui compte"
            subtitle="Auto ou habitation, nous construisons votre couverture avec soin, sur mesure, au meilleur rapport qualité-prix."
          />
          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {OFFERS.map(({ icon: Icon, ...o }) => (
              <GlassCard key={o.title} className="flex flex-col">
                <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-sky/15 text-sky">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-foreground">{o.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{o.desc}</p>
                <ul className="mt-6 space-y-3">
                  {o.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                      <Check className="size-4 text-sky" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to={o.to}
                    className="group inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
                  >
                    En savoir plus
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="relative isolate overflow-hidden bg-navy py-24 text-white sm:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -left-40 top-1/3 size-[420px] rounded-full bg-sky/15 blur-3xl" />
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
                to="/pourquoi-nous"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow-card transition-transform hover:-translate-y-0.5"
              >
                Découvrir nos engagements
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {DIFFERENTIATORS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-sky/20 text-sky">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Confiance"
            title="Votre sérénité est notre engagement"
            subtitle="Pourquoi passer par Meta Assurances et Conseils ?"
          />
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} className="text-center">
                <div className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl bg-sky/12 text-sky ring-1 ring-sky/20">
                  <Icon className="size-6" />
                </div>
                <p className="mt-4 text-sm font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Témoignages" title="Ce que disent nos clients" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-card"
              >
                <div className="flex gap-0.5 text-cta">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 grow text-foreground/85 leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <PhoneButton>Parler à un conseiller</PhoneButton>
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow="Votre protection commence ici"
        title="Prêt à être mieux protégé ?"
        subtitle="Obtenez votre devis personnalisé en quelques clics. Simple, clair, efficace."
        primary={{ label: "Obtenir mon devis gratuit", to: "/devis" }}
        secondary={{ label: "Demander un conseil" }}
      />
    </SiteLayout>
  );
}

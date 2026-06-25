import Link from "next/link";
import { SiteLayout } from "../../components/layout/SiteLayout";
import { Check, Phone, Mail, ArrowRight, Home } from "lucide-react";

export const metadata = {
  title: "Merci pour votre demande",
  description:
    "Votre demande a bien été reçue. Un conseiller Meta Assurances et Conseils vous contactera sous 24h pour vous proposer une solution d'assurance adaptée à votre situation.",
  alternates: { canonical: "/confirmation-demande" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Demande bien reçue",
    description: "Votre demande a bien été reçue. Un conseiller vous contactera prochainement.",
    url: "/confirmation-demande",
  },
};

const STEPS = [
  { title: "Analyse de votre demande", desc: "Nous étudions votre demande en détail." },
  {
    title: "Étude des solutions adaptées",
    desc: "Nous identifions les solutions adaptées à votre situation.",
  },
  { title: "Prise de contact", desc: "Un conseiller vous contacte par téléphone ou e-mail." },
  { title: "Proposition personnalisée", desc: "Vous recevez une offre sur mesure." },
];

const REASONS = [
  "Conseiller dédié",
  "Réponse rapide",
  "Accompagnement expert",
  "Solutions adaptées",
  "Suivi simplifié et personnalisé",
];

export default function ConfirmationDemandePage() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden bg-surface py-20 sm:py-28">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute -left-40 top-10 size-[420px] rounded-full bg-sky/15 blur-3xl" />
        <div className="absolute -right-40 bottom-10 size-[420px] rounded-full bg-success/15 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
          {/* En-tête */}
          <div className="rounded-[28px] border border-border bg-white p-8 text-center shadow-elevated sm:p-12">
            <div className="relative inline-flex">
              <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-success/20" />
              <div className="inline-flex size-20 items-center justify-center rounded-full bg-success/15 text-success">
                <Check className="size-9" />
              </div>
            </div>
            <h1 className="mt-7 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Merci pour votre demande
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Votre demande a bien été reçue. Merci de nous avoir contactés. Un conseiller analysera
              votre demande et reviendra vers vous dans les meilleurs délais afin de vous proposer
              une solution adaptée à vos besoins.
            </p>
          </div>

          {/* Étapes */}
          <div className="mt-10 rounded-[28px] border border-border bg-white p-8 shadow-card sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Que se passe-t-il maintenant ?
            </h2>
            <ol className="mt-7 grid gap-5 sm:grid-cols-2">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{step.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Assistance immédiate */}
          <div className="mt-8 rounded-[28px] border border-cta/20 bg-gradient-to-r from-cta/10 to-transparent p-8 sm:p-10">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Besoin d'une assistance immédiate ?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Vous pouvez également nous contacter directement :
            </p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              <a
                href="tel:+212661390788"
                className="inline-flex items-center gap-2 text-base font-semibold text-navy hover:text-sky"
              >
                <Phone className="size-4 text-cta" /> +212 661-390788
              </a>
              <a
                href="mailto:contact@metassur.com"
                className="inline-flex items-center gap-2 text-base font-semibold text-navy hover:text-sky"
              >
                <Mail className="size-4 text-cta" /> contact@metassur.com
              </a>
            </div>
          </div>

          {/* Pourquoi choisir Metassur */}
          <div className="mt-8 rounded-[28px] border border-border bg-white p-8 shadow-card sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Pourquoi choisir Metassur ?
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {REASONS.map((reason) => (
                <li key={reason} className="flex items-center gap-3">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-sky/15 text-sky">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Boutons d'action */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-3 text-sm font-semibold text-cta-foreground transition-transform hover:-translate-y-0.5"
            >
              <Home className="size-4" /> Retour à l'accueil
            </Link>
            <Link
              href="/pourquoi-nous"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
            >
              Découvrir nos solutions d'assurance
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

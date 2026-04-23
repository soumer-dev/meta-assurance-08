"use client";

import { useState, type FormEvent } from "react";
import { SiteLayout } from "../../components/SiteLayout";
import { PageHero, SectionHeading } from "../../components/ui-bits";
import {
  Phone,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldAlert,
  MessageSquare,
  Send,
  Lock,
} from "lucide-react";

const OPTIONS = [
  {
    icon: ShieldAlert,
    pill: "24h / 7j",
    title: "Assistance urgence",
    desc: "Sinistre en dehors des heures ouvrées ? Notre équipe d'urgence est disponible 24h/7j.",
    cta: "Parlez à un expert",
    href: "tel:+212661390788",
  },
  {
    icon: PhoneCall,
    pill: "< 10 min",
    title: "Rappel immédiat",
    desc: "Un conseiller vous rappelle en moins de 10 minutes, du lundi au vendredi de 9h à 18h.",
    cta: "Demander un rappel",
    href: "#contact-form",
  },
  {
    icon: MessageSquare,
    pill: "< 24h",
    title: "Formulaire de contact",
    desc: "Décrivez votre demande en détail. Nous vous répondons par email dans les 24 heures.",
    cta: "Remplir le formulaire",
    href: "#contact-form",
  },
];

const COORDONNEES = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+212 (0) 524 406 972",
    sub: "Du lundi au vendredi, 9h – 18h",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@metassur.com",
    sub: "Réponse garantie sous 24h ouvrées",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Av. Al Golf, Rés. Rabii 1, 1er Étg, Appt N°4",
    sub: "Sidi Youssef Ben Ali – Marrakech",
  },
  {
    icon: Clock,
    label: "Horaires d'ouverture",
    value: "Lun – Ven : 9h00 – 18h00",
    sub: "Assistance urgence 24h/7j",
  },
];

const SUBJECTS = [
  "Demande de devis",
  "Question sur mon contrat",
  "Déclaration de sinistre",
  "Résiliation / modification",
  "Autre demande",
];

function ContactPage() {
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      subject,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de l'envoi");
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'envoi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <PageHero
        badge="Nous sommes là pour vous accompagner"
        title="Parlons de votre protection"
        italicWords="votre protection"
        subtitle="Une question, un sinistre, une demande de devis ? Notre équipe de conseillers est disponible et vous répond rapidement."
        image="/hero-contact.webp"
        cta={{ label: "Demander un rappel", href: "#contact-form" }}
      />

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {OPTIONS.map((option) => (
              <div
                key={option.title}
                className="flex flex-col rounded-3xl border border-border bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-sky/15 text-sky">
                    <option.icon className="size-6" />
                  </div>
                  <span className="rounded-full bg-cta/15 px-3 py-1 text-xs font-semibold text-cta">
                    {option.pill}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{option.title}</h3>
                <p className="mt-2 grow text-sm leading-relaxed text-muted-foreground">
                  {option.desc}
                </p>
                <a
                  href={option.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-sky"
                >
                  {option.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Nos coordonnées"
            title="Un conseiller dédié à chaque étape"
            subtitle="Avec Meta Assurances et Conseils, pas de serveur vocal : un expert vous répond, vous comprend et agit."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COORDONNEES.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-border bg-white p-6 shadow-soft"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-sky/15 text-sky">
                  <item.icon className="size-5" />
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 font-semibold text-foreground">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl border border-cta/20 bg-gradient-to-r from-cta/10 to-transparent p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-cta text-cta-foreground">
                <ShieldAlert className="size-6" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  Urgence sinistre — 24h/7j
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  En cas de sinistre grave en dehors des horaires, notre permanence est disponible à
                  toute heure.
                </p>
                <a
                  href="tel:+212661390788"
                  className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-navy"
                >
                  <Phone className="size-4 text-cta" /> +212 661 390 788
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">Formulaire</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              Envoyez-nous un message
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nous vous répondons dans les 24 heures ouvrées.
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-white p-5 text-sm text-muted-foreground shadow-soft">
              <Lock className="mt-0.5 size-4 shrink-0 text-sky" />
              Vos données sont protégées et ne seront jamais partagées à des tiers.
            </div>
            <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-card">
              <iframe
                title="Localisation Meta Assurances et Conseils"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.5!2d-7.9709532!3d31.6237903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafefc7e959ad65%3A0x8f604c783e10cc44!2sSidi%20Youssef%20Ben%20Ali%20Assurances!5e0!3m2!1sfr!2sma!4v1"
                className="h-[420px] w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-white p-7 shadow-card lg:col-span-7 lg:p-9"
          >
            {sent ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="inline-flex size-14 items-center justify-center rounded-full bg-success/15 text-success">
                  <Send className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">Message envoyé !</h3>
                <p className="mt-2 text-muted-foreground">
                  Merci, nous revenons vers vous sous 24h ouvrées.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setError(null);
                  }}
                  className="mt-4 text-sm text-sky hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <div className="grid gap-5">
                {error && (
                  <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nom complet *" name="name" placeholder="Ahmed Zakaria" required />
                  <Field
                    label="Téléphone *"
                    name="phone"
                    placeholder="06 23 45 67 89"
                    required
                    type="tel"
                  />
                </div>
                <Field
                  label="Adresse email"
                  name="email"
                  placeholder="ahmed.zakaria@email.com"
                  type="email"
                />

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Objet de votre demande *
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SUBJECTS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSubject(s)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                          subject === s
                            ? "border-navy bg-navy text-white"
                            : "border-border bg-white text-foreground hover:border-sky hover:text-sky"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Votre message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-sky focus:outline-none focus:ring-4 focus:ring-sky/15"
                    placeholder="Décrivez votre demande avec le plus de détails possible..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                  <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

    </SiteLayout>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-sky focus:outline-none focus:ring-4 focus:ring-sky/15"
      />
    </div>
  );
}

export default ContactPage;

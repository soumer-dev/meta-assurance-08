"use client";

import { forwardRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, type FieldErrors, type UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SiteLayout } from "../../components/layout/SiteLayout";
import { PageHero, SectionHeading } from "../../components/ui/ui-bits";
import { useRecaptcha } from "../../lib/useRecaptcha";
import { contactSchema, type ContactFormValues } from "../../lib/schemas/contact";
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
    pill: "Première assurance",
    title: "Vous débutez votre vie pro ?",
    desc: "Un conseiller vous aide à comprendre vos besoins et à faire le bon choix.",
    cta: "Parler à un conseiller",
    href: "tel:+212661390788",
  },
  {
    icon: PhoneCall,
    pill: "< 24h",
    title: "Rappel immédiat",
    desc: "Un conseiller vous rappelle rapidement pour répondre à vos questions.",
    cta: "Demander une consultation",
    href: "tel:+212661390788",
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
    value: "+212 661-390788",
    sub: "Nos conseillers à votre écoute, sans attente",
    href: "tel:+212661390788",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@metassur.com",
    sub: "Réponse garantie sous 24h ouvrées",
    href: "mailto:contact@metassur.com",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Av. Al Golf, Rés. Rabii 1, 1er Étg, Appt N°4",
    sub: "Sidi Youssef Ben Ali – Marrakech",
    href: "https://www.google.com/maps/dir//Sidi+Youssef+Ben+Ali+Assurances,+1er+%C3%A9tage,+Avenue+Al+golf+r%C3%A9sidence+rabii+1+Appartement+4,+Marrakech+40000/@31.6346214,-8.0078531,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xdafefc7e959ad65:0x8f604c783e10cc44!2m2!1d-7.9709532!2d31.6237903!5m2!1e2!1e4?hl=en-GB&authuser=0&entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Clock,
    label: "Horaires d'ouverture",
    value: (
      <>
        Lun – Ven : 9h00 – 18h00
        <br />
        Sam : 9h00 - 14h00
      </>
    ),
    sub: "À votre service",
    href: "https://www.google.com/maps/dir//Sidi+Youssef+Ben+Ali+Assurances,+1er+%C3%A9tage,+Avenue+Al+golf+r%C3%A9sidence+rabii+1+Appartement+4,+Marrakech+40000/@31.6346214,-8.0078531,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xdafefc7e959ad65:0x8f604c783e10cc44!2m2!1d-7.9709532!2d31.6237903!5m2!1e2!1e4?hl=en-GB&authuser=0&entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D",
  },
];

const SUBJECTS = [
  "Demande de devis",
  "Question sur mon contrat",
  "Déclaration de sinistre",
  "Résiliation / modification",
  "Autre demande",
];

export function ContactClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { getToken } = useRecaptcha();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: SUBJECTS[0],
      message: "",
    },
  });

  const subject = watch("subject");

  const onSubmit = async (values: ContactFormValues) => {
    setLoading(true);
    setError(null);
    try {
      const recaptchaToken = await getToken("contact_form");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, recaptchaToken }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Erreur lors de l'envoi");
      router.push("/confirmation-demande");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'envoi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      {/* H1 → "Parlons de votre protection" */}
      <PageHero
        badge="Nous sommes là pour vous accompagner"
        title="Parlons de votre protection"
        italicWords="votre protection"
        subtitle="Une question, un sinistre, une demande de devis ? Notre équipe de conseillers est disponible et vous répond rapidement."
        image="/hero-contact.webp"
        cta={{ label: "Demander une consultation", href: "#contact-form" }}
      />

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* H3 → repeats per option: "Vous débutez votre vie pro ?", "Rappel immédiat", "Formulaire de contact" (3 items) */}
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
          {/* H2 → "Un conseiller dédié à chaque étape" */}
          <SectionHeading
            eyebrow="Nos coordonnées"
            title="Un conseiller dédié à chaque étape"
            subtitle="Avec Meta Assurances et Conseils, pas de serveur vocal : un expert vous répond, vous comprend et agit."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COORDONNEES.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group rounded-3xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-sky/15 text-sky">
                  <item.icon className="size-5" />
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 font-semibold text-foreground">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.sub}</p>
              </a>
            ))}
          </div>
          {/* <div className="mt-8 overflow-hidden rounded-3xl border border-cta/20 bg-gradient-to-r from-cta/10 to-transparent p-6 sm:p-8">
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
                  href="tel:+212802057057"
                  className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-navy"
                >
                  <Phone className="size-4 text-cta" /> +212 802 057 057
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section id="contact-form" className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">Formulaire</p>
            {/* H2 → "Envoyez-nous un message" */}
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
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-border bg-white p-7 shadow-card lg:col-span-7 lg:p-9"
          >
            <div className="grid gap-5">
              {error && (
                <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
                  {error}
                </div>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Nom complet *"
                  placeholder="Ahmed Zakaria"
                  error={errors.name?.message}
                  {...register("name")}
                />
                <Field
                  label="Téléphone *"
                  placeholder="06 23 45 67 89"
                  type="tel"
                  error={errors.phone?.message}
                  {...register("phone")}
                />
              </div>
              <Field
                label="Adresse email"
                placeholder="ahmed.zakaria@email.com"
                type="email"
                error={errors.email?.message}
                {...register("email")}
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
                      onClick={() => setValue("subject", s, { shouldValidate: true })}
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
                <FieldError message={errors.subject?.message} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Votre message</label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-sky focus:outline-none focus:ring-4 focus:ring-sky/15"
                  placeholder="Décrivez votre demande avec le plus de détails possible..."
                  {...register("message")}
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
              <p className="mt-4 text-center text-[12px] text-muted-foreground">
                Nous vous répondons dans les 24 heures ouvrées.
              </p>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-destructive">{message}</p>;
}

interface FieldProps extends Omit<React.ComponentPropsWithoutRef<"input">, "type"> {
  label: string;
  type?: string;
  error?: string;
}

const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, placeholder, type = "text", error, ...rest },
  ref,
) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-sky focus:outline-none focus:ring-4 focus:ring-sky/15 ${
          error ? "border-destructive/50" : "border-border"
        }`}
        {...rest}
      />
      <FieldError message={error} />
    </div>
  );
});

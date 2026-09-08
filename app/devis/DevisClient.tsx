"use client";

import { forwardRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm, type FieldErrors, type UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SiteLayout } from "../../components/layout/SiteLayout";
import { useRecaptcha } from "../../lib/useRecaptcha";
import { devisSchema, type DevisFormValues } from "../../lib/schemas/devis";
import {
  Car,
  Home,
  HardHat,
  Building2,
  HeartPulse,
  Scale,
  Briefcase,
  User,
  ShieldCheck,
} from "lucide-react";
import { ArrowRight, ArrowLeft, Check, Lock, Sparkles, Mail, PhoneCall } from "lucide-react";

type ClientType = DevisFormValues["clientType"];

const STEPS = ["Type d'assurance", "Vos informations"];

const STEP_FIELDS: Record<number, (keyof DevisFormValues)[]> = {
  0: ["clientType", "garantie"],
  1: ["name", "phone", "city", "email"],
};

const CLIENT_TYPES: { id: ClientType; label: string; icon: typeof User }[] = [
  { id: "particulier", label: "Particulier", icon: User },
  { id: "entreprise", label: "Entreprise", icon: Building2 },
  { id: "professionnel", label: "Professionnel", icon: Briefcase },
];

const GARANTIES: Record<
  ClientType,
  { id: string; icon: typeof Car; title: string; sub: string }[]
> = {
  particulier: [
    {
      id: "auto",
      icon: Car,
      title: "Assurance Auto",
      sub: "Voiture, moto, véhicule de collection",
    },
    {
      id: "habitation",
      icon: Home,
      title: "Assurance Habitation",
      sub: "Maison, appartement, résidence",
    },
  ],
  entreprise: [
    {
      id: "auto-entreprise",
      icon: Car,
      title: "Assurance Auto",
      sub: "Flotte de véhicules professionnels",
    },
    {
      id: "accidents-travail",
      icon: HardHat,
      title: "Accidents du travail",
      sub: "Protégez vos salariés et votre entreprise",
    },
    {
      id: "multirisque-professionnelle",
      icon: Building2,
      title: "Multirisque professionnelle",
      sub: "Locaux, équipements, stocks et responsabilité",
    },
    {
      id: "maladie-collective",
      icon: HeartPulse,
      title: "Maladie collective",
      sub: "Couverture santé pour vos salariés",
    },
    {
      id: "rc-exploitation",
      icon: Scale,
      title: "Responsabilité civile Exploitation",
      sub: "Dommages causés à des tiers pendant l'activité",
    },
  ],
  professionnel: [
    {
      id: "offre-globale-professions-liberales",
      icon: Briefcase,
      title: "Offre globale professions libérales",
      sub: "Cabinet, véhicule et responsabilité professionnelle",
    },
  ],
};

function getGarantieTitle(
  clientType: ClientType | undefined,
  garantie: string | undefined,
): string {
  if (!clientType || !garantie) return "";
  return GARANTIES[clientType].find((item) => item.id === garantie)?.title ?? "";
}

export function DevisClient() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { getToken } = useRecaptcha();

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm<DevisFormValues>({
    resolver: zodResolver(devisSchema),
    defaultValues: {
      garantie: "",
      garantieLabel: "",
      name: "",
      phone: "",
      city: "",
      callback: true,
      email: "",
    },
  });

  const clientType = watch("clientType");
  const garantie = watch("garantie");
  const garantieTitle = watch("garantieLabel");

  const selectClientType = (value: ClientType) => {
    setValue("clientType", value, { shouldValidate: true });
    setValue("garantie", "", { shouldValidate: false });
    setValue("garantieLabel", "", { shouldValidate: false });
  };

  const selectGarantie = (id: string) => {
    setValue("garantie", id, { shouldValidate: true });
    setValue("garantieLabel", getGarantieTitle(clientType, id), { shouldValidate: true });
  };

  const onSubmit = async (values: DevisFormValues) => {
    setLoading(true);
    setError(null);
    try {
      const recaptchaToken = await getToken("devis_form");
      const response = await fetch("/api/devis", {
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

  const next = async () => {
    if (step < STEPS.length - 1) {
      const valid = await trigger(STEP_FIELDS[step]);
      if (valid) setStep((current) => current + 1);
    } else {
      await handleSubmit(onSubmit)();
    }
  };

  const back = () => setStep((current) => Math.max(0, current - 1));

  return (
    <SiteLayout>
      <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-surface py-16 sm:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/devis-bg.png')" }}
        />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute -left-40 top-20 size-[420px] rounded-full bg-sky/15 blur-3xl" />
        <div className="absolute -right-40 bottom-20 size-[420px] rounded-full bg-cta/15 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky">
              <Sparkles className="size-3.5" />
              Devis gratuit — Sans engagement
            </span>
            {/* H1 → "Votre devis personnalisé sans frais" (hand-rolled hero, does not use PageHero) */}
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl lg:text-5xl">
              Demandez votre devis d’assurance <span className="italic text-sky">gratuit</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Répondez à quelques questions. Un expert vous contacte rapidement pour affiner votre
              couverture.
            </p>
          </div>

          <div className="relative mt-10 rounded-[28px] border border-border bg-white p-7 shadow-elevated sm:p-10">
            <Progress step={step} />

            <div className="mt-8">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                {step === 0 && (
                  <Step1
                    clientType={clientType}
                    garantie={garantie}
                    errors={errors}
                    onSelectType={selectClientType}
                    onSelectGarantie={selectGarantie}
                  />
                )}
                {step === 1 && (
                  <Step2 garantieTitle={garantieTitle} register={register} errors={errors} />
                )}
              </motion.div>
            </div>

            <div className="mt-10 flex items-center justify-between gap-3">
              {error && (
                <div className="absolute -top-16 left-0 right-0 rounded-2xl border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
                  {error}
                </div>
              )}
              {step > 0 ? (
                <button
                  onClick={back}
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50"
                >
                  <ArrowLeft className="size-4" /> Retour
                </button>
              ) : (
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="size-4" /> Annuler
                </Link>
              )}
              <button
                type="button"
                onClick={next}
                disabled={loading}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-cta px-7 py-3 text-sm font-semibold text-cta-foreground transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:hover:translate-y-0"
              >
                {loading
                  ? "Envoi en cours..."
                  : step === STEPS.length - 1
                    ? "Recevoir mon devis gratuit"
                    : "Continuer"}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-muted-foreground">
            <Reassure icon={ShieldCheck}>Suivi personnalisé</Reassure>
            <Reassure icon={Lock}>Données sécurisées</Reassure>
            <Reassure icon={Check}>Sans engagement</Reassure>
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}

function Reassure({
  icon: Icon,
  children,
}: {
  icon: typeof ShieldCheck;
  children: React.ReactNode;
}) {
  return (
    <li className="inline-flex items-center gap-2">
      <Icon className="size-4 text-sky" />
      {children}
    </li>
  );
}

function Progress({ step }: { step: number }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        {STEPS.map((label, index) => {
          const active = index === step;
          const complete = index < step;
          return (
            <div key={label} className="flex flex-1 flex-col items-center">
              <div
                className={`flex size-9 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  complete
                    ? "bg-sky text-navy"
                    : active
                      ? "bg-navy text-white ring-4 ring-sky/25"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {complete ? <Check className="size-4" /> : index + 1}
              </div>
              <span
                className={`mt-2 hidden text-xs font-medium sm:block ${active ? "text-foreground" : "text-muted-foreground"}`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-gradient-sky"
          initial={false}
          animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-destructive">{message}</p>;
}

function Step1({
  clientType,
  garantie,
  errors,
  onSelectType,
  onSelectGarantie,
}: {
  clientType: ClientType | undefined;
  garantie: string | undefined;
  errors: FieldErrors<DevisFormValues>;
  onSelectType: (clientType: ClientType) => void;
  onSelectGarantie: (garantie: string) => void;
}) {
  const garanties = clientType ? GARANTIES[clientType] : [];

  return (
    <div>
      {/* H2 → "Quel type de client êtes-vous ?" (Step1 — shown by default, step === 0, present in initial DOM) */}
      <h2 className="font-display text-2xl font-semibold text-foreground">
        Quel type de client êtes-vous ?
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Sélectionnez votre profil pour afficher les garanties correspondantes.
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {CLIENT_TYPES.map((item) => {
          const active = clientType === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectType(item.id)}
              className={`flex min-w-0 flex-col items-center gap-2 rounded-2xl border-2 px-2 py-4 text-center transition-all sm:px-3 ${
                active
                  ? "border-navy bg-navy text-white shadow-elevated"
                  : "border-border bg-white hover:border-sky hover:-translate-y-0.5 hover:shadow-card"
              }`}
            >
              <div
                className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl ${active ? "bg-sky text-navy" : "bg-sky/15 text-sky"}`}
              >
                <item.icon className="size-5" />
              </div>
              <span
                className={`w-full wrap-break-word text-xs font-semibold leading-tight sm:text-sm ${active ? "text-white" : "text-foreground"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      <FieldError message={errors.clientType?.message} />

      {clientType && (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Garanties disponibles
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {garanties.map((item) => {
              const active = garantie === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectGarantie(item.id)}
                  className={`flex items-center gap-3 rounded-2xl border-2 px-5 py-4 text-left transition-all ${
                    active
                      ? "border-navy bg-navy text-white shadow-elevated"
                      : "border-border bg-white hover:border-sky hover:-translate-y-0.5 hover:shadow-card"
                  }`}
                >
                  <div
                    className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl ${active ? "bg-sky text-navy" : "bg-sky/15 text-sky"}`}
                  >
                    <item.icon className="size-5" />
                  </div>
                  <span
                    className={`text-sm font-semibold ${active ? "text-white" : "text-foreground"}`}
                  >
                    {item.title}
                  </span>
                  {active && <Check className="ml-auto size-4 shrink-0" />}
                </button>
              );
            })}
          </div>
          <FieldError message={errors.garantie?.message} />
        </div>
      )}
    </div>
  );
}

function Step2({
  garantieTitle,
  register,
  errors,
}: {
  garantieTitle: string;
  register: UseFormRegister<DevisFormValues>;
  errors: FieldErrors<DevisFormValues>;
}) {
  return (
    <div>
      {/* H2 → "Vos informations" (Step2 — only rendered once step === 1, not in initial DOM) */}
      <h2 className="font-display text-2xl font-semibold text-foreground">Vos informations</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Pour <strong className="font-semibold text-foreground">{garantieTitle}</strong> — renseignez
        vos informations pour recevoir votre proposition.
      </p>
      <div className="mt-7 grid gap-5">
        <Input
          label="Nom complet *"
          placeholder="Sara Idrissi"
          error={errors.name?.message}
          {...register("name")}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Téléphone *"
            type="text"
            placeholder="06 12 34 56 78"
            error={errors.phone?.message}
            {...register("phone")}
          />
          <Input
            label="Ville *"
            placeholder="Marrakech"
            error={errors.city?.message}
            {...register("city")}
          />
        </div>
        <Input
          label="Adresse email *"
          type="email"
          icon={Mail}
          placeholder="sara.idrissi@email.com"
          error={errors.email?.message}
          {...register("email")}
        />
        {/* <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-sky">
          <input type="checkbox" {...register("callback")} className="mt-0.5 size-5 accent-navy" />
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <PhoneCall className="size-4 text-sky" />
              Échanger avec un conseiller dans la journée
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Un conseiller dédié prend contact avec vous dans la journée pour répondre à vos
              questions et vous proposer une solution adaptée.
            </p>
          </div>
        </label> */}
      </div>
    </div>
  );
}

interface InputProps extends Omit<React.ComponentPropsWithoutRef<"input">, "type"> {
  label: string;
  type?: string;
  icon?: typeof Mail;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, placeholder, type = "text", icon: Icon, error, ...rest },
  ref,
) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="relative mt-2">
        {Icon && (
          <Icon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-sky focus:outline-none focus:ring-4 focus:ring-sky/15 ${
            error ? "border-destructive/50" : "border-border"
          } ${Icon ? "pl-11" : ""}`}
          {...rest}
        />
      </div>
      <FieldError message={error} />
    </div>
  );
});

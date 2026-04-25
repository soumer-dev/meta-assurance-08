"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SiteLayout } from "../../components/SiteLayout";
import { Car, Home, ShieldCheck } from "lucide-react";
import { ArrowRight, ArrowLeft, Check, Lock, Sparkles, Mail, PhoneCall } from "lucide-react";

type Product = "auto" | "habitation";

interface FormState {
  product: Product | null;
  name: string;
  phone: string;
  city: string;
  callback: boolean;
  email: string;
}

const STEPS = ["Type d'assurance", "Vos informations", "Contact"];

export function DevisClient() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<FormState>({
    product: null,
    name: "",
    phone: "",
    city: "",
    callback: true,
    email: "",
  });

  const update = (patch: Partial<FormState>) => setData((prev) => ({ ...prev, ...patch }));

  const canContinue =
    (step === 0 && data.product !== null) ||
    (step === 1 && data.name && data.phone && data.city) ||
    (step === 2 && /^\S+@\S+\.\S+$/.test(data.email));

  const next = async () => {
    if (step < 2) {
      setStep((current) => current + 1);
    } else {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/devis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Erreur lors de l'envoi");
        setDone(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur lors de l'envoi");
      } finally {
        setLoading(false);
      }
    }
  };

  const back = () => setStep((current) => Math.max(0, current - 1));

  const reset = () => {
    setDone(false);
    setStep(0);
    setError(null);
    setData({ product: null, name: "", phone: "", city: "", callback: true, email: "" });
  };

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
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl lg:text-5xl">
              Votre devis personnalisé <span className="italic text-sky">sans frais</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Répondez à quelques questions. Un expert vous contacte rapidement pour affiner votre
              couverture.
            </p>
          </div>

          <div className="relative mt-10 rounded-[28px] border border-border bg-white p-7 shadow-elevated sm:p-10">
            {!done && <Progress step={step} />}

            <div className="mt-8">
              <AnimatePresence mode="wait">
                {done ? (
                  <SuccessStep key="done" name={data.name} onReset={reset} />
                ) : (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    {step === 0 && (
                      <Step1 product={data.product} onSelect={(product) => update({ product })} />
                    )}
                    {step === 1 && <Step2 data={data} update={update} />}
                    {step === 2 && <Step3 data={data} update={update} />}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!done && (
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
                  onClick={next}
                  disabled={!canContinue || loading}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-cta px-7 py-3 text-sm font-semibold text-cta-foreground transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:hover:translate-y-0"
                >
                  {loading
                    ? "Envoi en cours..."
                    : step === 2
                      ? "Recevoir mon devis gratuit"
                      : "Continuer"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            )}
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

function Step1({
  product,
  onSelect,
}: {
  product: Product | null;
  onSelect: (product: Product) => void;
}) {
  const opts: { id: Product; icon: typeof Car; title: string; sub: string }[] = [
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
  ];

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-foreground">
        Quel type d'assurance souhaitez-vous ?
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Sélectionnez le produit qui vous intéresse.
      </p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {opts.map((item) => {
          const active = product === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={`group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl border-2 p-6 text-left transition-all ${
                active
                  ? "border-navy bg-navy text-white shadow-elevated"
                  : "border-border bg-white hover:border-sky hover:-translate-y-0.5 hover:shadow-card"
              }`}
            >
              <div
                className={`inline-flex size-12 items-center justify-center rounded-xl ${active ? "bg-sky text-navy" : "bg-sky/15 text-sky"}`}
              >
                <item.icon className="size-6" />
              </div>
              <div>
                <div
                  className={`text-lg font-semibold ${active ? "text-white" : "text-foreground"}`}
                >
                  {item.title}
                </div>
                <div
                  className={`mt-1 text-sm ${active ? "text-white/75" : "text-muted-foreground"}`}
                >
                  {item.sub}
                </div>
              </div>
              {active && (
                <span className="absolute right-4 top-4 inline-flex size-7 items-center justify-center rounded-full bg-sky text-navy">
                  <Check className="size-4" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step2({ data, update }: { data: FormState; update: (patch: Partial<FormState>) => void }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-foreground">Vos informations</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Pour {data.product === "auto" ? "Assurance Auto" : "Assurance Habitation"} — restons en
        contact.
      </p>
      <div className="mt-7 grid gap-5">
        <Input
          label="Nom complet *"
          value={data.name}
          onChange={(v) => update({ name: v })}
          placeholder="Sara Idrissi"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Téléphone *"
            type="tel"
            value={data.phone}
            onChange={(v) => update({ phone: v })}
            placeholder="06 12 34 56 78"
          />
          <Input
            label="Ville *"
            value={data.city}
            onChange={(v) => update({ city: v })}
            placeholder="Marrakech"
          />
        </div>
        <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-sky">
          <input
            type="checkbox"
            checked={data.callback}
            onChange={(e) => update({ callback: e.target.checked })}
            className="mt-0.5 size-5 accent-navy"
          />
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <PhoneCall className="size-4 text-sky" />
              Être rappelé(e) dans les 10 minutes
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Un conseiller dédié vous contacte rapidement, du lundi au vendredi 9h–18h.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}

function Step3({ data, update }: { data: FormState; update: (patch: Partial<FormState>) => void }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky">
        Presque terminé !
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">
        Renseignez votre email pour recevoir votre devis.
      </h2>
      <div className="mt-7 rounded-2xl border border-border bg-surface p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Devis pour
        </p>
        <p className="mt-1 font-semibold text-foreground">
          {data.product === "auto" ? "Assurance Auto" : "Assurance Habitation"} — {data.name}
        </p>
      </div>
      <div className="mt-6">
        <Input
          label="Adresse email *"
          type="email"
          icon={Mail}
          value={data.email}
          onChange={(v) => update({ email: v })}
          placeholder="sara.idrissi@email.com"
        />
        <p className="mt-2 text-xs text-muted-foreground">
          Votre devis sera envoyé à cette adresse.
        </p>
      </div>
    </div>
  );
}

function SuccessStep({ name, onReset }: { name: string; onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center py-6 text-center"
    >
      <div className="relative">
        <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-success/20" />
        <div className="inline-flex size-20 items-center justify-center rounded-full bg-success/15 text-success">
          <Check className="size-9" />
        </div>
      </div>
      <h2 className="mt-7 font-display text-3xl font-semibold text-foreground">
        Demande reçue avec succès !
      </h2>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        Bonjour <span className="font-semibold text-foreground">{name || "{nom_complet}"}</span>,
        votre demande de devis a été transmise à notre équipe. Un conseiller vous contactera sous 2
        heures.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky/15 px-4 py-1.5 font-medium text-sky">
          <Check className="size-4" /> Demande transmise
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-sky/15 px-4 py-1.5 font-medium text-sky">
          <Check className="size-4" /> Conseiller dédié
        </span>
      </div>
      <div className="mt-6 rounded-2xl border border-sky/20 bg-sky/5 p-4 text-sm text-sky">
        <p className="font-medium">📞 Contact imminent</p>
        <p className="mt-1 text-sky/80">
          Notre équipe a reçu votre demande et vous contactera très rapidement.
        </p>
      </div>
      <button
        onClick={onReset}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
      >
        Faire une autre demande
      </button>
    </motion.div>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon: Icon,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  icon?: typeof Mail;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="relative mt-2">
        {Icon && (
          <Icon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-sky focus:outline-none focus:ring-4 focus:ring-sky/15 ${Icon ? "pl-11" : ""}`}
        />
      </div>
    </div>
  );
}

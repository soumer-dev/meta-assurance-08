import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky">
      <span className="size-1.5 rounded-full bg-sky" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  italicWords,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  italicWords?: string;
}) {
  const renderTitle = () => {
    if (!italicWords) return title;
    const idx = title.indexOf(italicWords);
    if (idx === -1) return title;
    return (
      <>
        {title.slice(0, idx)}
        <em className="font-display font-medium italic text-sky/95 not-italic-fallback">
          <span className="italic">{italicWords}</span>
        </em>
        {title.slice(idx + italicWords.length)}
      </>
    );
  };

  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-foreground text-balance sm:text-4xl lg:text-5xl">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CtaButton({
  to,
  href,
  variant = "primary",
  children,
  icon = true,
}: {
  to?: string;
  href?: string;
  variant?: "primary" | "ghost" | "outline" | "navy" | "finalCtaPrimary";
  children: ReactNode;
  icon?: boolean;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";
  const styles = {
    primary: "bg-gradient-cta text-[#051223] hover:-translate-y-0.5",
    navy: "bg-navy text-white hover:bg-navy/90 shadow-soft",
    finalCtaPrimary: "bg-[#F59E0B] text-[#051223] hover:bg-[#F59E0B]/90",
    ghost: "text-foreground hover:bg-muted",
    outline: "border border-border bg-white text-foreground hover:bg-muted",
  } as const;

  const inner = (
    <>
      {children}
      {icon && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link href={to} className={`${base} ${styles[variant]}`}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {inner}
    </a>
  );
}

export function PhoneButton({
  children,
  phone = "+212524406972",
}: {
  children: ReactNode;
  phone?: string;
}) {
  return (
    <a
      href={`tel:${phone}`}
      className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-muted"
    >
      <Phone className="size-4 text-sky" />
      {children}
    </a>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  italicWords,
  subtitle,
  image,
  cta,
  badge,
}: {
  eyebrow?: string;
  title: string;
  italicWords?: string;
  subtitle: string;
  image: string;
  cta: { label: string; to?: string; href?: string };
  badge?: string;
}) {
  const renderTitle = () => {
    if (!italicWords) return title;
    const idx = title.indexOf(italicWords);
    if (idx === -1) return title;
    return (
      <>
        {title.slice(0, idx)}
        <span className="font-display italic text-sky">{italicWords}</span>
        {title.slice(idx + italicWords.length)}
      </>
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl text-white">
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
              {badge}
            </span>
          )}
          {eyebrow && (
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
            {renderTitle()}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaButton to={cta.to} href={cta.href}>
              {cta.label}
            </CtaButton>
            <PhoneButton>+212 661 403 452</PhoneButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta({
  eyebrow,
  title,
  italicWords,
  subtitle,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  italicWords?: string;
  subtitle: string;
  primary: { label: string; to: string };
  secondary?: { label: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#00C9D2] py-20 text-white sm:py-24">
      <div
        className="absolute inset-0 bg-no-repeat bg-right"
        style={{
          backgroundImage: "url('/bgImage.png')",
          backgroundPosition: "center right",
          backgroundSize: "contain",
        }}
      />
      <div className="absolute inset-0 bg-[#00C9D2]/20" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">{eyebrow}</p>
        )}
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">
          {italicWords ? (
            <>
              {title.split(italicWords)[0]}
              <span className="font-display italic text-sky">{italicWords}</span>
              {title.split(italicWords)[1]}
            </>
          ) : (
            title
          )}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#021737] sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <CtaButton to={primary.to} variant="finalCtaPrimary">
            {primary.label}
          </CtaButton>
          {secondary && <PhoneButton>{secondary.label}</PhoneButton>}
        </div>
      </div>
    </section>
  );
}

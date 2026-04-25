"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Car, Home } from "lucide-react";
import { Logo } from "./Logo";

// ─── Nav structure ────────────────────────────────────────────────────────────

type SubItem = {
  to: string;
  label: string;
  desc: string;
  icon: typeof Car;
};

type NavItem =
  | { kind: "link"; to: string; label: string }
  | { kind: "dropdown"; label: string; id: string; items: SubItem[] };

const NAV: NavItem[] = [
  { kind: "link", to: "/", label: "Accueil" },
  {
    kind: "dropdown",
    label: "Particuliers",
    id: "particuliers",
    items: [
      {
        to: "/particuliers/assurance-auto",
        label: "Assurance Auto",
        desc: "Responsabilité civile, tous risques, assistance 24h/7j.",
        icon: Car,
      },
      {
        to: "/particuliers/assurance-habitation",
        label: "Assurance Habitation",
        desc: "Protégez votre logement et votre patrimoine.",
        icon: Home,
      },
    ],
  },
  {
    kind: "dropdown",
    label: "Entreprises",
    id: "entreprises",
    items: [
      {
        to: "/entreprises/assurance-auto",
        label: "Assurance Auto",
        desc: "Flotte de véhicules professionnels couverte.",
        icon: Car,
      },
    ],
  },
  { kind: "link", to: "/pourquoi-nous", label: "Pourquoi nous" },
  { kind: "link", to: "/contact", label: "Contact" },
];

// ─── Desktop dropdown ─────────────────────────────────────────────────────────

function DesktopDropdown({
  item,
  pathname,
}: {
  item: Extract<NavItem, { kind: "dropdown" }>;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = item.items.some((s) => pathname.startsWith(s.to));

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-white ${
          isActive ? "bg-white/10 text-[#F59E0B]" : "text-white/75"
        }`}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-white/10 bg-navy/95 shadow-elevated backdrop-blur-md">
          {item.items.map((sub) => {
            const subActive = pathname === sub.to;
            return (
              <Link
                key={sub.to}
                href={sub.to}
                className={`flex items-start gap-3 px-4 py-3.5 transition-colors hover:bg-white/10 ${
                  subActive ? "bg-white/10" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                <div className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-sky/20 text-sky">
                  <sub.icon className="size-4" />
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${subActive ? "text-[#F59E0B]" : "text-white"}`}
                  >
                    {sub.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/60">{sub.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Mobile accordion item ────────────────────────────────────────────────────

function MobileDropdown({
  item,
  pathname,
  onNavigate,
}: {
  item: Extract<NavItem, { kind: "dropdown" }>;
  pathname: string;
  onNavigate: () => void;
}) {
  const isActive = item.items.some((s) => pathname.startsWith(s.to));
  const [open, setOpen] = useState(isActive);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-white/10 ${
          isActive ? "text-[#F59E0B]" : "text-white/80"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="ml-3 mt-1 space-y-0.5 border-l border-white/10 pl-3">
          {item.items.map((sub) => {
            const subActive = pathname === sub.to;
            return (
              <Link
                key={sub.to}
                href={sub.to}
                onClick={onNavigate}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white/10 ${
                  subActive ? "text-[#F59E0B]" : "text-white/70"
                }`}
              >
                <sub.icon className="size-4 shrink-0 text-sky" />
                {sub.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main header ──────────────────────────────────────────────────────────────

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/5 bg-navy/95 shadow-soft backdrop-blur-md" : "bg-navy"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Accueil">
          <Logo className="h-8 w-auto lg:h-9" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            if (item.kind === "link") {
              const isActive = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-white ${
                    isActive ? "bg-white/10 text-[#F59E0B]" : "text-white/75"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }
            return <DesktopDropdown key={item.id} item={item} pathname={pathname} />;
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/devis"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#00C9D2" }}
          >
            Obtenir un devis
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-navy lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {NAV.map((item) => {
              if (item.kind === "link") {
                const isActive = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    href={item.to}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-white/10 ${
                      isActive ? "bg-white/10 text-[#F59E0B]" : "text-white/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <MobileDropdown
                  key={item.id}
                  item={item}
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                />
              );
            })}
            <Link
              href="/devis"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-5 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: "#00C9D2" }}
            >
              Obtenir un devis
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

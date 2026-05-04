import Link from "next/link";
import { Phone, Mail, MapPin, ShieldAlert } from "lucide-react";
import { Logo } from "../ui/Logo";

function SocialIcon({ kind }: { kind: "facebook" | "linkedin" | "instagram" }) {
  const paths: Record<string, string> = {
    facebook:
      "M13 22v-8h2.7l.4-3.1H13V8.9c0-.9.3-1.5 1.6-1.5H16V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H7V14h2.8v8H13z",
    linkedin:
      "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.78 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.19-3.6-2.2 0-2.54 1.72-2.54 3.49V22H8V8z",
    instagram:
      "M12 2c2.7 0 3.05.01 4.12.06 1.07.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.64.42 1.36.47 2.43.05 1.07.06 1.42.06 4.12s-.01 3.05-.06 4.12c-.05 1.07-.22 1.79-.47 2.43-.26.66-.6 1.22-1.15 1.77-.55.55-1.11.89-1.77 1.15-.64.25-1.36.42-2.43.47-1.07.05-1.42.06-4.12.06s-3.05-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.47-.66-.26-1.22-.6-1.77-1.15-.55-.55-.89-1.11-1.15-1.77-.25-.64-.42-1.36-.47-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.07.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77.55-.55 1.11-.89 1.77-1.15.64-.25 1.36-.42 2.43-.47C8.95 2.01 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM12 9a3 3 0 110 6 3 3 0 010-6z",
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d={paths[kind]} />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Logo className="h-9 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Votre agence d'assurance au Maroc, pour une couverture optimale et une sérénité totale.
          </p>
          <div className="mt-6 flex gap-3">
            {(
              [
                { kind: "facebook", href: "https://www.facebook.com/share/1bk3nfP8zy/" },
                {
                  kind: "linkedin",
                  href: "https://www.linkedin.com/company/meta-assurances-et-conseils/?viewAsMember=true",
                },
                {
                  kind: "instagram",
                  href: "https://www.instagram.com/meta_assurances_et_conseils?igsh=MW15b3p6M25udXVhcA==",
                },
              ] as const
            ).map(({ kind, href }) => (
              <a
                key={kind}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={kind}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <SocialIcon kind={kind} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Nos offres
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/particuliers/assurance-auto" className="hover:text-white">
                Assurance Auto
              </Link>
            </li>
            <li>
              <Link href="/particuliers/assurance-habitation" className="hover:text-white">
                Assurance Habitation
              </Link>
            </li>
            <li>
              <Link href="/devis" className="hover:text-white">
                Obtenir un devis
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Liens utiles
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/pourquoi-nous" className="hover:text-white">
                Pourquoi nous choisir
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-sky" />
              <a href="tel:+212661403452" className="hover:text-white">
                +212 661 403 452
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-sky" />
              <a href="mailto:contact@metassur.com" className="hover:text-white">
                contact@metassur.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sky" />
              <span>
                Av. Al Golf, Rés. Rabii 1, 1er Étg, Appt N°4, Sidi Youssef Ben Ali – Marrakech
              </span>
            </li>
          </ul>
          <div className="mt-5 rounded-xl border border-white/15 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky">
              <ShieldAlert className="size-4" /> Assistance 24h/7j
            </div>
            <a href="tel:+212802057057" className="mt-1 block text-base font-semibold text-white">
              +212 802 057 057
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-white/55 sm:flex-row sm:items-center lg:px-8">
          <p>
            © {new Date().getFullYear()} Meta assurances et conseils, appuyé par{" "}
            <a
              href="https://monarkit.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/55 transition-colors"
            >
              MONARK IT
            </a>
            . Tous droits réservés.
          </p>
          <p className="italic">Conçu pour votre tranquillité d'esprit.</p>
        </div>
      </div>
    </footer>
  );
}

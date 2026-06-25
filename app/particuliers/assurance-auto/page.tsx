import { AssuranceAutoPage } from "../../../components/sections/AssuranceAutoPage";

export const metadata = {
  title: "Assurance Auto à Marrakech — Devis Gratuit",
  description:
    "Assurance auto RC, tous risques, assistance 0 km à Marrakech. Meta Assurances et Conseils, gestion des sinistres incluse. Devis gratuit et sans engagement en 2 minutes.",
  alternates: { canonical: "/particuliers/assurance-auto" },
  openGraph: {
    title: "Assurance Auto à Marrakech — Devis Gratuit",
    description:
      "Assurance auto RC, tous risques, assistance 0 km à Marrakech. Devis gratuit en 2 minutes.",
    url: "/particuliers/assurance-auto",
    images: [{ url: "/hero-auto.webp", width: 1200, height: 630, alt: "Assurance auto Marrakech" }],
  },
};

export default function Page() {
  return <AssuranceAutoPage />;
}

import { PourquoiClient } from "./PourquoiClient";

export const metadata = {
  title: "Assurance tous risques au Maroc | Protection complète",
  description:
    "Découvrez les avantages de Metassur : expertise, accompagnement personnalisé et solutions d'assurance adaptées aux particuliers et entreprises au Maroc.",
  alternates: { canonical: "/pourquoi-nous" },
  openGraph: {
    title: "Assurance tous risques au Maroc | Protection complète",
    description:
      "Découvrez les avantages de Metassur : expertise, accompagnement personnalisé et solutions d'assurance adaptées aux particuliers et entreprises au Maroc.",
    url: "/pourquoi-nous",
    images: [
      {
        url: "/hero-pourquoi.webp",
        width: 1200,
        height: 630,
        alt: "Pourquoi Meta Assurances Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assurance tous risques au Maroc | Protection complète",
    description:
      "Découvrez les avantages de Metassur : expertise, accompagnement personnalisé et solutions d'assurance adaptées aux particuliers et entreprises au Maroc.",
    images: ["/hero-pourquoi.webp"],
  },
};

export default function PourquoiPage() {
  return <PourquoiClient />;
}

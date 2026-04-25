import { PourquoiClient } from "./PourquoiClient";

export const metadata = {
  title: "Pourquoi Choisir Meta Assurances à Marrakech — Agent Allianz",
  description:
    "Conseil personnalisé, gestion simplifiée des sinistres, accompagnement complet et proximité : découvrez les engagements de votre agent Allianz à Marrakech.",
  alternates: { canonical: "/pourquoi-nous" },
  openGraph: {
    title: "Pourquoi Choisir Meta Assurances à Marrakech — Agent Allianz",
    description: "Conseil personnalisé, gestion simplifiée, accompagnement complet à Marrakech.",
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
};

export default function PourquoiPage() {
  return <PourquoiClient />;
}

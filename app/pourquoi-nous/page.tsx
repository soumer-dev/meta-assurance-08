import { PourquoiClient } from "./PourquoiClient";

export const metadata = {
  title: "Pourquoi Nous Choisir — Conseil Personnalisé à Marrakech",
  description:
    "Conseil personnalisé, gestion simplifiée des sinistres, accompagnement complet et proximité : découvrez les engagements de Meta Assurances et Conseils à Marrakech.",
  alternates: { canonical: "/pourquoi-nous" },
  openGraph: {
    title: "Pourquoi Nous Choisir — Conseil Personnalisé à Marrakech",
    description:
      "Conseil personnalisé, gestion simplifiée des sinistres et accompagnement complet à Marrakech.",
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
    title: "Pourquoi Nous Choisir — Conseil Personnalisé à Marrakech",
    description:
      "Conseil personnalisé, gestion simplifiée des sinistres et accompagnement complet à Marrakech.",
    images: ["/hero-pourquoi.webp"],
  },
};

export default function PourquoiPage() {
  return <PourquoiClient />;
}

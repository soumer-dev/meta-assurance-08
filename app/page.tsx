import { HomeClient } from "./HomeClient";

export const metadata = {
  title: "Assurance Auto & Habitation à Marrakech — Meta Assurances et Conseils",
  description:
    "Agent Allianz à Marrakech. Assurance auto tous risques, assurance habitation sur mesure, devis gratuit en 2 minutes. Conseiller dédié, assistance 24h/7j.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Assurance Auto & Habitation à Marrakech — Meta Assurances et Conseils",
    description:
      "Agent Allianz à Marrakech. Assurance auto et habitation sur mesure, conseiller dédié, assistance 24h/7j.",
    url: "/",
    images: [
      {
        url: "/hero-home.webp",
        width: 1200,
        height: 630,
        alt: "Assurance auto et habitation à Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Assurances et Conseils — Agent Allianz à Marrakech",
    description:
      "La tranquillité d'esprit, assurée au quotidien. Auto et habitation sur mesure, conseiller dédié, assistance 24h/7j.",
    images: ["/hero-home.webp"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}

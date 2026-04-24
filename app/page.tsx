import { HomeClient } from "./HomeClient";

export const metadata = {
  title: "Meta Assurances et Conseils — Agent Allianz à Marrakech",
  description:
    "La tranquillité d'esprit, assurée au quotidien. Auto et habitation sur mesure, conseiller dédié, assistance 24h/7j.",
  openGraph: {
    title: "Meta Assurances et Conseils — Agent Allianz à Marrakech",
    description:
      "La tranquillité d'esprit, assurée au quotidien. Auto et habitation sur mesure, conseiller dédié, assistance 24h/7j.",
    type: "website",
    locale: "fr-FR",
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

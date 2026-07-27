import { HomeClient } from "./HomeClient";

export const metadata = {
  description:
    "Découvrez les solutions d’assurance Marrakech pour protéger vos biens, votre santé, votre véhicule et votre entreprise avec un accompagnement adapté.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Assurance Marrakech pour particuliers et entreprises | Metassur",
    description:
      "Découvrez les solutions d’assurance Marrakech pour protéger vos biens, votre santé, votre véhicule et votre entreprise avec un accompagnement adapté.",
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
    title: "Assurance Marrakech pour particuliers et entreprises | Metassur",
    description:
      "Découvrez les solutions d’assurance Marrakech pour protéger vos biens, votre santé, votre véhicule et votre entreprise avec un accompagnement adapté.",
    images: ["/hero-home.webp"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}

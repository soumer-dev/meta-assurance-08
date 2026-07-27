import { DevisClient } from "./DevisClient";

export const metadata = {
  title: "Devis assurance auto gratuit au Maroc",
  description:
    "Demandez votre devis assurance auto gratuit au Maroc et obtenez une offre adaptée à votre véhicule avec l'accompagnement de Metassur.",
  alternates: { canonical: "/devis" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Devis assurance auto gratuit au Maroc",
    description:
      "Demandez votre devis assurance auto gratuit au Maroc et obtenez une offre adaptée à votre véhicule avec l'accompagnement de Metassur.",
    url: "/devis",
    images: [
      {
        url: "/hero-home.webp",
        width: 1200,
        height: 630,
        alt: "Devis assurance gratuit à Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devis assurance auto gratuit au Maroc",
    description:
      "Demandez votre devis assurance auto gratuit au Maroc et obtenez une offre adaptée à votre véhicule avec l'accompagnement de Metassur.",
    images: ["/hero-home.webp"],
  },
};

export default function DevisPage() {
  return <DevisClient />;
}

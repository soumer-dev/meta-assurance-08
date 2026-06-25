import { DevisClient } from "./DevisClient";

export const metadata = {
  title: "Devis Assurance Gratuit sans frais",
  description:
    "Obtenez votre devis assurance auto ou habitation gratuit et sans engagement. Meta Assurances et Conseils à Marrakech, réponse rapide garantie.",
  alternates: { canonical: "/devis" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Devis Assurance Gratuit sans frais",
    description:
      "Devis assurance auto ou habitation gratuit, sans engagement. Réponse rapide garantie à Marrakech.",
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
    title: "Devis Assurance Gratuit sans frais",
    description:
      "Devis assurance auto ou habitation gratuit, sans engagement. Réponse rapide garantie.",
    images: ["/hero-home.webp"],
  },
};

export default function DevisPage() {
  return <DevisClient />;
}

import { DevisClient } from "./DevisClient";

export const metadata = {
  title: "Devis Assurance Gratuit sans frais",
  description:
    "Obtenez votre devis assurance auto ou habitation gratuit et sans engagement en 2 minutes. Meta Assurances et Conseils à Marrakech, réponse rapide garantie.",
  alternates: { canonical: "/devis" },
  robots: { index: false },
  openGraph: {
    title: "Devis Assurance Gratuit à Marrakech",
    description: "Devis assurance auto ou habitation en 2 minutes. Gratuit et sans engagement.",
    url: "/devis",
  },
};

export default function DevisPage() {
  return <DevisClient />;
}

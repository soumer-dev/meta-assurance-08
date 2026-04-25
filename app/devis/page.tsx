import { DevisClient } from "./DevisClient";

export const metadata = {
  title: "Devis Assurance Gratuit sans frais — Meta Assurances Marrakech",
  description:
    "Obtenez votre devis assurance auto ou habitation gratuit et sans engagement en 2 minutes. Agent Allianz à Marrakech, réponse rapide garantie.",
  alternates: { canonical: "/devis" },
  robots: { index: false },
  openGraph: {
    title: "Devis Assurance Gratuit — Meta Assurances Marrakech",
    description: "Devis assurance auto ou habitation en 2 minutes. Gratuit et sans engagement.",
    url: "/devis",
  },
};

export default function DevisPage() {
  return <DevisClient />;
}

import { AssuranceAutoPage } from "../../../components/sections/AssuranceAutoPage";

export const metadata = {
  title: "Assurance Auto Entreprises à Marrakech — Devis Gratuit",
  description:
    "Assurance auto professionnelle pour flottes et véhicules d'entreprise à Marrakech. Meta Assurances et Conseils. Devis gratuit et sans engagement.",
  alternates: { canonical: "/entreprises/assurance-auto" },
  openGraph: {
    title: "Assurance Auto Entreprises à Marrakech",
    description: "Assurance auto professionnelle pour flottes d'entreprise. Devis gratuit.",
    url: "/entreprises/assurance-auto",
    images: [
      {
        url: "/hero-auto.webp",
        width: 1200,
        height: 630,
        alt: "Assurance auto entreprise Marrakech",
      },
    ],
  },
};

export default function Page() {
  return <AssuranceAutoPage />;
}

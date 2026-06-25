import { AssuranceAutoPage } from "../../../components/sections/AssuranceAutoPage";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Assurance Auto Flotte d'Entreprise à Marrakech",
  description:
    "Assurance auto professionnelle pour flottes et véhicules d'entreprise à Marrakech. Devis gratuit et sans engagement.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Meta Assurances et Conseils",
    url: "https://metassur.com",
  },
  areaServed: { "@type": "City", name: "Marrakech" },
  serviceType: "Assurance Auto Professionnelle",
  url: "https://metassur.com/entreprises/assurance-auto",
  offers: {
    "@type": "Offer",
    description: "Devis gratuit et sans engagement.",
    priceCurrency: "MAD",
  },
};

export const metadata = {
  title: "Assurance Auto Entreprises à Marrakech — Devis Gratuit",
  description:
    "Assurance auto professionnelle pour flottes et véhicules d'entreprise à Marrakech. Meta Assurances et Conseils. Devis gratuit et sans engagement.",
  alternates: { canonical: "/entreprises/assurance-auto" },
  openGraph: {
    title: "Assurance Auto Entreprises à Marrakech — Devis Gratuit",
    description:
      "Assurance auto professionnelle pour flottes et véhicules d'entreprise à Marrakech. Devis gratuit et sans engagement.",
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
  twitter: {
    card: "summary_large_image",
    title: "Assurance Auto Entreprises à Marrakech — Devis Gratuit",
    description:
      "Assurance auto professionnelle pour flottes et véhicules d'entreprise à Marrakech. Devis gratuit et sans engagement.",
    images: ["/hero-auto.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AssuranceAutoPage />
    </>
  );
}

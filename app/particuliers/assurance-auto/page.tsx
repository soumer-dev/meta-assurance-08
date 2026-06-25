import { AssuranceAutoPage } from "../../../components/sections/AssuranceAutoPage";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Assurance Auto à Marrakech",
  description:
    "Assurance auto RC, tous risques et assistance 0 km à Marrakech. Devis gratuit et sans engagement.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Meta Assurances et Conseils",
    url: "https://metassur.com",
  },
  areaServed: { "@type": "City", name: "Marrakech" },
  serviceType: "Assurance Auto",
  url: "https://metassur.com/particuliers/assurance-auto",
  offers: {
    "@type": "Offer",
    description: "Devis gratuit et sans engagement.",
    priceCurrency: "MAD",
  },
};

export const metadata = {
  title: "Assurance Auto à Marrakech — Devis Gratuit",
  description:
    "Assurance auto RC, tous risques, assistance 0 km à Marrakech. Meta Assurances et Conseils, gestion des sinistres incluse. Devis gratuit et sans engagement.",
  alternates: { canonical: "/particuliers/assurance-auto" },
  openGraph: {
    title: "Assurance Auto à Marrakech — Devis Gratuit",
    description:
      "Assurance auto RC, tous risques, assistance 0 km à Marrakech. Devis gratuit et sans engagement.",
    url: "/particuliers/assurance-auto",
    images: [{ url: "/hero-auto.webp", width: 1200, height: 630, alt: "Assurance auto Marrakech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assurance Auto à Marrakech — Devis Gratuit",
    description:
      "Assurance auto RC, tous risques, assistance 0 km à Marrakech. Devis gratuit et sans engagement.",
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

import { AssuranceHabitationPage } from "../../../components/sections/AssuranceHabitationPage";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Assurance Habitation à Marrakech",
  description:
    "Assurance habitation pour propriétaires et locataires à Marrakech. Couverture incendie, dégâts des eaux, vol et catastrophes naturelles.",
  provider: {
    "@type": "InsuranceAgency",
    name: "Meta Assurances et Conseils",
    url: "https://metassur.com",
  },
  areaServed: { "@type": "City", name: "Marrakech" },
  serviceType: "Assurance Habitation",
  url: "https://metassur.com/particuliers/assurance-habitation",
  offers: {
    "@type": "Offer",
    description: "Devis gratuit et sans engagement.",
    priceCurrency: "MAD",
  },
};

export const metadata = {
  title: "Assurance Habitation à Marrakech — Devis Gratuit",
  description:
    "Assurance habitation pour propriétaires et locataires à Marrakech. Couverture incendie, dégâts des eaux, vol, catastrophes naturelles. Devis gratuit et sans engagement.",
  alternates: { canonical: "/particuliers/assurance-habitation" },
  openGraph: {
    title: "Assurance Habitation à Marrakech — Devis Gratuit",
    description:
      "Protection complète de votre logement à Marrakech. Couverture incendie, dégâts des eaux, vol. Devis gratuit et sans engagement.",
    url: "/particuliers/assurance-habitation",
    images: [
      {
        url: "/hero-habitation.webp",
        width: 1200,
        height: 630,
        alt: "Assurance habitation Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assurance Habitation à Marrakech — Devis Gratuit",
    description:
      "Protection complète de votre logement à Marrakech. Couverture incendie, dégâts des eaux, vol. Devis gratuit et sans engagement.",
    images: ["/hero-habitation.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AssuranceHabitationPage />
    </>
  );
}

import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

const siteUrl = process.env.APP_URL || "https://metassur.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Meta Assurances et Conseils",
  description:
    "Agence Allianz à Marrakech. Auto, habitation, conseil personnalisé et assistance 24h/7j. Obtenez votre devis gratuit en 2 minutes.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Meta Assurances et Conseils — Agent Allianz à Marrakech",
    description:
      "La tranquillité d'esprit, assurée au quotidien. Auto et habitation sur mesure, conseiller dédié, assistance 24h/7j.",
    url: siteUrl,
    siteName: "Meta Assurances et Conseils",
    type: "website",
    locale: "fr_MA",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Meta Assurances et Conseils",
  url: siteUrl,
  logo: `https://metassur.com/logo.svg`,
  image: `https://metassur.com/hero-home.webp`,
  telephone: "+212661403452",
  email: "contact@metassur.com",
  inLanguage: "fr-MA",
  priceRange: "MAD",
  currenciesAccepted: "MAD",
  paymentAccepted: "Cash, Chèque, Virement",
  areaServed: {
    "@type": "City",
    name: "Marrakech",
    sameAs: "https://www.wikidata.org/wiki/Q101625",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Al Golf, Rés. Rabii 1, 1er Étg, Appt N°4",
    addressLocality: "Marrakech",
    postalCode: "40000",
    addressRegion: "Marrakech-Safi",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.6237903,
    longitude: -7.9709532,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/1bk3nfP8zy/",
    "https://www.linkedin.com/company/meta-assurances-et-conseils/?viewAsMember=true",
    "https://www.instagram.com/meta_assurances_et_conseils?igsh=MW15b3p6M25udXVhcA==",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produits d'assurance",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assurance Auto" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assurance Habitation" } },
    ],
  },
  description:
    "Agence d'assurance Allianz à Marrakech spécialisée en assurance auto et habitation avec assistance 24h/7j.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-MA">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "../styles/globals.css";

const siteUrl = "https://metassur.com";

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
    locale: "fr-FR",
    images: [
      {
        url: "/hero-home.jpg",
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
    images: ["/hero-home.jpg"],
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
  themeColor: "#0f172a",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Meta Assurances et Conseils",
  url: siteUrl,
  telephone: "+212524406972",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Al Golf, Rés. Rabii 1, 1er Étg, Appt N°4",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  description:
    "Agence d'assurance Allianz à Marrakech spécialisée en assurance auto et habitation avec assistance 24h/7j.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
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

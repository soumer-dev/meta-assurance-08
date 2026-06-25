import { ContactClient } from "./ContactClient";

export const metadata = {
  title: "Nous Contacter — Assurance & Sinistres Marrakech",
  description:
    "Contactez Meta Assurances et Conseils à Marrakech. Rappel en moins de 10 minutes, assistance urgence 24h/7j. Formulaire en ligne ou par téléphone.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Nous Contacter — Assurance & Sinistres Marrakech",
    description:
      "Contactez Meta Assurances et Conseils à Marrakech. Rappel en moins de 10 minutes, assistance urgence 24h/7j.",
    url: "/contact",
    images: [
      {
        url: "/hero-contact.webp",
        width: 1200,
        height: 630,
        alt: "Contact Meta Assurances Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nous Contacter — Assurance & Sinistres Marrakech",
    description:
      "Contactez Meta Assurances et Conseils à Marrakech. Rappel en moins de 10 minutes, assistance urgence 24h/7j.",
    images: ["/hero-contact.webp"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

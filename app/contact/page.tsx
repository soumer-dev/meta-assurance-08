import { ContactClient } from "./ContactClient";

export const metadata = {
  title: "Contact — Meta Assurances et Conseils Marrakech",
  description:
    "Contactez votre agent Allianz à Marrakech. Rappel en moins de 10 minutes, assistance urgence 24h/7j. Formulaire en ligne ou par téléphone.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Meta Assurances et Conseils Marrakech",
    description: "Contactez votre agent Allianz à Marrakech. Rappel en moins de 10 minutes.",
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
};

export default function ContactPage() {
  return <ContactClient />;
}

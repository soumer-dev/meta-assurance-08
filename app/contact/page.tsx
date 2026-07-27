import { ContactClient } from "./ContactClient";

export const metadata = {
  title: "Assurance Maroc : accompagnement complet",
  description:
    "Contactez Metassur pour obtenir des conseils, un accompagnement personnalisé ou un devis d'assurance adapté à vos besoins au Maroc.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Assurance Maroc : accompagnement complet",
    description:
      "Contactez Metassur pour obtenir des conseils, un accompagnement personnalisé ou un devis d'assurance adapté à vos besoins au Maroc.",
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
    title: "Assurance Maroc : accompagnement complet",
    description:
      "Contactez Metassur pour obtenir des conseils, un accompagnement personnalisé ou un devis d'assurance adapté à vos besoins au Maroc.",
    images: ["/hero-contact.webp"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

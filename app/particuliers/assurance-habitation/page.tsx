import { AssuranceHabitationPage } from "../../../components/sections/AssuranceHabitationPage";

export const metadata = {
  title: "Assurance Habitation à Marrakech — Devis Gratuit | Meta Assurances",
  description:
    "Assurance habitation pour propriétaires et locataires à Marrakech. Couverture incendie, dégâts des eaux, vol, catastrophes naturelles. Devis gratuit en 2 minutes.",
  alternates: { canonical: "/particuliers/assurance-habitation" },
  openGraph: {
    title: "Assurance Habitation à Marrakech — Devis Gratuit | Meta Assurances",
    description: "Protection complète de votre logement à Marrakech. Devis gratuit en 2 minutes.",
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
};

export default function Page() {
  return <AssuranceHabitationPage />;
}

from pathlib import Path

base = Path(r"c:\Téléchargements\Meta Assurance\meta-assurance-08")

contact_content = '''import ContactPage from "../../components/ContactPage";

export const metadata = {
  title: "Contact — Meta Assurances et Conseils",
  description: "Une question, un sinistre, une demande de devis ? Notre équipe de conseillers vous répond rapidement. Assistance 24h/7j.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
'''

devis_content = '''import DevisPage from "../../components/DevisPage";

export const metadata = {
  title: "Obtenir un devis — Meta Assurances et Conseils",
  description: "Devis gratuit et sans engagement en 2 minutes. Auto ou habitation : un expert vous contacte rapidement pour affiner votre couverture.",
};

export default function DevisRoute() {
  return <DevisPage />;
}
'''

(base / "app" / "contact" / "page.tsx").write_text(contact_content, encoding="utf-8")
(base / "app" / "devis" / "page.tsx").write_text(devis_content, encoding="utf-8")

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json({ error: "Configuration email manquante" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    // Validate required fields
    if (!name || !phone || !subject) {
      return NextResponse.json({ error: "Nom, téléphone et objet sont requis" }, { status: 400 });
    }

    // Send email to admin
    const { data, error } = await resend.emails.send({
      from: "Meta Assurances <noreply@metassur.com>",
      to: [process.env.RECIPIENT_EMAIL || "admin@metassur.com"],
      subject: `Nouveau message de contact - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Informations du contact</h3>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Téléphone :</strong> ${phone}</p>
            ${email ? `<p><strong>Email :</strong> ${email}</p>` : ""}
            <p><strong>Objet :</strong> ${subject}</p>
          </div>
          
          ${
            message
              ? `
            <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #0ea5e9; margin: 20px 0;">
              <h3 style="color: #334155; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          `
              : ""
          }
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>Ce message a été envoyé depuis le formulaire de contact du site Meta Assurances.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

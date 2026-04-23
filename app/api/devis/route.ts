import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY environment variable');
      return NextResponse.json(
        { error: 'Configuration email manquante' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { product, name, phone, city, callback, email } = body;

    // Validate required fields
    if (!product || !name || !phone || !city || !email) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    const productName = product === 'auto' ? 'Assurance Auto' : 'Assurance Habitation';

    // Send notification email to admin only
    const adminEmail = await resend.emails.send({
      from: 'Meta Assurances <noreply@metassur.com>',
      to: [process.env.RECIPIENT_EMAIL || 'admin@metassur.com'],
      subject: `Nouvelle demande de devis ${productName} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            🎯 Nouvelle demande de devis
          </h2>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <h3 style="color: #92400e; margin-top: 0;">Détails du prospect</h3>
            <p><strong>Produit :</strong> ${productName}</p>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Téléphone :</strong> ${phone}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Ville :</strong> ${city}</p>
            <p><strong>Rappel demandé :</strong> ${callback ? '✅ Oui, dans les 10 minutes' : '❌ Non'}</p>
          </div>
          
          ${callback ? `
            <div style="background-color: #fee2e2; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ef4444;">
              <p style="color: #991b1b; margin: 0; font-weight: bold;">
                ⚡ RAPPEL URGENT DEMANDÉ - Contacter dans les 10 minutes
              </p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>Demande reçue le ${new Date().toLocaleString('fr-FR', { 
              timeZone: 'Africa/Casablanca',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
        </div>
      `,
    });

    if (adminEmail.error) {
      console.error('Resend error:', adminEmail.error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      adminMessageId: adminEmail.data?.id
    });
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
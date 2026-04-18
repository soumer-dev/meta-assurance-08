import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
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

    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: 'Meta Assurances <noreply@metassur.com>',
      to: [email],
      subject: `Votre demande de devis ${productName} - Meta Assurances`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Meta Assurances et Conseils</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Votre demande de devis a été reçue</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #1e293b; margin-top: 0;">Bonjour ${name},</h2>
            
            <p style="color: #475569; line-height: 1.6;">
              Nous avons bien reçu votre demande de devis pour <strong>${productName}</strong>. 
              Un de nos conseillers spécialisés va étudier votre dossier et vous contacter très rapidement.
            </p>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #334155; margin-top: 0; font-size: 16px;">Récapitulatif de votre demande</h3>
              <ul style="color: #475569; margin: 0; padding-left: 20px;">
                <li><strong>Produit :</strong> ${productName}</li>
                <li><strong>Nom :</strong> ${name}</li>
                <li><strong>Téléphone :</strong> ${phone}</li>
                <li><strong>Ville :</strong> ${city}</li>
                <li><strong>Rappel souhaité :</strong> ${callback ? 'Oui, dans les 10 minutes' : 'Non'}</li>
              </ul>
            </div>
            
            <div style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: white; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
              <h3 style="margin: 0 0 10px 0; font-size: 18px;">⏱️ Réponse sous 2 heures</h3>
              <p style="margin: 0; opacity: 0.9;">Du lundi au vendredi, 9h - 18h</p>
            </div>
            
            <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
              <h3 style="color: #334155; font-size: 16px;">Besoin d'aide immédiate ?</h3>
              <p style="color: #475569; margin: 10px 0;">
                📞 <strong>+212 (0) 524 406 972</strong><br>
                📧 <strong>contact@metassur.com</strong><br>
                🚨 <strong>Urgence 24h/7j :</strong> +212 661 390 788
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
              <p>Meta Assurances et Conseils - Agent Allianz à Marrakech</p>
              <p>Av. Al Golf, Rés. Rabii 1, 1er Étg, Appt N°4, Sidi Youssef Ben Ali</p>
            </div>
          </div>
        </div>
      `,
    });

    // Send notification email to admin
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

    if (customerEmail.error || adminEmail.error) {
      console.error('Resend error:', customerEmail.error || adminEmail.error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi des emails' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      customerMessageId: customerEmail.data?.id,
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
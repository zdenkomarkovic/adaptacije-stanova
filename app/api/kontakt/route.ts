import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Ime je obavezno"),
  email: z.string().email("Neispravna email adresa"),
  phone: z.string().min(6, "Telefon je obavezan"),
  service: z.string().optional(),
  message: z.string().min(10, "Poruka je prekratka"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Neispravni podaci", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = parsed.data;

    const apiKey = process.env.MAILJET_API_KEY;
    const secretKey = process.env.MAILJET_SECRET_KEY;
    const sender = process.env.SITE_MAIL_SENDER ?? "noreply@adaptacije-stanova.com";
    const receiver = process.env.SITE_MAIL_RECEIVER ?? "info@adaptacije-stanova.com";

    if (!apiKey || !secretKey) {
      console.error("Mailjet API keys nisu konfigurisani");
      return NextResponse.json({ error: "Konfiguracijska greška" }, { status: 500 });
    }

    const serviceLabel = service
      ? service.charAt(0).toUpperCase() + service.slice(1)
      : "Nije navedeno";

    const htmlContent = `
<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; color: #1a2d44; background: #f8f6f2; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
    .header { background: #1a2d44; padding: 28px 32px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 22px; }
    .header span { color: #e8941a; }
    .body { padding: 32px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 4px; }
    .value { font-size: 16px; color: #1a2d44; font-weight: 600; }
    .message-box { background: #f8f6f2; border-left: 3px solid #e8941a; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 8px; }
    .footer { background: #f8f6f2; padding: 16px 32px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e0d8; }
    .badge { display: inline-block; background: #e8941a; color: white; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-bottom: 16px; }
    hr { border: none; border-top: 1px solid #e5e0d8; margin: 24px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nova poruka — <span>Adaptacije Stanova</span></h1>
    </div>
    <div class="body">
      <div class="badge">Novi upit</div>
      <div class="field">
        <div class="label">Ime i prezime</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}" style="color:#e8941a">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Telefon</div>
        <div class="value"><a href="tel:${phone}" style="color:#e8941a">${phone}</a></div>
      </div>
      <div class="field">
        <div class="label">Vrsta radova</div>
        <div class="value">${serviceLabel}</div>
      </div>
      <hr />
      <div class="field">
        <div class="label">Poruka</div>
        <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    <div class="footer">
      Poruka primljena putem kontakt forme na adaptacije-stanova.com
    </div>
  </div>
</body>
</html>`;

    const textContent = `
Nova poruka - Adaptacije Stanova
================================
Ime: ${name}
Email: ${email}
Telefon: ${phone}
Vrsta radova: ${serviceLabel}

Poruka:
${message}
    `.trim();

    const mailjetRes = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(`${apiKey}:${secretKey}`).toString("base64"),
      },
      body: JSON.stringify({
        Messages: [
          {
            From: {
              Email: sender,
              Name: "Adaptacije Stanova",
            },
            To: [
              {
                Email: receiver,
                Name: "Adaptacije Stanova",
              },
            ],
            ReplyTo: {
              Email: email,
              Name: name,
            },
            Subject: `Novi upit od ${name} — ${serviceLabel}`,
            TextPart: textContent,
            HTMLPart: htmlContent,
          },
        ],
      }),
    });

    if (!mailjetRes.ok) {
      const errorData = await mailjetRes.text();
      console.error("Mailjet greška:", errorData);
      return NextResponse.json({ error: "Greška pri slanju" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Kontakt API greška:", error);
    return NextResponse.json({ error: "Interna greška servera" }, { status: 500 });
  }
}

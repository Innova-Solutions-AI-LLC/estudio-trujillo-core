import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

function buildEmailHtml(fields: {
  name: string;
  email: string;
  phone?: string;
  area: string;
  message: string;
}) {
  const { name, email, phone, area, message } = fields;
  const phoneRow = phone
    ? `<tr>
        <td style="padding:0 0 20px;">
          <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#0A1628;opacity:0.5;">Teléfono</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;color:#0A1628;">${phone}</p>
        </td>
      </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:#0A1628;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A1628;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#0A1628;padding:40px 40px 32px;">
              <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#C9A84C;">Estudio Trujillo</p>
              <h1 style="margin:0;font-family:Georgia,serif;font-size:28px;color:#FFFFFF;font-weight:400;line-height:1.2;">Nueva Consulta</h1>
              <div style="width:40px;height:1px;background:#C9A84C;margin-top:18px;"></div>
            </td>
          </tr>

          <!-- Área destacada -->
          <tr>
            <td style="background:#C9A84C;padding:14px 40px;">
              <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#0A1628;opacity:0.7;">Área de consulta</p>
              <p style="margin:4px 0 0;font-family:Georgia,serif;font-size:17px;color:#0A1628;font-weight:700;">${area}</p>
            </td>
          </tr>

          <!-- Cuerpo -->
          <tr>
            <td style="background:#FFFFFF;padding:40px;">
              <table width="100%" cellpadding="0" cellspacing="0">

                <!-- Nombre + Email -->
                <tr>
                  <td width="50%" style="padding:0 16px 20px 0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#0A1628;opacity:0.5;">Nombre</p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;color:#0A1628;">${name}</p>
                  </td>
                  <td width="50%" style="padding:0 0 20px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#0A1628;opacity:0.5;">Email</p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;color:#0A1628;">${email}</p>
                  </td>
                </tr>

                ${phoneRow}

                <!-- Mensaje -->
                <tr>
                  <td colspan="2" style="padding:0;">
                    <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#0A1628;opacity:0.5;">Mensaje</p>
                    <div style="border-left:3px solid #C9A84C;padding:12px 18px;background:#F8F6F2;">
                      <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;color:#0A1628;line-height:1.7;">${message.replace(/\n/g, "<br>")}</p>
                    </div>
                  </td>
                </tr>

                <!-- Separador -->
                <tr><td colspan="2" style="padding:28px 0 0;"><div style="height:1px;background:#E8E4DC;"></div></td></tr>

                <!-- Responder a -->
                <tr>
                  <td colspan="2" style="padding:20px 0 0;">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#0A1628;opacity:0.55;">
                      Responder a: <a href="mailto:${email}" style="color:#C9A84C;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0A1628;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#FFFFFF;opacity:0.4;letter-spacing:0.08em;">
                Mensaje enviado desde el formulario de contacto · estudiotrujillo.com.ar
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, area, message } = req.body ?? {};

  if (!name || !email || !area || !message) {
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Estudio Trujillo Web" <${process.env.GMAIL_USER}>`,
    to: "fborgoni@gmail.com",
    replyTo: email,
    subject: `Nueva consulta: ${area}`,
    html: buildEmailHtml({ name, email, phone, area, message }),
  });

  return res.status(200).json({ ok: true });
}

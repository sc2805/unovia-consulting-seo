import { Resend } from "resend";

// =============================================================================
// Email Utility — Contact Form Email Sender via Resend
// =============================================================================

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || "connect@unovia.in";

  // In development or when API key is missing/placeholder, log submission cleanly
  const isDummyKey =
    !apiKey ||
    apiKey.trim() === "" ||
    apiKey.includes("xxxxxxxx") ||
    apiKey === "re_";

  if (isDummyKey) {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📧 Contact Form Submission (dev/no-key mode)");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`Name:           ${data.name}`);
    console.log(`Email:          ${data.email}`);
    console.log(`Phone:          ${data.phone}`);
    console.log(`Service:        ${data.service}`);
    console.log(`Preferred Date: ${data.preferredDate || "N/A"}`);
    console.log(`Preferred Time: ${data.preferredTime || "N/A"}`);
    console.log(`Message:        ${data.message}`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    return { success: true, id: "dev-mode" };
  }

  const resend = new Resend(apiKey);
  // Default from address — unovia.in sender or custom configured sender
  const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@unovia.in";

  try {
    const { data: resData, error } = await resend.emails.send({
      from: `Unovia Consulting <${fromEmail}>`,
      to: [contactEmail],
      reply_to: data.email,
      subject: `New Inquiry: ${data.service} — ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937;">
          <div style="background: #0F2B5B; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #C5A55A; margin: 0; font-size: 20px;">New Consultation Request</h1>
          </div>
          <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 140px;">Name</td>
                <td style="padding: 8px 0; font-weight: 600;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #0F2B5B;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Phone</td>
                <td style="padding: 8px 0;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Service</td>
                <td style="padding: 8px 0; font-weight: 600; color: #0F2B5B;">${data.service}</td>
              </tr>
              ${
                data.preferredDate || data.preferredTime
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Preferred Time</td>
                <td style="padding: 8px 0;">${data.preferredDate || "Any date"} at ${data.preferredTime || "Any time"} (IST)</td>
              </tr>
              `
                  : ""
              }
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="color: #6b7280; margin: 0 0 8px; font-weight: 600;">Message:</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
          <div style="background: #f9fafb; padding: 16px 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">Sent from Unovia Consulting website contact form</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Resend API Error:", error);
      let hint = "";
      if (error.message?.includes("domain") || error.name === "validation_error") {
        hint = " (Domain 'unovia.in' is not verified in Resend. Please verify unovia.in at https://resend.com/domains or set RESEND_FROM_EMAIL=onboarding@resend.dev for testing)";
      } else if (error.message?.includes("only send testing emails")) {
        hint = " (Resend testing domain onboarding@resend.dev can only send to your Resend account owner email. To send to connect@unovia.in, verify unovia.in domain in Resend)";
      }
      throw new Error((error.message || "Failed to send email via Resend.") + hint);
    }

    return resData;
  } catch (err: unknown) {
    console.error("Failed to send contact email:", err);
    throw err;
  }
}

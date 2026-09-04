import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

// =============================================================================
// Contact Form API Route — POST /api/contact
// =============================================================================

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, service, preferredDate, preferredTime, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "All required fields (Name, Email, Phone, Service, Message) must be filled." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Send the email
    const result = await sendContactEmail({
      name,
      email,
      phone,
      service,
      preferredDate,
      preferredTime,
      message,
    });

    return NextResponse.json(
      { message: "Your message has been sent successfully!", id: result?.id || "submitted" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Contact form error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send message.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiting map
const senders = new Map<string, { count: number; lastReset: number }>();
const MAX_SEND_PER_IP = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

// Updated Validation Schema: Name, Email, and Service are REQUIRED. Others are OPTIONAL.
const quoteSchema = z.object({
  name: z.string().min(1, "Name is required").max(100).trim(),
  service: z.string().min(1, "Service selection is required"),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().optional(),
  origin: z.string().optional(),
  destination: z.string().optional(),
  message: z.string().max(2000).optional(),
});

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);
  if (!clientIp) {
    return NextResponse.json(
      { error: "Malformed request, please try again." },
      { status: 403 },
    );
  }

  // Rate Limiting Check
  const senderData = senders.get(clientIp);
  const now = Date.now();

  if (senderData) {
    if (now - senderData.lastReset > RATE_LIMIT_WINDOW) {
      senders.set(clientIp, { count: 0, lastReset: now });
    } else if (senderData.count >= MAX_SEND_PER_IP) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again in 1 hour." },
        { status: 429 },
      );
    }
  } else {
    senders.set(clientIp, { count: 0, lastReset: now });
  }

  try {
    const body = await request.json();
    const validatedData = quoteSchema.parse(body);

    // Send email using Resend SDK
    const { data, error } = await resend.emails.send({
      from: "Cargo Track Website <onboarding@resend.dev>", // Replace with your domain when in production
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      replyTo: validatedData.email,
      subject: `New Quote Request from ${validatedData.name} (${validatedData.service})`,
      html: `
        <h2>New Quote Request</h2>
        <hr/>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Service Requested:</strong> ${validatedData.service}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || "N/A"}</p>
        <p><strong>Origin:</strong> ${validatedData.origin || "N/A"}</p>
        <p><strong>Destination:</strong> ${validatedData.destination || "N/A"}</p>
        <br />
        <p><strong>Additional Details:</strong></p>
        <p>${validatedData.message ? validatedData.message.replace(/\n/g, "<br>") : "None provided."}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 },
      );
    }

    // Increment rate limit count
    const currentSender = senders.get(clientIp)!;
    senders.set(clientIp, {
      ...currentSender,
      count: currentSender.count + 1,
    });

    return NextResponse.json(
      { message: "Quote request submitted successfully!" },
      { status: 200 },
    );
  } catch (err) {
    console.error("SERVER ERROR DETAILED:", err);

    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input data", details: err.message },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        error: "Internal server error",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    );
  }
}

function getClientIp(request: NextRequest): string | undefined {
  const headers = request.headers;
  const headerIP =
    headers.get("x-forwarded-for") ||
    headers.get("x-real-ip") ||
    headers.get("cf-connecting-ip");
  if (headerIP) return headerIP.split(",")[0].trim();
}

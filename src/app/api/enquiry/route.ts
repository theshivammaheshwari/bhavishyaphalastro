import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const bookingRef = `BHA-${Date.now().toString(36).toUpperCase()}`;

    // Log the enquiry for records
    console.log(`[Astrology Booking Received]:`, {
      bookingRef,
      ...body,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      bookingRef,
      message: "Your enquiry has been received successfully. Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry. Please connect directly via WhatsApp." },
      { status: 500 }
    );
  }
}

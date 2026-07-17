import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, product, message } = body;

    // Basic validation
    if (!name || !phone || !product) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Forward to Web3Forms (free email delivery service)
    const web3formsRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Inquiry — ${product} (Arsh Enterprises)`,
        from_name: "Arsh Enterprises Website",
        name,
        phone,
        product,
        message: message || "(no additional message)",
      }),
    });

    const result = await web3formsRes.json();

    if (!result.success) {
      throw new Error(result.message || "Email delivery failed");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    console.log("New Contact Submission:", {
      name,
      email,
      message,
    });

    // EXAMPLE: Send email or push to CRM here
    // await sendEmail({ name, email, message });

    return NextResponse.json(
      { success: true, message: "Message received." },
      { status: 200 }
    );
  } catch (err) {
    console.error("[CONTACT ERROR]", err);

    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}

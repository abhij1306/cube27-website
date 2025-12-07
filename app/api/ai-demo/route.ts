import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt missing" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing API key" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // adjust as needed
        messages: [
          {
            role: "system",
            content:
              "You are an enterprise-grade AI assistant specializing in automation and operations optimization.",
          },
          { role: "user", content: prompt },
        ],
        stream: false // set true if front-end supports streaming
      }),
    });

    const json = await response.json();

    return NextResponse.json(
      { reply: json.choices?.[0]?.message?.content || "" },
      { status: 200 }
    );
  } catch (err) {
    console.error("[AI DEMO ERROR]", err);

    return NextResponse.json(
      { error: "AI demo failed" },
      { status: 500 }
    );
  }
}

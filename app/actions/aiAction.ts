"use server";

export async function aiAction(prompt: string) {
  try {
    if (!prompt) return { error: "Missing prompt" };

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return { error: "Missing OpenAI API Key" };
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // Change as needed
        messages: [
          {
            role: "system",
            content:
              "You are an AI assistant specializing in automation, operations, and enterprise transformation.",
          },
          { role: "user", content: prompt },
        ],
        stream: false,
      }),
    });

    const json = await response.json();

    return {
      reply: json.choices?.[0]?.message?.content || "",
    };
  } catch (err) {
    console.error("[AI ACTION ERROR]", err);
    return { error: "AI action failed" };
  }
}

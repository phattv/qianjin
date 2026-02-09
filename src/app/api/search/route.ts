import { NextResponse } from "next/server";
import OpenAI from "openai";
import { apiKey, model, results, systemPrompt } from "./_constants";

if (!apiKey) {
  throw new Error("OpenAI API Key is required.");
}
const client = new OpenAI({ apiKey });

export async function POST(req: Request) {
  const { input } = await req.json();
  if (!input) return NextResponse.json({ error: "Input is required." }, { status: 400 });

  try {
    const chatCompletion = await client.chat.completions.create({
      model,
      n: results,
      stream: false,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: input },
      ],
      response_format: { type: "json_object" },
    });
    if (!chatCompletion?.choices[0]?.message?.content) {
      return NextResponse.json({ error: "Failed to process your request." }, { status: 500 });
    }

    const jsonResponse = JSON.parse(chatCompletion.choices[0].message.content);
    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("OpenAI Error:", error);
    return NextResponse.json({ error: "Failed to process your request." }, { status: 500 });
  }
}

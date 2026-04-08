import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a Chinese language teacher grading a student's exercise answer.

Return ONLY valid JSON in this exact shape:
{
  "correct": true or false,
  "score": 0-100,
  "feedback": "brief, encouraging feedback in English — explain what was right/wrong, give the correct answer if wrong"
}

Grading rubric by exercise type:
- fill_in_blank: correct = exact character match (ignore whitespace/tone marks). score 100 if correct, 0 if wrong.
- comprehension: score based on how many key points are covered (0-100). correct = score >= 60.
- use_in_context: score based on correct usage, grammar, and naturalness (0-100). correct = score >= 70. An answer with minor errors can still be correct.

Always be encouraging. For incorrect answers, explain why and show the expected answer.`;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.exercise || !body?.user_answer) {
    return NextResponse.json({ error: "exercise and user_answer are required." }, { status: 400 });
  }

  const { exercise, user_answer } = body;

  const userPrompt = `Exercise type: ${exercise.type}
Question: ${exercise.question}
Expected answer: ${exercise.expected_answer}
Student's answer: ${user_answer}

Grade this answer.`;

  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userPrompt }],
    });

    const raw = message.content[0].type === "text" ? message.content[0].text : "";
    const text = raw
      .replace(/^```(?:json)?\n?/, "")
      .replace(/\n?```$/, "")
      .trim();
    const result = JSON.parse(text);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Grading error:", error);
    return NextResponse.json({ error: "Failed to grade answer." }, { status: 500 });
  }
}

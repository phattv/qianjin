import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a Chinese language teacher. Generate a lesson for an advanced student (HSK 5-6 level).

Return ONLY valid JSON in this exact shape:
{
  "topic": "string — lesson topic in English",
  "vocabulary": [
    {
      "characters": "汉字",
      "pinyin": "hàn zì",
      "meaning_en": "Chinese characters",
      "meaning_vi": "chữ Hán",
      "word_type": "noun"
    }
  ],
  "passage": "string — a 150-250 word passage in Chinese using the vocabulary words naturally",
  "exercises": [
    {
      "id": "ex_1",
      "type": "fill_in_blank",
      "question": "sentence in Chinese with ___ as the blank, e.g. 我们要保护___。",
      "expected_answer": "the missing word"
    },
    {
      "id": "ex_2",
      "type": "fill_in_blank",
      "question": "another fill-in-blank sentence",
      "expected_answer": "the missing word"
    },
    {
      "id": "ex_3",
      "type": "comprehension",
      "question": "A question in English about the passage",
      "expected_answer": "a model answer in English covering key points"
    },
    {
      "id": "ex_4",
      "type": "comprehension",
      "question": "Another comprehension question in English",
      "expected_answer": "model answer"
    },
    {
      "id": "ex_5",
      "type": "use_in_context",
      "question": "用「vocabulary word」造一个句子。(Use [word] in a sentence.)",
      "expected_answer": "an example of a good answer"
    }
  ]
}

Rules:
- Vocabulary: 6-8 words, all genuinely HSK 5-6 level
- Passage must use most of the vocabulary words naturally
- Fill-in-blank: the blank should require one of the vocabulary words
- Comprehension: test understanding of the passage content
- use_in_context: pick one vocabulary word, student writes a sentence using it correctly
- Respond with JSON only, no markdown fences`;

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const hsk_level: number = body.hsk_level ?? 5;
  const topic: string | undefined = body.topic;

  const userPrompt = topic
    ? `Generate a lesson about the topic: "${topic}". HSK level: ${hsk_level}.`
    : `Generate a lesson on an interesting topic suitable for HSK ${hsk_level} students. Pick the topic yourself.`;

  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userPrompt }],
    });

    const raw = message.content[0].type === "text" ? message.content[0].text : "";
    const text = raw
      .replace(/^```(?:json)?\n?/, "")
      .replace(/\n?```$/, "")
      .trim();
    const lesson = JSON.parse(text);
    return NextResponse.json(lesson);
  } catch (error) {
    console.error("Lesson generation error:", error);
    return NextResponse.json({ error: "Failed to generate lesson." }, { status: 500 });
  }
}

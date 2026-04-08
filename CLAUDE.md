# 前进 Qiánjìn — AI Chinese Teacher

## Vision

A personal AI-powered Chinese learning app. Claude acts as a dynamic teacher: it generates lessons (vocabulary + reading passage), creates exercises, and grades responses — both objectively (right/wrong) and subjectively (quality score + written feedback for open answers).

The core learning loop mirrors offline class format:

1. **Lesson** — Claude presents new vocabulary in context within a reading passage
2. **Exercises** — fill-in-the-blank, reading comprehension Q&A, use-word-in-context, translation
3. **Grading** — AI marks answers and explains mistakes
4. **Review** — missed words saved for SRS flashcard review

Target user: HSK 5-6 level. UI language: Vietnamese + English.

---

## Tech Stack

| Layer           | Technology                                        |
| --------------- | ------------------------------------------------- |
| Frontend        | Next.js 15, React 19, TypeScript                  |
| Database        | Supabase (PostgreSQL)                             |
| AI (primary)    | Anthropic Claude API — lesson generation, grading |
| AI (secondary)  | OpenAI API — existing search/query feature        |
| Package manager | Bun                                               |
| Deployment      | Vercel                                            |

---

## Dev Setup

```bash
vercel env pull     # pull env vars (SUPABASE_URL, ANTHROPIC_API_KEY, OPENAI_API_KEY)
bun install
bun dev
```

---

## Feature Roadmap

### Phase 1 — AI Teacher Core (build first)

- [ ] `/api/lesson` — Claude generates topic, vocab list, and reading passage at HSK 5-6
- [ ] Exercise generation: fill-in-blank, comprehension Q&A, use-word-in-context
- [ ] AI grading: right/wrong for objective answers; quality score + feedback for subjective
- [ ] Session summary UI: score, mistakes, words to review

### Phase 2 — Vocabulary Tools

- [ ] Polish word search/lookup UI (backend already exists: `/api/query`, `/api/search`)
- [ ] Flashcard/SRS: review vocab from past sessions using spaced repetition intervals
- [ ] Save unknown/missed words from lessons for future review

### Phase 3 — Listening & Speaking

- [ ] TTS: hear pronunciation of any word or passage
- [ ] Listening exercises: audio plays, user answers without seeing text
- [ ] Speaking practice: record + AI scores pronunciation

### Phase 4 — Writing

- [ ] Stroke order visualization for characters
- [ ] Handwriting canvas input + recognition
- [ ] Written answer grading by Claude

### Phase 5 — Config & Polish

- [ ] HSK level selector (1–2, 3–4, 5–6)
- [ ] Topic preference (food, travel, work, culture, news...)
- [ ] UI language toggle: Vietnamese / English
- [ ] PWA offline support
- [ ] Daily practice push notifications

---

## Architecture Notes

- **AI teacher API**: `/src/app/api/lesson/` — to be created in Phase 1
- **Word DB**: `words`, `word_extras`, `search_history` tables in Supabase (schema in `src/schema.sql`)
- **Session persistence**: lesson sessions + exercise results to be stored in Supabase for SRS and history
- **Grading**: Claude evaluates answers inline within the lesson API call (streaming preferred for UX)

---

## Key References

- Hanzi drawing input: [JWu-Git/react-hanzi-lookup](https://github.com/JWu-Git/react-hanzi-lookup), [gugray/HanziLookupJS](https://github.com/gugray/HanziLookupJS)
- Stroke data: [skishore/makemeahanzi](https://github.com/skishore/makemeahanzi)

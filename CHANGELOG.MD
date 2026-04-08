# CHANGELOG

## 2026-04-08 — AI Teacher Core

- feat: add `POST /api/lesson` — Claude generates topic, vocabulary, reading passage, and exercises (fill-in-blank, comprehension, use-in-context) at a given HSK level
- feat: lesson UI — home screen with topic input + HSK level picker, vocabulary grid, reading passage, exercise flow with progress bar, inline grading, and session summary
- feat: mock lessons with hardcoded lessons randomized on each generate, toggled via `NEXT_PUBLIC_USE_MOCK`
- docs: add CLAUDE.md with project vision, tech stack, dev setup, and 5-phase feature roadmap

## 2025-01-11 - [#2](https://github.com/phattv/qianjin/pull/2)

- feat(app): integrate openAI chat completion API

## 2025-01-09 - [#1](https://github.com/phattv/qianjin/pull/1)

- chore(setup): configure make commands, git hooks, node, typescript, linter & formatter
- docs: add README & CHANGELOG
- feat(app): configure PWA

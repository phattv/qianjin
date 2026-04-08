"use client";

import { useState } from "react";
import { getRandomMockLesson, MOCK_GRADE } from "./_mock";
import { ExerciseAttempt, GradeResult, Lesson } from "./_types";
import styles from "./page.module.css";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === "true";

type Phase = "home" | "loading" | "lesson" | "exercising" | "done";

const EXERCISE_LABELS: Record<string, string> = {
  fill_in_blank: "Fill in the blank",
  comprehension: "Reading comprehension",
  use_in_context: "Use in context",
};

export default function Home() {
  const [phase, setPhase] = useState<Phase>("home");
  const [topic, setTopic] = useState("");
  const [hskLevel, setHskLevel] = useState(5);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [grading, setGrading] = useState(false);
  const [currentGrade, setCurrentGrade] = useState<GradeResult | null>(null);
  const [attempts, setAttempts] = useState<ExerciseAttempt[]>([]);

  async function generateLesson() {
    setPhase("loading");
    try {
      if (USE_MOCK) {
        await new Promise((r) => setTimeout(r, 600));
        setLesson(getRandomMockLesson());
      } else {
        const res = await fetch("/api/lesson", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ topic: topic || undefined, hsk_level: hskLevel }),
        });
        if (!res.ok) throw new Error("Failed to generate lesson");
        setLesson(await res.json());
      }
      setPhase("lesson");
      setExerciseIndex(0);
      setAttempts([]);
    } catch {
      setPhase("home");
      alert("Failed to generate lesson. Check your API key and try again.");
    }
  }

  async function submitAnswer() {
    if (!lesson || !answer.trim()) return;
    setGrading(true);
    const exercise = lesson.exercises[exerciseIndex];
    try {
      let grade: GradeResult;
      if (USE_MOCK) {
        await new Promise((r) => setTimeout(r, 500));
        grade = MOCK_GRADE;
      } else {
        const res = await fetch("/api/grade", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ exercise, user_answer: answer }),
        });
        if (!res.ok) throw new Error("Failed to grade answer");
        grade = await res.json();
      }
      setCurrentGrade(grade);
      setAttempts((prev) => [...prev, { exercise, answer, grade }]);
    } catch {
      alert("Failed to grade answer. Try again.");
    } finally {
      setGrading(false);
    }
  }

  function nextExercise() {
    if (!lesson) return;
    setCurrentGrade(null);
    setAnswer("");
    if (exerciseIndex + 1 >= lesson.exercises.length) {
      setPhase("done");
    } else {
      setExerciseIndex((i) => i + 1);
      setPhase("exercising");
    }
  }

  function startExercises() {
    setPhase("exercising");
    setExerciseIndex(0);
    setAnswer("");
    setCurrentGrade(null);
    setAttempts([]);
  }

  function reset() {
    setPhase("home");
    setLesson(null);
    setAttempts([]);
    setAnswer("");
    setCurrentGrade(null);
  }

  const totalScore =
    attempts.length > 0
      ? Math.round(attempts.reduce((s, a) => s + a.grade.score, 0) / attempts.length)
      : 0;

  return (
    <div className={styles.page}>
      {USE_MOCK && (
        <div className={styles.mockBanner}>
          Mock mode — set <code>NEXT_PUBLIC_USE_MOCK=false</code> to use live API
        </div>
      )}

      {/* HOME */}
      {phase === "home" && (
        <main className={styles.home}>
          <h1 className={styles.title}>前进</h1>
          <p className={styles.subtitle}>Your AI Chinese teacher</p>
          <div className={styles.form}>
            <input
              className={styles.input}
              placeholder="Topic (optional) — e.g. 城市化, climate, food culture"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && generateLesson()}
            />
            <div className={styles.row}>
              <label className={styles.label}>HSK level</label>
              <select
                className={styles.select}
                value={hskLevel}
                onChange={(e) => setHskLevel(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    HSK {n}
                  </option>
                ))}
              </select>
            </div>
            <button className={styles.btn} onClick={generateLesson}>
              Generate Lesson
            </button>
          </div>
        </main>
      )}

      {/* LOADING */}
      {phase === "loading" && (
        <main className={styles.center}>
          <div className={styles.spinner} />
          <p className={styles.loadingText}>Generating your lesson…</p>
        </main>
      )}

      {/* LESSON OVERVIEW */}
      {phase === "lesson" && lesson && (
        <main className={styles.lesson}>
          <div className={styles.lessonHeader}>
            <span className={styles.tag}>HSK {hskLevel}</span>
            <h2 className={styles.lessonTopic}>{lesson.topic}</h2>
          </div>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Vocabulary</h3>
            <div className={styles.vocabGrid}>
              {lesson.vocabulary.map((word) => (
                <div key={word.characters} className={styles.vocabCard}>
                  <div className={styles.hanzi}>{word.characters}</div>
                  <div className={styles.pinyin}>{word.pinyin}</div>
                  <div className={styles.meaning}>{word.meaning_en}</div>
                  <div className={styles.meaningVi}>{word.meaning_vi}</div>
                  <div className={styles.wordType}>{word.word_type}</div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Reading Passage</h3>
            <p className={styles.passage}>{lesson.passage}</p>
          </section>

          <button className={styles.btn} onClick={startExercises}>
            Start Exercises →
          </button>
        </main>
      )}

      {/* EXERCISING */}
      {phase === "exercising" && lesson && (
        <main className={styles.lesson}>
          <div className={styles.exerciseProgress}>
            Exercise {exerciseIndex + 1} / {lesson.exercises.length}
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${((exerciseIndex + 1) / lesson.exercises.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Passage reference (collapsed feel via smaller style) */}
          <details className={styles.passageCollapse}>
            <summary>Show passage</summary>
            <p className={styles.passageSmall}>{lesson.passage}</p>
          </details>

          <section className={styles.exerciseCard}>
            <div className={styles.exerciseType}>
              {EXERCISE_LABELS[lesson.exercises[exerciseIndex].type]}
            </div>
            <p className={styles.exerciseQuestion}>{lesson.exercises[exerciseIndex].question}</p>

            {!currentGrade ? (
              <>
                <textarea
                  className={styles.answerInput}
                  placeholder="Your answer…"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  rows={4}
                  disabled={grading}
                />
                <button
                  className={styles.btn}
                  onClick={submitAnswer}
                  disabled={grading || !answer.trim()}
                >
                  {grading ? "Grading…" : "Submit"}
                </button>
              </>
            ) : (
              <div className={styles.gradeResult}>
                <div className={styles.answerGiven}>
                  <span className={styles.answerLabel}>Your answer:</span> {answer}
                </div>
                <div
                  className={`${styles.gradeScore} ${currentGrade.correct ? styles.correct : styles.incorrect}`}
                >
                  {currentGrade.correct ? "✓ Correct" : "✗ Incorrect"} — {currentGrade.score}/100
                </div>
                <p className={styles.gradeFeedback}>{currentGrade.feedback}</p>
                <button className={styles.btn} onClick={nextExercise}>
                  {exerciseIndex + 1 < lesson.exercises.length
                    ? "Next Exercise →"
                    : "See Results →"}
                </button>
              </div>
            )}
          </section>
        </main>
      )}

      {/* DONE */}
      {phase === "done" && (
        <main className={styles.lesson}>
          <div className={styles.lessonHeader}>
            <h2 className={styles.lessonTopic}>Session Complete</h2>
          </div>

          <div
            className={`${styles.scoreBig} ${totalScore >= 70 ? styles.correct : styles.incorrect}`}
          >
            {totalScore}
            <span className={styles.scoreLabel}>/100</span>
          </div>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Review</h3>
            <div className={styles.attemptList}>
              {attempts.map((a) => (
                <div key={a.exercise.id} className={styles.attemptItem}>
                  <div className={styles.attemptHeader}>
                    <span className={styles.exerciseType}>{EXERCISE_LABELS[a.exercise.type]}</span>
                    <span
                      className={`${styles.attemptScore} ${a.grade.correct ? styles.correct : styles.incorrect}`}
                    >
                      {a.grade.score}/100
                    </span>
                  </div>
                  <p className={styles.attemptQuestion}>{a.exercise.question}</p>
                  <p className={styles.attemptAnswer}>
                    <strong>Your answer:</strong> {a.answer}
                  </p>
                  <p className={styles.attemptFeedback}>{a.grade.feedback}</p>
                </div>
              ))}
            </div>
          </section>

          <div className={styles.row}>
            <button className={styles.btn} onClick={reset}>
              New Lesson
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

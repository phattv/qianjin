export interface VocabWord {
  characters: string;
  pinyin: string;
  meaning_en: string;
  meaning_vi: string;
  word_type: string;
}

export type ExerciseType = "fill_in_blank" | "comprehension" | "use_in_context";

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  expected_answer: string;
}

export interface Lesson {
  topic: string;
  vocabulary: VocabWord[];
  passage: string;
  exercises: Exercise[];
}

export interface GradeResult {
  correct: boolean;
  score: number;
  feedback: string;
}

export interface ExerciseAttempt {
  exercise: Exercise;
  answer: string;
  grade: GradeResult;
}

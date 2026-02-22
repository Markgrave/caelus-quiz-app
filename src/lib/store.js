import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useQuizStore = create(
  persist(
    (set, get) => ({
      questions: [],
      status: "idle",
      settings: {
        categoryIndex: null,
        categoryLabel: "",
        amount: 0,
        difficulty: "",
      },
      score: 0,
      error: null,
      timeLeft: 30,
      currentIndex: 0,
      answers: [],

      setSettings: (newSettings) =>
        set((state) => ({ settings: { ...state.settings, ...newSettings } })),
      startQuiz: (questions) =>
        set({
          status: "active",
          questions: questions,
          currentIndex: 0,
          score: 0,
          timeLeft: 30,
          answers: [],
        }),
      answerQuestion: (answer) => {
        const { questions, currentIndex, answers, timeLeft, score } = get();
        const currentQuestion = questions[currentIndex];
        const isCorrect = answer === currentQuestion.correct_answer;
        const points = calculatePoints(
          currentQuestion.difficulty,
          30 - timeLeft,
        );

        set({
          answers: [...answers, answer],
          score: isCorrect ? score + points : score,
        });
      },
      nextQuestion: () => {
        const { currentIndex, questions } = get();
        const isLastQuestion = currentIndex >= questions.length - 1;

        set({
          currentIndex: isLastQuestion ? currentIndex : currentIndex + 1,
          status: isLastQuestion ? "finished" : "active",
          timeLeft: 30,
        });
      },
      finishQuiz: () => {
        set({
          status: "finished",
        });
      },
    }),
    {
      name: "quiz-storage",
    },
  ),
);

function calculatePoints(difficulty, time) {
  const base = { easy: 10, medium: 20, hard: 30 }[difficulty] || 10;
  const timeBonus = Math.max(0, Math.floor((30 - time) / 3));
  return base + timeBonus;
}

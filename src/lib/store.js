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
    }),
    {
      name: "quiz-storage",
    },
  ),
);

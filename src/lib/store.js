import { create } from "zustand";

export const useQuizStore = create((set, get) => ({
  questions: [],
  status: "idle",
  settings: {
    category: null,
    amount: 0,
    difficulty: "",
  },
  score: 0,
  error: null,
  timeLeft: 30,
  currentIndex: 0,
  answers: [],

  setQuestions: (questions) => set({ questions }),
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
}));

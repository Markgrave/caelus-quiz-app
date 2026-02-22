import axios from "axios";
import { shuffleArray } from "./utils";

const API_BASE_URL = "https://opentdb.com";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCategories = async () => {
  const response = await axiosInstance.get("/api_category.php");
  const data = await response.data;

  const categories = data.trivia_categories.map((category) => {
    return {
      value: category.id,
      label: category.name.includes("Entertainment:")
        ? category.name.split("Entertainment:")[1]
        : category.name.includes("Science:")
          ? category.name.split("Science:")[1]
          : category.name,
    };
  });

  return categories;
};

export const getQuestions = async (amount, category, difficulty) => {
  const response = await axiosInstance.get(
    `/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple&encode=url3986`,
  );

  const questions = response.data.results.map((q, index) => {
    return {
      ...q,
      id: index,
      question: decodeURIComponent(q.question),
      correct_answer: decodeURIComponent(q.correct_answer),
      incorrect_answers: decodeURIComponent(q.incorrect_answers),
      all_answers: shuffleArray([
        ...q.incorrect_answers.map((answer) => decodeURIComponent(answer)),
        decodeURIComponent(q.correct_answer),
      ]),
    };
  });

  return questions;
};

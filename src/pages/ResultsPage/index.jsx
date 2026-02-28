import styles from "./ResultsPage.module.scss";
import Button from "../../components/ui/Button";
import Leaderboard from "../../components/Leaderboard";

import { useQuizStore } from "../../lib/store";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addValue } from "../../lib/leaderboard";

const ResultsPage = () => {
  const { score, answers, questions, settings, resetQuiz, status } =
    useQuizStore();
  const correctAnswers = answers.filter(
    (answer, index) =>
      questions[index] && answer === questions[index].correct_answer,
  ).length;

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);

  const handlePlayAgain = () => {
    navigate("/");
    resetQuiz();
  };

  const handleReview = () => {
    navigate("/quiz/review");
  };

  useEffect(() => {
    if (status === "idle") {
      navigate("/");
    } else if (status === "active") {
      navigate("/quiz");
    }
  }, [status, navigate]);

  return (
    <>
      <section className={styles.contentWrapper}>
        <h2 className={styles.heading}>Quiz Completed!</h2>
        <p className={styles.text}>
          You have earned <span className={styles.attention}>{score}</span>{" "}
          points and got{" "}
          <span className={styles.attention}>{correctAnswers}</span> out of{" "}
          <span className={styles.attention}>{questions.length}</span> (
          {questions.length > 0 ? (correctAnswers / questions.length) * 100 : 0}
          %) questions correct!
        </p>

        <p className={styles.text}>Would you like to record your results?</p>

        <div className={styles.recordWrapper}>
          <div className={styles.inputWrapper}>
            <p className={styles.text}>Enter your name:</p>
            <input
              className={styles.input}
              type="text"
              placeholder=""
              minLength={3}
              maxLength={12}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Button
            disabled={saved || name.length < 3}
            onClick={() => {
              addValue(name, score, settings.categoryLabel);
              setSaved(true);
            }}
          >
            {saved ? "Saved!" : "Save"}
          </Button>
        </div>

        <div className={styles.actionsWrapper}>
          <Button onClick={handleReview}>Review</Button>
          <Button onClick={handlePlayAgain}>Play again</Button>
        </div>
      </section>

      <Leaderboard />
    </>
  );
};

export default ResultsPage;

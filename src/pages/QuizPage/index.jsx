import styles from "./QuizPage.module.scss";
import QuestionCard from "../../components/QuestionCard/index.jsx";
import { CiTimer } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import useSound from "use-sound";
import correct from "../../../public/sounds/correct-answer.wav";
import incorrect from "../../../public/sounds/incorrect-answer.mp3";

import { useQuizStore } from "../../lib/store";
import { useTimer } from "../../hooks/useTimer";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const navigate = useNavigate();
  const {
    questions,
    settings,
    currentIndex,
    answerQuestion,
    score,
    nextQuestion,
    status,
    finishQuiz,
  } = useQuizStore();
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const isActive = !answered;
  const [playCorrect] = useSound(correct);
  const [playIncorrect] = useSound(incorrect);

  const handleTimeout = useCallback(() => {
    if (!answered) {
      answerQuestion("");
      setAnswered(true);
      playIncorrect();

      setTimeout(() => {
        setAnswered(false);
        setSelectedAnswer(null);
        nextQuestion();
        resetTimer();

        if (currentIndex >= questions.length - 1) {
          finishQuiz();
          navigate("/quiz/results");
        }
      }, 1000);
    }
  }, [answered, answerQuestion]);

  const handleAnswer = (answer) => {
    setAnswered(true);
    setSelectedAnswer(answer);
    answerQuestion(answer);

    if (answer === questions[currentIndex].correct_answer) {
      playCorrect();
    } else {
      playIncorrect();
    }

    setTimeout(() => {
      setAnswered(false);
      setSelectedAnswer(null);
      nextQuestion();
      resetTimer();

      if (currentIndex >= questions.length - 1) {
        finishQuiz();
        navigate("/quiz/results");
      }
    }, 1000);
  };

  const { timeLeft, resetTimer } = useTimer(30, handleTimeout, isActive);

  useEffect(() => {
    if (
      questions.length === 0 ||
      (status !== "active" && status !== "finished")
    ) {
      navigate("/");
    }
  }, [status, questions.length, navigate]);

  return (
    <>
      <section className={styles.contentWrapper}>
        <div className={styles.pageHeader}>
          <div className={styles.headerLeft}>
            <p>Topic: {settings.categoryLabel}</p>

            <div className={styles.progressBar}>
              <div
                className={styles.progressBarFill}
                style={{
                  width: `${((currentIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <p>
              {currentIndex + 1}/{questions.length}
            </p>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.timer}>
              <CiTimer />
              <p>{timeLeft}s</p>
            </div>

            <div className={styles.score}>
              <CiStar />
              <p>{score}pts</p>
            </div>
          </div>
        </div>

        <div className={styles.questionWrapper}>
          <QuestionCard
            handleAnswer={handleAnswer}
            questions={questions}
            currentIndex={currentIndex}
            answered={answered}
            selectedAnswer={selectedAnswer}
          />
        </div>
      </section>
    </>
  );
};

export default QuizPage;

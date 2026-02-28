import styles from "./ReviewPage.module.scss";
import Button from "../../components/ui/Button";
import { useQuizStore } from "../../lib/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ReviewPage = () => {
  const { questions, answers, resetQuiz, status, startQuiz } = useQuizStore();
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    startQuiz(questions);
    navigate("/quiz");
  };

  const handleReturnHome = () => {
    resetQuiz();
    navigate("/");
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
        <h2 className={styles.heading}>Review Your Answers</h2>

        <div className={styles.reviewList}>
          {questions.map((question, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === question.correct_answer;

            return (
              <div key={index} className={styles.reviewItem}>
                <p className={styles.questionText}>
                  {index + 1}. {question.question}
                </p>

                <div className={styles.answersContainer}>
                  <div className={styles.answerRow}>
                    <p className={styles.label}>Your answer:</p>
                    <p
                      className={isCorrect ? styles.correct : styles.incorrect}
                    >
                      {userAnswer || "Not answered"}
                    </p>
                  </div>

                  {!isCorrect && (
                    <div className={styles.answerRow}>
                      <p className={styles.label}>Correct answer:</p>
                      <p className={styles.correct}>
                        {question.correct_answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.actions}>
          <Button onClick={handlePlayAgain}>Play again</Button>
          <Button onClick={handleReturnHome}>Return home</Button>
        </div>
      </section>
    </>
  );
};

export default ReviewPage;

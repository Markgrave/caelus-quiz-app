import styles from "./QuestionCard.module.scss";
import Button from "../ui/Button";

const QuestionCard = ({
  handleAnswer,
  questions,
  currentIndex,
  answered,
  selectedAnswer,
}) => {
  const currentQuestion = questions[currentIndex];

  if (!currentQuestion) {
    return <div>No questions found</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.question}>{currentQuestion.question}</div>

      <div className={styles.answers}>
        {currentQuestion.all_answers.map((answer, index) => {
          let buttonType = "answer";
          if (answered) {
            if (answer === currentQuestion.correct_answer) {
              buttonType = "answerRight";
            } else if (answer === selectedAnswer) {
              buttonType = "answerWrong";
            }
          }

          return (
            <Button
              key={index}
              type={buttonType}
              onClick={() => handleAnswer(answer)}
              disabled={answered}
            >
              {answer}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;

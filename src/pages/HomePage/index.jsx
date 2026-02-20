import MainLayout from "../../components/MainLayout/index.jsx";
import styles from "./HomePage.module.scss";

import CategorySelect from "../../components/CategorySelect/index.jsx";
import AmountSelect from "../../components/AmountSelect/index.jsx";
import DifficultySelect from "../../components/DifficultySelect/index.jsx";
import Button from "../../components/ui/Button/index.jsx";
import { useQuizStore } from "../../lib/store.js";
import { getQuestions } from "../../lib/api.js";
import { shuffleArray } from "../../lib/utils.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { settings, setSettings, startQuiz } = useQuizStore();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleQuizStart = async () => {
    setLoading(true);

    try {
      const questions = await getQuestions(
        settings.amount,
        settings.category,
        settings.difficulty,
      );
      setQuestions(questions);
      console.log(questions);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      startQuiz(questions);
      navigate("/quiz");
    }
  };

  return (
    <MainLayout>
      <section className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Configure your quiz.</h2>

            <p className={styles.description}>
              Choose any category, difficulty and number of questions. The
              faster you answer and the more difficult questions you choose -
              the more points you get. Good luck!
            </p>
          </div>

          <div className={styles.configWrapper}>
            <div className={styles.configItem}>
              <CategorySelect
                handleOnChange={(e) => setSettings({ category: e.value })}
              />
            </div>

            <div className={styles.configItem}>
              <AmountSelect
                handleOnChange={(e) => setSettings({ amount: e.value })}
              />
            </div>

            <div className={styles.configItem}>
              <DifficultySelect
                handleOnChange={(e) => setSettings({ difficulty: e.value })}
              />
            </div>
          </div>
        </div>

        <Button
          disabled={
            settings.amount === 0 ||
            settings.category === null ||
            settings.difficulty === ""
          }
          onClick={handleQuizStart}
        >
          {loading ? "LOADING..." : "START QUIZ"}
        </Button>
      </section>

      <section className={styles.leaderboardWrapper}></section>
    </MainLayout>
  );
};

export default HomePage;

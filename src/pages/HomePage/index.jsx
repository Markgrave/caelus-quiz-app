import MainLayout from "../../components/MainLayout/index.jsx";
import styles from "./HomePage.module.scss";

import CategorySelect from "../../components/CategorySelect/index.jsx";
import AmountSelect from "../../components/AmountSelect/index.jsx";
import DifficultySelect from "../../components/DifficultySelect/index.jsx";
import Button from "../../components/ui/Button/index.jsx";
import Leaderboard from "../../components/Leaderboard/index.jsx";
import { useQuizStore } from "../../lib/store.js";
import { getQuestions } from "../../lib/api.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { settings, setSettings, startQuiz } = useQuizStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleQuizStart = async () => {
    setLoading(true);

    try {
      const fetchedQuestions = await getQuestions(
        settings.amount,
        settings.categoryIndex,
        settings.difficulty,
      );

      startQuiz(fetchedQuestions);
      navigate("/quiz");
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    } finally {
      setLoading(false);
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
                handleOnChange={(e) =>
                  setSettings({
                    categoryIndex: e.value,
                    categoryLabel: e.label,
                  })
                }
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
            settings.categoryIndex === null ||
            settings.difficulty === ""
          }
          onClick={handleQuizStart}
        >
          {loading ? "LOADING..." : "START QUIZ"}
        </Button>
      </section>

      <Leaderboard />
    </MainLayout>
  );
};

export default HomePage;

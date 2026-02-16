import MainLayout from "../../components/MainLayout/index.jsx";
import styles from "./HomePage.module.scss";

import CategorySelect from "../../components/CategorySelect/index.jsx";
import Button from "../../components/ui/Button/index.jsx";

const HomePage = () => {
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
              <CategorySelect />
            </div>

            <div className={styles.configItem}></div>

            <div className={styles.configItem}></div>
          </div>
        </div>

        <div>
          <Button>START QUIZ</Button>
        </div>
      </section>

      <section className={styles.leaderboardWrapper}></section>
    </MainLayout>
  );
};

export default HomePage;

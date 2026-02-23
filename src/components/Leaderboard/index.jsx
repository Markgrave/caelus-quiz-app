import { getLeaderboard, clearLeaderboard } from "../../lib/leaderboard";
import styles from "./Leaderboard.module.scss";
import Button from "../ui/Button";

import { GiPodiumWinner } from "react-icons/gi";
import { GiPodiumSecond } from "react-icons/gi";
import { GiPodiumThird } from "react-icons/gi";

const Leaderboard = () => {
  const leaderboard = getLeaderboard();

  return (
    <section className={styles.leaderboardWrapper}>
      <h2 className={styles.heading}>Leaderboard</h2>
      <div className={styles.entries}>
        {leaderboard.map((entry) => (
          <div key={entry.id} className={styles.entryWrapper}>
            <div className={styles.entry}>
              {leaderboard.indexOf(entry) === 0 ? (
                <p className={styles.award}>
                  <GiPodiumWinner />
                </p>
              ) : leaderboard.indexOf(entry) === 1 ? (
                <p className={styles.award}>
                  <GiPodiumSecond />
                </p>
              ) : leaderboard.indexOf(entry) === 2 ? (
                <p className={styles.award}>
                  <GiPodiumThird />
                </p>
              ) : null}
              <p>{entry.name}</p>
              <p>{entry.score}pts</p>
              <p>{entry.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leaderboard;

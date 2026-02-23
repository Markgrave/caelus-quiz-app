const LEADERBOARD_KEY = "leaderboard";
const MAX_ENTRIES = 10;

export const getLeaderboard = () => {
  const leaderboard = localStorage.getItem(LEADERBOARD_KEY);
  return leaderboard ? JSON.parse(leaderboard) : [];
};

export const addValue = (name, score, category) => {
  const leaderboard = getLeaderboard();

  leaderboard.push({
    id: crypto.randomUUID(),
    name,
    score,
    category,
  });

  leaderboard.sort((a, b) => b.score - a.score);

  if (leaderboard.length > MAX_ENTRIES) {
    leaderboard.pop();
  }

  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));
};

export const clearLeaderboard = () => {
  localStorage.removeItem(LEADERBOARD_KEY);
};

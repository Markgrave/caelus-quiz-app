import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/index.jsx";
import QuizPage from "./pages/QuizPage/index.jsx";
import ResultsPage from "./pages/ResultsPage/index.jsx";
import ReviewPage from "./pages/ReviewPage/index.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/results" element={<ResultsPage />} />
        <Route path="/quiz/review" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;

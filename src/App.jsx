import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage/index.jsx";
import QuizPage from "./pages/QuizPage/index.jsx";
import ResultsPage from "./pages/ResultsPage/index.jsx";
import ReviewPage from "./pages/ReviewPage/index.jsx";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./components/MainLayout/index.jsx";
import layoutStyles from "./components/MainLayout/Layout.module.scss";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={layoutStyles.pageContainer}
              >
                <HomePage />
              </motion.div>
            }
          />
          <Route
            path="/quiz"
            element={
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={layoutStyles.pageContainer}
              >
                <QuizPage />
              </motion.div>
            }
          />
          <Route
            path="/quiz/results"
            element={
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={layoutStyles.pageContainer}
              >
                <ResultsPage />
              </motion.div>
            }
          />
          <Route
            path="/quiz/review"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={layoutStyles.pageContainer}
              >
                <ReviewPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;

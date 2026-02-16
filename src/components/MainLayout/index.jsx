import Header from "../ui/Header/index.jsx";
import styles from "./Layout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default MainLayout;

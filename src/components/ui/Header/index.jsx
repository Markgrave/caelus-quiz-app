import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <Link to="/" className={styles.link}>
          <h1 className={styles.title}>Caelus.</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;

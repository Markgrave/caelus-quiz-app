import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Caelus.</h1>
      </div>
    </header>
  );
};

export default Header;

import styles from "./Button.module.scss";
import classnames from "classnames";

const Button = ({ disabled = false, children, onClick }) => {
  const buttonClass = classnames(styles.button, {
    [styles.disabled]: disabled,
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      <p className={styles.content}>{children}</p>
    </button>
  );
};

export default Button;

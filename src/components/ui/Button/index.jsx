import styles from "./Button.module.scss";
import classnames from "classnames";

const Button = ({ disabled = false, children, onClick, type }) => {
  const buttonClass = classnames(styles.button, {
    [styles.disabled]: disabled,
    [styles.answer]: type === "answer",
    [styles.right]: type === "answerRight",
    [styles.wrong]: type === "answerWrong",
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      <p className={styles.content}>{children}</p>
    </button>
  );
};

export default Button;

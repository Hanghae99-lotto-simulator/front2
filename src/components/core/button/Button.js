import styles from "./Button.module.scss";

const Button = (props) => {
  return <button {...props} className={styles.button} />;
};

export default Button;

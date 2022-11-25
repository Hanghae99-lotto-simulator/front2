import styles from "./Select.module.scss";

const Select = (props) => {
  return <select className={styles.select} {...props} />;
};

export default Select;

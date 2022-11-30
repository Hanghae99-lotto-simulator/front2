import styles from "./header.module.scss";

import { Link } from "react-router-dom";

export const HEADER_TYPE_DEFAULT = "header_type_default";
export const HEADER_TYPE_NONE = "header_type_none";

const Header = (props) => {
  return (
    <header className={styles.headerContainer}>
      <Link to={"/"}>복권구매</Link>
      <Link to={"history"}>당첨결과</Link>
      <Link to={"game"}>게임 결과</Link>
    </header>
  );
};

export default Header;

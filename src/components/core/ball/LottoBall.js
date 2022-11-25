import cn from "classnames";

import styles from "./LottoBall.module.scss";

import { useMemo } from "react";

const Ball = (props) => {
  const { number } = props;

  const color = useMemo(() => {
    let classname = "avocado";

    if (number < 10) {
      classname = "mustard";
    } else if (number < 20) {
      classname = "skyBlue";
    } else if (number < 30) {
      classname = "peach";
    } else if (number < 40) {
      classname = "gray";
    }

    return classname;
  }, [number]);

  return <span className={cn(styles.ball, styles[color])}>{number}</span>;
};

export default Ball;

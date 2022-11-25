import { useCallback, useState } from "react";

import styles from "./Main.module.scss";
import Lotto from "components/common/Lotto/Lotto";
import LottoBuyForm from "./components/LottoBuyForm";

const MainContainer = () => {
  const [lotto, setLotto] = useState(null);

  const LottoList = useCallback(() => {
    let components;

    if (lotto) {
      components = (
        <>
          <p className={styles.title}>구입 결과</p>
          <p className={styles.desc}>
            <strong>Unique Code</strong> : {lotto.uniqueCode}
          </p>
          {lotto.lottoArray.map((numbers, idx) => (
            <Lotto key={`lotto_${idx}`} numbers={numbers} />
          ))}
        </>
      );
    } else {
      components = <p>복권을 구매해 주세요.</p>;
    }

    return <div className={styles.lottoListSection}>{components}</div>;
  }, [lotto]);

  return (
    <div className={"commonContainer"}>
      <h3 className="subTitle">복권 구매하기</h3>

      <LottoBuyForm setLotto={setLotto} />

      <LottoList />
    </div>
  );
};

export default MainContainer;

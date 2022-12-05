import React, { useCallback, useState } from 'react'
import GameComfirmForm from './components/GameConfirmForm'
import Lotto from "components/common/Lotto/Lotto";
import styles from "./Game.module.scss";

const GameContainer=()=> {
  const [GambleInfo, setGambleInfo] = useState(null)

  const GambleList = useCallback(() => {
    let components;
    console.log(GambleInfo)
    if (GambleInfo) {
      components = (
        <>
          <p className={styles.title}>당첨 결과</p>
          <p className={styles.desc}>로또 게임 수 : {GambleInfo.data.totalCnt} 게임</p>
          <p className={styles.desc}>
            {/* <strong>Unique Code</strong> : {GambleInfo.uniqueCode} */}
          </p>
          <p className={styles.desc}><strong>1등</strong></p>
          {GambleInfo.data.firstList.map((numbers, idx) => (
            <Lotto key={`lotto_${idx}`} numbers={numbers} />
          ))}
          <p className={styles.strong2}>2등</p>
          {GambleInfo.data.secondList.map((numbers, idx) => (
            <Lotto key={`lotto_${idx}`} numbers={numbers} />
          ))}
          <p className={styles.strong3}>3등</p>
          {GambleInfo.data.thirdList.map((numbers, idx) => (
            <Lotto key={`lotto_${idx}`} numbers={numbers} />
          ))}
          <p>4등</p>
          <div>{GambleInfo.data.fourthRank} 개</div>
          <p>5등</p>
          <div>{GambleInfo.data.fifthRank} 개</div>
        </>
      );
    } else {
      components = <p>고유 번호와 회차를 입력해주세요.</p>;
    }

    return <div className={styles.lottoListSection}>{components}</div>;
  }, [GambleInfo]);

  return (
    <div className={'commonContainer'}>
      <h3 className='subTitle'>게임 결과 확인</h3>
      
        <GameComfirmForm setGambleInfo={setGambleInfo}/>
        <GambleList/>
    </div>
  )
}

export default GameContainer
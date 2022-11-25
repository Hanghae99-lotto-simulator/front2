import styles from "./Lotto.module.scss";

import Ball from "components/core/ball/LottoBall";

const Lotto = ({ numbers }) => {
  if(numbers.length===6){
    return (
      <div className={styles.lotto}>
        {numbers.map((number, idx) => {
          return <Ball key={`ball_${idx}`} number={number} />;
        })}
      </div>
    );
  }else{
    return (
      <div className={styles.lotto}>
        {numbers[0].map((number, idx) => {
          return <Ball key={`ball_${idx}`} number={number} />;
        })}
      
      <div>+</div>
      <Ball number={numbers[1]} />
      </div>
    );

  }
  
};

export default Lotto;

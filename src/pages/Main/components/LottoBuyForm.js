import { useCallback, useState } from "react";

import styles from "./LottoBuyForm.module.scss";

import { requestBuyLotto } from "model/axios";

import Button from "components/core/button/Button";
import Input from "components/core/input/Input";

const LottoBuyForm = ({ setLotto }) => {
  const [count, setCount] = useState();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!count) {
      return;
    }

    try {
      const response = await requestBuyLotto(count);

      setLotto(response.data);
    } catch (error) {
      alert("알 수 없는 에러가 발생하였습니다.");
    }
  };

  const setValue = useCallback((e) => {
    const { value } = e.target;

    setCount(value);
  }, []);

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Button type={"submit"}>구매하기</Button>
      <Input
        type={"number"}
        onChange={setValue}
        placeholder="구매하실 장수를 입력해 주세요."
      />
    </form>
  );
};

export default LottoBuyForm;

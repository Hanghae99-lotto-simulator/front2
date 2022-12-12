import Button from "components/core/button/Button";
import Input from "components/core/input/Input";
import styles from "./GameConfirmForm.module.scss"
import { useCallback, useState } from 'react';
import { requestGamble } from "model/axios";

const GameComfirmForm=({setGambleInfo})=>{
    const [UniqueCode, setUniqueCode] = useState(null)
    const [Num, setNum] = useState(null)
    const onSubmitHandler = async (e) => {
        e.preventDefault();
    
        if (!Num) {
           alert("회차 입력해주세요")
           return;
        }
        
        try {
            const response = await requestGamble(UniqueCode,Num);
            if(response.success){
                console.log("결과값",response)
                setGambleInfo(response);
            }else{
                alert(response.error.message);
            }
            
        } catch (error) {
            alert("알 수 없는 에러가 발생하였습니다.");
        }
    };
    const setValueUniqueCode = useCallback((e) => {
        const { value } = e.target;
    
        setUniqueCode(value);
    }, []);
    const setValueNum = useCallback((e) => {
        const { value } = e.target;
    
        setNum(value);
    }, []);

    
    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <Button type={"submit"}>결과 확인 하기</Button>
            <Input
                type={"text"}
                onChange={setValueUniqueCode}
                placeholder="유니크 코드를 입력해주세요."
            />
            <Input
                type={"number"}
                onChange={setValueNum}
                placeholder="회차를 입력해주세요."
            />
        </form>
    );
}
export default GameComfirmForm
import Lotto from "components/common/Lotto/Lotto";
import Button from "components/core/button/Button";
import Select from "components/core/input/Select";
import { getPageWinCount, getPageWinNumber } from "model/axios";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./History.module.scss";

const HistoryContainer = () => {
  const [page, setPage] = useState(1055);
  const [winNumber, setWinNumber] = useState(null);
  const [pageWinCount, setPageWinCount] = useState(null);
  // console.log(winNumber);
  const numbers = useMemo(() => {
    let list = [];
    let list2 = [];
    if (winNumber) {
      Object.entries(winNumber?.roundArray).forEach(([key, value]) => {
        list2.push(value);
      });
      if (winNumber?.bonusNum) {
        list.push(list2);
        list.push(winNumber?.bonusNum);
      }
    }
    return list;
  }, [winNumber]);
  const updateUi = useCallback(
    async (e) => {
      e?.preventDefault();
      try {
        const response = await getPageWinNumber(page);
        // console.log(response.data);
        setWinNumber(response.data);
        setPageWinCount(response.data);
      } catch (error) {
        alert("알 수 없는 에러가 발생하였습니다.");
      }
    },
    [page]
  );
  const updatePage = useCallback((e) => {
    const { value } = e.target;
    setPage(parseInt(value));
  }, []);
  const SelectOption = useCallback(() => {
    const options = [];
    for (let i = winNumber.count; i > 0; i--) {
      options.push(
        <option key={`option_${i}`} value={i}>
          {i}
        </option>
      );
    }
    return options;
  }, [winNumber]);
  useEffect(() => {
    updateUi();
  }, []);

  if (!winNumber && !pageWinCount) {
    return null;
  }
  return (
    <div className={"commonContainer"}>
      <h3 className={"subTitle"}>회차별 당첨번호</h3>
      <form className={styles.selectSection} onSubmit={updateUi}>
        <span className={styles.selectLabel}>회차 바로가기</span>
        <Select onChange={updatePage}>
          <SelectOption />
          {/* {Array(winNumber.count)
            .fill()
            .map((_, idx) => {
              return (
                <option key={`option_${idx}`} value={idx + 1}>
                  {idx + 1}
                </option>
              );
            })} */}
        </Select>
        <Button>조회</Button>
      </form>
      <div className={styles.resultSection}>
        <h4 className={styles.title}>
          <strong>{winNumber.id}회</strong> 당첨결과
        </h4>
        <p className={styles.desc}>
          {moment(winNumber.date).format("(YYYY년 MM월 DD일 추첨)")}
        </p>
        <Lotto numbers={numbers} />
        <p className={styles.desc2}>당첨번호</p>
      </div>
      <table className={styles.infoTable}>
        <thead>
          <tr>
            <th>등수</th>
            <th>당첨 게임 수</th>
            <th>당첨 기준</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1등</td>
            <td>{pageWinCount.firstRank}</td>
            <td>
              당첨번호 <strong>6개</strong> 숫자일치
            </td>
            <td rowSpan={5}>없음</td>
          </tr>
          <tr>
            <td>2등</td>
            <td>{pageWinCount.secondRank}</td>
            <td>
              당첨번호 <strong>5개</strong> 숫자일치
              <br />+<strong>보너스</strong> 숫자일치
            </td>
          </tr>
          <tr>
            <td>3등</td>
            <td>{pageWinCount.thirdRank}</td>
            <td>
              당첨번호 <strong>5개</strong> 숫자일치
            </td>
          </tr>
          <tr>
            <td>4등</td>
            <td>{pageWinCount.fourthRank}</td>
            <td>
              당첨번호 <strong>4개</strong> 숫자일치
            </td>
          </tr>
          <tr>
            <td>5등</td>
            <td>{pageWinCount.fifthRank}</td>
            <td>
              당첨번호 <strong>3개</strong> 숫자일치
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default HistoryContainer;

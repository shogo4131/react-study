import type { NextPage } from "next";
import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postMoney } from "../modules/bank.action";
import type { RootState } from "../store/store";

// 家族の住んでいる場所は別々
// 親コンポーネント
const AboutParent: NextPage = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <span style={{ display: "block", height: 250 }}>両親</span>
      <EldestSon />
    </div>
  );
};

// 長男コンポーネント
const EldestSon: FC = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <span style={{ display: "block", height: 250 }}>長男</span>
      <SecondSon />
    </div>
  );
};

// 次男コンポーネント
const SecondSon: FC = () => {
  return (
    <div style={{ backgroundColor: "green" }}>
      <span style={{ display: "block", height: 214 }}>次男</span>
      <ThirdSon />
    </div>
  );
};

// 三男コンポーネント
const ThirdSon: FC = () => {
  const dispatch = useDispatch();
  // 銀行からお金を引っ張ってくる
  const { money } = useSelector((state: RootState) => state.bank);

  // 振り込みボタン
  const onClickPostHandler = useCallback(() => {
    // 10000万円を振り込む
    dispatch(postMoney(money + 10000));
  }, [dispatch, money]);

  // 振り込みボタン
  const onClickGetHandler = useCallback(() => {
    // 1000円を引き出す
    dispatch(postMoney(money - 1000));
  }, [dispatch, money]);

  return (
    <div style={{ backgroundColor: "pink" }}>
      <span style={{ display: "block", height: 200 }}>三男</span>
      {/* 親の銀行の残高を表示 */}
      <span style={{ marginLeft: 500 }}>{money}円</span>
      <button type="button" onClick={onClickPostHandler}>
        振り込み
      </button>
      <button type="button" onClick={onClickGetHandler}>
        引き出し
      </button>
    </div>
  );
};

export default AboutParent;

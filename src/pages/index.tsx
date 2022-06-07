import type { NextPage } from "next";
import { FC, useState } from "react";

// 家族の住んでいる場所は別々
// 親コンポーネント
const Parent: NextPage = () => {
  // 両親がお金を保持している
  const [money, setMoney] = useState(10000);

  return (
    <div style={{ backgroundColor: "white" }}>
      <span style={{ display: "block", height: 250 }}>両親</span>
      <EldestSon money={money} />
    </div>
  );
};

// 長男コンポーネント
const EldestSon: FC<{ money: number }> = ({ money }) => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <span style={{ display: "block", height: 250 }}>長男</span>
      <span>{money}円</span>
      <SecondSon money={money} />
    </div>
  );
};

// 次男コンポーネント
const SecondSon: FC<{ money: number }> = ({ money }) => {
  return (
    <div style={{ backgroundColor: "green" }}>
      <span style={{ display: "block", height: 214 }}>次男</span>
      <span>{money}円</span>
      <ThirdSon money={money} />
    </div>
  );
};

// 三男コンポーネント
const ThirdSon: FC<{ money: number }> = ({ money }) => {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <span style={{ display: "block", height: 200 }}>三男</span>
      <span>{money}円</span>
    </div>
  );
};

export default Parent;

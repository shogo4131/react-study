import type { NextPage } from "next";
import { FC } from "react";

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
  // 親の銀行口座から10000円を取得する

  return (
    <div style={{ backgroundColor: "pink" }}>
      <span style={{ display: "block", height: 200 }}>三男</span>
      {/* <span>{money}円</span> */}
    </div>
  );
};

export default AboutParent;

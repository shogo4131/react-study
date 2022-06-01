import type { NextPage } from "next";
import { FC, useCallback, useState } from "react";
import Header from "../component/Header";

import styles from "../styles/Home.module.css";

// 親コンポーネント
const Home: NextPage = () => {
  const [addCount, setAddCount] = useState(0);
  const [decreaseCount, setDecreaseCount] = useState(0);

  const onClickCountUpHandler = useCallback(
    () => setAddCount((prev) => prev + 1),
    [setAddCount]
  );

  const onClickCountDownHandler = useCallback(
    () => setDecreaseCount((prev) => prev - 1),
    [setDecreaseCount]
  );

  return (
    <div className={styles.container}>
      <Header />
      <h1>Home</h1>

      <div style={{ display: "flex" }}>
        {/* 親コンポーネントだけで管理できるならuseState一択になる */}
        {/* {addCount}
        {decreaseCount} */}
        <AddCountView addCount={addCount} />
        <DecreaseCountView decreaseCount={decreaseCount} />
      </div>
      <div>
        <button
          type="button"
          onClick={onClickCountUpHandler}
          style={{ marginRight: 10 }}
        >
          +
        </button>
        <button type="button" onClick={onClickCountDownHandler}>
          -
        </button>
      </div>
    </div>
  );
};

// +カウンターを表示する子コンポーネント
const AddCountView: FC<{ addCount: number }> = ({ addCount }) => {
  return <div>{addCount}</div>;
};

// -カウンターを表示する子コンポーネント
const DecreaseCountView: FC<{ decreaseCount: number }> = ({
  decreaseCount,
}) => {
  return <div style={{ marginLeft: 17 }}>{decreaseCount}</div>;
};

export default Home;

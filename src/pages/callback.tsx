import type { NextPage } from "next";
import React, {
  useEffect,
  useState,
  ChangeEvent,
  FC,
  useCallback,
} from "react";
import { useBool } from "../hooks/useBool";

// 親コンポーネント
const Callback: NextPage = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const { isOpne, onClickOpneHandler } = useBool();
  console.log("1: イニシャライズ");

  useEffect(() => {
    console.log("3: マウント");
  }, []);

  const onClickCountHandler = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const onChangeTextInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Count count={count} />
      <button onClick={onClickCountHandler}>+</button>
      {console.log("2: レンダリング")}

      <div style={{ marginTop: 20 }}>
        <input type="text" onChange={onChangeTextInputHandler} value={text} />
      </div>

      <div>
        <Dialog isOpen={isOpne} onClick={onClickOpneHandler} />
      </div>
    </div>
  );
};

// 子コンポーネント
const Count: FC<{ count: number }> = React.memo(({ count }) => {
  console.log("カウントコンポーネントレンダリング");

  return (
    <div>
      <p>カウント: {count}</p>
    </div>
  );
});

Count.displayName = "Count";

const Dialog: FC<{ isOpen: boolean; onClick: () => void }> = ({
  isOpen,
  onClick,
}) => {
  console.log("ダイアログコンポーネントレンダリング");
  return (
    <div>
      ダイアログ: {isOpen ? "開く" : "閉じる"}
      <button onClick={onClick}>dialog button</button>
    </div>
  );
};

export default Callback;

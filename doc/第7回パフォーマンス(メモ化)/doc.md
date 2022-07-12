# React のメモ化とは

## メモ化ってなに？？
再レンダリングが走る際に、不要な関数や値を再生成しないための処理

## Reactのメモ化API3選
- useCallback
- React.memo
- useMemo

### useCallback、React.memo
- 関数の再生成を防ぐ(React.memoと併用しないと効果を発揮しない)

<details>
 <summary>サンプルソース</summary>

```JavaScript
const Callback: NextPage = () => {
  const [count, setCount] = useState(0);

  const onClickCountHandler = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Count count={count} />
      <button onClick={onClickCountHandler}>+</button>
    </div>
  );
};

// 子コンポーネント
const Count: FC<{ count: number }> = React.memo(({ count }) => {
  return (
    <div>
      <p>カウント: {count}</p>
    </div>
  );
});
```

</details>
  
### useCallbackを単体でも使用した方がいいのか
コンポーネントの中で宣言されている関数はコンポーネントが再レンダリングされる度に再生成されるのでuseCallbackで囲っておいた方が良いという意見をちらほら聞く。

### useMemo
公式: [useMemo](https://ja.reactjs.org/docs/hooks-reference.html#usememo)

- 計算結果等をメモ化してスキップできる
 
 ## 結論
- 関数宣言自体が重い処理ではないのでわざわざ囲む必要性をあまり感じない
- レンダリングの度にuseCallbackのhooks APIを読み込むので場合によっては無駄にメモリを食う可能性がある
- React自体が大分高速なので、本当に動作が遅くなった時に使用した方がいい。

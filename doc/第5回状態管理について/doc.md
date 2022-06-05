# React 状態管理とは
ローカル、グローバルの状態管理の方法がある。

## コンポーネントツリー
![スクリーンショット 2022-06-05 20 30 00](https://user-images.githubusercontent.com/60390181/172048409-9603785b-3a3e-4668-816a-89598732df45.png)

## ローカルState管理
各コンポーネント内で状態管理を行う。

### useState
- 各コンポーネントで状態を管理して、必要であれば子供のコンポーネントに値を渡していく(コンポーネントツリーの構造通り)

```JavaScript
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountView count={count} />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

### useReducer


## グローバルState管理
各コンポーネント単位で状態を管理するのではなく、グローバルで管理することによって各コンポーネントから値を参照できる。  

### なぜ、状態管理ライブラリを使用するのか



下記は状態管理ライブラリ一覧。

- 2021年 JavaScript Rising Starts (State Management部門)
![スクリーンショット 2022-06-05 15 41 55](https://user-images.githubusercontent.com/60390181/172038834-88e9cebf-df63-493a-bf97-6a2b895e7e9e.png)

※参考 [JavaScript Rising Starts](https://risingstars.js.org/2021/en)

- npm trends
![スクリーンショット 2022-06-05 15 55 07](https://user-images.githubusercontent.com/60390181/172039265-c15e5ff3-3727-4bdf-9c9e-c2ffbe10802b.png)

※参考 [npm trends](https://www.npmtrends.com/jotai-vs-recoil-vs-redux-vs-zustand-vs-valtio)

### どういった時に状態管理ライブラリを使用するのか？
- 様々なコンポーネントで使用する値
  ex) ユーザー情報、権限情報、etx

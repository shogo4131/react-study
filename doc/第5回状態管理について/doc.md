# React 状態管理とは
ローカル、グローバルの状態管理の方法がある。

## コンポーネントツリー
![スクリーンショット 2022-06-05 21 05 47](https://user-images.githubusercontent.com/60390181/172049608-bf419d28-a4f3-4409-af07-449c6743acbf.png)


## ローカルState管理
各コンポーネント内で状態管理を行う。  
規模が小さいアプリや、複数のコンポーネントにまたがって使用する値がない場合はローカルでの管理が好ましい。

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
- useStateと同じく、各コンポーネントで状態を管理する
- Context APIを使用することによって、複数のコンポーネントから値を取得できる(あくまでコンポーネントの上下関係はある)
- 各コンポーネントでuseStateの値が肥大化してきた時に、useReducerでローカルstateをまとめたりする
- 現在のstateと更新されたstateを比較してレンダリングを行うか判定するため、不要なレンダリングを避けることができる

```JavaScript
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const App => () {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <CountView count={state.count} />
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

※詳しくは[React Docs Beta版](https://beta-reactjs-org-git-effects-fbopensource.vercel.app/)へ

## グローバルState管理
各コンポーネント単位で状態を管理するのではなく、グローバルで管理することによって各コンポーネントから値を参照できる。  

### なぜ、状態管理ライブラリを使用するのか
- コンポーネントの子階層が深くなってきたりすると、バケツリレーで値を渡していくのがコードの冗長化につながるため

下記は状態管理ライブラリ一覧。

- 2021年 JavaScript Rising Starts (State Management部門)
![スクリーンショット 2022-06-05 15 41 55](https://user-images.githubusercontent.com/60390181/172038834-88e9cebf-df63-493a-bf97-6a2b895e7e9e.png)

※参考 [JavaScript Rising Starts](https://risingstars.js.org/2021/en)

- npm trends
![スクリーンショット 2022-06-05 15 55 07](https://user-images.githubusercontent.com/60390181/172039265-c15e5ff3-3727-4bdf-9c9e-c2ffbe10802b.png)

※参考 [npm trends](https://www.npmtrends.com/jotai-vs-recoil-vs-redux-vs-zustand-vs-valtio)

### どうやって状態管理を行うのか
- Redux、Zustand
  - 1つの大きな塊(オブジェクト)で管理する
  - Reactの外の世界で管理されている
  
![スクリーンショット 2022-06-06 0 19 26](https://user-images.githubusercontent.com/60390181/172057643-f6bf90f4-1f99-46f4-b184-82dacb5a727c.png)

- Recoil、Jotai
  - atom(個別)でstateを管理する
  - React内の世界で管理されている


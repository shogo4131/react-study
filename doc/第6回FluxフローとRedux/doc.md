# Reduxとは
公式: [Redux](https://redux.js.org/introduction/getting-started)
- Reduxとは、Reactのグローバルな状態管理ライブラリの一つである
- Facebook(現Meta)が提唱するFluxアーキテクチャを拡張した考えを取り入れている

## Fluxとは
- View,Actiton,Dispatcher,Storeの4つで構成されている
- 単方向にデータが流れていくので、データの流れを追いやすくなる

## なぜ、Reduxを勉強するのか
- Reduxは歴史が長く、Reactを昔から使っているプロジェクトだと導入されている可能性が高いので勉強しておかないとコードが読めない可能性が大(自分は死にました)
- Reduxから他の状態管理ライブラリに置き換える時に、概念を理解していないとコードが読めない

結論: コードが読めない
 
※公式では[Redux Toolkit](https://redux-toolkit.js.org/)を使用することを推奨しているが、今回はreduxの根本的なデータフローを理解してもらうために
 Redux Toolkitは使用していません。  
※Reduxの概念さえ理解すれば、Toolkitは学習コストは低くなる。

## Fluxのデータフロー
![スクリーンショット 2022-06-19 20 38 56](https://user-images.githubusercontent.com/60390181/174478993-562399ee-89f8-478c-aee9-01d0424ea3fd.png)

- Action(ActionCreator): stateを変更するActionを設定するところ
- View: ActionCreatorを発行するところ
- Dispatcher: ActionCreatorで発行されたActionをReducerへ渡す接続部分
- Store: stateを保存しておくところ。内部にReducerあり
- Reducer: Actionを受け取り、既存のstateを新しいstateに更新する部分
- Selector: 更新されたstateをstoreから取ってくる接続部分

### 身近な物に置き換えてデータの流れを理解しよう
 - 三男がATMにお金を振り込むまでの一連の流れ
![スクリーンショット 2022-06-21 22 22 12](https://user-images.githubusercontent.com/60390181/174809661-7a856223-96c4-42e4-aed3-a400386f2077.png)


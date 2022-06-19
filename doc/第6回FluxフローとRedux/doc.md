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
※現在は、公式でも[Redux Toolkit](https://redux-toolkit.js.org/)を使用することを推奨しているが、今回はreduxのフローを理解してもらうために
 Redux Toolkitは使用していません
※Reduxの概念さえ理解すれば、ToolkitはReduxのボイラーテンプレートを無くして簡単にしたものになるので、学習コストは低くなる



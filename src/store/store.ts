import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

// storeにreducerの登録
// redux devtoolsの設定
const store = legacy_createStore(rootReducer, composeWithDevTools());

export default store;

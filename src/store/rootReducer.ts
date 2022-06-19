import { combineReducers } from "redux";

import bank from "../reducer/bank.reducer";

// 各reducerを登録
export default combineReducers({ bank });

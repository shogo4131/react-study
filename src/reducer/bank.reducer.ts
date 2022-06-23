import { POST_MONEY, GET_MONEY } from "../constants/actionType";
import { postMoney, getMoney } from "../modules/bank.action";

export type BankState = {
  money: number;
};

// 銀行口座残高
const inititalState: BankState = {
  money: 0,
};

type Actiton = ReturnType<typeof postMoney | typeof getMoney>;

// 銀行口座の値を変更する場所
const bankReducer = (state = inititalState, action: Actiton) => {
  switch (action.type) {
    case POST_MONEY:
      return {
        ...state,
        // 銀行口座の残高を振り込んで更新
        money: state.money + action.payload.money,
      };

    case GET_MONEY:
      return {
        ...state,
        // 銀行口座の残高から引き出して更新
        money: state.money - action.payload.money,
      };

    default:
      return inititalState;
  }
};

export default bankReducer;

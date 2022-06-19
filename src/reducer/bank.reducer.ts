export type BankState = {
  money: number;
};

// 銀行口座
const inititalState: BankState = {
  money: 10000,
};

// 銀行口座の値を変更する場所
const bankReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "selected_count":
      break;

    default:
      return inititalState;
  }
};

export default bankReducer;

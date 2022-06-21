import { POST_MONEY, GET_MONEY } from "../constants/actionType";

export const postMoney = (money: number) => {
  return { type: POST_MONEY, payload: { money } } as const;
};

export const getMoney = (money: number) => {
  return { type: GET_MONEY, payload: { money } } as const;
};

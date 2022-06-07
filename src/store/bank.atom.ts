import { atom } from "recoil";

// 家族用銀行口座
const bankAtom = atom<number>({
  key: "bank",
  default: 10000,
});

export default bankAtom;

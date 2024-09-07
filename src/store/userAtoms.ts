import { atom } from "recoil";

export const tokenState = atom<string>({
  key: "token",
  default: "",
});

export const userState = atom({
    key: "user",
    default:{},
});

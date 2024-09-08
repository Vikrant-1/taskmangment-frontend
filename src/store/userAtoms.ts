import { atom } from "recoil";
import { User } from "../types/userTypes";

export const tokenState = atom<string>({
  key: "token",
  default: "",
});

export const userState = atom({
    key: "user",
    default:{} as (User | {}),
});

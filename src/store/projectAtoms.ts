import { atom } from "recoil";
import { Project } from "../types/projectTypes";

export const projectState = atom({
    key: "project",
    default:{} as (Project | {}),
});

import { atom } from "jotai";
import { TCommitType } from "../types/types.ts";

export const $title = atom<string>("");
export const $description = atom<string>("");
export const $commitType = atom<TCommitType | "none" | undefined>(undefined);

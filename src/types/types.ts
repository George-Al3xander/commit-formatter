import { COMMIT_TYPES } from "../lib/constants.ts";

export type TCommitType = (typeof COMMIT_TYPES)[number];

import { TCommitType } from "@/types/models/commit.ts";

export const FORMATTING_CONSTANTS: Readonly<{
    title_max_length: number;
    description_max_length: number;
    types: [TCommitType, ...TCommitType[]];
}> = {
    title_max_length: 50,
    description_max_length: 72,
    types: [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
    ],
};

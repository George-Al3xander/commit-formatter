import { FORMATTING_CONSTANTS } from "@/configs/formatting.ts";
import { TCommitSchema } from "@/services/zod.ts";
import { TCommitType } from "@/types/models/commit.ts";
import { formatLines } from "@/utils/helpers/formatString.ts";

export const transformToAbbreviation = (str: string): string => {
    const text = str.replace(/\s\s+/g, " ");
    const words = text.split(" ");
    if (words.length === 1) return text[0].toUpperCase();
    return words.map((w) => w[0].toUpperCase()).join("");
};

export const transformDescription = (
    str?: string | undefined,
): string | undefined => {
    if (str) {
        const words = str.replace(/\s\s+/g, " ").split(" ");
        const lines = formatLines(words);

        return lines.join("\n");
    }
};

export const transformTitle = (title: string): string => {
    if (title.length > 0) {
        return title.toLowerCase().replace(/\s\s+/g, " ").trim();
    }

    return title;
};

export const transformCommitType = (
    commitType: TCommitType | "none" | undefined,
): TCommitType | undefined => {
    if (
        commitType &&
        (FORMATTING_CONSTANTS.types as unknown as string[]).includes(commitType)
    )
        return commitType as TCommitType;
};

export const transformToCommit = ({
    title,
    description,
    commitType,
}: TCommitSchema): string => {
    let commit: string = title;

    if (commitType) {
        commit = `${commitType}: ${title}`;
    }
    if (description) {
        commit = commit + "\n\n" + description;
    }

    return commit;
};

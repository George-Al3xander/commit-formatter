import { COMMIT_TYPES } from "@/data/commit-rules";
import { TCommitSchema } from "@/services/zod";
import { formatLines } from "@/utils/formatString";

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
    commitType: string | undefined,
): string | undefined => {
    if (commitType && COMMIT_TYPES.includes(commitType)) return commitType;
};

export const transformToCommit = ({
    title,
    description,
    commitType,
}: TCommitSchema): string => {
    let commit: string = title;

    if (commitType && commitType != "none") {
        commit = `${commitType}: ${title}`;
    }
    if (description) {
        commit = commit + "\n\n" + description;
    }

    return commit;
};

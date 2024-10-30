import { TCommitType } from "../types/types.ts";
import {
    DESCRIPTION_MAX_LENGTH,
    TITLE_LENGTH_ERR_MESSAGES,
    TITLE_MAX_LENGTH,
} from "./constants.ts";

export const formatLines = (words: string[]) => {
    const lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
        const lineConcat = (currentLine + " " + word).trim();
        if (lineConcat.length <= DESCRIPTION_MAX_LENGTH) {
            currentLine = lineConcat;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    });
    lines.push(currentLine);

    return lines;
};

export const formatCommit = ({
    title,
    description,
    commitType,
}: {
    title: string;
    description?: string;
    commitType?: TCommitType;
}): string => {
    const formattedTitle = (
        commitType ? `${commitType}: ${title.trim()}` : title.trim()
    ).toLowerCase();

    if (!description || !/\S/.test(description)) return formattedTitle;

    if (description.length <= DESCRIPTION_MAX_LENGTH)
        return formattedTitle + "\n\n" + description;

    const words = description.split(" ");

    const formattedDescription = formatLines(words).join("\n");

    return formattedTitle + "\n\n" + formattedDescription;
};

export const copyFormattedCommit = async (
    params: Parameters<typeof formatCommit>[number],
    callbacks?: {
        success: () => void;
        error: () => void;
    },
) => {
    const text = formatCommit(params);
    try {
        await navigator.clipboard.writeText(text);
        if (callbacks) callbacks.success();
    } catch (e) {
        console.error(e);
        if (callbacks) callbacks.error();
    }
};

export const validateTitle = ({
    title,
    commitType,
}: {
    title: string;
    commitType: TCommitType | "none" | undefined;
}) => {
    const fullTitle =
        commitType && commitType != "none" ? `${commitType}: ${title}` : title;

    const isError = Boolean(
        title.length < 1 || fullTitle.length > TITLE_MAX_LENGTH,
    );

    const errMessage =
        title.length < 1
            ? TITLE_LENGTH_ERR_MESSAGES.min
            : TITLE_LENGTH_ERR_MESSAGES.max;

    return { fullTitle, isError, errMessage };
};

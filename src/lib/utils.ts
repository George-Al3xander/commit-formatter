import { TCommitSchema } from "@/lib/zod/schemas.ts";
import { TCommitType } from "@/types/types.ts";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import {
    COPY_MESSAGES,
    DESCRIPTION_MAX_LENGTH,
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

export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        toast.success(COPY_MESSAGES.success);
    } catch (e) {
        console.error(e);
        toast.error(COPY_MESSAGES.error);
    }
};

export const isTitleValid = ({
    title,
    commitType,
}: {
    title: string;
    commitType?: TCommitType | "none";
}): boolean => {
    const fullTitle =
        commitType && commitType != "none" ? `${commitType}: ${title}` : title;

    return fullTitle.length <= TITLE_MAX_LENGTH;
};

export const transformDescription = (
    str: string | undefined,
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

export const copyCommitToClipboard: SubmitHandler<TCommitSchema> = async ({
    title,
    description,
    commitType,
}) => {
    let commit: string = title;

    if (commitType) {
        commit = `${commitType}: ${title}`;
    }
    if (description) {
        commit = commit + "\n\n" + description;
    }
    await copyToClipboard(commit);
};

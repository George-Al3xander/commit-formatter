import { DESCRIPTION_MAX_LENGTH } from "@/data/commit-rules";

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

export const capitalizeString = <T extends string>(str: T): T => {
    if (str.length > 1) return (str[0].toUpperCase() + str.slice(1)) as T;

    return str.toUpperCase() as T;
};

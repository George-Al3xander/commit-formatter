import { FORMATTING_CONSTANTS } from "@/configs/formatting";

export const formatLines = (words: string[]) => {
    const lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
        const lineConcat = (currentLine + " " + word).trim();
        if (lineConcat.length <= FORMATTING_CONSTANTS.description_max_length) {
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

import { FORMATTING_CONSTANTS } from "@/configs/formatting.ts";

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

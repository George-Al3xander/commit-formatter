import { DESCRIPTION_MAX_LENGTH } from "@/data/commit-rules";
import {
    commit_description,
    formated_description,
} from "@/data/mocks/mock-commit";
import { capitalizeString, formatLines } from "@/utils/formatString";

describe("Format string", () => {
    it("should capitalize string", () => {
        expect(capitalizeString("hello world")).toBe("Hello world");
        expect(capitalizeString("h")).toBe("H");
        expect(capitalizeString("hh")).toBe("Hh");
    });
});

describe("Format lines", () => {
    it("should format lines", () => {
        expect(formatLines(commit_description.split(" ")).join("\n")).toBe(
            formated_description,
        );
    });

    it("should format line to be less that required length", () => {
        const lines = formatLines(commit_description.split(" "));
        lines.forEach((line) => {
            expect(line.length).toBeLessThanOrEqual(DESCRIPTION_MAX_LENGTH);
        });
    });
});

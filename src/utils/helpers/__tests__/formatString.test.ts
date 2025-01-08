import { FORMATTING_CONSTANTS } from "@/configs/formatting.ts";
import {
    commit_description,
    formated_description,
} from "@/mocks/mock-commit.ts";
import { capitalizeString, formatLines } from "@/utils/helpers/formatString.ts";

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
            expect(line.length).toBeLessThanOrEqual(
                FORMATTING_CONSTANTS.description_max_length,
            );
        });
    });
});

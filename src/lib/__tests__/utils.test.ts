import { DESCRIPTION_MAX_LENGTH } from "@/lib/constants.ts";
import { formatLines, transformTitle } from "@/lib/utils.ts";

const commit_description =
    "Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.";

const formated_description =
    "Web browsers have a dedicated JavaScript engine that executes the client\n" +
    "code. These engines are also utilized in some servers and a variety of\n" +
    "apps. The most popular runtime system for non-browser usage is Node.js.";

describe("format lines", () => {
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

describe("transform title", () => {
    it("should transform 0 length title", () =>
        expect(transformTitle("")).toBe(""));
    it("should transform title", () =>
        expect(
            transformTitle("I'M uppercase and       have a lot of spaces!"),
        ).toBe("i'm uppercase and have a lot of spaces!"));
});

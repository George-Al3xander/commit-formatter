import { DESCRIPTION_MAX_LENGTH } from "../constants.ts";
import { formatCommit, formatLines } from "../utils.ts";

const commit_description =
    "Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.";

const formated_description =
    "Web browsers have a dedicated JavaScript engine that executes the client\n" +
    "code. These engines are also utilized in some servers and a variety of\n" +
    "apps. The most popular runtime system for non-browser usage is Node.js.";

const commit_title = "Hey there, I'm just a dummy title!";

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

describe("format commit", () => {
    it("should format commit without commit type", () => {
        expect(
            formatCommit({
                title: commit_title,
                description: commit_description,
            }),
        ).toBe(commit_title.toLowerCase() + "\n\n" + formated_description);
    });

    it("should format commit including commit type", () => {
        expect(
            formatCommit({
                title: commit_title,
                description: commit_description,
                commitType: "feat",
            }),
        ).toBe(
            "feat: " +
                commit_title.toLowerCase() +
                "\n\n" +
                formated_description,
        );
    });

    it("should format commit with short description", () => {
        const short_desc = "Hello there!";
        expect(
            formatCommit({
                title: commit_title,
                description: short_desc,
            }),
        ).toBe(commit_title.toLowerCase() + "\n\n" + short_desc);
    });

    it("should format commit without description", () => {
        expect(
            formatCommit({
                title: commit_title,
            }),
        ).toBe(commit_title.toLowerCase());
    });
});

import { DESCRIPTION_MAX_LENGTH, TITLE_MAX_LENGTH } from "@/lib/constants.ts";
import {
    copyCommitToClipboard,
    copyToClipboard,
    formatLines,
    isTitleValid,
    transformCommitType,
    transformDescription,
    transformTitle,
} from "@/lib/utils.ts";
import { TCommitType } from "@/types/types.ts";
import toast from "react-hot-toast";

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

describe("title", () => {
    describe("transformation", () => {
        it("should transform 0 length title", () =>
            expect(transformTitle("")).toBe(""));
        it("should transform title", () =>
            expect(
                transformTitle("I'M uppercase and       have a lot of spaces!"),
            ).toBe("i'm uppercase and have a lot of spaces!"));
        it("should transform commit type", () => {
            expect(transformCommitType("ci")).toBe("ci");
            //eslint-disable-next-line
            //@ts-ignore
            expect(transformCommitType("wrong")).toBe(undefined);
            expect(transformCommitType("none")).toBe(undefined);
            expect(transformCommitType(undefined)).toBe(undefined);
        });
    });

    describe("validation", () => {
        it("should validate title", () => {
            const longTitle = "w".repeat(TITLE_MAX_LENGTH);
            const commitType = "feat";

            expect(isTitleValid({ title: longTitle })).toBe(true);
            expect(isTitleValid({ title: longTitle, commitType })).toBe(false);
        });
    });
});

describe("description", () => {
    it("should format description", () => {
        expect(transformDescription()).toBeUndefined();
        expect(transformDescription(commit_description)).toBe(
            formated_description,
        );
    });
});

describe("copy to clipboard", () => {
    const toastSuccess = jest
        .spyOn(toast, "success")
        .mockImplementation(jest.fn());
    const toastError = jest.spyOn(toast, "error").mockImplementation(jest.fn());
    const writeText = jest.fn().mockImplementation(() => Promise.resolve());
    Object.assign(window.navigator, {
        clipboard: {
            writeText,
        },
    });
    const commitTitle = "title";
    const commitType: TCommitType = "feat";

    afterEach(() => jest.clearAllMocks());

    it("should show success toast", async () => {
        await copyToClipboard("Text");
        expect(writeText).toHaveBeenCalled();
        expect(toastSuccess).toHaveBeenCalled();
        expect(toastError).not.toHaveBeenCalled();
    });
    it("should show error toast", async () => {
        jest.spyOn(console, "error").mockImplementation(jest.fn());
        writeText.mockImplementation(
            jest.fn(() => {
                throw new Error();
            }),
        );
        await copyToClipboard("Text");
        expect(writeText).toHaveBeenCalled();
        expect(toastSuccess).not.toHaveBeenCalled();
        expect(toastError).toHaveBeenCalled();
    });

    it("should copy commit to clipboard: full commit", async () => {
        await copyCommitToClipboard({
            title: commitTitle,
            commitType,
            description: formated_description,
        });

        expect(writeText).toHaveBeenCalledWith(
            `${commitType}: ${commitTitle}` + "\n\n" + formated_description,
        );
    });

    it("should copy commit to clipboard: without commit type", async () => {
        await copyCommitToClipboard({
            title: commitTitle,
            description: formated_description,
        });

        expect(writeText).toHaveBeenCalledWith(
            commitTitle + "\n\n" + formated_description,
        );
    });

    it("should copy commit to clipboard: without description", async () => {
        await copyCommitToClipboard({
            title: commitTitle,
        });

        expect(writeText).toHaveBeenCalledWith(commitTitle);

        await copyCommitToClipboard({
            title: commitTitle,
            commitType,
        });

        expect(writeText).toHaveBeenCalledWith(`${commitType}: ${commitTitle}`);
    });
});

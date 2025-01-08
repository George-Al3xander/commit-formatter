import {
    commit_description,
    formated_description,
} from "@/mocks/mock-commit.ts";
import { TCommitType } from "@/types/models/commit.ts";
import {
    transformCommitType,
    transformDescription,
    transformTitle,
    transformToAbbreviation,
    transformToCommit,
} from "@/utils/helpers/transformString.ts";

describe("Transform string", () => {
    describe("title", () => {
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

    describe("description", () => {
        it("should format description", () => {
            expect(transformDescription()).toBeUndefined();
            expect(transformDescription(commit_description)).toBe(
                formated_description,
            );
        });
    });

    describe("abbreviation", () => {
        it("should format abbreviation", () => {
            expect(transformToAbbreviation("awesome code")).toBe("AC");
            expect(transformToAbbreviation("awesome")).toBe("A");
            expect(transformToAbbreviation("New      word")).toBe("NW");
        });
    });

    describe("commit", () => {
        const commitTitle = "title";
        const commitType: TCommitType = "feat";
        it("should transform to commit: full commit", () => {
            expect(
                transformToCommit({
                    title: commitTitle,
                    commitType,
                    description: formated_description,
                }),
            ).toBe(
                `${commitType}: ${commitTitle}` + "\n\n" + formated_description,
            );
        });

        it("should transform to commit: without commit type", () => {
            expect(
                transformToCommit({
                    title: commitTitle,
                    description: formated_description,
                }),
            ).toBe(commitTitle + "\n\n" + formated_description);
        });

        it("should transform to commit: without description", () => {
            expect(
                transformToCommit({
                    title: commitTitle,
                }),
            ).toBe(commitTitle);

            expect(
                transformToCommit({
                    title: commitTitle,
                    commitType,
                }),
            ).toBe(`${commitType}: ${commitTitle}`);
        });
    });
});

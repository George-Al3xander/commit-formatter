import { COMMIT_TYPES, TITLE_MAX_LENGTH } from "@/data/commit-rules";
import { transformDescription, transformTitle } from "@/utils/transformString";
import { z } from "zod";

const TITLE_LENGTH_ERR_MESSAGES = {
    min: "Title is required and must be at least 1 character long.",
    max: `Title must be ${TITLE_MAX_LENGTH} characters or fewer. If a commit type is selected, this includes the commit type, colon, and space (e.g., 'feat: add new feature').`,
};

const isTitleValid = ({
    title,
    commitType,
}: {
    title: string;
    commitType: string;
}): boolean => {
    const fullTitle =
        commitType && commitType != "none" ? `${commitType}: ${title}` : title;

    return fullTitle.length <= TITLE_MAX_LENGTH;
};
export const CommitSchema = z
    .object({
        title: z
            .string()
            .min(1, TITLE_LENGTH_ERR_MESSAGES.min)
            .transform(transformTitle),
        description: z
            .string()
            .optional()
            .or(z.literal(""))
            .transform(transformDescription),
        commitType: z.enum(["none", ...COMMIT_TYPES]),
    })
    .refine(isTitleValid, {
        message: TITLE_LENGTH_ERR_MESSAGES.max,
        path: ["title"],
    });

export type TCommitSchema = z.infer<typeof CommitSchema>;

import { FORMATTING_CONSTANTS } from "@/configs/formatting.ts";
import { TCommitType } from "@/types/models/commit.ts";
import {
    transformCommitType,
    transformDescription,
    transformTitle,
} from "@/utils/helpers/transformString.ts";
import { z } from "zod";

const TITLE_LENGTH_ERR_MESSAGES = {
    min: "Title is required and must be at least 1 character long.",
    max: `Title must be ${FORMATTING_CONSTANTS.title_max_length} characters or fewer. If a commit type is selected, this includes the commit type, colon, and space (e.g., 'feat: add new feature').`,
};

const isTitleValid = ({
    title,
    commitType,
}: {
    title: string;
    commitType?: TCommitType | "none" | undefined;
}): boolean => {
    const fullTitle =
        commitType && commitType != "none" ? `${commitType}: ${title}` : title;

    return fullTitle.length <= FORMATTING_CONSTANTS.title_max_length;
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
        commitType: z
            .enum(FORMATTING_CONSTANTS.types)
            .optional()
            .or(z.literal("none"))
            .transform(transformCommitType),
    })
    .refine(isTitleValid, {
        message: TITLE_LENGTH_ERR_MESSAGES.max,
        path: ["title"],
    });

export type TCommitSchema = z.infer<typeof CommitSchema>;

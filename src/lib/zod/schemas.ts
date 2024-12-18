import { COMMIT_TYPES, TITLE_LENGTH_ERR_MESSAGES } from "@/lib/constants.ts";
import {
    isTitleValid,
    transformCommitType,
    transformDescription,
    transformTitle,
} from "@/lib/utils.ts";
import { z } from "zod";

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
            .enum(COMMIT_TYPES)
            .optional()
            .or(z.literal("none"))
            .transform(transformCommitType),
    })
    .refine(isTitleValid, {
        message: TITLE_LENGTH_ERR_MESSAGES.max,
        path: ["title"],
    });

export type TCommitSchema = z.infer<typeof CommitSchema>;

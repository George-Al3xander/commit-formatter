import { TCommitSchema } from "@/lib/zod/schemas.ts";
import { TextFieldProps } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { COMMIT_TYPES } from "../lib/constants.ts";

export type TCommitType = (typeof COMMIT_TYPES)[number];

export type TextInputProps = TextFieldProps & {
    commitPart: Exclude<keyof TCommitSchema, "commitType">;
    register: UseFormRegister<TCommitSchema>;
    errors: FieldErrors<TCommitSchema>;
};

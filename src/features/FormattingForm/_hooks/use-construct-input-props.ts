import { TCommitSchema } from "@/services/zod";
import { capitalizeString } from "@/utils/formatString";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type CommitPart = Exclude<keyof TCommitSchema, "commitType">;

const TEXT_INPUT_PLACEHOLDERS: {
    [key in CommitPart]: string;
} = {
    title: "Provide a short commit title (e.g., 'update readme')",
    description: "Add more context for this commit (optional)",
};

export const useConstructInputProps = ({
    commitPart,
    errors,
    register,
}: {
    commitPart: CommitPart;
    errors: FieldErrors<TCommitSchema>;
    register: UseFormRegister<TCommitSchema>;
}) => {
    const label = capitalizeString(commitPart);
    const error = Boolean(errors[commitPart]);
    const helperText = errors[commitPart]?.message;
    const placeholder = TEXT_INPUT_PLACEHOLDERS[commitPart];
    const sx = { width: "100%" };

    return {
        label,
        error,
        helperText,
        placeholder,
        sx,
        ...register(commitPart),
    };
};

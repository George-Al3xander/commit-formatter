import { CommitSchema, TCommitSchema } from "@/services/zod";
import { copyToClipboard } from "@/utils/clipboard";
import { transformToCommit } from "@/utils/transformString";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useFormattingForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm<TCommitSchema>({
        resolver: zodResolver(CommitSchema),
        defaultValues: {
            title: "",
            description: "",
            commitType: "none",
        },
    });

    const onSubmit = handleSubmit((val) =>
        copyToClipboard(transformToCommit(val)),
    );

    const isAnyError = Boolean(Object.keys(errors).length > 0);

    return {
        control,
        register,
        reset,
        errors,
        onSubmit,
        isAnyError,
    };
};

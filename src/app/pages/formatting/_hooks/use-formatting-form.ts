import { CommitSchema, TCommitSchema } from "@/services/zod.ts";
import { copyToClipboard } from "@/utils/helpers/clipboard.ts";
import { transformToCommit } from "@/utils/helpers/transformString.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useFormattingForm = () => {
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

export default useFormattingForm;

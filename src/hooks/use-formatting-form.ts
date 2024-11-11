import { copyCommitToClipboard } from "@/lib/utils.ts";
import { CommitSchema, TCommitSchema } from "@/lib/zod/schemas.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useFormattingForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TCommitSchema>({
        resolver: zodResolver(CommitSchema),
        defaultValues: {
            title: "",
            description: "",
            commitType: "none",
        },
    });

    const onSubmit = handleSubmit(copyCommitToClipboard);
    const isAnyError = Boolean(Object.keys(errors).length > 0);
    return {
        register,
        errors,
        onSubmit,
        isAnyError,
    };
};

export default useFormattingForm;

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
    } = useForm<TCommitSchema>({
        resolver: zodResolver(CommitSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    });

    const onSubmit = handleSubmit((val) =>
        copyToClipboard(transformToCommit(val)),
    );
    const isAnyError = Boolean(Object.keys(errors).length > 0);
    return {
        register,
        errors,
        onSubmit,
        isAnyError,
    };
};

export default useFormattingForm;

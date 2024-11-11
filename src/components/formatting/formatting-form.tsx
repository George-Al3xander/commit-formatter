import CommitTypeSelector from "@/components/formatting/commit-type-selector.tsx";
import TextInput from "@/components/formatting/text-input.tsx";
import useFormattingForm from "@/hooks/use-formatting-form.ts";
import { Button } from "@mui/material";

const FormattingForm = () => {
    const { register, errors, isAnyError, onSubmit } = useFormattingForm();
    return (
        <form className="app-container" onSubmit={onSubmit}>
            <fieldset className="title-container">
                <CommitTypeSelector register={register} />
                <TextInput
                    commitPart={"title"}
                    register={register}
                    errors={errors}
                />
            </fieldset>
            <fieldset>
                <TextInput
                    commitPart={"description"}
                    register={register}
                    errors={errors}
                    rows={5}
                    multiline
                />
            </fieldset>
            <Button
                disabled={isAnyError}
                type="submit"
                variant="contained"
                color="info"
            >
                Copy formatted commit
            </Button>
        </form>
    );
};

export default FormattingForm;

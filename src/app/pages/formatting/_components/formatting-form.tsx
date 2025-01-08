import { useConstructInputProps } from "@/app/pages/formatting/_hooks/use-construct-input-props.ts";
import { FORMATTING_CONSTANTS } from "@/configs/formatting.ts";
import { SelectMenu } from "@/ui/components/organisms/SelectMenu";
import { Button, TextField } from "@mui/material";
import useFormattingForm from "../_hooks/use-formatting-form.ts";

const FormattingForm = () => {
    const formattingProps = useFormattingForm();
    const { register, isAnyError, onSubmit } = formattingProps;
    return (
        <form className="app-container" onSubmit={onSubmit}>
            <fieldset className="title-container">
                <SelectMenu
                    labelText={"Commit type"}
                    selectOptions={["none", ...FORMATTING_CONSTANTS.types]}
                    formControlProps={{ className: "commit-type-selector" }}
                    selectProps={{
                        label: "Conv. commit",
                        defaultValue: "none",
                        ...register("commitType"),
                    }}
                />

                <TextField
                    {...useConstructInputProps({
                        commitPart: "title",
                        ...formattingProps,
                    })}
                />
            </fieldset>
            <fieldset>
                <TextField
                    {...useConstructInputProps({
                        commitPart: "description",
                        ...formattingProps,
                    })}
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

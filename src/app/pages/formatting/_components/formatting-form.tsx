import { useConstructInputProps } from "@/app/pages/formatting/_hooks/use-construct-input-props.ts";
import { FORMATTING_CONSTANTS } from "@/configs/formatting.ts";
import { SelectMenu } from "@/ui/components/organisms/SelectMenu";
import { Button, TextField } from "@mui/material";
import useFormattingForm from "../_hooks/use-formatting-form.ts";

const FormattingForm = () => {
    const formattingProps = useFormattingForm();
    const { control, isAnyError, onSubmit, reset } = formattingProps;

    return (
        <form className="app-container" onSubmit={onSubmit}>
            <fieldset className="title-container">
                <SelectMenu
                    control={control}
                    name={"commitType"}
                    labelText={"Commit type"}
                    selectOptions={["none", ...FORMATTING_CONSTANTS.types]}
                    formControlProps={{ className: "commit-type-selector" }}
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
            <Button
                onClick={() => reset()}
                type="button"
                variant="outlined"
                color="error"
            >
                Reset
            </Button>
        </form>
    );
};

export default FormattingForm;

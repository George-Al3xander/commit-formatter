import { FORMATTING_CONSTANTS } from "@/configs/formatting";
import { SelectMenu } from "@/ui/components/organisms/SelectMenu";
import { Button, TextField } from "@mui/material";
import { useConstructInputProps, useFormattingForm } from "./_hooks";

export const FormattingForm = () => {
    const formattingProps = useFormattingForm();
    const { control, isAnyError, onSubmit, reset } = formattingProps;

    return (
        <form className="app-container" onSubmit={onSubmit}>
            <fieldset className="title-container">
                <SelectMenu
                    control={control}
                    name={"commitType"}
                    selectProps={{ label: "Conv. commit" }}
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

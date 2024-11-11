import { TEXT_INPUT_PLACEHOLDERS } from "@/lib/constants.ts";
import { TextInputProps } from "@/types/types.ts";
import TextField from "@mui/material/TextField";

const TextInput = ({
    commitPart,
    register,
    errors,
    ...props
}: TextInputProps) => {
    return (
        <TextField
            {...props}
            label={commitPart[0].toUpperCase() + commitPart.slice(1)}
            sx={{ width: "100%", ...props.sx }}
            error={Boolean(errors[commitPart])}
            helperText={errors[commitPart]?.message}
            placeholder={TEXT_INPUT_PLACEHOLDERS[commitPart]}
            {...register(commitPart)}
        />
    );
};

export default TextInput;

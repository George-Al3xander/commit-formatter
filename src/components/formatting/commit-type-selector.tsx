import { COMMIT_TYPES } from "@/lib/constants.ts";
import { TCommitSchema } from "@/lib/zod/schemas.ts";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

const CommitTypeSelector = ({
    register,
}: {
    register: UseFormRegister<TCommitSchema>;
}) => {
    return (
        <FormControl className="commit-type-selector">
            <InputLabel id="commit-type">Commit type</InputLabel>
            <Select
                labelId="commit-type"
                id="demo-simple-select"
                label={"Conv. commit"}
                defaultValue={"none"}
                {...register("commitType")}
            >
                <MenuItem value={"none"}>none</MenuItem>
                {COMMIT_TYPES.map((type) => (
                    <MenuItem key={type} value={type}>
                        {type}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CommitTypeSelector;

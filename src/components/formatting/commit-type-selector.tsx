import { COMMIT_TYPES } from "@/lib/constants.ts";
import { TCommitType } from "@/types/types.ts";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { useAtom } from "jotai/react";
import { $commitType } from "../../store/atoms.ts";

const CommitTypeSelector = () => {
    const [commitType, setCommitType] = useAtom($commitType);

    const handleChange = (event: SelectChangeEvent) => {
        setCommitType(event.target.value as TCommitType);
    };

    return (
        <FormControl className="commit-type-selector">
            <InputLabel id="commit-type">Commit type</InputLabel>
            <Select
                labelId="commit-type"
                id="demo-simple-select"
                value={commitType || "none"}
                label={"Conv. commit"}
                onChange={handleChange}
            >
                <MenuItem selected value={"none"}>
                    none
                </MenuItem>
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

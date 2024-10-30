import { validateTitle } from "@/lib/utils.ts";
import TextField from "@mui/material/TextField";
import { useAtom, useAtomValue } from "jotai/react";
import { TITLE_MAX_LENGTH } from "../lib/constants.ts";
import { $commitType, $title } from "../store/atoms.ts";

const TitleInput = () => {
    const [title, setTitle] = useAtom($title);
    const commitType = useAtomValue($commitType);

    const { isError, errMessage } = validateTitle({ title, commitType });

    const htmlInput = { maxLength: TITLE_MAX_LENGTH };

    return (
        <TextField
            required
            sx={{ width: "100%" }}
            id={"title"}
            placeholder={"Title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type={"text"}
            label="Title"
            variant="outlined"
            error={isError}
            helperText={isError && errMessage}
            slotProps={{ htmlInput }}
        />
    );
};

export default TitleInput;

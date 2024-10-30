import TextField from "@mui/material/TextField";
import { useAtom } from "jotai/react";
import { $description } from "../store/atoms.ts";

const DescriptionInput = () => {
    const [description, setDescription] = useAtom($description);

    return (
        <TextField
            sx={{ width: "100%" }}
            multiline
            rows={5}
            placeholder={"Description"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
    );
};

export default DescriptionInput;

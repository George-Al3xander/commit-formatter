import { COPY_MESSAGES } from "@/lib/constants.ts";
import { Button } from "@mui/material";
import { useAtomValue } from "jotai/react";
import toast from "react-hot-toast";
import { copyFormattedCommit, validateTitle } from "../lib/utils.ts";
import { $commitType, $description, $title } from "../store/atoms.ts";

const FormatButton = () => {
    const title = useAtomValue($title);
    const description = useAtomValue($description);
    const commitType = useAtomValue($commitType);

    const { isError } = validateTitle({ title, commitType });

    const copyToClipboard = async () => {
        await copyFormattedCommit(
            {
                title,
                description,
                commitType: commitType != "none" ? commitType : undefined,
            },
            {
                success: () => toast.success(COPY_MESSAGES.success),
                error: () => toast.error(COPY_MESSAGES.error),
            },
        );
    };

    return (
        <Button
            disabled={isError}
            variant="contained"
            color="info"
            onClick={copyToClipboard}
        >
            Copy formatted commit
        </Button>
    );
};

export default FormatButton;

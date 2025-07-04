import { IconButton } from "@/ui/components/molecules/IconButton";
import Box from "@mui/material/Box";
import ModalMUI from "@mui/material/Modal";
import { ComponentProps, FC, PropsWithChildren, useState } from "react";

type Props = PropsWithChildren<{
    triggerProps: ComponentProps<typeof IconButton>;
}>;

export const Modal: FC<Props> = ({ triggerProps, children }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <IconButton {...triggerProps} onClick={handleOpen} />
            <ModalMUI open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "min(90%,500px)",
                        bgcolor: "background.paper",
                        color: "white",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    {children}
                </Box>
            </ModalMUI>
        </div>
    );
};

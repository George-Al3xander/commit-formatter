import { INSTRUCTIONS } from "@/lib/constants.ts";

import InfoIcon from "@mui/icons-material/Info";
import { IconButton, List, ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(90%,500px)",
    bgcolor: "background.paper",
    color: "white",
    boxShadow: 24,
    p: 4,
};

export default function InfoModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <span className="sr-only">Open instructions</span>
                <InfoIcon />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                    >
                        Instructions for Formatting:
                    </Typography>
                    <List
                        sx={{
                            listStyleType: "decimal",
                            pl: 2,
                            maxHeight: "400px",
                            overflowY: "auto",
                        }}
                    >
                        {INSTRUCTIONS.map(({ step, title, description }) => (
                            <ListItem key={step} sx={{ display: "list-item" }}>
                                <Typography variant="h6" component="h3">
                                    {title}
                                </Typography>
                                {Array.isArray(description) ? (
                                    <List sx={{ listStyleType: "disc" }}>
                                        {description.map(
                                            ({ condition, detail }) => (
                                                <ListItem
                                                    key={detail}
                                                    sx={{
                                                        display: "list-item",
                                                    }}
                                                >
                                                    <Typography>
                                                        <span
                                                            style={{
                                                                fontWeight: 800,
                                                            }}
                                                        >
                                                            {condition}:{" "}
                                                        </span>
                                                        {detail}
                                                    </Typography>
                                                </ListItem>
                                            ),
                                        )}
                                    </List>
                                ) : (
                                    <Typography
                                        variant="subtitle1"
                                        component="p"
                                    >
                                        {description}
                                    </Typography>
                                )}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Modal>
        </div>
    );
}

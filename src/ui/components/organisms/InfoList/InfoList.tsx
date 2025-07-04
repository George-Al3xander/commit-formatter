import { TInfoItem } from "@/types/models/info-items";
import { InfoListItem } from "@/ui/components/molecules/InfoListItem";
import { List } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";

type Props = {
    title: string;
    items: TInfoItem[];
};

export const InfoList: FC<Props> = ({ title, items }) => {
    return (
        <Box>
            <Typography id="modal-modal-title" variant="h5" component="h2">
                {title}
            </Typography>
            <List
                sx={{
                    listStyleType: "decimal",
                    pl: 2,
                    maxHeight: "400px",
                    overflowY: "auto",
                }}
            >
                {items.map(({ title, description }) => (
                    <InfoListItem
                        key={title}
                        title={title}
                        description={description}
                    />
                ))}
            </List>
        </Box>
    );
};

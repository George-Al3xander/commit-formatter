import { List } from "@mui/material";
import { FC } from "react";
import { InfoListItemDescription } from "./InfoListItemDescription";

type Props = {
    items: { label?: string; details: string }[];
};

export const InfoItemDescriptionList: FC<Props> = ({ items }) => (
    <List sx={{ listStyleType: "disc" }}>
        {items.map(({ label, details }) => (
            <InfoListItemDescription
                key={details}
                label={label}
                sx={{
                    display: "list-item",
                }}
            >
                {details}
            </InfoListItemDescription>
        ))}
    </List>
);

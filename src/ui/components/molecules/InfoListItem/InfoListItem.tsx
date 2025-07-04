import { TInfoItemDescription } from "@/types/models/info-items";
import { InfoListItemTitle } from "@/ui/components/atoms/InfoListItemTitle";
import { InfoListItemDescBlock } from "@/ui/components/molecules/InfoListItemDescBlock";
import { ListItem } from "@mui/material";
import { FC } from "react";

type Props = {
    title: string;
    description: TInfoItemDescription;
};

export const InfoListItem: FC<Props> = ({ title, description }) => {
    return (
        <ListItem sx={{ display: "list-item" }}>
            <InfoListItemTitle>{title}</InfoListItemTitle>
            <InfoListItemDescBlock content={description} />
        </ListItem>
    );
};

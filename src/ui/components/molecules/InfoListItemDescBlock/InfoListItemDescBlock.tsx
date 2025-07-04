import { TInfoItemDescription } from "@/types/models/info-items";
import { InfoListItemDescription } from "@/ui/components/atoms/InfoListItemDescription";
import { List } from "@mui/material";
import { FC } from "react";

type Props = {
    content: TInfoItemDescription;
};

export const InfoListItemDescBlock: FC<Props> = ({ content }) => {
    if (Array.isArray(content)) {
        return (
            <List sx={{ listStyleType: "disc" }}>
                {content.map(({ beforeBoldText, details }) => (
                    <InfoListItemDescription
                        key={details}
                        description={details}
                        beforeBoldText={beforeBoldText}
                        sx={{
                            display: "list-item",
                        }}
                    />
                ))}
            </List>
        );
    }

    return <InfoListItemDescription description={content} />;
};

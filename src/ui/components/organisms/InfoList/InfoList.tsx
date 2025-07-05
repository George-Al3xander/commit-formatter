import { ListItem } from "@mui/material";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { FC, PropsWithChildren } from "react";
import { InfoItemDescriptionList } from "./InfoItemDescriptionList";
import { InfoListItemDescription } from "./InfoListItemDescription";

type Props = PropsWithChildren<{
    listStyleType?: string;
}>;

const Root: FC<Props> = ({ children, listStyleType = "decimal" }) => (
    <List
        sx={{
            listStyleType,
            pl: 2,
            maxHeight: "400px",
            overflowY: "auto",
        }}
    >
        {children}
    </List>
);

const ListTitle: FC<PropsWithChildren> = ({ children }) => (
    <Typography variant="h5" component="h2">
        {children}
    </Typography>
);

const ItemRoot: FC<PropsWithChildren> = ({ children }) => (
    <ListItem sx={{ display: "list-item" }}>{children}</ListItem>
);

const ItemTitle: FC<PropsWithChildren> = ({ children }) => (
    <Typography variant="h6" component="h3">
        {children}
    </Typography>
);

export const InfoList = {
    Root,
    ListTitle,
    ItemRoot,
    ItemTitle,
    ItemDescription: InfoListItemDescription,
    ItemDescriptionList: InfoItemDescriptionList,
};

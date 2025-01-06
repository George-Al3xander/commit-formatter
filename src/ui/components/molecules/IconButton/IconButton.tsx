import { IconButton as IconButtonMUI } from "@mui/material";
import IconType from "@mui/material/Icon";
import { FC, MouseEvent } from "react";

type Props = {
    srText: string;
    icon: typeof IconType;
    onClick: (
        e: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>,
    ) => void;
};

export const IconButton: FC<Props> = ({ srText, icon: Icon, onClick }) => (
    <IconButtonMUI onClick={onClick}>
        <Icon />
        <span className="sr-only">{srText}</span>
    </IconButtonMUI>
);

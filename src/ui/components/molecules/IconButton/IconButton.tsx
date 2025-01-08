import { IconButton as IconButtonMUI, SvgIcon } from "@mui/material";

import { FC, MouseEvent } from "react";

type Props = {
    srText: string;
    icon: typeof SvgIcon;
    onClick?: (
        e: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>,
    ) => void;
};

export const IconButton: FC<Props> = ({ srText, icon: Icon, onClick }) => (
    <IconButtonMUI onClick={onClick}>
        <Icon />
        <span className="sr-only">{srText}</span>
    </IconButtonMUI>
);

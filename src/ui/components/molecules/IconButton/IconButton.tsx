import { IconButton as IconButtonMUI, SvgIcon } from "@mui/material";

import { ComponentProps, FC } from "react";

type Props = {
    srText: string;
    icon: typeof SvgIcon;
} & ComponentProps<typeof IconButtonMUI>;

export const IconButton: FC<Props> = ({
    srText,
    icon: Icon,
    onClick,
    ...props
}) => (
    <IconButtonMUI {...props} onClick={onClick}>
        <Icon />
        <span className="sr-only">{srText}</span>
    </IconButtonMUI>
);

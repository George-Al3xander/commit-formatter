import Typography, { TypographyProps } from "@mui/material/Typography";
import { FC } from "react";

export const InfoListItemTitle: FC<TypographyProps> = (
    props,
    // eslint-disable-next-line
    // @ts-ignore
) => <Typography {...props} variant="h6" component="h3" />;

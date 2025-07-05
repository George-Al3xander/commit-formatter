import Typography, { TypographyProps } from "@mui/material/Typography";
import { FC } from "react";

type Props = {
    label?: string;
} & TypographyProps;

export const InfoListItemDescription: FC<Props> = ({
    children,
    label,
    ...props
}) => {
    return (
        <Typography variant="subtitle1" component="p" {...props}>
            {label && (
                <span
                    style={{
                        fontWeight: 800,
                    }}
                >
                    {`${label}: `}
                </span>
            )}
            {children}
        </Typography>
    );
};

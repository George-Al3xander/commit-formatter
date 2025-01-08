import Typography, { TypographyProps } from "@mui/material/Typography";
import { FC } from "react";

type Props = {
    description: string;
    beforeBoldText?: string;
} & TypographyProps;

export const InfoListItemDescription: FC<Props> = ({
    description,
    beforeBoldText,
    ...props
}) => {
    return (
        // eslint-disable-next-line
        // @ts-ignore
        <Typography {...props} variant="subtitle1" component="p">
            {beforeBoldText && (
                <span
                    style={{
                        fontWeight: 800,
                    }}
                >
                    {beforeBoldText}:{" "}
                </span>
            )}
            {description}
        </Typography>
    );
};

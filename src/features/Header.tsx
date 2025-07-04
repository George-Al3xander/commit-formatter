import { WebsiteLogo } from "@/features/WebsiteLogo";
import Box from "@mui/material/Box";
import { ComponentProps, FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    childrenWrapperProps?: ComponentProps<typeof Box>;
}>;

export const Header: FC<Props> = ({ children, childrenWrapperProps = {} }) => {
    return (
        <Box component="header">
            <WebsiteLogo />
            <Box
                sx={{
                    display: "flex",
                    marginLeft: "auto",
                    alignItems: "center",
                }}
                {...childrenWrapperProps}
            >
                {children}
            </Box>
        </Box>
    );
};

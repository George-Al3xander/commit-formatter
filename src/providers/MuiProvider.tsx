import { createTheme, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

const MUI_THEME = createTheme({
    typography: {
        fontFamily: `"Ubuntu", sans-serif`,
    },
    palette: {
        mode: "dark",
    },
});

export const MuiProvider = ({ children }: PropsWithChildren) => (
    <ThemeProvider theme={MUI_THEME}>{children}</ThemeProvider>
);

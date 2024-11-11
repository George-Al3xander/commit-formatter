import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const THEME = createTheme({
    typography: {
        fontFamily: `"Ubuntu", sans-serif`,
    },
    palette: {
        mode: "dark",
    },
});

const Providers = ({ children }: { children: ReactNode }) => (
    <>
        <Toaster />
        <ThemeProvider theme={THEME}>{children}</ThemeProvider>
    </>
);
export default Providers;

import { Provider } from "jotai";

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
    <Provider>
        <Toaster />
        <ThemeProvider theme={THEME}>{children}</ThemeProvider>
    </Provider>
);
export default Providers;

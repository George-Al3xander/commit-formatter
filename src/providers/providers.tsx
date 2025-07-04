import { MuiProvider } from "@/providers/MuiProvider";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: ReactNode }) => (
    <>
        <Toaster />
        <MuiProvider>{children}</MuiProvider>
    </>
);
export default Providers;

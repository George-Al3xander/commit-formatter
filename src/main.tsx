import {
    FormattingForm,
    Header,
    InstructionsModal,
    RepositoryLink,
} from "@/features";
import Providers from "@/providers/providers";
import "@/styles/main.css";
import "@/styles/reset.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Providers>
            <Header>
                <RepositoryLink />
                <InstructionsModal />
            </Header>
            <main>
                <FormattingForm />
            </main>
        </Providers>
    </StrictMode>,
);

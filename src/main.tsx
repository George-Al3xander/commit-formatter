import FormattingForm from "@/features/FormattingForm/FormattingForm";
import { InstructionsModal } from "@/features/modals/InstructionsModal";
import Providers from "@/providers/providers";
import "@/styles/main.css";
import "@/styles/reset.css";
import { RepositoryLink } from "@/ui/components/molecules/RepositoryLink";
import { Header } from "@/ui/components/organisms/Header";
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

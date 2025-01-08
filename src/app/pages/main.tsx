import { InstructionsModal } from "@/app/pages/formatting/components/InstructionsModal.tsx";
import Providers from "@/providers/providers.tsx";
import "@/styles/main.css";
import "@/styles/reset.css";
import { RepositoryLink } from "@/ui/components/molecules/RepositoryLink";
import { Header } from "@/ui/components/organisms/Header";
import { TemplateMainPage } from "@/ui/components/templates/TemplateMainPage";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FormattingPage from "./formatting/page.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Providers>
            <TemplateMainPage
                header={
                    <Header>
                        <RepositoryLink />
                        <InstructionsModal />
                    </Header>
                }
                content={<FormattingPage />}
            />
        </Providers>
    </StrictMode>,
);

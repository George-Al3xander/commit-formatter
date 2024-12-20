import Providers from "@/components/providers.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Header from "./components/header/header.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Providers>
            <Header />
            <App />
        </Providers>
    </StrictMode>,
);

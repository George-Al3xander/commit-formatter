import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    root: "src/app/pages",
    base: "/commit-formatter/",
    server: {
        open: true,
        port: 3000,
    },
    build: {
        outDir: "../../../dist",
        emptyOutDir: true,
    },
});

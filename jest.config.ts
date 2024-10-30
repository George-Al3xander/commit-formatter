import type { Config } from "jest";

const config: Config = {
    coverageProvider: "v8",
    testEnvironment: "jest-environment-jsdom",
    preset: "ts-jest",
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                diagnostics: {
                    ignoreCodes: ["TS151001"],
                },
                tsconfig: "./tsconfig.json",
            },
        ],
        "^.+\\.ts?$": [
            "ts-jest",
            {
                diagnostics: {
                    ignoreCodes: ["TS151001"],
                },
                tsconfig: "./tsconfig.json",
            },
        ],
    },
};

export default config;

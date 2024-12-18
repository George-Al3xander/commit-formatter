import type { Config } from "jest";

const config: Config = {
    coverageProvider: "v8",
    testEnvironment: "jest-environment-jsdom",
    preset: "ts-jest",
    coverageThreshold: {
        global: {
            lines: 90,
            statements: 90,
        },
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                diagnostics: {
                    ignoreCodes: ["TS151001"],
                },
                tsconfig: "./tsconfig.app.json",
            },
        ],
        "^.+\\.ts?$": [
            "ts-jest",
            {
                diagnostics: {
                    ignoreCodes: ["TS151001"],
                },
                tsconfig: "./tsconfig.node.json",
            },
        ],
    },
};

export default config;

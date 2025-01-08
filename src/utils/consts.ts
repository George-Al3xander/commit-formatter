import { TInfoItemDescription } from "@/types/models/info-items.ts";

export const INSTRUCTIONS_TITLE = "Instructions for Formatting:";

export const INSTRUCTION_ITEMS: {
    step: number;
    title: string;
    description: TInfoItemDescription;
}[] = [
    {
        step: 1,
        title: "Select Commit Type (Optional)",
        description:
            "Choose a type such as 'feat', 'build', or 'docs' if relevant. If 'none' is selected, only the title will be used for formatting.",
    },
    {
        step: 2,
        title: "Enter Title",
        description: [
            {
                beforeBoldText: "With Commit Type",
                details:
                    "Keep the title within 50 characters, including the type, a colon, and a space (e.g., 'docs: Update README').",
            },
            {
                beforeBoldText: "Without Commit Type",
                details: "Keep the title within 50 characters alone.",
            },
        ],
    },
    {
        step: 3,
        title: "Enter Description (Optional)",
        description:
            "Add a description of any length to explain your changes in detail. The app will format it to 72 characters per line automatically.",
    },
    {
        step: 4,
        title: "Copy Formatted Commit",
        description:
            "Once complete, click the button at the bottom to copy the formatted commit message to your clipboard!",
    },
];

export const GITHUB_REPO_LINK =
    "https://github.com/George-Al3xander/commit-formatter";

export const WEBSITE_TITLE = "Commit Formatter";

export const COPY_MESSAGES = {
    success: "Successfully copied to clipboard!",
    error: "Copy failed. Please check your content and try again",
};

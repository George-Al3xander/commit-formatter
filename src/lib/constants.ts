export const TITLE_MAX_LENGTH = 50;
export const DESCRIPTION_MAX_LENGTH = 72;
export const COMMIT_TYPES = [
    "build",
    "chore",
    "ci",
    "docs",
    "feat",
    "fix",
    "perf",
    "refactor",
    "revert",
    "style",
    "test",
] as const;

export const TITLE_LENGTH_ERR_MESSAGES = {
    min: "Title is required and must be at least 1 character long.",
    max: `Maximum title length is ${TITLE_MAX_LENGTH} characters`,
};

export const COPY_MESSAGES = {
    success: "Successfully copied to clipboard!",
    error: "Copy failed. Please check your content and try again",
};

export const INSTRUCTIONS: {
    step: number;
    title: string;
    description: string | { condition: string; detail: string }[];
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
                condition: "With Commit Type",
                detail: "Keep the title within 50 characters, including the type, a colon, and a space (e.g., 'docs: Update README').",
            },
            {
                condition: "Without Commit Type",
                detail: "Keep the title within 50 characters alone.",
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

import { InfoList } from "@/ui/components/organisms/InfoList";
import { Modal } from "@/ui/components/organisms/Modal";
import { InfoIcon } from "@/ui/icons";

const title = "Instructions for Formatting:";

const items = [
    {
        title: "Select Commit Type (Optional)",
        description:
            "Choose a type such as 'feat', 'build', or 'docs' if relevant. If 'none' is selected, only the title will be used for formatting.",
    },
    {
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
        title: "Enter Description (Optional)",
        description:
            "Add a description of any length to explain your changes in detail. The app will format it to 72 characters per line automatically.",
    },
    {
        title: "Copy Formatted Commit",
        description:
            "Once complete, click the button at the bottom to copy the formatted commit message to your clipboard!",
    },
];

export const InstructionsModal = () => (
    <Modal triggerProps={{ icon: InfoIcon, srText: "Open instruction" }}>
        <InfoList title={title} items={items} />
    </Modal>
);

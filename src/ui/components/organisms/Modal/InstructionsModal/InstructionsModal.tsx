import {
    INSTRUCTION_ITEMS,
    INSTRUCTIONS_TITLE,
} from "@/configs/instructions.ts";
import { InfoList } from "@/ui/components/organisms/InfoList";
import { DefaultModal } from "@/ui/components/organisms/Modal/DefaultModal";
import InfoIcon from "@mui/icons-material/Info";

export const InstructionsModal = () => {
    return (
        <DefaultModal
            triggerProps={{ icon: InfoIcon, srText: "Open instruction" }}
        >
            <InfoList title={INSTRUCTIONS_TITLE} items={INSTRUCTION_ITEMS} />
        </DefaultModal>
    );
};

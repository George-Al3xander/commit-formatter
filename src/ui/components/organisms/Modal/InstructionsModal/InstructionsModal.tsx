import { InfoList } from "@/ui/components/organisms/InfoList";
import { DefaultModal } from "@/ui/components/organisms/Modal/DefaultModal";
import { InfoIcon } from "@/ui/icons";
import { INSTRUCTIONS_TITLE, INSTRUCTION_ITEMS } from "@/utils/consts.ts";

export const InstructionsModal = () => {
    return (
        <DefaultModal
            triggerProps={{ icon: InfoIcon, srText: "Open instruction" }}
        >
            <InfoList title={INSTRUCTIONS_TITLE} items={INSTRUCTION_ITEMS} />
        </DefaultModal>
    );
};

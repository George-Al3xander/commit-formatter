import { InfoList } from "@/ui/components/organisms/InfoList";
import { Modal } from "@/ui/components/organisms/Modal";
import { InfoIcon } from "@/ui/icons";
import { INSTRUCTIONS_TITLE, INSTRUCTION_ITEMS } from "@/utils/consts";

export const InstructionsModal = () => {
    return (
        <Modal triggerProps={{ icon: InfoIcon, srText: "Open instruction" }}>
            <InfoList title={INSTRUCTIONS_TITLE} items={INSTRUCTION_ITEMS} />
        </Modal>
    );
};

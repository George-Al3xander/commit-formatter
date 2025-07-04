import { COPY_MESSAGES } from "@/utils/consts";
import toast from "react-hot-toast";

export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        toast.success(COPY_MESSAGES.success);
    } catch (e) {
        console.error(e);
        toast.error(COPY_MESSAGES.error);
    }
};

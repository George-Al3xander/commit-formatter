import toast from "react-hot-toast";

const SUCCESS_MESSAGE = "Successfully copied to clipboard!";

const ERROR_MESSAGE = "Copy failed. Please check your content and try again";

export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        toast.success(SUCCESS_MESSAGE);
    } catch (e) {
        console.error(e);
        toast.error(ERROR_MESSAGE);
    }
};

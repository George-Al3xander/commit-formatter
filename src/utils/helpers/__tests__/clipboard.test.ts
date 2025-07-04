import { copyToClipboard } from "@/utils/helpers/clipboard";
import toast from "react-hot-toast";

describe("copy to clipboard", () => {
    const toastSuccess = jest
        .spyOn(toast, "success")
        .mockImplementation(jest.fn());
    const toastError = jest.spyOn(toast, "error").mockImplementation(jest.fn());
    const writeText = jest.fn().mockImplementation(() => Promise.resolve());
    Object.assign(window.navigator, {
        clipboard: {
            writeText,
        },
    });

    afterEach(() => jest.clearAllMocks());

    it("should show success toast", async () => {
        await copyToClipboard("Text");
        expect(writeText).toHaveBeenCalled();
        expect(toastSuccess).toHaveBeenCalled();
        expect(toastError).not.toHaveBeenCalled();
    });

    it("should show error toast", async () => {
        jest.spyOn(console, "error").mockImplementation(jest.fn());
        writeText.mockImplementation(
            jest.fn(() => {
                throw new Error();
            }),
        );
        await copyToClipboard("Text");
        expect(writeText).toHaveBeenCalled();
        expect(toastSuccess).not.toHaveBeenCalled();
        expect(toastError).toHaveBeenCalled();
    });
});

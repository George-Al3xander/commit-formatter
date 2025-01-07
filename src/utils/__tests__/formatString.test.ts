import { formatAbbreviation } from "@/utils/formatString.ts";

describe("FormatString", () => {
    it("should format abbreviation", () => {
        expect(formatAbbreviation("awesome code")).toBe("AC");
        expect(formatAbbreviation("awesome")).toBe("A");
        expect(formatAbbreviation("New      word")).toBe("NW");
    });
});

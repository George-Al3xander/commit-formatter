import { formatAbbreviation } from "@/utils/formatString.ts";

const WEBSITE_TITLE = "Commit Formatter";

export const WebsiteLogo = () => {
    return (
        <h1 style={{ fontSize: "24px" }}>
            <span className="title-desktop">{WEBSITE_TITLE}</span>
            <span className="title-mobile">
                {formatAbbreviation(WEBSITE_TITLE)}
            </span>
        </h1>
    );
};

import { transformToAbbreviation } from "@/utils/transformString";

const WEBSITE_NAME = "Commit Formatter";

export const WebsiteLogo = () => {
    return (
        <h1 style={{ fontSize: "24px" }}>
            <span className="title-desktop">{WEBSITE_NAME}</span>
            <span className="title-mobile">
                {transformToAbbreviation(WEBSITE_NAME)}
            </span>
        </h1>
    );
};

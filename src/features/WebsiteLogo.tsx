import { WEBSITE_TITLE } from "@/utils/consts";
import { transformToAbbreviation } from "@/utils/helpers/transformString";

export const WebsiteLogo = () => {
    return (
        <h1 style={{ fontSize: "24px" }}>
            <span className="title-desktop">{WEBSITE_TITLE}</span>
            <span className="title-mobile">
                {transformToAbbreviation(WEBSITE_TITLE)}
            </span>
        </h1>
    );
};

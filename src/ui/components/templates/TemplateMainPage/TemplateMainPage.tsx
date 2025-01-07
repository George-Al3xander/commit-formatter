import { FC, ReactNode } from "react";

type Props = {
    header: ReactNode;
    content: ReactNode;
};

export const TemplateMainPage: FC<Props> = ({ header, content }) => {
    return (
        <div>
            {header}
            <main>{content}</main>
        </div>
    );
};

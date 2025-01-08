export type TInfoItemDescription =
    | string
    | { beforeBoldText: string; details: string }[];

export type TInfoItem = {
    title: string;
    description: TInfoItemDescription;
};

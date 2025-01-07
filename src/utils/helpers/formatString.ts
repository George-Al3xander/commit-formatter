export const formatAbbreviation = (str: string): string => {
    const text = str.replace(/\s\s+/g, " ");
    const words = text.split(" ");
    if (words.length === 1) return text[0].toUpperCase();
    return words.map((w) => w[0].toUpperCase()).join("");
};

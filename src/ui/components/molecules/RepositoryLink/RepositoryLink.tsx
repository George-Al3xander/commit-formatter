import { IconButton } from "@/ui/components/molecules/IconButton";
import { GitHubIcon } from "@/ui/icons";
import { GITHUB_REPO_LINK } from "@/utils/consts.ts";
import { Link } from "@mui/material";

export const RepositoryLink = () => {
    return (
        <Link href={GITHUB_REPO_LINK}>
            <IconButton srText={"GitHub repository link"} icon={GitHubIcon} />
        </Link>
    );
};

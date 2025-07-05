import { IconButton } from "@/ui/components/molecules/IconButton";
import { GitHubIcon } from "@/ui/icons";
import { Link } from "@mui/material";

const GITHUB_REPO_LINK = "https://github.com/George-Al3xander/commit-formatter";

export const RepositoryLink = () => {
    return (
        <Link href={GITHUB_REPO_LINK}>
            <IconButton srText={"GitHub repository link"} icon={GitHubIcon} />
        </Link>
    );
};

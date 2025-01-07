import { GITHUB_REPO_LINK } from "@/configs/links.ts";
import { IconButton } from "@/ui/components/molecules/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";

export const RepositoryLink = () => {
    return (
        <Link href={GITHUB_REPO_LINK}>
            <IconButton srText={"GitHub repository link"} icon={GitHubIcon} />
        </Link>
    );
};

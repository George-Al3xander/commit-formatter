import { GITHUB_REPO_LINK } from "@/lib/constants.ts";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Link } from "@mui/material";

const GithubLink = () => (
    //eslint-disable-next-line
    //@ts-ignore
    <Link
        sx={{ ml: "auto" }}
        color="white"
        component={IconButton}
        target={"_blank"}
        href={GITHUB_REPO_LINK}
        underline="none"
    >
        <span className="sr-only">GitHub repository link</span>
        <GitHubIcon />
    </Link>
);

export default GithubLink;

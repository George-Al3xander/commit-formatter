import GithubLink from "@/components/header/github-link.tsx";
import InfoModal from "@/components/header/info-modal.tsx";

const Header = () => (
    <header>
        <span className="title-desktop">Commit formatter</span>
        <span className="title-mobile">CF</span>
        <GithubLink />
        <InfoModal />
    </header>
);
export default Header;

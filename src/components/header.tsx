import GithubLink from "@/components/github-link.tsx";
import InfoModal from "@/components/info-modal.tsx";

const Header = () => (
    <header>
        <span className="title-desktop">Commit formatter</span>
        <span className="title-mobile">CF</span>
        <GithubLink />
        <InfoModal />
    </header>
);
export default Header;

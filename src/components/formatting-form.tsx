import CommitTypeSelector from "@/components/commit-type-selector.tsx";
import DescriptionInput from "@/components/description-input.tsx";
import FormatButton from "@/components/format-button.tsx";
import TitleInput from "@/components/title-input.tsx";

const FormattingForm = () => {
    return (
        <form className="app-container" onSubmit={(e) => e.preventDefault()}>
            <fieldset className="title-container">
                <CommitTypeSelector />
                <TitleInput />
            </fieldset>
            <fieldset>
                <DescriptionInput />
            </fieldset>
            <FormatButton />
        </form>
    );
};

export default FormattingForm;

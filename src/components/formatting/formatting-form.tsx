import CommitTypeSelector from "@/components/formatting/commit-type-selector.tsx";
import DescriptionInput from "@/components/formatting/description-input.tsx";
import FormatButton from "@/components/formatting/format-button.tsx";
import TitleInput from "@/components/formatting/title-input.tsx";

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

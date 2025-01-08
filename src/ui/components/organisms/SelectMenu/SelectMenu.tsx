import {
    FormControl,
    FormControlProps,
    InputLabel,
    MenuItem,
    MenuItemProps,
    Select,
    SelectProps,
} from "@mui/material";
import { FC, useId } from "react";

type Props = {
    formControlProps?: FormControlProps;
    labelText: string;
    selectProps?: SelectProps;
    selectOptions: string[];
    selectOptionProps?: MenuItemProps;
};

export const SelectMenu: FC<Props> = ({
    formControlProps,
    labelText,
    selectProps,
    selectOptions,
    selectOptionProps,
}) => {
    const labelId = useId();
    return (
        <FormControl {...formControlProps}>
            <InputLabel id={labelId}>{labelText}</InputLabel>
            <Select {...selectProps} labelId={labelId}>
                {selectOptions.map((val) => (
                    <MenuItem {...selectOptionProps} key={val} value={val}>
                        {val}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

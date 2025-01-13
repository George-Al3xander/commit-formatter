import {
    FormControl,
    FormControlProps,
    InputLabel,
    MenuItem,
    MenuItemProps,
    Select,
    SelectProps,
} from "@mui/material";
import { useId } from "react";
import { Control, Controller, Path } from "react-hook-form";

type Props<T extends object> = {
    formControlProps?: FormControlProps;
    labelText: string;
    selectProps?: SelectProps;
    selectOptions: string[];
    selectOptionProps?: MenuItemProps;
    control: Control<T>;
    name: Path<T>;
};

export const SelectMenu = <T extends object>({
    formControlProps,
    labelText,
    selectProps,
    control,
    selectOptions,
    selectOptionProps,
    name,
}: Props<T>) => {
    const labelId = useId();
    return (
        <FormControl {...formControlProps}>
            <InputLabel id={labelId}>{labelText}</InputLabel>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <Select {...selectProps} {...field} labelId={labelId}>
                        {selectOptions.map((val) => (
                            <MenuItem
                                {...selectOptionProps}
                                key={val}
                                value={val}
                            >
                                {val}
                            </MenuItem>
                        ))}
                    </Select>
                )}
            />
        </FormControl>
    );
};

import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { BaseWrapper, Label } from "../ui";
import { InputWrapper } from "../Wrappers";
import { IInputWrapperExtended, ISelectOption } from "@/Types";
import { cn } from "@/lib/utils";
import { FormikProps } from "formik";

interface IMainSelect extends IInputWrapperExtended<HTMLSelectElement> { 
    options: ISelectOption[];
    onSelected ?: (event: SelectChangeEvent) => void;
}

function MainSelect({ options, onSelected, name, ...inputProps }: IMainSelect & FormikProps<any>) {
  
    return (
    
        <InputWrapper {...inputProps} className={cn("h-10  border-0 w-full  ")} >
                <Select
                    input={
                        <OutlinedInput
                            notched={false}
                            style={{ border: 'none', }}
                        />
                    }
                    // labelId="demo-simple-select-filled-label"
                    // id="demo-simple-select-filled"
                    className=" h-10 "
                    name={name}
                    onChange={onSelected}
                >
                    {
                        options.map((option: ISelectOption, index:number) => 
                        <MenuItem key={index} value={option.value} >{option.label}</MenuItem>)
                    }

                </Select>
        </InputWrapper>
    )
}

export default MainSelect
import React, { MouseEventHandler, ReactNode, createElement, useState } from "react";
import { Box, Input, InputBase, InputBaseProps, TextField } from "@mui/material";
import { Label, BaseWrapper } from "..";
import { cn } from "@/lib/utils";
import { IInputWrapper } from "@/Types";
import { FormikProps } from "formik";

const excludeBordernPaddingfrom = ["select", "textarea"];

function InputWrapper<T>({
    CustomComp,
    state,
    LeftComp,
    RightComp,
    label,
    error,
    touched,
    extra,
    children,
    ...inputProps
}: IInputWrapper<T> & FormikProps<any> ) {
    const [isFocused , setIsFocused] = useState(false);
    const localClassName = inputProps?.disabled === true
        ? "bg-gray-200 dark:bg-gray-800"
        : state === "error"
        ? "border-red-500  text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
        : state === "success"
        ? "border-green-500  text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
        : "border-gray-400 dark:!border-white/10 dark:text-white";
    
    inputProps = {
        ...inputProps,
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false)
    }

    const focusedClassName = isFocused ? "border-black" : "";
    return (
        <div className={`${extra} w-full mt-2`}>
            <Label variant="caption" >{label}</Label>

            <BaseWrapper
              className={cn("rounded-md cursor-pointer ", localClassName,
                    !excludeBordernPaddingfrom.includes(inputProps.type as string) && `${focusedClassName}`)}
            >
                
                {CustomComp ? (
                    CustomComp
                ) : (
                    <div 
                    onDoubleClick={inputProps.onDoubleClick as MouseEventHandler<HTMLDivElement>} 
                    className=" flex  flex-1 items-center justify-center ">
                        {LeftComp && LeftComp}
                           <>
                            {React.Children.map(children, child => {
                                if (React.isValidElement(child)) {
                                    return React.cloneElement(child, { ...inputProps });
                                }
                                return child;
                            })}
                           </>
                        {RightComp && RightComp}
                    </div>
                )}
            </BaseWrapper>
            {touched && error  && (
                <div className="text-red-500 text-sm mt-1">{error}</div>
            )}
        </div>
    );
}

export default InputWrapper;
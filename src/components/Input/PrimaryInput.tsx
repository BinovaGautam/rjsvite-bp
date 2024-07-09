import React, { ReactNode } from "react";
import { Box, Input, InputBase, InputBaseProps, TextField } from "@mui/material";
import { Label, BaseWrapper } from "..";

type InputFieldProps = {
  id?: string;
  label?: string;
  extra?: string;
  placeholder?: string;
  variant?: string;
  state?: string;
  disabled?: boolean;
  type?: string;
  CustomComp?: ReactNode;
  LeftComp?: ReactNode;
  RightComp?: ReactNode;
  value?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function PrimaryInput({
  CustomComp,
  LeftComp,
  RightComp,
  label,
  id,
  extra,
  type,
  placeholder,
  variant,
  state,
  disabled,
  value,
  error,
  ...inputProps
}: InputFieldProps) {
  return (
    <div className={`${extra} w-full mt-2`}>
      <Label>{label} </Label>

      <BaseWrapper
        className={`h-9 px-4 rounded-md ${
          disabled === true
            ? "!border-red-500 !bg-red-500 dark:!bg-red-500/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
            : state === "error"
            ? "border-red-500  text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            : state === "success"
            ? "border-green-500  text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
            : "border-gray-200 dark:!border-white/10 dark:text-white"
        }`}
      >
        {CustomComp ? (
          CustomComp
        ) : (
            <Box onDoubleClick={inputProps.onDoubleClick} className=" flex  flex-1 items-center justify-center bg-white">
            {LeftComp && LeftComp}
           
            <InputBase
              disabled={disabled}
              type={type}
              id={id}
              placeholder={placeholder}
              className={`flex-1  text-black h-12 rounded-md bg-white  text-md out`}
              value={value}
              fullWidth
              {...(inputProps as InputBaseProps)}
              />
            {RightComp && RightComp}
          </Box>
        )}
      </BaseWrapper>
      {error && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
}

export default PrimaryInput;
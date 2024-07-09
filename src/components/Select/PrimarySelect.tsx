// import * as React from 'react';
// import Select from '@mui/joy/Select';
// import Option from '@mui/joy/Option';

// interface IPrimarySelect {
//   label ?: string;
//   options : string[];
//   setValue ?: React.Dispatch<React.SetStateAction<string>>;
// }

// export default function PrimarySelect({options, setValue} : IPrimarySelect) {

//   const handleChange = (newValue  :any) => {
//    setValue && setValue(newValue as string);
//     console.log(`You have choosen "${newValue}"`);
//   };
//   return (
//     <Select
//       defaultValue={['dog']}
//       multiple
//       onChangeCapture={(value)=>console.log(value)}
//       onChange={handleChange}
//       sx={{
//         minWidth: '13rem',
//       }}
//       slotProps={{
//         listbox: {
//           sx: {
//             width: '100%',
//           },
//         },
//       }}
//     >
//       {options.map((option: string, index: number) => {
//         return (
//           <Option value={option} key={index}>{option}</Option>
//         )
//       })}
//     </Select>
//   );
// }

import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Label } from "../ui";

interface IPrimarySelect {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function PrimarySelect({
  options,
  value,
  onChange,
  label
}: IPrimarySelect) {
  const handleChange = (event: any, newValue: any) => {
    onChange && onChange(newValue as string);
    console.log(`You have chosen "${newValue}"`);
  };

  return (
    <div className="flex flex-col">
    <Label >{label}</Label>
      <Select
        value={value}
        onChange={(event, newValue) => handleChange(event, newValue)}
        sx={{
          minWidth: "13rem",
        }}
        slotProps={{
          listbox: {
            sx: {
              width: "100%",
            },
          },
        }}
        className="h-10"
      >
        {options.map((option: string, index: number) => (
          <Option value={option} key={index}>
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
}

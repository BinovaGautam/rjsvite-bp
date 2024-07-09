
import { Dispatch, SetStateAction } from "react";
import { BaseWrapper, Input, Label, Textarea } from "../ui";
import { InputWrapper } from "../Wrappers";
import { IInputWrapperExtended } from "@/Types";
import { FormikProps } from "formik";
import { BlockEditor } from "../Editors";

interface IMainInput extends IInputWrapperExtended<HTMLInputElement> {
    label?: string;
    touched ?: boolean;
} 

function MainInput({ ...props }: IMainInput & FormikProps<any> & { uploadFile : any }) {
    const uploadFile = (file: File) => {
        const reader = new FileReader();
        
        reader.readAsDataURL(file)
    }
    props = { ...props, uploadFile }
    return (

        <InputWrapper {...props}   >
            {
                props.type === 'textarea' ?
                <Textarea  />
              : props.type === 'wysiwyg' ?
               <BlockEditor/>
            :
                <Input   />
            }
        </InputWrapper>
    )
}

export default MainInput
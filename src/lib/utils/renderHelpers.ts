import { IoMdMicrophone } from "react-icons/io";
import { ImHeadphones } from "react-icons/im";
import { IoReaderSharp } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { FormikProps } from "formik";

export const formatListRow = (data: object,keys ?: string[],keysToSkip : string[] = []) => {
    //format object to array of objects and also return string | ReactNode | ISOString
     keys = keys || Object.keys(data);

    const resp = keys.map((key, index) => {
        return { key, value: data[key as keyof typeof data]};
    }).filter((item) => {
        return !(keysToSkip || []).includes(item.key as string)
    })
    
    return resp;
}

export const getIconsByKey = (key : string) => {
    const badges ={
        speaking : IoMdMicrophone,
        listening: ImHeadphones,
        reading: IoReaderSharp,
        writing: TfiWrite
    }

    return badges[key as keyof typeof badges];
}

export const  getFormikFields = (name: any, formik : FormikProps<any> ) => {
    const valueFieldsArr = [
        {fieldName: 'value',target: 'values'},
        {fieldName: 'error',target: 'errors'},
        {fieldName: 'touched',target: 'touched'}
    ]
    const valueFields: { [key: string]: any } = {}; // Add index signature to valueFields object
    const inputActions: { [key: string]: any } = {}
    //for each formik field of object type with key as name, get the value
    Object.keys(formik).forEach((key) => {
        const targetField = valueFieldsArr.find((item) => item.target === key);
        if (!!targetField) {
            valueFields[targetField.fieldName] = formik[key as keyof typeof formik]?.name;
        } else {
            inputActions[key] = formik[key as keyof typeof formik];
        }
    });

    console.log('VALUE FIELDS', valueFields)
    return { ...valueFields, ...inputActions };
};
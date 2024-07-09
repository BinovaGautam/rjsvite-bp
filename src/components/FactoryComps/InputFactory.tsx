import React, { HTMLAttributes, useMemo } from 'react'
import { MainSelect } from '../Select'
import { MainInput } from '../Input'
import { ISelectOption } from '@/Types'
import { Checkbox } from '@mui/material'
import { PrimarySwitch } from '../PrimarySwitch'
import { FormikProps, FormikValues } from 'formik'
import { Textarea } from '../ui'
import { BlockEditor, WEditor } from '../Editors'

interface IInputFactory {
    inputField: HTMLAttributes<any> & any;
    inputActions ?: FormikProps<FormikValues> | any;
    actionFields ?: any;
}

const InputFactory = ({ inputField, inputActions, }: IInputFactory ) => {
    const {handleChange, ...restActions} = inputActions || {}
    if (inputField.hidden || !(!inputField.isConditional || (inputField.isConditional && inputField.showCondition)) ) return null

    switch (inputField?.type?.toLowerCase()) {
        case 'select':
            return (
                <MainSelect
                    label={inputField.label}
                    name={inputField.name}
                    options={inputField.options as ISelectOption[]} // Add type assertion
                    onSelected={handleChange}
                    {...inputField}
                />
            )
        case 'checkbox':
        case 'switch':
            return (
               <PrimarySwitch
                    {...inputField}          
                    id={''}     
                    setValue={(bool: boolean) => inputField?.onChange && inputField?.onChange({ target: { name: inputField.name, value : bool } })} 
                 />
            )
        default:
            return (
                <MainInput
                    {...inputField}
                />
            )
    }
}


export default InputFactory


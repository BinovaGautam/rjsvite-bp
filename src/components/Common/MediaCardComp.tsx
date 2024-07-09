import { IMockMediaObj } from "@/lib/Types"
import { useFormik } from "formik"
import { RenderMediaFactory } from "../UploadField"
import { IDefaultMedia } from "@/Types"
import { Button, Label } from "../ui"
import { GrUpdate } from "react-icons/gr"
import { InputFactory } from "../FactoryComps"
import { ICON_SIZES, cn } from "@/lib"
import { Tooltip } from "@mui/material"
import { RiDeleteBin5Line } from "react-icons/ri"

interface IMediaCardComp {
    media: IMockMediaObj,
    onRemove: () => void,
    onChange ?: (media: IMockMediaObj) => void

}

const MediaCardComp = ({ 
      media,
     onRemove,
     onChange
     }: IMediaCardComp) => {
    const form = useFormik({
        initialValues: media,
        onSubmit: (values, actions) => {
            console.log('Form Values', values)
            onChange && onChange(values)
        }
    })


    const mediaItem = {
        ...media,
        src: media.media
    }

    const inputFields = [
        { label: 'Hidden', name: 'hidden', type: 'checkbox' },
        { label: 'Auto Play', name: 'autoPlay', type: 'checkbox' },
    ]

    const isValueChanged = JSON.stringify(form.values) !== JSON.stringify(media)
    return (
        <div className="border relative bg-secondary rounded-md p-2 overflow-hidden flex justify-center items-center min-h-[25vh] ">
            <RenderMediaFactory media={mediaItem as IDefaultMedia} />
            <div className="absolute bottom-0 left-0 right-0 p-1  text-center cursor-pointer bg-blue-400/80 " >
                {isValueChanged &&
                    <Button  variant="outline" className='px-2 h-8' onClick={form.submitForm} >
                        <GrUpdate size={ICON_SIZES.SM} />
                        <Label variant="caption" className='ml-2' >Update</Label>
                    </Button>
                }
                <div className="flex flex-1  justify-between  items-center " >
                    {
                        inputFields.map((field, index) => {
                            return (
                                <div key={index} className={cn("w-full  ",)}>
                                    <InputFactory
                                        inputField={{
                                            ...field,
                                            checked: form.values[field.name as keyof typeof form.values],
                                            ...form.getFieldMeta(field.name),
                                            ...form.getFieldProps(field.name)
                                        }}

                                    />

                                </div>
                            )
                        })
                    }

                    <Tooltip title="Remove Media" >
                        <Button variant="secondary" size="icon" className='px-2' onClick={onRemove} >
                            <RiDeleteBin5Line size={ICON_SIZES.MD} />
                        </Button>
                    </Tooltip>

                </div>



            </div>
        </div>
    )
}


export default MediaCardComp
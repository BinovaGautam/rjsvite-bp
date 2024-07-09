
import { Input, RenderMediaFactory, UploadField,Button } from "@/components";
import { Box, Tab, Tabs, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri"
import { FaLink } from "react-icons/fa"
import { IAddMediaComp, IDefaultMedia, IFileType } from "@/Types";
import { cn } from "@/lib/utils";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

/**
 * @description have two options to add media(upload or from url), either upload or select from the media library
 * @returns 
 */
const allMedialOptions = [
    {
        title: "Upload",
        key: "upload",
        icon: <RiUploadCloud2Line size={20} />,
        comp: ({ onChange, acceptFileType, ...restProps }: IAddMediaComp) => (
            <UploadField 
            acceptFileType={acceptFileType} 
            id={"image"} 
            label={""} 
            placeholder={""}
            variant={""} onChange={onChange}  {...restProps} />
        ),
    },
    {
        title: "From URL",
        key: "url",
        icon: <FaLink size={20} />,
        comp: ({ onChange, acceptFileType, ...restProps }: IAddMediaComp) => (
            <Input placeholder="Enter Image URL" onChange={onChange} {...restProps} />
        ),
    },
]

type AddMediaCompProps = {
    onFileSelect?: (fileParams: {file : IFileType} & IDefaultMedia ) => void;
    acceptFileType: string;
    methods?: string[];
    defaultMedia?: IDefaultMedia;
}

const AddMediaComp = ({
    onFileSelect,
    acceptFileType,
    methods,
    defaultMedia 
}: AddMediaCompProps) => {
    const [allowedMethods, setAllowedMethods] = useState(["upload"])
    const [value, setValue] = useState(0);
    const [selectedFile, setSelectedFile] = useState<IFileType | undefined>(!!defaultMedia ? defaultMedia?.src : "");
    const [fileMeta, setFileMeta] = useState<Pick<IDefaultMedia, 'type' | 'duration'> | undefined>(defaultMedia)

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    useEffect(() => {
       if(!selectedFile || !fileMeta) return
       
       const returnObj = {
            file : selectedFile,
            ...fileMeta
       }
      
       onFileSelect && onFileSelect(returnObj as any)
    }, [selectedFile,fileMeta])
    
    const handleSelect = (file: File | any) => {
        setSelectedFile(file.target?.value || file);
    }


    const mediaOptions = allMedialOptions.filter((item) => allowedMethods.includes(item.key))
    const fileTitle = fileMeta?.type?.split('/')[0];
    // const mediaObj = typeof selectedFile === "string" ? { src: selectedFile, type: fileTitle } : selectedFile

    return (
        <div className="w-full gap-5 mt-2">
            <div className={cn("block", !!selectedFile && "hidden")}>
                <Tabs value={value} onChange={handleTabChange}   aria-label="basic tabs example">
                    {
                        mediaOptions.map((item, index: number) => (
                            <Tab key={index} icon={item.icon} iconPosition="start" label={item.title} />
                        ))
                    }
                </Tabs>

            </div>

            {!!selectedFile ? (
                <div>
                    <RenderMediaFactory getMetaData={setFileMeta} media={selectedFile as File}  />
                    <Button variant="secondary" size="sm" onClick={() => setSelectedFile(undefined)} className="mt-2">
                        Change {fileTitle}
                    </Button>
                    {/* <input type="file" name="" id="" ref={fileInputRef} onChange={handleChange} style={{ display: 'none' }} accept={acceptFileType} /> */}
                </div>
            ) : 
            
                mediaOptions.map((item, index) => (
                    <CustomTabPanel key={index} value={value} index={index}>
                        {item.comp({ acceptFileType: acceptFileType, onChange: handleSelect, defaultMedia: defaultMedia })}
                    </CustomTabPanel>
                ))
            }

        </div>
    )
}


export default AddMediaComp;
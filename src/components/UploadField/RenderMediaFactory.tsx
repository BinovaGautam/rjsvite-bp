import { IDefaultMedia } from "@/Types";
import { cn } from "@/lib/utils";
import { useEffect, useMemo } from "react";

interface IRenderMediaFactory {
    media: File | IDefaultMedia,
    getMetaData?: (metaData: Pick<IDefaultMedia, 'duration' | 'type'>) => void;
    className?: string
}

const RenderMediaFactory = ({
    media,
    getMetaData,
    className
}: IRenderMediaFactory) => {

    const formattedMedia = useMemo(() => {
       return {
        ...media,
        type: media.type.split('/')[0],
        src: (media as IDefaultMedia).src || (!!media ? URL.createObjectURL(media as File) : "")
    }
    },[media])

    const handleMetadata = (e: any) => {
       
        const duration = Number(e.target?.duration || 0)
        const mediaMeta ={
            duration,
            type : formattedMedia.type
        }
        getMetaData && getMetaData(mediaMeta)
    }

    useEffect(() => {
        const otherTypes = ['image']
        console.log('ON RENDER META LOADED formattedMedia', formattedMedia)
        //here onLoadMetadata is not supported for images
        if(!otherTypes.includes(formattedMedia.type)) return
        const mediaMeta ={
            type : formattedMedia.type
        }
        getMetaData && getMetaData(mediaMeta)
    },[formattedMedia])


    const _renderMediaPreview = () => {
        switch (formattedMedia.type) {
            case "image":
                return <img 
                    src={formattedMedia.src} 
                    alt={formattedMedia.src}
                    className="object-center  "
                />
            case "audio":
                return <audio
                    onLoadedMetadata={handleMetadata}
                    src={formattedMedia.src} controls

                />
            case "video":
                return <video
                    onLoadedMetadata={handleMetadata}
                    src={formattedMedia.src}
                    controls className="object-center  " />
            default:
                return <p>Unsupported file type : {JSON.stringify(formattedMedia)} </p>
        }
    }

    return (
        <div className={cn("max-w-[50vh]  ", className)} >
            {_renderMediaPreview()}
        </div>
    )
}


export default RenderMediaFactory

import { CiCircleAlert } from "react-icons/ci"
import { Button, Label } from "@/components"
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";
import { IBaseEmptyComponent } from "@/Types";
import { GiEmptyWoodBucket } from "react-icons/gi";

interface IBaseDisplay {
    className ?: string
}
interface ITitleComp {
    title?: string;
    Icon?: React.ReactNode,
    className ?: string,
    stringClassName ?: string,
    noIcon ?: boolean
}




export const LabelTitle = ({
    title = "",
    Icon,
    className
}: Omit<ITitleComp, 'noIcon'>) => {
    return (
       <div className="flex gap-x-2 items-center">
            {Icon}
            <Label variant="subtitle" className={cn("",className)} >{title}</Label>
      </div>
    )

}




export const LoadingComp = ({message } : {message ?: string}) => {
    return (
        <div className="flex items-center justify-center h-full w-full">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            {!!message && <span className="text-primary font-medium text-lg ml-4" >{message}</span>}
        </div>
    )
}

export const FIBBaseTemplate = `
                    <div style="display: inline;" >
                        <select style="display: inline; " id="custom-select" class="border px-4 bg-white font-bold " >
                            <option value={'blank'} ></option>
                            {{#each Choices}}
                                <option value={{Id}} >{{Text}}</option>
                            {{/each}}
                        </select>
                    </div> `


export const FIBBaseTemplateAlt = `
                    <div style="display: inline;" >
                        <select style="display: inline; " id="custom-select" class="border px-4 bg-white font-bold " >
                            <option value={'blank'} ></option>
                            {{#each choices}}
                                <option value={{id}} >{{text}}</option>
                            {{/each}}
                        </select>
                    </div> `






export const DpBadge = ({text ,className, ...divProps} : {text : string}& HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn("bg-primary text-white font-medium px-2 rounded-lg ",className)} {...divProps} >
            {text}
        </div>
    )
}



export const EmptyComponent = ({
    className,
    text = "No Data Found",
    children
}: IBaseEmptyComponent) => {
    return (
        <div className={cn("flex flex-col items-center justify-center h-full w-full p-8 min-h-[50vh]  ", className)}>
            {/* <div className="animate-spin rounded-full h-12 w-12 border -t-2 border-b-2 border-green-400 m-8 " /> */}
            {children ?
                children
                :
                <div className="gap-4 flex flex-col items-center ">
                    <GiEmptyWoodBucket className="text-gray-400 text-9xl " />
                    <Label variant="subtitle" >{text}</Label>
                </div>
            }
        </div>
    )
}

export const ShimmerPlaceholder = ({show, children, className, altChild} : {show : boolean, altChild ?: ReactNode} & HTMLAttributes<HTMLDivElement>) => {
    if(!show) return children
    return (
        <div className={cn("w-full abg-gradient-to-r bg-gradient-to-r from-gray-200 to-secondary animate-pulse rounded-lg ", className)} >
            {altChild}
        </div>
    )
}


export const LoginWithGoogle = ({onClick} : {onClick : () => void}) => {
    return (
        <Button onClick={onClick} variant="outline" className="py-4 gap-x-2" >
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" className="w-6 h-6" />
            Continue with Google
        </Button>
    )
}


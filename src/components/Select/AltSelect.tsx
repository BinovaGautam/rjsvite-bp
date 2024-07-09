import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface ISelectDemo {
    options: string[];
    setSelectedValue?: (value: string) => void;
}
export default function SelectDemo({ options, setSelectedValue = () => { } }: ISelectDemo) {
    return (
        <Select onValueChange={(value) => setSelectedValue(value)}>
            <SelectTrigger className=" rounded-full text-lg py-6 px-6">
                <SelectValue placeholder="Today's List" className="text-lg font-semibold text-[#565656]" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Today&apos;s List</SelectLabel>
                    {/* <SelectItem value="apple">Apple</SelectItem> */}
                    {
                        options.map((option) => {
                            return (
                                <SelectItem value={option}>{option}</SelectItem>
                            )
                        })
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

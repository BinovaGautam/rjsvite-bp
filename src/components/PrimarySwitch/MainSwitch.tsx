import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
interface IPrimarySwitch {
    id: string;
    label: string;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function PrimarySwitch({ id, label, setValue }: IPrimarySwitch) {
    return (
        <div className="flex items-center space-x-2">
            <Switch id={id} onCheckedChange={(value) => setValue(value)} />
            <Label htmlFor={id}>{label}</Label>
        </div>
    )
}

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils";
interface IPrimarySwitch extends React.HTMLAttributes <HTMLInputElement>{
    id : string;
    label:string;
    setValue : React.Dispatch<React.SetStateAction<boolean>>;
    className ?: string;
    checked ?: boolean;
}  


export default function PrimarySwitch({id, label, setValue,className,checked,onChange, ...rest}  : IPrimarySwitch) {
  return (
    <div className={cn("flex md:flex-col items-center space-x-2 my-2 ",className)}>
      <Label htmlFor={id}>{label}</Label>
      <Switch id={id} checked={checked}   onCheckedChange={(value)=>setValue(value)}/>
    </div>
  )
}

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/Radiogroup";
import { cn } from "@/lib/utils";
import { ReactNode, useRef, useState } from "react";

interface AnswerStates {
  selectedAnswer: string;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
}

interface IPrimaryRadio {
  answerStates : AnswerStates
  options: string[];
  renderComp ?: (option : any) => ReactNode;
  onSelect ?: (index : number) => void;
}

export default function PrimaryRadio({answerStates, options, renderComp , onSelect}: IPrimaryRadio) {
  const [selectedAnswer, setSelectedAnswer] = useState<string|number | null>(null)
  // const {selectedAnswer, setSelectedAnswer} = answerStates
  const radioRef = useRef<HTMLInputElement>(null);

  console.log({options});
  const handleSelect = (e : any) => {
     setSelectedAnswer(e.target.value)
     onSelect && onSelect(e.target.value)
  }
  
  return (
    <RadioGroup ref={radioRef}  onValueChange={(value)=>setSelectedAnswer(value)} 
    className="mt-3 ">
      {
      options?.map((option: string, index: number) => {
        const isSelected = selectedAnswer === index.toString();
        return (
          <div key={index} onClick={handleSelect}
          className={cn("flex items-center space-x-2 hover:bg-alpha  cursor-pointer border-b  ", isSelected && "bg-teal-300" )}>
             <RadioGroupItem 
             checked={isSelected} value={index.toString()} id={option} />

              <div className="  ">
                {
                  !!renderComp  ? 
                  renderComp(option)
                  :
                  <Label htmlFor={option} 
                  className={`text-sm font-normal 
                  ${selectedAnswer === option? "" : ""}`}>
                    {option}
                  </Label>
                }
              </div>
           </div>
        )
      })}
    </RadioGroup>
  )
}

"use client";
import { ReactNode } from "react"

interface IUiWrapper {
  children: ReactNode;
  className?: string;
}

const UiWrapper = ({children, className}:IUiWrapper) => {
  return (
    <div className={`bg-white  rounded-md p-4 ${className}`}>
        {children}
    </div>
  )
}

export default UiWrapper
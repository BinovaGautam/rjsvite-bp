"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",{
    variants : {
      
      variant : {
        default : "text-black text-base",
        title : "text-dark font-bold text-2xl",
        subtitle : "text-dark font-semibold text-lg",
        body : "text-dark text-base",
        caption : "text-dark text-sm",
        overline : "text-dark text-xs",
        italic : "text-dark text-italic",
      },
      size : {
        xxs : "text-[0.625rem]",
        xs : "text-xs",
        sm : "text-sm",
        base : "text-base",
        md : "text-md",
        lg : "text-lg",
        xl : "text-xl",
        "2xl" : "text-2xl",
      },
      color : {
        "info" : ""
      }
    },
    defaultVariants : {
      variant : "default"
    }
  }
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className,variant,size, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({variant,size}), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
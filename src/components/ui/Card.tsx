import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
    `inline-flex  max-w-fit whitespace-nowrap rounded-md text-sm 
    font-medium ring-offset-background transition-colors overflow-hidden
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
    focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
    {
        variants: {
            variant: {
                default: "bg-secondary text-secondary-foreground font-medium text-base ",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                icon : "bg-secondary rounded-full w-full h-full  "
            },
            size: {
                default: "px-4 py-2 min-w-full ",
                sm: "rounded-full px-3",
                lg: "rounded-md px-8",
                icon : "p-2 rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface DivProps
    extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
    asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, DivProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "div";
        return (
            <Comp
                className={cn(cardVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card, cardVariants };

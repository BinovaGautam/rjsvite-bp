// PrimaryProgress.js
import * as React from "react";
import { Progress } from "@/components/ui/progess"
import { cn } from "@/lib/utils";

interface IPrimaryProgress {
  value: number;
  className?: string;
}

export default function PrimaryProgress({ value, className }: IPrimaryProgress) {
  return <Progress value={value} className={cn("w-full border", className)} />;
}

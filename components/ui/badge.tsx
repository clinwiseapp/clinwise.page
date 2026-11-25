import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("inline-flex items-center whitespace-nowrap rounded-full bg-brand px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white", className)}
      {...props}
    />
  );
}

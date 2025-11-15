import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-black/5 px-2.5 py-0.5 text-xs font-medium text-black dark:border-white/15 dark:bg-white/10 dark:text-white",
        className
      )}
      {...props}
    />
  );
}

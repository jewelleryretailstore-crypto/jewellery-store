import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full bg-transparent border border-gray-300 rounded-[5px] px-4 py-3 text-sm transition-colors duration-500",
          "placeholder:text-gray-400 font-sans font-light text-[#111111] resize-none",
          "focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

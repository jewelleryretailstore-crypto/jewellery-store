import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full bg-transparent border border-gray-300 rounded-none px-4 py-3 text-sm transition-colors duration-500",
          "placeholder:text-gray-400 font-sans font-light text-[#171716] resize-none",
          "focus:outline-none focus:border-[#B89A5A] focus:ring-1 focus:ring-[#B89A5A]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

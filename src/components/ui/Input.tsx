import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full bg-transparent border border-gray-300 rounded-none px-4 py-3 text-sm transition-colors duration-500",
          "placeholder:text-gray-400 font-sans font-light text-[#171716]",
          "focus:outline-none focus:border-[#B89A5A] focus:ring-1 focus:ring-[#B89A5A]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

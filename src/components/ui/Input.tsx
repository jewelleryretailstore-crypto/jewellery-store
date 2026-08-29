import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full bg-transparent border border-gray-300 rounded-[5px] px-4 py-3 text-sm transition-colors duration-500",
          "placeholder:text-gray-400 font-sans font-light text-[#111111]",
          "focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

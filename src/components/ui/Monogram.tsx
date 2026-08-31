import { cn } from "@/lib/utils";

interface MonogramProps {
  className?: string;
}

export function Monogram({ className }: MonogramProps) {
  return (
    <div className={cn("relative flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-[#B89A5A] font-serif text-lg leading-none", className)}>
      <span className="relative z-10 translate-x-[1px] translate-y-[1px]">L</span>
      <div className="absolute top-[4px] right-[6px] w-[3px] h-[3px] rotate-45 bg-[#B89A5A]" />
    </div>
  );
}

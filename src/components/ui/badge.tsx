import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "purple" | "gold" | "teal" | "dark" | "white";
  className?: string;
}

const variantStyles: Record<string, string> = {
  purple: "bg-[#EDE9FE] text-[#7C3AED] border border-[#7C3AED]/20",
  gold:   "bg-[#FBF7EE] text-[#A68B3E] border border-[#C8A951]/25",
  teal:   "bg-[#EDE9FE] text-[#6D28D9] border border-[#6D28D9]/20",
  dark:   "bg-[#2D1B69]/90 text-white border border-white/15",
  white:  "bg-white/90 text-[#2D1B69] border border-[#2D1B69]/15",
};

export function Badge({ children, variant = "purple", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider font-display whitespace-nowrap",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

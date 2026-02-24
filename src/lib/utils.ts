import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility for merging Tailwind CSS class names without conflicts.
 * Required by shadcn/ui components and the tubelight-navbar component.
 *
 * Usage: cn("base-class", condition && "conditional-class", "another-class")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

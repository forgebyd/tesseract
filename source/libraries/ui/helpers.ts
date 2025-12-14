import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

/**
 * Convenience function to merge multiple CSS class values into a single string.
 * Uses `clsx` to merge the classes and `twMerge` to merge the resulting string
 * with any tailwind utility classes.
 *
 * @param classes - Multiple CSS class values to merge
 * @returns A single string containing the merged CSS classes
 */
function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(classes));
}

export { cn };

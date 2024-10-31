import { twMerge } from 'tailwind-merge'

import type { ClassValue } from '@/types/class-value'
import { clsx } from '@/utils/string'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

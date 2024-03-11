import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'ts-clsx'
import { clsx } from 'ts-clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}

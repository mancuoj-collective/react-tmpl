import type { ClassValue } from 'ts-clsx'
import { clsx } from 'ts-clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

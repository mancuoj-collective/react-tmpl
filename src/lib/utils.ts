import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { themes } from './registry/theme'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getActiveColor(theme: string, isDark = false) {
  return `hsl(${themes.find(t => t.name === theme)?.activeColor[isDark ? 'dark' : 'light']})`
}

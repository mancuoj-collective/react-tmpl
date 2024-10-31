import type { Theme } from '@/lib/registry/theme'
import { themes } from '@/lib/registry/theme'

export function getActiveColor(theme: Theme['name'], isDark = false) {
  return `hsl(${themes.find(t => t.name === theme)?.activeColor[isDark ? 'dark' : 'light']})`
}

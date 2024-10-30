import { useConfig } from '@/hooks/use-config'
import { useDark } from '@/hooks/use-dark'
import { builtinRadiuses, builtinThemes, themes } from '@/lib/registry/theme'
import { cn } from '@/lib/utils'

import { Button } from '../button'

export function ThemeCustomizer() {
  const [config, setConfig] = useConfig()
  const { isDark, toggleDark } = useDark()

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  function getActiveColor(theme: string) {
    return `hsl(${themes.find(t => t.name === theme)?.activeColor[isDark ? 'dark' : 'light']})`
  }

  return (
    <div className="grid gap-5 p-2 font-inter">
      <div className="space-y-1">
        <h1 className="text-lg font-semibold">Customize</h1>
        <p className="text-xs text-muted-foreground">
          Pick a style and color for the template.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-sm font-medium">Color</h2>
        <div className="grid grid-cols-3 gap-2.5">
          {builtinThemes.map((theme) => {
            const isActive = config.theme === theme
            return (
              <Button
                variant="outline"
                key={theme}
                size="sm"
                onClick={() => setConfig({ ...config, theme })}
                className={cn('justify-start', isActive && 'border-2 border-primary')}
              >
                <span
                  className="flex size-4 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: getActiveColor(theme) }}
                >
                  {isActive && <span className="i-tabler-check size-3.5 text-white" />}
                </span>
                {capitalize(theme)}
              </Button>
            )
          })}
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-sm font-medium">Radius</h2>
        <div className="grid grid-cols-5 gap-2.5">
          {builtinRadiuses.map((radius) => {
            const isActive = config.radius === radius
            return (
              <Button
                key={radius}
                variant="outline"
                size="sm"
                onClick={() => setConfig({ ...config, radius })}
                className={cn(isActive && 'border-2 border-primary')}
              >
                {radius}
              </Button>
            )
          })}
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-sm font-medium">Mode</h2>
        <div className="grid grid-cols-3 gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              isDark && toggleDark()
            }}
            className={cn('justify-start', !isDark && 'border-2 border-primary')}
          >
            <span className="i-tabler-sun flex size-5 shrink-0 items-center justify-center" />
            Light
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              !isDark && toggleDark()
            }}
            className={cn('justify-start', isDark && 'border-2 border-primary')}
          >
            <span className="i-tabler-moon flex size-4 shrink-0 items-center justify-center" />
            Dark
          </Button>
        </div>
      </div>
    </div>
  )
}

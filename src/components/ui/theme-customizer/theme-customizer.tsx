import { useConfig } from '@/hooks/use-config'
import { useDark } from '@/hooks/use-dark'
import { builtinRadiuses, builtinThemes } from '@/lib/registry/theme'
import { cn } from '@/utils/cn'
import { getActiveColor } from '@/utils/get-active-color'
import { capitalize } from '@/utils/string'

import { Button } from '../button'
import { Reset } from './reset'

export function ThemeCustomizer() {
  const [config, setConfig] = useConfig()
  const { isDark, toggleDark } = useDark()

  return (
    <div className="grid gap-5 font-inter md:p-2">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="font-semibold">Customize</h1>
          <p className="text-xs text-muted-foreground">
            Pick a style and color for the template.
          </p>
        </div>
        <Reset />
      </div>
      <div className="space-y-2">
        <h2 className="text-sm font-medium">Color</h2>
        <div className="grid grid-cols-3 gap-1 md:gap-2.5">
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
                  style={{ backgroundColor: getActiveColor(theme, isDark) }}
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
        <div className="grid grid-cols-5 gap-1 md:gap-2.5">
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
        <div className="grid grid-cols-3 gap-1 md:gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => { isDark && toggleDark() }}
            className={cn('justify-start', !isDark && 'border-2 border-primary')}
          >
            <span className="i-tabler-sun flex size-5 shrink-0 items-center justify-center" />
            Light
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => { !isDark && toggleDark() }}
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

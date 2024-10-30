import { useConfig } from '@/hooks/use-config'
import type { Theme } from '@/lib/registry/theme'
import { cn } from '@/lib/utils'

interface RootLayoutProps extends React.ComponentProps<'div'> {
  defaultTheme?: Theme['name']
}

export function RootLayout({ defaultTheme, className, children }: RootLayoutProps) {
  const [config] = useConfig()

  return (
    <div
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={cn(`theme-${defaultTheme ?? config.theme}`, 'min-h-dvh font-sans antialiased', className)}
      style={{ '--radius': `${config.radius}rem` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

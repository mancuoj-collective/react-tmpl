import { useConfig } from '@/hooks/use-config'
import type { Theme } from '@/lib/registry/theme'
import { cn } from '@/utils/cn'

interface RootLayoutProps extends React.ComponentProps<'div'> {
  defaultTheme?: Theme['name']
}

export function RootLayout({ defaultTheme, className, children }: RootLayoutProps) {
  const [config] = useConfig()

  return (
    <div
      className={cn(`theme-${defaultTheme ?? config.theme}`, 'min-h-svh font-inter antialiased', className)}
      style={{ '--radius': `${config.radius}rem` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

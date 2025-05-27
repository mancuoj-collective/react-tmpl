import { ThemeToggle } from '@/components/theme-toggle'
import { TwScreenIndicator } from '@/components/tw-screen-indicator'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'

export function App() {
  return (
    <div className="relative font-sans antialiased">
      <div className="flex flex-col items-center justify-center min-h-svh">
        <div className="flex gap-2">
          <ThemeToggle />
          <Button variant="outline" size="icon">
            <a className="iconify carbon--logo-github size-4.5" href="https://github.com/mancuoj-collective/react-tmpl" />
          </Button>
        </div>
        <Toaster richColors />
        <TwScreenIndicator />
      </div>
    </div>
  )
}

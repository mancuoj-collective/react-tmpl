import { ThemeToggle } from '@/components/theme-toggle'
import { TwScreenIndicator } from '@/components/tw-screen-indicator'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'

export function App() {
  return (
    <div className="relative font-sans antialiased">
      <div className="flex flex-col items-center justify-center min-h-svh">
        <div className="flex gap-2.5 items-center">
          <Button variant="outline" size="icon">
            <a href="https://github.com/mancuoj-collective/react-tmpl">
              GitHub
            </a>
          </Button>
          <ThemeToggle />
        </div>
        <Toaster richColors />
        <TwScreenIndicator />
      </div>
    </div>
  )
}

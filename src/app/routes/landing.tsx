import { ThemeToggle } from '@/components/layout/theme-toggle'
import { Button } from '@/components/ui/button'
import { Cobe } from '@/components/ui/cobe'

export function LandingRoute() {
  return (
    <div className="font-inter antialiased">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Cobe
          className="-z-10"
          config={{ mapBrightness: 2 }}
        />
        <div className="flex items-center gap-2">
          <Button>
            Get Started
          </Button>
          <Button variant="outline" asChild className="gap-1">
            <a href="https://github.com/mancuoj-collective/react-tmpl" target="_blank" rel="noreferrer">
              <div className="i-tabler-brand-github text-lg" />
              GitHub
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

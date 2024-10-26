import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export function Landing() {
  return (
    <div className="font-inter antialiased">
      <div className="flex min-h-screen items-center justify-center gap-2">
        <Button variant="outline" asChild>
          <a href="https://github.com/mancuoj-collective/react-tmpl" target="_blank" rel="noreferrer">
            <div className="i-tabler-brand-github text-lg" />
            GitHub
          </a>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  )
}

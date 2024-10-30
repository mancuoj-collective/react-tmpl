import { Link } from 'react-router-dom'

import { Button } from '../ui/button'
import { DarkModeToggle } from '../ui/dark-mode-toggle'
import { ThemePopover } from '../ui/theme-customizer'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between gap-2 px-4 md:px-12 lg:px-20">
        <Link to="/" className="flex items-center gap-2 font-lora text-lg font-semibold">
          <span className="i-tabler-brand-react text-xl" />
          React Tmpl
        </Link>
        <div className="flex">
          <ThemePopover />
          <DarkModeToggle />
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/mancuoj-collective/react-tmpl" target="_blank" rel="noreferrer">
              <div className="i-tabler-brand-github text-lg" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

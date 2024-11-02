import { Link } from 'react-router-dom'

import { ThemePopover } from '@/components/ui/theme-customizer'
import { DarkModeToggle } from '@/components/ui/theme-customizer/dark-mode-toggle'
import { paths } from '@/config/paths'

import { GithubLink } from '../ui/github-link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between gap-2 px-4 md:px-12 lg:px-20">
        <Link to={paths.landing.getHref()} className="flex items-center gap-2 font-lora text-lg font-semibold">
          <span className="i-tabler-brand-react text-xl" />
          React Tmpl
        </Link>
        <div className="flex">
          <ThemePopover />
          <DarkModeToggle />
          <GithubLink />
        </div>
      </div>
    </header>
  )
}

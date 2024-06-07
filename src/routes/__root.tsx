import type { QueryClient } from '@tanstack/react-query'
import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { ThemeToggle } from '~/components/theme-toggle'
import { Toaster } from '~/components/ui/sonner'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: Root,
})

function Root() {
  return (
    <div className="flex h-dvh flex-col font-sans antialiased">
      <div className="mx-auto p-20">
        <nav className="mb-10 flex items-center gap-3">
          <Link to="/" className="font-bold text-foreground/60 [&.active]:text-foreground">
            Home
          </Link>
          <Link to="/about" className="font-bold text-foreground/60 [&.active]:text-foreground">
            About
          </Link>
          <ThemeToggle />
        </nav>
        <Outlet />
        <Toaster />
      </div>
    </div>
  )
}

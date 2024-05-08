import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { ThemeToggle } from '~/components/theme-toggle'
import { Toaster } from '~/components/ui/sonner'

export const Route = createRootRoute({
  component: Root,
})

function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b bg-background/75 backdrop-blur-lg transition-all">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="i-lucide-layout-template size-6" />
        <nav className="flex gap-3">
          <Link to="/" className="text-foreground/75 [&.active]:text-foreground">
            Home
          </Link>
          <Link to="/about" className="text-foreground/75 [&.active]:text-foreground">
            About
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

function Main() {
  return (
    <main className="container flex-1">
      <Outlet />
    </main>
  )
}

function Root() {
  return (
    <div className="relative flex min-h-dvh flex-col font-sans antialiased">
      <Navbar />
      <Main />
      <Toaster />
    </div>
  )
}

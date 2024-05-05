import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeToggle } from '~/components/theme-toggle'
import { Toaster } from '~/components/ui/sonner'

export const Route = createRootRoute({
  component: Root,
})

function Navbar() {
  return (
    <header>
      <div className="flex items-center">
        <nav>
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/about" className="[&.active]:font-bold">
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
    <main>
      <Outlet />
    </main>
  )
}

function Root() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Main />
      <Toaster />
      <TanStackRouterDevtools />
    </div>
  )
}

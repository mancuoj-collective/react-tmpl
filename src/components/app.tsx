import { ThemeToggle } from '~/components/theme-toggle'
import { Toaster } from '~/components/ui/sonner'

export default function App() {
  return (
    <div className="flex h-dvh items-center justify-center gap-3 font-serif">
      <ThemeToggle />
      <Toaster />
    </div>
  )
}

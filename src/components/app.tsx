import { ThemeToggle } from './theme-toggle'
import { ThemeProvider } from '~/components/theme-provider'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="react-tmpl">
      <div className="flex h-dvh flex-col items-center justify-center font-serif">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}

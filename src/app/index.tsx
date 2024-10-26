import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div className="font-inter antialiased">
      <div className="flex min-h-screen items-center justify-center">
        <Button variant="outline" asChild>
          <a href="https://github.com/mancuoj-collective/react-tmpl" target="_blank" rel="noreferrer">
            <div className="i-tabler-brand-github text-lg" />
            GitHub
          </a>
        </Button>
      </div>
    </div>
  )
}

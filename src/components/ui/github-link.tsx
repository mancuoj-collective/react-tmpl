import { Button } from './button'

export function GithubLink() {
  return (
    <Button variant="ghost" size="icon" asChild>
      <a href="https://github.com/mancuoj" target="_blank" rel="noreferrer">
        <div className="i-tabler-brand-github text-lg" />
      </a>
    </Button>
  )
}

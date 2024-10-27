import { Button } from '@/components/ui/button'
import { useDark } from '@/hooks/use-dark'
import { cn } from '@/lib/utils'

export function DarkModeToggle({ className = '' }: { className?: string }) {
  const { toggleDark } = useDark()

  return (
    <Button
      variant="ghost"
      size="icon"
      title="Toggle theme"
      onClick={toggleDark}
      className={cn('flex text-lg', className)}
    >
      <div
        className="i-tabler-sun rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0"
      />
      <div
        className="i-tabler-moon absolute rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100"
      />
    </Button>
  )
}

import { Button } from '../button'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { ThemeCustomizer } from './theme-customizer'

export function ThemePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <div className="i-tabler-palette text-lg" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 md:w-96">
        <ThemeCustomizer />
      </PopoverContent>
    </Popover>
  )
}

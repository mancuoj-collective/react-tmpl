import { defaultConfig, useConfig } from '@/hooks/use-config'

import { Button } from '../button'

export function Reset() {
  const [_, setConfig] = useConfig()

  return (
    <Button variant="ghost" size="icon" onClick={() => setConfig(defaultConfig)}>
      <div className="i-tabler-refresh text-lg" />
    </Button>
  )
}

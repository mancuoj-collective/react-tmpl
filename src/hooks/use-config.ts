import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import type { Theme } from '@/lib/registry/theme'

type Config = {
  theme: Theme['name']
  radius: number
}

const configAtom = atomWithStorage<Config>('tmpl:config', {
  theme: 'zinc',
  radius: 0.5,
})

export function useConfig() {
  return useAtom(configAtom)
}

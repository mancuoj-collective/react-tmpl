import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import type { Theme } from '@/lib/registry/theme'

type Config = {
  theme: Theme['name']
  radius: number
}

const defaultConfig: Config = {
  theme: 'zinc',
  radius: 0.5,
}

const configAtom = atomWithStorage<Config>('tmpl:config', defaultConfig)

function useConfig() {
  return useAtom(configAtom)
}

export { defaultConfig, useConfig }

import type { PropsWithChildren } from 'react'
import { Suspense } from 'react'

import { Loader } from '@/components/layout/loader'

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  )
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { PropsWithChildren } from 'react'
import { Suspense, useState } from 'react'

import { Loader } from '@/components/layout/loader'
import { queryConfig } from '@/lib/react-query'

export function AppProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: queryConfig,
  }))

  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV && <ReactQueryDevtools />}
        {children}
      </QueryClientProvider>
    </Suspense>
  )
}

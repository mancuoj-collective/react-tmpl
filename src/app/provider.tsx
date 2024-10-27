import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { PropsWithChildren } from 'react'
import { Suspense, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { Loader } from '@/components/ui/loader'
import { queryConfig } from '@/lib/react-query'

export function AppProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: queryConfig,
  }))

  return (
    <Suspense fallback={<Loader />}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {import.meta.env.DEV && <ReactQueryDevtools />}
          <div className="font-inter antialiased">
            {children}
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </Suspense>
  )
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NuqsAdapter } from 'nuqs/adapters/react-router'
import type { PropsWithChildren } from 'react'
import { Suspense, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { RootLayout } from '@/components/layout'
import { ScreenLoader } from '@/components/ui/screen-loader'
import { queryConfig } from '@/lib/react-query'

export function AppProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: queryConfig,
  }))

  return (
    <Suspense fallback={<ScreenLoader />}>
      <HelmetProvider>
        <NuqsAdapter>
          <QueryClientProvider client={queryClient}>
            {import.meta.env.DEV && <ReactQueryDevtools />}
            <RootLayout>
              {children}
            </RootLayout>
          </QueryClientProvider>
        </NuqsAdapter>
      </HelmetProvider>
    </Suspense>
  )
}

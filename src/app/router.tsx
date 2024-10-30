import type { QueryClient } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function createAppRouter(_queryClient: QueryClient) {
  return createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { LandingRoute } = await import('./routes/landing')
        return { Component: LandingRoute }
      },
    },
    {
      path: '/auth/sign-in',
      lazy: async () => {
        const { SignInRoute } = await import('./routes/auth/sign-in')
        return { Component: SignInRoute }
      },
    },
    {
      path: '/auth/sign-up',
      lazy: async () => {
        const { SignUpRoute } = await import('./routes/auth/sign-up')
        return { Component: SignUpRoute }
      },
    },
  ])
}

export function AppRouter() {
  const queryClient = useQueryClient()
  const router = useMemo(() => createAppRouter(queryClient), [queryClient])

  return <RouterProvider router={router} />
}

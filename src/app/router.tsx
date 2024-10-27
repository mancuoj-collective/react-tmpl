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
      path: '/auth/login',
      lazy: async () => {
        const { LoginRoute } = await import('./auth/login')
        return { Component: LoginRoute }
      },
    },
    {
      path: '/auth/register',
      lazy: async () => {
        const { RegisterRoute } = await import('./auth/register')
        return { Component: RegisterRoute }
      },
    },
  ])
}

export function AppRouter() {
  const queryClient = useQueryClient()
  const router = useMemo(() => createAppRouter(queryClient), [queryClient])

  return <RouterProvider router={router} />
}

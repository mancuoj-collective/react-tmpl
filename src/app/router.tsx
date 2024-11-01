import type { QueryClient } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { paths } from '@/config/paths'

function createAppRouter(_queryClient: QueryClient) {
  return createBrowserRouter([
    {
      path: paths.landing,
      lazy: async () => {
        const { LandingRoute } = await import('./routes/landing')
        return { Component: LandingRoute }
      },
    },
    {
      path: paths.auth.signIn,
      lazy: async () => {
        const { SignInRoute } = await import('./routes/auth/sign-in')
        return { Component: SignInRoute }
      },
    },
    {
      path: paths.auth.signUp,
      lazy: async () => {
        const { SignUpRoute } = await import('./routes/auth/sign-up')
        return { Component: SignUpRoute }
      },
    },
    {
      path: paths.auth.password,
      lazy: async () => {
        const { PasswordRoute } = await import('./routes/auth/password')
        return { Component: PasswordRoute }
      },
    },
    {
      path: paths.dashboard.overview,
      lazy: async () => {
        const { OverviewRoute } = await import('./routes/dashboard/overview')
        return { Component: OverviewRoute }
      },
    },
    {
      path: paths.auth.resetPassword,
      lazy: async () => {
        const { ResetPasswordRoute } = await import('./routes/auth/reset-password')
        return { Component: ResetPasswordRoute }
      },
    },
    {
      path: paths.auth.verifyEmail,
      lazy: async () => {
        const { VerifyEmailRoute } = await import('./routes/auth/verify-email')
        return { Component: VerifyEmailRoute }
      },
    },
  ])
}

export function AppRouter() {
  const queryClient = useQueryClient()
  const router = useMemo(() => createAppRouter(queryClient), [queryClient])

  return <RouterProvider router={router} />
}

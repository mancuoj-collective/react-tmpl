import type { QueryClient } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { paths } from '@/config/paths'

function createAppRouter(_queryClient: QueryClient) {
  return createBrowserRouter([
    {
      path: paths.landing.path,
      lazy: async () => {
        const { LandingRoute } = await import('./routes/landing')
        return { Component: LandingRoute }
      },
    },
    {
      path: paths.auth.root,
      children: [
        {
          path: paths.auth.signIn.path,
          lazy: async () => {
            const { SignInRoute } = await import('./routes/auth/sign-in')
            return { Component: SignInRoute }
          },
        },
        {
          path: paths.auth.signUp.path,
          lazy: async () => {
            const { SignUpRoute } = await import('./routes/auth/sign-up')
            return { Component: SignUpRoute }
          },
        },
        {
          path: paths.auth.password.path,
          lazy: async () => {
            const { PasswordRoute } = await import('./routes/auth/password')
            return { Component: PasswordRoute }
          },
        },
        {
          path: paths.auth.resetPassword.path,
          lazy: async () => {
            const { ResetPasswordRoute } = await import('./routes/auth/reset-password')
            return { Component: ResetPasswordRoute }
          },
        },
        {
          path: paths.auth.verifyEmail.path,
          lazy: async () => {
            const { VerifyEmailRoute } = await import('./routes/auth/verify-email')
            return { Component: VerifyEmailRoute }
          },
        },
      ],
    },
    {
      path: paths.dashboard.root,
      children: [
        {
          path: paths.dashboard.overview.path,
          lazy: async () => {
            const { OverviewRoute } = await import('./routes/dashboard/overview')
            return { Component: OverviewRoute }
          },
        },
      ],
    },
  ])
}

export function AppRouter() {
  const queryClient = useQueryClient()
  const router = useMemo(() => createAppRouter(queryClient), [queryClient])

  return <RouterProvider router={router} />
}

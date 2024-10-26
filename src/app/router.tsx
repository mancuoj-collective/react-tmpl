import { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function createAppRouter() {
  return createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { LandingRoute } = await import('./routes/landing')
        return { Component: LandingRoute }
      },
    },
  ])
}

export function AppRouter() {
  const router = useMemo(() => createAppRouter(), [])
  return <RouterProvider router={router} />
}

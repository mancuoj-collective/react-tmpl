import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'next-themes'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { Toaster } from 'sonner'
import { TwScreenIndicator } from '@/components/tw-screen-indicator'
import { HomePage } from '@/routes/home'

const queryClient = new QueryClient()

export function Provider() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        storageKey="react-tmpl-lite-theme"
        attribute="class"
        disableTransitionOnChange
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
        <Toaster richColors position="top-right" />
        <TwScreenIndicator />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '@/provider'
import '@/styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider />
  </StrictMode>,
)

import './styles/globals.css'
import './styles/themes.css'
import '@fontsource-variable/inter'
import '@fontsource-variable/lora'
import '@fontsource-variable/fira-code'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/app'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

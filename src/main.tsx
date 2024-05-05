import '@fontsource-variable/inter'
import '@fontsource-variable/source-serif-4'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/components/app'
import '~/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

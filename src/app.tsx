import { useState } from 'react'
import { ThemeProvider } from '@/components/theme-provider'

export default function App() {
  const [text, setText] = useState('React')

  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col justify-center items-center gap-5 font-serif">
        <h1 className="font-bold text-3xl">
          Hello
          {' '}
          {text}
        </h1>
        <input
          className="max-w-xs w-full"
          maxLength={12}
          value={text}
          onChange={(e) => { setText(e.target.value) }}
        />
      </div>
    </ThemeProvider>
  )
}

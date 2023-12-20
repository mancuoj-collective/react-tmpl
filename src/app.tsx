import type { FC } from 'react'
import { useState } from 'react'
import { ThemeProvider } from '@/components/theme-provider'

const App: FC = () => {
  const [text, setText] = useState('React')

  return (
    <ThemeProvider>
      <div className="h-dvh flex flex-col justify-center items-center gap-5 font-serif">
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

export default App

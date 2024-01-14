import { useState } from 'react'

export default function App() {
  const [text, setText] = useState('We will rock you')

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-5 overflow-hidden font-serif">
      <h1 className="flex items-center gap-5 text-3xl font-bold">
        {text}
        <span className="i-lucide-hand-metal"></span>
      </h1>
      <input
        className="w-full max-w-sm border border-foreground px-3 py-2"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  )
}

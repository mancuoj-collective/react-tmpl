import type { FC } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Root: FC = () => {
  const [text, setText] = useState('Hello React')

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-5 overflow-hidden font-serif">
      <h1 className="flex items-center gap-5 text-3xl font-bold">
        {text}
        <span className="i-lucide-hand-metal"></span>
      </h1>
      <input
        className="w-full max-w-xs border border-slate-800 px-3 py-2"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Outlet />
    </div>
  )
}

export default Root

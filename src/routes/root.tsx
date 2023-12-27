import type { FC } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Root: FC = () => {
  const [text, setText] = useState('Hello React')

  return (
    <div className="h-dvh flex flex-col justify-center items-center gap-5 font-serif overflow-hidden">
      <h1 className="flex items-center gap-5 font-bold text-3xl">
        {text}
        <span className="i-lucide-hand-metal"></span>
      </h1>
      <input
        className="max-w-xs w-full border border-slate-800 py-2 px-3"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Outlet />
    </div>
  )
}

export default Root

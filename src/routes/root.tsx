import type { FC } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Root: FC = () => {
  const [text, setText] = useState('Hello React')

  return (
    <div className="h-dvh flex flex-col justify-center items-center gap-5 font-serif overflow-hidden">
      <h1 className="font-bold text-3xl">{text}</h1>
      <input className="max-w-xs w-full" value={text} onChange={e => setText(e.target.value)} />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Root

import type { FC } from 'react'
import { useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'

const Root: FC = () => {
  const [text, setText] = useState('We will rock you')
  const navigation = useNavigation()

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-5 overflow-hidden font-serif">
      <h1 className="flex items-center gap-5 text-3xl font-bold">
        {text}
        <span className="i-lucide-hand-metal"></span>
      </h1>
      <input
        className="w-full max-w-sm border border-slate-800 px-3 py-2"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </div>
    </div>
  )
}

export default Root

import { useState } from 'react'

export default function App() {
  const [text, setText] = useState('React')

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 font-serif select-none">
      <h1 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-rose-900 to-teal-900 dark:from-rose-100 dark:to-teal-100">
        Hello
        {' '}
        {text}
      </h1>
      <input type="text" className="input input-bordered max-w-xs w-full" value={text} onChange={(e) => { setText(e.target.value) }} />
    </div>
  )
}

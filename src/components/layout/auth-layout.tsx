import type { PropsWithChildren } from 'react'

import { Head } from '../seo'
import { Header } from './header'

export function AuthLayout({ children, title }: PropsWithChildren<{ title: string }>) {
  return (
    <div>
      <Head title={title} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1 flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

import { Head } from '../seo'

interface AuthLayoutProps extends React.ComponentProps<'div'> {
  title: string
}

export function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <>
      <Head title={title} />
      <div className="grid min-h-dvh grid-cols-[1fr_min(440px,calc(100%_-_64px))_1fr] gap-x-8">
        <div className="col-[2] flex flex-col items-center pt-20 md:pt-36">
          <Link to="/" className="i-tabler-brand-react text-5xl" />
          <h1 className="mb-6 mt-4 text-2xl font-semibold">{title}</h1>
          {children}
        </div>
      </div>
    </>
  )
}

import { Head } from '../seo'

interface AuthLayoutProps extends React.ComponentProps<'div'> {
  title: string
}

export function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div>
      <Head title={title} />
      <div className="flex min-h-dvh flex-col">
        <div className="flex flex-1 flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}

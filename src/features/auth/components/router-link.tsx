import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function RouterLink({ to, children, ...props }: LinkProps) {
  return (
    <Link to={to} className="text-primary hover:underline" {...props}>
      {children}
    </Link>
  )
}

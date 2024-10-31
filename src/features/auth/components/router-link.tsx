import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { cn } from '@/utils/cn'

export function RouterLink({ to, className, children, ...props }: LinkProps) {
  return (
    <Link to={to} className={cn('text-primary hover:underline', className)} {...props}>
      {children}
    </Link>
  )
}

export function RouterLinkMuted({ to, className, children, ...props }: LinkProps) {
  return <RouterLink to={to} className={cn('text-sm text-muted-foreground', className)} {...props}>{children}</RouterLink>
}

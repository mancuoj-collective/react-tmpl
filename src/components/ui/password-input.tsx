import { forwardRef, useState } from 'react'

import type { InputProps } from '@/components/ui/input'
import { Input } from '@/components/ui/input'
import { cn } from '@/utils/cn'

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative">
      <Input type={showPassword ? 'text' : 'password'} {...props} ref={ref} />
      <div className="absolute right-3 top-0 flex h-full items-center" onClick={() => setShowPassword(prev => !prev)}>
        <span className={cn('size-4', showPassword ? 'i-tabler-eye' : 'i-tabler-eye-off')} />
        <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
      </div>
    </div>
  )
})
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }

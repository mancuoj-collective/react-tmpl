import { AuthLayout } from '@/components/layout'
import { PasswordForm } from '@/features/auth/components/password-form'

export function PasswordRoute() {
  return (
    <AuthLayout title="Sign in">
      <PasswordForm />
    </AuthLayout>
  )
}

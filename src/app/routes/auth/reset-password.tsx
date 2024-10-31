import { AuthLayout } from '@/components/layout'
import { ResetPasswordForm } from '@/features/auth/components/reset-password-form'

export function ResetPasswordRoute() {
  return (
    <AuthLayout title="Reset your password">
      <ResetPasswordForm />
    </AuthLayout>
  )
}

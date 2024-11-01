import { AuthLayout } from '@/components/layout'
import { VerifyEmailForm } from '@/features/auth/components/verify-email-form'

export function VerifyEmailRoute() {
  return (
    <AuthLayout title="Verify your email">
      <VerifyEmailForm />
    </AuthLayout>
  )
}

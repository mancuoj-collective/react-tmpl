import { AuthLayout } from '@/components/layout'
import { SignUpForm } from '@/features/auth/sign-up-form'

export function SignUpRoute() {
  return (
    <AuthLayout title="Sign up">
      <SignUpForm />
    </AuthLayout>
  )
}

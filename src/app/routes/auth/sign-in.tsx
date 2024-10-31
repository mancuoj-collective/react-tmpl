import { AuthLayout } from '@/components/layout'
import { SignInForm } from '@/features/auth/components/sign-in-form'

export function SignInRoute() {
  return (
    <AuthLayout title="Sign in">
      <SignInForm />
    </AuthLayout>
  )
}

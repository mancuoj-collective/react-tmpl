export const paths = {
  landing: '/',
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    password: '/auth/password',
    resetPassword: '/auth/reset-password',
    verifyEmail: '/auth/verify-email',
  },
  dashboard: {
    overview: '/dashboard/overview',
  },
} as const

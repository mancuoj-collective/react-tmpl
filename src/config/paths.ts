export const paths = {
  landing: {
    path: '/',
    getHref: () => '/',
  },
  auth: {
    root: 'auth',
    signIn: {
      path: 'sign-in',
      getHref: () => '/auth/sign-in',
    },
    signUp: {
      path: 'sign-up',
      getHref: () => '/auth/sign-up',
    },
    password: {
      path: 'password',
      getHref: () => '/auth/password',
    },
    resetPassword: {
      path: 'reset-password',
      getHref: () => '/auth/reset-password',
    },
    verifyEmail: {
      path: 'verify-email',
      getHref: () => '/auth/verify-email',
    },
  },
  dashboard: {
    root: 'dashboard',
    overview: {
      path: 'overview',
      getHref: () => '/dashboard/overview',
    },
  },
} as const

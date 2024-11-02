import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import { Error404 } from '@/features/error/404'

export function RouterErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <Error404 />
    }

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>
    }
  }

  return <div>Something went wrong</div>
}

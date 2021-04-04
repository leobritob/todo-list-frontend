import React, { useMemo } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { useAuthContext, useUserContext } from 'contexts'
import { UnauthorizedRoutes } from './unauthorized.routes'
import { AuthorizedRoutes } from './authorized.routes'

export const Router: React.FC = () => {
  const { user } = useUserContext()
  const { token } = useAuthContext()

  const isConnected = useMemo(() => user?.id && token && token?.length > 0, [user, token])

  return (
    <BrowserRouter>
      <Switch>{isConnected ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}</Switch>
    </BrowserRouter>
  )
}

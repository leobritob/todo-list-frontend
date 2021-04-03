import React, { useMemo } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { useUserContext } from 'contexts'
import { UnauthorizedRoutes } from './unauthorized-routes'
import { AuthorizedRoutes } from './authorized-routes'

export const Router: React.FC = () => {
  const { user } = useUserContext()

  const isConnected = useMemo(() => !!user, [user])

  return (
    <BrowserRouter>
      <Switch>{isConnected ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}</Switch>
    </BrowserRouter>
  )
}

import React, { useMemo } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { useUserContext } from 'contexts'
import { AdminRoutes } from './admin-routes'
import { CustomerRoutes } from './customer-routes'
import { UnauthorizedRoutes } from './unauthorized-routes'

export const Router: React.FC = () => {
  const { user } = useUserContext()

  const isConnected = useMemo(() => !!user, [user])

  const AuthorizedRoutes = () => {
    const userRole: any = 'admin' //request to api
    switch (userRole) {
      case 'admin':
        return <AdminRoutes />

      case 'customer':
        return <CustomerRoutes />

      default:
        return null
    }
  }

  return (
    <BrowserRouter>
      <Switch>{isConnected ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}</Switch>
    </BrowserRouter>
  )
}

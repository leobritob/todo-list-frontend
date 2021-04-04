import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { LoginPage, RegisterPage } from 'pages'
import { LoginLayout } from 'layouts'

export const UnauthorizedRoutes: React.FC = () => {
  return (
    <Fragment>
      <LoginLayout>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
      </LoginLayout>

      <Redirect path="*" to="/login" />
    </Fragment>
  )
}

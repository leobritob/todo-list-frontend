import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { LoginPage } from 'pages'
import { LoginLayout } from 'layouts'

export const UnauthorizedRoutes: React.FC = () => {
  return (
    <Fragment>
      <LoginLayout>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
      </LoginLayout>

      <Redirect path="*" to="/login" />
    </Fragment>
  )
}

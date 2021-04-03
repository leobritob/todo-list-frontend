import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { HomePage } from 'pages'

export const AuthorizedRoutes: React.FC = () => {
  return (
    <Fragment>
      <Route path="/home" exact>
        <HomePage />
      </Route>

      <Redirect path="/" to="/home" />
    </Fragment>
  )
}

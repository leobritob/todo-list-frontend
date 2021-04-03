import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { AdminHomePage } from 'pages/admin'

export const AdminRoutes: React.FC = () => {
  return (
    <Fragment>
      <Route path="/home" exact>
        <AdminHomePage />
      </Route>
      <Redirect path="/" to="/home" />
    </Fragment>
  )
}

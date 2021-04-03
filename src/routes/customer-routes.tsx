import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { CustomerHomePage } from 'pages/customer'

export const CustomerRoutes: React.FC = () => {
  return (
    <Fragment>
      <Route path="/home" exact>
        <CustomerHomePage />
      </Route>

      <Redirect path="*" to="/home" />
    </Fragment>
  )
}

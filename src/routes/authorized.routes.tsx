import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { ProjectsPage } from 'pages'
import { DashboardLayout } from 'layouts'

export const AuthorizedRoutes: React.FC = () => {
  return (
    <Fragment>
      <DashboardLayout>
        <Route path="/projects" exact>
          <ProjectsPage />
        </Route>
      </DashboardLayout>

      <Redirect path="/" to="/projects" />
    </Fragment>
  )
}

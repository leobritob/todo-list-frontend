import React, { Fragment } from 'react'

import { Sidebar, Column, Row } from 'components'

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Row width="100vw">
        <Sidebar />
        <Column
          width="calc(100vw - 300px)"
          height="100vh"
          alignItems="flex-start"
          justifyContent="flex-start"
          marginLeft={{ _: '300px' }}
          padding="20px"
        >
          {children}
        </Column>
      </Row>
    </Fragment>
  )
}

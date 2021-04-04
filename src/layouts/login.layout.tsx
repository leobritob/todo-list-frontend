import React from 'react'

import { Row, Column, Text } from 'components'

export const LoginLayout: React.FC = ({ children }) => {
  return (
    <Row width="100%" height="100vh">
      <Column width={{ _: '100%', sm: '500px' }} height="100vh" p="0 40px">
        <Column flex={1} width="100%">
          {children}
        </Column>
        <Column height="50px">
          <Text fontSize="smaller">TODO List - {new Date().getFullYear()}</Text>
        </Column>
      </Column>
      <Column
        flex={1}
        display={{ _: 'none', md: 'block' }}
        height="100vh"
        p="20px"
        backgroundImage="url('background.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="repeat-x"
      ></Column>
    </Row>
  )
}

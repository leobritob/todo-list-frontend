import React from 'react'

import { AuthContext } from './auth.context'
import { UserContext } from './user.context'

export const AppContext: React.FC = ({ children }) => {
  return (
    <AuthContext>
      <UserContext>{children}</UserContext>
    </AuthContext>
  )
}

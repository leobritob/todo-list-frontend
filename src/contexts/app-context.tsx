import React from 'react'

import { UserContext } from './user-context'

export const AppContext: React.FC = ({ children }) => {
  return <UserContext>{children}</UserContext>
}

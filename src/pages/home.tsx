import React from 'react'
import { useUserContext } from 'contexts'

export const HomePage: React.FC = () => {
  const { user } = useUserContext()

  return (
    <div>
      <h1>Bem-vindo(a), {user?.email}!</h1>
    </div>
  )
}
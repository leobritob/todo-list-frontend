import React, { useState, createContext, useContext } from 'react'

type AuthContextProps = {
  token: string | undefined
  setToken: (token: string) => void
}

const Context = createContext<AuthContextProps>({
  token: undefined,
  setToken: () => null,
})

export const useAuthContext = () => useContext(Context)

export const AuthContext: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | undefined>(undefined)

  return <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
}

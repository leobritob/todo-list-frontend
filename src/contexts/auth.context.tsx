import React, { useState, createContext, useContext, useEffect } from 'react'
import { StorageHelper } from 'helpers'
import { StorageConstant } from 'constants/storage.constant'

const KEY = StorageConstant.TOKEN

type AuthContextProps = {
  token: string | undefined
  setToken: (token: string | undefined) => void
}

const defaultValue = {
  token: StorageHelper.getItem(KEY) || {},
  setToken: (token: string | undefined) => null,
}

const Context = createContext<AuthContextProps>(defaultValue)

export const useAuthContext = () => useContext(Context)

export const AuthContext: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | undefined>(defaultValue.token)

  useEffect(() => {
    if (token) StorageHelper.setItem(KEY, token)
  }, [token])

  return <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
}

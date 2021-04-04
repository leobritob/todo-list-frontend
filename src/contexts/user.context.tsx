import React, { useState, createContext, useContext, useEffect } from 'react'

import { IUser } from 'interfaces'
import { StorageHelper } from 'helpers'
import { StorageConstant } from 'constants/storage.constant'

const KEY = StorageConstant.USER

type UserContextProps = {
  user: IUser | undefined
  setUser: (user: IUser | undefined) => void
}

const defaultValue = {
  user: StorageHelper.getItem(KEY) || {},
  setUser: (user: IUser | undefined) => null,
}

const Context = createContext<UserContextProps>(defaultValue)

export const useUserContext = () => useContext(Context)

export const UserContext: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>(defaultValue.user)

  useEffect(() => {
    if (user) StorageHelper.setItem(KEY, user)
  }, [user])

  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
}

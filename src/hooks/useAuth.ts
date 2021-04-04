import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

import { useAuthContext, useUserContext } from 'contexts'
import { AuthService } from 'services'
import { StorageHelper } from 'helpers'
import { IStoreUser } from 'interfaces'

export const useAuth = () => {
  const { setUser } = useUserContext()
  const { setToken } = useAuthContext()

  const [isLoading, setIsLoading] = useState(false)

  const login = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true)

      try {
        const res = await AuthService.login(email, password)
        if (res.status !== 200) console.error('Login failed')

        setToken(res.data.token)
        setUser(res.data.user)
      } catch (e) {
        toast.error('Login failed, please try again!')
      } finally {
        setIsLoading(false)
      }
    },
    [setToken, setUser]
  )

  const registerNewUser = useCallback(async (data: IStoreUser) => {
    setIsLoading(true)

    try {
      const res = await AuthService.registerNewUser(data)
      if (res.status !== 201) console.error('Register failed')

      toast.success('Your account was created with success!')
    } catch (e) {
      toast.error('Login failed, please try again!')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(undefined)
    setToken(undefined)
    StorageHelper.clear()
    console.log('fim')
  }, [setToken, setUser])

  return {
    isLoading,
    login,
    logout,
    registerNewUser,
  }
}

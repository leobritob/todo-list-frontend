import { useCallback, useState } from 'react'
import { useAuthContext, useUserContext } from '../contexts'
import { AuthService } from '../services'

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
      } finally {
        setIsLoading(false)
      }
    },
    [setToken, setUser]
  )

  return {
    isLoading,
    login,
  }
}

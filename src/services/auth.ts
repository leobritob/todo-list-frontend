import { ILogin } from 'interfaces/auth.interface'
import { api } from 'providers/api'

const login = (email: string, password: string) => api.post<ILogin>('/api/auth/login', { email, password })

export const AuthService = {
  login,
}

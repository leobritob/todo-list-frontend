import { ILogin } from 'interfaces/auth.interface'
import { api } from 'providers/api'
import { IStoreUser, IUser } from '../interfaces'

const login = (email: string, password: string) => api.post<ILogin>('/api/auth/login', { email, password })

const registerNewUser = (data: IStoreUser) => api.post<IUser>('/api/v1/users', data)

export const AuthService = {
  login,
  registerNewUser,
}

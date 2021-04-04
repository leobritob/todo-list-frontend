export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: any
}

export type IStoreUser = Pick<IUser, 'firstName' | 'lastName' | 'email' | 'password'>

import { ITask } from './task.interface'

export interface IProject {
  id: string
  name: string
  userId: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

export type IGetAllProjects = Pick<IProject, 'id' | 'name'> & {
  tasks: Pick<ITask, 'id' | 'description' | 'dueDate' | 'done'>[]
}

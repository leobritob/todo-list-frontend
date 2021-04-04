export interface ITask {
  id: string
  description: string
  dueDate: string
  done: number
  projectId: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

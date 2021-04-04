export interface ITask {
  id: string
  description: string
  doneDate: string
  done: number
  projectId: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

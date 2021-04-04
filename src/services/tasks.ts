import { api } from 'providers/api'
import { ITask } from 'interfaces'

const save = (project: any) => api.post<ITask>('/api/v1/tasks', project)

const updateById = (id: string, data: Partial<ITask>) => api.patch<ITask>(`/api/v1/tasks/${id}`, data)

const deleteById = (id: string) => api.delete<void>(`/api/v1/tasks/${id}`)

export const TasksService = {
  save,
  updateById,
  deleteById,
}

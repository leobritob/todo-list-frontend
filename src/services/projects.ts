import { api } from 'providers/api'
import { IGetAllProjects, IProject } from '../interfaces'

const getAll = () => api.get<IGetAllProjects[]>('/api/v1/projects')

const save = (data: any) => api.post<IProject>('/api/v1/projects', data)

const updateById = (id: string, data: Partial<IProject>) => api.patch<IProject>(`/api/v1/projects/${id}`, data)

const deleteById = (id: string) => api.delete<void>(`/api/v1/projects/${id}`)

export const ProjectsService = {
  getAll,
  save,
  updateById,
  deleteById,
}

import { api } from 'providers/api'
import { IGetAllProjects, IProject } from '../interfaces'

const getAll = () => api.get<IGetAllProjects[]>('/api/v1/projects')

const save = (project: any) => api.post<IProject>('/api/v1/projects', project)

const updateById = (id: string) => api.patch<IProject>(`/api/v1/projects/${id}`)

const deleteById = (id: string) => api.delete<void>(`/api/v1/projects/${id}`)

export const ProjectsService = {
  getAll,
  save,
  updateById,
  deleteById,
}

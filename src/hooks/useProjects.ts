import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

import { ProjectsService } from 'services'
import { IGetAllProjects, IProject } from 'interfaces'

export const useProjects = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [projects, setProjects] = useState<IGetAllProjects[]>([])

  const getAllProjects = useCallback(async () => {
    setIsLoading(true)

    try {
      const res = await ProjectsService.getAll()
      if (res.status !== 200) return

      setProjects(res.data)
    } catch (e) {
      toast.error('Something wrong!')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const saveNewProject = useCallback(async (data: IProject) => {
    setIsLoading(true)

    try {
      const res = await ProjectsService.save(data)
      if (res.status !== 200) return

      toast.success('Project was saved successfully!')
    } catch (e) {
      toast.error('Something wrong!')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const updateProjectById = useCallback(async (id: string, data: Partial<IProject>) => {
    setIsLoading(true)

    try {
      const res = await ProjectsService.updateById(id, data)
      if (res.status !== 200) return

      toast.success('Project was updated successfully!')
    } catch (e) {
      toast.error('Something wrong!')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const deleteProjectById = useCallback(async (id: string) => {
    setIsLoading(true)

    try {
      const res = await ProjectsService.deleteById(id)
      if (res.status !== 204) return

      toast.success('Project was deleted successfully!')
    } catch (e) {
      toast.error('Something wrong!')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    isLoading,
    projects,
    getAllProjects,
    saveNewProject,
    updateProjectById,
    deleteProjectById,
  }
}

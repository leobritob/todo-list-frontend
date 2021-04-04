import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

import { ProjectsService } from 'services'
import { IGetAllProjects } from 'interfaces'

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

  return {
    isLoading,
    projects,
    getAllProjects,
  }
}

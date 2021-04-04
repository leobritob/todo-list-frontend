import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

import { ITask } from 'interfaces'
import { TasksService } from 'services'

export const useTasks = () => {
  const [isLoading, setIsLoading] = useState(false)

  const saveNewTask = useCallback(async (data: Partial<ITask>) => {
    setIsLoading(true)

    try {
      const res = await TasksService.save(data)
      if (res.status !== 200) return

      toast.success('Task was saved successfully!')
    } catch (e) {
      toast.error('Something wrong!')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const updateTaskById = useCallback(async (id: string, data: Partial<ITask>) => {
    setIsLoading(true)

    try {
      const res = await TasksService.updateById(id, data)
      if (res.status !== 200) return

      toast.success('Task was updated successfully!')
    } catch (e) {
      toast.error('Something wrong!')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const deleteTaskById = useCallback(async (id: string) => {
    setIsLoading(true)

    try {
      const res = await TasksService.deleteById(id)
      if (res.status !== 204) return

      toast.success('Task was deleted successfully!')
    } catch (e) {
      toast.error('Something wrong!')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    isLoading,
    saveNewTask,
    updateTaskById,
    deleteTaskById,
  }
}

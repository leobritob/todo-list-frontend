import React, { useCallback, useEffect } from 'react'

import { Title, Row, Card } from 'components'
import { useProjects, useTasks } from 'hooks'
import { CardItemProps } from 'components/cards/card-item'

export const ProjectsPage: React.FC = () => {
  const { isLoading, projects, getAllProjects } = useProjects()
  const { updateTaskById } = useTasks()

  const handleStatusChange = useCallback(
    async (task: Omit<CardItemProps, 'onStatusChange'>) => {
      await updateTaskById(task.id, { done: task.done ? 0 : 1 })
      await getAllProjects()
    },
    [updateTaskById, getAllProjects]
  )

  useEffect(() => {
    getAllProjects()
  }, [getAllProjects])

  return (
    <div>
      <Title>Projects</Title>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Row width="100%" flexWrap="wrap" justifyContent="flex-start" alignItems="flex-start">
          {projects.map((project, index) => (
            <Card key={index} name={project.name} cards={project.tasks} onStatusChange={handleStatusChange} />
          ))}
        </Row>
      )}
    </div>
  )
}

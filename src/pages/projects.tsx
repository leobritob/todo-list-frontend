import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Title, Row, Card, Input, Button, Text, Column } from 'components'
import { useProjects, useTasks } from 'hooks'
import { CardItemProps } from 'components/cards/card-item'

const schema = yup.object().shape({
  name: yup.string().nullable().required(),
})

export const ProjectsPage: React.FC = () => {
  const { isLoading, projects, getAllProjects, saveNewProject, deleteProjectById } = useProjects()
  const { updateTaskById } = useTasks()

  const { errors, setValue, register, handleSubmit } = useForm({ resolver: yupResolver(schema) })

  const handleStatusChange = useCallback(
    async (task: Omit<CardItemProps, 'onStatusChange'>) => {
      await updateTaskById(task.id, { done: task.done ? 0 : 1 })
      await getAllProjects()
    },
    [updateTaskById, getAllProjects]
  )

  const handleDelete = useCallback(
    async (id: string) => {
      await deleteProjectById(id)
      await getAllProjects()
    },
    [deleteProjectById, getAllProjects]
  )

  const onSubmit = useCallback(
    async (value) => {
      await saveNewProject(value)
      await getAllProjects()
      setValue('name', '')
    },
    [getAllProjects, saveNewProject, setValue]
  )

  useEffect(() => {
    getAllProjects()
  }, [getAllProjects])

  return (
    <div>
      <Title>Projects</Title>

      <Column
        as="form"
        width="350px"
        p="10px"
        boxShadow="0 1px 5px rgba(0,0,0,0.1)"
        onSubmit={handleSubmit(onSubmit)}
        alignItems="flex-start"
      >
        <Row width="100%">
          <Input ref={register} id="name" name="name" placeholder="Project name" />
          <Button type="submit" ml="5px">
            Add
          </Button>
        </Row>
        {errors?.name?.message && <Text color="danger">{errors?.name?.message}</Text>}
      </Column>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Row width="100%" flexWrap="wrap" justifyContent="flex-start" alignItems="flex-start">
          {projects.map((project, index) => (
            <Card
              key={index}
              id={project.id}
              name={project.name}
              cards={project.tasks}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          ))}
        </Row>
      )}
    </div>
  )
}

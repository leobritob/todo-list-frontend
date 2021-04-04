import React, { Fragment, useCallback, useEffect } from 'react'
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
  const { projects, getAllProjects, saveNewProject, updateProjectById, deleteProjectById } = useProjects()
  const { updateTaskById, saveNewTask, deleteTaskById } = useTasks()

  const { errors, setValue, register, handleSubmit } = useForm({ resolver: yupResolver(schema) })

  const handleStatusChange = useCallback(
    async (task: CardItemProps) => {
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

  const handleUpdate = useCallback(
    async (id: string, name: string) => {
      await updateProjectById(id, { name })
      await getAllProjects()
    },
    [getAllProjects, updateProjectById]
  )

  const handleAddTask = useCallback(
    async (id, value) => {
      await saveNewTask({ ...value, projectId: id })
      await getAllProjects()
      setValue('name', '')
    },
    [getAllProjects, saveNewTask, setValue]
  )

  const handleDeleteItem = useCallback(
    async (id: string) => {
      await deleteTaskById(id)
      await getAllProjects()
    },
    [deleteTaskById, getAllProjects]
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
    <Fragment>
      <Title>Projects</Title>

      <Column
        as="form"
        width="350px"
        p="10px"
        mb="20px"
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

      <Row width="100%" height="100%" p="10px 0" overflowX="auto" justifyContent="flex-start" alignItems="flex-start">
        {projects.map((project, index) => (
          <Card
            key={index}
            id={project.id}
            name={project.name}
            cards={project.tasks}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
            onItemAdd={(task) => handleAddTask(project.id, task)}
            onItemDelete={handleDeleteItem}
            onUpdate={handleUpdate}
          />
        ))}
      </Row>
    </Fragment>
  )
}

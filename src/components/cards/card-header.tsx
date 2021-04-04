import React, { useState } from 'react'
import { BsPencil, BsTrash } from 'react-icons/bs'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'

import { Text, CustomRow, Column, Row, Button, Input } from 'components'

type CardHeaderProps = {
  id: string
  name: string
  onUpdate?: (id: string, name: string) => void
  onDelete?: (id: string) => void
}

const schema = yup.object().shape({
  name: yup.string().nullable().required(),
})

export const CardHeader: React.FC<CardHeaderProps> = ({ id, name, onUpdate, onDelete }) => {
  const [isUpdate, setIsUpdate] = useState(false)

  const { errors, register, handleSubmit, setValue } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (value: { name: string }) => {
    if (onUpdate) onUpdate(id, value.name)
    setIsUpdate(false)
    setValue('name', value.name)
  }

  const handleDelete = (id: string) => {
    if (onDelete) onDelete(id)
    setIsUpdate(false)
  }

  return (
    <CustomRow width="100%" justifyContent="flex-start">
      <Column flex={1}>
        {isUpdate ? (
          <Column as="form" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Input ref={register} name="name" id="name" placeholder="Name" defaultValue={name} />
              <Button type="submit">Save</Button>
            </Row>
            {errors.name?.message && <Text>{errors.name.message}</Text>}
          </Column>
        ) : (
          <Text fontWeight="bold" fontSize="18px" m="10px 0" color="primary">
            {name}
          </Text>
        )}
      </Column>

      {!!onUpdate && (
        <BsPencil data-testid="edit" style={{ cursor: 'pointer' }} color="red" onClick={() => setIsUpdate(!isUpdate)} />
      )}
      {!!onDelete && (
        <BsTrash data-testid="delete" style={{ cursor: 'pointer' }} color="red" onClick={() => handleDelete(id)} />
      )}
    </CustomRow>
  )
}

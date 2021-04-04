import React, { Fragment, useCallback, useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'

import { Column, Row, Text, CardItem, Input, Button } from 'components'
import { CardItemProps } from './card-item'
import { CardHeader } from './card-header'

export type CardProps = {
  id: string
  name: string
  cards: CardItemProps[]
  onStatusChange: (data: CardItemProps) => void
  onUpdate: (id: string, name: string) => void
  onDelete: (id: string) => void
  onItemAdd: (data: CardItemProps) => void
  onItemDelete: (id: string) => void
}

const schema = yup.object().shape({
  description: yup.string().nullable().required(),
})

export const Card: React.FC<CardProps> = ({
  id,
  name,
  cards,
  onUpdate,
  onDelete,
  onStatusChange,
  onItemAdd,
  onItemDelete,
}) => {
  const cardsToDo = useMemo(() => cards.filter((card) => !card.done), [cards])
  const cardsDone = useMemo(() => cards.filter((card) => card.done), [cards])

  const { errors, setValue, register, handleSubmit } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = useCallback(
    async (value) => {
      if (onItemAdd) {
        onItemAdd(value)
        setValue('name', '')
      }
    },
    [onItemAdd, setValue]
  )

  return (
    <Column
      minWidth="350px"
      p="10px"
      m="10px"
      bg="#fff"
      borderRadius="5px"
      boxShadow="0 1px 5px 0px rgba(0,0,0,0.1)"
      alignItems="flex-start"
    >
      <CardHeader id={id} name={name} onUpdate={onUpdate} onDelete={onDelete} />

      <Column as="form" width="100%" p="10px" onSubmit={handleSubmit(onSubmit)} alignItems="flex-start">
        <Row width="100%">
          <Input ref={register} id="description" name="description" placeholder="Description" autoComplete="off" />
          <Button type="submit" ml="5px">
            Add
          </Button>
        </Row>
        {errors?.description?.message && <Text color="danger">{errors?.description?.message}</Text>}
      </Column>

      {cardsToDo.length > 0 && (
        <Fragment>
          <Text fontWeight="bold" fontSize="14px" m="10px 0">
            TO DO
          </Text>
          {cardsToDo.map((card, index) => (
            <CardItem key={index} {...card} onStatusChange={onStatusChange} onDelete={onItemDelete} />
          ))}
        </Fragment>
      )}

      {cardsDone.length > 0 && (
        <Fragment>
          <Text fontWeight="bold" fontSize="14px" m="10px 0">
            DONE
          </Text>
          {cardsDone.map((card, index) => (
            <CardItem key={index} {...card} onStatusChange={onStatusChange} onDelete={onItemDelete} />
          ))}
        </Fragment>
      )}
    </Column>
  )
}

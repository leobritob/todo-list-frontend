import React, { Fragment, useMemo } from 'react'
import { BsTrash } from 'react-icons/bs'

import { Column, Row, Text, CardItem } from 'components'
import { CardItemProps } from './card-item'

export type CardProps = {
  id: string
  name: string
  cards: Omit<CardItemProps, 'onStatusChange'>[]
  onStatusChange: (data: Omit<CardItemProps, 'onStatusChange'>) => void
  onDelete: (id: string) => void
}

export const Card: React.FC<CardProps> = ({ id, name, cards, onDelete, onStatusChange }) => {
  const cardsToDo = useMemo(() => cards.filter((card) => !card.done), [cards])
  const cardsDone = useMemo(() => cards.filter((card) => card.done), [cards])

  return (
    <Column
      width="350px"
      p="10px"
      m="10px"
      bg="#fff"
      borderRadius="5px"
      boxShadow="0 1px 5px 0px rgba(0,0,0,0.1)"
      alignItems="flex-start"
    >
      <Row width="100%" justifyContent="flex-start">
        <Column flex={1}>
          <Text fontWeight="bold" fontSize="18px" m="10px 0" color="primary">
            {name}
          </Text>
        </Column>
        {onDelete && <BsTrash style={{ cursor: 'pointer' }} color="red" onClick={() => onDelete(id)} />}
      </Row>

      {cardsToDo.length > 0 && (
        <Fragment>
          <Text fontWeight="bold" fontSize="14px" m="10px 0">
            TO DO
          </Text>
          {cardsToDo.map((card, index) => (
            <CardItem key={index} {...card} onStatusChange={onStatusChange} />
          ))}
        </Fragment>
      )}

      {cardsDone.length > 0 && (
        <Fragment>
          <Text fontWeight="bold" fontSize="14px" m="10px 0">
            DONE
          </Text>
          {cardsDone.map((card, index) => (
            <CardItem key={index} {...card} onStatusChange={onStatusChange} />
          ))}
        </Fragment>
      )}
    </Column>
  )
}

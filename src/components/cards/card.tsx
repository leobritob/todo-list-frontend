import React, { Fragment, useMemo } from 'react'

import { Column, Text, CardItem } from 'components'
import { CardItemProps } from './card-item'

export type CardProps = {
  name: string
  onStatusChange: (data: Omit<CardItemProps, 'onStatusChange'>) => void
  cards: Omit<CardItemProps, 'onStatusChange'>[]
}

export const Card: React.FC<CardProps> = ({ name, onStatusChange, cards }) => {
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
      <Text fontWeight="bold" fontSize="18px" m="10px 0" color="primary">
        {name}
      </Text>

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

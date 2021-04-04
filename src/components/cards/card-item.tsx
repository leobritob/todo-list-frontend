import React from 'react'

import { Column, Row, Text } from 'components'

export type CardItemProps = {
  id: string
  description: string
  done: number
  onStatusChange: (data: Omit<CardItemProps, 'onStatusChange'>) => void
}

export const CardItem: React.FC<CardItemProps> = ({ id, description, done, onStatusChange }) => {
  return (
    <Column>
      <Row width="100%" p="5px 0" justifyContent="flex-start">
        <input
          type="checkbox"
          name="done"
          id="done"
          title="done"
          checked={done === 1}
          onClick={() => onStatusChange({ id, description, done })}
        />
        <Text p="0 5px">{description}</Text>
      </Row>
    </Column>
  )
}

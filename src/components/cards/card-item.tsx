import React from 'react'
import { BsTrash } from 'react-icons/bs'

import { Row, CustomRow, Text } from 'components'

export type CardItemComponentProps = {
  id: string
  description: string
  done: number
  onStatusChange: (data: Pick<CardItemProps, 'id' | 'description' | 'done'>) => void
  onDelete: (id: string) => void
}

export type CardItemProps = Pick<CardItemComponentProps, 'id' | 'description' | 'done'>

export const CardItem: React.FC<CardItemComponentProps> = ({ id, description, done, onStatusChange, onDelete }) => {
  return (
    <CustomRow width="100%" p="5px 0" justifyContent="flex-start" alignItems="flex-start">
      <Row flex={1} justifyContent="flex-start">
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
      {onDelete && <BsTrash style={{ cursor: 'pointer' }} color="red" onClick={() => onDelete(id)} />}
    </CustomRow>
  )
}

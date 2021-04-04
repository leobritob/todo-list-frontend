import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { format } from 'date-fns'
import ReactTooltip from 'react-tooltip'

import { Row, CustomRow, Text } from 'components'

export type CardItemComponentProps = {
  id: string
  description: string
  done: number
  doneDate: string
  onStatusChange: (data: CardItemProps) => void
  onDelete: (id: string) => void
}

export type CardItemProps = Pick<CardItemComponentProps, 'id' | 'description' | 'done' | 'doneDate'>

export const CardItem: React.FC<CardItemComponentProps> = ({
  id,
  description,
  done,
  doneDate,
  onStatusChange,
  onDelete,
}) => {
  return (
    <CustomRow width="100%" p="5px 0" justifyContent="flex-start" alignItems="flex-start">
      <Row flex={1} justifyContent="flex-start">
        <input
          type="checkbox"
          name="done"
          id="done"
          title="done"
          checked={done === 1}
          onClick={done ? () => {} : () => onStatusChange({ id, description, done, doneDate })}
        />
        <ReactTooltip />
        <Text p="0 5px" data-tip={done ? `Finished at ${format(new Date(doneDate), 'M/d/Y H:m:s')}` : null}>
          {description}
        </Text>
      </Row>
      {!done && onDelete && <BsTrash style={{ cursor: 'pointer' }} color="red" onClick={() => onDelete(id)} />}
    </CustomRow>
  )
}

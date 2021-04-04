import React from 'react'
import { useUserContext } from 'contexts'

import { Title } from 'components'

export const ProjectsPage: React.FC = () => {
  const { user } = useUserContext()

  return (
    <div>
      <Title>Projects</Title>
    </div>
  )
}

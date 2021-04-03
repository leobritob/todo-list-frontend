import styled from 'styled-components'

import { Column } from './column'

export const Row = styled(Column).attrs({ 'data-testid': 'row' })`
  flex-direction: row;
`

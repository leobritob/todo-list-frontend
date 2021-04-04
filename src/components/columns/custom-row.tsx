import styled from 'styled-components'

import { Row } from './row'

export const CustomRow = styled(Row)`
  svg {
    visibility: hidden;
  }

  &:hover {
    & > svg {
      visibility: visible;
    }
  }
`

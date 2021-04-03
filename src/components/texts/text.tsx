import styled from 'styled-components'
import { typography, TypographyProps, color, ColorProps } from 'styled-system'

export type TextProps = TypographyProps & ColorProps

export const Text = styled.p.attrs({ 'data-testid': 'text' })<TextProps>`
  color: #000;
  font-size: 14px;
  ${typography}
  ${color}
`

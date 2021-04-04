import styled from 'styled-components'
import { typography, TypographyProps, color, ColorProps, space, SpaceProps } from 'styled-system'

export type TextProps = TypographyProps & ColorProps & SpaceProps & { cursor?: string }

export const Text = styled.p.attrs({ 'data-testid': 'text' })<TextProps>`
  color: #000;
  font-size: 14px;
  ${({ cursor }) => cursor && `cursor: ${cursor};`}
  ${typography}
  ${color}
  ${space}
`

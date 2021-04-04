import styled from 'styled-components'
import {
  layout,
  flexbox,
  margin,
  padding,
  grid,
  LayoutProps,
  MarginProps,
  PaddingProps,
  GridProps,
  FlexboxProps,
  color,
  ColorProps,
  border,
  BorderProps,
  position,
  PositionProps,
  background,
  BackgroundProps,
  space,
  SpaceProps,
  shadow,
  ShadowProps,
} from 'styled-system'

export type ColumProps = LayoutProps &
  FlexboxProps &
  MarginProps &
  PaddingProps &
  GridProps &
  ColorProps &
  BorderProps &
  PositionProps &
  BackgroundProps &
  SpaceProps &
  ShadowProps

export const Column = styled.div.attrs({ 'data-testid': 'column' })<ColumProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${layout}
  ${flexbox}
  ${margin}
  ${padding}
  ${grid}
  ${color}
  ${border}
  ${position}
  ${background}
  ${space}
  ${shadow}
`

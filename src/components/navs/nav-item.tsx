import styled from 'styled-components'

export type NavItemProps = {
  isActive?: boolean
}

export const NavItem = styled.li<NavItemProps>`
  font-size: 14px;
  display: flex;
  width: 100%;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 100ms linear;
  background: ${({ isActive, theme }) => (isActive ? theme.colors.primaryLighten : 'transparent')};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLighten};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primaryDarken};
  }
`

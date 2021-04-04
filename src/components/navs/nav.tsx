import React from 'react'

import { NavItem, NavItemProps } from './nav-item'
import { NavList } from './nav-list'

type Link = NavItemProps & { label: string }

export type NavProps = {
  links: Link[]
}

export const Nav: React.FC<NavProps> = ({ links }) => {
  return (
    <NavList>
      {links.map(({ label, ...link }, index) => (
        <NavItem key={index} {...link}>
          {label}
        </NavItem>
      ))}
    </NavList>
  )
}

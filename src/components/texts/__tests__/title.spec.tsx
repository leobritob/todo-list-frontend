import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Title } from 'components'
import { theme } from '../../../styles'

describe('<Title />', () => {
  let container: Element

  beforeAll(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterAll(() => {
    unmountComponentAtNode(container)
    container.remove()
  })

  it('should render correctly', () => {
    act(() => {
      render(<Title theme={theme}>Hello, world!</Title>, container)
    })

    expect(container.querySelector('[data-testid="title"]')?.textContent).toBe('Hello, world!')
  })

  it('should render a name correctly', () => {
    act(() => {
      render(<Title theme={theme}>John Doe</Title>, container)
    })

    expect(container.querySelector('[data-testid="title"]')?.textContent).toBe('John Doe')
  })

  it('should have a default style', () => {
    const title = renderer.create(<Title theme={theme}>Default Styles</Title>).toJSON()
    expect(title).toHaveStyleRule('color', theme.colors.primary)
    expect(title).toHaveStyleRule('text-transform', 'uppercase')
    expect(title).toHaveStyleRule('font-size', '24px')
    expect(title).toHaveStyleRule('position', 'relative')
    expect(title).toHaveStyleRule('margin', '20px 0')
  })
})

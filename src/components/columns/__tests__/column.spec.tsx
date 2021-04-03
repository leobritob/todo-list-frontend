import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Column } from 'components'

describe('<Column />', () => {
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
      render(<Column>Hello, world!</Column>, container)
    })

    expect(container.querySelector('[data-testid="column"]')?.textContent).toBe('Hello, world!')
  })

  it('should render a div like a child', () => {
    act(() => {
      render(
        <Column>
          <div>
            <h1>Hello, world!</h1>
          </div>
        </Column>,
        container
      )
    })

    expect(
      container.querySelector('[data-testid="column"]')?.querySelector('div')?.querySelector('h1')?.textContent
    ).toBe('Hello, world!')
  })

  it('should have a default style', () => {
    const column = renderer.create(<Column />).toJSON()
    expect(column).toHaveStyleRule('align-items', 'center')
    expect(column).toHaveStyleRule('justify-content', 'center')
  })

  it('should have a purple background color', () => {
    const column = renderer.create(<Column backgroundColor="purple" />).toJSON()
    expect(column).toHaveStyleRule('align-items', 'center')
    expect(column).toHaveStyleRule('justify-content', 'center')
    expect(column).toHaveStyleRule('background-color', 'purple')
  })
})

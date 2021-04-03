import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Row } from 'components'

describe('<Row />', () => {
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
      render(<Row>Hello, world!</Row>, container)
    })

    expect(container.querySelector('[data-testid="row"]')?.textContent).toBe('Hello, world!')
  })

  it('should render a div like a child', () => {
    act(() => {
      render(
        <Row>
          <div>
            <h1>Hello, world!</h1>
          </div>
        </Row>,
        container
      )
    })

    expect(container.querySelector('[data-testid="row"]')?.querySelector('div')?.querySelector('h1')?.textContent).toBe(
      'Hello, world!'
    )
  })

  it('should have a default style', () => {
    const row = renderer.create(<Row />).toJSON()
    expect(row).toHaveStyleRule('align-items', 'center')
    expect(row).toHaveStyleRule('justify-content', 'center')
  })

  it('should have a purple background color', () => {
    const row = renderer.create(<Row backgroundColor="purple" />).toJSON()
    expect(row).toHaveStyleRule('align-items', 'center')
    expect(row).toHaveStyleRule('justify-content', 'center')
    expect(row).toHaveStyleRule('background-color', 'purple')
  })
})

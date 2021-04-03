import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Text } from 'components'

describe('<Text />', () => {
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
      render(<Text>Hello, world!</Text>, container)
    })

    expect(container.querySelector('[data-testid="text"]')?.textContent).toBe('Hello, world!')
  })

  it('should render a name correctly', () => {
    act(() => {
      render(<Text>John Doe</Text>, container)
    })

    expect(container.querySelector('[data-testid="text"]')?.textContent).toBe('John Doe')
  })

  it('should have a default style', () => {
    const text = renderer.create(<Text>Default Styles</Text>).toJSON()
    expect(text).toHaveStyleRule('color', '#000')
    expect(text).toHaveStyleRule('font-size', '14px')
  })

  it('should render snapshot of text correctly', () => {
    act(() => {
      render(<Text>Ok</Text>, container)
    })

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<p data-testid=\\"text\\" class=\\"sc-eCssSg gmeZZU\\">Ok</p>"`
    )
  })
})

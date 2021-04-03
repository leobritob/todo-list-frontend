import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Button } from 'components'
import { theme } from 'styles'

describe('<Button />', () => {
  let container: Element

  beforeAll(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterAll(() => {
    unmountComponentAtNode(container)
    container.remove()
  })

  it('should render button correctly', () => {
    act(() => {
      render(<Button theme={theme}>Ok</Button>, container)
    })

    expect(container.querySelector('[data-testid="button"]')?.textContent).toBe('Ok')
  })

  it('should render a cancel button correctly', () => {
    act(() => {
      render(<Button theme={theme}>Cancel</Button>, container)
    })

    expect(container.querySelector('[data-testid="button"]')?.textContent).toBe('Cancel')
  })

  it('should render a snapshot of button correctly', () => {
    act(() => {
      render(<Button theme={theme}>Ok</Button>, container)
    })

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<button data-testid=\\"button\\" class=\\"sc-bdfBwQ lDFgM\\">Ok</button>"`
    )
  })

  it('should have a default style', () => {
    const button = renderer.create(<Button theme={theme} />).toJSON()
    expect(button).toHaveStyleRule('padding', '10px 20px')
    expect(button).toHaveStyleRule('background-color', '#069')
    expect(button).toHaveStyleRule('border', 'none')
    expect(button).toHaveStyleRule('color', '#fff')
    expect(button).toHaveStyleRule('cursor', 'pointer')
    expect(button).toHaveStyleRule('font-size', '14px')
    expect(button).toHaveStyleRule('border-radius', `${theme.radii.borderRadius}px`)
  })

  it('should change padding', () => {
    const button = renderer.create(<Button theme={theme} padding="20px 40px" />).toJSON()
    expect(button).not.toHaveStyleRule('padding', '10px 20px')
    expect(button).toHaveStyleRule('padding', '20px 40px')
    expect(button).toHaveStyleRule('background-color', '#069')
    expect(button).toHaveStyleRule('border', 'none')
    expect(button).toHaveStyleRule('color', '#fff')
    expect(button).toHaveStyleRule('cursor', 'pointer')
    expect(button).toHaveStyleRule('font-size', '14px')
    expect(button).toHaveStyleRule('border-radius', `${theme.radii.borderRadius}px`)
  })
})

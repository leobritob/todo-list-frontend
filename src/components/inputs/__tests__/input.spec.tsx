import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Input } from 'components'
import { theme } from 'styles'

describe('<Input />', () => {
  let container: Element

  beforeAll(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterAll(() => {
    unmountComponentAtNode(container)
    container.remove()
  })

  it('should render input correctly', () => {
    act(() => {
      render(<Input theme={theme} id="firstName" name="firstName" placeholder="First name" />, container)
    })

    expect(container.querySelector('[data-testid="input"]')).toHaveProperty('id', 'firstName')
    expect(container.querySelector('[data-testid="input"]')).toHaveProperty('name', 'firstName')
    expect(container.querySelector('[data-testid="input"]')).toHaveProperty('placeholder', 'First name')
  })

  it('should render a password input correctly', () => {
    act(() => {
      render(<Input theme={theme} type="password" id="password" name="password" placeholder="Password" />, container)
    })

    expect(container.querySelector('[data-testid="input"]')).toHaveProperty('type', 'password')
    expect(container.querySelector('[data-testid="input"]')).toHaveProperty('id', 'password')
    expect(container.querySelector('[data-testid="input"]')).toHaveProperty('name', 'password')
    expect(container.querySelector('[data-testid="input"]')).toHaveProperty('placeholder', 'Password')
  })

  it('should render the input snapshot correctly', () => {
    act(() => {
      render(<Input theme={theme} id="firstName" name="firstName" placeholder="First name" />, container)
    })

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<input id=\\"firstName\\" name=\\"firstName\\" placeholder=\\"First name\\" data-testid=\\"input\\" class=\\"sc-jSgupP Yfjnp\\">"`
    )
  })

  it('should have a default style', () => {
    const input = renderer.create(<Input theme={theme} />).toJSON()
    expect(input).toHaveStyleRule('width', '100%')
    expect(input).toHaveStyleRule('padding', '10px')
    expect(input).toHaveStyleRule('background-color', '#fff')
    expect(input).toHaveStyleRule('border', '1px solid #eaeaea')
    expect(input).toHaveStyleRule('font-size', '14px')
    expect(input).toHaveStyleRule('border-radius', `${theme.radii.borderRadius}px`)
  })

  it('should change padding', () => {
    const input = renderer.create(<Input theme={theme} padding="20px 40px" />).toJSON()
    expect(input).toHaveStyleRule('width', '100%')
    expect(input).not.toHaveStyleRule('padding', '10px')
    expect(input).toHaveStyleRule('padding', '20px 40px')
    expect(input).toHaveStyleRule('background-color', '#fff')
    expect(input).toHaveStyleRule('border', '1px solid #eaeaea')
    expect(input).toHaveStyleRule('font-size', '14px')
    expect(input).toHaveStyleRule('border-radius', `${theme.radii.borderRadius}px`)
  })
})

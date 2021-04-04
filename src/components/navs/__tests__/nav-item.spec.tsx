import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import { NavItem } from 'components'
import { theme } from 'styles'

describe('<NavItem />', () => {
  let container: Element

  beforeAll(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterAll(() => {
    unmountComponentAtNode(container)
    container.remove()
  })

  it('should match snapsht', () => {
    act(() => {
      render(<NavItem theme={theme} />, container)
    })

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<li class=\\"sc-gKckTs fvWWCn\\"></li>"`)
  })
})

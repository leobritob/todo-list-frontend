import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import { NavList } from 'components'

describe('<NavList />', () => {
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
      render(<NavList />, container)
    })

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<ul class=\\"sc-furvIG hQDONG\\"></ul>"`)
  })
})

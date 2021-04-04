import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import { Nav } from 'components'

describe('<Nav />', () => {
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
      render(<Nav links={[]} />, container)
    })

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<ul class=\\"sc-iCfLBT hsCeMl\\"></ul>"`)
  })
})

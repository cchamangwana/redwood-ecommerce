import { render } from '@redwoodjs/testing/web'

import RemoveFromCart from './RemoveFromCart'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RemoveFromCart', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RemoveFromCart />)
    }).not.toThrow()
  })
})

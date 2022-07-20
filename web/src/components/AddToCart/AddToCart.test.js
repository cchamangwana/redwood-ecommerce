import { render } from '@redwoodjs/testing/web'

import AddToCart from './AddToCart'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddToCart', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddToCart />)
    }).not.toThrow()
  })
})

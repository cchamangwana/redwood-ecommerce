import { render } from '@redwoodjs/testing/web'

import ProductItem from './ProductItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProductItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductItem />)
    }).not.toThrow()
  })
})

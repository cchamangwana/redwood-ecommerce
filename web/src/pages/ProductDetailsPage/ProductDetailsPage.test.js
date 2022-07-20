import { render } from '@redwoodjs/testing/web'

import ProductDetailsPage from './ProductDetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProductDetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductDetailsPage />)
    }).not.toThrow()
  })
})

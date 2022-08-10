import { render } from '@redwoodjs/testing/web'

import SupplierLayout from './SupplierLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SupplierLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SupplierLayout />)
    }).not.toThrow()
  })
})

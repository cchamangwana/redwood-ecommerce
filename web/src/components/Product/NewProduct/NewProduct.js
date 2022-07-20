import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProductForm from 'src/components/Product/ProductForm'

const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProductMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
    }
  }
`

const NewProduct = () => {
  const [createProduct, { loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Product created')
        navigate(routes.products())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createProduct({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Product</h2>
      </header>
      <div className="rw-segment-main">
        <ProductForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProduct

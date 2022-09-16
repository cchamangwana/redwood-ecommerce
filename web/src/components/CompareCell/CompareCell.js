import ComparisonTable from "../ComparisonTable/ComparisonTable"

export const QUERY = gql`
  # query FindCompareQuery($id: String!) {
  #   compare: product(id: $id) {
  #     id
  #   }
  # }
  query FindProductsQuery($id: String!) {
    products: getProductsByCategory(id: $id) {
      id
      name
      price
      category {
        name
      }
      user {
        email
      }
    }
  }
`

export const Loading = () => <div style={{ textAlign: "center", color: "red"}}>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ products }) => {
  return (
    <ComparisonTable products={products}/>
  )
}

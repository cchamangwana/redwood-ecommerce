import Order from 'src/components/Order/Order'

export const QUERY = gql`
  query FindOrderById($id: String!) {
    order: order(id: $id) {
      id
      userId
      productId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Order not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ order }) => {
  return <Order order={order} />
}

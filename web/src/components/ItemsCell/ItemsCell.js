import ProductItem from "../ProductItem/ProductItem"

export const QUERY = gql`
  query ItemsQuery {
    items: products {
      id
      name
      price
      image
      isActive
      userId
      description
      category {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div style={{ textAlign: "center", color: "blue"}}>No products</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ items }) => {
  return (
    <div className="flex flex-wrap -m-4">
      {items.map((item) => {
        // return <li key={item.id}>{JSON.stringify(item)}</li>
        return <ProductItem key={item.id} product={item}/>
      })}
    </div>
  )
}

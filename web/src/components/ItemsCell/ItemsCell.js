import ProductItem from '../ProductItem/ProductItem'

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

export const Empty = () => (
  <div style={{ textAlign: 'center', color: 'blue' }}>No products</div>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ items }) => {
  const [searchTerm, setSearchTerm] = React.useState('')

  return (
    <>
      <div className="relative mt-6 mb-6 max-w-lg mx-auto">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <input
          className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search for product by name or category"
          onChange={event => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="flex flex-wrap -m-4">
        {items.filter(( item ) => {
          if(searchTerm == "") {
            return item
          } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item
          }
        })
        .map((item) => {
          return <ProductItem key={item.id} product={item} />
        })}
      </div>
    </>
  )
}

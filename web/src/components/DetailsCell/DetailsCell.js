import AddToCart from "../AddToCart/AddToCart"
import RemoveFromCart from "../RemoveFromCart/RemoveFromCart"
export const QUERY = gql`
  query productQuery($id: String!) {
    product(id: $id) {
      id
      name
      description
      price
      image
      category {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ product }) => {
  return (
    <section className="text-gray-400 body-font overflow-hidden">
      <div className="px-1 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.name}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-black tracking-widest">
              {product.category.name}
            </h2>
            <h1 className="text-black text-3xl title-font font-medium mb-8">
              {product.name}
            </h1>
            <p className="leading-relaxed">{product.description_long}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-black">
                {product.price}
              </span>
              <AddToCart product={product} />
              <RemoveFromCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

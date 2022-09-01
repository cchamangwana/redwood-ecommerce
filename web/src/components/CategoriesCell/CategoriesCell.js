export const QUERY = gql`
  query CategoriesQuery {
    categories {
      id
      name
    }
  }
`

// export const Loading = () => <div>Loading...</div>
// This is done so that the loading component doesnt show up the create page

export const Loading = ({ isCreatePage= 'false'}) => {

  if(isCreatePage === 'true') {
   <option> Select Category</option>
  }

  return <div>Loading...</div>

}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ categories, isCreatePage = 'false' }) => {
  if (isCreatePage === 'true') {
    return categories.map((category) => (
      <option value={category.id} key={category.id}> {category.name} </option>
    ))
  } else {
    return (
      <ul>
        {categories.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>
        })}
      </ul>
    )
  }
}

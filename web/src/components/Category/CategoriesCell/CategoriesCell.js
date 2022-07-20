import { Link, routes } from '@redwoodjs/router'

import Categories from 'src/components/Category/Categories'

export const QUERY = gql`
  query FindCategories {
    categories {
      id
      name
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No categories yet. '}
      <Link to={routes.newCategory()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ categories }) => {
  return <Categories categories={categories} />
}

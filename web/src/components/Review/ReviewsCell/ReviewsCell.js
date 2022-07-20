import { Link, routes } from '@redwoodjs/router'

import Reviews from 'src/components/Review/Reviews'

export const QUERY = gql`
  query FindReviews {
    reviews {
      id
      userId
      productId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No reviews yet. '}
      <Link to={routes.newReview()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ reviews }) => {
  return <Reviews reviews={reviews} />
}

import Review from 'src/components/Review/Review'

export const QUERY = gql`
  query FindReviewById($id: String!) {
    review: review(id: $id) {
      id
      userId
      productId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Review not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ review }) => {
  return <Review review={review} />
}

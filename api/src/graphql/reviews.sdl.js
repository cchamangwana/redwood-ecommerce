export const schema = gql`
  type Review {
    id: String!
    userId: String!
    productId: String!
    product: Product!
    user: User!
    createdAt: DateTime!
  }

  type Query {
    reviews: [Review!]! @requireAuth
    review(id: String!): Review @requireAuth
  }

  input CreateReviewInput {
    userId: String!
    productId: String!
  }

  input UpdateReviewInput {
    userId: String
    productId: String
  }

  type Mutation {
    createReview(input: CreateReviewInput!): Review! @requireAuth
    updateReview(id: String!, input: UpdateReviewInput!): Review! @requireAuth
    deleteReview(id: String!): Review! @requireAuth
  }
`

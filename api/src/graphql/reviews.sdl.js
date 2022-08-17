export const schema = gql`
  type Review {
    id: String!
    userId: String!
    productId: String!
    text: String!
    product: Product!
    user: User!
    createdAt: DateTime!
  }

  type Query {
    reviews: [Review!]! @skipAuth
    review(id: String!): Review @skipAuth
  }

  input CreateReviewInput {
    userId: String!
    productId: String!
    text: String!
  }

  input UpdateReviewInput {
    userId: String
    productId: String
    text: String
  }

  type Mutation {
    createReview(input: CreateReviewInput!): Review! @requireAuth
    updateReview(id: String!, input: UpdateReviewInput!): Review! @requireAuth
    deleteReview(id: String!): Review! @requireAuth
  }
`

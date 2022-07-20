export const schema = gql`
  type Category {
    id: String!
    name: String!
    description: String!
    products: [Product]!
  }

  type Query {
    categories: [Category!]! @requireAuth
    category(id: String!): Category @requireAuth
  }

  input CreateCategoryInput {
    name: String!
    description: String!
  }

  input UpdateCategoryInput {
    name: String
    description: String
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category! @requireAuth
    updateCategory(id: String!, input: UpdateCategoryInput!): Category!
      @requireAuth
    deleteCategory(id: String!): Category! @requireAuth
  }
`

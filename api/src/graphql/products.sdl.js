export const schema = gql`
  type Product {
    id: String!
    name: String!
    description: String!
    price: Int!
    image: String!
    isActive: Boolean!
    userId: String!
    user: User!
    createdAt: DateTime!
    category: Category!
    categoryId: String!
    orders: [Order]!
    reviews: [Review]!
  }

  type Query {
    products: [Product!]! @skipAuth
    product(id: String!): Product @skipAuth
    getUserProducts(id: String!): [Product] @skipAuth
  }

  input CreateProductInput {
    name: String!
    description: String!
    price: Int!
    image: String!
    isActive: Boolean!
    userId: String!
    categoryId: String!
  }

  input UpdateProductInput {
    name: String
    description: String
    price: Int
    image: String
    isActive: Boolean
    userId: String
    categoryId: String
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: String!, input: UpdateProductInput!): Product!
      @requireAuth
    deleteProduct(id: String!): Product! @requireAuth
  }
`

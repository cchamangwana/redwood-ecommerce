export const schema = gql`
  type Order {
    id: String!
    userId: String!
    user: User!
    productId: String!
    product: Product!
    createdAt: DateTime!
  }

  type Query {
    orders: [Order!]! @requireAuth
    order(id: String!): Order @requireAuth
  }

  input CreateOrderInput {
    userId: String!
    productId: String!
  }

  input UpdateOrderInput {
    userId: String
    productId: String
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @requireAuth
    updateOrder(id: String!, input: UpdateOrderInput!): Order! @requireAuth
    deleteOrder(id: String!): Order! @requireAuth
  }
`

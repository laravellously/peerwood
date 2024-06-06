export const schema = gql`
  type Gateway {
    id: String!
    name: String!
    Offer: [Offer]!
    Trade: [Trade]!
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    gateways: [Gateway!]! @requireAuth
    gateway(id: String!): Gateway @requireAuth
  }

  input CreateGatewayInput {
    name: String!
    deletedAt: DateTime
  }

  input UpdateGatewayInput {
    name: String
    deletedAt: DateTime
  }

  type Mutation {
    createGateway(input: CreateGatewayInput!): Gateway! @requireAuth
    updateGateway(id: String!, input: UpdateGatewayInput!): Gateway!
      @requireAuth
    deleteGateway(id: String!): Gateway! @requireAuth
  }
`

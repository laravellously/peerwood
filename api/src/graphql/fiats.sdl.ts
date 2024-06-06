export const schema = gql`
  type Fiat {
    id: String!
    name: String
    baseUnit: Float
    symbol: String
    Wallet: [Wallet]!
    Offer: [Offer]!
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    fiats: [Fiat!]! @requireAuth
    fiat(id: String!): Fiat @requireAuth
  }

  input CreateFiatInput {
    name: String
    baseUnit: Float
    symbol: String
    deletedAt: DateTime
  }

  input UpdateFiatInput {
    name: String
    baseUnit: Float
    symbol: String
    deletedAt: DateTime
  }

  type Mutation {
    createFiat(input: CreateFiatInput!): Fiat! @requireAuth
    updateFiat(id: String!, input: UpdateFiatInput!): Fiat! @requireAuth
    deleteFiat(id: String!): Fiat! @requireAuth
  }
`

export const schema = gql`
  type Coin {
    id: String!
    name: String
    baseUnit: Float
    symbol: String
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
    wallets: [Wallet]!
  }

  type Query {
    coins: [Coin!]! @requireAuth
    coin(id: String!): Coin @requireAuth
  }

  input CreateCoinInput {
    name: String
    baseUnit: Float
    symbol: String
    deletedAt: DateTime
  }

  input UpdateCoinInput {
    name: String
    baseUnit: Float
    symbol: String
    deletedAt: DateTime
  }

  type Mutation {
    createCoin(input: CreateCoinInput!): Coin! @requireAuth
    updateCoin(id: String!, input: UpdateCoinInput!): Coin! @requireAuth
    deleteCoin(id: String!): Coin! @requireAuth
  }
`

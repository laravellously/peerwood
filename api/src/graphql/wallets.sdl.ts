export const schema = gql`
  type Wallet {
    id: String!
    address: String!
    label: String!
    passphrase: String!
    userId: String!
    user: User!
    coinId: String
    fiat: Fiat
    fiatId: String
    coin: Coin
    transactions: [Transaction]!
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    wallets: [Wallet!]! @requireAuth
    wallet(id: String!): Wallet @requireAuth
  }

  input CreateWalletInput {
    address: String!
    label: String!
    passphrase: String!
    userId: String!
    coinId: String
    fiatId: String
    deletedAt: DateTime
  }

  input UpdateWalletInput {
    address: String
    label: String
    passphrase: String
    userId: String
    coinId: String
    fiatId: String
    deletedAt: DateTime
  }

  type Mutation {
    createWallet(input: CreateWalletInput!): Wallet! @requireAuth
    updateWallet(id: String!, input: UpdateWalletInput!): Wallet! @requireAuth
    deleteWallet(id: String!): Wallet! @requireAuth
  }
`

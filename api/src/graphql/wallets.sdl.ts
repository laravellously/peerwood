export const schema = gql`
  type Wallet {
    id: String!
    userId: String!
    address: String!
    label: String!
    passphrase: String!
    coinId: String!
    coin: Coin!
    transactions: [Transaction]!
  }

  type Query {
    wallets: [Wallet!]! @requireAuth
    wallet(id: String!): Wallet @requireAuth
  }

  input CreateWalletInput {
    userId: String!
    address: String!
    label: String!
    passphrase: String!
    coinId: String!
  }

  input UpdateWalletInput {
    userId: String
    address: String
    label: String
    passphrase: String
    coinId: String
  }

  type Mutation {
    createWallet(input: CreateWalletInput!): Wallet! @requireAuth
    updateWallet(id: String!, input: UpdateWalletInput!): Wallet! @requireAuth
    deleteWallet(id: String!): Wallet! @requireAuth
  }
`

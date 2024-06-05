export const schema = gql`
  type Transaction {
    id: String!
    hash: String!
    txType: String!
    amount: Float!
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
    walletId: String!
    wallet: Wallet!
  }

  type Query {
    transactions: [Transaction!]! @requireAuth
    transaction(id: String!): Transaction @requireAuth
  }

  input CreateTransactionInput {
    hash: String!
    txType: String!
    amount: Float!
    deletedAt: DateTime
    walletId: String!
  }

  input UpdateTransactionInput {
    hash: String
    txType: String
    amount: Float
    deletedAt: DateTime
    walletId: String
  }

  type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction! @requireAuth
    updateTransaction(
      id: String!
      input: UpdateTransactionInput!
    ): Transaction! @requireAuth
    deleteTransaction(id: String!): Transaction! @requireAuth
  }
`

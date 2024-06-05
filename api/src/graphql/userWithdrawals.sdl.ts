export const schema = gql`
  type UserWithdrawal {
    id: String!
    userId: String!
    user: User!
    amount: Float!
    currency: String!
    txType: String!
    txBank: String
    txBeneficiary: String
    txNumber: String
    txCountry: String
    txWalletAddress: String
    status: String!
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    userWithdrawals: [UserWithdrawal!]! @requireAuth
    userWithdrawal(id: String!): UserWithdrawal @requireAuth
  }

  input CreateUserWithdrawalInput {
    userId: String!
    amount: Float!
    currency: String!
    txType: String!
    txBank: String
    txBeneficiary: String
    txNumber: String
    txCountry: String
    txWalletAddress: String
    status: String!
    deletedAt: DateTime
  }

  input UpdateUserWithdrawalInput {
    userId: String
    amount: Float
    currency: String
    txType: String
    txBank: String
    txBeneficiary: String
    txNumber: String
    txCountry: String
    txWalletAddress: String
    status: String
    deletedAt: DateTime
  }

  type Mutation {
    createUserWithdrawal(input: CreateUserWithdrawalInput!): UserWithdrawal!
      @requireAuth
    updateUserWithdrawal(
      id: String!
      input: UpdateUserWithdrawalInput!
    ): UserWithdrawal! @requireAuth
    deleteUserWithdrawal(id: String!): UserWithdrawal! @requireAuth
  }
`

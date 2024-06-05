export const schema = gql`
  type UserDeposit {
    id: String!
    userId: String!
    user: User!
    amount: Float!
    txType: String!
    currency: String!
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    userDeposits: [UserDeposit!]! @requireAuth
    userDeposit(id: String!): UserDeposit @requireAuth
  }

  input CreateUserDepositInput {
    userId: String!
    amount: Float!
    txType: String!
    currency: String!
    deletedAt: DateTime
  }

  input UpdateUserDepositInput {
    userId: String
    amount: Float
    txType: String
    currency: String
    deletedAt: DateTime
  }

  type Mutation {
    createUserDeposit(input: CreateUserDepositInput!): UserDeposit! @requireAuth
    updateUserDeposit(
      id: String!
      input: UpdateUserDepositInput!
    ): UserDeposit! @requireAuth
    deleteUserDeposit(id: String!): UserDeposit! @requireAuth
  }
`

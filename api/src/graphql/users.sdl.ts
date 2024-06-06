export const schema = gql`
  type User {
    id: String!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    emailVerifiedAt: DateTime
    lastLoginAt: DateTime
    referrals: [UserReferral]!
    profile: UserProfile
    kyc: UserKYC
    activities: [UserActivity]!
    deposits: [UserDeposit]!
    withdrawals: [UserWithdrawal]!
    tickets: [UserTicket]!
    wallets: [Wallet]!
    reviews: [Review]!
    bought: [Trade]!
    sold: [Trade]!
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    emailVerifiedAt: DateTime
    lastLoginAt: DateTime
    deletedAt: DateTime
  }

  input UpdateUserInput {
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    emailVerifiedAt: DateTime
    lastLoginAt: DateTime
    deletedAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
    verifyUser(token: String!): Boolean! @skipAuth
  }
`

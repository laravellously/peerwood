export const schema = gql`
  type UserReferral {
    id: String!
    userId: String!
    user: User!
    referredBy: String!
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    userReferrals: [UserReferral!]! @requireAuth
    userReferral(id: String!): UserReferral @requireAuth
  }

  input CreateUserReferralInput {
    userId: String!
    referredBy: String!
    deletedAt: DateTime
  }

  input UpdateUserReferralInput {
    userId: String
    referredBy: String
    deletedAt: DateTime
  }

  type Mutation {
    createUserReferral(input: CreateUserReferralInput!): UserReferral!
      @requireAuth
    updateUserReferral(
      id: String!
      input: UpdateUserReferralInput!
    ): UserReferral! @requireAuth
    deleteUserReferral(id: String!): UserReferral! @requireAuth
  }
`
